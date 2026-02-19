// Module: DBA (cjs)
// Dependencies: [nd1]
// Exports: render
// Lines: 483042-483106 in cli.formatted.js
// ---

  var Yqz = nd1();
  function RYq(A, q) {
    let K = A.a / 255,
      Y = q + '="' + A.hex + '"';
    return K < 1 ? Y + " " + q + '-opacity="' + K.toFixed(2).slice(1) + '"' : Y;
  }
  function jBA(A, q, K) {
    let Y = A + q;
    if (typeof K < "u") Y += " " + K;
    return Y;
  }
  function zqz(A, q, K) {
    let Y = "",
      z = 0,
      w = !1,
      H = 0;
    for (let $ = 0; $ < A.length; $++) {
      let O = Math.floor($ % q),
        _ = Math.floor($ / q);
      if (!O && !w) w = !0;
      if (A[$]) {
        if ((H++, !($ > 0 && O > 0 && A[$ - 1])))
          ((Y += w ? jBA("M", O + K, 0.5 + _ + K) : jBA("m", z, 0)),
            (z = 0),
            (w = !1));
        if (!(O + 1 < q && A[$ + 1])) ((Y += jBA("h", H)), (H = 0));
      } else z++;
    }
    return Y;
  }
  wqz.render = function (q, K, Y) {
    let z = Yqz.getOptions(K),
      w = q.modules.size,
      H = q.modules.data,
      $ = w + z.margin * 2,
      O = !z.color.light.a
        ? ""
        : "<path " +
          RYq(z.color.light, "fill") +
          ' d="M0 0h' +
          $ +
          "v" +
          $ +
          'H0z"/>',
      _ =
        "<path " +
        RYq(z.color.dark, "stroke") +
        ' d="' +
        zqz(H, w, z.margin) +
        '"/>',
      J = 'viewBox="0 0 ' + $ + " " + $ + '"',
      j =
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        (!z.width ? "" : 'width="' + z.width + '" height="' + z.width + '" ') +
        J +
        ' shape-rendering="crispEdges">' +
        O +
        _ +
        `</svg>
`;
    if (typeof Y === "function") Y(null, j);
    return j;
  };
