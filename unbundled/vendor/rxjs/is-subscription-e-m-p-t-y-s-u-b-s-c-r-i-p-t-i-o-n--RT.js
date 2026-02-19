// Module: RT (cjs)
// Dependencies: [f2, kC6, xQ]
// Exports: isSubscription, EMPTY_SUBSCRIPTION, Subscription
// Lines: 7231-7408 in cli.formatted.js
// ---

  var ooA =
      (mf && mf.__values) ||
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
      },
    soA =
      (mf && mf.__read) ||
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
    toA =
      (mf && mf.__spreadArray) ||
      function (A, q) {
        for (var K = 0, Y = q.length, z = A.length; K < Y; K++, z++)
          A[z] = q[K];
        return A;
      };
  Object.defineProperty(mf, "__esModule", { value: !0 });
  mf.isSubscription = mf.EMPTY_SUBSCRIPTION = mf.Subscription = void 0;
  var bT1 = f2(),
    LC6 = kC6(),
    eoA = xQ(),
    RC6 = (function () {
      function A(q) {
        ((this.initialTeardown = q),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null));
      }
      return (
        (A.prototype.unsubscribe = function () {
          var q, K, Y, z, w;
          if (!this.closed) {
            this.closed = !0;
            var H = this._parentage;
            if (H)
              if (((this._parentage = null), Array.isArray(H)))
                try {
                  for (var $ = ooA(H), O = $.next(); !O.done; O = $.next()) {
                    var _ = O.value;
                    _.remove(this);
                  }
                } catch (P) {
                  q = { error: P };
                } finally {
                  try {
                    if (O && !O.done && (K = $.return)) K.call($);
                  } finally {
                    if (q) throw q.error;
                  }
                }
              else H.remove(this);
            var J = this.initialTeardown;
            if (bT1.isFunction(J))
              try {
                J();
              } catch (P) {
                w = P instanceof LC6.UnsubscriptionError ? P.errors : [P];
              }
            var X = this._finalizers;
            if (X) {
              this._finalizers = null;
              try {
                for (var j = ooA(X), D = j.next(); !D.done; D = j.next()) {
                  var M = D.value;
                  try {
                    AsA(M);
                  } catch (P) {
                    if (
                      ((w = w !== null && w !== void 0 ? w : []),
                      P instanceof LC6.UnsubscriptionError)
                    )
                      w = toA(toA([], soA(w)), soA(P.errors));
                    else w.push(P);
                  }
                }
              } catch (P) {
                Y = { error: P };
              } finally {
                try {
                  if (D && !D.done && (z = j.return)) z.call(j);
                } finally {
                  if (Y) throw Y.error;
                }
              }
            }
            if (w) throw new LC6.UnsubscriptionError(w);
          }
        }),
        (A.prototype.add = function (q) {
          var K;
          if (q && q !== this)
            if (this.closed) AsA(q);
            else {
              if (q instanceof A) {
                if (q.closed || q._hasParent(this)) return;
                q._addParent(this);
              }
              (this._finalizers =
                (K = this._finalizers) !== null && K !== void 0 ? K : []).push(
                q,
              );
            }
        }),
        (A.prototype._hasParent = function (q) {
          var K = this._parentage;
          return K === q || (Array.isArray(K) && K.includes(q));
        }),
        (A.prototype._addParent = function (q) {
          var K = this._parentage;
          this._parentage = Array.isArray(K) ? (K.push(q), K) : K ? [K, q] : q;
        }),
        (A.prototype._removeParent = function (q) {
          var K = this._parentage;
          if (K === q) this._parentage = null;
          else if (Array.isArray(K)) eoA.arrRemove(K, q);
        }),
        (A.prototype.remove = function (q) {
          var K = this._finalizers;
          if ((K && eoA.arrRemove(K, q), q instanceof A)) q._removeParent(this);
        }),
        (A.EMPTY = (function () {
          var q = new A();
          return ((q.closed = !0), q);
        })()),
        A
      );
    })();
  mf.Subscription = RC6;
  mf.EMPTY_SUBSCRIPTION = RC6.EMPTY;
  function gUq(A) {
    return (
      A instanceof RC6 ||
      (A &&
        "closed" in A &&
        bT1.isFunction(A.remove) &&
        bT1.isFunction(A.add) &&
        bT1.isFunction(A.unsubscribe))
    );
  }
  mf.isSubscription = gUq;
  function AsA(A) {
    if (bT1.isFunction(A)) A();
    else A.unsubscribe();
  }
