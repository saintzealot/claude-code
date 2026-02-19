// Module: xGA (lazy)
// Dependencies: [n7, dH1, IGA]
// Pre-declarations: var ob9, sb9, Wj6;
// Lines: 279487-279574 in cli.formatted.js
// ---

var ob9, sb9, Wj6;

  n7();
  dH1();
  IGA();
  ((ob9 = x.object({
    async: x.literal(!0),
    asyncTimeout: x.number().optional(),
  })),
    (sb9 = x.object({
      continue: x
        .boolean()
        .describe("Whether Claude should continue after hook (default: true)")
        .optional(),
      suppressOutput: x
        .boolean()
        .describe("Hide stdout from transcript (default: false)")
        .optional(),
      stopReason: x
        .string()
        .describe("Message shown when continue is false")
        .optional(),
      decision: x.enum(["approve", "block"]).optional(),
      reason: x.string().describe("Explanation for the decision").optional(),
      systemMessage: x
        .string()
        .describe("Warning message shown to the user")
        .optional(),
      hookSpecificOutput: x
        .union([
          x.object({
            hookEventName: x.literal("PreToolUse"),
            permissionDecision: x.enum(["allow", "deny", "ask"]).optional(),
            permissionDecisionReason: x.string().optional(),
            updatedInput: x.record(x.string(), x.unknown()).optional(),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("UserPromptSubmit"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("SessionStart"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("Setup"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("SubagentStart"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("PostToolUse"),
            additionalContext: x.string().optional(),
            updatedMCPToolOutput: x
              .unknown()
              .describe("Updates the output for MCP tools")
              .optional(),
          }),
          x.object({
            hookEventName: x.literal("PostToolUseFailure"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("Notification"),
            additionalContext: x.string().optional(),
          }),
          x.object({
            hookEventName: x.literal("PermissionRequest"),
            decision: x.union([
              x.object({
                behavior: x.literal("allow"),
                updatedInput: x.record(x.string(), x.unknown()).optional(),
                updatedPermissions: x.array(Pj6).optional(),
              }),
              x.object({
                behavior: x.literal("deny"),
                message: x.string().optional(),
                interrupt: x.boolean().optional(),
              }),
            ]),
          }),
        ])
        .optional(),
    })),
    (Wj6 = x.union([ob9, sb9])));
