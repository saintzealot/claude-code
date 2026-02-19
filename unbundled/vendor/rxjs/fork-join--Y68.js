// Module: Y68 (cjs)
// Dependencies: [p2, fq, Qf, P5, ki, XS6, jS6]
// Exports: forkJoin
// Lines: 11407-11460 in cli.formatted.js
// ---

  Object.defineProperty(q68, "__esModule", { value: !0 });
  q68.forkJoin = void 0;
  var $nq = p2(),
    Onq = XS6(),
    _nq = P5(),
    Jnq = Qf(),
    Xnq = fq(),
    jnq = ki(),
    Dnq = jS6();
  function Mnq() {
    var A = [];
    for (var q = 0; q < arguments.length; q++) A[q] = arguments[q];
    var K = Jnq.popResultSelector(A),
      Y = Onq.argsArgArrayOrObject(A),
      z = Y.args,
      w = Y.keys,
      H = new $nq.Observable(function ($) {
        var O = z.length;
        if (!O) {
          $.complete();
          return;
        }
        var _ = Array(O),
          J = O,
          X = O,
          j = function (M) {
            var P = !1;
            _nq.innerFrom(z[M]).subscribe(
              Xnq.createOperatorSubscriber(
                $,
                function (W) {
                  if (!P) ((P = !0), X--);
                  _[M] = W;
                },
                function () {
                  return J--;
                },
                void 0,
                function () {
                  if (!J || !P) {
                    if (!X) $.next(w ? Dnq.createObject(w, _) : _);
                    $.complete();
                  }
                },
              ),
            );
          };
        for (var D = 0; D < O; D++) j(D);
      });
    return K ? H.pipe(jnq.mapOneOrManyArgs(K)) : H;
  }
  q68.forkJoin = Mnq;
