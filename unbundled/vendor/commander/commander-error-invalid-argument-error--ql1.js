// Module: ql1 (cjs)
// Exports: CommanderError, InvalidArgumentError
// Lines: 528237-528257 in cli.formatted.js
// ---

  class oQA extends Error {
    constructor(A, q, K) {
      super(K);
      (Error.captureStackTrace(this, this.constructor),
        (this.name = this.constructor.name),
        (this.code = q),
        (this.exitCode = A),
        (this.nestedError = void 0));
    }
  }
  class VDq extends oQA {
    constructor(A) {
      super(1, "commander.invalidArgument", A);
      (Error.captureStackTrace(this, this.constructor),
        (this.name = this.constructor.name));
    }
  }
  R_z.CommanderError = oQA;
  R_z.InvalidArgumentError = VDq;
