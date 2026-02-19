// Module: Lj6 (lazy)
// Dependencies: [Z6, u6, r61, wH, n7, j1, m9, WH, Ev, hz, BW, oD1, kZ, ps, pt7, AP, ns, qI, C31, JE, lW6, it, aLA, tLA, wg4, xRA, PP, vE, F_, T8, mq]
// Lines: 399633-400307 in cli.formatted.js
// ---

  r61();
  n7();
  $M();
  F_();
  T8();
  pt7();
  AP();
  ns();
  wH();
  LA();
  m9();
  u6();
  it();
  BW();
  T8();
  lW6();
  ps();
  kZ();
  JE();
  C31();
  WH();
  aLA();
  qI();
  mq();
  tLA();
  Z6();
  vE();
  oD1();
  wg4();
  hz();
  xRA();
  Ev();
  PP();
  ((mRA = s(j1(), 1)),
    (WG6 = $6(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS)),
    (BCY = x.object({
      description: x
        .string()
        .describe("A short (3-5 word) description of the task"),
      prompt: x.string().describe("The task for the agent to perform"),
      subagent_type: x
        .string()
        .describe("The type of specialized agent to use for this task"),
      model: x.enum(["sonnet", "opus", "haiku"]).optional().describe(uCY),
      resume: x
        .string()
        .optional()
        .describe(
          "Optional agent ID to resume from. If provided, the agent will continue from the previous execution transcript.",
        ),
      run_in_background: x
        .boolean()
        .optional()
        .describe(
          `Set to true to run this agent in the background. The tool result will include an output_file path - use ${_q} tool or ${I4} tail to check on output.`,
        ),
      max_turns: x
        .number()
        .int()
        .positive()
        .optional()
        .describe(
          "Maximum number of agentic turns (API round-trips) before stopping. Used internally for warmup.",
        ),
    })),
    (mCY = x.object({
      name: x.string().optional().describe("Name for the spawned agent"),
      team_name: x
        .string()
        .optional()
        .describe(
          "Team name for spawning. Uses current team context if omitted.",
        ),
      mode: T$8.optional().describe(
        'Permission mode for spawned teammate (e.g., "plan" to require plan approval).',
      ),
    })),
    (_U4 = BCY.merge(mCY)),
    (cLA = L6(() => (WG6 ? _U4.omit({ run_in_background: !0 }) : _U4))),
    (FCY = x.object({
      agentId: x.string(),
      content: x.array(x.object({ type: x.literal("text"), text: x.string() })),
      totalToolUseCount: x.number(),
      totalDurationMs: x.number(),
      totalTokens: x.number(),
      usage: x.object({
        input_tokens: x.number(),
        output_tokens: x.number(),
        cache_creation_input_tokens: x.number().nullable(),
        cache_read_input_tokens: x.number().nullable(),
        server_tool_use: x
          .object({
            web_search_requests: x.number(),
            web_fetch_requests: x.number(),
          })
          .nullable(),
        service_tier: x.enum(["standard", "priority", "batch"]).nullable(),
        cache_creation: x
          .object({
            ephemeral_1h_input_tokens: x.number(),
            ephemeral_5m_input_tokens: x.number(),
          })
          .nullable(),
      }),
    })),
    (QCY = FCY.extend({ status: x.literal("completed"), prompt: x.string() })),
    (gCY = x.object({
      status: x.literal("async_launched"),
      agentId: x.string().describe("The ID of the async agent"),
      description: x.string().describe("The description of the task"),
      prompt: x.string().describe("The prompt for the agent"),
      outputFile: x
        .string()
        .describe("Path to the output file for checking agent progress"),
    })),
    (UCY = L6(() => x.union([QCY, gCY, lt7]))));
  $P1 = {
    async prompt({
      agents: A,
      tools: q,
      getToolPermissionContext: K,
      allowedAgentTypes: Y,
    }) {
      let z = await K(),
        w = [];
      for (let _ of q)
        if (_.name?.startsWith("mcp__")) {
          let X = _.name.split("__")[1];
          if (X && !w.includes(X)) w.push(X);
        }
      let H = $e7(A, w),
        $ = BRA(H, z, ZK);
      return await Ut7($, !1, Y);
    },
    name: ZK,
    maxResultSizeChars: 1e5,
    async description() {
      return "Launch a new task";
    },
    get inputSchema() {
      return cLA();
    },
    get outputSchema() {
      return UCY();
    },
    async call(
      {
        prompt: A,
        subagent_type: q,
        description: K,
        model: Y,
        resume: z,
        run_in_background: w,
        max_turns: H,
        name: $,
        team_name: O,
        mode: _,
      },
      J,
      X,
      j,
      D,
    ) {
      let M = Date.now(),
        P = await J.getAppState(),
        W = P.toolPermissionContext.mode;
      if (O && !l8())
        throw Error("Agent Teams is not yet available on your plan.");
      let G = dCY({ team_name: O }, P);
      if (EM() && G) {
        if ($)
          throw Error(
            "In-process teammates cannot spawn other teammates. Only the team leader can spawn teammates.",
          );
        if (w === !0)
          throw Error(
            "In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.",
          );
      }
      if (G && $) {
        if (q) {
          let J1 = J.options.agentDefinitions.activeAgents.find(
            (V1) => V1.agentType === q,
          );
          if (J1?.color) y31(q, J1.color);
        }
        let r = await OU4(
          {
            name: $,
            prompt: A,
            description: K,
            team_name: G,
            use_splitpane: !0,
            plan_mode_required: _ === "plan",
            model: Y,
            agent_type: q,
          },
          J,
        );
        return { data: { status: "teammate_spawned", prompt: A, ...r.data } };
      }
      let V = J.options.agentDefinitions.activeAgents,
        { allowedAgentTypes: Z } = J.options.agentDefinitions,
        N = BRA(
          Z ? V.filter((r) => Z.includes(r.agentType)) : V,
          P.toolPermissionContext,
          ZK,
        ),
        T = N.find((r) => r.agentType === q);
      if (!T) {
        if (V.find((o) => o.agentType === q)) {
          let o = FRA(P.toolPermissionContext, ZK, q);
          throw Error(
            `Agent type '${q}' has been denied by permission rule '${ZK}(${q})' from ${o?.source ?? "settings"}.`,
          );
        }
        throw Error(
          `Agent type '${q}' not found. Available agents: ${N.map((o) => o.agentType).join(", ")}`,
        );
      }
      if (T.requiredMcpServers?.length) {
        let r = [];
        for (let o of P.mcp.tools)
          if (o.name?.startsWith("mcp__")) {
            let V1 = o.name.split("__")[1];
            if (V1 && !r.includes(V1)) r.push(V1);
          }
        if (!oGA(T, r)) {
          let o = T.requiredMcpServers.filter(
            (J1) =>
              !r.some((V1) => V1.toLowerCase().includes(J1.toLowerCase())),
          );
          throw Error(
            `Agent '${q}' requires MCP servers matching: ${o.join(", ")}. MCP servers with tools: ${r.length > 0 ? r.join(", ") : "none"}. Use /mcp to configure and authenticate the required MCP servers.`,
          );
        }
      }
      if (T.color) y31(q, T.color);
      let k = Rj6(T.model, J.options.mainLoopModel, Y, W, T.agentType);
      c("tengu_agent_tool_selected", {
        agent_type: T.agentType,
        model: k,
        source: T.source,
        color: T.color,
        is_built_in_agent: oj(T),
      });
      let y;
      if (z) {
        let r = P.tasks[z];
        if (r && r.status === "running")
          throw Error(
            `Cannot resume agent ${z}: it is still running. Use TaskStop to stop it first, or wait for it to complete.`,
          );
        let o = await WG1(pZ(z));
        if (!o) throw Error(`No transcript found for agent ID: ${z}`);
        y = WU1(GU1(fG6(o)));
      }
      let B = T?.forkContext ? J.messages : void 0,
        S;
      try {
        let r = Array.from(
            P.toolPermissionContext.additionalWorkingDirectories.keys(),
          ),
          o = T.getSystemPrompt({ toolUseContext: J });
        if (T.memory)
          c("tengu_agent_memory_loaded", {
            ...{},
            scope: T.memory,
            source: "subagent",
          });
        S = await qU1([o], k, r);
      } catch (r) {
        h(
          `Failed to get system prompt for agent ${T.agentType}: ${r instanceof Error ? r.message : String(r)}`,
        );
      }
      let m = T?.forkContext ? it7(A, j) : [d6({ content: A })],
        u = {
          prompt: A,
          resolvedAgentModel: k,
          isBuiltInAgent: oj(T),
          startTime: M,
          agentType: T.agentType,
        },
        U = !1,
        g = (w === !0 || U) && !WG6,
        b = {
          ...P.toolPermissionContext,
          mode: T.permissionMode ?? "acceptEdits",
        },
        p = GG6(b, P.mcp.tools),
        n = {
          agentDefinition: T,
          promptMessages: y ? [...y, ...m] : m,
          toolUseContext: J,
          canUseTool: X,
          forkContextMessages: B,
          isAsync: g,
          ...(U ? { canShowPermissionPrompts: !0 } : {}),
          querySource: J.options.querySource ?? aQ4(T.agentType, oj(T)),
          model: Y,
          maxTurns: H,
          override: S ? { systemPrompt: S } : void 0,
          availableTools: p,
        };
      if (g) {
        let r = z || aR(),
          o = nr7({
            agentId: r,
            description: K,
            prompt: A,
            selectedAgent: T,
            setAppState: J.setAppState,
            parentAbortController: J.abortController,
          }),
          J1 = {
            agentId: r,
            parentSessionId: rr(),
            agentType: "subagent",
            subagentName: T.agentType,
            isBuiltIn: oj(T),
          };
        return (
          aD1(J1, async () => {
            let V1,
              Z1 = AB1()
                ? setInterval(() => {
                    eu1();
                  }, 50000)
                : void 0;
            try {
              let N1 = [],
                Y1 = Um1(),
                q1 = dm1(J.options.tools);
              for await (let v1 of Wy({
                ...n,
                override: {
                  ...n.override,
                  agentId: pZ(o.agentId),
                  abortController: o.abortController,
                },
                onCacheSafeParams: U
                  ? (L1) => {
                      let { stop: a } = zg4(
                        o.agentId,
                        pZ(o.agentId),
                        L1,
                        J.setAppState,
                      );
                      V1 = a;
                    }
                  : void 0,
              }))
                (N1.push(v1),
                  tM1(Y1, v1, q1, J.options.tools),
                  kWA(o.agentId, pm1(Y1), J.setAppState));
              V1?.();
              let z1 = uRA(N1, o.agentId, u),
                P1 = z1.content
                  .filter((v1) => v1.type === "text")
                  .map((v1) => v1.text).join(`
`);
              (LWA(z1, J.setAppState),
                Z31(o.agentId, K, "completed", void 0, J.setAppState, P1, {
                  totalTokens: z1.totalTokens,
                  toolUses: z1.totalToolUseCount,
                  durationMs: z1.totalDurationMs,
                }));
            } catch (N1) {
              if ((V1?.(), N1 instanceof nz)) {
                if (Us(o.agentId, J.setAppState))
                  Z31(o.agentId, K, "killed", void 0, J.setAppState);
                return;
              }
              let Y1 = N1 instanceof Error ? N1.message : String(N1);
              (RWA(o.agentId, Y1, J.setAppState),
                Z31(o.agentId, K, "failed", Y1, J.setAppState));
            } finally {
              if (Z1 !== void 0) clearInterval(Z1);
            }
          }),
          {
            data: {
              isAsync: !0,
              status: "async_launched",
              agentId: o.agentId,
              description: K,
              prompt: A,
              outputFile: Hw(o.agentId),
            },
          }
        );
      } else {
        let r = z ? pZ(z) : aR(),
          o = {
            agentId: r,
            parentSessionId: rr(),
            agentType: "subagent",
            subagentName: T.agentType,
            isBuiltIn: oj(T),
          };
        return aD1(o, async () => {
          let J1 = [],
            V1 = [],
            Z1 = Date.now();
          if (m[0] && m[0].type === "user") {
            let a = j$(m),
              t = a.find((K1) => K1.type === "user");
            if (t && t.type === "user" && D)
              D({
                toolUseID: `agent_${j.message.id}`,
                data: {
                  message: t,
                  normalizedMessages: a,
                  type: "agent_progress",
                  prompt: A,
                  resume: z,
                  agentId: r,
                },
              });
          }
          let N1, Y1;
          if (!WG6) {
            let a = rr7({
              agentId: r,
              description: K,
              prompt: A,
              selectedAgent: T,
              setAppState: J.setAppState,
            });
            ((N1 = a.taskId), (Y1 = a.backgroundSignal));
          }
          let q1 = !1,
            z1 = Wy({ ...n, override: { ...n.override, agentId: r } })[
              Symbol.asyncIterator
            ](),
            P1;
          try {
            while (!0) {
              let a = Date.now() - Z1;
              if (!WG6 && !q1 && a >= bCY && J.setToolJSX)
                ((q1 = !0),
                  J.setToolJSX({
                    jsx: mRA.createElement(AG6, null),
                    shouldHidePromptInput: !1,
                    shouldContinueAnimation: !0,
                    showSpinner: !0,
                  }));
              let t = z1.next(),
                K1 = Y1
                  ? await Promise.race([
                      t.then((D1) => ({ type: "message", result: D1 })),
                      Y1.then(() => ({ type: "background" })),
                    ])
                  : await t.then((D1) => ({ type: "message", result: D1 }));
              if (K1.type === "background" && N1) {
                let X1 = (await J.getAppState()).tasks[N1];
                if (gs(X1) && X1.isBackgrounded) {
                  let S1 = N1;
                  return (
                    aD1(o, async () => {
                      let x1 = AB1()
                        ? setInterval(() => {
                            eu1();
                          }, 50000)
                        : void 0;
                      try {
                        let M1 = Um1(),
                          y1 = dm1(J.options.tools);
                        for (let q6 of J1) tM1(M1, q6, y1, J.options.tools);
                        for await (let q6 of Wy({
                          ...n,
                          isAsync: !0,
                          override: {
                            ...n.override,
                            agentId: pZ(S1),
                            abortController: X1.abortController,
                          },
                        }))
                          (J1.push(q6),
                            tM1(M1, q6, y1, J.options.tools),
                            kWA(S1, pm1(M1), J.setAppState));
                        let _1 = uRA(J1, S1, u),
                          R1 = _1.content
                            .filter((q6) => q6.type === "text")
                            .map((q6) => q6.text).join(`
`),
                          p1 = await J.getAppState(),
                          Y6 = await classifyHandoffIfNeeded({
                            agentMessages: J1,
                            toolPermissionContext: p1.toolPermissionContext,
                            abortSignal: X1.abortController.signal,
                            isNonInteractiveSession:
                              J.options.isNonInteractiveSession,
                            subagentType: q,
                            totalToolUseCount: _1.totalToolUseCount,
                          });
                        if (Y6)
                          R1 = `${Y6}

${R1}`;
                        (LWA(_1, J.setAppState),
                          Z31(S1, K, "completed", void 0, J.setAppState, R1, {
                            totalTokens: _1.totalTokens,
                            toolUses: _1.totalToolUseCount,
                            durationMs: _1.totalDurationMs,
                          }));
                      } catch (M1) {
                        if (M1 instanceof nz) {
                          if (Us(S1, J.setAppState))
                            Z31(S1, K, "killed", void 0, J.setAppState);
                          return;
                        }
                        let y1 = M1 instanceof Error ? M1.message : String(M1);
                        (RWA(S1, y1, J.setAppState),
                          Z31(S1, K, "failed", y1, J.setAppState));
                      } finally {
                        if (x1 !== void 0) clearInterval(x1);
                      }
                    }),
                    {
                      data: {
                        isAsync: !0,
                        status: "async_launched",
                        agentId: S1,
                        description: K,
                        prompt: A,
                        outputFile: Hw(S1),
                      },
                    }
                  );
                }
              }
              if (K1.type !== "message") continue;
              let { result: w1 } = K1;
              if (w1.done) break;
              let O1 = w1.value;
              if (
                (J1.push(O1),
                O1.type === "progress" && O1.data.type === "bash_progress" && D)
              )
                D({ toolUseID: O1.toolUseID, data: O1.data });
              if (O1.type !== "assistant" && O1.type !== "user") continue;
              if (O1.type === "assistant") {
                let D1 = SH6(O1);
                if (D1 > 0) J.setResponseLength((X1) => X1 + D1);
              }
              let $1 = j$([O1]);
              V1.push(...$1);
              for (let D1 of $1)
                for (let X1 of D1.message.content) {
                  if (X1.type !== "tool_use" && X1.type !== "tool_result")
                    continue;
                  if (D)
                    D({
                      toolUseID: `agent_${j.message.id}`,
                      data: {
                        message: D1,
                        normalizedMessages: V1,
                        type: "agent_progress",
                        prompt: A,
                        resume: z,
                        agentId: r,
                      },
                    });
                }
            }
          } catch (a) {
            if (a instanceof nz) throw a;
            (h(
              `Sync agent error: ${a instanceof Error ? a.message : String(a)}`,
              { level: "error" },
            ),
              (P1 = a instanceof Error ? a : Error(String(a))));
          } finally {
            if (J.setToolJSX) J.setToolJSX(null);
            if (N1) or7(N1, J.setAppState);
          }
          let v1 = iP(
            J1.filter((a) => a.type !== "system" && a.type !== "progress"),
          );
          if (v1 && ZG6(v1)) throw new nz();
          if (P1) {
            if (!J1.some((t) => t.type === "assistant")) throw P1;
            h(`Sync agent recovering from error with ${J1.length} messages`);
          }
          let L1 = uRA(J1, r, u);
          return { data: { status: "completed", prompt: A, ...L1 } };
        });
      }
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isEnabled() {
      return !0;
    },
    userFacingName: pLA,
    userFacingNameBackgroundColor: dLA,
    getActivityDescription(A) {
      return A?.description ?? "Running task";
    },
    async checkPermissions(A, q) {
      let K = await q.getAppState();
      return { behavior: "allow", updatedInput: A };
    },
    mapToolResultToToolResultBlockParam(A, q) {
      let K = A;
      if (
        typeof K === "object" &&
        K !== null &&
        "status" in K &&
        K.status === "teammate_spawned"
      ) {
        let Y = K;
        return {
          tool_use_id: q,
          type: "tool_result",
          content: [
            {
              type: "text",
              text: `Spawned successfully.
agent_id: ${Y.teammate_id}
name: ${Y.name}
team_name: ${Y.team_name}
The agent is now running and will receive instructions via mailbox.`,
            },
          ],
        };
      }
      if (A.status === "async_launched") {
        let Y = `Async agent launched successfully.
agentId: ${A.agentId} (internal ID - do not mention to user. Use to resume later if needed.)
The agent is working in the background. You will be notified automatically when it completes.`,
          z = `Continue with other tasks.
output_file: ${A.outputFile}
To check progress before completion (optional), use ${_q} or ${I4} tail on the output file.`,
          w = `${Y}
${z}`;
        return {
          tool_use_id: q,
          type: "tool_result",
          content: [{ type: "text", text: w }],
        };
      }
      if (A.status === "completed")
        return {
          tool_use_id: q,
          type: "tool_result",
          content: [
            ...A.content,
            {
              type: "text",
              text: `agentId: ${A.agentId} (for resuming to continue this agent's work if needed)
<usage>total_tokens: ${A.totalTokens}
tool_uses: ${A.totalToolUseCount}
duration_ms: ${A.totalDurationMs}</usage>`,
            },
          ],
        };
      throw Error(`Unexpected agent tool result status: ${A.status}`);
    },
    renderToolResultMessage: BQ4,
    renderToolUseMessage: mQ4,
    renderToolUseTag: FQ4,
    renderToolUseProgressMessage: DG1,
    renderToolUseRejectedMessage: QQ4,
    renderToolUseErrorMessage: gQ4,
    renderGroupedToolUse: UQ4,
  };
