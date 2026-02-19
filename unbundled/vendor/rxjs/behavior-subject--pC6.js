// Module: pC6 (cjs)
// Dependencies: [qM]
// Exports: BehaviorSubject
// Lines: 8515-8587 in cli.formatted.js
// ---

  var ppq =
    (ww1 && ww1.__extends) ||
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
  Object.defineProperty(ww1, "__esModule", { value: !0 });
  ww1.BehaviorSubject = void 0;
  var dpq = qM(),
    cpq = (function (A) {
      ppq(q, A);
      function q(K) {
        var Y = A.call(this) || this;
        return ((Y._value = K), Y);
      }
      return (
        Object.defineProperty(q.prototype, "value", {
          get: function () {
            return this.getValue();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (q.prototype._subscribe = function (K) {
          var Y = A.prototype._subscribe.call(this, K);
          return (!Y.closed && K.next(this._value), Y);
        }),
        (q.prototype.getValue = function () {
          var K = this,
            Y = K.hasError,
            z = K.thrownError,
            w = K._value;
          if (Y) throw z;
          return (this._throwIfClosed(), w);
        }),
        (q.prototype.next = function (K) {
          A.prototype.next.call(this, (this._value = K));
        }),
        q
      );
    })(dpq.Subject);
  ww1.BehaviorSubject = cpq;
