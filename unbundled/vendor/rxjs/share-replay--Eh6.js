// Module: Eh6 (cjs)
// Dependencies: [Na1, ia1]
// Exports: shareReplay
// Lines: 14470-14500 in cli.formatted.js
// ---

  Object.defineProperty(q48, "__esModule", { value: !0 });
  q48.shareReplay = void 0;
  var K1K = Na1(),
    Y1K = ia1();
  function z1K(A, q, K) {
    var Y,
      z,
      w,
      H,
      $ = !1;
    if (A && typeof A === "object")
      ((Y = A.bufferSize),
        (H = Y === void 0 ? 1 / 0 : Y),
        (z = A.windowTime),
        (q = z === void 0 ? 1 / 0 : z),
        (w = A.refCount),
        ($ = w === void 0 ? !1 : w),
        (K = A.scheduler));
    else H = A !== null && A !== void 0 ? A : 1 / 0;
    return Y1K.share({
      connector: function () {
        return new K1K.ReplaySubject(H, q, K);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: $,
    });
  }
  q48.shareReplay = z1K;
