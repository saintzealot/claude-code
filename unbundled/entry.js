// Entry point - sNz() function and startup code
// ---

process.env.COREPACK_ENABLE_AUTO_PIN = "0";
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let A = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = A
    ? `${A} --max-old-space-size=8192`
    : "--max-old-space-size=8192";
}
async function sNz() {
  let A = process.argv.slice(2);
  if (
    A.length === 1 &&
    (A[0] === "--version" || A[0] === "-v" || A[0] === "-V")
  ) {
    console.log(
      `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.42", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-02-13T18:55:32Z" }.VERSION} (Claude Code)`,
    );
    return;
  }
  let { profileCheckpoint: q } = await Promise.resolve().then(
    () => (Pi(), rnA),
  );
  if ((q("cli_entry"), A[0] === "--mcp-cli")) {
    let { isMcpCliEnabled: w } = await Promise.resolve().then(
      () => (q0(), fDq),
    );
    if (w()) {
      let H = A.slice(1),
        { mcpCliMain: $ } = await Promise.resolve().then(() => (aDq(), rDq));
      process.exit(await $(H));
    }
  }
  if (A[0] === "--ripgrep") {
    q("cli_ripgrep_path");
    let w = A.slice(1),
      { ripgrepMain: H } = await Promise.resolve().then(() => (sDq(), oDq));
    process.exitCode = H(w);
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    q("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: w } = await Promise.resolve().then(
      () => (H0q(), w0q),
    );
    await w();
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    q("cli_chrome_native_host_path");
    let { runChromeNativeHost: w } = await Promise.resolve().then(
      () => (D0q(), j0q),
    );
    await w();
    return;
  }
  let K = A.includes("--tmux") || A.includes("--tmux=classic");
  if (A.length === 1 && (A[0] === "--update" || A[0] === "--upgrade"))
    process.argv = [process.argv[0], process.argv[1], "update"];
  if (
    process.env.CLAUDECODE === "1" &&
    !A.some((w) => w.startsWith("--team-name"))
  )
    (console.error(`Error: Claude Code cannot be launched inside another Claude Code session.
Nested sessions share runtime resources and will crash all active sessions.
To bypass this check, unset the CLAUDECODE environment variable.`),
      process.exit(1));
  let { startCapturingEarlyInput: Y } = await Promise.resolve().then(
    () => (aS1(), zq7),
  );
  (Y(), q("cli_before_main_import"));
  let { main: z } = await Promise.resolve().then(() => ($Sq(), HSq));
  (q("cli_after_main_import"), await z(), q("cli_after_main_complete"));
}
sNz();

