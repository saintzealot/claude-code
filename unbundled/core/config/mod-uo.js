// Module: uo (lazy)
// Dependencies: [Xq, F6, j8, Z6, u6, C6, S$, eQ, QA1, T4, sg, dv, _01, J01, wu1, Ip]
// Pre-declarations: var DS7, RJA, jS7, Io, $u1, yJA, CJA;
// Lines: 226556-226644 in cli.formatted.js
// ---

var DS7, RJA, jS7, Io, $u1, yJA, CJA;

  Xq();
  C6();
  Z6();
  u6();
  J01();
  Ip();
  j8();
  sg();
  LA();
  QA1();
  S$();
  T4();
  eQ();
  dv();
  F6();
  wu1();
  DS7 = s(_01(), 1);
  RJA = zA(async (A) => {
    let q = xo(O8(), "skills"),
      K = xo(af(), ".claude", "skills"),
      Y = SJA("skills", A);
    h(
      `Loading skills from: managed=${K}, user=${q}, project=[${Y.join(", ")}]`,
    );
    let [z, w, H] = await Promise.all([
        Hu1(K, "policySettings"),
        jX("userSettings") ? Hu1(q, "userSettings") : Promise.resolve([]),
        jX("projectSettings")
          ? Promise.all(Y.map((W) => Hu1(W, "projectSettings")))
          : Promise.resolve([]),
      ]),
      $ = NC(),
      O = jX("projectSettings")
        ? await Promise.all(
            $.map((W) => Hu1(xo(W, ".claude", "skills"), "projectSettings")),
          )
        : [],
      _ = await VH9(A),
      J = [...z, ...w, ...H.flat(), ...O.flat(), ..._],
      X = new Map(),
      j = [];
    for (let { skill: W, filePath: G } of J) {
      if (W.type !== "prompt") continue;
      let V = MH9(G);
      if (V === null) {
        j.push(W);
        continue;
      }
      let Z = X.get(V);
      if (Z !== void 0) {
        h(
          `Skipping duplicate skill '${W.name}' from ${W.source} (same file already loaded from ${Z})`,
        );
        continue;
      }
      (X.set(V, W.source), j.push(W));
    }
    let D = J.length - j.length;
    if (D > 0) h(`Deduplicated ${D} skills (same file)`);
    let M = [],
      P = [];
    for (let W of j)
      if (
        W.type === "prompt" &&
        W.paths &&
        W.paths.length > 0 &&
        !yJA.has(W.name)
      )
        P.push(W);
      else M.push(W);
    for (let W of P) $u1.set(W.name, W);
    if (P.length > 0)
      h(
        `[skills] ${P.length} conditional skills stored (activated when matching files are touched)`,
      );
    return (
      h(
        `Loaded ${j.length} unique skills (${M.length} unconditional, ${P.length} conditional, managed: ${z.length}, user: ${w.length}, project: ${H.flat().length}, additional: ${O.flat().length}, legacy commands: ${_.length})`,
      ),
      M
    );
  });
  ((jS7 = new Set()),
    (Io = new Map()),
    ($u1 = new Map()),
    (yJA = new Set()),
    (CJA = []));
