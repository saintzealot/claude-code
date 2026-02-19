// Module: c5 (cjs)
// Dependencies: [vu1, FXA]
// Exports: or, and, not, CodeGen, operators, varKinds, ValueScopeName, ValueScope, Scope, Name, regexpCode, stringify, getProperty, nil, strConcat, str, _
// Lines: 230157-230843 in cli.formatted.js
// ---

  Object.defineProperty(rV, "__esModule", { value: !0 });
  rV.or =
    rV.and =
    rV.not =
    rV.CodeGen =
    rV.operators =
    rV.varKinds =
    rV.ValueScopeName =
    rV.ValueScope =
    rV.Scope =
    rV.Name =
    rV.regexpCode =
    rV.stringify =
    rV.getProperty =
    rV.nil =
    rV.strConcat =
    rV.str =
    rV._ =
      void 0;
  var GY = vu1(),
    Th = FXA(),
    Uo = vu1();
  Object.defineProperty(rV, "_", {
    enumerable: !0,
    get: function () {
      return Uo._;
    },
  });
  Object.defineProperty(rV, "str", {
    enumerable: !0,
    get: function () {
      return Uo.str;
    },
  });
  Object.defineProperty(rV, "strConcat", {
    enumerable: !0,
    get: function () {
      return Uo.strConcat;
    },
  });
  Object.defineProperty(rV, "nil", {
    enumerable: !0,
    get: function () {
      return Uo.nil;
    },
  });
  Object.defineProperty(rV, "getProperty", {
    enumerable: !0,
    get: function () {
      return Uo.getProperty;
    },
  });
  Object.defineProperty(rV, "stringify", {
    enumerable: !0,
    get: function () {
      return Uo.stringify;
    },
  });
  Object.defineProperty(rV, "regexpCode", {
    enumerable: !0,
    get: function () {
      return Uo.regexpCode;
    },
  });
  Object.defineProperty(rV, "Name", {
    enumerable: !0,
    get: function () {
      return Uo.Name;
    },
  });
  var KO6 = FXA();
  Object.defineProperty(rV, "Scope", {
    enumerable: !0,
    get: function () {
      return KO6.Scope;
    },
  });
  Object.defineProperty(rV, "ValueScope", {
    enumerable: !0,
    get: function () {
      return KO6.ValueScope;
    },
  });
  Object.defineProperty(rV, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return KO6.ValueScopeName;
    },
  });
  Object.defineProperty(rV, "varKinds", {
    enumerable: !0,
    get: function () {
      return KO6.varKinds;
    },
  });
  rV.operators = {
    GT: new GY._Code(">"),
    GTE: new GY._Code(">="),
    LT: new GY._Code("<"),
    LTE: new GY._Code("<="),
    EQ: new GY._Code("==="),
    NEQ: new GY._Code("!=="),
    NOT: new GY._Code("!"),
    OR: new GY._Code("||"),
    AND: new GY._Code("&&"),
    ADD: new GY._Code("+"),
  };
  class po {
    optimizeNodes() {
      return this;
    }
    optimizeNames(A, q) {
      return this;
    }
  }
  class vh7 extends po {
    constructor(A, q, K) {
      super();
      ((this.varKind = A), (this.name = q), (this.rhs = K));
    }
    render({ es5: A, _n: q }) {
      let K = A ? Th.varKinds.var : this.varKind,
        Y = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${K} ${this.name}${Y};` + q;
    }
    optimizeNames(A, q) {
      if (!A[this.name.str]) return;
      if (this.rhs) this.rhs = k01(this.rhs, A, q);
      return this;
    }
    get names() {
      return this.rhs instanceof GY._CodeOrName ? this.rhs.names : {};
    }
  }
  class UXA extends po {
    constructor(A, q, K) {
      super();
      ((this.lhs = A), (this.rhs = q), (this.sideEffects = K));
    }
    render({ _n: A }) {
      return `${this.lhs} = ${this.rhs};` + A;
    }
    optimizeNames(A, q) {
      if (this.lhs instanceof GY.Name && !A[this.lhs.str] && !this.sideEffects)
        return;
      return ((this.rhs = k01(this.rhs, A, q)), this);
    }
    get names() {
      let A = this.lhs instanceof GY.Name ? {} : { ...this.lhs.names };
      return qO6(A, this.rhs);
    }
  }
  class Eh7 extends UXA {
    constructor(A, q, K, Y) {
      super(A, K, Y);
      this.op = q;
    }
    render({ _n: A }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + A;
    }
  }
  class kh7 extends po {
    constructor(A) {
      super();
      ((this.label = A), (this.names = {}));
    }
    render({ _n: A }) {
      return `${this.label}:` + A;
    }
  }
  class Lh7 extends po {
    constructor(A) {
      super();
      ((this.label = A), (this.names = {}));
    }
    render({ _n: A }) {
      return `break${this.label ? ` ${this.label}` : ""};` + A;
    }
  }
  class Rh7 extends po {
    constructor(A) {
      super();
      this.error = A;
    }
    render({ _n: A }) {
      return `throw ${this.error};` + A;
    }
    get names() {
      return this.error.names;
    }
  }
  class yh7 extends po {
    constructor(A) {
      super();
      this.code = A;
    }
    render({ _n: A }) {
      return `${this.code};` + A;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(A, q) {
      return ((this.code = k01(this.code, A, q)), this);
    }
    get names() {
      return this.code instanceof GY._CodeOrName ? this.code.names : {};
    }
  }
  class YO6 extends po {
    constructor(A = []) {
      super();
      this.nodes = A;
    }
    render(A) {
      return this.nodes.reduce((q, K) => q + K.render(A), "");
    }
    optimizeNodes() {
      let { nodes: A } = this,
        q = A.length;
      while (q--) {
        let K = A[q].optimizeNodes();
        if (Array.isArray(K)) A.splice(q, 1, ...K);
        else if (K) A[q] = K;
        else A.splice(q, 1);
      }
      return A.length > 0 ? this : void 0;
    }
    optimizeNames(A, q) {
      let { nodes: K } = this,
        Y = K.length;
      while (Y--) {
        let z = K[Y];
        if (z.optimizeNames(A, q)) continue;
        (oO9(A, z.names), K.splice(Y, 1));
      }
      return K.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((A, q) => ZK1(A, q.names), {});
    }
  }
  class co extends YO6 {
    render(A) {
      return "{" + A._n + super.render(A) + "}" + A._n;
    }
  }
  class Ch7 extends YO6 {}
  class Eu1 extends co {}
  Eu1.kind = "else";
  class Up extends co {
    constructor(A, q) {
      super(q);
      this.condition = A;
    }
    render(A) {
      let q = `if(${this.condition})` + super.render(A);
      if (this.else) q += "else " + this.else.render(A);
      return q;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let A = this.condition;
      if (A === !0) return this.nodes;
      let q = this.else;
      if (q) {
        let K = q.optimizeNodes();
        q = this.else = Array.isArray(K) ? new Eu1(K) : K;
      }
      if (q) {
        if (A === !1) return q instanceof Up ? q : q.nodes;
        if (this.nodes.length) return this;
        return new Up(bh7(A), q instanceof Up ? [q] : q.nodes);
      }
      if (A === !1 || !this.nodes.length) return;
      return this;
    }
    optimizeNames(A, q) {
      var K;
      if (
        ((this.else =
          (K = this.else) === null || K === void 0
            ? void 0
            : K.optimizeNames(A, q)),
        !(super.optimizeNames(A, q) || this.else))
      )
        return;
      return ((this.condition = k01(this.condition, A, q)), this);
    }
    get names() {
      let A = super.names;
      if ((qO6(A, this.condition), this.else)) ZK1(A, this.else.names);
      return A;
    }
  }
  Up.kind = "if";
  class E01 extends co {}
  E01.kind = "for";
  class Sh7 extends E01 {
    constructor(A) {
      super();
      this.iteration = A;
    }
    render(A) {
      return `for(${this.iteration})` + super.render(A);
    }
    optimizeNames(A, q) {
      if (!super.optimizeNames(A, q)) return;
      return ((this.iteration = k01(this.iteration, A, q)), this);
    }
    get names() {
      return ZK1(super.names, this.iteration.names);
    }
  }
  class hh7 extends E01 {
    constructor(A, q, K, Y) {
      super();
      ((this.varKind = A), (this.name = q), (this.from = K), (this.to = Y));
    }
    render(A) {
      let q = A.es5 ? Th.varKinds.var : this.varKind,
        { name: K, from: Y, to: z } = this;
      return `for(${q} ${K}=${Y}; ${K}<${z}; ${K}++)` + super.render(A);
    }
    get names() {
      let A = qO6(super.names, this.from);
      return qO6(A, this.to);
    }
  }
  class QXA extends E01 {
    constructor(A, q, K, Y) {
      super();
      ((this.loop = A),
        (this.varKind = q),
        (this.name = K),
        (this.iterable = Y));
    }
    render(A) {
      return (
        `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
        super.render(A)
      );
    }
    optimizeNames(A, q) {
      if (!super.optimizeNames(A, q)) return;
      return ((this.iterable = k01(this.iterable, A, q)), this);
    }
    get names() {
      return ZK1(super.names, this.iterable.names);
    }
  }
  class s$6 extends co {
    constructor(A, q, K) {
      super();
      ((this.name = A), (this.args = q), (this.async = K));
    }
    render(A) {
      return (
        `${this.async ? "async " : ""}function ${this.name}(${this.args})` +
        super.render(A)
      );
    }
  }
  s$6.kind = "func";
  class t$6 extends YO6 {
    render(A) {
      return "return " + super.render(A);
    }
  }
  t$6.kind = "return";
  class Ih7 extends co {
    render(A) {
      let q = "try" + super.render(A);
      if (this.catch) q += this.catch.render(A);
      if (this.finally) q += this.finally.render(A);
      return q;
    }
    optimizeNodes() {
      var A, q;
      return (
        super.optimizeNodes(),
        (A = this.catch) === null || A === void 0 || A.optimizeNodes(),
        (q = this.finally) === null || q === void 0 || q.optimizeNodes(),
        this
      );
    }
    optimizeNames(A, q) {
      var K, Y;
      return (
        super.optimizeNames(A, q),
        (K = this.catch) === null || K === void 0 || K.optimizeNames(A, q),
        (Y = this.finally) === null || Y === void 0 || Y.optimizeNames(A, q),
        this
      );
    }
    get names() {
      let A = super.names;
      if (this.catch) ZK1(A, this.catch.names);
      if (this.finally) ZK1(A, this.finally.names);
      return A;
    }
  }
  class e$6 extends co {
    constructor(A) {
      super();
      this.error = A;
    }
    render(A) {
      return `catch(${this.error})` + super.render(A);
    }
  }
  e$6.kind = "catch";
  class AO6 extends co {
    render(A) {
      return "finally" + super.render(A);
    }
  }
  AO6.kind = "finally";
  class xh7 {
    constructor(A, q = {}) {
      ((this._values = {}),
        (this._blockStarts = []),
        (this._constants = {}),
        (this.opts = {
          ...q,
          _n: q.lines
            ? `
`
            : "",
        }),
        (this._extScope = A),
        (this._scope = new Th.Scope({ parent: A })),
        (this._nodes = [new Ch7()]));
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(A) {
      return this._scope.name(A);
    }
    scopeName(A) {
      return this._extScope.name(A);
    }
    scopeValue(A, q) {
      let K = this._extScope.value(A, q);
      return (
        (this._values[K.prefix] || (this._values[K.prefix] = new Set())).add(K),
        K
      );
    }
    getScopeValue(A, q) {
      return this._extScope.getValue(A, q);
    }
    scopeRefs(A) {
      return this._extScope.scopeRefs(A, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(A, q, K, Y) {
      let z = this._scope.toName(q);
      if (K !== void 0 && Y) this._constants[z.str] = K;
      return (this._leafNode(new vh7(A, z, K)), z);
    }
    const(A, q, K) {
      return this._def(Th.varKinds.const, A, q, K);
    }
    let(A, q, K) {
      return this._def(Th.varKinds.let, A, q, K);
    }
    var(A, q, K) {
      return this._def(Th.varKinds.var, A, q, K);
    }
    assign(A, q, K) {
      return this._leafNode(new UXA(A, q, K));
    }
    add(A, q) {
      return this._leafNode(new Eh7(A, rV.operators.ADD, q));
    }
    code(A) {
      if (typeof A == "function") A();
      else if (A !== GY.nil) this._leafNode(new yh7(A));
      return this;
    }
    object(...A) {
      let q = ["{"];
      for (let [K, Y] of A) {
        if (q.length > 1) q.push(",");
        if ((q.push(K), K !== Y || this.opts.es5))
          (q.push(":"), (0, GY.addCodeArg)(q, Y));
      }
      return (q.push("}"), new GY._Code(q));
    }
    if(A, q, K) {
      if ((this._blockNode(new Up(A)), q && K))
        this.code(q).else().code(K).endIf();
      else if (q) this.code(q).endIf();
      else if (K) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(A) {
      return this._elseNode(new Up(A));
    }
    else() {
      return this._elseNode(new Eu1());
    }
    endIf() {
      return this._endBlockNode(Up, Eu1);
    }
    _for(A, q) {
      if ((this._blockNode(A), q)) this.code(q).endFor();
      return this;
    }
    for(A, q) {
      return this._for(new Sh7(A), q);
    }
    forRange(
      A,
      q,
      K,
      Y,
      z = this.opts.es5 ? Th.varKinds.var : Th.varKinds.let,
    ) {
      let w = this._scope.toName(A);
      return this._for(new hh7(z, w, q, K), () => Y(w));
    }
    forOf(A, q, K, Y = Th.varKinds.const) {
      let z = this._scope.toName(A);
      if (this.opts.es5) {
        let w = q instanceof GY.Name ? q : this.var("_arr", q);
        return this.forRange("_i", 0, GY._`${w}.length`, (H) => {
          (this.var(z, GY._`${w}[${H}]`), K(z));
        });
      }
      return this._for(new QXA("of", Y, z, q), () => K(z));
    }
    forIn(A, q, K, Y = this.opts.es5 ? Th.varKinds.var : Th.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(A, GY._`Object.keys(${q})`, K);
      let z = this._scope.toName(A);
      return this._for(new QXA("in", Y, z, q), () => K(z));
    }
    endFor() {
      return this._endBlockNode(E01);
    }
    label(A) {
      return this._leafNode(new kh7(A));
    }
    break(A) {
      return this._leafNode(new Lh7(A));
    }
    return(A) {
      let q = new t$6();
      if ((this._blockNode(q), this.code(A), q.nodes.length !== 1))
        throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(t$6);
    }
    try(A, q, K) {
      if (!q && !K) throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new Ih7();
      if ((this._blockNode(Y), this.code(A), q)) {
        let z = this.name("e");
        ((this._currNode = Y.catch = new e$6(z)), q(z));
      }
      if (K) ((this._currNode = Y.finally = new AO6()), this.code(K));
      return this._endBlockNode(e$6, AO6);
    }
    throw(A) {
      return this._leafNode(new Rh7(A));
    }
    block(A, q) {
      if ((this._blockStarts.push(this._nodes.length), A))
        this.code(A).endBlock(q);
      return this;
    }
    endBlock(A) {
      let q = this._blockStarts.pop();
      if (q === void 0) throw Error("CodeGen: not in self-balancing block");
      let K = this._nodes.length - q;
      if (K < 0 || (A !== void 0 && K !== A))
        throw Error(`CodeGen: wrong number of nodes: ${K} vs ${A} expected`);
      return ((this._nodes.length = q), this);
    }
    func(A, q = GY.nil, K, Y) {
      if ((this._blockNode(new s$6(A, q, K)), Y)) this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(s$6);
    }
    optimize(A = 1) {
      while (A-- > 0)
        (this._root.optimizeNodes(),
          this._root.optimizeNames(this._root.names, this._constants));
    }
    _leafNode(A) {
      return (this._currNode.nodes.push(A), this);
    }
    _blockNode(A) {
      (this._currNode.nodes.push(A), this._nodes.push(A));
    }
    _endBlockNode(A, q) {
      let K = this._currNode;
      if (K instanceof A || (q && K instanceof q))
        return (this._nodes.pop(), this);
      throw Error(
        `CodeGen: not in block "${q ? `${A.kind}/${q.kind}` : A.kind}"`,
      );
    }
    _elseNode(A) {
      let q = this._currNode;
      if (!(q instanceof Up)) throw Error('CodeGen: "else" without "if"');
      return ((this._currNode = q.else = A), this);
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let A = this._nodes;
      return A[A.length - 1];
    }
    set _currNode(A) {
      let q = this._nodes;
      q[q.length - 1] = A;
    }
  }
  rV.CodeGen = xh7;
  function ZK1(A, q) {
    for (let K in q) A[K] = (A[K] || 0) + (q[K] || 0);
    return A;
  }
  function qO6(A, q) {
    return q instanceof GY._CodeOrName ? ZK1(A, q.names) : A;
  }
  function k01(A, q, K) {
    if (A instanceof GY.Name) return Y(A);
    if (!z(A)) return A;
    return new GY._Code(
      A._items.reduce((w, H) => {
        if (H instanceof GY.Name) H = Y(H);
        if (H instanceof GY._Code) w.push(...H._items);
        else w.push(H);
        return w;
      }, []),
    );
    function Y(w) {
      let H = K[w.str];
      if (H === void 0 || q[w.str] !== 1) return w;
      return (delete q[w.str], H);
    }
    function z(w) {
      return (
        w instanceof GY._Code &&
        w._items.some(
          (H) => H instanceof GY.Name && q[H.str] === 1 && K[H.str] !== void 0,
        )
      );
    }
  }
  function oO9(A, q) {
    for (let K in q) A[K] = (A[K] || 0) - (q[K] || 0);
  }
  function bh7(A) {
    return typeof A == "boolean" || typeof A == "number" || A === null
      ? !A
      : GY._`!${gXA(A)}`;
  }
  rV.not = bh7;
  var sO9 = uh7(rV.operators.AND);
  function tO9(...A) {
    return A.reduce(sO9);
  }
  rV.and = tO9;
  var eO9 = uh7(rV.operators.OR);
  function A_9(...A) {
    return A.reduce(eO9);
  }
  rV.or = A_9;
  function uh7(A) {
    return (q, K) =>
      q === GY.nil ? K : K === GY.nil ? q : GY._`${gXA(q)} ${A} ${gXA(K)}`;
  }
  function gXA(A) {
    return A instanceof GY.Name ? A : GY._`(${A})`;
  }
