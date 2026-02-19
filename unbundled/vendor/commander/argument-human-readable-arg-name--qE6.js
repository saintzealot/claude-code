// Module: qE6 (cjs)
// Dependencies: [ql1]
// Exports: Argument, humanReadableArgName
// Lines: 528258-528326 in cli.formatted.js
// ---

  var { InvalidArgumentError: S_z } = ql1();
  class NDq {
    constructor(A, q) {
      switch (
        ((this.description = q || ""),
        (this.variadic = !1),
        (this.parseArg = void 0),
        (this.defaultValue = void 0),
        (this.defaultValueDescription = void 0),
        (this.argChoices = void 0),
        A[0])
      ) {
        case "<":
          ((this.required = !0), (this._name = A.slice(1, -1)));
          break;
        case "[":
          ((this.required = !1), (this._name = A.slice(1, -1)));
          break;
        default:
          ((this.required = !0), (this._name = A));
          break;
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...")
        ((this.variadic = !0), (this._name = this._name.slice(0, -3)));
    }
    name() {
      return this._name;
    }
    _concatValue(A, q) {
      if (q === this.defaultValue || !Array.isArray(q)) return [A];
      return q.concat(A);
    }
    default(A, q) {
      return (
        (this.defaultValue = A),
        (this.defaultValueDescription = q),
        this
      );
    }
    argParser(A) {
      return ((this.parseArg = A), this);
    }
    choices(A) {
      return (
        (this.argChoices = A.slice()),
        (this.parseArg = (q, K) => {
          if (!this.argChoices.includes(q))
            throw new S_z(`Allowed choices are ${this.argChoices.join(", ")}.`);
          if (this.variadic) return this._concatValue(q, K);
          return q;
        }),
        this
      );
    }
    argRequired() {
      return ((this.required = !0), this);
    }
    argOptional() {
      return ((this.required = !1), this);
    }
  }
  function h_z(A) {
    let q = A.name() + (A.variadic === !0 ? "..." : "");
    return A.required ? "<" + q + ">" : "[" + q + "]";
  }
  I_z.Argument = NDq;
  I_z.humanReadableArgName = h_z;
