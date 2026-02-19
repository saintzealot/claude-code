// Module: KR4 (cjs)
// Dependencies: [J9, N0]
// Exports: ServerDuplexStreamImpl, ServerWritableStreamImpl, ServerReadableStreamImpl, ServerUnaryCallImpl, serverErrorToStatus
// Lines: 360205-360414 in cli.formatted.js
// ---

  Object.defineProperty(AR4, "__esModule", { value: !0 });
  AR4.ServerDuplexStreamImpl =
    AR4.ServerWritableStreamImpl =
    AR4.ServerReadableStreamImpl =
    AR4.ServerUnaryCallImpl =
      void 0;
  AR4.serverErrorToStatus = RvA;
  var tPY = h1("events"),
    kvA = h1("stream"),
    LvA = J9(),
    aL4 = N0();
  function RvA(A, q) {
    var K;
    let Y = {
      code: LvA.Status.UNKNOWN,
      details: "message" in A ? A.message : "Unknown Error",
      metadata:
        (K = q !== null && q !== void 0 ? q : A.metadata) !== null &&
        K !== void 0
          ? K
          : null,
    };
    if ("code" in A && typeof A.code === "number" && Number.isInteger(A.code)) {
      if (((Y.code = A.code), "details" in A && typeof A.details === "string"))
        Y.details = A.details;
    }
    return Y;
  }
  class oL4 extends tPY.EventEmitter {
    constructor(A, q, K, Y) {
      super();
      ((this.path = A),
        (this.call = q),
        (this.metadata = K),
        (this.request = Y),
        (this.cancelled = !1));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  AR4.ServerUnaryCallImpl = oL4;
  class sL4 extends kvA.Readable {
    constructor(A, q, K) {
      super({ objectMode: !0 });
      ((this.path = A),
        (this.call = q),
        (this.metadata = K),
        (this.cancelled = !1));
    }
    _read(A) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  AR4.ServerReadableStreamImpl = sL4;
  class tL4 extends kvA.Writable {
    constructor(A, q, K, Y) {
      super({ objectMode: !0 });
      ((this.path = A),
        (this.call = q),
        (this.metadata = K),
        (this.request = Y),
        (this.pendingStatus = { code: LvA.Status.OK, details: "OK" }),
        (this.cancelled = !1),
        (this.trailingMetadata = new aL4.Metadata()),
        this.on("error", (z) => {
          ((this.pendingStatus = RvA(z)), this.end());
        }));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(A, q, K) {
      this.call.sendMessage(A, K);
    }
    _final(A) {
      var q;
      (A(null),
        this.call.sendStatus(
          Object.assign(Object.assign({}, this.pendingStatus), {
            metadata:
              (q = this.pendingStatus.metadata) !== null && q !== void 0
                ? q
                : this.trailingMetadata,
          }),
        ));
    }
    end(A) {
      if (A) this.trailingMetadata = A;
      return super.end();
    }
  }
  AR4.ServerWritableStreamImpl = tL4;
  class eL4 extends kvA.Duplex {
    constructor(A, q, K) {
      super({ objectMode: !0 });
      ((this.path = A),
        (this.call = q),
        (this.metadata = K),
        (this.pendingStatus = { code: LvA.Status.OK, details: "OK" }),
        (this.cancelled = !1),
        (this.trailingMetadata = new aL4.Metadata()),
        this.on("error", (Y) => {
          ((this.pendingStatus = RvA(Y)), this.end());
        }));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(A) {
      this.call.startRead();
    }
    _write(A, q, K) {
      this.call.sendMessage(A, K);
    }
    _final(A) {
      var q;
      (A(null),
        this.call.sendStatus(
          Object.assign(Object.assign({}, this.pendingStatus), {
            metadata:
              (q = this.pendingStatus.metadata) !== null && q !== void 0
                ? q
                : this.trailingMetadata,
          }),
        ));
    }
    end(A) {
      if (A) this.trailingMetadata = A;
      return super.end();
    }
  }
  AR4.ServerDuplexStreamImpl = eL4;
