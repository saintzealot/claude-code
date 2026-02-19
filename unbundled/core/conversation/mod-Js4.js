// Module: Js4 (lazy)
// Dependencies: [Q6, Z6, n7, m9, hz, SH, Dy, X$, xRA]
// Pre-declarations: var sFY, tFY, eFY, AQY, qQY, KQY, XQY, jQY;
// Lines: 430659-430832 in cli.formatted.js
// ---

var sFY, tFY, eFY, AQY, qQY, KQY, XQY, jQY;

  n7();
  $s4();
  X$();
  hz();
  xRA();
  Z6();
  m9();
  SH();
  Dy();
  Q6();
  ((sFY = x.object({
    type: x.literal("message"),
    recipient: x.string(),
    content: x.string(),
    summary: x
      .string()
      .describe(
        "A 5-10 word summary of the message, shown as a preview in the UI",
      ),
  })),
    (tFY = x.object({
      type: x.literal("broadcast"),
      content: x.string(),
      summary: x
        .string()
        .describe(
          "A 5-10 word summary of the message, shown as a preview in the UI",
        ),
    })),
    (eFY = x.object({
      type: x.literal("shutdown_request"),
      recipient: x.string(),
      content: x.string().optional(),
    })),
    (AQY = x.object({
      type: x.literal("shutdown_response"),
      request_id: x.string(),
      approve: x.boolean(),
      content: x.string().optional(),
    })),
    (qQY = x.object({
      type: x.literal("plan_approval_response"),
      request_id: x.string(),
      approve: x.boolean(),
      recipient: x.string(),
      content: x.string().optional(),
    })),
    (KQY = L6(() => x.discriminatedUnion("type", [sFY, tFY, eFY, AQY, qQY]))));
  ((XQY = {
    type: "object",
    properties: {
      type: {
        type: "string",
        enum: [
          "message",
          "broadcast",
          "shutdown_request",
          "shutdown_response",
          "plan_approval_response",
        ],
        description:
          'Message type: "message" for DMs, "broadcast" to all teammates, "shutdown_request" to request shutdown, "shutdown_response" to respond to shutdown, "plan_approval_response" to approve/reject plans',
      },
      recipient: {
        type: "string",
        description:
          "Agent name of the recipient (required for message, shutdown_request, plan_approval_response)",
      },
      content: {
        type: "string",
        description: "Message text, reason, or feedback",
      },
      summary: {
        type: "string",
        description:
          "A 5-10 word summary of the message, shown as a preview in the UI (required for message, broadcast)",
      },
      request_id: {
        type: "string",
        description:
          "Request ID to respond to (required for shutdown_response, plan_approval_response)",
      },
      approve: {
        type: "boolean",
        description:
          "Whether to approve the request (required for shutdown_response, plan_approval_response)",
      },
    },
    required: ["type"],
    additionalProperties: !1,
  }),
    (jQY = {
      name: Wm,
      maxResultSizeChars: 1e5,
      userFacingName() {
        return "SendMessage";
      },
      get inputSchema() {
        return KQY();
      },
      inputJSONSchema: XQY,
      isEnabled() {
        return l8();
      },
      isConcurrencySafe(A) {
        return !1;
      },
      isReadOnly(A) {
        return A.type === "message" || A.type === "broadcast";
      },
      async checkPermissions(A, q) {
        return { behavior: "allow", updatedInput: A };
      },
      async validateInput(A, q) {
        if (
          "recipient" in A &&
          typeof A.recipient === "string" &&
          A.recipient.trim().length === 0
        )
          return {
            result: !1,
            message: "recipient must not be empty",
            errorCode: 9,
          };
        if (
          A.type === "shutdown_response" &&
          !A.approve &&
          (!A.content || A.content.trim().length === 0)
        )
          return {
            result: !1,
            message:
              "content (reason) is required when rejecting a shutdown request",
            errorCode: 9,
          };
        return { result: !0 };
      },
      async description() {
        return As4;
      },
      async prompt() {
        return qs4();
      },
      mapToolResultToToolResultBlockParam(A, q) {
        return {
          tool_use_id: q,
          type: "tool_result",
          content: [{ type: "text", text: F1(A, null, 2) }],
        };
      },
      async call(A, q) {
        switch (A.type) {
          case "message":
            return zQY(A, q);
          case "broadcast":
            return wQY(A, q);
          case "shutdown_request":
            return HQY(A, q);
          case "shutdown_response":
            if (A.approve) return $QY(A, q);
            return OQY(A);
          case "plan_approval_response":
            if (A.approve) return _QY(A, q);
            return JQY(A, q);
        }
      },
      renderToolUseMessage: Ks4,
      renderToolUseProgressMessage: Ys4,
      renderToolUseRejectedMessage: zs4,
      renderToolUseErrorMessage: ws4,
      renderToolResultMessage: Hs4,
    }));
