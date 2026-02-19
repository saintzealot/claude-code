// Module: nj (lazy)
// Dependencies: [Xq, F6, j8, Z6, u6, kz, v_, S$, GW, sg, _01, UM, IX6, o2, oA]
// Lines: 274563-274782 in cli.formatted.js
// ---

  Xq();
  F6();
  j8();
  kz();
  u6();
  IX6();
  S$();
  o2();
  oA();
  LA();
  sg();
  UM();
  Z6();
  v_();
  GW();
  GW();
  ((Kr7 = s(_01(), 1)),
    (Ih9 = new Set([
      ".md",
      ".txt",
      ".text",
      ".json",
      ".yaml",
      ".yml",
      ".toml",
      ".xml",
      ".csv",
      ".html",
      ".htm",
      ".css",
      ".scss",
      ".sass",
      ".less",
      ".js",
      ".ts",
      ".tsx",
      ".jsx",
      ".mjs",
      ".cjs",
      ".mts",
      ".cts",
      ".py",
      ".pyi",
      ".pyw",
      ".rb",
      ".erb",
      ".rake",
      ".go",
      ".rs",
      ".java",
      ".kt",
      ".kts",
      ".scala",
      ".c",
      ".cpp",
      ".cc",
      ".cxx",
      ".h",
      ".hpp",
      ".hxx",
      ".cs",
      ".swift",
      ".sh",
      ".bash",
      ".zsh",
      ".fish",
      ".ps1",
      ".bat",
      ".cmd",
      ".env",
      ".ini",
      ".cfg",
      ".conf",
      ".config",
      ".properties",
      ".sql",
      ".graphql",
      ".gql",
      ".proto",
      ".vue",
      ".svelte",
      ".astro",
      ".ejs",
      ".hbs",
      ".pug",
      ".jade",
      ".php",
      ".pl",
      ".pm",
      ".lua",
      ".r",
      ".R",
      ".dart",
      ".ex",
      ".exs",
      ".erl",
      ".hrl",
      ".clj",
      ".cljs",
      ".cljc",
      ".edn",
      ".hs",
      ".lhs",
      ".elm",
      ".ml",
      ".mli",
      ".f",
      ".f90",
      ".f95",
      ".for",
      ".cmake",
      ".make",
      ".makefile",
      ".gradle",
      ".sbt",
      ".rst",
      ".adoc",
      ".asciidoc",
      ".org",
      ".tex",
      ".latex",
      ".lock",
      ".log",
      ".diff",
      ".patch",
    ])));
  c_ = zA((A = !1) => {
    let q = Date.now();
    iA("info", "memory_files_started");
    let K = [],
      Y = new Set(),
      z = XH(),
      w = A || z.hasClaudeMdExternalIncludesApproved || !1,
      H = Pm("Managed");
    K.push(...pR(H, "Managed", Y, w));
    let $ = zWA();
    if (
      (K.push(
        ...$31({
          rulesDir: $,
          type: "Managed",
          processedPaths: Y,
          includeExternal: w,
          conditionalRule: !1,
        }),
      ),
      jX("userSettings"))
    ) {
      let J = Pm("User");
      K.push(...pR(J, "User", Y, !0));
      let X = wWA();
      K.push(
        ...$31({
          rulesDir: X,
          type: "User",
          processedPaths: Y,
          includeExternal: !0,
          conditionalRule: !1,
        }),
      );
    }
    let O = [],
      _ = R8();
    while (_ !== Lh9(_).root) (O.push(_), (_ = xX6(_)));
    for (let J of O.reverse()) {
      if (jX("projectSettings")) {
        let X = wE(J, "CLAUDE.md");
        K.push(...pR(X, "Project", Y, w));
        let j = wE(J, ".claude", "CLAUDE.md");
        K.push(...pR(j, "Project", Y, w));
        let D = wE(J, ".claude", "rules");
        K.push(
          ...$31({
            rulesDir: D,
            type: "Project",
            processedPaths: Y,
            includeExternal: w,
            conditionalRule: !1,
          }),
        );
      }
      if (jX("localSettings")) {
        let X = wE(J, "CLAUDE.local.md");
        K.push(...pR(X, "Local", Y, w));
      }
    }
    if ($6(process.env.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
      let J = NC();
      for (let X of J) {
        let j = wE(X, "CLAUDE.md");
        K.push(...pR(j, "Project", Y, w));
        let D = wE(X, ".claude", "CLAUDE.md");
        K.push(...pR(D, "Project", Y, w));
        let M = wE(X, ".claude", "rules");
        K.push(
          ...$31({
            rulesDir: M,
            type: "Project",
            processedPaths: Y,
            includeExternal: w,
            conditionalRule: !1,
          }),
        );
      }
    }
    if (Sz()) {
      let J = qWA(N46(), "AutoMem");
      if (J && !Y.has(J.path)) (Y.add(J.path), K.push(J));
    }
    return (
      iA("info", "memory_files_completed", {
        duration_ms: Date.now() - q,
        file_count: K.length,
        total_content_length: K.reduce((J, X) => J + X.content.length, 0),
      }),
      K
    );
  });
