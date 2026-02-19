// Module: oe (cjs)
// Dependencies: [huA, IuA]
// Exports: NUMERIC, ALPHANUMERIC, BYTE, KANJI, MIXED, getCharCountIndicator, getBestModeForData, toString, isValid, from
// Lines: 480502-480553 in cli.formatted.js
// ---

  var N8z = huA(),
    xuA = IuA();
  v8z.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] };
  v8z.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] };
  v8z.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] };
  v8z.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] };
  v8z.MIXED = { bit: -1 };
  v8z.getCharCountIndicator = function (q, K) {
    if (!q.ccBits) throw Error("Invalid mode: " + q);
    if (!N8z.isValid(K)) throw Error("Invalid version: " + K);
    if (K >= 1 && K < 10) return q.ccBits[0];
    else if (K < 27) return q.ccBits[1];
    return q.ccBits[2];
  };
  v8z.getBestModeForData = function (q) {
    if (xuA.testNumeric(q)) return v8z.NUMERIC;
    else if (xuA.testAlphanumeric(q)) return v8z.ALPHANUMERIC;
    else if (xuA.testKanji(q)) return v8z.KANJI;
    else return v8z.BYTE;
  };
  v8z.toString = function (q) {
    if (q && q.id) return q.id;
    throw Error("Invalid mode");
  };
  v8z.isValid = function (q) {
    return q && q.bit && q.ccBits;
  };
  function T8z(A) {
    if (typeof A !== "string") throw Error("Param is not a string");
    switch (A.toLowerCase()) {
      case "numeric":
        return v8z.NUMERIC;
      case "alphanumeric":
        return v8z.ALPHANUMERIC;
      case "kanji":
        return v8z.KANJI;
      case "byte":
        return v8z.BYTE;
      default:
        throw Error("Unknown mode: " + A);
    }
  }
  v8z.from = function (q, K) {
    if (v8z.isValid(q)) return q;
    try {
      return T8z(q);
    } catch (Y) {
      return K;
    }
  };
