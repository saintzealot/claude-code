// Module: j1 (cjs)
// Exports: Activity, Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, __COMPILER_RUNTIME, cache, cacheSignal, cloneElement, createContext, createElement, createRef, forwardRef, isValidElement, lazy, memo, startTransition, unstable_useCacheRefresh, use, useActionState, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useEffectEvent, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useOptimistic, useReducer, useRef, useState, useSyncExternalStore, useTransition, version
// Lines: 105970-106430 in cli.formatted.js
// ---

  var ae6 = Symbol.for("react.transitional.element"),
    De3 = Symbol.for("react.portal"),
    Me3 = Symbol.for("react.fragment"),
    Pe3 = Symbol.for("react.strict_mode"),
    We3 = Symbol.for("react.profiler"),
    Ge3 = Symbol.for("react.consumer"),
    Ze3 = Symbol.for("react.context"),
    fe3 = Symbol.for("react.forward_ref"),
    Ve3 = Symbol.for("react.suspense"),
    Ne3 = Symbol.for("react.memo"),
    yp8 = Symbol.for("react.lazy"),
    Te3 = Symbol.for("react.activity"),
    Ep8 = Symbol.iterator;
  function ve3(A) {
    if (A === null || typeof A !== "object") return null;
    return (
      (A = (Ep8 && A[Ep8]) || A["@@iterator"]),
      typeof A === "function" ? A : null
    );
  }
  var Cp8 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Sp8 = Object.assign,
    hp8 = {};
  function H_1(A, q, K) {
    ((this.props = A),
      (this.context = q),
      (this.refs = hp8),
      (this.updater = K || Cp8));
  }
  H_1.prototype.isReactComponent = {};
  H_1.prototype.setState = function (A, q) {
    if (typeof A !== "object" && typeof A !== "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, A, q, "setState");
  };
  H_1.prototype.forceUpdate = function (A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function Ip8() {}
  Ip8.prototype = H_1.prototype;
  function oe6(A, q, K) {
    ((this.props = A),
      (this.context = q),
      (this.refs = hp8),
      (this.updater = K || Cp8));
  }
  var se6 = (oe6.prototype = new Ip8());
  se6.constructor = oe6;
  Sp8(se6, H_1.prototype);
  se6.isPureReactComponent = !0;
  var kp8 = Array.isArray;
  function re6() {}
  var rH = { H: null, A: null, T: null, S: null },
    xp8 = Object.prototype.hasOwnProperty;
  function te6(A, q, K) {
    var Y = K.ref;
    return {
      $$typeof: ae6,
      type: A,
      key: q,
      ref: Y !== void 0 ? Y : null,
      props: K,
    };
  }
  function Ee3(A, q) {
    return te6(A.type, q, A.props);
  }
  function ee6(A) {
    return typeof A === "object" && A !== null && A.$$typeof === ae6;
  }
  function ke3(A) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (K) {
        return q[K];
      })
    );
  }
  var Lp8 = /\/+/g;
  function ne6(A, q) {
    return typeof A === "object" && A !== null && A.key != null
      ? ke3("" + A.key)
      : q.toString(36);
  }
  function Le3(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status === "string"
            ? A.then(re6, re6)
            : ((A.status = "pending"),
              A.then(
                function (q) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = q));
                },
                function (q) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = q));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function w_1(A, q, K, Y, z) {
    var w = typeof A;
    if (w === "undefined" || w === "boolean") A = null;
    var H = !1;
    if (A === null) H = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case ae6:
            case De3:
              H = !0;
              break;
            case yp8:
              return ((H = A._init), w_1(H(A._payload), q, K, Y, z));
          }
      }
    if (H)
      return (
        (z = z(A)),
        (H = Y === "" ? "." + ne6(A, 0) : Y),
        kp8(z)
          ? ((K = ""),
            H != null && (K = H.replace(Lp8, "$&/") + "/"),
            w_1(z, q, K, "", function (_) {
              return _;
            }))
          : z != null &&
            (ee6(z) &&
              (z = Ee3(
                z,
                K +
                  (z.key == null || (A && A.key === z.key)
                    ? ""
                    : ("" + z.key).replace(Lp8, "$&/") + "/") +
                  H,
              )),
            q.push(z)),
        1
      );
    H = 0;
    var $ = Y === "" ? "." : Y + ":";
    if (kp8(A))
      for (var O = 0; O < A.length; O++)
        ((Y = A[O]), (w = $ + ne6(Y, O)), (H += w_1(Y, q, K, w, z)));
    else if (((O = ve3(A)), typeof O === "function"))
      for (A = O.call(A), O = 0; !(Y = A.next()).done; )
        ((Y = Y.value), (w = $ + ne6(Y, O++)), (H += w_1(Y, q, K, w, z)));
    else if (w === "object") {
      if (typeof A.then === "function") return w_1(Le3(A), q, K, Y, z);
      throw (
        (q = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return H;
  }
  function T76(A, q, K) {
    if (A == null) return A;
    var Y = [],
      z = 0;
    return (
      w_1(A, Y, "", "", function (w) {
        return q.call(K, w, z++);
      }),
      Y
    );
  }
  function Re3(A) {
    if (A._status === -1) {
      var q = A._result;
      ((q = q()),
        q.then(
          function (K) {
            if (A._status === 0 || A._status === -1)
              ((A._status = 1), (A._result = K));
          },
          function (K) {
            if (A._status === 0 || A._status === -1)
              ((A._status = 2), (A._result = K));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = q)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var Rp8 =
      typeof reportError === "function"
        ? reportError
        : function (A) {
            if (
              typeof window === "object" &&
              typeof window.ErrorEvent === "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A === "object" &&
                  A !== null &&
                  typeof A.message === "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process === "object" &&
              typeof process.emit === "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    ye3 = {
      map: T76,
      forEach: function (A, q, K) {
        T76(
          A,
          function () {
            q.apply(this, arguments);
          },
          K,
        );
      },
      count: function (A) {
        var q = 0;
        return (
          T76(A, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (A) {
        return (
          T76(A, function (q) {
            return q;
          }) || []
        );
      },
      only: function (A) {
        if (!ee6(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    };
  Ce3.Activity = Te3;
  Ce3.Children = ye3;
  Ce3.Component = H_1;
  Ce3.Fragment = Me3;
  Ce3.Profiler = We3;
  Ce3.PureComponent = oe6;
  Ce3.StrictMode = Pe3;
  Ce3.Suspense = Ve3;
  Ce3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = rH;
  Ce3.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (A) {
      return rH.H.useMemoCache(A);
    },
  };
  Ce3.cache = function (A) {
    return function () {
      return A.apply(null, arguments);
    };
  };
  Ce3.cacheSignal = function () {
    return null;
  };
  Ce3.cloneElement = function (A, q, K) {
    if (A === null || A === void 0)
      throw Error(
        "The argument must be a React element, but you passed " + A + ".",
      );
    var Y = Sp8({}, A.props),
      z = A.key;
    if (q != null)
      for (w in (q.key !== void 0 && (z = "" + q.key), q))
        !xp8.call(q, w) ||
          w === "key" ||
          w === "__self" ||
          w === "__source" ||
          (w === "ref" && q.ref === void 0) ||
          (Y[w] = q[w]);
    var w = arguments.length - 2;
    if (w === 1) Y.children = K;
    else if (1 < w) {
      for (var H = Array(w), $ = 0; $ < w; $++) H[$] = arguments[$ + 2];
      Y.children = H;
    }
    return te6(A.type, z, Y);
  };
  Ce3.createContext = function (A) {
    return (
      (A = {
        $$typeof: Ze3,
        _currentValue: A,
        _currentValue2: A,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (A.Provider = A),
      (A.Consumer = { $$typeof: Ge3, _context: A }),
      A
    );
  };
  Ce3.createElement = function (A, q, K) {
    var Y,
      z = {},
      w = null;
    if (q != null)
      for (Y in (q.key !== void 0 && (w = "" + q.key), q))
        xp8.call(q, Y) &&
          Y !== "key" &&
          Y !== "__self" &&
          Y !== "__source" &&
          (z[Y] = q[Y]);
    var H = arguments.length - 2;
    if (H === 1) z.children = K;
    else if (1 < H) {
      for (var $ = Array(H), O = 0; O < H; O++) $[O] = arguments[O + 2];
      z.children = $;
    }
    if (A && A.defaultProps)
      for (Y in ((H = A.defaultProps), H)) z[Y] === void 0 && (z[Y] = H[Y]);
    return te6(A, w, z);
  };
  Ce3.createRef = function () {
    return { current: null };
  };
  Ce3.forwardRef = function (A) {
    return { $$typeof: fe3, render: A };
  };
  Ce3.isValidElement = ee6;
  Ce3.lazy = function (A) {
    return { $$typeof: yp8, _payload: { _status: -1, _result: A }, _init: Re3 };
  };
  Ce3.memo = function (A, q) {
    return { $$typeof: Ne3, type: A, compare: q === void 0 ? null : q };
  };
  Ce3.startTransition = function (A) {
    var q = rH.T,
      K = {};
    rH.T = K;
    try {
      var Y = A(),
        z = rH.S;
      (z !== null && z(K, Y),
        typeof Y === "object" &&
          Y !== null &&
          typeof Y.then === "function" &&
          Y.then(re6, Rp8));
    } catch (w) {
      Rp8(w);
    } finally {
      (q !== null && K.types !== null && (q.types = K.types), (rH.T = q));
    }
  };
  Ce3.unstable_useCacheRefresh = function () {
    return rH.H.useCacheRefresh();
  };
  Ce3.use = function (A) {
    return rH.H.use(A);
  };
  Ce3.useActionState = function (A, q, K) {
    return rH.H.useActionState(A, q, K);
  };
  Ce3.useCallback = function (A, q) {
    return rH.H.useCallback(A, q);
  };
  Ce3.useContext = function (A) {
    return rH.H.useContext(A);
  };
  Ce3.useDebugValue = function () {};
  Ce3.useDeferredValue = function (A, q) {
    return rH.H.useDeferredValue(A, q);
  };
  Ce3.useEffect = function (A, q) {
    return rH.H.useEffect(A, q);
  };
  Ce3.useEffectEvent = function (A) {
    return rH.H.useEffectEvent(A);
  };
  Ce3.useId = function () {
    return rH.H.useId();
  };
  Ce3.useImperativeHandle = function (A, q, K) {
    return rH.H.useImperativeHandle(A, q, K);
  };
  Ce3.useInsertionEffect = function (A, q) {
    return rH.H.useInsertionEffect(A, q);
  };
  Ce3.useLayoutEffect = function (A, q) {
    return rH.H.useLayoutEffect(A, q);
  };
  Ce3.useMemo = function (A, q) {
    return rH.H.useMemo(A, q);
  };
  Ce3.useOptimistic = function (A, q) {
    return rH.H.useOptimistic(A, q);
  };
  Ce3.useReducer = function (A, q, K) {
    return rH.H.useReducer(A, q, K);
  };
  Ce3.useRef = function (A) {
    return rH.H.useRef(A);
  };
  Ce3.useState = function (A) {
    return rH.H.useState(A);
  };
  Ce3.useSyncExternalStore = function (A, q, K) {
    return rH.H.useSyncExternalStore(A, q, K);
  };
  Ce3.useTransition = function () {
    return rH.H.useTransition();
  };
  Ce3.version = "19.2.0";
