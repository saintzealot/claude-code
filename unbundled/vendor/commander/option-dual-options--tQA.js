// Module: tQA (cjs)
// Dependencies: [ql1]
// Exports: Option, DualOptions
// Lines: 528558-528682 in cli.formatted.js
// ---

  var { InvalidArgumentError: F_z } = ql1();
  class vDq {
    constructor(A, q) {
      ((this.flags = A),
        (this.description = q || ""),
        (this.required = A.includes("<")),
        (this.optional = A.includes("[")),
        (this.variadic = /\w\.\.\.[>\]]$/.test(A)),
        (this.mandatory = !1));
      let K = g_z(A);
      if (
        ((this.short = K.shortFlag),
        (this.long = K.longFlag),
        (this.negate = !1),
        this.long)
      )
        this.negate = this.long.startsWith("--no-");
      ((this.defaultValue = void 0),
        (this.defaultValueDescription = void 0),
        (this.presetArg = void 0),
        (this.envVar = void 0),
        (this.parseArg = void 0),
        (this.hidden = !1),
        (this.argChoices = void 0),
        (this.conflictsWith = []),
        (this.implied = void 0));
    }
    default(A, q) {
      return (
        (this.defaultValue = A),
        (this.defaultValueDescription = q),
        this
      );
    }
    preset(A) {
      return ((this.presetArg = A), this);
    }
    conflicts(A) {
      return ((this.conflictsWith = this.conflictsWith.concat(A)), this);
    }
    implies(A) {
      let q = A;
      if (typeof A === "string") q = { [A]: !0 };
      return ((this.implied = Object.assign(this.implied || {}, q)), this);
    }
    env(A) {
      return ((this.envVar = A), this);
    }
    argParser(A) {
      return ((this.parseArg = A), this);
    }
    makeOptionMandatory(A = !0) {
      return ((this.mandatory = !!A), this);
    }
    hideHelp(A = !0) {
      return ((this.hidden = !!A), this);
    }
    _concatValue(A, q) {
      if (q === this.defaultValue || !Array.isArray(q)) return [A];
      return q.concat(A);
    }
    choices(A) {
      return (
        (this.argChoices = A.slice()),
        (this.parseArg = (q, K) => {
          if (!this.argChoices.includes(q))
            throw new F_z(`Allowed choices are ${this.argChoices.join(", ")}.`);
          if (this.variadic) return this._concatValue(q, K);
          return q;
        }),
        this
      );
    }
    name() {
      if (this.long) return this.long.replace(/^--/, "");
      return this.short.replace(/^-/, "");
    }
    attributeName() {
      return Q_z(this.name().replace(/^no-/, ""));
    }
    is(A) {
      return this.short === A || this.long === A;
    }
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }
  class EDq {
    constructor(A) {
      ((this.positiveOptions = new Map()),
        (this.negativeOptions = new Map()),
        (this.dualOptions = new Set()),
        A.forEach((q) => {
          if (q.negate) this.negativeOptions.set(q.attributeName(), q);
          else this.positiveOptions.set(q.attributeName(), q);
        }),
        this.negativeOptions.forEach((q, K) => {
          if (this.positiveOptions.has(K)) this.dualOptions.add(K);
        }));
    }
    valueFromOption(A, q) {
      let K = q.attributeName();
      if (!this.dualOptions.has(K)) return !0;
      let Y = this.negativeOptions.get(K).presetArg,
        z = Y !== void 0 ? Y : !1;
      return q.negate === (z === A);
    }
  }
  function Q_z(A) {
    return A.split("-").reduce((q, K) => {
      return q + K[0].toUpperCase() + K.slice(1);
    });
  }
  function g_z(A) {
    let q,
      K,
      Y = A.split(/[ |,]+/);
    if (Y.length > 1 && !/^[[<]/.test(Y[1])) q = Y.shift();
    if (((K = Y.shift()), !q && /^-[^-]$/.test(K))) ((q = K), (K = void 0));
    return { shortFlag: q, longFlag: K };
  }
  U_z.Option = vDq;
  U_z.DualOptions = EDq;
