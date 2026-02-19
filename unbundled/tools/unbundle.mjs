#!/usr/bin/env node

/**
 * Claude Code CLI Unbundler
 *
 * Parses the prettier-formatted cli.js and splits it into individual module files.
 * Handles two module wrapper patterns:
 *   - Lazy: var NAME = v(() => { ... });
 *   - CJS:  var NAME = R((exports) => { ... });
 *          var NAME = R((exports, module) => { ... });
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const INPUT = join(ROOT, "backup", "cli.formatted.js");
const OUTPUT = ROOT;

// ── Naming heuristics ────────────────────────────────────────────────

const VENDOR_PATTERNS = [
  // [category, subdir, testFn(code, hints, exports)]
  [
    "vendor/rxjs",
    (c, h, e) =>
      e.some((x) =>
        /^(Observable|Subject|Subscriber|Subscription|pipe|merge|concat|switchMap|map|filter|tap|take|first|last|skip|scan|reduce|of|from|timer|interval|combineLatest|forkJoin|BehaviorSubject|ReplaySubject|AsyncSubject|share|shareReplay|publishReplay|refCount|catchError|retry|throwError|EMPTY|NEVER|scheduled|observeOn|subscribeOn|asyncScheduler|queueScheduler|asapScheduler|animationFrameScheduler|Notification|OuterSubscriber|InnerSubscriber|SubjectSubscription|GroupByObservable|ConnectableObservable)$/.test(
          x,
        ),
      ) ||
      h.some((x) => /rxjs/i.test(x)) ||
      c.includes("_subscribe(") ||
      (c.includes("Subscriber") && c.includes("destination")),
  ],
  [
    "vendor/react",
    (c, h, e) =>
      h.some((x) => /^react(-dom)?$/.test(x)) ||
      e.some((x) =>
        /^(createElement|useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect|Component|PureComponent|Fragment|StrictMode|Suspense|lazy|memo|forwardRef|createContext|createRef|cloneElement|isValidElement|Children)$/.test(
          x,
        ),
      ),
  ],
  [
    "vendor/ink",
    (c, h, e) =>
      h.some((x) => /^ink$/.test(x)) ||
      e.some((x) =>
        /^(Box|Text|render|useInput|useApp|useFocus|useFocusManager|useStdin|useStdout|useStderr|Newline|Spacer|Static|Transform)$/.test(
          x,
        ),
      ),
  ],
  [
    "vendor/zod",
    (c, h, e) =>
      e.some((x) => /^(ZodType|ZodString|ZodNumber|ZodBoolean|ZodObject|ZodArray|ZodEnum|ZodUnion|ZodOptional|ZodNullable|z)$/.test(x)) ||
      h.some((x) => /^zod$/i.test(x)),
  ],
  [
    "vendor/chalk",
    (c, h, e) =>
      (h.some((x) => /chalk/i.test(x)) && c.includes("ansi")) ||
      e.some((x) => /^(chalk|Chalk|chalkStderr)$/.test(x)),
  ],
  [
    "vendor/yoga",
    (c, h, e) =>
      h.some((x) => /yoga/i.test(x)) ||
      e.some((x) => /^(ALIGN_|DIRECTION_|DISPLAY_|EDGE_|FLEX_|JUSTIFY_|OVERFLOW_|POSITION_|WRAP_)/.test(x)),
  ],
  [
    "vendor/sentry",
    (c, h, e) =>
      h.some((x) => /sentry/i.test(x)) ||
      e.some((x) => /^(captureException|captureMessage|withScope|configureScope|init|Hub|Scope)$/.test(x)),
  ],
  [
    "vendor/semver",
    (c, h, e) =>
      e.some((x) => /^(satisfies|valid|gt|gte|lt|lte|eq|neq|cmp|coerce|clean|inc|diff|major|minor|patch|prerelease|compare|rcompare|SemVer|Range)$/.test(x)),
  ],
  [
    "vendor/commander",
    (c, h, e) =>
      e.some((x) => /^(Command|program|Option|Argument|createCommand|createOption|createArgument)$/.test(x)) ||
      h.some((x) => /commander/i.test(x)),
  ],
  [
    "vendor/diff",
    (c, h, e) =>
      e.some((x) => /^(diffLines|diffWords|diffChars|createPatch|applyPatch|structuredPatch|parsePatch)$/.test(x)),
  ],
  [
    "vendor/marked",
    (c, h, e) =>
      h.some((x) => /marked/i.test(x)) ||
      e.some((x) => /^(marked|Lexer|Parser|Renderer|Tokenizer)$/.test(x)),
  ],
  [
    "vendor/fast-xml-parser",
    (c, h, e) =>
      h.some((x) => /fast-xml-parser/i.test(x)) ||
      e.some((x) => /^(XMLParser|XMLBuilder|XMLValidator)$/.test(x)),
  ],
  [
    "vendor/strip-ansi",
    (c, h, e) =>
      e.some((x) => /^(stripAnsi|ansiRegex|default)$/.test(x)) &&
      c.includes("ansi"),
  ],
  [
    "vendor/wrap-ansi",
    (c, h, e) => e.some((x) => /^wrapAnsi/.test(x)),
  ],
  [
    "vendor/cli-truncate",
    (c, h, e) => e.some((x) => /^(cliTruncate|default)$/.test(x)) && c.includes("truncat"),
  ],
  [
    "vendor/figures",
    (c, h, e) => e.some((x) => /^(figures|mainSymbols|fallbackSymbols)$/.test(x)),
  ],
  [
    "vendor/p-limit",
    (c, h, e) => e.some((x) => /^(pLimit|default)$/.test(x)) && c.includes("concurrency"),
  ],
  [
    "vendor/cosmiconfig",
    (c, h, e) =>
      h.some((x) => /cosmiconfig/i.test(x)) ||
      e.some((x) => /^(cosmiconfig|cosmiconfigSync)$/.test(x)),
  ],
];

const CORE_PATTERNS = [
  [
    "core/hooks",
    (c, h, e) =>
      h.some((x) =>
        /^(PreToolUse|PostToolUse|Notification|Stop|SubagentStop|PreCompact)$/.test(
          x,
        ),
      ) ||
      (c.includes("hook") && c.includes("event")),
  ],
  [
    "core/permissions",
    (c, h, e) =>
      h.some((x) =>
        /^(permission|Permission|allowedTools|toolPolicy)$/i.test(x),
      ) ||
      e.some((x) => /permission/i.test(x)),
  ],
  [
    "core/mcp",
    (c, h, e) =>
      h.some((x) => /^(McpServer|mcp|MCP_|mcpServers)$/i.test(x)) ||
      e.some((x) => /mcp/i.test(x)),
  ],
  [
    "core/conversation",
    (c, h, e) =>
      h.some((x) => /^(conversation|message|Message|turn|Turn)$/i.test(x)) &&
      !h.some((x) => /rxjs|react/i.test(x)),
  ],
  [
    "core/config",
    (c, h, e) =>
      h.some((x) =>
        /^(CLAUDE\.md|settings\.json|\.claude|globalConfig|projectConfig)$/.test(
          x,
        ),
      ) ||
      e.some((x) => /^(getGlobalConfig|getProjectConfig|readSettings)$/.test(x)),
  ],
  [
    "core/api",
    (c, h, e) =>
      h.some((x) =>
        /^(anthropic|claude-3|claude-opus|claude-sonnet|claude-haiku|api\.anthropic|x-api-key)$/i.test(
          x,
        ),
      ),
  ],
  [
    "core/telemetry",
    (c, h, e) =>
      h.some((x) => /^(telemetry|analytics|segment|amplitude|statsig|tengu)$/i.test(x)) ||
      e.some((x) => /telemetry|analytics/i.test(x)),
  ],
  [
    "core/auth",
    (c, h, e) =>
      h.some((x) =>
        /^(oauth|token|apiKey|api_key|refresh_token|access_token|credential)$/i.test(
          x,
        ),
      ),
  ],
];

const TOOLS_PATTERNS = [
  [
    "tools-impl/bash",
    (c, h) =>
      h.some((x) => /^Bash$/.test(x)) &&
      (c.includes("spawn") || c.includes("exec")),
  ],
  [
    "tools-impl/read",
    (c, h) =>
      h.some((x) => /^Read$/.test(x)) && c.includes("readFile"),
  ],
  [
    "tools-impl/write",
    (c, h) =>
      h.some((x) => /^Write$/.test(x)) && c.includes("writeFile"),
  ],
  [
    "tools-impl/edit",
    (c, h) =>
      h.some((x) => /^Edit$/.test(x)) &&
      (c.includes("old_string") || c.includes("new_string")),
  ],
  [
    "tools-impl/grep",
    (c, h) =>
      h.some((x) => /^Grep$/.test(x)) && c.includes("ripgrep"),
  ],
  [
    "tools-impl/glob",
    (c, h) =>
      h.some((x) => /^Glob$/.test(x)) && c.includes("glob"),
  ],
  [
    "tools-impl/notebook",
    (c, h) =>
      h.some((x) => /^NotebookEdit$/.test(x)) || h.some((x) => /\.ipynb/.test(x)),
  ],
  [
    "tools-impl/web",
    (c, h) =>
      h.some((x) => /^(WebFetch|WebSearch)$/.test(x)),
  ],
  [
    "tools-impl/task",
    (c, h) =>
      h.some((x) => /^Task$/.test(x)) && c.includes("subagent"),
  ],
  [
    "tools-impl/todo",
    (c, h) =>
      h.some((x) => /^TodoWrite$/.test(x)),
  ],
];

// ── Parser ───────────────────────────────────────────────────────────

/**
 * Character-by-character state machine for counting braces while skipping
 * strings, template literals (with nested ${...}), comments, and regex.
 */
class BraceCounter {
  constructor() {
    this.depth = 0;
    this.state = "NORMAL"; // NORMAL, STR_SINGLE, STR_DOUBLE, TEMPLATE, COMMENT_LINE, COMMENT_BLOCK, REGEX
    this.templateDepthStack = []; // track ${...} nesting in template literals
    this.prevSignificant = ";"; // track last significant char for regex detection
  }

  /**
   * Determine if a `/` starts a regex or is division.
   * Regex follows: = ( , : [ ! & | ^ ~ + - * % < > ? ; { newline-start
   * Division follows: ) ] identifier digit
   */
  _isRegexStart() {
    const p = this.prevSignificant;
    if (!p) return true;
    // After these chars, `/` starts a regex
    return "=(:,[!&|^~+-*%<>?;{}".includes(p);
  }

  /**
   * Process a single line. Returns the brace depth after processing.
   */
  processLine(line) {
    const len = line.length;
    for (let i = 0; i < len; i++) {
      const ch = line[i];
      const next = i + 1 < len ? line[i + 1] : "";

      switch (this.state) {
        case "NORMAL":
          if (ch === " " || ch === "\t" || ch === "\r") continue; // skip whitespace (don't update prevSignificant)
          if (ch === "/" && next === "/") {
            return this.depth; // rest of line is comment, stop processing
          }
          if (ch === "/" && next === "*") {
            this.state = "COMMENT_BLOCK";
            i++; // skip *
            continue;
          }
          if (ch === "/" && this._isRegexStart()) {
            this.state = "REGEX";
            continue;
          }
          if (ch === '"') {
            this.state = "STR_DOUBLE";
            continue;
          }
          if (ch === "'") {
            this.state = "STR_SINGLE";
            continue;
          }
          if (ch === "`") {
            this.state = "TEMPLATE";
            continue;
          }
          if (ch === "{") {
            this.depth++;
            this.prevSignificant = ch;
          } else if (ch === "}") {
            // Check if we're closing a ${...} in a template literal
            if (this.templateDepthStack.length > 0) {
              const top = this.templateDepthStack[this.templateDepthStack.length - 1];
              if (this.depth === top) {
                // Closing the ${...} expression, undo the depth++ from ${ entry
                this.templateDepthStack.pop();
                this.depth--;
                this.state = "TEMPLATE";
                continue;
              }
            }
            this.depth--;
            this.prevSignificant = ch;
          } else {
            this.prevSignificant = ch;
          }
          break;

        case "REGEX":
          if (ch === "\\") {
            i++; // skip escaped char
          } else if (ch === "[") {
            // Character class - skip until ]
            i++;
            while (i < len) {
              if (line[i] === "\\") i++;
              else if (line[i] === "]") break;
              i++;
            }
          } else if (ch === "/") {
            // End of regex, skip flags
            while (i + 1 < len && /[gimsuy]/.test(line[i + 1])) i++;
            this.state = "NORMAL";
            this.prevSignificant = "/";
          }
          break;

        case "STR_DOUBLE":
          if (ch === "\\") {
            i++; // skip escaped char
          } else if (ch === '"') {
            this.state = "NORMAL";
            this.prevSignificant = '"';
          }
          break;

        case "STR_SINGLE":
          if (ch === "\\") {
            i++; // skip escaped char
          } else if (ch === "'") {
            this.state = "NORMAL";
            this.prevSignificant = "'";
          }
          break;

        case "TEMPLATE":
          if (ch === "\\") {
            i++; // skip escaped char
          } else if (ch === "`") {
            this.state = "NORMAL";
            this.prevSignificant = "`";
          } else if (ch === "$" && next === "{") {
            // Entering ${...} expression - push current depth + 1
            i++; // skip {
            this.depth++;
            this.templateDepthStack.push(this.depth);
            this.state = "NORMAL";
          }
          break;

        case "COMMENT_BLOCK":
          if (ch === "*" && next === "/") {
            this.state = "NORMAL";
            i++; // skip /
          }
          break;
      }
    }
    // For line comments, state resets to NORMAL on next line
    if (this.state === "COMMENT_LINE") {
      this.state = "NORMAL";
    }
    return this.depth;
  }
}

function parseFormatted(text) {
  const lines = text.split("\n");
  const modules = [];
  const moduleIds = new Set();

  // Regex for module start
  const lazyRe = /^var\s+([a-zA-Z0-9_$]+)\s*=\s*v\(\(\)\s*=>\s*\{/;
  const cjsRe = /^var\s+([a-zA-Z0-9_$]+)\s*=\s*R\(\(([^)]*)\)\s*=>\s*\{/;

  // First pass: collect all module IDs for dependency tracking
  for (const line of lines) {
    let m = lazyRe.exec(line);
    if (m) {
      moduleIds.add(m[1]);
      continue;
    }
    m = cjsRe.exec(line);
    if (m) {
      moduleIds.add(m[1]);
    }
  }

  console.log(`Found ${moduleIds.size} module IDs in first pass`);

  // Second pass: extract modules using state machine brace counter
  let preambleEnd = -1;
  let i = 0;
  let pendingVarDecl = [];

  while (i < lines.length) {
    const line = lines[i];

    // Check for standalone var declarations that precede modules
    if (/^var\s+[a-zA-Z0-9_$,\s]+;$/.test(line)) {
      pendingVarDecl.push(line);
      i++;
      continue;
    }

    let match = lazyRe.exec(line);
    let type = "lazy";
    let params = null;

    if (!match) {
      match = cjsRe.exec(line);
      type = "cjs";
      if (match) params = match[2];
    }

    if (match) {
      if (preambleEnd === -1) {
        preambleEnd = i - pendingVarDecl.length;
      }

      const id = match[1];
      const startLine = i;
      const preDecls = [...pendingVarDecl];
      pendingVarDecl = [];

      // Use state machine brace counter
      const counter = new BraceCounter();
      let moduleLines = [];
      let j = i;
      let foundEnd = false;

      while (j < lines.length) {
        const mline = lines[j];
        moduleLines.push(mline);
        counter.processLine(mline);

        // Module ends when depth returns to 0 after processing the opening line
        if (j > i && counter.depth === 0) {
          foundEnd = true;
          break;
        }
        j++;
      }

      if (!foundEnd) {
        console.warn(`Warning: Module ${id} (line ${startLine + 1}) never closed!`);
      }

      const endLine = j;
      const innerLines = moduleLines.slice(1, -1);
      const code = innerLines.join("\n");

      modules.push({
        id,
        type,
        params: params || null,
        startLine: startLine + 1, // 1-based
        endLine: endLine + 1,
        preDecls,
        code,
        fullCode:
          (preDecls.length ? preDecls.join("\n") + "\n" : "") +
          moduleLines.join("\n"),
      });

      i = endLine + 1;
    } else {
      if (preambleEnd === -1) {
        pendingVarDecl = [];
      } else {
        // Between modules - non-module code, reset pending vars
        pendingVarDecl = [];
      }
      i++;
    }
  }

  // Extract preamble and epilogue
  const preamble = lines.slice(0, preambleEnd).join("\n");

  const lastModule = modules[modules.length - 1];
  const epilogueStart = lastModule ? lastModule.endLine : 0;
  const epilogue = lines.slice(epilogueStart).join("\n");

  return { modules, preamble, epilogue, moduleIds };
}

// ── Analysis ─────────────────────────────────────────────────────────

function extractStrings(code) {
  const strings = [];
  // Match double-quoted, single-quoted strings
  const re = /(?<![\\])["']([^"'\\]{2,}?)["']/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    const s = m[1].trim();
    if (s.length >= 2 && s.length <= 200 && !/^\s+$/.test(s)) {
      strings.push(s);
    }
  }
  // Also match template literal parts (simplified)
  const tmplRe = /`([^`\\]{2,}?)`/g;
  while ((m = tmplRe.exec(code)) !== null) {
    const s = m[1].trim();
    if (s.length >= 2 && s.length <= 200 && !/^\s+$/.test(s) && !s.includes("${")) {
      strings.push(s);
    }
  }
  return [...new Set(strings)];
}

function extractExports(code, params) {
  if (!params) return [];
  const exportObj = params.split(",")[0].trim();
  const re = new RegExp(`${escapeRegExp(exportObj)}\\.([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*=`, "g");
  const exports = new Set();
  let m;
  while ((m = re.exec(code)) !== null) {
    if (m[1] !== "__esModule") exports.add(m[1]);
  }
  return [...exports];
}

function extractDependencies(code, moduleIds) {
  const deps = new Set();
  // Look for moduleId() calls - these are dependency invocations
  for (const id of moduleIds) {
    // Match exact function call: id() at word boundary
    const re = new RegExp(`\\b${escapeRegExp(id)}\\(\\)`, "g");
    if (re.test(code)) {
      deps.add(id);
    }
  }
  return [...deps];
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── Naming ───────────────────────────────────────────────────────────

function classifyModule(code, hints, exports) {
  // Try vendor patterns first
  for (const [dir, test] of VENDOR_PATTERNS) {
    if (test(code, hints, exports)) return dir;
  }
  // Try core patterns
  for (const [dir, test] of CORE_PATTERNS) {
    if (test(code, hints, exports)) return dir;
  }
  // Try tools patterns
  for (const [dir, test] of TOOLS_PATTERNS) {
    if (test(code, hints, exports)) return dir;
  }
  return null;
}

function generateFileName(mod, classification) {
  const { id, exports: exportNames } = mod;

  if (exportNames && exportNames.length > 0 && exportNames.length <= 3) {
    // Use export names for the file name
    const name = exportNames
      .slice(0, 2)
      .map((e) => camelToKebab(e))
      .join("-");
    return `${name}--${id}`;
  }

  if (exportNames && exportNames.length > 3) {
    // Use first export name
    return `${camelToKebab(exportNames[0])}--${id}`;
  }

  // Fallback: use the module ID
  return `mod-${id}`;
}

function camelToKebab(s) {
  return s
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 40);
}

// ── Output ───────────────────────────────────────────────────────────

function writeModule(mod, dir, fileName) {
  const fullDir = join(OUTPUT, dir);
  mkdirSync(fullDir, { recursive: true });

  const header = [
    `// Module: ${mod.id} (${mod.type})`,
    mod.deps.length ? `// Dependencies: [${mod.deps.join(", ")}]` : null,
    mod.exports.length ? `// Exports: ${mod.exports.join(", ")}` : null,
    mod.preDecls.length
      ? `// Pre-declarations: ${mod.preDecls.map((d) => d.trim()).join(" | ")}`
      : null,
    `// Lines: ${mod.startLine}-${mod.endLine} in cli.formatted.js`,
    `// ---`,
  ]
    .filter(Boolean)
    .join("\n");

  const content = `${header}\n\n${mod.preDecls.length ? mod.preDecls.join("\n") + "\n\n" : ""}${mod.code}\n`;

  const filePath = join(fullDir, `${fileName}.js`);
  writeFileSync(filePath, content, "utf8");
  return filePath.replace(OUTPUT + "/", "");
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  console.log("=== Claude Code CLI Unbundler ===\n");

  // Read formatted file
  console.log(`Reading: ${INPUT}`);
  const text = readFileSync(INPUT, "utf8");
  console.log(`File size: ${(text.length / 1024 / 1024).toFixed(1)} MB, ${text.split("\n").length} lines\n`);

  // Parse
  console.log("Parsing modules...");
  const { modules, preamble, epilogue, moduleIds } = parseFormatted(text);
  console.log(`Parsed ${modules.length} modules (${[...moduleIds].length} unique IDs)\n`);

  // Analyze each module
  console.log("Analyzing modules...");
  for (const mod of modules) {
    mod.hints = extractStrings(mod.code);
    mod.exports = mod.type === "cjs" ? extractExports(mod.code, mod.params) : [];
    mod.deps = extractDependencies(mod.code, moduleIds);
  }

  // Classify and write
  console.log("Classifying and writing modules...\n");

  const stats = {
    total: modules.length,
    lazy: 0,
    cjs: 0,
    vendor: 0,
    core: 0,
    tools: 0,
    unknown: 0,
  };

  const moduleMap = {};
  const usedFileNames = new Set();

  for (const mod of modules) {
    if (mod.type === "lazy") stats.lazy++;
    else stats.cjs++;

    const classification = classifyModule(mod.code, mod.hints, mod.exports);
    let dir, fileName;

    if (classification) {
      dir = classification;
      if (classification.startsWith("vendor/")) stats.vendor++;
      else if (classification.startsWith("core/")) stats.core++;
      else if (classification.startsWith("tools-impl/")) stats.tools++;
    } else {
      dir = "unknown";
      stats.unknown++;
    }

    fileName = generateFileName(mod, classification);

    // Ensure unique filenames
    let finalName = fileName;
    let counter = 2;
    while (usedFileNames.has(`${dir}/${finalName}`)) {
      finalName = `${fileName}-${counter}`;
      counter++;
    }
    usedFileNames.add(`${dir}/${finalName}`);

    const relPath = writeModule(mod, dir, finalName);

    moduleMap[mod.id] = {
      file: relPath,
      type: mod.type,
      deps: mod.deps,
      exports: mod.exports,
      hintsSample: mod.hints.slice(0, 10),
      lines: [mod.startLine, mod.endLine],
    };
  }

  // Write preamble
  mkdirSync(join(OUTPUT, "runtime"), { recursive: true });
  writeFileSync(
    join(OUTPUT, "runtime", "preamble.js"),
    `// Runtime preamble - bundler helper functions (v, R, SA, s, WC, etc.)\n// ---\n\n${preamble}\n`,
    "utf8",
  );

  // Write epilogue/entry
  writeFileSync(
    join(OUTPUT, "entry.js"),
    `// Entry point - sNz() function and startup code\n// ---\n\n${epilogue}\n`,
    "utf8",
  );

  // Write module map
  const mapData = {
    version: "2.1.42",
    generatedAt: new Date().toISOString(),
    sourceFile: "cli.js",
    stats: {
      ...stats,
      named: stats.total - stats.unknown,
    },
    modules: moduleMap,
  };

  writeFileSync(
    join(OUTPUT, "module-map.json"),
    JSON.stringify(mapData, null, 2),
    "utf8",
  );

  // Print summary
  console.log("=== Summary ===");
  console.log(`Total modules: ${stats.total}`);
  console.log(`  Lazy (v): ${stats.lazy}`);
  console.log(`  CJS  (R): ${stats.cjs}`);
  console.log(`Classification:`);
  console.log(`  Vendor:  ${stats.vendor}`);
  console.log(`  Core:    ${stats.core}`);
  console.log(`  Tools:   ${stats.tools}`);
  console.log(`  Unknown: ${stats.unknown}`);
  console.log(`  Named:   ${stats.total - stats.unknown} (${((stats.total - stats.unknown) / stats.total * 100).toFixed(1)}%)`);
  console.log(`\nOutput: ${OUTPUT}`);
  console.log(`Module map: ${join(OUTPUT, "module-map.json")}`);
  console.log("\nDone!");
}

main();
