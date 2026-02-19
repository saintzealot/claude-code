// Module: H9q (cjs)
// Dependencies: [re, HT6, yuA, huA, oe]
// Exports: from, getCapacity, getBestVersionForData, getEncodedBits
// Lines: 480554-480624 in cli.formatted.js
// ---

  var JT6 = re(),
    C8z = yuA(),
    K9q = HT6(),
    se = oe(),
    FuA = huA(),
    Y9q = JT6.getBCHDigit(7973);
  function S8z(A, q, K) {
    for (let Y = 1; Y <= 40; Y++) if (q <= x8z.getCapacity(Y, K, A)) return Y;
    return;
  }
  function z9q(A, q) {
    return se.getCharCountIndicator(A, q) + 4;
  }
  function h8z(A, q) {
    let K = 0;
    return (
      A.forEach(function (Y) {
        let z = z9q(Y.mode, q);
        K += z + Y.getBitsLength();
      }),
      K
    );
  }
  function I8z(A, q) {
    for (let K = 1; K <= 40; K++)
      if (h8z(A, K) <= x8z.getCapacity(K, q, se.MIXED)) return K;
    return;
  }
  x8z.from = function (q, K) {
    if (FuA.isValid(q)) return parseInt(q, 10);
    return K;
  };
  x8z.getCapacity = function (q, K, Y) {
    if (!FuA.isValid(q)) throw Error("Invalid QR Code version");
    if (typeof Y > "u") Y = se.BYTE;
    let z = JT6.getSymbolTotalCodewords(q),
      w = C8z.getTotalCodewordsCount(q, K),
      H = (z - w) * 8;
    if (Y === se.MIXED) return H;
    let $ = H - z9q(Y, q);
    switch (Y) {
      case se.NUMERIC:
        return Math.floor(($ / 10) * 3);
      case se.ALPHANUMERIC:
        return Math.floor(($ / 11) * 2);
      case se.KANJI:
        return Math.floor($ / 13);
      case se.BYTE:
      default:
        return Math.floor($ / 8);
    }
  };
  x8z.getBestVersionForData = function (q, K) {
    let Y,
      z = K9q.from(K, K9q.M);
    if (Array.isArray(q)) {
      if (q.length > 1) return I8z(q, z);
      if (q.length === 0) return 1;
      Y = q[0];
    } else Y = q;
    return S8z(Y.mode, Y.getLength(), z);
  };
  x8z.getEncodedBits = function (q) {
    if (!FuA.isValid(q) || q < 7) throw Error("Invalid QR Code version");
    let K = q << 12;
    while (JT6.getBCHDigit(K) - Y9q >= 0)
      K ^= 7973 << (JT6.getBCHDigit(K) - Y9q);
    return (q << 12) | K;
  };
