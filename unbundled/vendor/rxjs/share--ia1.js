// Module: ia1 (cjs)
// Dependencies: [Yw1, V4, qM, P5]
// Exports: share
// Lines: 14359-14469 in cli.formatted.js
// ---

  var seq =
      (mi && mi.__read) ||
      function (A, q) {
        var K = typeof Symbol === "function" && A[Symbol.iterator];
        if (!K) return A;
        var Y = K.call(A),
          z,
          w = [],
          H;
        try {
          while ((q === void 0 || q-- > 0) && !(z = Y.next()).done)
            w.push(z.value);
        } catch ($) {
          H = { error: $ };
        } finally {
          try {
            if (z && !z.done && (K = Y.return)) K.call(Y);
          } finally {
            if (H) throw H.error;
          }
        }
        return w;
      },
    teq =
      (mi && mi.__spreadArray) ||
      function (A, q) {
        for (var K = 0, Y = q.length, z = A.length; K < Y; K++, z++)
          A[z] = q[K];
        return A;
      };
  Object.defineProperty(mi, "__esModule", { value: !0 });
  mi.share = void 0;
  var e78 = P5(),
    eeq = qM(),
    A48 = Yw1(),
    A1K = V4();
  function q1K(A) {
    if (A === void 0) A = {};
    var q = A.connector,
      K =
        q === void 0
          ? function () {
              return new eeq.Subject();
            }
          : q,
      Y = A.resetOnError,
      z = Y === void 0 ? !0 : Y,
      w = A.resetOnComplete,
      H = w === void 0 ? !0 : w,
      $ = A.resetOnRefCountZero,
      O = $ === void 0 ? !0 : $;
    return function (_) {
      var J,
        X,
        j,
        D = 0,
        M = !1,
        P = !1,
        W = function () {
          (X === null || X === void 0 || X.unsubscribe(), (X = void 0));
        },
        G = function () {
          (W(), (J = j = void 0), (M = P = !1));
        },
        V = function () {
          var Z = J;
          (G(), Z === null || Z === void 0 || Z.unsubscribe());
        };
      return A1K.operate(function (Z, N) {
        if ((D++, !P && !M)) W();
        var T = (j = j !== null && j !== void 0 ? j : K());
        if (
          (N.add(function () {
            if ((D--, D === 0 && !P && !M)) X = vh6(V, O);
          }),
          T.subscribe(N),
          !J && D > 0)
        )
          ((J = new A48.SafeSubscriber({
            next: function (k) {
              return T.next(k);
            },
            error: function (k) {
              ((P = !0), W(), (X = vh6(G, z, k)), T.error(k));
            },
            complete: function () {
              ((M = !0), W(), (X = vh6(G, H)), T.complete());
            },
          })),
            e78.innerFrom(Z).subscribe(J));
      })(_);
    };
  }
  mi.share = q1K;
  function vh6(A, q) {
    var K = [];
    for (var Y = 2; Y < arguments.length; Y++) K[Y - 2] = arguments[Y];
    if (q === !0) {
      A();
      return;
    }
    if (q === !1) return;
    var z = new A48.SafeSubscriber({
      next: function () {
        (z.unsubscribe(), A());
      },
    });
    return e78.innerFrom(q.apply(void 0, teq([], seq(K)))).subscribe(z);
  }
