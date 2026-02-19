// Module: Yw1 (cjs)
// Dependencies: [f2, RT, Kw1, yC6, CC6, e0, XsA, Ga1]
// Exports: EMPTY_OBSERVER, SafeSubscriber, Subscriber
// Lines: 7538-7726 in cli.formatted.js
// ---

  var GsA =
    (vC && vC.__extends) ||
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
  Object.defineProperty(vC, "__esModule", { value: !0 });
  vC.EMPTY_OBSERVER = vC.SafeSubscriber = vC.Subscriber = void 0;
  var eUq = f2(),
    PsA = RT(),
    xC6 = Kw1(),
    Apq = CC6(),
    WsA = e0(),
    SC6 = XsA(),
    qpq = yC6(),
    Kpq = Ga1(),
    ZsA = (function (A) {
      GsA(q, A);
      function q(K) {
        var Y = A.call(this) || this;
        if (((Y.isStopped = !1), K)) {
          if (((Y.destination = K), PsA.isSubscription(K))) K.add(Y);
        } else Y.destination = vC.EMPTY_OBSERVER;
        return Y;
      }
      return (
        (q.create = function (K, Y, z) {
          return new fsA(K, Y, z);
        }),
        (q.prototype.next = function (K) {
          if (this.isStopped) IC6(SC6.nextNotification(K), this);
          else this._next(K);
        }),
        (q.prototype.error = function (K) {
          if (this.isStopped) IC6(SC6.errorNotification(K), this);
          else ((this.isStopped = !0), this._error(K));
        }),
        (q.prototype.complete = function () {
          if (this.isStopped) IC6(SC6.COMPLETE_NOTIFICATION, this);
          else ((this.isStopped = !0), this._complete());
        }),
        (q.prototype.unsubscribe = function () {
          if (!this.closed)
            ((this.isStopped = !0),
              A.prototype.unsubscribe.call(this),
              (this.destination = null));
        }),
        (q.prototype._next = function (K) {
          this.destination.next(K);
        }),
        (q.prototype._error = function (K) {
          try {
            this.destination.error(K);
          } finally {
            this.unsubscribe();
          }
        }),
        (q.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        q
      );
    })(PsA.Subscription);
  vC.Subscriber = ZsA;
  var Ypq = Function.prototype.bind;
  function hC6(A, q) {
    return Ypq.call(A, q);
  }
  var zpq = (function () {
      function A(q) {
        this.partialObserver = q;
      }
      return (
        (A.prototype.next = function (q) {
          var K = this.partialObserver;
          if (K.next)
            try {
              K.next(q);
            } catch (Y) {
              Za1(Y);
            }
        }),
        (A.prototype.error = function (q) {
          var K = this.partialObserver;
          if (K.error)
            try {
              K.error(q);
            } catch (Y) {
              Za1(Y);
            }
          else Za1(q);
        }),
        (A.prototype.complete = function () {
          var q = this.partialObserver;
          if (q.complete)
            try {
              q.complete();
            } catch (K) {
              Za1(K);
            }
        }),
        A
      );
    })(),
    fsA = (function (A) {
      GsA(q, A);
      function q(K, Y, z) {
        var w = A.call(this) || this,
          H;
        if (eUq.isFunction(K) || !K)
          H = {
            next: K !== null && K !== void 0 ? K : void 0,
            error: Y !== null && Y !== void 0 ? Y : void 0,
            complete: z !== null && z !== void 0 ? z : void 0,
          };
        else {
          var $;
          if (w && xC6.config.useDeprecatedNextContext)
            (($ = Object.create(K)),
              ($.unsubscribe = function () {
                return w.unsubscribe();
              }),
              (H = {
                next: K.next && hC6(K.next, $),
                error: K.error && hC6(K.error, $),
                complete: K.complete && hC6(K.complete, $),
              }));
          else H = K;
        }
        return ((w.destination = new zpq(H)), w);
      }
      return q;
    })(ZsA);
  vC.SafeSubscriber = fsA;
  function Za1(A) {
    if (xC6.config.useDeprecatedSynchronousErrorHandling) Kpq.captureError(A);
    else Apq.reportUnhandledError(A);
  }
  function wpq(A) {
    throw A;
  }
  function IC6(A, q) {
    var K = xC6.config.onStoppedNotification;
    K &&
      qpq.timeoutProvider.setTimeout(function () {
        return K(A, q);
      });
  }
  vC.EMPTY_OBSERVER = {
    closed: !0,
    next: WsA.noop,
    error: wpq,
    complete: WsA.noop,
  };
