// Module: RtA (cjs)
// Dependencies: [TtA, vtA]
// Exports: queue, queueScheduler
// Lines: 9446-9453 in cli.formatted.js
// ---

  Object.defineProperty(EtA, "__esModule", { value: !0 });
  EtA.queue = EtA.queueScheduler = void 0;
  var hdq = TtA(),
    Idq = vtA();
  EtA.queueScheduler = new Idq.QueueScheduler(hdq.QueueAction);
  EtA.queue = EtA.queueScheduler;
