// Module: mT1 (cjs)
// Dependencies: [RT, p2, V4, fq, fa1]
// Exports: ConnectableObservable
// Lines: 8040-8150 in cli.formatted.js
// ---

  var Rpq =
    (zw1 && zw1.__extends) ||
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
  Object.defineProperty(zw1, "__esModule", { value: !0 });
  zw1.ConnectableObservable = void 0;
  var ypq = p2(),
    BsA = RT(),
    Cpq = fa1(),
    Spq = fq(),
    hpq = V4(),
    Ipq = (function (A) {
      Rpq(q, A);
      function q(K, Y) {
        var z = A.call(this) || this;
        if (
          ((z.source = K),
          (z.subjectFactory = Y),
          (z._subject = null),
          (z._refCount = 0),
          (z._connection = null),
          hpq.hasLift(K))
        )
          z.lift = K.lift;
        return z;
      }
      return (
        (q.prototype._subscribe = function (K) {
          return this.getSubject().subscribe(K);
        }),
        (q.prototype.getSubject = function () {
          var K = this._subject;
          if (!K || K.isStopped) this._subject = this.subjectFactory();
          return this._subject;
        }),
        (q.prototype._teardown = function () {
          this._refCount = 0;
          var K = this._connection;
          ((this._subject = this._connection = null),
            K === null || K === void 0 || K.unsubscribe());
        }),
        (q.prototype.connect = function () {
          var K = this,
            Y = this._connection;
          if (!Y) {
            Y = this._connection = new BsA.Subscription();
            var z = this.getSubject();
            if (
              (Y.add(
                this.source.subscribe(
                  Spq.createOperatorSubscriber(
                    z,
                    void 0,
                    function () {
                      (K._teardown(), z.complete());
                    },
                    function (w) {
                      (K._teardown(), z.error(w));
                    },
                    function () {
                      return K._teardown();
                    },
                  ),
                ),
              ),
              Y.closed)
            )
              ((this._connection = null), (Y = BsA.Subscription.EMPTY));
          }
          return Y;
        }),
        (q.prototype.refCount = function () {
          return Cpq.refCount()(this);
        }),
        q
      );
    })(ypq.Observable);
  zw1.ConnectableObservable = Ipq;
