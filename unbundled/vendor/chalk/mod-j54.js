// Module: j54 (cjs)
// Dependencies: [r34, s34, e34, z54]
// Lines: 316551-316695 in cli.formatted.js
// ---

  var fF1 = r34(),
    { stdout: rZA, stderr: aZA } = s34(),
    { stringReplaceAll: pi9, stringEncaseCRLFWithFirstIndex: di9 } = e34(),
    { isArray: HD6 } = Array,
    H54 = ["ansi", "ansi", "ansi256", "ansi16m"],
    vP1 = Object.create(null),
    ci9 = (A, q = {}) => {
      if (
        q.level &&
        !(Number.isInteger(q.level) && q.level >= 0 && q.level <= 3)
      )
        throw Error("The `level` option should be an integer from 0 to 3");
      let K = rZA ? rZA.level : 0;
      A.level = q.level === void 0 ? K : q.level;
    };
  class $54 {
    constructor(A) {
      return O54(A);
    }
  }
  var O54 = (A) => {
    let q = {};
    return (
      ci9(q, A),
      (q.template = (...K) => J54(q.template, ...K)),
      Object.setPrototypeOf(q, $D6.prototype),
      Object.setPrototypeOf(q.template, q),
      (q.template.constructor = () => {
        throw Error(
          "`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.",
        );
      }),
      (q.template.Instance = $54),
      q.template
    );
  };
  function $D6(A) {
    return O54(A);
  }
  for (let [A, q] of Object.entries(fF1))
    vP1[A] = {
      get() {
        let K = OD6(this, oZA(q.open, q.close, this._styler), this._isEmpty);
        return (Object.defineProperty(this, A, { value: K }), K);
      },
    };
  vP1.visible = {
    get() {
      let A = OD6(this, this._styler, !0);
      return (Object.defineProperty(this, "visible", { value: A }), A);
    },
  };
  var _54 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let A of _54)
    vP1[A] = {
      get() {
        let { level: q } = this;
        return function (...K) {
          let Y = oZA(
            fF1.color[H54[q]][A](...K),
            fF1.color.close,
            this._styler,
          );
          return OD6(this, Y, this._isEmpty);
        };
      },
    };
  for (let A of _54) {
    let q = "bg" + A[0].toUpperCase() + A.slice(1);
    vP1[q] = {
      get() {
        let { level: K } = this;
        return function (...Y) {
          let z = oZA(
            fF1.bgColor[H54[K]][A](...Y),
            fF1.bgColor.close,
            this._styler,
          );
          return OD6(this, z, this._isEmpty);
        };
      },
    };
  }
  var li9 = Object.defineProperties(() => {}, {
      ...vP1,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(A) {
          this._generator.level = A;
        },
      },
    }),
    oZA = (A, q, K) => {
      let Y, z;
      if (K === void 0) ((Y = A), (z = q));
      else ((Y = K.openAll + A), (z = q + K.closeAll));
      return { open: A, close: q, openAll: Y, closeAll: z, parent: K };
    },
    OD6 = (A, q, K) => {
      let Y = (...z) => {
        if (HD6(z[0]) && HD6(z[0].raw)) return w54(Y, J54(Y, ...z));
        return w54(Y, z.length === 1 ? "" + z[0] : z.join(" "));
      };
      return (
        Object.setPrototypeOf(Y, li9),
        (Y._generator = A),
        (Y._styler = q),
        (Y._isEmpty = K),
        Y
      );
    },
    w54 = (A, q) => {
      if (A.level <= 0 || !q) return A._isEmpty ? "" : q;
      let K = A._styler;
      if (K === void 0) return q;
      let { openAll: Y, closeAll: z } = K;
      if (q.indexOf("\x1B") !== -1)
        while (K !== void 0) ((q = pi9(q, K.close, K.open)), (K = K.parent));
      let w = q.indexOf(`
`);
      if (w !== -1) q = di9(q, z, Y, w);
      return Y + q + z;
    },
    nZA,
    J54 = (A, ...q) => {
      let [K] = q;
      if (!HD6(K) || !HD6(K.raw)) return q.join(" ");
      let Y = q.slice(1),
        z = [K.raw[0]];
      for (let w = 1; w < K.length; w++)
        z.push(String(Y[w - 1]).replace(/[{}\\]/g, "\\$&"), String(K.raw[w]));
      if (nZA === void 0) nZA = z54();
      return nZA(A, z.join(""));
    };
  Object.defineProperties($D6.prototype, vP1);
  var _D6 = $D6();
  _D6.supportsColor = rZA;
  _D6.stderr = $D6({ level: aZA ? aZA.level : 0 });
  _D6.stderr.supportsColor = aZA;
  X54.exports = _D6;
