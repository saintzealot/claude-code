// Module: TPA (cjs)
// Dependencies: [wd, Jm1, jm1, mM1]
// Lines: 267578-268042 in cli.formatted.js
// ---

  var { Writable: GC9 } = h1("stream"),
    Gi7 = jm1(),
    {
      BINARY_TYPES: ZC9,
      EMPTY_BUFFER: Zi7,
      kStatusCode: fC9,
      kWebSocket: VC9,
    } = wd(),
    { concat: NPA, toArrayBuffer: NC9, unmask: TC9 } = Jm1(),
    { isValidStatusCode: vC9, isValidUTF8: fi7 } = mM1(),
    wX6 = Buffer[Symbol.species];
  class Vi7 extends GC9 {
    constructor(A = {}) {
      super();
      ((this._allowSynchronousEvents =
        A.allowSynchronousEvents !== void 0 ? A.allowSynchronousEvents : !0),
        (this._binaryType = A.binaryType || ZC9[0]),
        (this._extensions = A.extensions || {}),
        (this._isServer = !!A.isServer),
        (this._maxPayload = A.maxPayload | 0),
        (this._skipUTF8Validation = !!A.skipUTF8Validation),
        (this[VC9] = void 0),
        (this._bufferedBytes = 0),
        (this._buffers = []),
        (this._compressed = !1),
        (this._payloadLength = 0),
        (this._mask = void 0),
        (this._fragmented = 0),
        (this._masked = !1),
        (this._fin = !1),
        (this._opcode = 0),
        (this._totalPayloadLength = 0),
        (this._messageLength = 0),
        (this._fragments = []),
        (this._errored = !1),
        (this._loop = !1),
        (this._state = 0));
    }
    _write(A, q, K) {
      if (this._opcode === 8 && this._state == 0) return K();
      ((this._bufferedBytes += A.length),
        this._buffers.push(A),
        this.startLoop(K));
    }
    consume(A) {
      if (((this._bufferedBytes -= A), A === this._buffers[0].length))
        return this._buffers.shift();
      if (A < this._buffers[0].length) {
        let K = this._buffers[0];
        return (
          (this._buffers[0] = new wX6(
            K.buffer,
            K.byteOffset + A,
            K.length - A,
          )),
          new wX6(K.buffer, K.byteOffset, A)
        );
      }
      let q = Buffer.allocUnsafe(A);
      do {
        let K = this._buffers[0],
          Y = q.length - A;
        if (A >= K.length) q.set(this._buffers.shift(), Y);
        else
          (q.set(new Uint8Array(K.buffer, K.byteOffset, A), Y),
            (this._buffers[0] = new wX6(
              K.buffer,
              K.byteOffset + A,
              K.length - A,
            )));
        A -= K.length;
      } while (A > 0);
      return q;
    }
    startLoop(A) {
      this._loop = !0;
      do
        switch (this._state) {
          case 0:
            this.getInfo(A);
            break;
          case 1:
            this.getPayloadLength16(A);
            break;
          case 2:
            this.getPayloadLength64(A);
            break;
          case 3:
            this.getMask();
            break;
          case 4:
            this.getData(A);
            break;
          case 5:
          case 6:
            this._loop = !1;
            return;
        }
      while (this._loop);
      if (!this._errored) A();
    }
    getInfo(A) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return;
      }
      let q = this.consume(2);
      if ((q[0] & 48) !== 0) {
        let Y = this.createError(
          RangeError,
          "RSV2 and RSV3 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_2_3",
        );
        A(Y);
        return;
      }
      let K = (q[0] & 64) === 64;
      if (K && !this._extensions[Gi7.extensionName]) {
        let Y = this.createError(
          RangeError,
          "RSV1 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1",
        );
        A(Y);
        return;
      }
      if (
        ((this._fin = (q[0] & 128) === 128),
        (this._opcode = q[0] & 15),
        (this._payloadLength = q[1] & 127),
        this._opcode === 0)
      ) {
        if (K) {
          let Y = this.createError(
            RangeError,
            "RSV1 must be clear",
            !0,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1",
          );
          A(Y);
          return;
        }
        if (!this._fragmented) {
          let Y = this.createError(
            RangeError,
            "invalid opcode 0",
            !0,
            1002,
            "WS_ERR_INVALID_OPCODE",
          );
          A(Y);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          let Y = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            !0,
            1002,
            "WS_ERR_INVALID_OPCODE",
          );
          A(Y);
          return;
        }
        this._compressed = K;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          let Y = this.createError(
            RangeError,
            "FIN must be set",
            !0,
            1002,
            "WS_ERR_EXPECTED_FIN",
          );
          A(Y);
          return;
        }
        if (K) {
          let Y = this.createError(
            RangeError,
            "RSV1 must be clear",
            !0,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1",
          );
          A(Y);
          return;
        }
        if (
          this._payloadLength > 125 ||
          (this._opcode === 8 && this._payloadLength === 1)
        ) {
          let Y = this.createError(
            RangeError,
            `invalid payload length ${this._payloadLength}`,
            !0,
            1002,
            "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH",
          );
          A(Y);
          return;
        }
      } else {
        let Y = this.createError(
          RangeError,
          `invalid opcode ${this._opcode}`,
          !0,
          1002,
          "WS_ERR_INVALID_OPCODE",
        );
        A(Y);
        return;
      }
      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      if (((this._masked = (q[1] & 128) === 128), this._isServer)) {
        if (!this._masked) {
          let Y = this.createError(
            RangeError,
            "MASK must be set",
            !0,
            1002,
            "WS_ERR_EXPECTED_MASK",
          );
          A(Y);
          return;
        }
      } else if (this._masked) {
        let Y = this.createError(
          RangeError,
          "MASK must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_MASK",
        );
        A(Y);
        return;
      }
      if (this._payloadLength === 126) this._state = 1;
      else if (this._payloadLength === 127) this._state = 2;
      else this.haveLength(A);
    }
    getPayloadLength16(A) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return;
      }
      ((this._payloadLength = this.consume(2).readUInt16BE(0)),
        this.haveLength(A));
    }
    getPayloadLength64(A) {
      if (this._bufferedBytes < 8) {
        this._loop = !1;
        return;
      }
      let q = this.consume(8),
        K = q.readUInt32BE(0);
      if (K > Math.pow(2, 21) - 1) {
        let Y = this.createError(
          RangeError,
          "Unsupported WebSocket frame: payload length > 2^53 - 1",
          !1,
          1009,
          "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH",
        );
        A(Y);
        return;
      }
      ((this._payloadLength = K * Math.pow(2, 32) + q.readUInt32BE(4)),
        this.haveLength(A));
    }
    haveLength(A) {
      if (this._payloadLength && this._opcode < 8) {
        if (
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
        ) {
          let q = this.createError(
            RangeError,
            "Max payload size exceeded",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
          );
          A(q);
          return;
        }
      }
      if (this._masked) this._state = 3;
      else this._state = 4;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = !1;
        return;
      }
      ((this._mask = this.consume(4)), (this._state = 4));
    }
    getData(A) {
      let q = Zi7;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = !1;
          return;
        }
        if (
          ((q = this.consume(this._payloadLength)),
          this._masked &&
            (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !==
              0)
        )
          TC9(q, this._mask);
      }
      if (this._opcode > 7) {
        this.controlMessage(q, A);
        return;
      }
      if (this._compressed) {
        ((this._state = 5), this.decompress(q, A));
        return;
      }
      if (q.length)
        ((this._messageLength = this._totalPayloadLength),
          this._fragments.push(q));
      this.dataMessage(A);
    }
    decompress(A, q) {
      this._extensions[Gi7.extensionName].decompress(A, this._fin, (Y, z) => {
        if (Y) return q(Y);
        if (z.length) {
          if (
            ((this._messageLength += z.length),
            this._messageLength > this._maxPayload && this._maxPayload > 0)
          ) {
            let w = this.createError(
              RangeError,
              "Max payload size exceeded",
              !1,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
            );
            q(w);
            return;
          }
          this._fragments.push(z);
        }
        if ((this.dataMessage(q), this._state === 0)) this.startLoop(q);
      });
    }
    dataMessage(A) {
      if (!this._fin) {
        this._state = 0;
        return;
      }
      let q = this._messageLength,
        K = this._fragments;
      if (
        ((this._totalPayloadLength = 0),
        (this._messageLength = 0),
        (this._fragmented = 0),
        (this._fragments = []),
        this._opcode === 2)
      ) {
        let Y;
        if (this._binaryType === "nodebuffer") Y = NPA(K, q);
        else if (this._binaryType === "arraybuffer") Y = NC9(NPA(K, q));
        else if (this._binaryType === "blob") Y = new Blob(K);
        else Y = K;
        if (this._allowSynchronousEvents)
          (this.emit("message", Y, !0), (this._state = 0));
        else
          ((this._state = 6),
            setImmediate(() => {
              (this.emit("message", Y, !0),
                (this._state = 0),
                this.startLoop(A));
            }));
      } else {
        let Y = NPA(K, q);
        if (!this._skipUTF8Validation && !fi7(Y)) {
          let z = this.createError(
            Error,
            "invalid UTF-8 sequence",
            !0,
            1007,
            "WS_ERR_INVALID_UTF8",
          );
          A(z);
          return;
        }
        if (this._state === 5 || this._allowSynchronousEvents)
          (this.emit("message", Y, !1), (this._state = 0));
        else
          ((this._state = 6),
            setImmediate(() => {
              (this.emit("message", Y, !1),
                (this._state = 0),
                this.startLoop(A));
            }));
      }
    }
    controlMessage(A, q) {
      if (this._opcode === 8) {
        if (A.length === 0)
          ((this._loop = !1), this.emit("conclude", 1005, Zi7), this.end());
        else {
          let K = A.readUInt16BE(0);
          if (!vC9(K)) {
            let z = this.createError(
              RangeError,
              `invalid status code ${K}`,
              !0,
              1002,
              "WS_ERR_INVALID_CLOSE_CODE",
            );
            q(z);
            return;
          }
          let Y = new wX6(A.buffer, A.byteOffset + 2, A.length - 2);
          if (!this._skipUTF8Validation && !fi7(Y)) {
            let z = this.createError(
              Error,
              "invalid UTF-8 sequence",
              !0,
              1007,
              "WS_ERR_INVALID_UTF8",
            );
            q(z);
            return;
          }
          ((this._loop = !1), this.emit("conclude", K, Y), this.end());
        }
        this._state = 0;
        return;
      }
      if (this._allowSynchronousEvents)
        (this.emit(this._opcode === 9 ? "ping" : "pong", A), (this._state = 0));
      else
        ((this._state = 6),
          setImmediate(() => {
            (this.emit(this._opcode === 9 ? "ping" : "pong", A),
              (this._state = 0),
              this.startLoop(q));
          }));
    }
    createError(A, q, K, Y, z) {
      ((this._loop = !1), (this._errored = !0));
      let w = new A(K ? `Invalid WebSocket frame: ${q}` : q);
      return (
        Error.captureStackTrace(w, this.createError),
        (w.code = z),
        (w[fC9] = Y),
        w
      );
    }
  }
  Ni7.exports = Vi7;
