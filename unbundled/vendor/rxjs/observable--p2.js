// Module: p2 (cjs)
// Dependencies: [f2, RT, Kw1, Ga1, Yw1, uT1, BT1]
// Exports: Observable
// Lines: 7765-7887 in cli.formatted.js
// ---

  Object.defineProperty(ysA, "__esModule", { value: !0 });
  ysA.Observable = void 0;
  var uC6 = Yw1(),
    Jpq = RT(),
    Xpq = uT1(),
    jpq = BT1(),
    Dpq = Kw1(),
    bC6 = f2(),
    Mpq = Ga1(),
    Ppq = (function () {
      function A(q) {
        if (q) this._subscribe = q;
      }
      return (
        (A.prototype.lift = function (q) {
          var K = new A();
          return ((K.source = this), (K.operator = q), K);
        }),
        (A.prototype.subscribe = function (q, K, Y) {
          var z = this,
            w = Gpq(q) ? q : new uC6.SafeSubscriber(q, K, Y);
          return (
            Mpq.errorContext(function () {
              var H = z,
                $ = H.operator,
                O = H.source;
              w.add(
                $ ? $.call(w, O) : O ? z._subscribe(w) : z._trySubscribe(w),
              );
            }),
            w
          );
        }),
        (A.prototype._trySubscribe = function (q) {
          try {
            return this._subscribe(q);
          } catch (K) {
            q.error(K);
          }
        }),
        (A.prototype.forEach = function (q, K) {
          var Y = this;
          return (
            (K = RsA(K)),
            new K(function (z, w) {
              var H = new uC6.SafeSubscriber({
                next: function ($) {
                  try {
                    q($);
                  } catch (O) {
                    (w(O), H.unsubscribe());
                  }
                },
                error: w,
                complete: z,
              });
              Y.subscribe(H);
            })
          );
        }),
        (A.prototype._subscribe = function (q) {
          var K;
          return (K = this.source) === null || K === void 0
            ? void 0
            : K.subscribe(q);
        }),
        (A.prototype[Xpq.observable] = function () {
          return this;
        }),
        (A.prototype.pipe = function () {
          var q = [];
          for (var K = 0; K < arguments.length; K++) q[K] = arguments[K];
          return jpq.pipeFromArray(q)(this);
        }),
        (A.prototype.toPromise = function (q) {
          var K = this;
          return (
            (q = RsA(q)),
            new q(function (Y, z) {
              var w;
              K.subscribe(
                function (H) {
                  return (w = H);
                },
                function (H) {
                  return z(H);
                },
                function () {
                  return Y(w);
                },
              );
            })
          );
        }),
        (A.create = function (q) {
          return new A(q);
        }),
        A
      );
    })();
  ysA.Observable = Ppq;
  function RsA(A) {
    var q;
    return (q = A !== null && A !== void 0 ? A : Dpq.config.Promise) !== null &&
      q !== void 0
      ? q
      : Promise;
  }
  function Wpq(A) {
    return (
      A &&
      bC6.isFunction(A.next) &&
      bC6.isFunction(A.error) &&
      bC6.isFunction(A.complete)
    );
  }
  function Gpq(A) {
    return (
      (A && A instanceof uC6.Subscriber) || (Wpq(A) && Jpq.isSubscription(A))
    );
  }
