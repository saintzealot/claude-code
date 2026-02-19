// Module: oi7 (cjs)
// Dependencies: [XX6]
// Lines: 269214-269305 in cli.formatted.js
// ---

  var LTw = XX6(),
    { Duplex: _S9 } = h1("stream");
  function ni7(A) {
    A.emit("close");
  }
  function JS9() {
    if (!this.destroyed && this._writableState.finished) this.destroy();
  }
  function ri7(A) {
    if (
      (this.removeListener("error", ri7),
      this.destroy(),
      this.listenerCount("error") === 0)
    )
      this.emit("error", A);
  }
  function XS9(A, q) {
    let K = !0,
      Y = new _S9({
        ...q,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1,
      });
    return (
      A.on("message", function (w, H) {
        let $ = !H && Y._readableState.objectMode ? w.toString() : w;
        if (!Y.push($)) A.pause();
      }),
      A.once("error", function (w) {
        if (Y.destroyed) return;
        ((K = !1), Y.destroy(w));
      }),
      A.once("close", function () {
        if (Y.destroyed) return;
        Y.push(null);
      }),
      (Y._destroy = function (z, w) {
        if (A.readyState === A.CLOSED) {
          (w(z), process.nextTick(ni7, Y));
          return;
        }
        let H = !1;
        if (
          (A.once("error", function (O) {
            ((H = !0), w(O));
          }),
          A.once("close", function () {
            if (!H) w(z);
            process.nextTick(ni7, Y);
          }),
          K)
        )
          A.terminate();
      }),
      (Y._final = function (z) {
        if (A.readyState === A.CONNECTING) {
          A.once("open", function () {
            Y._final(z);
          });
          return;
        }
        if (A._socket === null) return;
        if (A._socket._writableState.finished) {
          if ((z(), Y._readableState.endEmitted)) Y.destroy();
        } else
          (A._socket.once("finish", function () {
            z();
          }),
            A.close());
      }),
      (Y._read = function () {
        if (A.isPaused) A.resume();
      }),
      (Y._write = function (z, w, H) {
        if (A.readyState === A.CONNECTING) {
          A.once("open", function () {
            Y._write(z, w, H);
          });
          return;
        }
        A.send(z, H);
      }),
      Y.on("end", JS9),
      Y.on("error", ri7),
      Y
    );
  }
  ai7.exports = XS9;
