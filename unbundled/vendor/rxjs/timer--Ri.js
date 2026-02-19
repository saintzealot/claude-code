// Module: Ri (cjs)
// Dependencies: [p2, Ff, FT1, ya1]
// Exports: timer
// Lines: 11732-11758 in cli.formatted.js
// ---

  Object.defineProperty(P68, "__esModule", { value: !0 });
  P68.timer = void 0;
  var mnq = p2(),
    Fnq = Ff(),
    Qnq = FT1(),
    gnq = ya1();
  function Unq(A, q, K) {
    if (A === void 0) A = 0;
    if (K === void 0) K = Fnq.async;
    var Y = -1;
    if (q != null)
      if (Qnq.isScheduler(q)) K = q;
      else Y = q;
    return new mnq.Observable(function (z) {
      var w = gnq.isValidDate(A) ? +A - K.now() : A;
      if (w < 0) w = 0;
      var H = 0;
      return K.schedule(function () {
        if (!z.closed)
          if ((z.next(H++), 0 <= Y)) this.schedule(void 0, Y);
          else z.complete();
      }, w);
    });
  }
  P68.timer = Unq;
