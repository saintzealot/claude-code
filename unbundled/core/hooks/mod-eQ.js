// Module: eQ (lazy)
// Dependencies: [S$, n7, h$8, bt1, yD, i$8]
// Pre-declarations: var MXK, PXK, WXK, GXK, ZXK, mk;
// Lines: 47729-48187 in cli.formatted.js
// ---

var MXK, PXK, WXK, GXK, ZXK, mk;

  n7();
  $M();
  h$8();
  S$();
  yD();
  i$8();
  bt1();
  bt1();
  ((MXK = x.record(x.string(), x.coerce.string())),
    (PXK = x
      .object({
        allow: x
          .array(xt1)
          .optional()
          .describe("List of permission rules for allowed operations"),
        deny: x
          .array(xt1)
          .optional()
          .describe("List of permission rules for denied operations"),
        ask: x
          .array(xt1)
          .optional()
          .describe(
            "List of permission rules that should always prompt for confirmation",
          ),
        defaultMode: x
          .enum(uA1)
          .optional()
          .describe("Default permission mode when Claude Code needs access"),
        disableBypassPermissionsMode: x
          .enum(["disable"])
          .optional()
          .describe("Disable the ability to bypass permission prompts"),
        additionalDirectories: x
          .array(x.string())
          .optional()
          .describe(
            "Additional directories to include in the permission scope",
          ),
      })
      .passthrough()),
    (WXK = x.object({
      source: uE1().describe("Where to fetch the marketplace from"),
      installLocation: x
        .string()
        .optional()
        .describe(
          "Local cache path where marketplace manifest is stored (auto-generated if not provided)",
        ),
    })),
    (GXK = x
      .object({
        serverName: x
          .string()
          .regex(
            /^[a-zA-Z0-9_-]+$/,
            "Server name can only contain letters, numbers, hyphens, and underscores",
          )
          .optional()
          .describe(
            "Name of the MCP server that users are allowed to configure",
          ),
        serverCommand: x
          .array(x.string())
          .min(1, "Server command must have at least one element (the command)")
          .optional()
          .describe(
            "Command array [command, ...args] to match exactly for allowed stdio servers",
          ),
        serverUrl: x
          .string()
          .optional()
          .describe(
            'URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers',
          ),
      })
      .refine(
        (A) => {
          return (
            [
              A.serverName !== void 0,
              A.serverCommand !== void 0,
              A.serverUrl !== void 0,
            ].filter(Boolean).length === 1
          );
        },
        {
          message:
            'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
        },
      )),
    (ZXK = x
      .object({
        serverName: x
          .string()
          .regex(
            /^[a-zA-Z0-9_-]+$/,
            "Server name can only contain letters, numbers, hyphens, and underscores",
          )
          .optional()
          .describe("Name of the MCP server that is explicitly blocked"),
        serverCommand: x
          .array(x.string())
          .min(1, "Server command must have at least one element (the command)")
          .optional()
          .describe(
            "Command array [command, ...args] to match exactly for blocked stdio servers",
          ),
        serverUrl: x
          .string()
          .optional()
          .describe(
            'URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers',
          ),
      })
      .refine(
        (A) => {
          return (
            [
              A.serverName !== void 0,
              A.serverCommand !== void 0,
              A.serverUrl !== void 0,
            ].filter(Boolean).length === 1
          );
        },
        {
          message:
            'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
        },
      )),
    (mk = x
      .object({
        $schema: x
          .literal(Tw8)
          .optional()
          .describe("JSON Schema reference for Claude Code settings"),
        apiKeyHelper: x
          .string()
          .optional()
          .describe("Path to a script that outputs authentication values"),
        awsCredentialExport: x
          .string()
          .optional()
          .describe("Path to a script that exports AWS credentials"),
        awsAuthRefresh: x
          .string()
          .optional()
          .describe("Path to a script that refreshes AWS authentication"),
        fileSuggestion: x
          .object({ type: x.literal("command"), command: x.string() })
          .optional()
          .describe("Custom file suggestion configuration for @ mentions"),
        respectGitignore: x
          .boolean()
          .optional()
          .describe(
            "Whether file picker should respect .gitignore files (default: true). Note: .ignore files are always respected.",
          ),
        cleanupPeriodDays: x
          .number()
          .nonnegative()
          .int()
          .optional()
          .describe(
            "Number of days to retain chat transcripts (0 to disable cleanup)",
          ),
        env: MXK.optional().describe(
          "Environment variables to set for Claude Code sessions",
        ),
        attribution: x
          .object({
            commit: x
              .string()
              .optional()
              .describe(
                "Attribution text for git commits, including any trailers. Empty string hides attribution.",
              ),
            pr: x
              .string()
              .optional()
              .describe(
                "Attribution text for pull request descriptions. Empty string hides attribution.",
              ),
          })
          .optional()
          .describe(
            "Customize attribution text for commits and PRs. Each field defaults to the standard Claude Code attribution if not set.",
          ),
        includeCoAuthoredBy: x
          .boolean()
          .optional()
          .describe(
            "Deprecated: Use attribution instead. Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)",
          ),
        permissions: PXK.optional().describe(
          "Tool usage permissions configuration",
        ),
        model: x
          .string()
          .optional()
          .describe("Override the default model used by Claude Code"),
        availableModels: x
          .array(x.string())
          .optional()
          .describe(
            'Allowlist of models that users can select. Accepts family aliases ("opus" allows any opus version), version prefixes ("opus-4-5" allows only that version), and full model IDs. If undefined, all models are available. If empty array, only the default model is available. Typically set in managed settings by enterprise administrators.',
          ),
        enableAllProjectMcpServers: x
          .boolean()
          .optional()
          .describe(
            "Whether to automatically approve all MCP servers in the project",
          ),
        enabledMcpjsonServers: x
          .array(x.string())
          .optional()
          .describe("List of approved MCP servers from .mcp.json"),
        disabledMcpjsonServers: x
          .array(x.string())
          .optional()
          .describe("List of rejected MCP servers from .mcp.json"),
        allowedMcpServers: x
          .array(GXK)
          .optional()
          .describe(
            "Enterprise allowlist of MCP servers that can be used. Applies to all scopes including enterprise servers from managed-mcp.json. If undefined, all servers are allowed. If empty array, no servers are allowed. Denylist takes precedence - if a server is on both lists, it is denied.",
          ),
        deniedMcpServers: x
          .array(ZXK)
          .optional()
          .describe(
            "Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied.",
          ),
        hooks: Bk.optional().describe(
          "Custom commands to run before/after tool executions",
        ),
        worktree: x
          .object({
            symlinkDirectories: x
              .array(x.string())
              .optional()
              .describe(
                'Directories to symlink from main repository to worktrees to avoid disk bloat. Must be explicitly configured - no directories are symlinked by default. Common examples: "node_modules", ".cache", ".bin"',
              ),
          })
          .optional()
          .describe(
            "Git worktree configuration for --worktree flag. Symlinks prevent duplicating large directories like node_modules across worktrees.",
          ),
        disableAllHooks: x
          .boolean()
          .optional()
          .describe("Disable all hooks and statusLine execution"),
        allowManagedHooksOnly: x
          .boolean()
          .optional()
          .describe(
            "When true (and set in managed settings), only hooks from managed settings run. User, project, and local hooks are ignored.",
          ),
        allowManagedPermissionRulesOnly: x
          .boolean()
          .optional()
          .describe(
            "When true (and set in managed settings), only permission rules (allow/deny/ask) from managed settings are respected. User, project, local, and CLI argument permission rules are ignored.",
          ),
        statusLine: x
          .object({
            type: x.literal("command"),
            command: x.string(),
            padding: x.number().optional(),
          })
          .optional()
          .describe("Custom status line display configuration"),
        enabledPlugins: x
          .record(
            x.string(),
            x.union([x.array(x.string()), x.boolean(), x.undefined()]),
          )
          .optional()
          .describe(
            'Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints.',
          ),
        extraKnownMarketplaces: x
          .record(x.string(), WXK)
          .optional()
          .describe(
            "Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources.",
          ),
        strictKnownMarketplaces: x
          .array(uE1())
          .optional()
          .describe(
            "Enterprise strict list of allowed marketplace sources. When set in managed settings, ONLY these exact sources can be added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem.",
          ),
        blockedMarketplaces: x
          .array(uE1())
          .optional()
          .describe(
            "Enterprise blocklist of marketplace sources. When set in managed settings, these exact sources are blocked from being added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem.",
          ),
        forceLoginMethod: x
          .enum(["claudeai", "console"])
          .optional()
          .describe(
            'Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing',
          ),
        forceLoginOrgUUID: x
          .string()
          .optional()
          .describe("Organization UUID to use for OAuth login"),
        otelHeadersHelper: x
          .string()
          .optional()
          .describe("Path to a script that outputs OpenTelemetry headers"),
        outputStyle: x
          .string()
          .optional()
          .describe("Controls the output style for assistant responses"),
        language: x
          .string()
          .optional()
          .describe(
            'Preferred language for Claude responses (e.g., "japanese", "spanish")',
          ),
        skipWebFetchPreflight: x
          .boolean()
          .optional()
          .describe(
            "Skip the WebFetch blocklist check for enterprise environments with restrictive security policies",
          ),
        sandbox: l$8.optional(),
        spinnerTipsEnabled: x
          .boolean()
          .optional()
          .describe("Whether to show tips in the spinner"),
        spinnerVerbs: x
          .object({
            mode: x.enum(["append", "replace"]),
            verbs: x.array(x.string()),
          })
          .optional()
          .describe(
            'Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.',
          ),
        syntaxHighlightingDisabled: x
          .boolean()
          .optional()
          .describe("Whether to disable syntax highlighting in diffs"),
        terminalTitleFromRename: x
          .boolean()
          .optional()
          .describe(
            "When true, terminal tab title is set from /rename and not auto-updated based on the conversation topic",
          ),
        alwaysThinkingEnabled: x
          .boolean()
          .optional()
          .describe(
            "When false, thinking is disabled. When absent or true, thinking is enabled automatically for supported models.",
          ),
        fastMode: x
          .boolean()
          .optional()
          .describe(
            "When true, fast mode is enabled. When absent or false, fast mode is off.",
          ),
        promptSuggestionEnabled: x
          .boolean()
          .optional()
          .describe(
            "When false, prompt suggestions are disabled. When absent or true, prompt suggestions are enabled.",
          ),
        agent: x
          .string()
          .optional()
          .describe(
            "Name of an agent (built-in or custom) to use for the main thread. Applies the agent's system prompt, tool restrictions, and model.",
          ),
        companyAnnouncements: x
          .array(x.string())
          .optional()
          .describe(
            "Company announcements to display at startup (one will be randomly selected if multiple are provided)",
          ),
        pluginConfigs: x
          .record(
            x.string(),
            x.object({
              mcpServers: x
                .record(
                  x.string(),
                  x.record(
                    x.string(),
                    x.union([
                      x.string(),
                      x.number(),
                      x.boolean(),
                      x.array(x.string()),
                    ]),
                  ),
                )
                .optional()
                .describe(
                  "User configuration values for MCP servers keyed by server name",
                ),
            }),
          )
          .optional()
          .describe(
            "Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)",
          ),
        remote: x
          .object({
            defaultEnvironmentId: x
              .string()
              .optional()
              .describe("Default environment ID to use for remote sessions"),
          })
          .optional()
          .describe("Remote session configuration"),
        autoUpdatesChannel: x
          .enum(["latest", "stable"])
          .optional()
          .describe("Release channel for auto-updates (latest or stable)"),
        minimumVersion: x
          .string()
          .optional()
          .describe(
            "Minimum version to stay on - prevents downgrades when switching to stable channel",
          ),
        plansDirectory: x
          .string()
          .optional()
          .describe(
            "Custom directory for plan files, relative to project root. If not set, defaults to ~/.claude/plans/",
          ),
        ...{},
        prefersReducedMotion: x
          .boolean()
          .optional()
          .describe(
            "Reduce or disable animations for accessibility (spinner shimmer, flash effects, etc.)",
          ),
        autoMemoryEnabled: x
          .boolean()
          .optional()
          .describe(
            "Enable auto-memory for this project. When false, Claude will not read from or write to the auto-memory directory.",
          ),
        skipDangerousModePermissionPrompt: x
          .boolean()
          .optional()
          .describe(
            "Whether the user has accepted the bypass permissions mode dialog",
          ),
      })
      .passthrough()));
