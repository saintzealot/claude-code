// Module: NYq (cjs)
// Dependencies: [nd1]
// Exports: render, renderToFile
// Lines: 482909-482956 in cli.formatted.js
// ---

  var g4z = nd1(),
    U4z = { WW: " ", WB: "▄", BB: "█", BW: "▀" },
    p4z = { BB: " ", BW: "▄", WW: "█", WB: "▀" };
  function d4z(A, q, K) {
    if (A && q) return K.BB;
    if (A && !q) return K.BW;
    if (!A && q) return K.WB;
    return K.WW;
  }
  c4z.render = function (A, q, K) {
    let Y = g4z.getOptions(q),
      z = U4z;
    if (Y.color.dark.hex === "#ffffff" || Y.color.light.hex === "#000000")
      z = p4z;
    let w = A.modules.size,
      H = A.modules.data,
      $ = "",
      O = Array(w + Y.margin * 2 + 1).join(z.WW);
    O = Array(Y.margin / 2 + 1).join(
      O +
        `
`,
    );
    let _ = Array(Y.margin + 1).join(z.WW);
    $ += O;
    for (let J = 0; J < w; J += 2) {
      $ += _;
      for (let X = 0; X < w; X++) {
        let j = H[J * w + X],
          D = H[(J + 1) * w + X];
        $ += d4z(j, D, z);
      }
      $ +=
        _ +
        `
`;
    }
    if ((($ += O.slice(0, -1)), typeof K === "function")) K(null, $);
    return $;
  };
  c4z.renderToFile = function (q, K, Y, z) {
    if (typeof z > "u") ((z = Y), (Y = void 0));
    let w = h1("fs"),
      H = c4z.render(K, Y);
    w.writeFile(q, H, z);
  };
