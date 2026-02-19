// Module: WX4 (cjs)
// Dependencies: [_X4]
// Exports: merge
// Lines: 322152-322245 in cli.formatted.js
// ---

  Object.defineProperty(MX4, "__esModule", { value: !0 });
  MX4.merge = void 0;
  var JX4 = _X4(),
    dqY = 20;
  function cqY(...A) {
    let q = A.shift(),
      K = new WeakMap();
    while (A.length > 0) q = jX4(q, A.shift(), 0, K);
    return q;
  }
  MX4.merge = cqY;
  function BfA(A) {
    if (uD6(A)) return A.slice();
    return A;
  }
  function jX4(A, q, K = 0, Y) {
    let z;
    if (K > dqY) return;
    if ((K++, bD6(A) || bD6(q) || DX4(q))) z = BfA(q);
    else if (uD6(A)) {
      if (((z = A.slice()), uD6(q)))
        for (let w = 0, H = q.length; w < H; w++) z.push(BfA(q[w]));
      else if (CF1(q)) {
        let w = Object.keys(q);
        for (let H = 0, $ = w.length; H < $; H++) {
          let O = w[H];
          z[O] = BfA(q[O]);
        }
      }
    } else if (CF1(A))
      if (CF1(q)) {
        if (!lqY(A, q)) return q;
        z = Object.assign({}, A);
        let w = Object.keys(q);
        for (let H = 0, $ = w.length; H < $; H++) {
          let O = w[H],
            _ = q[O];
          if (bD6(_))
            if (typeof _ > "u") delete z[O];
            else z[O] = _;
          else {
            let J = z[O],
              X = _;
            if (XX4(A, O, Y) || XX4(q, O, Y)) delete z[O];
            else {
              if (CF1(J) && CF1(X)) {
                let j = Y.get(J) || [],
                  D = Y.get(X) || [];
                (j.push({ obj: A, key: O }),
                  D.push({ obj: q, key: O }),
                  Y.set(J, j),
                  Y.set(X, D));
              }
              z[O] = jX4(z[O], _, K, Y);
            }
          }
        }
      } else z = q;
    return z;
  }
  function XX4(A, q, K) {
    let Y = K.get(A[q]) || [];
    for (let z = 0, w = Y.length; z < w; z++) {
      let H = Y[z];
      if (H.key === q && H.obj === A) return !0;
    }
    return !1;
  }
  function uD6(A) {
    return Array.isArray(A);
  }
  function DX4(A) {
    return typeof A === "function";
  }
  function CF1(A) {
    return !bD6(A) && !uD6(A) && !DX4(A) && typeof A === "object";
  }
  function bD6(A) {
    return (
      typeof A === "string" ||
      typeof A === "number" ||
      typeof A === "boolean" ||
      typeof A > "u" ||
      A instanceof Date ||
      A instanceof RegExp ||
      A === null
    );
  }
  function lqY(A, q) {
    if (!(0, JX4.isPlainObject)(A) || !(0, JX4.isPlainObject)(q)) return !1;
    return !0;
  }
