// Module: Ra1 (cjs)
// Dependencies: [f2, kC, La1, wS6]
// Exports: observeNotification, Notification, NotificationKind
// Lines: 10637-10733 in cli.formatted.js
// ---

  Object.defineProperty(neA, "__esModule", { value: !0 });
  neA.observeNotification = neA.Notification = neA.NotificationKind = void 0;
  var Rlq = kC(),
    ylq = La1(),
    Clq = wS6(),
    Slq = f2(),
    hlq;
  (function (A) {
    ((A.NEXT = "N"), (A.ERROR = "E"), (A.COMPLETE = "C"));
  })((hlq = neA.NotificationKind || (neA.NotificationKind = {})));
  var Ilq = (function () {
    function A(q, K, Y) {
      ((this.kind = q),
        (this.value = K),
        (this.error = Y),
        (this.hasValue = q === "N"));
    }
    return (
      (A.prototype.observe = function (q) {
        return ieA(this, q);
      }),
      (A.prototype.do = function (q, K, Y) {
        var z = this,
          w = z.kind,
          H = z.value,
          $ = z.error;
        return w === "N"
          ? q === null || q === void 0
            ? void 0
            : q(H)
          : w === "E"
            ? K === null || K === void 0
              ? void 0
              : K($)
            : Y === null || Y === void 0
              ? void 0
              : Y();
      }),
      (A.prototype.accept = function (q, K, Y) {
        var z;
        return Slq.isFunction(
          (z = q) === null || z === void 0 ? void 0 : z.next,
        )
          ? this.observe(q)
          : this.do(q, K, Y);
      }),
      (A.prototype.toObservable = function () {
        var q = this,
          K = q.kind,
          Y = q.value,
          z = q.error,
          w =
            K === "N"
              ? ylq.of(Y)
              : K === "E"
                ? Clq.throwError(function () {
                    return z;
                  })
                : K === "C"
                  ? Rlq.EMPTY
                  : 0;
        if (!w) throw TypeError("Unexpected notification kind " + K);
        return w;
      }),
      (A.createNext = function (q) {
        return new A("N", q);
      }),
      (A.createError = function (q) {
        return new A("E", void 0, q);
      }),
      (A.createComplete = function () {
        return A.completeNotification;
      }),
      (A.completeNotification = new A("C")),
      A
    );
  })();
  neA.Notification = Ilq;
  function ieA(A, q) {
    var K,
      Y,
      z,
      w = A,
      H = w.kind,
      $ = w.value,
      O = w.error;
    if (typeof H !== "string")
      throw TypeError('Invalid notification, missing "kind"');
    H === "N"
      ? (K = q.next) === null || K === void 0 || K.call(q, $)
      : H === "E"
        ? (Y = q.error) === null || Y === void 0 || Y.call(q, O)
        : (z = q.complete) === null || z === void 0 || z.call(q);
  }
  neA.observeNotification = ieA;
