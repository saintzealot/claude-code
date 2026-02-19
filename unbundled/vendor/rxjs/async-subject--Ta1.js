// Module: Ta1 (cjs)
// Dependencies: [qM]
// Exports: AsyncSubject
// Lines: 8698-8772 in cli.formatted.js
// ---

  var apq =
    ($w1 && $w1.__extends) ||
    (function () {
      var A = function (q, K) {
        return (
          (A =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (Y, z) {
                Y.__proto__ = z;
              }) ||
            function (Y, z) {
              for (var w in z)
                if (Object.prototype.hasOwnProperty.call(z, w)) Y[w] = z[w];
            }),
          A(q, K)
        );
      };
      return function (q, K) {
        if (typeof K !== "function" && K !== null)
          throw TypeError(
            "Class extends value " +
              String(K) +
              " is not a constructor or null",
          );
        A(q, K);
        function Y() {
          this.constructor = q;
        }
        q.prototype =
          K === null
            ? Object.create(K)
            : ((Y.prototype = K.prototype), new Y());
      };
    })();
  Object.defineProperty($w1, "__esModule", { value: !0 });
  $w1.AsyncSubject = void 0;
  var opq = qM(),
    spq = (function (A) {
      apq(q, A);
      function q() {
        var K = (A !== null && A.apply(this, arguments)) || this;
        return ((K._value = null), (K._hasValue = !1), (K._isComplete = !1), K);
      }
      return (
        (q.prototype._checkFinalizedStatuses = function (K) {
          var Y = this,
            z = Y.hasError,
            w = Y._hasValue,
            H = Y._value,
            $ = Y.thrownError,
            O = Y.isStopped,
            _ = Y._isComplete;
          if (z) K.error($);
          else if (O || _) (w && K.next(H), K.complete());
        }),
        (q.prototype.next = function (K) {
          if (!this.isStopped) ((this._value = K), (this._hasValue = !0));
        }),
        (q.prototype.complete = function () {
          var K = this,
            Y = K._hasValue,
            z = K._value,
            w = K._isComplete;
          if (!w)
            ((this._isComplete = !0),
              Y && A.prototype.next.call(this, z),
              A.prototype.complete.call(this));
        }),
        q
      );
    })(opq.Subject);
  $w1.AsyncSubject = spq;
