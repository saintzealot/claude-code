// Module: b$ (cjs)
// Dependencies: [DL1, zW]
// Exports: ErrorSchema, ListSchema, MapSchema, NormalizedSchema, OperationSchema, SCHEMA, Schema, SimpleSchema, StructureSchema, TypeRegistry, deref, deserializerMiddlewareOption, error, getSchemaSerdePlugin, isStaticSchema, list, map, op, operation, serializerMiddlewareOption, sim, simAdapter, struct, translateTraits
// Lines: 70862-71397 in cli.formatted.js
// ---

  var TIK = DL1(),
    iV8 = zW(),
    z66 = (A) => {
      if (typeof A === "function") return A();
      return A;
    },
    ad6 = (A, q, K, Y, z) => ({
      name: q,
      namespace: A,
      traits: K,
      input: Y,
      output: z,
    }),
    vIK = (A) => (q, K) => async (Y) => {
      let { response: z } = await q(Y),
        { operationSchema: w } = iV8.getSmithyContext(K),
        [, H, $, O, _, J] = w ?? [];
      try {
        let X = await A.protocol.deserializeResponse(
          ad6(H, $, O, _, J),
          { ...A, ...K },
          z,
        );
        return { response: z, output: X };
      } catch (X) {
        if (
          (Object.defineProperty(X, "$response", {
            value: z,
            enumerable: !1,
            writable: !1,
            configurable: !1,
          }),
          !("$metadata" in X))
        ) {
          try {
            X.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          } catch (D) {
            if (!K.logger || K.logger?.constructor?.name === "NoOpLogger")
              console.warn(
                "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.",
              );
            else
              K.logger?.warn?.(
                "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.",
              );
          }
          if (typeof X.$responseBodyText < "u") {
            if (X.$response) X.$response.body = X.$responseBodyText;
          }
          try {
            if (TIK.HttpResponse.isInstance(z)) {
              let { headers: D = {} } = z,
                M = Object.entries(D);
              X.$metadata = {
                httpStatusCode: z.statusCode,
                requestId: nd6(/^x-[\w-]+-request-?id$/, M),
                extendedRequestId: nd6(/^x-[\w-]+-id-2$/, M),
                cfId: nd6(/^x-[\w-]+-cf-id$/, M),
              };
            }
          } catch (D) {}
        }
        throw X;
      }
    },
    nd6 = (A, q) => {
      return (q.find(([K]) => {
        return K.match(A);
      }) || [void 0, void 0])[1];
    },
    EIK = (A) => (q, K) => async (Y) => {
      let { operationSchema: z } = iV8.getSmithyContext(K),
        [, w, H, $, O, _] = z ?? [],
        J =
          K.endpointV2?.url && A.urlParser
            ? async () => A.urlParser(K.endpointV2.url)
            : A.endpoint,
        X = await A.protocol.serializeRequest(ad6(w, H, $, O, _), Y.input, {
          ...A,
          ...K,
          endpoint: J,
        });
      return q({ ...Y, request: X });
    },
    nV8 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0,
    },
    rV8 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: !0,
    };
  function kIK(A) {
    return {
      applyToStack: (q) => {
        (q.add(EIK(A), rV8), q.add(vIK(A), nV8), A.protocol.setSerdeContext(A));
      },
    };
  }
  class HV {
    name;
    namespace;
    traits;
    static assign(A, q) {
      return Object.assign(A, q);
    }
    static [Symbol.hasInstance](A) {
      let q = this.prototype.isPrototypeOf(A);
      if (!q && typeof A === "object" && A !== null)
        return A.symbol === this.symbol;
      return q;
    }
    getName() {
      return this.namespace + "#" + this.name;
    }
  }
  class w66 extends HV {
    static symbol = Symbol.for("@smithy/lis");
    name;
    traits;
    valueSchema;
    symbol = w66.symbol;
  }
  var LIK = (A, q, K, Y) =>
    HV.assign(new w66(), { name: q, namespace: A, traits: K, valueSchema: Y });
  class H66 extends HV {
    static symbol = Symbol.for("@smithy/map");
    name;
    traits;
    keySchema;
    valueSchema;
    symbol = H66.symbol;
  }
  var RIK = (A, q, K, Y, z) =>
    HV.assign(new H66(), {
      name: q,
      namespace: A,
      traits: K,
      keySchema: Y,
      valueSchema: z,
    });
  class $66 extends HV {
    static symbol = Symbol.for("@smithy/ope");
    name;
    traits;
    input;
    output;
    symbol = $66.symbol;
  }
  var yIK = (A, q, K, Y, z) =>
    HV.assign(new $66(), {
      name: q,
      namespace: A,
      traits: K,
      input: Y,
      output: z,
    });
  class GL1 extends HV {
    static symbol = Symbol.for("@smithy/str");
    name;
    traits;
    memberNames;
    memberList;
    symbol = GL1.symbol;
  }
  var CIK = (A, q, K, Y, z) =>
    HV.assign(new GL1(), {
      name: q,
      namespace: A,
      traits: K,
      memberNames: Y,
      memberList: z,
    });
  class O66 extends GL1 {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = O66.symbol;
  }
  var SIK = (A, q, K, Y, z, w) =>
    HV.assign(new O66(), {
      name: q,
      namespace: A,
      traits: K,
      memberNames: Y,
      memberList: z,
      ctor: null,
    });
  function WL1(A) {
    if (typeof A === "object") return A;
    A = A | 0;
    let q = {},
      K = 0;
    for (let Y of [
      "httpLabel",
      "idempotent",
      "idempotencyToken",
      "sensitive",
      "httpPayload",
      "httpResponseCode",
      "httpQueryParams",
    ])
      if (((A >> K++) & 1) === 1) q[Y] = 1;
    return q;
  }
  class Zg {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = Zg.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(A, q) {
      ((this.ref = A), (this.memberName = q));
      let K = [],
        Y = A,
        z = A;
      this._isMemberSchema = !1;
      while (rd6(Y))
        (K.push(Y[1]), (Y = Y[0]), (z = z66(Y)), (this._isMemberSchema = !0));
      if (K.length > 0) {
        this.memberTraits = {};
        for (let w = K.length - 1; w >= 0; --w) {
          let H = K[w];
          Object.assign(this.memberTraits, WL1(H));
        }
      } else this.memberTraits = 0;
      if (z instanceof Zg) {
        let w = this.memberTraits;
        (Object.assign(this, z),
          (this.memberTraits = Object.assign(
            {},
            w,
            z.getMemberTraits(),
            this.getMemberTraits(),
          )),
          (this.normalizedTraits = void 0),
          (this.memberName = q ?? z.memberName));
        return;
      }
      if (((this.schema = z66(z)), aV8(this.schema)))
        ((this.name = `${this.schema[1]}#${this.schema[2]}`),
          (this.traits = this.schema[3]));
      else ((this.name = this.memberName ?? String(z)), (this.traits = 0));
      if (this._isMemberSchema && !q)
        throw Error(
          `@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`,
        );
    }
    static [Symbol.hasInstance](A) {
      let q = this.prototype.isPrototypeOf(A);
      if (!q && typeof A === "object" && A !== null)
        return A.symbol === this.symbol;
      return q;
    }
    static of(A) {
      let q = z66(A);
      if (q instanceof Zg) return q;
      if (rd6(q)) {
        let [K, Y] = q;
        if (K instanceof Zg)
          return (Object.assign(K.getMergedTraits(), WL1(Y)), K);
        throw Error(
          `@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(A, null, 2)}.`,
        );
      }
      return new Zg(q);
    }
    getSchema() {
      let A = this.schema;
      if (A[0] === 0) return A[4];
      return A;
    }
    getName(A = !1) {
      let { name: q } = this;
      return !A && q && q.includes("#") ? q.split("#")[1] : q || void 0;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      let A = this.getSchema();
      return typeof A === "number" ? A >= 64 && A < 128 : A[0] === 1;
    }
    isMapSchema() {
      let A = this.getSchema();
      return typeof A === "number" ? A >= 128 && A <= 255 : A[0] === 2;
    }
    isStructSchema() {
      let A = this.getSchema();
      return A[0] === 3 || A[0] === -3;
    }
    isBlobSchema() {
      let A = this.getSchema();
      return A === 21 || A === 42;
    }
    isTimestampSchema() {
      let A = this.getSchema();
      return typeof A === "number" && A >= 4 && A <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      let { streaming: A } = this.getMergedTraits();
      return !!A || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      let A = (z) => (z & 4) === 4 || !!z?.idempotencyToken,
        { normalizedTraits: q, traits: K, memberTraits: Y } = this;
      return A(q) || A(K) || A(Y);
    }
    getMergedTraits() {
      return (
        this.normalizedTraits ??
        (this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits(),
        })
      );
    }
    getMemberTraits() {
      return WL1(this.memberTraits);
    }
    getOwnTraits() {
      return WL1(this.traits);
    }
    getKeySchema() {
      let [A, q] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!A && !q)
        throw Error(
          `@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`,
        );
      let K = this.getSchema(),
        Y = A ? 15 : (K[4] ?? 0);
      return PL1([Y, 0], "key");
    }
    getValueSchema() {
      let A = this.getSchema(),
        [q, K, Y] = [
          this.isDocumentSchema(),
          this.isMapSchema(),
          this.isListSchema(),
        ],
        z =
          typeof A === "number"
            ? 63 & A
            : A && typeof A === "object" && (K || Y)
              ? A[3 + A[0]]
              : q
                ? 15
                : void 0;
      if (z != null) return PL1([z, 0], K ? "value" : "member");
      throw Error(
        `@smithy/core/schema - ${this.getName(!0)} has no value member.`,
      );
    }
    getMemberSchema(A) {
      let q = this.getSchema();
      if (this.isStructSchema() && q[4].includes(A)) {
        let K = q[4].indexOf(A),
          Y = q[5][K];
        return PL1(rd6(Y) ? Y : [Y, 0], A);
      }
      if (this.isDocumentSchema()) return PL1([15, 0], A);
      throw Error(
        `@smithy/core/schema - ${this.getName(!0)} has no no member=${A}.`,
      );
    }
    getMemberSchemas() {
      let A = {};
      try {
        for (let [q, K] of this.structIterator()) A[q] = K;
      } catch (q) {}
      return A;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (let [A, q] of this.structIterator())
          if (q.isStreaming() && q.isStructSchema()) return A;
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) return;
      if (!this.isStructSchema())
        throw Error("@smithy/core/schema - cannot iterate non-struct schema.");
      let A = this.getSchema();
      for (let q = 0; q < A[4].length; ++q)
        yield [A[4][q], PL1([A[5][q], 0], A[4][q])];
    }
  }
  function PL1(A, q) {
    if (A instanceof Zg)
      return Object.assign(A, { memberName: q, _isMemberSchema: !0 });
    return new Zg(A, q);
  }
  var rd6 = (A) => Array.isArray(A) && A.length === 2,
    aV8 = (A) => Array.isArray(A) && A.length >= 5;
  class ZL1 extends HV {
    static symbol = Symbol.for("@smithy/sim");
    name;
    schemaRef;
    traits;
    symbol = ZL1.symbol;
  }
  var hIK = (A, q, K, Y) =>
      HV.assign(new ZL1(), { name: q, namespace: A, traits: Y, schemaRef: K }),
    IIK = (A, q, K, Y) =>
      HV.assign(new ZL1(), { name: q, namespace: A, traits: K, schemaRef: Y }),
    xIK = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128,
    };
  class Gg {
    namespace;
    schemas;
    exceptions;
    static registries = new Map();
    constructor(A, q = new Map(), K = new Map()) {
      ((this.namespace = A), (this.schemas = q), (this.exceptions = K));
    }
    static for(A) {
      if (!Gg.registries.has(A)) Gg.registries.set(A, new Gg(A));
      return Gg.registries.get(A);
    }
    register(A, q) {
      let K = this.normalizeShapeId(A);
      Gg.for(K.split("#")[0]).schemas.set(K, q);
    }
    getSchema(A) {
      let q = this.normalizeShapeId(A);
      if (!this.schemas.has(q))
        throw Error(`@smithy/core/schema - schema not found for ${q}`);
      return this.schemas.get(q);
    }
    registerError(A, q) {
      let K = A,
        Y = Gg.for(K[1]);
      (Y.schemas.set(K[1] + "#" + K[2], K), Y.exceptions.set(K, q));
    }
    getErrorCtor(A) {
      let q = A;
      return Gg.for(q[1]).exceptions.get(q);
    }
    getBaseException() {
      for (let A of this.exceptions.keys())
        if (Array.isArray(A)) {
          let [, q, K] = A,
            Y = q + "#" + K;
          if (
            Y.startsWith("smithy.ts.sdk.synthetic.") &&
            Y.endsWith("ServiceException")
          )
            return A;
        }
      return;
    }
    find(A) {
      return [...this.schemas.values()].find(A);
    }
    clear() {
      (this.schemas.clear(), this.exceptions.clear());
    }
    normalizeShapeId(A) {
      if (A.includes("#")) return A;
      return this.namespace + "#" + A;
    }
  }
  bIK.ErrorSchema = O66;
  bIK.ListSchema = w66;
  bIK.MapSchema = H66;
  bIK.NormalizedSchema = Zg;
  bIK.OperationSchema = $66;
  bIK.SCHEMA = xIK;
  bIK.Schema = HV;
  bIK.SimpleSchema = ZL1;
  bIK.StructureSchema = GL1;
  bIK.TypeRegistry = Gg;
  bIK.deref = z66;
  bIK.deserializerMiddlewareOption = nV8;
  bIK.error = SIK;
  bIK.getSchemaSerdePlugin = kIK;
  bIK.isStaticSchema = aV8;
  bIK.list = LIK;
  bIK.map = RIK;
  bIK.op = yIK;
  bIK.operation = ad6;
  bIK.serializerMiddlewareOption = rV8;
  bIK.sim = hIK;
  bIK.simAdapter = IIK;
  bIK.struct = CIK;
  bIK.translateTraits = WL1;
