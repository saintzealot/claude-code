// Module: rF4 (lazy)
// Dependencies: [n7, RY]
// Lines: 389247-390153 in cli.formatted.js
// ---

  n7();
  ((dF4 = L6(() =>
    x.object({
      inputTokens: x.number(),
      outputTokens: x.number(),
      cacheReadInputTokens: x.number(),
      cacheCreationInputTokens: x.number(),
      webSearchRequests: x.number(),
      costUSD: x.number(),
      contextWindow: x.number(),
      maxOutputTokens: x.number(),
    }),
  )),
    (LLY = L6(() => x.literal("json_schema"))),
    (X3H = L6(() => x.object({ type: LLY() }))),
    (RLY = L6(() =>
      x.object({
        type: x.literal("json_schema"),
        schema: x.record(x.string(), x.unknown()),
      }),
    )),
    (j3H = L6(() => RLY())),
    (yLY = L6(() => x.enum(["user", "project", "org", "temporary"]))),
    (D3H = L6(() =>
      x
        .enum(["local", "user", "project"])
        .describe("Config scope for settings."),
    )),
    (M3H = L6(() => x.literal("context-1m-2025-08-07"))),
    (CLY = L6(() =>
      x.object({
        type: x.literal("stdio").optional(),
        command: x.string(),
        args: x.array(x.string()).optional(),
        env: x.record(x.string(), x.string()).optional(),
      }),
    )),
    (SLY = L6(() =>
      x.object({
        type: x.literal("sse"),
        url: x.string(),
        headers: x.record(x.string(), x.string()).optional(),
      }),
    )),
    (hLY = L6(() =>
      x.object({
        type: x.literal("http"),
        url: x.string(),
        headers: x.record(x.string(), x.string()).optional(),
      }),
    )),
    (ILY = L6(() => x.object({ type: x.literal("sdk"), name: x.string() }))),
    (cF4 = L6(() => x.union([CLY(), SLY(), hLY(), ILY()]))),
    (xLY = L6(() =>
      x.object({
        type: x.literal("claudeai-proxy"),
        url: x.string(),
        id: x.string(),
      }),
    )),
    (bLY = L6(() => x.union([cF4(), xLY()]))),
    (P3H = L6(() =>
      x
        .object({
          name: x.string().describe("Server name as configured"),
          status: x
            .enum(["connected", "failed", "needs-auth", "pending", "disabled"])
            .describe("Current connection status"),
          serverInfo: x
            .object({ name: x.string(), version: x.string() })
            .optional()
            .describe("Server information (available when connected)"),
          error: x
            .string()
            .optional()
            .describe("Error message (available when status is 'failed')"),
          config: bLY()
            .optional()
            .describe(
              "Server configuration (includes URL for HTTP/SSE servers)",
            ),
          scope: x
            .string()
            .optional()
            .describe(
              "Configuration scope (e.g., project, user, local, claudeai, managed)",
            ),
          tools: x
            .array(
              x.object({
                name: x.string(),
                description: x.string().optional(),
                annotations: x
                  .object({
                    readOnly: x.boolean().optional(),
                    destructive: x.boolean().optional(),
                    openWorld: x.boolean().optional(),
                  })
                  .optional(),
              }),
            )
            .optional()
            .describe(
              "Tools provided by this server (available when connected)",
            ),
        })
        .describe("Status information for an MCP server connection."),
    )),
    (W3H = L6(() =>
      x
        .object({
          added: x
            .array(x.string())
            .describe("Names of servers that were added"),
          removed: x
            .array(x.string())
            .describe("Names of servers that were removed"),
          errors: x
            .record(x.string(), x.string())
            .describe(
              "Map of server names to error messages for servers that failed to connect",
            ),
        })
        .describe("Result of a setMcpServers operation."),
    )),
    (OG1 = L6(() =>
      x.enum([
        "userSettings",
        "projectSettings",
        "localSettings",
        "session",
        "cliArg",
      ]),
    )),
    (vLA = L6(() => x.enum(["allow", "deny", "ask"]))),
    (ELA = L6(() =>
      x.object({ toolName: x.string(), ruleContent: x.string().optional() }),
    )),
    (kLA = L6(() =>
      x.discriminatedUnion("type", [
        x.object({
          type: x.literal("addRules"),
          rules: x.array(ELA()),
          behavior: vLA(),
          destination: OG1(),
        }),
        x.object({
          type: x.literal("replaceRules"),
          rules: x.array(ELA()),
          behavior: vLA(),
          destination: OG1(),
        }),
        x.object({
          type: x.literal("removeRules"),
          rules: x.array(ELA()),
          behavior: vLA(),
          destination: OG1(),
        }),
        x.object({
          type: x.literal("setMode"),
          mode: x.lazy(() => _G1()),
          destination: OG1(),
        }),
        x.object({
          type: x.literal("addDirectories"),
          directories: x.array(x.string()),
          destination: OG1(),
        }),
        x.object({
          type: x.literal("removeDirectories"),
          directories: x.array(x.string()),
          destination: OG1(),
        }),
      ]),
    )),
    (G3H = L6(() =>
      x.union([
        x.object({
          behavior: x.literal("allow"),
          updatedInput: x.record(x.string(), x.unknown()).optional(),
          updatedPermissions: x.array(kLA()).optional(),
          toolUseID: x.string().optional(),
        }),
        x.object({
          behavior: x.literal("deny"),
          message: x.string(),
          interrupt: x.boolean().optional(),
          toolUseID: x.string().optional(),
        }),
      ]),
    )),
    (_G1 = L6(() =>
      x
        .enum([
          "default",
          "acceptEdits",
          "bypassPermissions",
          "plan",
          "delegate",
          "dontAsk",
        ])
        .describe(
          "Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'delegate' - Delegate mode, restricts team leader to only Teammate and Task tools. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved.",
        ),
    )),
    (uLY = [
      "PreToolUse",
      "PostToolUse",
      "PostToolUseFailure",
      "Notification",
      "UserPromptSubmit",
      "SessionStart",
      "SessionEnd",
      "Stop",
      "SubagentStart",
      "SubagentStop",
      "PreCompact",
      "PermissionRequest",
      "Setup",
      "TeammateIdle",
      "TaskCompleted",
    ]),
    (Z3H = L6(() => x.enum(uLY))),
    (oZ = L6(() =>
      x.object({
        session_id: x.string(),
        transcript_path: x.string(),
        cwd: x.string(),
        permission_mode: x.string().optional(),
      }),
    )),
    (BLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("PreToolUse"),
          tool_name: x.string(),
          tool_input: x.unknown(),
          tool_use_id: x.string(),
        }),
      ),
    )),
    (mLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("PermissionRequest"),
          tool_name: x.string(),
          tool_input: x.unknown(),
          permission_suggestions: x.array(kLA()).optional(),
        }),
      ),
    )),
    (FLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("PostToolUse"),
          tool_name: x.string(),
          tool_input: x.unknown(),
          tool_response: x.unknown(),
          tool_use_id: x.string(),
        }),
      ),
    )),
    (QLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("PostToolUseFailure"),
          tool_name: x.string(),
          tool_input: x.unknown(),
          tool_use_id: x.string(),
          error: x.string(),
          is_interrupt: x.boolean().optional(),
        }),
      ),
    )),
    (gLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("Notification"),
          message: x.string(),
          title: x.string().optional(),
          notification_type: x.string(),
        }),
      ),
    )),
    (ULY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("UserPromptSubmit"),
          prompt: x.string(),
        }),
      ),
    )),
    (pLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("SessionStart"),
          source: x.enum(["startup", "resume", "clear", "compact"]),
          agent_type: x.string().optional(),
          model: x.string().optional(),
        }),
      ),
    )),
    (dLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("Setup"),
          trigger: x.enum(["init", "maintenance"]),
        }),
      ),
    )),
    (cLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("Stop"),
          stop_hook_active: x.boolean(),
        }),
      ),
    )),
    (lLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("SubagentStart"),
          agent_id: x.string(),
          agent_type: x.string(),
        }),
      ),
    )),
    (iLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("SubagentStop"),
          stop_hook_active: x.boolean(),
          agent_id: x.string(),
          agent_transcript_path: x.string(),
          agent_type: x.string(),
        }),
      ),
    )),
    (nLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("PreCompact"),
          trigger: x.enum(["manual", "auto"]),
          custom_instructions: x.string().nullable(),
        }),
      ),
    )),
    (rLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("TeammateIdle"),
          teammate_name: x.string(),
          team_name: x.string(),
        }),
      ),
    )),
    (aLY = L6(() =>
      oZ().and(
        x.object({
          hook_event_name: x.literal("TaskCompleted"),
          task_id: x.string(),
          task_subject: x.string(),
          task_description: x.string().optional(),
          teammate_name: x.string().optional(),
          team_name: x.string().optional(),
        }),
      ),
    )),
    (oLY = [
      "clear",
      "logout",
      "prompt_input_exit",
      "other",
      "bypass_permissions_disabled",
    ]),
    (sLY = L6(() => x.enum(oLY))),
    (tLY = L6(() =>
      oZ().and(
        x.object({ hook_event_name: x.literal("SessionEnd"), reason: sLY() }),
      ),
    )),
    (f3H = L6(() =>
      x.union([
        BLY(),
        FLY(),
        QLY(),
        gLY(),
        ULY(),
        pLY(),
        tLY(),
        cLY(),
        lLY(),
        iLY(),
        nLY(),
        mLY(),
        dLY(),
        rLY(),
        aLY(),
      ]),
    )),
    (eLY = L6(() =>
      x.object({ async: x.literal(!0), asyncTimeout: x.number().optional() }),
    )),
    (ARY = L6(() =>
      x.object({
        hookEventName: x.literal("PreToolUse"),
        permissionDecision: x.enum(["allow", "deny", "ask"]).optional(),
        permissionDecisionReason: x.string().optional(),
        updatedInput: x.record(x.string(), x.unknown()).optional(),
        additionalContext: x.string().optional(),
      }),
    )),
    (qRY = L6(() =>
      x.object({
        hookEventName: x.literal("UserPromptSubmit"),
        additionalContext: x.string().optional(),
      }),
    )),
    (KRY = L6(() =>
      x.object({
        hookEventName: x.literal("SessionStart"),
        additionalContext: x.string().optional(),
      }),
    )),
    (YRY = L6(() =>
      x.object({
        hookEventName: x.literal("Setup"),
        additionalContext: x.string().optional(),
      }),
    )),
    (zRY = L6(() =>
      x.object({
        hookEventName: x.literal("SubagentStart"),
        additionalContext: x.string().optional(),
      }),
    )),
    (wRY = L6(() =>
      x.object({
        hookEventName: x.literal("PostToolUse"),
        additionalContext: x.string().optional(),
        updatedMCPToolOutput: x.unknown().optional(),
      }),
    )),
    (HRY = L6(() =>
      x.object({
        hookEventName: x.literal("PostToolUseFailure"),
        additionalContext: x.string().optional(),
      }),
    )),
    ($RY = L6(() =>
      x.object({
        hookEventName: x.literal("Notification"),
        additionalContext: x.string().optional(),
      }),
    )),
    (ORY = L6(() =>
      x.object({
        hookEventName: x.literal("PermissionRequest"),
        decision: x.union([
          x.object({
            behavior: x.literal("allow"),
            updatedInput: x.record(x.string(), x.unknown()).optional(),
            updatedPermissions: x.array(kLA()).optional(),
          }),
          x.object({
            behavior: x.literal("deny"),
            message: x.string().optional(),
            interrupt: x.boolean().optional(),
          }),
        ]),
      }),
    )),
    (_RY = L6(() =>
      x.object({
        continue: x.boolean().optional(),
        suppressOutput: x.boolean().optional(),
        stopReason: x.string().optional(),
        decision: x.enum(["approve", "block"]).optional(),
        systemMessage: x.string().optional(),
        reason: x.string().optional(),
        hookSpecificOutput: x
          .union([
            ARY(),
            qRY(),
            KRY(),
            YRY(),
            zRY(),
            wRY(),
            HRY(),
            $RY(),
            ORY(),
          ])
          .optional(),
      }),
    )),
    (V3H = L6(() => x.union([eLY(), _RY()]))),
    (N3H = L6(() =>
      x
        .object({
          name: x.string().describe("Skill name (without the leading slash)"),
          description: x
            .string()
            .describe("Description of what the skill does"),
          argumentHint: x
            .string()
            .describe('Hint for skill arguments (e.g., "<file>")'),
        })
        .describe(
          "Information about an available skill (invoked via /command syntax).",
        ),
    )),
    (T3H = L6(() =>
      x
        .object({
          value: x.string().describe("Model identifier to use in API calls"),
          displayName: x.string().describe("Human-readable display name"),
          description: x
            .string()
            .describe("Description of the model's capabilities"),
        })
        .describe("Information about an available model."),
    )),
    (v3H = L6(() =>
      x
        .object({
          email: x.string().optional(),
          organization: x.string().optional(),
          subscriptionType: x.string().optional(),
          tokenSource: x.string().optional(),
          apiKeySource: x.string().optional(),
        })
        .describe("Information about the logged in user's account."),
    )),
    (JRY = L6(() => x.union([x.string(), x.record(x.string(), cF4())]))),
    (E3H = L6(() =>
      x
        .object({
          description: x
            .string()
            .describe("Natural language description of when to use this agent"),
          tools: x
            .array(x.string())
            .optional()
            .describe(
              "Array of allowed tool names. If omitted, inherits all tools from parent",
            ),
          disallowedTools: x
            .array(x.string())
            .optional()
            .describe(
              "Array of tool names to explicitly disallow for this agent",
            ),
          prompt: x.string().describe("The agent's system prompt"),
          model: x
            .enum(["sonnet", "opus", "haiku", "inherit"])
            .optional()
            .describe(
              "Model to use for this agent. If omitted or 'inherit', uses the main model",
            ),
          mcpServers: x.array(JRY()).optional(),
          criticalSystemReminder_EXPERIMENTAL: x
            .string()
            .optional()
            .describe("Experimental: Critical reminder added to system prompt"),
          skills: x
            .array(x.string())
            .optional()
            .describe("Array of skill names to preload into the agent context"),
          maxTurns: x
            .number()
            .int()
            .positive()
            .optional()
            .describe(
              "Maximum number of agentic turns (API round-trips) before stopping",
            ),
        })
        .describe(
          "Definition for a custom subagent that can be invoked via the Task tool.",
        ),
    )),
    (k3H = L6(() =>
      x
        .enum(["user", "project", "local"])
        .describe(
          "Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json).",
        ),
    )),
    (L3H = L6(() =>
      x
        .object({
          type: x
            .literal("local")
            .describe("Plugin type. Currently only 'local' is supported"),
          path: x
            .string()
            .describe("Absolute or relative path to the plugin directory"),
        })
        .describe("Configuration for loading a plugin."),
    )),
    (R3H = L6(() =>
      x
        .object({
          canRewind: x.boolean(),
          error: x.string().optional(),
          filesChanged: x.array(x.string()).optional(),
          insertions: x.number().optional(),
          deletions: x.number().optional(),
        })
        .describe("Result of a rewindFiles operation."),
    )),
    (XRY = L6(() => x.unknown())),
    (jRY = L6(() => x.unknown())),
    (DRY = L6(() => x.unknown())),
    (ej = L6(() => x.string())),
    (lF4 = L6(() => x.unknown())),
    (MRY = L6(() =>
      x.enum([
        "authentication_failed",
        "billing_error",
        "rate_limit",
        "invalid_request",
        "server_error",
        "unknown",
        "max_output_tokens",
      ]),
    )),
    (PRY = L6(() => x.union([x.literal("compacting"), x.null()]))),
    (iF4 = L6(() =>
      x.object({
        type: x.literal("user"),
        message: XRY(),
        parent_tool_use_id: x.string().nullable(),
        isSynthetic: x.boolean().optional(),
        tool_use_result: x.unknown().optional(),
      }),
    )),
    (WRY = L6(() =>
      iF4().extend({ uuid: ej().optional(), session_id: x.string() }),
    )),
    (GRY = L6(() =>
      iF4().extend({
        uuid: ej(),
        session_id: x.string(),
        isReplay: x.literal(!0),
      }),
    )),
    (ZRY = L6(() =>
      x.object({
        type: x.literal("assistant"),
        message: jRY(),
        parent_tool_use_id: x.string().nullable(),
        error: MRY().optional(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (y3H = L6(() =>
      x
        .object({
          type: x.literal("streamlined_text"),
          text: x
            .string()
            .describe("Text content preserved from the assistant message"),
          session_id: x.string(),
          uuid: ej(),
        })
        .describe(
          "@internal Streamlined text message - replaces SDKAssistantMessage in streamlined output. Text content preserved, thinking and tool_use blocks removed.",
        ),
    )),
    (C3H = L6(() =>
      x
        .object({
          type: x.literal("streamlined_tool_use_summary"),
          tool_summary: x
            .string()
            .describe(
              'Summary of tool calls (e.g., "Read 2 files, wrote 1 file")',
            ),
          session_id: x.string(),
          uuid: ej(),
        })
        .describe(
          "@internal Streamlined tool use summary - replaces tool_use blocks in streamlined output with a cumulative summary string.",
        ),
    )),
    (nF4 = L6(() =>
      x.object({
        tool_name: x.string(),
        tool_use_id: x.string(),
        tool_input: x.record(x.string(), x.unknown()),
      }),
    )),
    (fRY = L6(() =>
      x.object({
        type: x.literal("result"),
        subtype: x.literal("success"),
        duration_ms: x.number(),
        duration_api_ms: x.number(),
        is_error: x.boolean(),
        num_turns: x.number(),
        result: x.string(),
        stop_reason: x.string().nullable(),
        total_cost_usd: x.number(),
        usage: lF4(),
        modelUsage: x.record(x.string(), dF4()),
        permission_denials: x.array(nF4()),
        structured_output: x.unknown().optional(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (VRY = L6(() =>
      x.object({
        type: x.literal("result"),
        subtype: x.enum([
          "error_during_execution",
          "error_max_turns",
          "error_max_budget_usd",
          "error_max_structured_output_retries",
        ]),
        duration_ms: x.number(),
        duration_api_ms: x.number(),
        is_error: x.boolean(),
        num_turns: x.number(),
        stop_reason: x.string().nullable(),
        total_cost_usd: x.number(),
        usage: lF4(),
        modelUsage: x.record(x.string(), dF4()),
        permission_denials: x.array(nF4()),
        errors: x.array(x.string()),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (NRY = L6(() => x.union([fRY(), VRY()]))),
    (TRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("init"),
        agents: x.array(x.string()).optional(),
        apiKeySource: yLY(),
        betas: x.array(x.string()).optional(),
        claude_code_version: x.string(),
        cwd: x.string(),
        tools: x.array(x.string()),
        mcp_servers: x.array(
          x.object({ name: x.string(), status: x.string() }),
        ),
        model: x.string(),
        permissionMode: _G1(),
        slash_commands: x.array(x.string()),
        output_style: x.string(),
        skills: x.array(x.string()),
        plugins: x.array(x.object({ name: x.string(), path: x.string() })),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (vRY = L6(() =>
      x.object({
        type: x.literal("stream_event"),
        event: DRY(),
        parent_tool_use_id: x.string().nullable(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (ERY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("compact_boundary"),
        compact_metadata: x.object({
          trigger: x.enum(["manual", "auto"]),
          pre_tokens: x.number(),
        }),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (kRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("status"),
        status: PRY(),
        permissionMode: _G1().optional(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (LRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("hook_started"),
        hook_id: x.string(),
        hook_name: x.string(),
        hook_event: x.string(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (RRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("hook_progress"),
        hook_id: x.string(),
        hook_name: x.string(),
        hook_event: x.string(),
        stdout: x.string(),
        stderr: x.string(),
        output: x.string(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (yRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("hook_response"),
        hook_id: x.string(),
        hook_name: x.string(),
        hook_event: x.string(),
        output: x.string(),
        stdout: x.string(),
        stderr: x.string(),
        exit_code: x.number().optional(),
        outcome: x.enum(["success", "error", "cancelled"]),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (CRY = L6(() =>
      x.object({
        type: x.literal("tool_progress"),
        tool_use_id: x.string(),
        tool_name: x.string(),
        parent_tool_use_id: x.string().nullable(),
        elapsed_time_seconds: x.number(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (SRY = L6(() =>
      x.object({
        type: x.literal("auth_status"),
        isAuthenticating: x.boolean(),
        output: x.array(x.string()),
        error: x.string().optional(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (hRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("files_persisted"),
        files: x.array(x.object({ filename: x.string(), file_id: x.string() })),
        failed: x.array(x.object({ filename: x.string(), error: x.string() })),
        processed_at: x.string(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (IRY = L6(() =>
      x.object({
        type: x.literal("system"),
        subtype: x.literal("task_notification"),
        task_id: x.string(),
        status: x.enum(["completed", "failed", "stopped"]),
        output_file: x.string(),
        summary: x.string(),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (xRY = L6(() =>
      x.object({
        type: x.literal("tool_use_summary"),
        summary: x.string(),
        preceding_tool_use_ids: x.array(x.string()),
        uuid: ej(),
        session_id: x.string(),
      }),
    )),
    (S3H = L6(() =>
      x.union([
        ZRY(),
        WRY(),
        GRY(),
        NRY(),
        TRY(),
        vRY(),
        ERY(),
        kRY(),
        LRY(),
        RRY(),
        yRY(),
        CRY(),
        SRY(),
        IRY(),
        hRY(),
        xRY(),
      ]),
    )));
