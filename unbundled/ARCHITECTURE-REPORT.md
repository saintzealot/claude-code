# Claude Code CLI v2.1.42 架构逆向分析报告

> 生成时间: 2026-02-19
> 源文件: `@anthropic-ai/claude-code` npm 包中的 `cli.js`
> 工具: Node.js unbundle 脚本 + prettier

---

## 1. 概览

Claude Code CLI 将所有源码打包为单个 `cli.js` 文件（~11MB, 7560 行），使用 esbuild 风格的自定义打包器。

| 指标 | 数值 |
|------|------|
| 文件大小 | ~11 MB |
| 原始行数 | 7,560 行（minified） |
| 格式化后行数 | ~420,000 行 |
| 总模块数 | **4,600** |
| Lazy 模块 | 2,317 |
| CommonJS 模块 | 2,283（1,320 单参数 + 963 双参数） |
| 已识别分类 | 154 个模块 |
| 未分类 | 4,446 个模块 |
| 版本 | 2.1.42 |
| 构建时间 | 2026-02-13T18:55:32Z |

---

## 2. 打包格式详解

### 2.1 运行时辅助函数

文件头部定义了模块系统的核心函数：

```javascript
// 惰性加载器 - 第一次调用执行初始化函数，之后返回缓存结果
var v = (A, q) => () => (A && (q = A(A = 0)), q);

// CommonJS 模块包装器 - 延迟执行工厂函数，返回 exports
var R = (A, q) => () => (q || A((q = { exports: {} }).exports, q), q.exports);

// ESM 默认导出适配器
var s = (A, q, K) => {
  K = A != null ? Object.create(Object.getPrototypeOf(A)) : {};
  let Y = q || !A || !A.__esModule
    ? Object.defineProperty(K, "default", { value: A, enumerable: true })
    : K;
  for (let z of Object.getOwnPropertyNames(A))
    if (!Object.prototype.hasOwnProperty.call(Y, z))
      Object.defineProperty(Y, z, { get: () => A[z], enumerable: true });
  return Y;
};

// ESM 兼容包装器（WeakMap 缓存）
var WC = (A) => { /* ... */ };

// 批量导出辅助
var SA = (A, q) => { /* ... */ };
```

### 2.2 两种模块类型

**Lazy 模块**（2,317 个）:
```javascript
var MODULE_ID = v(() => {
  // 依赖初始化
  dep1();
  dep2();
  // 模块逻辑...
  someVar = "value";
});
```
- 通过 `v()` 包装，首次调用时执行
- 通过函数调用声明依赖（如 `dep1()`）
- 变量赋值（非 exports 模式）

**CommonJS 模块**（2,283 个）:
```javascript
var MODULE_ID = R((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SomeName = void 0;
  // 模块逻辑...
  exports.SomeName = SomeClass;
});
```
- 通过 `R()` 包装，标准 CJS exports 模式
- 部分有 2 个参数: `R((exports, module) => { ... })`

### 2.3 模块依赖机制

```javascript
var moduleA = v(() => {
  // 声明依赖：调用其他模块的初始化函数
  moduleB();   // 确保 moduleB 已初始化
  moduleC();   // 确保 moduleC 已初始化

  // 使用 moduleB/moduleC 中导出的全局变量
  result = someGlobalFromB + someGlobalFromC;
});
```

依赖通过**直接函数调用**建立执行顺序，被依赖模块的变量通过闭包作用域共享。

---

## 3. 入口点分析

```javascript
// 环境设置
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  process.env.NODE_OPTIONS = "--max-old-space-size=8192";
}

async function sNz() {
  let args = process.argv.slice(2);

  // 1. --version / -v / -V → 打印版本号
  // 2. --mcp-cli → MCP CLI 模式
  // 3. --ripgrep → 内置 ripgrep
  // 4. --claude-in-chrome-mcp → Chrome MCP 模式
  // 5. --chrome-native-host → Chrome 原生消息主机
  // 6. --tmux → Tmux 模式
  // 7. --update / --upgrade → 自动更新
  // 8. 嵌套检测：CLAUDECODE=1 时拒绝启动
  // 9. 正常启动 → main()
}
sNz();
```

**关键启动路径**:
- `profileCheckpoint()` → 性能度量
- `startCapturingEarlyInput()` → 提前捕获标准输入
- `main()` → 主程序入口

---

## 4. 模块分类

### 4.1 第三方库（vendor/）— 99 个模块

| 库 | 模块数 | 用途 |
|----|--------|------|
| **RxJS** | 50+ | 响应式编程，事件流处理 |
| **React** | 5 | UI 渲染基础 |
| **Ink** | 10+ | 终端 React 渲染框架 |
| **Zod** | 1 (大) | 运行时类型校验 |
| **Commander** | 6 | 命令行参数解析 |
| **Marked** | 3 | Markdown 解析 |
| **Chalk** | 1 | 终端颜色 |
| **Yoga** | 1 | Flexbox 布局引擎 |
| **Sentry** | 3 | 错误监控 |

### 4.2 核心业务（core/）— 46 个模块

| 子目录 | 模块数 | 内容 |
|--------|--------|------|
| **hooks/** | 9 | Hook 系统（PreToolUse, PostToolUse 等事件） |
| **permissions/** | 1 | 权限控制系统 |
| **mcp/** | 2 | MCP（Model Context Protocol）服务器/客户端 |
| **auth/** | 5 | 认证（OAuth、API Key、账户管理） |
| **api/** | 3 | API 客户端（Claude API 调用） |
| **config/** | 5 | 配置管理 |
| **conversation/** | 12 | 对话管理、消息处理 |
| **telemetry/** | 4 | 遥测与分析 |

### 4.3 工具实现（tools-impl/）— 9 个模块

| 子目录 | 模块数 | 内容 |
|--------|--------|------|
| **bash/** | 3 | Bash 命令执行工具 |
| **notebook/** | 6 | Jupyter Notebook 编辑工具 |

### 4.4 未分类（unknown/）— 4,446 个模块

大部分为内部实现细节、polyfill、Node.js 内置模块包装等。可通过 `module-map.json` 的 `hintsSample` 字段进一步识别。

---

## 5. Hooks 系统深入分析

Hooks 是 Claude Code 最重要的扩展机制之一，位于 `core/hooks/` 目录。

### 5.1 Hook 事件类型

从 `mod-eQ.js`（权限与 Hook Schema 定义）中可以看到：

```javascript
// Hook 规则结构（Zod schema）
{
  allow: [{ tool: "Bash", command: "npm test" }],
  deny: [{ tool: "Bash", command: "rm -rf" }],
  ask: [...]
}
```

### 5.2 Hook 生命周期

从 `mod-ZZ6.js`（核心 Hook 处理器）中可看出典型的 Hook 执行流程：
1. **PreToolUse** — 工具执行前触发（可拦截/修改）
2. **PostToolUse** — 工具执行后触发（可审计/记录）

### 5.3 相关模块

| 模块 | 行数 | 功能推测 |
|------|------|----------|
| mod-ZZ6.js | 763 | 核心 Hook 处理器 |
| mod-rF4.js | 910 | Token 统计与 Schema 定义 |
| mod-eQ.js | 465 | Hook/Permission Schema（Zod） |
| mod-kJq.js | 320 | Hook 执行逻辑 |
| mod-EPq.js | 144 | Hook 注册 |
| mod-I$8.js | 24 | Hook 类型定义 |
| mod-mHq.js | 20 | Hook 工具函数 |
| mod-r$8.js | 107 | Hook 配置 |
| mod-xGA.js | 94 | Hook 工具函数 |

---

## 6. 关键发现

### 6.1 版本与构建信息
```javascript
{
  VERSION: "2.1.42",
  BUILD_TIME: "2026-02-13T18:55:32Z",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
}
```

### 6.2 嵌套会话保护
```javascript
if (process.env.CLAUDECODE === "1" && !args.some(w => w.startsWith("--team-name"))) {
  console.error("Error: Claude Code cannot be launched inside another Claude Code session.");
  process.exit(1);
}
```
- 通过环境变量 `CLAUDECODE=1` 检测嵌套
- `--team-name` 参数可绕过此检查

### 6.3 远程模式内存配置
```javascript
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  process.env.NODE_OPTIONS = "--max-old-space-size=8192"; // 8GB
}
```

### 6.4 多种运行模式
- **标准 CLI** — 默认交互模式
- **MCP CLI** — `--mcp-cli` 作为 MCP 服务器
- **Ripgrep** — `--ripgrep` 内置搜索引擎
- **Chrome MCP** — `--claude-in-chrome-mcp` 浏览器扩展通信
- **Chrome Native Host** — `--chrome-native-host` 原生消息
- **Tmux** — `--tmux` 终端复用

---

## 7. 如何使用本报告

### 查找特定功能的模块
```bash
# 在 module-map.json 中搜索
grep -l "你感兴趣的关键词" unbundled/core/**/*.js unbundled/vendor/**/*.js

# 查看模块依赖
cat module-map.json | jq '.modules["模块ID"]'
```

### 在本地重新运行 unbundle
```bash
# 安装依赖
npm install -g prettier

# 运行脚本（需要 Node.js 18+）
node unbundled/tools/unbundle.mjs
```

### 目录结构
```
unbundled/
├── backup/                    # 原始文件备份
│   ├── cli.js.original        # 11MB 原始打包文件
│   └── cli.formatted.js       # 格式化后（~420K 行）
├── tools/
│   └── unbundle.mjs           # 反向拆包脚本（可重新运行）
├── runtime/
│   └── preamble.js            # 运行时辅助函数
├── vendor/                    # 第三方库（99 模块）
├── core/                      # 核心业务（46 模块）
├── tools-impl/                # 工具实现（9 模块）
├── unknown/                   # 未分类（4,446 模块）
├── entry.js                   # 入口函数
├── module-map.json            # 完整依赖图（94K 行）
└── ARCHITECTURE-REPORT.md     # 本报告
```

---

## 8. 局限性

1. **变量名不可恢复** — 混淆后的变量名（如 `Zb`, `$L9`）无法还原为原始名称
2. **模块分类覆盖有限** — 仅 154/4600 (3.3%) 的模块被分类，其余需人工分析
3. **无 source map** — Anthropic 未发布 source map，完全依赖启发式分析
4. **字符串是主要线索** — 所有分类都基于保留的字符串常量
5. **依赖图可能不完整** — 某些动态依赖（`Promise.resolve().then()`）可能未被捕获
