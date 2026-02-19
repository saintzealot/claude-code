// Module: df8 (cjs)
// Dependencies: [Td6]
// Exports: createBufferedReadable, createBufferedReadableStream, merge, flush, sizeOf, modeOf
// Lines: 69596-69678 in cli.formatted.js
// ---

  Object.defineProperty(Uf8, "__esModule", { value: !0 });
  Uf8.createBufferedReadable = void 0;
  Uf8.createBufferedReadableStream = Ff8;
  Uf8.merge = Qf8;
  Uf8.flush = A66;
  Uf8.sizeOf = wO1;
  Uf8.modeOf = gf8;
  var PSK = Td6();
  function Ff8(A, q, K) {
    let Y = A.getReader(),
      z = !1,
      w = 0,
      H = ["", new PSK.ByteArrayCollector((_) => new Uint8Array(_))],
      $ = -1,
      O = async (_) => {
        let { value: J, done: X } = await Y.read(),
          j = J;
        if (X) {
          if ($ !== -1) {
            let D = A66(H, $);
            if (wO1(D) > 0) _.enqueue(D);
          }
          _.close();
        } else {
          let D = gf8(j, !1);
          if ($ !== D) {
            if ($ >= 0) _.enqueue(A66(H, $));
            $ = D;
          }
          if ($ === -1) {
            _.enqueue(j);
            return;
          }
          let M = wO1(j);
          w += M;
          let P = wO1(H[$]);
          if (M >= q && P === 0) _.enqueue(j);
          else {
            let W = Qf8(H, $, j);
            if (!z && w > q * 2)
              ((z = !0),
                K?.warn(
                  `@smithy/util-stream - stream chunk size ${M} is below threshold of ${q}, automatically buffering.`,
                ));
            if (W >= q) _.enqueue(A66(H, $));
            else await O(_);
          }
        }
      };
    return new ReadableStream({ pull: O });
  }
  Uf8.createBufferedReadable = Ff8;
  function Qf8(A, q, K) {
    switch (q) {
      case 0:
        return ((A[0] += K), wO1(A[0]));
      case 1:
      case 2:
        return (A[q].push(K), wO1(A[q]));
    }
  }
  function A66(A, q) {
    switch (q) {
      case 0:
        let K = A[0];
        return ((A[0] = ""), K);
      case 1:
      case 2:
        return A[q].flush();
    }
    throw Error(`@smithy/util-stream - invalid index ${q} given to flush()`);
  }
  function wO1(A) {
    return A?.byteLength ?? A?.length ?? 0;
  }
  function gf8(A, q = !0) {
    if (q && typeof Buffer < "u" && A instanceof Buffer) return 2;
    if (A instanceof Uint8Array) return 1;
    if (typeof A === "string") return 0;
    return -1;
  }
