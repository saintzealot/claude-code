// Module: LYq (cjs)
// Dependencies: [TYq, kYq]
// Exports: render
// Lines: 483034-483041 in cli.formatted.js
// ---

  var e4z = TYq(),
    Aqz = kYq();
  qqz.render = function (A, q, K) {
    if (q && q.small) return Aqz.render(A, q, K);
    return e4z.render(A, q, K);
  };
