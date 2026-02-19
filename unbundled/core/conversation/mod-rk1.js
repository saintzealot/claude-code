// Module: rk1 (cjs)
// Dependencies: [sf, i$1, O81, lk1]
// Lines: 64644-64785 in cli.formatted.js
// ---

  var {
      kReadyState: ik1,
      kController: QvK,
      kResponse: gvK,
      kBinaryType: UvK,
      kWebSocketURL: pvK,
    } = lk1(),
    { states: nk1, opcodes: Tn } = O81(),
    { ErrorEvent: dvK, createFastMessageEvent: cvK } = i$1(),
    { isUtf8: lvK } = h1("node:buffer"),
    { collectASequenceOfCodePointsFast: ivK, removeHTTPWhitespace: DW8 } = sf();
  function nvK(A) {
    return A[ik1] === nk1.CONNECTING;
  }
  function rvK(A) {
    return A[ik1] === nk1.OPEN;
  }
  function avK(A) {
    return A[ik1] === nk1.CLOSING;
  }
  function ovK(A) {
    return A[ik1] === nk1.CLOSED;
  }
  function Np6(A, q, K = (z, w) => new Event(z, w), Y = {}) {
    let z = K(A, Y);
    q.dispatchEvent(z);
  }
  function svK(A, q, K) {
    if (A[ik1] !== nk1.OPEN) return;
    let Y;
    if (q === Tn.TEXT)
      try {
        Y = VW8(K);
      } catch {
        PW8(A, "Received invalid UTF-8 in text frame.");
        return;
      }
    else if (q === Tn.BINARY)
      if (A[UvK] === "blob") Y = new Blob([K]);
      else Y = tvK(K);
    Np6("message", A, cvK, { origin: A[pvK].origin, data: Y });
  }
  function tvK(A) {
    if (A.byteLength === A.buffer.byteLength) return A.buffer;
    return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
  }
  function evK(A) {
    if (A.length === 0) return !1;
    for (let q = 0; q < A.length; ++q) {
      let K = A.charCodeAt(q);
      if (
        K < 33 ||
        K > 126 ||
        K === 34 ||
        K === 40 ||
        K === 41 ||
        K === 44 ||
        K === 47 ||
        K === 58 ||
        K === 59 ||
        K === 60 ||
        K === 61 ||
        K === 62 ||
        K === 63 ||
        K === 64 ||
        K === 91 ||
        K === 92 ||
        K === 93 ||
        K === 123 ||
        K === 125
      )
        return !1;
    }
    return !0;
  }
  function AEK(A) {
    if (A >= 1000 && A < 1015) return A !== 1004 && A !== 1005 && A !== 1006;
    return A >= 3000 && A <= 4999;
  }
  function PW8(A, q) {
    let { [QvK]: K, [gvK]: Y } = A;
    if ((K.abort(), Y?.socket && !Y.socket.destroyed)) Y.socket.destroy();
    if (q)
      Np6("error", A, (z, w) => new dvK(z, w), { error: Error(q), message: q });
  }
  function WW8(A) {
    return A === Tn.CLOSE || A === Tn.PING || A === Tn.PONG;
  }
  function GW8(A) {
    return A === Tn.CONTINUATION;
  }
  function ZW8(A) {
    return A === Tn.TEXT || A === Tn.BINARY;
  }
  function qEK(A) {
    return ZW8(A) || GW8(A) || WW8(A);
  }
  function KEK(A) {
    let q = { position: 0 },
      K = new Map();
    while (q.position < A.length) {
      let Y = ivK(";", A, q),
        [z, w = ""] = Y.split("=");
      (K.set(DW8(z, !0, !1), DW8(w, !1, !0)), q.position++);
    }
    return K;
  }
  function YEK(A) {
    for (let q = 0; q < A.length; q++) {
      let K = A.charCodeAt(q);
      if (K < 48 || K > 57) return !1;
    }
    return !0;
  }
  var fW8 = typeof process.versions.icu === "string",
    MW8 = fW8 ? new TextDecoder("utf-8", { fatal: !0 }) : void 0,
    VW8 = fW8
      ? MW8.decode.bind(MW8)
      : function (A) {
          if (lvK(A)) return A.toString("utf-8");
          throw TypeError("Invalid utf-8 received.");
        };
  NW8.exports = {
    isConnecting: nvK,
    isEstablished: rvK,
    isClosing: avK,
    isClosed: ovK,
    fireEvent: Np6,
    isValidSubprotocol: evK,
    isValidStatusCode: AEK,
    failWebsocketConnection: PW8,
    websocketMessageReceived: svK,
    utf8Decode: VW8,
    isControlFrame: WW8,
    isContinuationFrame: GW8,
    isTextBinaryFrame: ZW8,
    isValidOpcode: qEK,
    parseExtensions: KEK,
    isValidClientWindowBits: YEK,
  };
