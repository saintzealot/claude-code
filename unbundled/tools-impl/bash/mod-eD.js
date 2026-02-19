// Module: eD (lazy)
// Dependencies: [F6, Q6, j8, u6, v7, C6, kz, wH, n7, j1, Eq, K2, OR, M3, pb1, jh, rD1, yp, kZ, iv, UM, Y_6, jDA, qPA, tM, V31, wU1, tLA, bG1, RN, LyA, jV6, jG, pFA, JXq, sm, Bc1, zq, G4, q0]
// Lines: 516335-516808 in cli.formatted.js
// ---

  n7();
  jG();
  C6();
  lz();
  OR();
  v7();
  LA();
  iv();
  V31();
  kZ();
  pFA();
  wU1();
  LyA();
  K2();
  UM();
  rD1();
  jDA();
  yp();
  Eq();
  sm();
  jV6();
  Bc1();
  G4();
  u6();
  F6();
  M3();
  tM();
  Y_6();
  qPA();
  wH();
  JXq();
  pFA();
  pb1();
  tLA();
  jh();
  q0();
  Q6();
  zq();
  j8();
  RN();
  bG1();
  kz();
  ((dFA = s(j1(), 1)),
    (RHz = new Set([
      "find",
      "grep",
      "rg",
      "ag",
      "ack",
      "locate",
      "which",
      "whereis",
    ])),
    (yHz = new Set([
      "cat",
      "head",
      "tail",
      "less",
      "more",
      "wc",
      "stat",
      "file",
      "strings",
      "ls",
      "tree",
      "du",
    ])),
    (PXq = new Set(["echo", "true", "false", ":"])),
    (CHz = new Set([
      "mv",
      "cp",
      "rm",
      "mkdir",
      "rmdir",
      "chmod",
      "chown",
      "chgrp",
      "touch",
      "ln",
      "cd",
      "export",
      "unset",
      "wait",
    ])));
  ((IHz = ["sleep"]),
    (Lv6 = $6(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS)),
    (jXq = x.strictObject({
      command: x.string().describe("The command to execute"),
      timeout: x
        .number()
        .optional()
        .describe(`Optional timeout in milliseconds (max ${kv6()})`),
      description: x.string().optional()
        .describe(`Clear, concise description of what this command does in active voice. Never use words like "complex" or "risk" in the description - just describe what it does.

For simple commands (git, npm, standard CLI tools), keep it brief (5-10 words):
- ls → "List files in current directory"
- git status → "Show working tree status"
- npm install → "Install package dependencies"

For commands that are harder to parse at a glance (piped commands, obscure flags, etc.), add enough context to clarify what it does:
- find . -name "*.tmp" -exec rm {} \\; → "Find and delete all .tmp files recursively"
- git reset --hard origin/main → "Discard all local changes and match remote main"
- curl -s url | jq '.data[]' → "Fetch JSON from URL and extract data array elements"`),
      run_in_background: x
        .boolean()
        .optional()
        .describe(
          "Set to true to run this command in the background. Use TaskOutput to read the output later.",
        ),
      dangerouslyDisableSandbox: x
        .boolean()
        .optional()
        .describe(
          "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
        ),
      _simulatedSedEdit: x
        .object({ filePath: x.string(), newContent: x.string() })
        .optional()
        .describe("Internal: pre-computed sed edit result from preview"),
    })),
    (DXq = L6(() =>
      Lv6
        ? jXq.omit({ run_in_background: !0, _simulatedSedEdit: !0 })
        : jXq.omit({ _simulatedSedEdit: !0 }),
    )),
    (xHz = [
      "npm",
      "yarn",
      "pnpm",
      "node",
      "python",
      "python3",
      "go",
      "cargo",
      "make",
      "docker",
      "terraform",
      "webpack",
      "vite",
      "jest",
      "pytest",
      "curl",
      "wget",
      "build",
      "test",
      "serve",
      "watch",
      "dev",
    ]));
  bHz = L6(() =>
    x.object({
      stdout: x.string().describe("The standard output of the command"),
      stderr: x.string().describe("The standard error output of the command"),
      rawOutputPath: x
        .string()
        .optional()
        .describe("Path to raw output file for large MCP tool outputs"),
      interrupted: x.boolean().describe("Whether the command was interrupted"),
      isImage: x
        .boolean()
        .optional()
        .describe("Flag to indicate if stdout contains image data"),
      backgroundTaskId: x
        .string()
        .optional()
        .describe(
          "ID of the background task if command is running in background",
        ),
      backgroundedByUser: x
        .boolean()
        .optional()
        .describe(
          "True if the user manually backgrounded the command with Ctrl+B",
        ),
      dangerouslyDisableSandbox: x
        .boolean()
        .optional()
        .describe("Flag to indicate if sandbox mode was overridden"),
      returnCodeInterpretation: x
        .string()
        .optional()
        .describe(
          "Semantic interpretation for non-error exit codes with special meaning",
        ),
      noOutputExpected: x
        .boolean()
        .optional()
        .describe(
          "Whether the command is expected to produce no output on success",
        ),
      structuredContent: x
        .array(x.any())
        .optional()
        .describe("Structured content blocks from mcp-cli commands"),
    }),
  );
  Kq = {
    name: I4,
    maxResultSizeChars: 30000,
    strict: !0,
    async description({ description: A }) {
      return A || "Run shell command";
    },
    async prompt() {
      return OXq();
    },
    isConcurrencySafe(A) {
      return this.isReadOnly(A);
    },
    isReadOnly(A) {
      let q = ZV6(A.command);
      return XV6(A, q).behavior === "allow";
    },
    isSearchOrReadCommand(A) {
      let q = DXq().safeParse(A);
      if (!q.success) return { isSearch: !1, isRead: !1 };
      return SHz(q.data.command);
    },
    get inputSchema() {
      return DXq();
    },
    get outputSchema() {
      return bHz();
    },
    userFacingName(A) {
      if (!A) return "Bash";
      if (A.command) {
        let q = PG1(A.command);
        if (q) return nG6({ file_path: q.filePath, old_string: "x" });
      }
      return Kl(A) && $6(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR)
        ? "SandboxedBash"
        : "Bash";
    },
    getToolUseSummary(A) {
      if (!A?.command) return null;
      let { command: q, description: K } = A;
      if (K) return K;
      return MY(q, Dh);
    },
    getActivityDescription(A) {
      if (!A?.command) return "Running command";
      return `Running ${A.description ?? MY(A.command, Dh)}`;
    },
    isEnabled() {
      return !0;
    },
    async checkPermissions(A, q) {
      return await cFA(A, q);
    },
    renderToolUseMessage: tQ4,
    renderToolUseRejectedMessage: eQ4,
    renderToolUseProgressMessage: Ag4,
    renderToolUseQueuedMessage: qg4,
    renderToolResultMessage: Kg4,
    mapToolResultToToolResultBlockParam(
      {
        interrupted: A,
        stdout: q,
        stderr: K,
        isImage: Y,
        backgroundTaskId: z,
        backgroundedByUser: w,
        structuredContent: H,
      },
      $,
    ) {
      if (H && H.length > 0)
        return { tool_use_id: $, type: "tool_result", content: H };
      if (Y) {
        let X = q.trim().match(/^data:([^;]+);base64,(.+)$/);
        if (X) {
          let j = X[1],
            D = X[2];
          return {
            tool_use_id: $,
            type: "tool_result",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: j || "image/jpeg",
                  data: D || "",
                },
              },
            ],
          };
        }
      }
      let O = q;
      if (q) ((O = q.replace(/^(\s*\n)+/, "")), (O = O.trimEnd()));
      let _ = K.trim();
      if (A) {
        if (K) _ += uc1;
        _ += "<error>Command was aborted before completion</error>";
      }
      let J = z
        ? `Command ${w ? "was manually backgrounded by user" : "running in background"} with ID: ${z}. Output is being written to: ${Hw(z)}`
        : "";
      return {
        tool_use_id: $,
        type: "tool_result",
        content: [O, _, J].filter(Boolean).join(`
`),
        is_error: A,
      };
    },
    async call(A, q, K, Y, z) {
      if (A._simulatedSedEdit) return await FHz(A._simulatedSedEdit, q, Y);
      let {
          abortController: w,
          readFileState: H,
          getAppState: $,
          setAppState: O,
          setToolJSX: _,
        } = q,
        J = new CD1(),
        X = new CD1(),
        j,
        D = 0,
        M = !1,
        P,
        G = !!q.agentId;
      try {
        let n = QHz({
            input: A,
            abortController: w,
            setAppState: O,
            setToolJSX: _,
            preventCwdChanges: G,
          }),
          r;
        do
          if (((r = await n.next()), !r.done && z)) {
            let V1 = r.value;
            z({
              toolUseID: `bash-progress-${D++}`,
              data: {
                type: "bash_progress",
                output: V1.output,
                fullOutput: V1.fullOutput,
                elapsedTimeSeconds: V1.elapsedTimeSeconds,
                totalLines: V1.totalLines,
                timeoutMs: V1.timeoutMs,
              },
            });
          }
        while (!r.done);
        ((P = r.value), BHz(A.command, P.code, P.stdout));
        let o = P.interrupted && w.signal.reason === "interrupt";
        if (
          (J.append((P.stdout || "").trimEnd() + uc1),
          (j = _Xq(A.command, P.code, P.stdout || "", P.stderr || "")),
          P.stderr && P.stderr.includes(".git/index.lock': File exists"))
        )
          c("tengu_git_index_lock_error", {});
        if (j.isError && !o) {
          if ((X.append(P.stderr.trimEnd() + uc1), P.code !== 0))
            X.append(`Exit code ${P.code}`);
        } else if (N11(A.command) !== null) X.append(P.stderr.trimEnd() + uc1);
        else J.append(P.stderr.trimEnd() + uc1);
        if (!G) {
          let V1 = await $();
          if (lH6(V1.toolPermissionContext)) {
            let Z1 = X.toString();
            (X.clear(), X.append(cH6(Z1)));
          }
        }
        let J1 = b8.annotateStderrWithSandboxFailures(
          A.command,
          P.stderr || "",
        );
        if (j.isError && !o) throw new xC(P.stdout, J1, P.code, P.interrupted);
        M = P.interrupted;
      } finally {
        if (_) _(null);
      }
      let V = J.toString(),
        Z = X.toString();
      {
        let n = i4();
        iy7(A.command, V, n.signal, q.options.isNonInteractiveSession)
          .then(async (r) => {
            for (let o of r) {
              let J1 = vHz(o) ? EHz(o) : kHz(I6(), o);
              try {
                if (!(await b5.validateInput({ file_path: J1 }, q)).result) {
                  H.delete(J1);
                  continue;
                }
                await b5.call({ file_path: J1 }, q);
              } catch (V1) {
                (H.delete(J1), A1(V1));
              }
            }
            c("tengu_bash_tool_haiku_file_paths_read", {
              filePathsExtracted: r.length,
              readFileStateSize: H.size,
              readFileStateValuesCharLength: Zh(H).reduce((o, J1) => {
                let V1 = H.get(J1);
                return o + (V1?.content.length || 0);
              }, 0),
            });
          })
          .catch((r) => {
            if (r instanceof Error && r.message.includes("Request was aborted"))
              return;
            A1(r);
          });
      }
      let N = A.command.split(" ")[0];
      c("tengu_bash_tool_command_executed", {
        command_type: N,
        stdout_length: V.length,
        stderr_length: Z.length,
        exit_code: P.code,
        interrupted: M,
      });
      let T = Fc7(A.command);
      if (T)
        c("tengu_code_indexing_tool_used", {
          tool: T,
          source: "cli",
          success: P.code === 0,
        });
      let k = s_A(V),
        y = s_A(Z),
        B = t_A(k),
        S = void 0,
        m = k,
        u = y,
        U = void 0,
        g = N11(A.command);
      if (g !== null) {
        let n = await gHz(V, A.command, g);
        if (n !== null)
          ((m = n.stdout), (U = n.structuredContent), (S = n.rawOutputPath));
      }
      let b = m;
      if (B) {
        let n = m.trim().match(/^data:([^;]+);base64,(.+)$/);
        if (n && n[1] && n[2]) {
          let r = n[1],
            o = n[2],
            J1 = Buffer.from(o, "base64"),
            V1 = await Gw6(J1, void 0, r);
          b = `data:${V1.mediaType};base64,${V1.base64}`;
        }
      }
      return {
        data: {
          stdout: b,
          stderr: u,
          rawOutputPath: S,
          interrupted: M,
          isImage: B,
          returnCodeInterpretation: j?.message,
          noOutputExpected: hHz(A.command),
          backgroundTaskId: P.backgroundTaskId,
          backgroundedByUser: P.backgroundedByUser,
          structuredContent: U,
          dangerouslyDisableSandbox:
            "dangerouslyDisableSandbox" in A
              ? A.dangerouslyDisableSandbox
              : void 0,
        },
      };
    },
    renderToolUseErrorMessage: Yg4,
  };
