// Module: zS6 (cjs)
// Dependencies: [Ea1, nC6, rC6, aC6, oC6, tC6, ka1, NeA, EeA, ReA, KS6, YS6, BeA]
// Exports: scheduled
// Lines: 10560-10589 in cli.formatted.js
// ---

  Object.defineProperty(meA, "__esModule", { value: !0 });
  meA.scheduled = void 0;
  var zlq = NeA(),
    wlq = EeA(),
    Hlq = ReA(),
    $lq = KS6(),
    Olq = YS6(),
    _lq = rC6(),
    Jlq = nC6(),
    Xlq = Ea1(),
    jlq = tC6(),
    Dlq = aC6(),
    Mlq = oC6(),
    Plq = ka1(),
    Wlq = BeA();
  function Glq(A, q) {
    if (A != null) {
      if (_lq.isInteropObservable(A)) return zlq.scheduleObservable(A, q);
      if (Xlq.isArrayLike(A)) return Hlq.scheduleArray(A, q);
      if (Jlq.isPromise(A)) return wlq.schedulePromise(A, q);
      if (Dlq.isAsyncIterable(A)) return Olq.scheduleAsyncIterable(A, q);
      if (jlq.isIterable(A)) return $lq.scheduleIterable(A, q);
      if (Plq.isReadableStreamLike(A))
        return Wlq.scheduleReadableStreamLike(A, q);
    }
    throw Mlq.createInvalidObservableTypeError(A);
  }
  meA.scheduled = Glq;
