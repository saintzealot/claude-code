// Module: p8A (cjs)
// Dependencies: [wq6, g8A]
// Exports: Parser
// Lines: 121052-121819 in cli.formatted.js
// ---

  var O05 = h1("process"),
    lo8 = wq6(),
    _05 = g8A();
  function Er(A, q) {
    for (let K = 0; K < A.length; ++K) if (A[K].type === q) return !0;
    return !1;
  }
  function io8(A) {
    for (let q = 0; q < A.length; ++q)
      switch (A[q].type) {
        case "space":
        case "comment":
        case "newline":
          break;
        default:
          return q;
      }
    return -1;
  }
  function ro8(A) {
    switch (A?.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return !0;
      default:
        return !1;
    }
  }
  function $q6(A) {
    switch (A.type) {
      case "document":
        return A.start;
      case "block-map": {
        let q = A.items[A.items.length - 1];
        return q.sep ?? q.start;
      }
      case "block-seq":
        return A.items[A.items.length - 1].start;
      default:
        return [];
    }
  }
  function d_1(A) {
    if (A.length === 0) return [];
    let q = A.length;
    A: while (--q >= 0)
      switch (A[q].type) {
        case "doc-start":
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
        case "newline":
          break A;
      }
    while (A[++q]?.type === "space");
    return A.splice(q, A.length);
  }
  function no8(A) {
    if (A.start.type === "flow-seq-start") {
      for (let q of A.items)
        if (
          q.sep &&
          !q.value &&
          !Er(q.start, "explicit-key-ind") &&
          !Er(q.sep, "map-value-ind")
        ) {
          if (q.key) q.value = q.key;
          if ((delete q.key, ro8(q.value)))
            if (q.value.end) Array.prototype.push.apply(q.value.end, q.sep);
            else q.value.end = q.sep;
          else Array.prototype.push.apply(q.start, q.sep);
          delete q.sep;
        }
    }
  }
  class ao8 {
    constructor(A) {
      ((this.atNewLine = !0),
        (this.atScalar = !1),
        (this.indent = 0),
        (this.offset = 0),
        (this.onKeyLine = !1),
        (this.stack = []),
        (this.source = ""),
        (this.type = ""),
        (this.lexer = new _05.Lexer()),
        (this.onNewLine = A));
    }
    *parse(A, q = !1) {
      if (this.onNewLine && this.offset === 0) this.onNewLine(0);
      for (let K of this.lexer.lex(A, q)) yield* this.next(K);
      if (!q) yield* this.end();
    }
    *next(A) {
      if (((this.source = A), O05.env.LOG_TOKENS))
        console.log("|", lo8.prettyToken(A));
      if (this.atScalar) {
        ((this.atScalar = !1), yield* this.step(), (this.offset += A.length));
        return;
      }
      let q = lo8.tokenType(A);
      if (!q) {
        let K = `Not a YAML token: ${A}`;
        (yield* this.pop({
          type: "error",
          offset: this.offset,
          message: K,
          source: A,
        }),
          (this.offset += A.length));
      } else if (q === "scalar")
        ((this.atNewLine = !1), (this.atScalar = !0), (this.type = "scalar"));
      else {
        switch (((this.type = q), yield* this.step(), q)) {
          case "newline":
            if (((this.atNewLine = !0), (this.indent = 0), this.onNewLine))
              this.onNewLine(this.offset + A.length);
            break;
          case "space":
            if (this.atNewLine && A[0] === " ") this.indent += A.length;
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            if (this.atNewLine) this.indent += A.length;
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += A.length;
      }
    }
    *end() {
      while (this.stack.length > 0) yield* this.pop();
    }
    get sourceToken() {
      return {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source,
      };
    }
    *step() {
      let A = this.peek(1);
      if (this.type === "doc-end" && (!A || A.type !== "doc-end")) {
        while (this.stack.length > 0) yield* this.pop();
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source,
        });
        return;
      }
      if (!A) return yield* this.stream();
      switch (A.type) {
        case "document":
          return yield* this.document(A);
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return yield* this.scalar(A);
        case "block-scalar":
          return yield* this.blockScalar(A);
        case "block-map":
          return yield* this.blockMap(A);
        case "block-seq":
          return yield* this.blockSequence(A);
        case "flow-collection":
          return yield* this.flowCollection(A);
        case "doc-end":
          return yield* this.documentEnd(A);
      }
      yield* this.pop();
    }
    peek(A) {
      return this.stack[this.stack.length - A];
    }
    *pop(A) {
      let q = A ?? this.stack.pop();
      if (!q)
        yield {
          type: "error",
          offset: this.offset,
          source: "",
          message: "Tried to pop an empty stack",
        };
      else if (this.stack.length === 0) yield q;
      else {
        let K = this.peek(1);
        if (q.type === "block-scalar") q.indent = "indent" in K ? K.indent : 0;
        else if (q.type === "flow-collection" && K.type === "document")
          q.indent = 0;
        if (q.type === "flow-collection") no8(q);
        switch (K.type) {
          case "document":
            K.value = q;
            break;
          case "block-scalar":
            K.props.push(q);
            break;
          case "block-map": {
            let Y = K.items[K.items.length - 1];
            if (Y.value) {
              (K.items.push({ start: [], key: q, sep: [] }),
                (this.onKeyLine = !0));
              return;
            } else if (Y.sep) Y.value = q;
            else {
              (Object.assign(Y, { key: q, sep: [] }),
                (this.onKeyLine = !Y.explicitKey));
              return;
            }
            break;
          }
          case "block-seq": {
            let Y = K.items[K.items.length - 1];
            if (Y.value) K.items.push({ start: [], value: q });
            else Y.value = q;
            break;
          }
          case "flow-collection": {
            let Y = K.items[K.items.length - 1];
            if (!Y || Y.value) K.items.push({ start: [], key: q, sep: [] });
            else if (Y.sep) Y.value = q;
            else Object.assign(Y, { key: q, sep: [] });
            return;
          }
          default:
            (yield* this.pop(), yield* this.pop(q));
        }
        if (
          (K.type === "document" ||
            K.type === "block-map" ||
            K.type === "block-seq") &&
          (q.type === "block-map" || q.type === "block-seq")
        ) {
          let Y = q.items[q.items.length - 1];
          if (
            Y &&
            !Y.sep &&
            !Y.value &&
            Y.start.length > 0 &&
            io8(Y.start) === -1 &&
            (q.indent === 0 ||
              Y.start.every((z) => z.type !== "comment" || z.indent < q.indent))
          ) {
            if (K.type === "document") K.end = Y.start;
            else K.items.push({ start: Y.start });
            q.items.splice(-1, 1);
          }
        }
      }
    }
    *stream() {
      switch (this.type) {
        case "directive-line":
          yield { type: "directive", offset: this.offset, source: this.source };
          return;
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          yield this.sourceToken;
          return;
        case "doc-mode":
        case "doc-start": {
          let A = { type: "document", offset: this.offset, start: [] };
          if (this.type === "doc-start") A.start.push(this.sourceToken);
          this.stack.push(A);
          return;
        }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source,
      };
    }
    *document(A) {
      if (A.value) return yield* this.lineEnd(A);
      switch (this.type) {
        case "doc-start": {
          if (io8(A.start) !== -1) (yield* this.pop(), yield* this.step());
          else A.start.push(this.sourceToken);
          return;
        }
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          A.start.push(this.sourceToken);
          return;
      }
      let q = this.startBlockValue(A);
      if (q) this.stack.push(q);
      else
        yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML document`,
          source: this.source,
        };
    }
    *scalar(A) {
      if (this.type === "map-value-ind") {
        let q = $q6(this.peek(2)),
          K = d_1(q),
          Y;
        if (A.end) ((Y = A.end), Y.push(this.sourceToken), delete A.end);
        else Y = [this.sourceToken];
        let z = {
          type: "block-map",
          offset: A.offset,
          indent: A.indent,
          items: [{ start: K, key: A, sep: Y }],
        };
        ((this.onKeyLine = !0), (this.stack[this.stack.length - 1] = z));
      } else yield* this.lineEnd(A);
    }
    *blockScalar(A) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          A.props.push(this.sourceToken);
          return;
        case "scalar":
          if (
            ((A.source = this.source),
            (this.atNewLine = !0),
            (this.indent = 0),
            this.onNewLine)
          ) {
            let q =
              this.source.indexOf(`
`) + 1;
            while (q !== 0)
              (this.onNewLine(this.offset + q),
                (q =
                  this.source.indexOf(
                    `
`,
                    q,
                  ) + 1));
          }
          yield* this.pop();
          break;
        default:
          (yield* this.pop(), yield* this.step());
      }
    }
    *blockMap(A) {
      let q = A.items[A.items.length - 1];
      switch (this.type) {
        case "newline":
          if (((this.onKeyLine = !1), q.value)) {
            let K = "end" in q.value ? q.value.end : void 0;
            if (
              (Array.isArray(K) ? K[K.length - 1] : void 0)?.type === "comment"
            )
              K?.push(this.sourceToken);
            else A.items.push({ start: [this.sourceToken] });
          } else if (q.sep) q.sep.push(this.sourceToken);
          else q.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (q.value) A.items.push({ start: [this.sourceToken] });
          else if (q.sep) q.sep.push(this.sourceToken);
          else {
            if (this.atIndentedComment(q.start, A.indent)) {
              let Y = A.items[A.items.length - 2]?.value?.end;
              if (Array.isArray(Y)) {
                (Array.prototype.push.apply(Y, q.start),
                  Y.push(this.sourceToken),
                  A.items.pop());
                return;
              }
            }
            q.start.push(this.sourceToken);
          }
          return;
      }
      if (this.indent >= A.indent) {
        let K = !this.onKeyLine && this.indent === A.indent,
          Y = K && (q.sep || q.explicitKey) && this.type !== "seq-item-ind",
          z = [];
        if (Y && q.sep && !q.value) {
          let w = [];
          for (let H = 0; H < q.sep.length; ++H) {
            let $ = q.sep[H];
            switch ($.type) {
              case "newline":
                w.push(H);
                break;
              case "space":
                break;
              case "comment":
                if ($.indent > A.indent) w.length = 0;
                break;
              default:
                w.length = 0;
            }
          }
          if (w.length >= 2) z = q.sep.splice(w[1]);
        }
        switch (this.type) {
          case "anchor":
          case "tag":
            if (Y || q.value)
              (z.push(this.sourceToken),
                A.items.push({ start: z }),
                (this.onKeyLine = !0));
            else if (q.sep) q.sep.push(this.sourceToken);
            else q.start.push(this.sourceToken);
            return;
          case "explicit-key-ind":
            if (!q.sep && !q.explicitKey)
              (q.start.push(this.sourceToken), (q.explicitKey = !0));
            else if (Y || q.value)
              (z.push(this.sourceToken),
                A.items.push({ start: z, explicitKey: !0 }));
            else
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [this.sourceToken], explicitKey: !0 }],
              });
            this.onKeyLine = !0;
            return;
          case "map-value-ind":
            if (q.explicitKey)
              if (!q.sep)
                if (Er(q.start, "newline"))
                  Object.assign(q, { key: null, sep: [this.sourceToken] });
                else {
                  let w = d_1(q.start);
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: w, key: null, sep: [this.sourceToken] }],
                  });
                }
              else if (q.value)
                A.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (Er(q.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: z, key: null, sep: [this.sourceToken] }],
                });
              else if (ro8(q.key) && !Er(q.sep, "newline")) {
                let w = d_1(q.start),
                  H = q.key,
                  $ = q.sep;
                ($.push(this.sourceToken),
                  delete q.key,
                  delete q.sep,
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: w, key: H, sep: $ }],
                  }));
              } else if (z.length > 0)
                q.sep = q.sep.concat(z, this.sourceToken);
              else q.sep.push(this.sourceToken);
            else if (!q.sep)
              Object.assign(q, { key: null, sep: [this.sourceToken] });
            else if (q.value || Y)
              A.items.push({ start: z, key: null, sep: [this.sourceToken] });
            else if (Er(q.sep, "map-value-ind"))
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [], key: null, sep: [this.sourceToken] }],
              });
            else q.sep.push(this.sourceToken);
            this.onKeyLine = !0;
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            let w = this.flowScalar(this.type);
            if (Y || q.value)
              (A.items.push({ start: z, key: w, sep: [] }),
                (this.onKeyLine = !0));
            else if (q.sep) this.stack.push(w);
            else (Object.assign(q, { key: w, sep: [] }), (this.onKeyLine = !0));
            return;
          }
          default: {
            let w = this.startBlockValue(A);
            if (w) {
              if (w.type === "block-seq") {
                if (!q.explicitKey && q.sep && !Er(q.sep, "newline")) {
                  yield* this.pop({
                    type: "error",
                    offset: this.offset,
                    message: "Unexpected block-seq-ind on same line with key",
                    source: this.source,
                  });
                  return;
                }
              } else if (K) A.items.push({ start: z });
              this.stack.push(w);
              return;
            }
          }
        }
      }
      (yield* this.pop(), yield* this.step());
    }
    *blockSequence(A) {
      let q = A.items[A.items.length - 1];
      switch (this.type) {
        case "newline":
          if (q.value) {
            let K = "end" in q.value ? q.value.end : void 0;
            if (
              (Array.isArray(K) ? K[K.length - 1] : void 0)?.type === "comment"
            )
              K?.push(this.sourceToken);
            else A.items.push({ start: [this.sourceToken] });
          } else q.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (q.value) A.items.push({ start: [this.sourceToken] });
          else {
            if (this.atIndentedComment(q.start, A.indent)) {
              let Y = A.items[A.items.length - 2]?.value?.end;
              if (Array.isArray(Y)) {
                (Array.prototype.push.apply(Y, q.start),
                  Y.push(this.sourceToken),
                  A.items.pop());
                return;
              }
            }
            q.start.push(this.sourceToken);
          }
          return;
        case "anchor":
        case "tag":
          if (q.value || this.indent <= A.indent) break;
          q.start.push(this.sourceToken);
          return;
        case "seq-item-ind":
          if (this.indent !== A.indent) break;
          if (q.value || Er(q.start, "seq-item-ind"))
            A.items.push({ start: [this.sourceToken] });
          else q.start.push(this.sourceToken);
          return;
      }
      if (this.indent > A.indent) {
        let K = this.startBlockValue(A);
        if (K) {
          this.stack.push(K);
          return;
        }
      }
      (yield* this.pop(), yield* this.step());
    }
    *flowCollection(A) {
      let q = A.items[A.items.length - 1];
      if (this.type === "flow-error-end") {
        let K;
        do (yield* this.pop(), (K = this.peek(1)));
        while (K && K.type === "flow-collection");
      } else if (A.end.length === 0) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            if (!q || q.sep) A.items.push({ start: [this.sourceToken] });
            else q.start.push(this.sourceToken);
            return;
          case "map-value-ind":
            if (!q || q.value)
              A.items.push({ start: [], key: null, sep: [this.sourceToken] });
            else if (q.sep) q.sep.push(this.sourceToken);
            else Object.assign(q, { key: null, sep: [this.sourceToken] });
            return;
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            if (!q || q.value) A.items.push({ start: [this.sourceToken] });
            else if (q.sep) q.sep.push(this.sourceToken);
            else q.start.push(this.sourceToken);
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            let Y = this.flowScalar(this.type);
            if (!q || q.value) A.items.push({ start: [], key: Y, sep: [] });
            else if (q.sep) this.stack.push(Y);
            else Object.assign(q, { key: Y, sep: [] });
            return;
          }
          case "flow-map-end":
          case "flow-seq-end":
            A.end.push(this.sourceToken);
            return;
        }
        let K = this.startBlockValue(A);
        if (K) this.stack.push(K);
        else (yield* this.pop(), yield* this.step());
      } else {
        let K = this.peek(2);
        if (
          K.type === "block-map" &&
          ((this.type === "map-value-ind" && K.indent === A.indent) ||
            (this.type === "newline" && !K.items[K.items.length - 1].sep))
        )
          (yield* this.pop(), yield* this.step());
        else if (
          this.type === "map-value-ind" &&
          K.type !== "flow-collection"
        ) {
          let Y = $q6(K),
            z = d_1(Y);
          no8(A);
          let w = A.end.splice(1, A.end.length);
          w.push(this.sourceToken);
          let H = {
            type: "block-map",
            offset: A.offset,
            indent: A.indent,
            items: [{ start: z, key: A, sep: w }],
          };
          ((this.onKeyLine = !0), (this.stack[this.stack.length - 1] = H));
        } else yield* this.lineEnd(A);
      }
    }
    flowScalar(A) {
      if (this.onNewLine) {
        let q =
          this.source.indexOf(`
`) + 1;
        while (q !== 0)
          (this.onNewLine(this.offset + q),
            (q =
              this.source.indexOf(
                `
`,
                q,
              ) + 1));
      }
      return {
        type: A,
        offset: this.offset,
        indent: this.indent,
        source: this.source,
      };
    }
    startBlockValue(A) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar",
            offset: this.offset,
            indent: this.indent,
            props: [this.sourceToken],
            source: "",
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection",
            offset: this.offset,
            indent: this.indent,
            start: this.sourceToken,
            items: [],
            end: [],
          };
        case "seq-item-ind":
          return {
            type: "block-seq",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken] }],
          };
        case "explicit-key-ind": {
          this.onKeyLine = !0;
          let q = $q6(A),
            K = d_1(q);
          return (
            K.push(this.sourceToken),
            {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: K, explicitKey: !0 }],
            }
          );
        }
        case "map-value-ind": {
          this.onKeyLine = !0;
          let q = $q6(A),
            K = d_1(q);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: K, key: null, sep: [this.sourceToken] }],
          };
        }
      }
      return null;
    }
    atIndentedComment(A, q) {
      if (this.type !== "comment") return !1;
      if (this.indent <= q) return !1;
      return A.every((K) => K.type === "newline" || K.type === "space");
    }
    *documentEnd(A) {
      if (this.type !== "doc-mode") {
        if (A.end) A.end.push(this.sourceToken);
        else A.end = [this.sourceToken];
        if (this.type === "newline") yield* this.pop();
      }
    }
    *lineEnd(A) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          (yield* this.pop(), yield* this.step());
          break;
        case "newline":
          this.onKeyLine = !1;
        case "space":
        case "comment":
        default:
          if (A.end) A.end.push(this.sourceToken);
          else A.end = [this.sourceToken];
          if (this.type === "newline") yield* this.pop();
      }
    }
  }
  J05.Parser = ao8;
