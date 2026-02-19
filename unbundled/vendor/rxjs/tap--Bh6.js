// Module: Bh6 (cjs)
// Dependencies: [f2, AM, V4, fq]
// Exports: tap
// Lines: 14780-14827 in cli.formatted.js
// ---

  Object.defineProperty(h48, "__esModule", { value: !0 });
  h48.tap = void 0;
  var i1K = f2(),
    n1K = V4(),
    r1K = fq(),
    a1K = AM();
  function o1K(A, q, K) {
    var Y =
      i1K.isFunction(A) || q || K ? { next: A, error: q, complete: K } : A;
    return Y
      ? n1K.operate(function (z, w) {
          var H;
          (H = Y.subscribe) === null || H === void 0 || H.call(Y);
          var $ = !0;
          z.subscribe(
            r1K.createOperatorSubscriber(
              w,
              function (O) {
                var _;
                ((_ = Y.next) === null || _ === void 0 || _.call(Y, O),
                  w.next(O));
              },
              function () {
                var O;
                (($ = !1),
                  (O = Y.complete) === null || O === void 0 || O.call(Y),
                  w.complete());
              },
              function (O) {
                var _;
                (($ = !1),
                  (_ = Y.error) === null || _ === void 0 || _.call(Y, O),
                  w.error(O));
              },
              function () {
                var O, _;
                if ($)
                  (O = Y.unsubscribe) === null || O === void 0 || O.call(Y);
                (_ = Y.finalize) === null || _ === void 0 || _.call(Y);
              },
            ),
          );
        })
      : a1K.identity;
  }
  h48.tap = o1K;
