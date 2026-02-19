// Module: r5q (cjs)
// Exports: Patterns, isValid, from, getPenaltyN1, getPenaltyN2, getPenaltyN3, getPenaltyN4, applyMask, getBestMask
// Lines: 480217-480346 in cli.formatted.js
// ---

  nAz.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  var kY1 = { N1: 3, N2: 3, N3: 40, N4: 10 };
  nAz.isValid = function (q) {
    return q != null && q !== "" && !isNaN(q) && q >= 0 && q <= 7;
  };
  nAz.from = function (q) {
    return nAz.isValid(q) ? parseInt(q, 10) : void 0;
  };
  nAz.getPenaltyN1 = function (q) {
    let K = q.size,
      Y = 0,
      z = 0,
      w = 0,
      H = null,
      $ = null;
    for (let O = 0; O < K; O++) {
      ((z = w = 0), (H = $ = null));
      for (let _ = 0; _ < K; _++) {
        let J = q.get(O, _);
        if (J === H) z++;
        else {
          if (z >= 5) Y += kY1.N1 + (z - 5);
          ((H = J), (z = 1));
        }
        if (((J = q.get(_, O)), J === $)) w++;
        else {
          if (w >= 5) Y += kY1.N1 + (w - 5);
          (($ = J), (w = 1));
        }
      }
      if (z >= 5) Y += kY1.N1 + (z - 5);
      if (w >= 5) Y += kY1.N1 + (w - 5);
    }
    return Y;
  };
  nAz.getPenaltyN2 = function (q) {
    let K = q.size,
      Y = 0;
    for (let z = 0; z < K - 1; z++)
      for (let w = 0; w < K - 1; w++) {
        let H =
          q.get(z, w) + q.get(z, w + 1) + q.get(z + 1, w) + q.get(z + 1, w + 1);
        if (H === 4 || H === 0) Y++;
      }
    return Y * kY1.N2;
  };
  nAz.getPenaltyN3 = function (q) {
    let K = q.size,
      Y = 0,
      z = 0,
      w = 0;
    for (let H = 0; H < K; H++) {
      z = w = 0;
      for (let $ = 0; $ < K; $++) {
        if (
          ((z = ((z << 1) & 2047) | q.get(H, $)),
          $ >= 10 && (z === 1488 || z === 93))
        )
          Y++;
        if (
          ((w = ((w << 1) & 2047) | q.get($, H)),
          $ >= 10 && (w === 1488 || w === 93))
        )
          Y++;
      }
    }
    return Y * kY1.N3;
  };
  nAz.getPenaltyN4 = function (q) {
    let K = 0,
      Y = q.data.length;
    for (let w = 0; w < Y; w++) K += q.data[w];
    return Math.abs(Math.ceil((K * 100) / Y / 5) - 10) * kY1.N4;
  };
  function iAz(A, q, K) {
    switch (A) {
      case nAz.Patterns.PATTERN000:
        return (q + K) % 2 === 0;
      case nAz.Patterns.PATTERN001:
        return q % 2 === 0;
      case nAz.Patterns.PATTERN010:
        return K % 3 === 0;
      case nAz.Patterns.PATTERN011:
        return (q + K) % 3 === 0;
      case nAz.Patterns.PATTERN100:
        return (Math.floor(q / 2) + Math.floor(K / 3)) % 2 === 0;
      case nAz.Patterns.PATTERN101:
        return ((q * K) % 2) + ((q * K) % 3) === 0;
      case nAz.Patterns.PATTERN110:
        return (((q * K) % 2) + ((q * K) % 3)) % 2 === 0;
      case nAz.Patterns.PATTERN111:
        return (((q * K) % 3) + ((q + K) % 2)) % 2 === 0;
      default:
        throw Error("bad maskPattern:" + A);
    }
  }
  nAz.applyMask = function (q, K) {
    let Y = K.size;
    for (let z = 0; z < Y; z++)
      for (let w = 0; w < Y; w++) {
        if (K.isReserved(w, z)) continue;
        K.xor(w, z, iAz(q, w, z));
      }
  };
  nAz.getBestMask = function (q, K) {
    let Y = Object.keys(nAz.Patterns).length,
      z = 0,
      w = 1 / 0;
    for (let H = 0; H < Y; H++) {
      (K(H), nAz.applyMask(H, q));
      let $ =
        nAz.getPenaltyN1(q) +
        nAz.getPenaltyN2(q) +
        nAz.getPenaltyN3(q) +
        nAz.getPenaltyN4(q);
      if ((nAz.applyMask(H, q), $ < w)) ((w = $), (z = H));
    }
    return z;
  };
