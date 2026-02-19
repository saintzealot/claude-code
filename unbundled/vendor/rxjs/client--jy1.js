// Module: jy1 (cjs)
// Dependencies: [gb, b$, OV, L6A]
// Exports: Client, Command, NoOpLogger, SENSITIVE_STRING, ServiceException, _json, convertMap, createAggregatedClient, decorateServiceException, emitWarningIfUnsupportedVersion, getArrayIfSingleItem, getDefaultClientConfiguration, getDefaultExtensionConfiguration, getValueFromTextNode, isSerializableHeaderValue, loadConfigsForDefaultMode, map, resolveDefaultRuntimeConfig, serializeDateTime, serializeFloat, take, throwDefaultError, withBaseException
// Lines: 111040-111539 in cli.formatted.js
// ---

  var Bl8 = gb(),
    h6A = OV(),
    y6A = L6A(),
    qK5 = b$(),
    bl8 = $V();
  class ml8 {
    config;
    middlewareStack = Bl8.constructStack();
    initConfig;
    handlers;
    constructor(A) {
      this.config = A;
    }
    send(A, q, K) {
      let Y = typeof q !== "function" ? q : void 0,
        z = typeof q === "function" ? q : K,
        w = Y === void 0 && this.config.cacheMiddleware === !0,
        H;
      if (w) {
        if (!this.handlers) this.handlers = new WeakMap();
        let $ = this.handlers;
        if ($.has(A.constructor)) H = $.get(A.constructor);
        else
          ((H = A.resolveMiddleware(this.middlewareStack, this.config, Y)),
            $.set(A.constructor, H));
      } else
        (delete this.handlers,
          (H = A.resolveMiddleware(this.middlewareStack, this.config, Y)));
      if (z)
        H(A)
          .then(
            ($) => z(null, $.output),
            ($) => z($),
          )
          .catch(() => {});
      else return H(A).then(($) => $.output);
    }
    destroy() {
      (this.config?.requestHandler?.destroy?.(), delete this.handlers);
    }
  }
  var R6A = "***SensitiveInformation***";
  function C6A(A, q) {
    if (q == null) return q;
    let K = qK5.NormalizedSchema.of(A);
    if (K.getMergedTraits().sensitive) return R6A;
    if (K.isListSchema()) {
      if (!!K.getValueSchema().getMergedTraits().sensitive) return R6A;
    } else if (K.isMapSchema()) {
      if (
        !!K.getKeySchema().getMergedTraits().sensitive ||
        !!K.getValueSchema().getMergedTraits().sensitive
      )
        return R6A;
    } else if (K.isStructSchema() && typeof q === "object") {
      let Y = q,
        z = {};
      for (let [w, H] of K.structIterator())
        if (Y[w] != null) z[w] = C6A(H, Y[w]);
      return z;
    }
    return q;
  }
  class I6A {
    middlewareStack = Bl8.constructStack();
    schema;
    static classBuilder() {
      return new Fl8();
    }
    resolveMiddlewareWithContext(
      A,
      q,
      K,
      {
        middlewareFn: Y,
        clientName: z,
        commandName: w,
        inputFilterSensitiveLog: H,
        outputFilterSensitiveLog: $,
        smithyContext: O,
        additionalContext: _,
        CommandCtor: J,
      },
    ) {
      for (let P of Y.bind(this)(J, A, q, K)) this.middlewareStack.use(P);
      let X = A.concat(this.middlewareStack),
        { logger: j } = q,
        D = {
          logger: j,
          clientName: z,
          commandName: w,
          inputFilterSensitiveLog: H,
          outputFilterSensitiveLog: $,
          [y6A.SMITHY_CONTEXT_KEY]: { commandInstance: this, ...O },
          ..._,
        },
        { requestHandler: M } = q;
      return X.resolve((P) => M.handle(P.request, K || {}), D);
    }
  }
  class Fl8 {
    _init = () => {};
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(A) {
      this._init = A;
    }
    ep(A) {
      return ((this._ep = A), this);
    }
    m(A) {
      return ((this._middlewareFn = A), this);
    }
    s(A, q, K = {}) {
      return ((this._smithyContext = { service: A, operation: q, ...K }), this);
    }
    c(A = {}) {
      return ((this._additionalContext = A), this);
    }
    n(A, q) {
      return ((this._clientName = A), (this._commandName = q), this);
    }
    f(A = (K) => K, q = (K) => K) {
      return (
        (this._inputFilterSensitiveLog = A),
        (this._outputFilterSensitiveLog = q),
        this
      );
    }
    ser(A) {
      return ((this._serializer = A), this);
    }
    de(A) {
      return ((this._deserializer = A), this);
    }
    sc(A) {
      return (
        (this._operationSchema = A),
        (this._smithyContext.operationSchema = A),
        this
      );
    }
    build() {
      let A = this,
        q;
      return (q = class extends I6A {
        input;
        static getEndpointParameterInstructions() {
          return A._ep;
        }
        constructor(...[K]) {
          super();
          ((this.input = K ?? {}),
            A._init(this),
            (this.schema = A._operationSchema));
        }
        resolveMiddleware(K, Y, z) {
          let w = A._operationSchema,
            H = w?.[4] ?? w?.input,
            $ = w?.[5] ?? w?.output;
          return this.resolveMiddlewareWithContext(K, Y, z, {
            CommandCtor: q,
            middlewareFn: A._middlewareFn,
            clientName: A._clientName,
            commandName: A._commandName,
            inputFilterSensitiveLog:
              A._inputFilterSensitiveLog ?? (w ? C6A.bind(null, H) : (O) => O),
            outputFilterSensitiveLog:
              A._outputFilterSensitiveLog ?? (w ? C6A.bind(null, $) : (O) => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext,
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      });
    }
  }
  var KK5 = "***SensitiveInformation***",
    YK5 = (A, q) => {
      for (let K of Object.keys(A)) {
        let Y = A[K],
          z = async function (H, $, O) {
            let _ = new Y(H);
            if (typeof $ === "function") this.send(_, $);
            else if (typeof O === "function") {
              if (typeof $ !== "object")
                throw Error(`Expected http options but got ${typeof $}`);
              this.send(_, $ || {}, O);
            } else return this.send(_, $);
          },
          w = (K[0].toLowerCase() + K.slice(1)).replace(/Command$/, "");
        q.prototype[w] = z;
      }
    };
  class N_1 extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(A) {
      super(A.message);
      (Object.setPrototypeOf(
        this,
        Object.getPrototypeOf(this).constructor.prototype,
      ),
        (this.name = A.name),
        (this.$fault = A.$fault),
        (this.$metadata = A.$metadata));
    }
    static isInstance(A) {
      if (!A) return !1;
      let q = A;
      return (
        N_1.prototype.isPrototypeOf(q) ||
        (Boolean(q.$fault) &&
          Boolean(q.$metadata) &&
          (q.$fault === "client" || q.$fault === "server"))
      );
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let q = A;
      if (this === N_1) return N_1.isInstance(A);
      if (N_1.isInstance(A)) {
        if (q.name && this.name)
          return this.prototype.isPrototypeOf(A) || q.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var Ql8 = (A, q = {}) => {
      Object.entries(q)
        .filter(([, Y]) => Y !== void 0)
        .forEach(([Y, z]) => {
          if (A[Y] == null || A[Y] === "") A[Y] = z;
        });
      let K = A.message || A.Message || "UnknownError";
      return ((A.message = K), delete A.Message, A);
    },
    gl8 = ({ output: A, parsedBody: q, exceptionCtor: K, errorCode: Y }) => {
      let z = wK5(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new K({
          name: q?.code || q?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z,
        });
      throw Ql8(H, q);
    },
    zK5 = (A) => {
      return ({ output: q, parsedBody: K, errorCode: Y }) => {
        gl8({ output: q, parsedBody: K, exceptionCtor: A, errorCode: Y });
      };
    },
    wK5 = (A) => ({
      httpStatusCode: A.statusCode,
      requestId:
        A.headers["x-amzn-requestid"] ??
        A.headers["x-amzn-request-id"] ??
        A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"],
    }),
    HK5 = (A) => {
      switch (A) {
        case "standard":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "in-region":
          return { retryMode: "standard", connectionTimeout: 1100 };
        case "cross-region":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "mobile":
          return { retryMode: "standard", connectionTimeout: 30000 };
        default:
          return {};
      }
    },
    ul8 = !1,
    $K5 = (A) => {
      if (A && !ul8 && parseInt(A.substring(1, A.indexOf("."))) < 16) ul8 = !0;
    },
    OK5 = (A) => {
      let q = [];
      for (let K in y6A.AlgorithmId) {
        let Y = y6A.AlgorithmId[K];
        if (A[Y] === void 0) continue;
        q.push({ algorithmId: () => Y, checksumConstructor: () => A[Y] });
      }
      return {
        addChecksumAlgorithm(K) {
          q.push(K);
        },
        checksumAlgorithms() {
          return q;
        },
      };
    },
    _K5 = (A) => {
      let q = {};
      return (
        A.checksumAlgorithms().forEach((K) => {
          q[K.algorithmId()] = K.checksumConstructor();
        }),
        q
      );
    },
    JK5 = (A) => {
      return {
        setRetryStrategy(q) {
          A.retryStrategy = q;
        },
        retryStrategy() {
          return A.retryStrategy;
        },
      };
    },
    XK5 = (A) => {
      let q = {};
      return ((q.retryStrategy = A.retryStrategy()), q);
    },
    Ul8 = (A) => {
      return Object.assign(OK5(A), JK5(A));
    },
    jK5 = Ul8,
    DK5 = (A) => {
      return Object.assign(_K5(A), XK5(A));
    },
    MK5 = (A) => (Array.isArray(A) ? A : [A]),
    pl8 = (A) => {
      for (let K in A)
        if (A.hasOwnProperty(K) && A[K]["#text"] !== void 0)
          A[K] = A[K]["#text"];
        else if (typeof A[K] === "object" && A[K] !== null) A[K] = pl8(A[K]);
      return A;
    },
    PK5 = (A) => {
      return A != null;
    };
  class dl8 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function cl8(A, q, K) {
    let Y, z, w;
    if (typeof q > "u" && typeof K > "u") ((Y = {}), (w = A));
    else if (((Y = A), typeof q === "function"))
      return ((z = q), (w = K), ZK5(Y, z, w));
    else w = q;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      ll8(Y, null, w, H);
    }
    return Y;
  }
  var WK5 = (A) => {
      let q = {};
      for (let [K, Y] of Object.entries(A || {})) q[K] = [, Y];
      return q;
    },
    GK5 = (A, q) => {
      let K = {};
      for (let Y in q) ll8(K, A, q, Y);
      return K;
    },
    ZK5 = (A, q, K) => {
      return cl8(
        A,
        Object.entries(K).reduce((Y, [z, w]) => {
          if (Array.isArray(w)) Y[z] = w;
          else if (typeof w === "function") Y[z] = [q, w()];
          else Y[z] = [q, w];
          return Y;
        }, {}),
      );
    },
    ll8 = (A, q, K, Y) => {
      if (q !== null) {
        let H = K[Y];
        if (typeof H === "function") H = [, H];
        let [$ = fK5, O = VK5, _ = Y] = H;
        if (
          (typeof $ === "function" && $(q[_])) ||
          (typeof $ !== "function" && !!$)
        )
          A[Y] = O(q[_]);
        return;
      }
      let [z, w] = K[Y];
      if (typeof w === "function") {
        let H,
          $ = z === void 0 && (H = w()) != null,
          O =
            (typeof z === "function" && !!z(void 0)) ||
            (typeof z !== "function" && !!z);
        if ($) A[Y] = H;
        else if (O) A[Y] = w();
      } else {
        let H = z === void 0 && w != null,
          $ =
            (typeof z === "function" && !!z(w)) ||
            (typeof z !== "function" && !!z);
        if (H || $) A[Y] = w;
      }
    },
    fK5 = (A) => A != null,
    VK5 = (A) => A,
    NK5 = (A) => {
      if (A !== A) return "NaN";
      switch (A) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return A;
      }
    },
    TK5 = (A) => A.toISOString().replace(".000Z", "Z"),
    S6A = (A) => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter((q) => q != null).map(S6A);
      if (typeof A === "object") {
        let q = {};
        for (let K of Object.keys(A)) {
          if (A[K] == null) continue;
          q[K] = S6A(A[K]);
        }
        return q;
      }
      return A;
    };
  Object.defineProperty(T_1, "collectBody", {
    enumerable: !0,
    get: function () {
      return h6A.collectBody;
    },
  });
  Object.defineProperty(T_1, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return h6A.extendedEncodeURIComponent;
    },
  });
  Object.defineProperty(T_1, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return h6A.resolvedPath;
    },
  });
  T_1.Client = ml8;
  T_1.Command = I6A;
  T_1.NoOpLogger = dl8;
  T_1.SENSITIVE_STRING = KK5;
  T_1.ServiceException = N_1;
  T_1._json = S6A;
  T_1.convertMap = WK5;
  T_1.createAggregatedClient = YK5;
  T_1.decorateServiceException = Ql8;
  T_1.emitWarningIfUnsupportedVersion = $K5;
  T_1.getArrayIfSingleItem = MK5;
  T_1.getDefaultClientConfiguration = jK5;
  T_1.getDefaultExtensionConfiguration = Ul8;
  T_1.getValueFromTextNode = pl8;
  T_1.isSerializableHeaderValue = PK5;
  T_1.loadConfigsForDefaultMode = HK5;
  T_1.map = cl8;
  T_1.resolveDefaultRuntimeConfig = DK5;
  T_1.serializeDateTime = TK5;
  T_1.serializeFloat = NK5;
  T_1.take = GK5;
  T_1.throwDefaultError = gl8;
  T_1.withBaseException = zK5;
  Object.keys(bl8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(T_1, A))
      Object.defineProperty(T_1, A, {
        enumerable: !0,
        get: function () {
          return bl8[A];
        },
      });
  });
