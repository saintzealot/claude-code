// Module: kYq (cjs)
// Exports: render
// Lines: 482990-483033 in cli.formatted.js
// ---

  var r4z = "\x1B[47m\x1B[30m",
    a4z = "\x1B[40m\x1B[37m",
    o4z = function (A, q, K) {
      return {
        "00": "\x1B[0m " + A,
        "01": "\x1B[0m" + q + "▄" + A,
        "02": "\x1B[0m" + K + "▄" + A,
        10: "\x1B[0m" + q + "▀" + A,
        11: " ",
        12: "▄",
        20: "\x1B[0m" + K + "▀" + A,
        21: "▀",
        22: "█",
      };
    },
    vYq = function (A, q, K, Y) {
      let z = q + 1;
      if (K >= z || Y >= z || Y < -1 || K < -1) return "0";
      if (K >= q || Y >= q || Y < 0 || K < 0) return "1";
      let w = Y * q + K;
      return A[w] ? "2" : "1";
    },
    EYq = function (A, q, K, Y) {
      return vYq(A, q, K, Y) + vYq(A, q, K, Y + 1);
    };
  s4z.render = function (A, q, K) {
    let Y = A.modules.size,
      z = A.modules.data,
      w = !!(q && q.inverse),
      H = q && q.inverse ? a4z : r4z,
      _ = o4z(H, w ? "\x1B[30m" : "\x1B[37m", w ? "\x1B[37m" : "\x1B[30m"),
      J =
        `\x1B[0m
` + H,
      X = H;
    for (let j = -1; j < Y + 1; j += 2) {
      for (let D = -1; D < Y; D++) X += _[EYq(z, Y, D, j)];
      X += _[EYq(z, Y, Y, j)] + J;
    }
    if (((X += "\x1B[0m"), typeof K === "function")) K(null, X);
    return X;
  };
