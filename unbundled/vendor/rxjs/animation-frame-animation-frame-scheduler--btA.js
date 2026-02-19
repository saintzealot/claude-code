// Module: btA (cjs)
// Dependencies: [CtA, StA]
// Exports: animationFrame, animationFrameScheduler
// Lines: 9601-9610 in cli.formatted.js
// ---

  Object.defineProperty(htA, "__esModule", { value: !0 });
  htA.animationFrame = htA.animationFrameScheduler = void 0;
  var Qdq = CtA(),
    gdq = StA();
  htA.animationFrameScheduler = new gdq.AnimationFrameScheduler(
    Qdq.AnimationFrameAction,
  );
  htA.animationFrame = htA.animationFrameScheduler;
