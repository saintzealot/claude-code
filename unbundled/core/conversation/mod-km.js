// Module: km (cjs)
// Dependencies: [iVA, _Z4, XZ4, ZZ4, aVA, TZ4, EZ4, LZ4]
// Lines: 331967-332134 in cli.formatted.js
// ---

  var Qq = sVA;
  Qq.asPromise = iVA();
  Qq.base64 = _Z4();
  Qq.EventEmitter = XZ4();
  Qq.float = ZZ4();
  Qq.inquire = aVA();
  Qq.utf8 = TZ4();
  Qq.pool = EZ4();
  Qq.LongBits = LZ4();
  Qq.isNode = Boolean(
    typeof global < "u" &&
    global &&
    global.process &&
    global.process.versions &&
    global.process.versions.node,
  );
  Qq.global =
    (Qq.isNode && global) ||
    (typeof window < "u" && window) ||
    (typeof self < "u" && self) ||
    sVA;
  Qq.emptyArray = Object.freeze ? Object.freeze([]) : [];
  Qq.emptyObject = Object.freeze ? Object.freeze({}) : {};
  Qq.isInteger =
    Number.isInteger ||
    function (q) {
      return typeof q === "number" && isFinite(q) && Math.floor(q) === q;
    };
  Qq.isString = function (q) {
    return typeof q === "string" || q instanceof String;
  };
  Qq.isObject = function (q) {
    return q && typeof q === "object";
  };
  Qq.isset = Qq.isSet = function (q, K) {
    var Y = q[K];
    if (Y != null && q.hasOwnProperty(K))
      return (
        typeof Y !== "object" ||
        (Array.isArray(Y) ? Y.length : Object.keys(Y).length) > 0
      );
    return !1;
  };
  Qq.Buffer = (function () {
    try {
      var A = Qq.inquire("buffer").Buffer;
      return A.prototype.utf8Write ? A : null;
    } catch (q) {
      return null;
    }
  })();
  Qq._Buffer_from = null;
  Qq._Buffer_allocUnsafe = null;
  Qq.newBuffer = function (q) {
    return typeof q === "number"
      ? Qq.Buffer
        ? Qq._Buffer_allocUnsafe(q)
        : new Qq.Array(q)
      : Qq.Buffer
        ? Qq._Buffer_from(q)
        : typeof Uint8Array > "u"
          ? q
          : new Uint8Array(q);
  };
  Qq.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
  Qq.Long =
    (Qq.global.dcodeIO && Qq.global.dcodeIO.Long) ||
    Qq.global.Long ||
    Qq.inquire("long");
  Qq.key2Re = /^true|false|0|1$/;
  Qq.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  Qq.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  Qq.longToHash = function (q) {
    return q ? Qq.LongBits.from(q).toHash() : Qq.LongBits.zeroHash;
  };
  Qq.longFromHash = function (q, K) {
    var Y = Qq.LongBits.fromHash(q);
    if (Qq.Long) return Qq.Long.fromBits(Y.lo, Y.hi, K);
    return Y.toNumber(Boolean(K));
  };
  function RZ4(A, q, K) {
    for (var Y = Object.keys(q), z = 0; z < Y.length; ++z)
      if (A[Y[z]] === void 0 || !K) A[Y[z]] = q[Y[z]];
    return A;
  }
  Qq.merge = RZ4;
  Qq.lcFirst = function (q) {
    return q.charAt(0).toLowerCase() + q.substring(1);
  };
  function yZ4(A) {
    function q(K, Y) {
      if (!(this instanceof q)) return new q(K, Y);
      if (
        (Object.defineProperty(this, "message", {
          get: function () {
            return K;
          },
        }),
        Error.captureStackTrace)
      )
        Error.captureStackTrace(this, q);
      else Object.defineProperty(this, "stack", { value: Error().stack || "" });
      if (Y) RZ4(this, Y);
    }
    return (
      (q.prototype = Object.create(Error.prototype, {
        constructor: {
          value: q,
          writable: !0,
          enumerable: !1,
          configurable: !0,
        },
        name: {
          get: function () {
            return A;
          },
          set: void 0,
          enumerable: !1,
          configurable: !0,
        },
        toString: {
          value: function () {
            return this.name + ": " + this.message;
          },
          writable: !0,
          enumerable: !1,
          configurable: !0,
        },
      })),
      q
    );
  }
  Qq.newError = yZ4;
  Qq.ProtocolError = yZ4("ProtocolError");
  Qq.oneOfGetter = function (q) {
    var K = {};
    for (var Y = 0; Y < q.length; ++Y) K[q[Y]] = 1;
    return function () {
      for (var z = Object.keys(this), w = z.length - 1; w > -1; --w)
        if (K[z[w]] === 1 && this[z[w]] !== void 0 && this[z[w]] !== null)
          return z[w];
    };
  };
  Qq.oneOfSetter = function (q) {
    return function (K) {
      for (var Y = 0; Y < q.length; ++Y) if (q[Y] !== K) delete this[q[Y]];
    };
  };
  Qq.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 };
  Qq._configure = function () {
    var A = Qq.Buffer;
    if (!A) {
      Qq._Buffer_from = Qq._Buffer_allocUnsafe = null;
      return;
    }
    ((Qq._Buffer_from =
      (A.from !== Uint8Array.from && A.from) ||
      function (K, Y) {
        return new A(K, Y);
      }),
      (Qq._Buffer_allocUnsafe =
        A.allocUnsafe ||
        function (K) {
          return new A(K);
        }));
  };
