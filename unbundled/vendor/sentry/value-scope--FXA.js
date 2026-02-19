// Module: FXA (cjs)
// Dependencies: [vu1]
// Exports: ValueScope, ValueScopeName, Scope, varKinds, UsedValueState
// Lines: 230015-230156 in cli.formatted.js
// ---

  Object.defineProperty(Nh7, "__esModule", { value: !0 });
  Nh7.ValueScope =
    Nh7.ValueScopeName =
    Nh7.Scope =
    Nh7.varKinds =
    Nh7.UsedValueState =
      void 0;
  var nV = vu1();
  class fh7 extends Error {
    constructor(A) {
      super(`CodeGen: "code" for ${A} not defined`);
      this.value = A.value;
    }
  }
  var o$6;
  (function (A) {
    ((A[(A.Started = 0)] = "Started"), (A[(A.Completed = 1)] = "Completed"));
  })(o$6 || (Nh7.UsedValueState = o$6 = {}));
  Nh7.varKinds = {
    const: new nV.Name("const"),
    let: new nV.Name("let"),
    var: new nV.Name("var"),
  };
  class BXA {
    constructor({ prefixes: A, parent: q } = {}) {
      ((this._names = {}), (this._prefixes = A), (this._parent = q));
    }
    toName(A) {
      return A instanceof nV.Name ? A : this.name(A);
    }
    name(A) {
      return new nV.Name(this._newName(A));
    }
    _newName(A) {
      let q = this._names[A] || this._nameGroup(A);
      return `${A}${q.index++}`;
    }
    _nameGroup(A) {
      var q, K;
      if (
        ((K =
          (q = this._parent) === null || q === void 0
            ? void 0
            : q._prefixes) === null || K === void 0
          ? void 0
          : K.has(A)) ||
        (this._prefixes && !this._prefixes.has(A))
      )
        throw Error(`CodeGen: prefix "${A}" is not allowed in this scope`);
      return (this._names[A] = { prefix: A, index: 0 });
    }
  }
  Nh7.Scope = BXA;
  class mXA extends nV.Name {
    constructor(A, q) {
      super(q);
      this.prefix = A;
    }
    setValue(A, { property: q, itemIndex: K }) {
      ((this.value = A), (this.scopePath = nV._`.${new nV.Name(q)}[${K}]`));
    }
  }
  Nh7.ValueScopeName = mXA;
  var iO9 = nV._`\n`;
  class Vh7 extends BXA {
    constructor(A) {
      super(A);
      ((this._values = {}),
        (this._scope = A.scope),
        (this.opts = { ...A, _n: A.lines ? iO9 : nV.nil }));
    }
    get() {
      return this._scope;
    }
    name(A) {
      return new mXA(A, this._newName(A));
    }
    value(A, q) {
      var K;
      if (q.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let Y = this.toName(A),
        { prefix: z } = Y,
        w = (K = q.key) !== null && K !== void 0 ? K : q.ref,
        H = this._values[z];
      if (H) {
        let _ = H.get(w);
        if (_) return _;
      } else H = this._values[z] = new Map();
      H.set(w, Y);
      let $ = this._scope[z] || (this._scope[z] = []),
        O = $.length;
      return (($[O] = q.ref), Y.setValue(q, { property: z, itemIndex: O }), Y);
    }
    getValue(A, q) {
      let K = this._values[A];
      if (!K) return;
      return K.get(q);
    }
    scopeRefs(A, q = this._values) {
      return this._reduceValues(q, (K) => {
        if (K.scopePath === void 0)
          throw Error(`CodeGen: name "${K}" has no value`);
        return nV._`${A}${K.scopePath}`;
      });
    }
    scopeCode(A = this._values, q, K) {
      return this._reduceValues(
        A,
        (Y) => {
          if (Y.value === void 0)
            throw Error(`CodeGen: name "${Y}" has no value`);
          return Y.value.code;
        },
        q,
        K,
      );
    }
    _reduceValues(A, q, K = {}, Y) {
      let z = nV.nil;
      for (let w in A) {
        let H = A[w];
        if (!H) continue;
        let $ = (K[w] = K[w] || new Map());
        H.forEach((O) => {
          if ($.has(O)) return;
          $.set(O, o$6.Started);
          let _ = q(O);
          if (_) {
            let J = this.opts.es5 ? Nh7.varKinds.var : Nh7.varKinds.const;
            z = nV._`${z}${J} ${O} = ${_};${this.opts._n}`;
          } else if ((_ = Y === null || Y === void 0 ? void 0 : Y(O)))
            z = nV._`${z}${_}${this.opts._n}`;
          else throw new fh7(O);
          $.set(O, o$6.Completed);
        });
      }
      return z;
    }
  }
  Nh7.ValueScope = Vh7;
