// Module: uQ (cjs)
// Dependencies: [P5, zS6]
// Exports: from
// Lines: 10590-10599 in cli.formatted.js
// ---

  Object.defineProperty(QeA, "__esModule", { value: !0 });
  QeA.from = void 0;
  var Zlq = zS6(),
    flq = P5();
  function Vlq(A, q) {
    return q ? Zlq.scheduled(A, q) : flq.innerFrom(A);
  }
  QeA.from = Vlq;
