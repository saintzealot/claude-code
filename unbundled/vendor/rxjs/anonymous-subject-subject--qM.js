// Module: qM (cjs)
// Dependencies: [xQ, RT, Ga1, p2, FC6]
// Exports: AnonymousSubject, Subject
// Lines: 8274-8514 in cli.formatted.js
// ---

  var asA =
      (ex && ex.__extends) ||
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
      })(),
    Qpq =
      (ex && ex.__values) ||
      function (A) {
        var q = typeof Symbol === "function" && Symbol.iterator,
          K = q && A[q],
          Y = 0;
        if (K) return K.call(A);
        if (A && typeof A.length === "number")
          return {
            next: function () {
              if (A && Y >= A.length) A = void 0;
              return { value: A && A[Y++], done: !A };
            },
          };
        throw TypeError(
          q ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      };
  Object.defineProperty(ex, "__esModule", { value: !0 });
  ex.AnonymousSubject = ex.Subject = void 0;
  var rsA = p2(),
    gC6 = RT(),
    gpq = FC6(),
    Upq = xQ(),
    QC6 = Ga1(),
    osA = (function (A) {
      asA(q, A);
      function q() {
        var K = A.call(this) || this;
        return (
          (K.closed = !1),
          (K.currentObservers = null),
          (K.observers = []),
          (K.isStopped = !1),
          (K.hasError = !1),
          (K.thrownError = null),
          K
        );
      }
      return (
        (q.prototype.lift = function (K) {
          var Y = new UC6(this, this);
          return ((Y.operator = K), Y);
        }),
        (q.prototype._throwIfClosed = function () {
          if (this.closed) throw new gpq.ObjectUnsubscribedError();
        }),
        (q.prototype.next = function (K) {
          var Y = this;
          QC6.errorContext(function () {
            var z, w;
            if ((Y._throwIfClosed(), !Y.isStopped)) {
              if (!Y.currentObservers)
                Y.currentObservers = Array.from(Y.observers);
              try {
                for (
                  var H = Qpq(Y.currentObservers), $ = H.next();
                  !$.done;
                  $ = H.next()
                ) {
                  var O = $.value;
                  O.next(K);
                }
              } catch (_) {
                z = { error: _ };
              } finally {
                try {
                  if ($ && !$.done && (w = H.return)) w.call(H);
                } finally {
                  if (z) throw z.error;
                }
              }
            }
          });
        }),
        (q.prototype.error = function (K) {
          var Y = this;
          QC6.errorContext(function () {
            if ((Y._throwIfClosed(), !Y.isStopped)) {
              ((Y.hasError = Y.isStopped = !0), (Y.thrownError = K));
              var z = Y.observers;
              while (z.length) z.shift().error(K);
            }
          });
        }),
        (q.prototype.complete = function () {
          var K = this;
          QC6.errorContext(function () {
            if ((K._throwIfClosed(), !K.isStopped)) {
              K.isStopped = !0;
              var Y = K.observers;
              while (Y.length) Y.shift().complete();
            }
          });
        }),
        (q.prototype.unsubscribe = function () {
          ((this.isStopped = this.closed = !0),
            (this.observers = this.currentObservers = null));
        }),
        Object.defineProperty(q.prototype, "observed", {
          get: function () {
            var K;
            return (
              ((K = this.observers) === null || K === void 0
                ? void 0
                : K.length) > 0
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (q.prototype._trySubscribe = function (K) {
          return (
            this._throwIfClosed(),
            A.prototype._trySubscribe.call(this, K)
          );
        }),
        (q.prototype._subscribe = function (K) {
          return (
            this._throwIfClosed(),
            this._checkFinalizedStatuses(K),
            this._innerSubscribe(K)
          );
        }),
        (q.prototype._innerSubscribe = function (K) {
          var Y = this,
            z = this,
            w = z.hasError,
            H = z.isStopped,
            $ = z.observers;
          if (w || H) return gC6.EMPTY_SUBSCRIPTION;
          return (
            (this.currentObservers = null),
            $.push(K),
            new gC6.Subscription(function () {
              ((Y.currentObservers = null), Upq.arrRemove($, K));
            })
          );
        }),
        (q.prototype._checkFinalizedStatuses = function (K) {
          var Y = this,
            z = Y.hasError,
            w = Y.thrownError,
            H = Y.isStopped;
          if (z) K.error(w);
          else if (H) K.complete();
        }),
        (q.prototype.asObservable = function () {
          var K = new rsA.Observable();
          return ((K.source = this), K);
        }),
        (q.create = function (K, Y) {
          return new UC6(K, Y);
        }),
        q
      );
    })(rsA.Observable);
  ex.Subject = osA;
  var UC6 = (function (A) {
    asA(q, A);
    function q(K, Y) {
      var z = A.call(this) || this;
      return ((z.destination = K), (z.source = Y), z);
    }
    return (
      (q.prototype.next = function (K) {
        var Y, z;
        (z =
          (Y = this.destination) === null || Y === void 0 ? void 0 : Y.next) ===
          null ||
          z === void 0 ||
          z.call(Y, K);
      }),
      (q.prototype.error = function (K) {
        var Y, z;
        (z =
          (Y = this.destination) === null || Y === void 0
            ? void 0
            : Y.error) === null ||
          z === void 0 ||
          z.call(Y, K);
      }),
      (q.prototype.complete = function () {
        var K, Y;
        (Y =
          (K = this.destination) === null || K === void 0
            ? void 0
            : K.complete) === null ||
          Y === void 0 ||
          Y.call(K);
      }),
      (q.prototype._subscribe = function (K) {
        var Y, z;
        return (z =
          (Y = this.source) === null || Y === void 0
            ? void 0
            : Y.subscribe(K)) !== null && z !== void 0
          ? z
          : gC6.EMPTY_SUBSCRIPTION;
      }),
      q
    );
  })(osA);
  ex.AnonymousSubject = UC6;
