// Module: Ip (lazy)
// Dependencies: [Xq, Z6, u6, jb, u9, S$, QA1, sg, Ep]
// Pre-declarations: var I7q, hp;
// Lines: 521952-522033 in cli.formatted.js
// ---

var I7q, hp;

  jb();
  sg();
  Ep();
  Z6();
  lz();
  LA();
  QA1();
  u6();
  S$();
  Xq();
  u9();
  I7q = ["commands", "agents", "output-styles", "skills"];
  hp = zA(
    async function (A, q) {
      let K = Date.now(),
        Y = Bv6(O8(), A),
        z = Bv6(af(), ".claude", A),
        w = SJA(A, q),
        [H, $, O] = await Promise.all([
          WQA(z).then((P) =>
            P.map((W) => ({ ...W, baseDir: z, source: "policySettings" })),
          ),
          jX("userSettings")
            ? WQA(Y).then((P) =>
                P.map((W) => ({ ...W, baseDir: Y, source: "userSettings" })),
              )
            : Promise.resolve([]),
          jX("projectSettings")
            ? Promise.all(
                w.map((P) =>
                  WQA(P).then((W) =>
                    W.map((G) => ({
                      ...G,
                      baseDir: P,
                      source: "projectSettings",
                    })),
                  ),
                ),
              )
            : Promise.resolve([]),
        ]),
        _ = O.flat(),
        J = [...H, ...$, ..._],
        X = await Promise.all(J.map((P) => m$z(P.filePath))),
        j = new Map(),
        D = [];
      for (let [P, W] of J.entries()) {
        let G = X[P] ?? null;
        if (G === null) {
          D.push(W);
          continue;
        }
        let V = j.get(G);
        if (V !== void 0) {
          h(
            `Skipping duplicate file '${W.filePath}' from ${W.source} (same inode already loaded from ${V})`,
          );
          continue;
        }
        (j.set(G, W.source), D.push(W));
      }
      let M = J.length - D.length;
      if (M > 0)
        h(
          `Deduplicated ${M} files in ${A} (same inode via symlinks or hard links)`,
        );
      return (
        c("tengu_dir_search", {
          durationMs: Date.now() - K,
          managedFilesFound: H.length,
          userFilesFound: $.length,
          projectFilesFound: _.length,
          projectDirsSearched: w.length,
          subdir: A,
        }),
        D
      );
    },
    (A, q) => `${A}:${q}`,
  );
