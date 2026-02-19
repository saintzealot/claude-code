// Module: Ph6 (cjs)
// Dependencies: [f2, Na1, cT1]
// Exports: publishReplay
// Lines: 13988-14002 in cli.formatted.js
// ---

  Object.defineProperty(C78, "__esModule", { value: !0 });
  C78.publishReplay = void 0;
  var _eq = Na1(),
    Jeq = cT1(),
    y78 = f2();
  function Xeq(A, q, K, Y) {
    if (K && !y78.isFunction(K)) Y = K;
    var z = y78.isFunction(K) ? K : void 0;
    return function (w) {
      return Jeq.multicast(new _eq.ReplaySubject(A, q, Y), z)(w);
    };
  }
  C78.publishReplay = Xeq;
