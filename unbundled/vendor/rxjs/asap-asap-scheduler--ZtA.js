// Module: ZtA (cjs)
// Dependencies: [JtA, MtA]
// Exports: asap, asapScheduler
// Lines: 9310-9317 in cli.formatted.js
// ---

  Object.defineProperty(PtA, "__esModule", { value: !0 });
  PtA.asap = PtA.asapScheduler = void 0;
  var Ndq = JtA(),
    Tdq = MtA();
  PtA.asapScheduler = new Tdq.AsapScheduler(Ndq.AsapAction);
  PtA.asap = PtA.asapScheduler;
