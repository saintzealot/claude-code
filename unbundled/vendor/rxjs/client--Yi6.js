// Module: Yi6 (cjs)
// Dependencies: [gb, b$, OV, Sc6]
// Exports: Client, Command, NoOpLogger, SENSITIVE_STRING, ServiceException, _json, convertMap, createAggregatedClient, decorateServiceException, emitWarningIfUnsupportedVersion, getArrayIfSingleItem, getDefaultClientConfiguration, getDefaultExtensionConfiguration, getValueFromTextNode, isSerializableHeaderValue, loadConfigsForDefaultMode, map, resolveDefaultRuntimeConfig, serializeDateTime, serializeFloat, take, throwDefaultError, withBaseException
// Lines: 77953-78452 in cli.formatted.js
// ---

  var WE8 = gb(),
    qi6 = OV(),
    tl6 = Sc6(),
    _dK = b$(),
    ME8 = $V();
  class GE8 {
    config;
    middlewareStack = WE8.constructStack();
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
  var sl6 = "***SensitiveInformation***";
  function el6(A, q) {
    if (q == null) return q;
    let K = _dK.NormalizedSchema.of(A);
    if (K.getMergedTraits().sensitive) return sl6;
    if (K.isListSchema()) {
      if (!!K.getValueSchema().getMergedTraits().sensitive) return sl6;
    } else if (K.isMapSchema()) {
      if (
        !!K.getKeySchema().getMergedTraits().sensitive ||
        !!K.getValueSchema().getMergedTraits().sensitive
      )
        return sl6;
    } else if (K.isStructSchema() && typeof q === "object") {
      let Y = q,
        z = {};
      for (let [w, H] of K.structIterator())
        if (Y[w] != null) z[w] = el6(H, Y[w]);
      return z;
    }
    return q;
  }
  class Ki6 {
    middlewareStack = WE8.constructStack();
    schema;
    static classBuilder() {
      return new ZE8();
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
          [tl6.SMITHY_CONTEXT_KEY]: { commandInstance: this, ...O },
          ..._,
        },
        { requestHandler: M } = q;
      return X.resolve((P) => M.handle(P.request, K || {}), D);
    }
  }
  class ZE8 {
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
      return (q = class extends Ki6 {
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
              A._inputFilterSensitiveLog ?? (w ? el6.bind(null, H) : (O) => O),
            outputFilterSensitiveLog:
              A._outputFilterSensitiveLog ?? (w ? el6.bind(null, $) : (O) => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext,
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      });
    }
  }
  var JdK = "***SensitiveInformation***",
    XdK = (A, q) => {
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
  class WO1 extends Error {
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
        WO1.prototype.isPrototypeOf(q) ||
        (Boolean(q.$fault) &&
          Boolean(q.$metadata) &&
          (q.$fault === "client" || q.$fault === "server"))
      );
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let q = A;
      if (this === WO1) return WO1.isInstance(A);
      if (WO1.isInstance(A)) {
        if (q.name && this.name)
          return this.prototype.isPrototypeOf(A) || q.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var fE8 = (A, q = {}) => {
      Object.entries(q)
        .filter(([, Y]) => Y !== void 0)
        .forEach(([Y, z]) => {
          if (A[Y] == null || A[Y] === "") A[Y] = z;
        });
      let K = A.message || A.Message || "UnknownError";
      return ((A.message = K), delete A.Message, A);
    },
    VE8 = ({ output: A, parsedBody: q, exceptionCtor: K, errorCode: Y }) => {
      let z = DdK(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new K({
          name: q?.code || q?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z,
        });
      throw fE8(H, q);
    },
    jdK = (A) => {
      return ({ output: q, parsedBody: K, errorCode: Y }) => {
        VE8({ output: q, parsedBody: K, exceptionCtor: A, errorCode: Y });
      };
    },
    DdK = (A) => ({
      httpStatusCode: A.statusCode,
      requestId:
        A.headers["x-amzn-requestid"] ??
        A.headers["x-amzn-request-id"] ??
        A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"],
    }),
    MdK = (A) => {
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
    PE8 = !1,
    PdK = (A) => {
      if (A && !PE8 && parseInt(A.substring(1, A.indexOf("."))) < 16) PE8 = !0;
    },
    WdK = (A) => {
      let q = [];
      for (let K in tl6.AlgorithmId) {
        let Y = tl6.AlgorithmId[K];
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
    GdK = (A) => {
      let q = {};
      return (
        A.checksumAlgorithms().forEach((K) => {
          q[K.algorithmId()] = K.checksumConstructor();
        }),
        q
      );
    },
    ZdK = (A) => {
      return {
        setRetryStrategy(q) {
          A.retryStrategy = q;
        },
        retryStrategy() {
          return A.retryStrategy;
        },
      };
    },
    fdK = (A) => {
      let q = {};
      return ((q.retryStrategy = A.retryStrategy()), q);
    },
    NE8 = (A) => {
      return Object.assign(WdK(A), ZdK(A));
    },
    VdK = NE8,
    NdK = (A) => {
      return Object.assign(GdK(A), fdK(A));
    },
    TdK = (A) => (Array.isArray(A) ? A : [A]),
    TE8 = (A) => {
      for (let K in A)
        if (A.hasOwnProperty(K) && A[K]["#text"] !== void 0)
          A[K] = A[K]["#text"];
        else if (typeof A[K] === "object" && A[K] !== null) A[K] = TE8(A[K]);
      return A;
    },
    vdK = (A) => {
      return A != null;
    };
  class vE8 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function EE8(A, q, K) {
    let Y, z, w;
    if (typeof q > "u" && typeof K > "u") ((Y = {}), (w = A));
    else if (((Y = A), typeof q === "function"))
      return ((z = q), (w = K), LdK(Y, z, w));
    else w = q;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      kE8(Y, null, w, H);
    }
    return Y;
  }
  var EdK = (A) => {
      let q = {};
      for (let [K, Y] of Object.entries(A || {})) q[K] = [, Y];
      return q;
    },
    kdK = (A, q) => {
      let K = {};
      for (let Y in q) kE8(K, A, q, Y);
      return K;
    },
    LdK = (A, q, K) => {
      return EE8(
        A,
        Object.entries(K).reduce((Y, [z, w]) => {
          if (Array.isArray(w)) Y[z] = w;
          else if (typeof w === "function") Y[z] = [q, w()];
          else Y[z] = [q, w];
          return Y;
        }, {}),
      );
    },
    kE8 = (A, q, K, Y) => {
      if (q !== null) {
        let H = K[Y];
        if (typeof H === "function") H = [, H];
        let [$ = RdK, O = ydK, _ = Y] = H;
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
    RdK = (A) => A != null,
    ydK = (A) => A,
    CdK = (A) => {
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
    SdK = (A) => A.toISOString().replace(".000Z", "Z"),
    Ai6 = (A) => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter((q) => q != null).map(Ai6);
      if (typeof A === "object") {
        let q = {};
        for (let K of Object.keys(A)) {
          if (A[K] == null) continue;
          q[K] = Ai6(A[K]);
        }
        return q;
      }
      return A;
    };
  Object.defineProperty(GO1, "collectBody", {
    enumerable: !0,
    get: function () {
      return qi6.collectBody;
    },
  });
  Object.defineProperty(GO1, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return qi6.extendedEncodeURIComponent;
    },
  });
  Object.defineProperty(GO1, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return qi6.resolvedPath;
    },
  });
  GO1.Client = GE8;
  GO1.Command = Ki6;
  GO1.NoOpLogger = vE8;
  GO1.SENSITIVE_STRING = JdK;
  GO1.ServiceException = WO1;
  GO1._json = Ai6;
  GO1.convertMap = EdK;
  GO1.createAggregatedClient = XdK;
  GO1.decorateServiceException = fE8;
  GO1.emitWarningIfUnsupportedVersion = PdK;
  GO1.getArrayIfSingleItem = TdK;
  GO1.getDefaultClientConfiguration = VdK;
  GO1.getDefaultExtensionConfiguration = NE8;
  GO1.getValueFromTextNode = TE8;
  GO1.isSerializableHeaderValue = vdK;
  GO1.loadConfigsForDefaultMode = MdK;
  GO1.map = EE8;
  GO1.resolveDefaultRuntimeConfig = NdK;
  GO1.serializeDateTime = SdK;
  GO1.serializeFloat = CdK;
  GO1.take = kdK;
  GO1.throwDefaultError = VE8;
  GO1.withBaseException = jdK;
  Object.keys(ME8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(GO1, A))
      Object.defineProperty(GO1, A, {
        enumerable: !0,
        get: function () {
          return ME8[A];
        },
      });
  });
