// Module: HT6 (cjs)
// Exports: L, M, Q, H, isValid, from
// Lines: 480095-480130 in cli.formatted.js
// ---

  FAz.L = { bit: 1 };
  FAz.M = { bit: 0 };
  FAz.Q = { bit: 3 };
  FAz.H = { bit: 2 };
  function mAz(A) {
    if (typeof A !== "string") throw Error("Param is not a string");
    switch (A.toLowerCase()) {
      case "l":
      case "low":
        return FAz.L;
      case "m":
      case "medium":
        return FAz.M;
      case "q":
      case "quartile":
        return FAz.Q;
      case "h":
      case "high":
        return FAz.H;
      default:
        throw Error("Unknown EC Level: " + A);
    }
  }
  FAz.isValid = function (q) {
    return q && typeof q.bit < "u" && q.bit >= 0 && q.bit < 4;
  };
  FAz.from = function (q, K) {
    if (FAz.isValid(q)) return q;
    try {
      return mAz(q);
    } catch (Y) {
      return K;
    }
  };
