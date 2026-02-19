// Module: yD (lazy)
// Dependencies: [n7, bt1, BA1]
// Lines: 46928-47668 in cli.formatted.js
// ---

  n7();
  bt1();
  BA1();
  ((mT = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "life-sciences",
    "knowledge-work-plugins",
  ])),
    (nJK = new Set(["knowledge-work-plugins"])));
  ((rJK =
    /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i),
    (aJK = /[^\u0020-\u007E]/));
  ((tQ = L6(() => x.string().startsWith("./"))),
    (cH1 = L6(() => tQ().endsWith(".json"))),
    (F$8 = L6(() =>
      x.union([
        tQ()
          .refine((A) => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
            message: "MCPB file path must end with .mcpb or .dxt",
          })
          .describe("Path to MCPB file relative to plugin root"),
        x
          .string()
          .url()
          .refine((A) => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
            message: "MCPB URL must end with .mcpb or .dxt",
          })
          .describe("URL to MCPB file"),
      ]),
    )),
    (vQ6 = L6(() => tQ().endsWith(".md"))),
    (EQ6 = L6(() => x.union([vQ6(), tQ()]))),
    (p$8 = L6(() =>
      x.object({
        name: x
          .string()
          .min(1, "Author name cannot be empty")
          .describe("Display name of the plugin author or organization"),
        email: x
          .string()
          .optional()
          .describe("Contact email for support or feedback"),
        url: x
          .string()
          .optional()
          .describe("Website, GitHub profile, or organization URL"),
      }),
    )),
    (sJK = L6(() =>
      x.object({
        name: x
          .string()
          .min(1, "Plugin name cannot be empty")
          .refine((A) => !A.includes(" "), {
            message:
              'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
          })
          .describe(
            "Unique identifier for the plugin, used for namespacing (prefer kebab-case)",
          ),
        version: x
          .string()
          .optional()
          .describe(
            "Semantic version (e.g., 1.2.3) following semver.org specification",
          ),
        description: x
          .string()
          .optional()
          .describe(
            "Brief, user-facing explanation of what the plugin provides",
          ),
        author: p$8()
          .optional()
          .describe("Information about the plugin creator or maintainer"),
        homepage: x
          .string()
          .url()
          .optional()
          .describe("Plugin homepage or documentation URL"),
        repository: x
          .string()
          .optional()
          .describe("Source code repository URL"),
        license: x
          .string()
          .optional()
          .describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
        keywords: x
          .array(x.string())
          .optional()
          .describe("Tags for plugin discovery and categorization"),
      }),
    )),
    (d$8 = L6(() =>
      x.object({
        description: x
          .string()
          .optional()
          .describe(
            "Brief, user-facing explanation of what these hooks provide",
          ),
        hooks: x
          .lazy(() => Bk)
          .describe(
            "The hooks provided by the plugin, in the same format as the one used for settings",
          ),
      }),
    )),
    (tJK = L6(() =>
      x.object({
        hooks: x.union([
          cH1().describe(
            "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
          ),
          x
            .lazy(() => Bk)
            .describe(
              "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
            ),
          x.array(
            x.union([
              cH1().describe(
                "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
              ),
              x
                .lazy(() => Bk)
                .describe(
                  "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
                ),
            ]),
          ),
        ]),
      }),
    )),
    (eJK = L6(() =>
      x
        .object({
          source: EQ6()
            .optional()
            .describe("Path to command markdown file, relative to plugin root"),
          content: x
            .string()
            .optional()
            .describe("Inline markdown content for the command"),
          description: x
            .string()
            .optional()
            .describe("Command description override"),
          argumentHint: x
            .string()
            .optional()
            .describe('Hint for command arguments (e.g., "[file]")'),
          model: x
            .string()
            .optional()
            .describe("Default model for this command"),
          allowedTools: x
            .array(x.string())
            .optional()
            .describe("Tools allowed when command runs"),
        })
        .refine((A) => (A.source && !A.content) || (!A.source && A.content), {
          message:
            'Command must have either "source" (file path) or "content" (inline markdown), but not both',
        }),
    )),
    (AXK = L6(() =>
      x.object({
        commands: x.union([
          EQ6().describe(
            "Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root",
          ),
          x
            .array(
              EQ6().describe(
                "Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root",
              ),
            )
            .describe(
              "List of paths to additional command files or skill directories",
            ),
          x
            .record(x.string(), eJK())
            .describe(
              'Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" → "/plugin:about")',
            ),
        ]),
      }),
    )),
    (qXK = L6(() =>
      x.object({
        agents: x.union([
          vQ6().describe(
            "Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root",
          ),
          x
            .array(
              vQ6().describe(
                "Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root",
              ),
            )
            .describe("List of paths to additional agent files"),
        ]),
      }),
    )),
    (KXK = L6(() =>
      x.object({
        skills: x.union([
          tQ().describe(
            "Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root",
          ),
          x
            .array(
              tQ().describe(
                "Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root",
              ),
            )
            .describe("List of paths to additional skill directories"),
        ]),
      }),
    )),
    (YXK = L6(() =>
      x.object({
        outputStyles: x.union([
          tQ().describe(
            "Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root",
          ),
          x
            .array(
              tQ().describe(
                "Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root",
              ),
            )
            .describe(
              "List of paths to additional output styles directories or files",
            ),
        ]),
      }),
    )),
    (Q$8 = L6(() => x.string().min(1))),
    (zXK = L6(() =>
      x
        .string()
        .min(2)
        .refine((A) => A.startsWith("."), {
          message:
            'File extensions must start with dot (e.g., ".ts", not "ts")',
        }),
    )),
    (wXK = L6(() =>
      x.object({
        mcpServers: x.union([
          cH1().describe(
            "MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)",
          ),
          F$8().describe(
            "Path or URL to MCPB file containing MCP server configuration",
          ),
          x
            .record(x.string(), fb())
            .describe("MCP server configurations keyed by server name"),
          x
            .array(
              x.union([
                cH1().describe("Path to MCP servers configuration file"),
                F$8().describe("Path or URL to MCPB file"),
                x
                  .record(x.string(), fb())
                  .describe("Inline MCP server configurations"),
              ]),
            )
            .describe(
              "Array of MCP server configurations (paths, MCPB files, or inline definitions)",
            ),
        ]),
      }),
    )),
    (lH1 = L6(() =>
      x.strictObject({
        command: x
          .string()
          .min(1)
          .refine(
            (A) => {
              if (A.includes(" ") && !A.startsWith("/")) return !1;
              return !0;
            },
            {
              message:
                "Command should not contain spaces. Use args array for arguments.",
            },
          )
          .describe(
            'Command to execute the LSP server (e.g., "typescript-language-server")',
          ),
        args: x
          .array(Q$8())
          .optional()
          .describe("Command-line arguments to pass to the server"),
        extensionToLanguage: x
          .record(zXK(), Q$8())
          .refine((A) => Object.keys(A).length > 0, {
            message: "extensionToLanguage must have at least one mapping",
          })
          .describe(
            "Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping.",
          ),
        transport: x
          .enum(["stdio", "socket"])
          .default("stdio")
          .describe("Communication transport mechanism"),
        env: x
          .record(x.string(), x.string())
          .optional()
          .describe("Environment variables to set when starting the server"),
        initializationOptions: x
          .unknown()
          .optional()
          .describe(
            "Initialization options passed to the server during initialization",
          ),
        settings: x
          .unknown()
          .optional()
          .describe(
            "Settings passed to the server via workspace/didChangeConfiguration",
          ),
        workspaceFolder: x
          .string()
          .optional()
          .describe("Workspace folder path to use for the server"),
        startupTimeout: x
          .number()
          .int()
          .positive()
          .optional()
          .describe("Maximum time to wait for server startup (milliseconds)"),
        shutdownTimeout: x
          .number()
          .int()
          .positive()
          .optional()
          .describe(
            "Maximum time to wait for graceful shutdown (milliseconds)",
          ),
        restartOnCrash: x
          .boolean()
          .optional()
          .describe("Whether to restart the server if it crashes"),
        maxRestarts: x
          .number()
          .int()
          .nonnegative()
          .optional()
          .describe("Maximum number of restart attempts before giving up"),
      }),
    )),
    (HXK = L6(() =>
      x.object({
        lspServers: x.union([
          cH1().describe(
            "Path to .lsp.json configuration file relative to plugin root",
          ),
          x
            .record(x.string(), lH1())
            .describe("LSP server configurations keyed by server name"),
          x
            .array(
              x.union([
                cH1().describe("Path to LSP configuration file"),
                x
                  .record(x.string(), lH1())
                  .describe("Inline LSP server configurations"),
              ]),
            )
            .describe(
              "Array of LSP server configurations (paths or inline definitions)",
            ),
        ]),
      }),
    )),
    (c$8 = L6(() =>
      x
        .string()
        .refine(
          (A) => !A.includes("..") && !A.includes("//"),
          "Package name cannot contain path traversal patterns",
        )
        .refine((A) => {
          let q = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
            K = /^[a-z0-9][a-z0-9-._]*$/;
          return q.test(A) || K.test(A);
        }, "Invalid npm package name format"),
    )),
    (mA1 = L6(() =>
      x
        .object({
          ...sJK().shape,
          ...tJK().partial().shape,
          ...AXK().partial().shape,
          ...qXK().partial().shape,
          ...KXK().partial().shape,
          ...YXK().partial().shape,
          ...wXK().partial().shape,
          ...HXK().partial().shape,
        })
        .strict(),
    )),
    (uE1 = L6(() =>
      x.discriminatedUnion("source", [
        x.object({
          source: x.literal("url"),
          url: x.string().url().describe("Direct URL to marketplace.json file"),
          headers: x
            .record(x.string(), x.string())
            .optional()
            .describe("Custom HTTP headers (e.g., for authentication)"),
        }),
        x.object({
          source: x.literal("github"),
          repo: x.string().describe("GitHub repository in owner/repo format"),
          ref: x
            .string()
            .optional()
            .describe(
              'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
            ),
          path: x
            .string()
            .optional()
            .describe(
              "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
            ),
        }),
        x.object({
          source: x.literal("git"),
          url: x.string().endsWith(".git").describe("Full git repository URL"),
          ref: x
            .string()
            .optional()
            .describe(
              'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
            ),
          path: x
            .string()
            .optional()
            .describe(
              "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
            ),
        }),
        x.object({
          source: x.literal("npm"),
          package: c$8().describe("NPM package containing marketplace.json"),
        }),
        x.object({
          source: x.literal("file"),
          path: x.string().describe("Local file path to marketplace.json"),
        }),
        x.object({
          source: x.literal("directory"),
          path: x
            .string()
            .describe(
              "Local directory containing .claude-plugin/marketplace.json",
            ),
        }),
        x.object({
          source: x.literal("hostPattern"),
          hostPattern: x
            .string()
            .describe(
              'Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against "github.com". For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").',
            ),
        }),
      ]),
    )),
    (g$8 = L6(() =>
      x
        .string()
        .length(40)
        .regex(
          /^[a-f0-9]{40}$/,
          "Must be a full 40-character lowercase git commit SHA",
        ),
    )),
    ($XK = L6(() =>
      x.union([
        tQ().describe(
          "Path to the plugin root, relative to the marketplace directory",
        ),
        x
          .object({
            source: x.literal("npm"),
            package: c$8()
              .or(x.string())
              .describe(
                "Package name (or url, or local path, or anything else that can be passed to `npm` as a package)",
              ),
            version: x
              .string()
              .optional()
              .describe(
                "Specific version or version range (e.g., ^1.0.0, ~2.1.0)",
              ),
            registry: x
              .string()
              .url()
              .optional()
              .describe(
                "Custom NPM registry URL (defaults to using system default, likely npmjs.org)",
              ),
          })
          .describe("NPM package as plugin source"),
        x
          .object({
            source: x.literal("pip"),
            package: x
              .string()
              .describe("Python package name as it appears on PyPI"),
            version: x
              .string()
              .optional()
              .describe("Version specifier (e.g., ==1.0.0, >=2.0.0, <3.0.0)"),
            registry: x
              .string()
              .url()
              .optional()
              .describe(
                "Custom PyPI registry URL (defaults to using system default, likely pypi.org)",
              ),
          })
          .describe("Python package as plugin source"),
        x.object({
          source: x.literal("url"),
          url: x
            .string()
            .endsWith(".git")
            .describe("Full git repository URL (https:// or git@)"),
          ref: x
            .string()
            .optional()
            .describe(
              'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
            ),
          sha: g$8().optional().describe("Specific commit SHA to use"),
        }),
        x.object({
          source: x.literal("github"),
          repo: x.string().describe("GitHub repository in owner/repo format"),
          ref: x
            .string()
            .optional()
            .describe(
              'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
            ),
          sha: g$8().optional().describe("Specific commit SHA to use"),
        }),
      ]),
    )));
  ((OXK = L6(() =>
    mA1()
      .partial()
      .extend({
        name: x
          .string()
          .min(1, "Plugin name cannot be empty")
          .refine((A) => !A.includes(" "), {
            message:
              'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
          })
          .describe("Unique identifier matching the plugin name"),
        source: $XK().describe("Where to fetch the plugin from"),
        category: x
          .string()
          .optional()
          .describe(
            'Category for organizing plugins (e.g., "productivity", "development")',
          ),
        tags: x
          .array(x.string())
          .optional()
          .describe("Tags for searchability and discovery"),
        strict: x
          .boolean()
          .optional()
          .default(!0)
          .describe(
            "Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.",
          ),
      })
      .strict(),
  )),
    (FA1 = L6(() =>
      x.object({
        name: x
          .string()
          .min(1, "Marketplace must have a name")
          .refine((A) => !A.includes(" "), {
            message:
              'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")',
          })
          .refine((A) => !oJK(A), {
            message:
              'Marketplace name cannot impersonate official Anthropic/Claude marketplaces. Names containing "official", "anthropic", or "claude" in official-sounding combinations are reserved.',
          }),
        owner: p$8().describe("Marketplace maintainer or curator information"),
        plugins: x
          .array(OXK())
          .describe("Collection of available plugins in this marketplace"),
        metadata: x
          .object({
            pluginRoot: x
              .string()
              .optional()
              .describe("Base path for relative plugin sources"),
            version: x.string().optional().describe("Marketplace version"),
            description: x
              .string()
              .optional()
              .describe("Marketplace description"),
          })
          .optional()
          .describe("Optional marketplace metadata"),
      }),
    )),
    (iH1 = L6(() =>
      x
        .string()
        .regex(
          /^[a-z0-9][-a-z0-9._]*@[a-z0-9][-a-z0-9._]*$/i,
          "Plugin ID must be in format: plugin@marketplace",
        ),
    )),
    (H12 = L6(() =>
      x.union([
        iH1(),
        x.object({
          id: iH1().describe('Plugin identifier (e.g., "formatter@tools")'),
          version: x
            .string()
            .optional()
            .describe('Version constraint (e.g., "^2.0.0")'),
          required: x
            .boolean()
            .optional()
            .describe("If true, cannot be disabled"),
          config: x
            .record(x.string(), x.unknown())
            .optional()
            .describe("Plugin-specific configuration"),
        }),
      ]),
    )),
    (_XK = L6(() =>
      x.object({
        version: x.string().describe("Currently installed version"),
        installedAt: x.string().describe("ISO 8601 timestamp of installation"),
        lastUpdated: x
          .string()
          .optional()
          .describe("ISO 8601 timestamp of last update"),
        installPath: x
          .string()
          .describe("Absolute path to the installed plugin directory"),
        gitCommitSha: x
          .string()
          .optional()
          .describe(
            "Git commit SHA for git-based plugins (for version tracking)",
          ),
      }),
    )),
    (BE1 = L6(() =>
      x.object({
        version: x.literal(1).describe("Schema version 1"),
        plugins: x
          .record(iH1(), _XK())
          .describe("Map of plugin IDs to their installation metadata"),
      }),
    )),
    (JXK = L6(() => x.enum(["managed", "user", "project", "local"]))),
    (XXK = L6(() =>
      x.object({
        scope: JXK().describe("Installation scope"),
        projectPath: x
          .string()
          .optional()
          .describe("Project path (required for project/local scopes)"),
        installPath: x
          .string()
          .describe("Absolute path to the versioned plugin directory"),
        version: x.string().optional().describe("Currently installed version"),
        installedAt: x
          .string()
          .optional()
          .describe("ISO 8601 timestamp of installation"),
        lastUpdated: x
          .string()
          .optional()
          .describe("ISO 8601 timestamp of last update"),
        gitCommitSha: x
          .string()
          .optional()
          .describe("Git commit SHA for git-based plugins"),
      }),
    )),
    (mE1 = L6(() =>
      x.object({
        version: x.literal(2).describe("Schema version 2"),
        plugins: x
          .record(iH1(), x.array(XXK()))
          .describe("Map of plugin IDs to arrays of installation entries"),
      }),
    )),
    ($12 = L6(() => x.union([BE1(), mE1()]))),
    (jXK = L6(() =>
      x.object({
        source: uE1().describe("Where to fetch the marketplace from"),
        installLocation: x
          .string()
          .describe("Local cache path where marketplace manifest is stored"),
        lastUpdated: x
          .string()
          .describe("ISO 8601 timestamp of last marketplace refresh"),
        autoUpdate: x
          .boolean()
          .optional()
          .describe(
            "Whether to automatically update this marketplace and its installed plugins on startup",
          ),
      }),
    )),
    (kQ6 = L6(() => x.record(x.string(), jXK()))));
