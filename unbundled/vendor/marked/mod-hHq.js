// Module: hHq (lazy)
// Dependencies: [Xq, F6, SB]
// Pre-declarations: var Zc1;
// Lines: 496477-496619 in cli.formatted.js
// ---

var Zc1;

  Xq();
  SB();
  F6();
  Zc1 = zA(function (A) {
    return {
      PreToolUse: {
        summary: "Before tool execution",
        description: `Input to command is JSON of tool call arguments.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and block tool call
Other exit codes - show stderr to user only but continue with tool call`,
        matcherMetadata: { fieldToMatch: "tool_name", values: A },
      },
      PostToolUse: {
        summary: "After tool execution",
        description: `Input to command is JSON with fields "inputs" (tool call arguments) and "response" (tool call response).
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
        matcherMetadata: { fieldToMatch: "tool_name", values: A },
      },
      PostToolUseFailure: {
        summary: "After tool execution fails",
        description: `Input to command is JSON with tool_name, tool_input, tool_use_id, error, error_type, is_interrupt, and is_timeout.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
        matcherMetadata: { fieldToMatch: "tool_name", values: A },
      },
      Notification: {
        summary: "When notifications are sent",
        description: `Input to command is JSON with notification message and type.
Exit code 0 - stdout/stderr not shown
Other exit codes - show stderr to user only`,
        matcherMetadata: {
          fieldToMatch: "notification_type",
          values: [
            "permission_prompt",
            "idle_prompt",
            "auth_success",
            "elicitation_dialog",
          ],
        },
      },
      UserPromptSubmit: {
        summary: "When the user submits a prompt",
        description: `Input to command is JSON with original user prompt text.
Exit code 0 - stdout shown to Claude
Exit code 2 - block processing, erase original prompt, and show stderr to user only
Other exit codes - show stderr to user only`,
      },
      SessionStart: {
        summary: "When a new session is started",
        description: `Input to command is JSON with session start source.
Exit code 0 - stdout shown to Claude
Blocking errors are ignored
Other exit codes - show stderr to user only`,
        matcherMetadata: {
          fieldToMatch: "source",
          values: ["startup", "resume", "clear", "compact"],
        },
      },
      Stop: {
        summary: "Right before Claude concludes its response",
        description: `Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and continue conversation
Other exit codes - show stderr to user only`,
      },
      SubagentStart: {
        summary: "When a subagent (Task tool call) is started",
        description: `Input to command is JSON with agent_id and agent_type.
Exit code 0 - stdout shown to subagent
Blocking errors are ignored
Other exit codes - show stderr to user only`,
        matcherMetadata: { fieldToMatch: "agent_type", values: [] },
      },
      SubagentStop: {
        summary:
          "Right before a subagent (Task tool call) concludes its response",
        description: `Input to command is JSON with agent_id, agent_type, and agent_transcript_path.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to subagent and continue having it run
Other exit codes - show stderr to user only`,
        matcherMetadata: { fieldToMatch: "agent_type", values: [] },
      },
      PreCompact: {
        summary: "Before conversation compaction",
        description: `Input to command is JSON with compaction details.
Exit code 0 - stdout appended as custom compact instructions
Exit code 2 - block compaction
Other exit codes - show stderr to user only but continue with compaction`,
        matcherMetadata: {
          fieldToMatch: "trigger",
          values: ["manual", "auto"],
        },
      },
      SessionEnd: {
        summary: "When a session is ending",
        description: `Input to command is JSON with session end reason.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
        matcherMetadata: {
          fieldToMatch: "reason",
          values: ["clear", "logout", "prompt_input_exit", "other"],
        },
      },
      PermissionRequest: {
        summary: "When a permission dialog is displayed",
        description: `Input to command is JSON with tool_name, tool_input, and tool_use_id.
Output JSON with hookSpecificOutput containing decision to allow or deny.
Exit code 0 - use hook decision if provided
Other exit codes - show stderr to user only`,
        matcherMetadata: { fieldToMatch: "tool_name", values: A },
      },
      Setup: {
        summary: "Repo setup hooks for init and maintenance",
        description: `Input to command is JSON with trigger (init or maintenance).
Exit code 0 - stdout shown to Claude
Blocking errors are ignored
Other exit codes - show stderr to user only`,
        matcherMetadata: {
          fieldToMatch: "trigger",
          values: ["init", "maintenance"],
        },
      },
      TeammateIdle: {
        summary: "When a teammate is about to go idle",
        description: `Input to command is JSON with teammate_name and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to teammate and prevent idle (teammate continues working)
Other exit codes - show stderr to user only`,
      },
      TaskCompleted: {
        summary: "When a task is being marked as completed",
        description: `Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and prevent task completion
Other exit codes - show stderr to user only`,
      },
    };
  });
