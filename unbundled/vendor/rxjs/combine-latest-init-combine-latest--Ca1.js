// Module: Ca1 (cjs)
// Dependencies: [AM, p2, fq, Qf, bQ, uQ, ki, XS6, jS6]
// Exports: combineLatestInit, combineLatest
// Lines: 11151-11229 in cli.formatted.js
// ---

  Object.defineProperty(B18, "__esModule", { value: !0 });
  B18.combineLatestInit = B18.combineLatest = void 0;
  var yiq = p2(),
    Ciq = XS6(),
    x18 = uQ(),
    b18 = AM(),
    Siq = ki(),
    h18 = Qf(),
    hiq = jS6(),
    Iiq = fq(),
    xiq = bQ();
  function biq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = h18.popScheduler(A),
      Y = h18.popResultSelector(A),
      z = Ciq.argsArgArrayOrObject(A),
      w = z.args,
      H = z.keys;
    if (w.length === 0) return x18.from([], K);
    var $ = new yiq.Observable(
      u18(
        w,
        K,
        H
          ? function (O) {
              return hiq.createObject(H, O);
            }
          : b18.identity,
      ),
    );
    return Y ? $.pipe(Siq.mapOneOrManyArgs(Y)) : $;
  }
  B18.combineLatest = biq;
  function u18(A, q, K) {
    if (K === void 0) K = b18.identity;
    return function (Y) {
      I18(
        q,
        function () {
          var z = A.length,
            w = Array(z),
            H = z,
            $ = z,
            O = function (J) {
              I18(
                q,
                function () {
                  var X = x18.from(A[J], q),
                    j = !1;
                  X.subscribe(
                    Iiq.createOperatorSubscriber(
                      Y,
                      function (D) {
                        if (((w[J] = D), !j)) ((j = !0), $--);
                        if (!$) Y.next(K(w.slice()));
                      },
                      function () {
                        if (!--H) Y.complete();
                      },
                    ),
                  );
                },
                Y,
              );
            };
          for (var _ = 0; _ < z; _++) O(_);
        },
        Y,
      );
    };
  }
  B18.combineLatestInit = u18;
  function I18(A, q, K) {
    if (A) xiq.executeSchedule(K, A, q);
    else q();
  }
