// Module: O71 (cjs)
// Dependencies: [gb, b$, OV, B1A]
// Exports: Client, Command, NoOpLogger, SENSITIVE_STRING, ServiceException, _json, convertMap, createAggregatedClient, decorateServiceException, emitWarningIfUnsupportedVersion, getArrayIfSingleItem, getDefaultClientConfiguration, getDefaultExtensionConfiguration, getValueFromTextNode, isSerializableHeaderValue, loadConfigsForDefaultMode, map, resolveDefaultRuntimeConfig, serializeDateTime, serializeFloat, take, throwDefaultError, withBaseException
// Lines: 108625-109124 in cli.formatted.js
// ---

  var Ed8 = gb(),
    U1A = OV(),
    F1A = B1A(),
    W65 = b$(),
    Td8 = $V();
  class kd8 {
    config;
    middlewareStack = Ed8.constructStack();
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
  var m1A = "***SensitiveInformation***";
  function Q1A(A, q) {
    if (q == null) return q;
    let K = W65.NormalizedSchema.of(A);
    if (K.getMergedTraits().sensitive) return m1A;
    if (K.isListSchema()) {
      if (!!K.getValueSchema().getMergedTraits().sensitive) return m1A;
    } else if (K.isMapSchema()) {
      if (
        !!K.getKeySchema().getMergedTraits().sensitive ||
        !!K.getValueSchema().getMergedTraits().sensitive
      )
        return m1A;
    } else if (K.isStructSchema() && typeof q === "object") {
      let Y = q,
        z = {};
      for (let [w, H] of K.structIterator())
        if (Y[w] != null) z[w] = Q1A(H, Y[w]);
      return z;
    }
    return q;
  }
  class p1A {
    middlewareStack = Ed8.constructStack();
    schema;
    static classBuilder() {
      return new Ld8();
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
          [F1A.SMITHY_CONTEXT_KEY]: { commandInstance: this, ...O },
          ..._,
        },
        { requestHandler: M } = q;
      return X.resolve((P) => M.handle(P.request, K || {}), D);
    }
  }
  class Ld8 {
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
      return (q = class extends p1A {
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
              A._inputFilterSensitiveLog ?? (w ? Q1A.bind(null, H) : (O) => O),
            outputFilterSensitiveLog:
              A._outputFilterSensitiveLog ?? (w ? Q1A.bind(null, $) : (O) => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext,
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      });
    }
  }
  var G65 = "***SensitiveInformation***",
    Z65 = (A, q) => {
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
  class Z_1 extends Error {
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
        Z_1.prototype.isPrototypeOf(q) ||
        (Boolean(q.$fault) &&
          Boolean(q.$metadata) &&
          (q.$fault === "client" || q.$fault === "server"))
      );
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let q = A;
      if (this === Z_1) return Z_1.isInstance(A);
      if (Z_1.isInstance(A)) {
        if (q.name && this.name)
          return this.prototype.isPrototypeOf(A) || q.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var Rd8 = (A, q = {}) => {
      Object.entries(q)
        .filter(([, Y]) => Y !== void 0)
        .forEach(([Y, z]) => {
          if (A[Y] == null || A[Y] === "") A[Y] = z;
        });
      let K = A.message || A.Message || "UnknownError";
      return ((A.message = K), delete A.Message, A);
    },
    yd8 = ({ output: A, parsedBody: q, exceptionCtor: K, errorCode: Y }) => {
      let z = V65(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new K({
          name: q?.code || q?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z,
        });
      throw Rd8(H, q);
    },
    f65 = (A) => {
      return ({ output: q, parsedBody: K, errorCode: Y }) => {
        yd8({ output: q, parsedBody: K, exceptionCtor: A, errorCode: Y });
      };
    },
    V65 = (A) => ({
      httpStatusCode: A.statusCode,
      requestId:
        A.headers["x-amzn-requestid"] ??
        A.headers["x-amzn-request-id"] ??
        A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"],
    }),
    N65 = (A) => {
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
    vd8 = !1,
    T65 = (A) => {
      if (A && !vd8 && parseInt(A.substring(1, A.indexOf("."))) < 16) vd8 = !0;
    },
    v65 = (A) => {
      let q = [];
      for (let K in F1A.AlgorithmId) {
        let Y = F1A.AlgorithmId[K];
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
    E65 = (A) => {
      let q = {};
      return (
        A.checksumAlgorithms().forEach((K) => {
          q[K.algorithmId()] = K.checksumConstructor();
        }),
        q
      );
    },
    k65 = (A) => {
      return {
        setRetryStrategy(q) {
          A.retryStrategy = q;
        },
        retryStrategy() {
          return A.retryStrategy;
        },
      };
    },
    L65 = (A) => {
      let q = {};
      return ((q.retryStrategy = A.retryStrategy()), q);
    },
    Cd8 = (A) => {
      return Object.assign(v65(A), k65(A));
    },
    R65 = Cd8,
    y65 = (A) => {
      return Object.assign(E65(A), L65(A));
    },
    C65 = (A) => (Array.isArray(A) ? A : [A]),
    Sd8 = (A) => {
      for (let K in A)
        if (A.hasOwnProperty(K) && A[K]["#text"] !== void 0)
          A[K] = A[K]["#text"];
        else if (typeof A[K] === "object" && A[K] !== null) A[K] = Sd8(A[K]);
      return A;
    },
    S65 = (A) => {
      return A != null;
    };
  class hd8 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function Id8(A, q, K) {
    let Y, z, w;
    if (typeof q > "u" && typeof K > "u") ((Y = {}), (w = A));
    else if (((Y = A), typeof q === "function"))
      return ((z = q), (w = K), x65(Y, z, w));
    else w = q;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      xd8(Y, null, w, H);
    }
    return Y;
  }
  var h65 = (A) => {
      let q = {};
      for (let [K, Y] of Object.entries(A || {})) q[K] = [, Y];
      return q;
    },
    I65 = (A, q) => {
      let K = {};
      for (let Y in q) xd8(K, A, q, Y);
      return K;
    },
    x65 = (A, q, K) => {
      return Id8(
        A,
        Object.entries(K).reduce((Y, [z, w]) => {
          if (Array.isArray(w)) Y[z] = w;
          else if (typeof w === "function") Y[z] = [q, w()];
          else Y[z] = [q, w];
          return Y;
        }, {}),
      );
    },
    xd8 = (A, q, K, Y) => {
      if (q !== null) {
        let H = K[Y];
        if (typeof H === "function") H = [, H];
        let [$ = b65, O = u65, _ = Y] = H;
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
    b65 = (A) => A != null,
    u65 = (A) => A,
    B65 = (A) => {
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
    m65 = (A) => A.toISOString().replace(".000Z", "Z"),
    g1A = (A) => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter((q) => q != null).map(g1A);
      if (typeof A === "object") {
        let q = {};
        for (let K of Object.keys(A)) {
          if (A[K] == null) continue;
          q[K] = g1A(A[K]);
        }
        return q;
      }
      return A;
    };
  Object.defineProperty(f_1, "collectBody", {
    enumerable: !0,
    get: function () {
      return U1A.collectBody;
    },
  });
  Object.defineProperty(f_1, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return U1A.extendedEncodeURIComponent;
    },
  });
  Object.defineProperty(f_1, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return U1A.resolvedPath;
    },
  });
  f_1.Client = kd8;
  f_1.Command = p1A;
  f_1.NoOpLogger = hd8;
  f_1.SENSITIVE_STRING = G65;
  f_1.ServiceException = Z_1;
  f_1._json = g1A;
  f_1.convertMap = h65;
  f_1.createAggregatedClient = Z65;
  f_1.decorateServiceException = Rd8;
  f_1.emitWarningIfUnsupportedVersion = T65;
  f_1.getArrayIfSingleItem = C65;
  f_1.getDefaultClientConfiguration = R65;
  f_1.getDefaultExtensionConfiguration = Cd8;
  f_1.getValueFromTextNode = Sd8;
  f_1.isSerializableHeaderValue = S65;
  f_1.loadConfigsForDefaultMode = N65;
  f_1.map = Id8;
  f_1.resolveDefaultRuntimeConfig = y65;
  f_1.serializeDateTime = m65;
  f_1.serializeFloat = B65;
  f_1.take = I65;
  f_1.throwDefaultError = yd8;
  f_1.withBaseException = f65;
  Object.keys(Td8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(f_1, A))
      Object.defineProperty(f_1, A, {
        enumerable: !0,
        get: function () {
          return Td8[A];
        },
      });
  });
