// Module: ac7 (lazy)
// Dependencies: [n7, YPA]
// Pre-declarations: var WR9, GR9, rc7;
// Lines: 264576-264631 in cli.formatted.js
// ---

var WR9, GR9, rc7;

  n7();
  YPA();
  ((WR9 = L6(() => x.object({}).passthrough())),
    (GR9 = L6(() => x.string().describe("MCP tool execution result"))),
    (rc7 = {
      isMcp: !0,
      isEnabled() {
        return !0;
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly() {
        return !1;
      },
      isDestructive() {
        return !1;
      },
      isOpenWorld() {
        return !1;
      },
      name: "mcp",
      maxResultSizeChars: 1e5,
      async description() {
        return pc7;
      },
      async prompt() {
        return Uc7;
      },
      get inputSchema() {
        return WR9();
      },
      get outputSchema() {
        return GR9();
      },
      async call() {
        return { data: "" };
      },
      async checkPermissions() {
        return {
          behavior: "passthrough",
          message: "MCPTool requires permission.",
        };
      },
      renderToolUseMessage: cc7,
      userFacingName: () => "mcp",
      renderToolUseRejectedMessage: lc7,
      renderToolUseErrorMessage: ic7,
      renderToolUseProgressMessage: nc7,
      renderToolResultMessage: QJ6,
      mapToolResultToToolResultBlockParam(A, q) {
        return { tool_use_id: q, type: "tool_result", content: A };
      },
    }));
