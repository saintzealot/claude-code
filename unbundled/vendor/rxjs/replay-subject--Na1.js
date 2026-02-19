// Module: Na1 (cjs)
// Dependencies: [qM, Va1]
// Exports: ReplaySubject
// Lines: 8598-8697 in cli.formatted.js
// ---

  var lpq =
    (Hw1 && Hw1.__extends) ||
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
  Object.defineProperty(Hw1, "__esModule", { value: !0 });
  Hw1.ReplaySubject = void 0;
  var ipq = qM(),
    npq = Va1(),
    rpq = (function (A) {
      lpq(q, A);
      function q(K, Y, z) {
        if (K === void 0) K = 1 / 0;
        if (Y === void 0) Y = 1 / 0;
        if (z === void 0) z = npq.dateTimestampProvider;
        var w = A.call(this) || this;
        return (
          (w._bufferSize = K),
          (w._windowTime = Y),
          (w._timestampProvider = z),
          (w._buffer = []),
          (w._infiniteTimeWindow = !0),
          (w._infiniteTimeWindow = Y === 1 / 0),
          (w._bufferSize = Math.max(1, K)),
          (w._windowTime = Math.max(1, Y)),
          w
        );
      }
      return (
        (q.prototype.next = function (K) {
          var Y = this,
            z = Y.isStopped,
            w = Y._buffer,
            H = Y._infiniteTimeWindow,
            $ = Y._timestampProvider,
            O = Y._windowTime;
          if (!z) (w.push(K), !H && w.push($.now() + O));
          (this._trimBuffer(), A.prototype.next.call(this, K));
        }),
        (q.prototype._subscribe = function (K) {
          (this._throwIfClosed(), this._trimBuffer());
          var Y = this._innerSubscribe(K),
            z = this,
            w = z._infiniteTimeWindow,
            H = z._buffer,
            $ = H.slice();
          for (var O = 0; O < $.length && !K.closed; O += w ? 1 : 2)
            K.next($[O]);
          return (this._checkFinalizedStatuses(K), Y);
        }),
        (q.prototype._trimBuffer = function () {
          var K = this,
            Y = K._bufferSize,
            z = K._timestampProvider,
            w = K._buffer,
            H = K._infiniteTimeWindow,
            $ = (H ? 1 : 2) * Y;
          if ((Y < 1 / 0 && $ < w.length && w.splice(0, w.length - $), !H)) {
            var O = z.now(),
              _ = 0;
            for (var J = 1; J < w.length && w[J] <= O; J += 2) _ = J;
            _ && w.splice(0, _ + 1);
          }
        }),
        q
      );
    })(ipq.Subject);
  Hw1.ReplaySubject = rpq;
