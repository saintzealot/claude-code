// Module: g8A (cjs)
// Dependencies: [wq6]
// Exports: Lexer
// Lines: 120422-121029 in cli.formatted.js
// ---

  var oy1 = wq6();
  function MS(A) {
    switch (A) {
      case void 0:
      case " ":
      case `
`:
      case "\r":
      case "\t":
        return !0;
      default:
        return !1;
    }
  }
  var po8 = new Set("0123456789ABCDEFabcdef"),
    K05 = new Set(
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()",
    ),
    Hq6 = new Set(",[]{}"),
    Y05 = new Set(` ,[]{}
\r	`),
    Q8A = (A) => !A || Y05.has(A);
  class do8 {
    constructor() {
      ((this.atEnd = !1),
        (this.blockScalarIndent = -1),
        (this.blockScalarKeep = !1),
        (this.buffer = ""),
        (this.flowKey = !1),
        (this.flowLevel = 0),
        (this.indentNext = 0),
        (this.indentValue = 0),
        (this.lineEndPos = null),
        (this.next = null),
        (this.pos = 0));
    }
    *lex(A, q = !1) {
      if (A) {
        if (typeof A !== "string") throw TypeError("source is not a string");
        ((this.buffer = this.buffer ? this.buffer + A : A),
          (this.lineEndPos = null));
      }
      this.atEnd = !q;
      let K = this.next ?? "stream";
      while (K && (q || this.hasChars(1))) K = yield* this.parseNext(K);
    }
    atLineEnd() {
      let A = this.pos,
        q = this.buffer[A];
      while (q === " " || q === "\t") q = this.buffer[++A];
      if (
        !q ||
        q === "#" ||
        q ===
          `
`
      )
        return !0;
      if (q === "\r")
        return (
          this.buffer[A + 1] ===
          `
`
        );
      return !1;
    }
    charAt(A) {
      return this.buffer[this.pos + A];
    }
    continueScalar(A) {
      let q = this.buffer[A];
      if (this.indentNext > 0) {
        let K = 0;
        while (q === " ") q = this.buffer[++K + A];
        if (q === "\r") {
          let Y = this.buffer[K + A + 1];
          if (
            Y ===
              `
` ||
            (!Y && !this.atEnd)
          )
            return A + K + 1;
        }
        return q ===
          `
` ||
          K >= this.indentNext ||
          (!q && !this.atEnd)
          ? A + K
          : -1;
      }
      if (q === "-" || q === ".") {
        let K = this.buffer.substr(A, 3);
        if ((K === "---" || K === "...") && MS(this.buffer[A + 3])) return -1;
      }
      return A;
    }
    getLine() {
      let A = this.lineEndPos;
      if (typeof A !== "number" || (A !== -1 && A < this.pos))
        ((A = this.buffer.indexOf(
          `
`,
          this.pos,
        )),
          (this.lineEndPos = A));
      if (A === -1) return this.atEnd ? this.buffer.substring(this.pos) : null;
      if (this.buffer[A - 1] === "\r") A -= 1;
      return this.buffer.substring(this.pos, A);
    }
    hasChars(A) {
      return this.pos + A <= this.buffer.length;
    }
    setNext(A) {
      return (
        (this.buffer = this.buffer.substring(this.pos)),
        (this.pos = 0),
        (this.lineEndPos = null),
        (this.next = A),
        null
      );
    }
    peek(A) {
      return this.buffer.substr(this.pos, A);
    }
    *parseNext(A) {
      switch (A) {
        case "stream":
          return yield* this.parseStream();
        case "line-start":
          return yield* this.parseLineStart();
        case "block-start":
          return yield* this.parseBlockStart();
        case "doc":
          return yield* this.parseDocument();
        case "flow":
          return yield* this.parseFlowCollection();
        case "quoted-scalar":
          return yield* this.parseQuotedScalar();
        case "block-scalar":
          return yield* this.parseBlockScalar();
        case "plain-scalar":
          return yield* this.parsePlainScalar();
      }
    }
    *parseStream() {
      let A = this.getLine();
      if (A === null) return this.setNext("stream");
      if (A[0] === oy1.BOM) (yield* this.pushCount(1), (A = A.substring(1)));
      if (A[0] === "%") {
        let q = A.length,
          K = A.indexOf("#");
        while (K !== -1) {
          let z = A[K - 1];
          if (z === " " || z === "\t") {
            q = K - 1;
            break;
          } else K = A.indexOf("#", K + 1);
        }
        while (!0) {
          let z = A[q - 1];
          if (z === " " || z === "\t") q -= 1;
          else break;
        }
        let Y = (yield* this.pushCount(q)) + (yield* this.pushSpaces(!0));
        return (
          yield* this.pushCount(A.length - Y),
          this.pushNewline(),
          "stream"
        );
      }
      if (this.atLineEnd()) {
        let q = yield* this.pushSpaces(!0);
        return (
          yield* this.pushCount(A.length - q),
          yield* this.pushNewline(),
          "stream"
        );
      }
      return (yield oy1.DOCUMENT, yield* this.parseLineStart());
    }
    *parseLineStart() {
      let A = this.charAt(0);
      if (!A && !this.atEnd) return this.setNext("line-start");
      if (A === "-" || A === ".") {
        if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
        let q = this.peek(3);
        if ((q === "---" || q === "...") && MS(this.charAt(3)))
          return (
            yield* this.pushCount(3),
            (this.indentValue = 0),
            (this.indentNext = 0),
            q === "---" ? "doc" : "stream"
          );
      }
      if (
        ((this.indentValue = yield* this.pushSpaces(!1)),
        this.indentNext > this.indentValue && !MS(this.charAt(1)))
      )
        this.indentNext = this.indentValue;
      return yield* this.parseBlockStart();
    }
    *parseBlockStart() {
      let [A, q] = this.peek(2);
      if (!q && !this.atEnd) return this.setNext("block-start");
      if ((A === "-" || A === "?" || A === ":") && MS(q)) {
        let K = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
        return (
          (this.indentNext = this.indentValue + 1),
          (this.indentValue += K),
          yield* this.parseBlockStart()
        );
      }
      return "doc";
    }
    *parseDocument() {
      yield* this.pushSpaces(!0);
      let A = this.getLine();
      if (A === null) return this.setNext("doc");
      let q = yield* this.pushIndicators();
      switch (A[q]) {
        case "#":
          yield* this.pushCount(A.length - q);
        case void 0:
          return (yield* this.pushNewline(), yield* this.parseLineStart());
        case "{":
        case "[":
          return (
            yield* this.pushCount(1),
            (this.flowKey = !1),
            (this.flowLevel = 1),
            "flow"
          );
        case "}":
        case "]":
          return (yield* this.pushCount(1), "doc");
        case "*":
          return (yield* this.pushUntil(Q8A), "doc");
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case "|":
        case ">":
          return (
            (q += yield* this.parseBlockScalarHeader()),
            (q += yield* this.pushSpaces(!0)),
            yield* this.pushCount(A.length - q),
            yield* this.pushNewline(),
            yield* this.parseBlockScalar()
          );
        default:
          return yield* this.parsePlainScalar();
      }
    }
    *parseFlowCollection() {
      let A,
        q,
        K = -1;
      do {
        if (((A = yield* this.pushNewline()), A > 0))
          ((q = yield* this.pushSpaces(!1)), (this.indentValue = K = q));
        else q = 0;
        q += yield* this.pushSpaces(!0);
      } while (A + q > 0);
      let Y = this.getLine();
      if (Y === null) return this.setNext("flow");
      if (
        (K !== -1 && K < this.indentNext && Y[0] !== "#") ||
        (K === 0 && (Y.startsWith("---") || Y.startsWith("...")) && MS(Y[3]))
      ) {
        if (
          !(
            K === this.indentNext - 1 &&
            this.flowLevel === 1 &&
            (Y[0] === "]" || Y[0] === "}")
          )
        )
          return (
            (this.flowLevel = 0),
            yield oy1.FLOW_END,
            yield* this.parseLineStart()
          );
      }
      let z = 0;
      while (Y[z] === ",")
        ((z += yield* this.pushCount(1)),
          (z += yield* this.pushSpaces(!0)),
          (this.flowKey = !1));
      switch (((z += yield* this.pushIndicators()), Y[z])) {
        case void 0:
          return "flow";
        case "#":
          return (yield* this.pushCount(Y.length - z), "flow");
        case "{":
        case "[":
          return (
            yield* this.pushCount(1),
            (this.flowKey = !1),
            (this.flowLevel += 1),
            "flow"
          );
        case "}":
        case "]":
          return (
            yield* this.pushCount(1),
            (this.flowKey = !0),
            (this.flowLevel -= 1),
            this.flowLevel ? "flow" : "doc"
          );
        case "*":
          return (yield* this.pushUntil(Q8A), "flow");
        case '"':
        case "'":
          return ((this.flowKey = !0), yield* this.parseQuotedScalar());
        case ":": {
          let w = this.charAt(1);
          if (this.flowKey || MS(w) || w === ",")
            return (
              (this.flowKey = !1),
              yield* this.pushCount(1),
              yield* this.pushSpaces(!0),
              "flow"
            );
        }
        default:
          return ((this.flowKey = !1), yield* this.parsePlainScalar());
      }
    }
    *parseQuotedScalar() {
      let A = this.charAt(0),
        q = this.buffer.indexOf(A, this.pos + 1);
      if (A === "'")
        while (q !== -1 && this.buffer[q + 1] === "'")
          q = this.buffer.indexOf("'", q + 2);
      else
        while (q !== -1) {
          let z = 0;
          while (this.buffer[q - 1 - z] === "\\") z += 1;
          if (z % 2 === 0) break;
          q = this.buffer.indexOf('"', q + 1);
        }
      let K = this.buffer.substring(0, q),
        Y = K.indexOf(
          `
`,
          this.pos,
        );
      if (Y !== -1) {
        while (Y !== -1) {
          let z = this.continueScalar(Y + 1);
          if (z === -1) break;
          Y = K.indexOf(
            `
`,
            z,
          );
        }
        if (Y !== -1) q = Y - (K[Y - 1] === "\r" ? 2 : 1);
      }
      if (q === -1) {
        if (!this.atEnd) return this.setNext("quoted-scalar");
        q = this.buffer.length;
      }
      return (
        yield* this.pushToIndex(q + 1, !1),
        this.flowLevel ? "flow" : "doc"
      );
    }
    *parseBlockScalarHeader() {
      ((this.blockScalarIndent = -1), (this.blockScalarKeep = !1));
      let A = this.pos;
      while (!0) {
        let q = this.buffer[++A];
        if (q === "+") this.blockScalarKeep = !0;
        else if (q > "0" && q <= "9") this.blockScalarIndent = Number(q) - 1;
        else if (q !== "-") break;
      }
      return yield* this.pushUntil((q) => MS(q) || q === "#");
    }
    *parseBlockScalar() {
      let A = this.pos - 1,
        q = 0,
        K;
      A: for (let z = this.pos; (K = this.buffer[z]); ++z)
        switch (K) {
          case " ":
            q += 1;
            break;
          case `
`:
            ((A = z), (q = 0));
            break;
          case "\r": {
            let w = this.buffer[z + 1];
            if (!w && !this.atEnd) return this.setNext("block-scalar");
            if (
              w ===
              `
`
            )
              break;
          }
          default:
            break A;
        }
      if (!K && !this.atEnd) return this.setNext("block-scalar");
      if (q >= this.indentNext) {
        if (this.blockScalarIndent === -1) this.indentNext = q;
        else
          this.indentNext =
            this.blockScalarIndent +
            (this.indentNext === 0 ? 1 : this.indentNext);
        do {
          let z = this.continueScalar(A + 1);
          if (z === -1) break;
          A = this.buffer.indexOf(
            `
`,
            z,
          );
        } while (A !== -1);
        if (A === -1) {
          if (!this.atEnd) return this.setNext("block-scalar");
          A = this.buffer.length;
        }
      }
      let Y = A + 1;
      K = this.buffer[Y];
      while (K === " ") K = this.buffer[++Y];
      if (K === "\t") {
        while (
          K === "\t" ||
          K === " " ||
          K === "\r" ||
          K ===
            `
`
        )
          K = this.buffer[++Y];
        A = Y - 1;
      } else if (!this.blockScalarKeep)
        do {
          let z = A - 1,
            w = this.buffer[z];
          if (w === "\r") w = this.buffer[--z];
          let H = z;
          while (w === " ") w = this.buffer[--z];
          if (
            w ===
              `
` &&
            z >= this.pos &&
            z + 1 + q > H
          )
            A = z;
          else break;
        } while (!0);
      return (
        yield oy1.SCALAR,
        yield* this.pushToIndex(A + 1, !0),
        yield* this.parseLineStart()
      );
    }
    *parsePlainScalar() {
      let A = this.flowLevel > 0,
        q = this.pos - 1,
        K = this.pos - 1,
        Y;
      while ((Y = this.buffer[++K]))
        if (Y === ":") {
          let z = this.buffer[K + 1];
          if (MS(z) || (A && Hq6.has(z))) break;
          q = K;
        } else if (MS(Y)) {
          let z = this.buffer[K + 1];
          if (Y === "\r")
            if (
              z ===
              `
`
            )
              ((K += 1),
                (Y = `
`),
                (z = this.buffer[K + 1]));
            else q = K;
          if (z === "#" || (A && Hq6.has(z))) break;
          if (
            Y ===
            `
`
          ) {
            let w = this.continueScalar(K + 1);
            if (w === -1) break;
            K = Math.max(K, w - 2);
          }
        } else {
          if (A && Hq6.has(Y)) break;
          q = K;
        }
      if (!Y && !this.atEnd) return this.setNext("plain-scalar");
      return (
        yield oy1.SCALAR,
        yield* this.pushToIndex(q + 1, !0),
        A ? "flow" : "doc"
      );
    }
    *pushCount(A) {
      if (A > 0)
        return (yield this.buffer.substr(this.pos, A), (this.pos += A), A);
      return 0;
    }
    *pushToIndex(A, q) {
      let K = this.buffer.slice(this.pos, A);
      if (K) return (yield K, (this.pos += K.length), K.length);
      else if (q) yield "";
      return 0;
    }
    *pushIndicators() {
      switch (this.charAt(0)) {
        case "!":
          return (
            (yield* this.pushTag()) +
            (yield* this.pushSpaces(!0)) +
            (yield* this.pushIndicators())
          );
        case "&":
          return (
            (yield* this.pushUntil(Q8A)) +
            (yield* this.pushSpaces(!0)) +
            (yield* this.pushIndicators())
          );
        case "-":
        case "?":
        case ":": {
          let A = this.flowLevel > 0,
            q = this.charAt(1);
          if (MS(q) || (A && Hq6.has(q))) {
            if (!A) this.indentNext = this.indentValue + 1;
            else if (this.flowKey) this.flowKey = !1;
            return (
              (yield* this.pushCount(1)) +
              (yield* this.pushSpaces(!0)) +
              (yield* this.pushIndicators())
            );
          }
        }
      }
      return 0;
    }
    *pushTag() {
      if (this.charAt(1) === "<") {
        let A = this.pos + 2,
          q = this.buffer[A];
        while (!MS(q) && q !== ">") q = this.buffer[++A];
        return yield* this.pushToIndex(q === ">" ? A + 1 : A, !1);
      } else {
        let A = this.pos + 1,
          q = this.buffer[A];
        while (q)
          if (K05.has(q)) q = this.buffer[++A];
          else if (
            q === "%" &&
            po8.has(this.buffer[A + 1]) &&
            po8.has(this.buffer[A + 2])
          )
            q = this.buffer[(A += 3)];
          else break;
        return yield* this.pushToIndex(A, !1);
      }
    }
    *pushNewline() {
      let A = this.buffer[this.pos];
      if (
        A ===
        `
`
      )
        return yield* this.pushCount(1);
      else if (
        A === "\r" &&
        this.charAt(1) ===
          `
`
      )
        return yield* this.pushCount(2);
      else return 0;
    }
    *pushSpaces(A) {
      let q = this.pos - 1,
        K;
      do K = this.buffer[++q];
      while (K === " " || (A && K === "\t"));
      let Y = q - this.pos;
      if (Y > 0) (yield this.buffer.substr(this.pos, Y), (this.pos = q));
      return Y;
    }
    *pushUntil(A) {
      let q = this.pos,
        K = this.buffer[q];
      while (!A(K)) K = this.buffer[++q];
      return yield* this.pushToIndex(q, !1);
    }
  }
  z05.Lexer = do8;
