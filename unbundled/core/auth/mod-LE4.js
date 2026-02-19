// Module: LE4 (cjs)
// Dependencies: [_M6, JM6, XM6, PM6, fM6, T0, k51, Zt, E51, ft, TI, gTA]
// Lines: 351930-352513 in cli.formatted.js
// ---

  kE4.exports = pd;
  pd.filename = null;
  pd.defaults = { keepCase: !1 };
  var YDY = gTA(),
    NE4 = fM6(),
    TE4 = PM6(),
    vE4 = Zt(),
    zDY = _M6(),
    EE4 = E51(),
    wDY = TI(),
    HDY = XM6(),
    $DY = JM6(),
    ODY = ft(),
    _DY = k51(),
    UTA = T0(),
    JDY = /^[1-9][0-9]*$/,
    XDY = /^-?[1-9][0-9]*$/,
    jDY = /^0[x][0-9a-fA-F]+$/,
    DDY = /^-?0[x][0-9a-fA-F]+$/,
    MDY = /^0[0-7]+$/,
    PDY = /^-?0[0-7]+$/,
    WDY = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    Im = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    xm = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  function pd(A, q, K) {
    if (!(q instanceof NE4)) ((K = q), (q = new NE4()));
    if (!K) K = pd.defaults;
    var Y = K.preferTrailingComment || !1,
      z = YDY(A, K.alternateCommentMode || !1),
      w = z.next,
      H = z.push,
      $ = z.peek,
      O = z.skip,
      _ = z.cmnt,
      J = !0,
      X,
      j,
      D,
      M = "proto2",
      P = q,
      W = [],
      G = {},
      V = K.keepCase
        ? function (w1) {
            return w1;
          }
        : UTA.camelCase;
    function Z() {
      W.forEach((w1) => {
        ((w1._edition = M),
          Object.keys(G).forEach((O1) => {
            if (w1.getOption(O1) !== void 0) return;
            w1.setOption(O1, G[O1], !0);
          }));
      });
    }
    function N(w1, O1, $1) {
      var D1 = pd.filename;
      if (!$1) pd.filename = null;
      return Error(
        "illegal " +
          (O1 || "token") +
          " '" +
          w1 +
          "' (" +
          (D1 ? D1 + ", " : "") +
          "line " +
          z.line +
          ")",
      );
    }
    function T() {
      var w1 = [],
        O1;
      do {
        if ((O1 = w()) !== '"' && O1 !== "'") throw N(O1);
        (w1.push(w()), O(O1), (O1 = $()));
      } while (O1 === '"' || O1 === "'");
      return w1.join("");
    }
    function k(w1) {
      var O1 = w();
      switch (O1) {
        case "'":
        case '"':
          return (H(O1), T());
        case "true":
        case "TRUE":
          return !0;
        case "false":
        case "FALSE":
          return !1;
      }
      try {
        return B(O1, !0);
      } catch ($1) {
        if (w1 && xm.test(O1)) return O1;
        throw N(O1, "value");
      }
    }
    function y(w1, O1) {
      var $1, D1;
      do
        if (O1 && (($1 = $()) === '"' || $1 === "'")) {
          var X1 = T();
          if ((w1.push(X1), M >= 2023)) throw N(X1, "id");
        } else
          try {
            w1.push([(D1 = S(w())), O("to", !0) ? S(w()) : D1]);
          } catch (x1) {
            if (O1 && xm.test($1) && M >= 2023) w1.push($1);
            else throw x1;
          }
      while (O(",", !0));
      var S1 = { options: void 0 };
      ((S1.setOption = function (x1, M1) {
        if (this.options === void 0) this.options = {};
        this.options[x1] = M1;
      }),
        p(
          S1,
          function (M1) {
            if (M1 === "option") (Y1(S1, M1), O(";"));
            else throw N(M1);
          },
          function () {
            v1(S1);
          },
        ));
    }
    function B(w1, O1) {
      var $1 = 1;
      if (w1.charAt(0) === "-") (($1 = -1), (w1 = w1.substring(1)));
      switch (w1) {
        case "inf":
        case "INF":
        case "Inf":
          return $1 * (1 / 0);
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (JDY.test(w1)) return $1 * parseInt(w1, 10);
      if (jDY.test(w1)) return $1 * parseInt(w1, 16);
      if (MDY.test(w1)) return $1 * parseInt(w1, 8);
      if (WDY.test(w1)) return $1 * parseFloat(w1);
      throw N(w1, "number", O1);
    }
    function S(w1, O1) {
      switch (w1) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!O1 && w1.charAt(0) === "-") throw N(w1, "id");
      if (XDY.test(w1)) return parseInt(w1, 10);
      if (DDY.test(w1)) return parseInt(w1, 16);
      if (PDY.test(w1)) return parseInt(w1, 8);
      throw N(w1, "id");
    }
    function m() {
      if (X !== void 0) throw N("package");
      if (((X = w()), !xm.test(X))) throw N(X, "name");
      ((P = P.define(X)), O(";"));
    }
    function u() {
      var w1 = $(),
        O1;
      switch (w1) {
        case "weak":
          ((O1 = D || (D = [])), w());
          break;
        case "public":
          w();
        default:
          O1 = j || (j = []);
          break;
      }
      ((w1 = T()), O(";"), O1.push(w1));
    }
    function U() {
      if ((O("="), (M = T()), M < 2023)) throw N(M, "syntax");
      O(";");
    }
    function g() {
      if ((O("="), (M = T()), !["2023"].includes(M))) throw N(M, "edition");
      O(";");
    }
    function b(w1, O1) {
      switch (O1) {
        case "option":
          return (Y1(w1, O1), O(";"), !0);
        case "message":
          return (n(w1, O1), !0);
        case "enum":
          return (Z1(w1, O1), !0);
        case "service":
          return (L1(w1, O1), !0);
        case "extend":
          return (t(w1, O1), !0);
      }
      return !1;
    }
    function p(w1, O1, $1) {
      var D1 = z.line;
      if (w1) {
        if (typeof w1.comment !== "string") w1.comment = _();
        w1.filename = pd.filename;
      }
      if (O("{", !0)) {
        var X1;
        while ((X1 = w()) !== "}") O1(X1);
        O(";", !0);
      } else {
        if ($1) $1();
        if ((O(";"), w1 && (typeof w1.comment !== "string" || Y)))
          w1.comment = _(D1) || w1.comment;
      }
    }
    function n(w1, O1) {
      if (!Im.test((O1 = w()))) throw N(O1, "type name");
      var $1 = new TE4(O1);
      if (
        (p($1, function (X1) {
          if (b($1, X1)) return;
          switch (X1) {
            case "map":
              J1($1, X1);
              break;
            case "required":
              if (M !== "proto2") throw N(X1);
            case "repeated":
              r($1, X1);
              break;
            case "optional":
              if (M === "proto3") r($1, "proto3_optional");
              else if (M !== "proto2") throw N(X1);
              else r($1, "optional");
              break;
            case "oneof":
              V1($1, X1);
              break;
            case "extensions":
              y($1.extensions || ($1.extensions = []));
              break;
            case "reserved":
              y($1.reserved || ($1.reserved = []), !0);
              break;
            default:
              if (M === "proto2" || !xm.test(X1)) throw N(X1);
              (H(X1), r($1, "optional"));
              break;
          }
        }),
        w1.add($1),
        w1 === P)
      )
        W.push($1);
    }
    function r(w1, O1, $1) {
      var D1 = w();
      if (D1 === "group") {
        o(w1, O1);
        return;
      }
      while (D1.endsWith(".") || $().startsWith(".")) D1 += w();
      if (!xm.test(D1)) throw N(D1, "type");
      var X1 = w();
      if (!Im.test(X1)) throw N(X1, "name");
      ((X1 = V(X1)), O("="));
      var S1 = new vE4(X1, S(w()), D1, O1, $1);
      if (
        (p(
          S1,
          function (y1) {
            if (y1 === "option") (Y1(S1, y1), O(";"));
            else throw N(y1);
          },
          function () {
            v1(S1);
          },
        ),
        O1 === "proto3_optional")
      ) {
        var x1 = new EE4("_" + X1);
        (S1.setOption("proto3_optional", !0), x1.add(S1), w1.add(x1));
      } else w1.add(S1);
      if (w1 === P) W.push(S1);
    }
    function o(w1, O1) {
      if (M >= 2023) throw N("group");
      var $1 = w();
      if (!Im.test($1)) throw N($1, "name");
      var D1 = UTA.lcFirst($1);
      if ($1 === D1) $1 = UTA.ucFirst($1);
      O("=");
      var X1 = S(w()),
        S1 = new TE4($1);
      S1.group = !0;
      var x1 = new vE4(D1, X1, $1, O1);
      ((x1.filename = pd.filename),
        p(S1, function (y1) {
          switch (y1) {
            case "option":
              (Y1(S1, y1), O(";"));
              break;
            case "required":
            case "repeated":
              r(S1, y1);
              break;
            case "optional":
              if (M === "proto3") r(S1, "proto3_optional");
              else r(S1, "optional");
              break;
            case "message":
              n(S1, y1);
              break;
            case "enum":
              Z1(S1, y1);
              break;
            case "reserved":
              y(S1.reserved || (S1.reserved = []), !0);
              break;
            default:
              throw N(y1);
          }
        }),
        w1.add(S1).add(x1));
    }
    function J1(w1) {
      O("<");
      var O1 = w();
      if (_DY.mapKey[O1] === void 0) throw N(O1, "type");
      O(",");
      var $1 = w();
      if (!xm.test($1)) throw N($1, "type");
      O(">");
      var D1 = w();
      if (!Im.test(D1)) throw N(D1, "name");
      O("=");
      var X1 = new zDY(V(D1), S(w()), O1, $1);
      (p(
        X1,
        function (x1) {
          if (x1 === "option") (Y1(X1, x1), O(";"));
          else throw N(x1);
        },
        function () {
          v1(X1);
        },
      ),
        w1.add(X1));
    }
    function V1(w1, O1) {
      if (!Im.test((O1 = w()))) throw N(O1, "name");
      var $1 = new EE4(V(O1));
      (p($1, function (X1) {
        if (X1 === "option") (Y1($1, X1), O(";"));
        else (H(X1), r($1, "optional"));
      }),
        w1.add($1));
    }
    function Z1(w1, O1) {
      if (!Im.test((O1 = w()))) throw N(O1, "name");
      var $1 = new wDY(O1);
      if (
        (p($1, function (X1) {
          switch (X1) {
            case "option":
              (Y1($1, X1), O(";"));
              break;
            case "reserved":
              if (
                (y($1.reserved || ($1.reserved = []), !0),
                $1.reserved === void 0)
              )
                $1.reserved = [];
              break;
            default:
              N1($1, X1);
          }
        }),
        w1.add($1),
        w1 === P)
      )
        W.push($1);
    }
    function N1(w1, O1) {
      if (!Im.test(O1)) throw N(O1, "name");
      O("=");
      var $1 = S(w(), !0),
        D1 = { options: void 0 };
      ((D1.getOption = function (X1) {
        return this.options[X1];
      }),
        (D1.setOption = function (X1, S1) {
          ODY.prototype.setOption.call(D1, X1, S1);
        }),
        (D1.setParsedOption = function () {
          return;
        }),
        p(
          D1,
          function (S1) {
            if (S1 === "option") (Y1(D1, S1), O(";"));
            else throw N(S1);
          },
          function () {
            v1(D1);
          },
        ),
        w1.add(O1, $1, D1.comment, D1.parsedOptions || D1.options));
    }
    function Y1(w1, O1) {
      var $1,
        D1,
        X1 = !0;
      if (O1 === "option") O1 = w();
      while (O1 !== "=") {
        if (O1 === "(") {
          var S1 = w();
          (O(")"), (O1 = "(" + S1 + ")"));
        }
        if (X1) {
          if (((X1 = !1), O1.includes(".") && !O1.includes("("))) {
            var x1 = O1.split(".");
            (($1 = x1[0] + "."), (O1 = x1[1]));
            continue;
          }
          $1 = O1;
        } else D1 = D1 ? (D1 += O1) : O1;
        O1 = w();
      }
      var M1 = D1 ? $1.concat(D1) : $1,
        y1 = q1(w1, M1);
      ((D1 = D1 && D1[0] === "." ? D1.slice(1) : D1),
        ($1 = $1 && $1[$1.length - 1] === "." ? $1.slice(0, -1) : $1),
        P1(w1, $1, y1, D1));
    }
    function q1(w1, O1) {
      if (O("{", !0)) {
        var $1 = {};
        while (!O("}", !0)) {
          if (!Im.test((K1 = w()))) throw N(K1, "name");
          if (K1 === null) throw N(K1, "end of input");
          var D1,
            X1 = K1;
          if ((O(":", !0), $() === "{")) D1 = q1(w1, O1 + "." + K1);
          else if ($() === "[") {
            D1 = [];
            var S1;
            if (O("[", !0)) {
              do ((S1 = k(!0)), D1.push(S1));
              while (O(",", !0));
              if ((O("]"), typeof S1 < "u")) z1(w1, O1 + "." + K1, S1);
            }
          } else ((D1 = k(!0)), z1(w1, O1 + "." + K1, D1));
          var x1 = $1[X1];
          if (x1) D1 = [].concat(x1).concat(D1);
          (($1[X1] = D1), O(",", !0), O(";", !0));
        }
        return $1;
      }
      var M1 = k(!0);
      return (z1(w1, O1, M1), M1);
    }
    function z1(w1, O1, $1) {
      if (P === w1 && /^features\./.test(O1)) {
        G[O1] = $1;
        return;
      }
      if (w1.setOption) w1.setOption(O1, $1);
    }
    function P1(w1, O1, $1, D1) {
      if (w1.setParsedOption) w1.setParsedOption(O1, $1, D1);
    }
    function v1(w1) {
      if (O("[", !0)) {
        do Y1(w1, "option");
        while (O(",", !0));
        O("]");
      }
      return w1;
    }
    function L1(w1, O1) {
      if (!Im.test((O1 = w()))) throw N(O1, "service name");
      var $1 = new HDY(O1);
      if (
        (p($1, function (X1) {
          if (b($1, X1)) return;
          if (X1 === "rpc") a($1, X1);
          else throw N(X1);
        }),
        w1.add($1),
        w1 === P)
      )
        W.push($1);
    }
    function a(w1, O1) {
      var $1 = _(),
        D1 = O1;
      if (!Im.test((O1 = w()))) throw N(O1, "name");
      var X1 = O1,
        S1,
        x1,
        M1,
        y1;
      if ((O("("), O("stream", !0))) x1 = !0;
      if (!xm.test((O1 = w()))) throw N(O1);
      if (((S1 = O1), O(")"), O("returns"), O("("), O("stream", !0))) y1 = !0;
      if (!xm.test((O1 = w()))) throw N(O1);
      ((M1 = O1), O(")"));
      var _1 = new $DY(X1, D1, S1, M1, x1, y1);
      ((_1.comment = $1),
        p(_1, function (p1) {
          if (p1 === "option") (Y1(_1, p1), O(";"));
          else throw N(p1);
        }),
        w1.add(_1));
    }
    function t(w1, O1) {
      if (!xm.test((O1 = w()))) throw N(O1, "reference");
      var $1 = O1;
      p(null, function (X1) {
        switch (X1) {
          case "required":
          case "repeated":
            r(w1, X1, $1);
            break;
          case "optional":
            if (M === "proto3") r(w1, "proto3_optional", $1);
            else r(w1, "optional", $1);
            break;
          default:
            if (M === "proto2" || !xm.test(X1)) throw N(X1);
            (H(X1), r(w1, "optional", $1));
            break;
        }
      });
    }
    var K1;
    while ((K1 = w()) !== null)
      switch (K1) {
        case "package":
          if (!J) throw N(K1);
          m();
          break;
        case "import":
          if (!J) throw N(K1);
          u();
          break;
        case "syntax":
          if (!J) throw N(K1);
          U();
          break;
        case "edition":
          if (!J) throw N(K1);
          g();
          break;
        case "option":
          (Y1(P, K1), O(";", !0));
          break;
        default:
          if (b(P, K1)) {
            J = !1;
            continue;
          }
          throw N(K1);
      }
    return (
      Z(),
      (pd.filename = null),
      { package: X, imports: j, weakImports: D, root: q }
    );
  }
