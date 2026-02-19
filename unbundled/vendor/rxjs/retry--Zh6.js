// Module: Zh6 (cjs)
// Dependencies: [AM, V4, fq, P5, Ri]
// Exports: retry
// Lines: 14158-14226 in cli.formatted.js
// ---

  Object.defineProperty(F78, "__esModule", { value: !0 });
  F78.retry = void 0;
  var Req = V4(),
    m78 = fq(),
    yeq = AM(),
    Ceq = Ri(),
    Seq = P5();
  function heq(A) {
    if (A === void 0) A = 1 / 0;
    var q;
    if (A && typeof A === "object") q = A;
    else q = { count: A };
    var K = q.count,
      Y = K === void 0 ? 1 / 0 : K,
      z = q.delay,
      w = q.resetOnSuccess,
      H = w === void 0 ? !1 : w;
    return Y <= 0
      ? yeq.identity
      : Req.operate(function ($, O) {
          var _ = 0,
            J,
            X = function () {
              var j = !1;
              if (
                ((J = $.subscribe(
                  m78.createOperatorSubscriber(
                    O,
                    function (D) {
                      if (H) _ = 0;
                      O.next(D);
                    },
                    void 0,
                    function (D) {
                      if (_++ < Y) {
                        var M = function () {
                          if (J) (J.unsubscribe(), (J = null), X());
                          else j = !0;
                        };
                        if (z != null) {
                          var P =
                              typeof z === "number"
                                ? Ceq.timer(z)
                                : Seq.innerFrom(z(D, _)),
                            W = m78.createOperatorSubscriber(
                              O,
                              function () {
                                (W.unsubscribe(), M());
                              },
                              function () {
                                O.complete();
                              },
                            );
                          P.subscribe(W);
                        } else M();
                      } else O.error(D);
                    },
                  ),
                )),
                j)
              )
                (J.unsubscribe(), (J = null), X());
            };
          X();
        });
  }
  F78.retry = heq;
