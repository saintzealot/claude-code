// Module: RS6 (cjs)
// Dependencies: [V4, fq, P5]
// Exports: catchError
// Lines: 12498-12523 in cli.formatted.js
// ---

  Object.defineProperty(WA8, "__esModule", { value: !0 });
  WA8.catchError = void 0;
  var Daq = P5(),
    Maq = fq(),
    Paq = V4();
  function PA8(A) {
    return Paq.operate(function (q, K) {
      var Y = null,
        z = !1,
        w;
      if (
        ((Y = q.subscribe(
          Maq.createOperatorSubscriber(K, void 0, void 0, function (H) {
            if (((w = Daq.innerFrom(A(H, PA8(A)(q)))), Y))
              (Y.unsubscribe(), (Y = null), w.subscribe(K));
            else z = !0;
          }),
        )),
        z)
      )
        (Y.unsubscribe(), (Y = null), w.subscribe(K));
    });
  }
  WA8.catchError = PA8;
