// Module: Jd4 (cjs)
// Dependencies: [hG6, Yd4]
// Exports: createMessageConnection, createServerSocketTransport, createClientSocketTransport, createServerPipeTransport, createClientPipeTransport, generateRandomPipeName, StreamMessageWriter, StreamMessageReader, SocketMessageWriter, SocketMessageReader, PortMessageWriter, PortMessageReader, IPCMessageWriter, IPCMessageReader
// Lines: 403828-404076 in cli.formatted.js
// ---

  var yhY =
      (VY && VY.__createBinding) ||
      (Object.create
        ? function (A, q, K, Y) {
            if (Y === void 0) Y = K;
            var z = Object.getOwnPropertyDescriptor(q, K);
            if (
              !z ||
              ("get" in z ? !q.__esModule : z.writable || z.configurable)
            )
              z = {
                enumerable: !0,
                get: function () {
                  return q[K];
                },
              };
            Object.defineProperty(A, Y, z);
          }
        : function (A, q, K, Y) {
            if (Y === void 0) Y = K;
            A[Y] = q[K];
          }),
    ChY =
      (VY && VY.__exportStar) ||
      function (A, q) {
        for (var K in A)
          if (K !== "default" && !Object.prototype.hasOwnProperty.call(q, K))
            yhY(q, A, K);
      };
  Object.defineProperty(VY, "__esModule", { value: !0 });
  VY.createMessageConnection =
    VY.createServerSocketTransport =
    VY.createClientSocketTransport =
    VY.createServerPipeTransport =
    VY.createClientPipeTransport =
    VY.generateRandomPipeName =
    VY.StreamMessageWriter =
    VY.StreamMessageReader =
    VY.SocketMessageWriter =
    VY.SocketMessageReader =
    VY.PortMessageWriter =
    VY.PortMessageReader =
    VY.IPCMessageWriter =
    VY.IPCMessageReader =
      void 0;
  var SG1 = Yd4();
  SG1.default.install();
  var zd4 = h1("path"),
    ShY = h1("os"),
    hhY = h1("crypto"),
    xG6 = h1("net"),
    LE = hG6();
  ChY(hG6(), VY);
  class Hd4 extends LE.AbstractMessageReader {
    constructor(A) {
      super();
      this.process = A;
      let q = this.process;
      (q.on("error", (K) => this.fireError(K)),
        q.on("close", () => this.fireClose()));
    }
    listen(A) {
      return (
        this.process.on("message", A),
        LE.Disposable.create(() => this.process.off("message", A))
      );
    }
  }
  VY.IPCMessageReader = Hd4;
  class $d4 extends LE.AbstractMessageWriter {
    constructor(A) {
      super();
      ((this.process = A), (this.errorCount = 0));
      let q = this.process;
      (q.on("error", (K) => this.fireError(K)),
        q.on("close", () => this.fireClose));
    }
    write(A) {
      try {
        if (typeof this.process.send === "function")
          this.process.send(A, void 0, void 0, (q) => {
            if (q) (this.errorCount++, this.handleError(q, A));
            else this.errorCount = 0;
          });
        return Promise.resolve();
      } catch (q) {
        return (this.handleError(q, A), Promise.reject(q));
      }
    }
    handleError(A, q) {
      (this.errorCount++, this.fireError(A, q, this.errorCount));
    }
    end() {}
  }
  VY.IPCMessageWriter = $d4;
  class Od4 extends LE.AbstractMessageReader {
    constructor(A) {
      super();
      ((this.onData = new LE.Emitter()),
        A.on("close", () => this.fireClose),
        A.on("error", (q) => this.fireError(q)),
        A.on("message", (q) => {
          this.onData.fire(q);
        }));
    }
    listen(A) {
      return this.onData.event(A);
    }
  }
  VY.PortMessageReader = Od4;
  class _d4 extends LE.AbstractMessageWriter {
    constructor(A) {
      super();
      ((this.port = A),
        (this.errorCount = 0),
        A.on("close", () => this.fireClose()),
        A.on("error", (q) => this.fireError(q)));
    }
    write(A) {
      try {
        return (this.port.postMessage(A), Promise.resolve());
      } catch (q) {
        return (this.handleError(q, A), Promise.reject(q));
      }
    }
    handleError(A, q) {
      (this.errorCount++, this.fireError(A, q, this.errorCount));
    }
    end() {}
  }
  VY.PortMessageWriter = _d4;
  class hG1 extends LE.ReadableStreamMessageReader {
    constructor(A, q = "utf-8") {
      super((0, SG1.default)().stream.asReadableStream(A), q);
    }
  }
  VY.SocketMessageReader = hG1;
  class IG1 extends LE.WriteableStreamMessageWriter {
    constructor(A, q) {
      super((0, SG1.default)().stream.asWritableStream(A), q);
      this.socket = A;
    }
    dispose() {
      (super.dispose(), this.socket.destroy());
    }
  }
  VY.SocketMessageWriter = IG1;
  class XyA extends LE.ReadableStreamMessageReader {
    constructor(A, q) {
      super((0, SG1.default)().stream.asReadableStream(A), q);
    }
  }
  VY.StreamMessageReader = XyA;
  class jyA extends LE.WriteableStreamMessageWriter {
    constructor(A, q) {
      super((0, SG1.default)().stream.asWritableStream(A), q);
    }
  }
  VY.StreamMessageWriter = jyA;
  var wd4 = process.env.XDG_RUNTIME_DIR,
    IhY = new Map([
      ["linux", 107],
      ["darwin", 103],
    ]);
  function xhY() {
    let A = (0, hhY.randomBytes)(21).toString("hex");
    if (process.platform === "win32")
      return `\\\\.\\pipe\\vscode-jsonrpc-${A}-sock`;
    let q;
    if (wd4) q = zd4.join(wd4, `vscode-ipc-${A}.sock`);
    else q = zd4.join(ShY.tmpdir(), `vscode-${A}.sock`);
    let K = IhY.get(process.platform);
    if (K !== void 0 && q.length > K)
      (0, SG1.default)().console.warn(
        `WARNING: IPC handle "${q}" is longer than ${K} characters.`,
      );
    return q;
  }
  VY.generateRandomPipeName = xhY;
  function bhY(A, q = "utf-8") {
    let K,
      Y = new Promise((z, w) => {
        K = z;
      });
    return new Promise((z, w) => {
      let H = (0, xG6.createServer)(($) => {
        (H.close(), K([new hG1($, q), new IG1($, q)]));
      });
      (H.on("error", w),
        H.listen(A, () => {
          (H.removeListener("error", w),
            z({
              onConnected: () => {
                return Y;
              },
            }));
        }));
    });
  }
  VY.createClientPipeTransport = bhY;
  function uhY(A, q = "utf-8") {
    let K = (0, xG6.createConnection)(A);
    return [new hG1(K, q), new IG1(K, q)];
  }
  VY.createServerPipeTransport = uhY;
  function BhY(A, q = "utf-8") {
    let K,
      Y = new Promise((z, w) => {
        K = z;
      });
    return new Promise((z, w) => {
      let H = (0, xG6.createServer)(($) => {
        (H.close(), K([new hG1($, q), new IG1($, q)]));
      });
      (H.on("error", w),
        H.listen(A, "127.0.0.1", () => {
          (H.removeListener("error", w),
            z({
              onConnected: () => {
                return Y;
              },
            }));
        }));
    });
  }
  VY.createClientSocketTransport = BhY;
  function mhY(A, q = "utf-8") {
    let K = (0, xG6.createConnection)(A, "127.0.0.1");
    return [new hG1(K, q), new IG1(K, q)];
  }
  VY.createServerSocketTransport = mhY;
  function FhY(A) {
    let q = A;
    return q.read !== void 0 && q.addListener !== void 0;
  }
  function QhY(A) {
    let q = A;
    return q.write !== void 0 && q.addListener !== void 0;
  }
  function ghY(A, q, K, Y) {
    if (!K) K = LE.NullLogger;
    let z = FhY(A) ? new XyA(A) : A,
      w = QhY(q) ? new jyA(q) : q;
    if (LE.ConnectionStrategy.is(Y)) Y = { connectionStrategy: Y };
    return (0, LE.createMessageConnection)(z, w, K, Y);
  }
  VY.createMessageConnection = ghY;
