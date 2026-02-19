// Module: OE1 (lazy)
// Dependencies: [yH1, eK, Bs1, Fs1, Us1, nu6]
// Lines: 37762-39049 in cli.formatted.js
// ---

  Us1();
  yH1();
  Bs1();
  Fs1();
  eK();
  nu6();
  eK();
  ((V3 = PA("$ZodType", (A, q) => {
    var K;
    (A ?? (A = {}),
      (A._zod.def = q),
      (A._zod.bag = A._zod.bag || {}),
      (A._zod.version = iu6));
    let Y = [...(A._zod.def.checks ?? [])];
    if (A._zod.traits.has("$ZodCheck")) Y.unshift(A);
    for (let z of Y) for (let w of z._zod.onattach) w(A);
    if (Y.length === 0)
      ((K = A._zod).deferred ?? (K.deferred = []),
        A._zod.deferred?.push(() => {
          A._zod.run = A._zod.parse;
        }));
    else {
      let z = (w, H, $) => {
        let O = yA1(w),
          _;
        for (let J of H) {
          if (J._zod.when) {
            if (!J._zod.when(w)) continue;
          } else if (O) continue;
          let X = w.issues.length,
            j = J._zod.check(w);
          if (j instanceof Promise && $?.async === !1) throw new cQ();
          if (_ || j instanceof Promise)
            _ = (_ ?? Promise.resolve()).then(async () => {
              if ((await j, w.issues.length === X)) return;
              if (!O) O = yA1(w, X);
            });
          else {
            if (w.issues.length === X) continue;
            if (!O) O = yA1(w, X);
          }
        }
        if (_)
          return _.then(() => {
            return w;
          });
        return w;
      };
      A._zod.run = (w, H) => {
        let $ = A._zod.parse(w, H);
        if ($ instanceof Promise) {
          if (H.async === !1) throw new cQ();
          return $.then((O) => z(O, Y, H));
        }
        return z($, Y, H);
      };
    }
    A["~standard"] = {
      validate: (z) => {
        try {
          let w = IH1(A, z);
          return w.success ? { value: w.data } : { issues: w.error?.issues };
        } catch (w) {
          return YE1(A, z).then((H) =>
            H.success ? { value: H.data } : { issues: H.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  })),
    (hA1 = PA("$ZodString", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern =
          [...(A?._zod.bag?.patterns ?? [])].pop() ?? fu6(A._zod.bag)),
        (A._zod.parse = (K, Y) => {
          if (q.coerce)
            try {
              K.value = String(K.value);
            } catch (z) {}
          if (typeof K.value === "string") return K;
          return (
            K.issues.push({
              expected: "string",
              code: "invalid_type",
              input: K.value,
              inst: A,
            }),
            K
          );
        }));
    })),
    (Lw = PA("$ZodStringFormat", (A, q) => {
      (xH1.init(A, q), hA1.init(A, q));
    })),
    (au6 = PA("$ZodGUID", (A, q) => {
      (q.pattern ?? (q.pattern = Hu6), Lw.init(A, q));
    })),
    (ou6 = PA("$ZodUUID", (A, q) => {
      if (q.version) {
        let Y = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
          q.version
        ];
        if (Y === void 0) throw Error(`Invalid UUID version: "${q.version}"`);
        q.pattern ?? (q.pattern = CA1(Y));
      } else q.pattern ?? (q.pattern = CA1());
      Lw.init(A, q);
    })),
    (su6 = PA("$ZodEmail", (A, q) => {
      (q.pattern ?? (q.pattern = $u6), Lw.init(A, q));
    })),
    (tu6 = PA("$ZodURL", (A, q) => {
      (Lw.init(A, q),
        (A._zod.check = (K) => {
          try {
            let Y = K.value,
              z = new URL(Y),
              w = z.href;
            if (q.hostname) {
              if (((q.hostname.lastIndex = 0), !q.hostname.test(z.hostname)))
                K.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid hostname",
                  pattern: Mu6.source,
                  input: K.value,
                  inst: A,
                  continue: !q.abort,
                });
            }
            if (q.protocol) {
              if (
                ((q.protocol.lastIndex = 0),
                !q.protocol.test(
                  z.protocol.endsWith(":")
                    ? z.protocol.slice(0, -1)
                    : z.protocol,
                ))
              )
                K.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: q.protocol.source,
                  input: K.value,
                  inst: A,
                  continue: !q.abort,
                });
            }
            if (!Y.endsWith("/") && w.endsWith("/")) K.value = w.slice(0, -1);
            else K.value = w;
            return;
          } catch (Y) {
            K.issues.push({
              code: "invalid_format",
              format: "url",
              input: K.value,
              inst: A,
              continue: !q.abort,
            });
          }
        }));
    })),
    (eu6 = PA("$ZodEmoji", (A, q) => {
      (q.pattern ?? (q.pattern = Ou6()), Lw.init(A, q));
    })),
    (AB6 = PA("$ZodNanoID", (A, q) => {
      (q.pattern ?? (q.pattern = zu6), Lw.init(A, q));
    })),
    (qB6 = PA("$ZodCUID", (A, q) => {
      (q.pattern ?? (q.pattern = eb6), Lw.init(A, q));
    })),
    (KB6 = PA("$ZodCUID2", (A, q) => {
      (q.pattern ?? (q.pattern = Au6), Lw.init(A, q));
    })),
    (YB6 = PA("$ZodULID", (A, q) => {
      (q.pattern ?? (q.pattern = qu6), Lw.init(A, q));
    })),
    (zB6 = PA("$ZodXID", (A, q) => {
      (q.pattern ?? (q.pattern = Ku6), Lw.init(A, q));
    })),
    (wB6 = PA("$ZodKSUID", (A, q) => {
      (q.pattern ?? (q.pattern = Yu6), Lw.init(A, q));
    })),
    (HB6 = PA("$ZodISODateTime", (A, q) => {
      (q.pattern ?? (q.pattern = Zu6(q)), Lw.init(A, q));
    })),
    ($B6 = PA("$ZodISODate", (A, q) => {
      (q.pattern ?? (q.pattern = Wu6), Lw.init(A, q));
    })),
    (OB6 = PA("$ZodISOTime", (A, q) => {
      (q.pattern ?? (q.pattern = Gu6(q)), Lw.init(A, q));
    })),
    (_B6 = PA("$ZodISODuration", (A, q) => {
      (q.pattern ?? (q.pattern = wu6), Lw.init(A, q));
    })),
    (JB6 = PA("$ZodIPv4", (A, q) => {
      (q.pattern ?? (q.pattern = _u6),
        Lw.init(A, q),
        A._zod.onattach.push((K) => {
          let Y = K._zod.bag;
          Y.format = "ipv4";
        }));
    })),
    (XB6 = PA("$ZodIPv6", (A, q) => {
      (q.pattern ?? (q.pattern = Ju6),
        Lw.init(A, q),
        A._zod.onattach.push((K) => {
          let Y = K._zod.bag;
          Y.format = "ipv6";
        }),
        (A._zod.check = (K) => {
          try {
            new URL(`http://[${K.value}]`);
          } catch {
            K.issues.push({
              code: "invalid_format",
              format: "ipv6",
              input: K.value,
              inst: A,
              continue: !q.abort,
            });
          }
        }));
    })),
    (jB6 = PA("$ZodCIDRv4", (A, q) => {
      (q.pattern ?? (q.pattern = Xu6), Lw.init(A, q));
    })),
    (DB6 = PA("$ZodCIDRv6", (A, q) => {
      (q.pattern ?? (q.pattern = ju6),
        Lw.init(A, q),
        (A._zod.check = (K) => {
          let [Y, z] = K.value.split("/");
          try {
            if (!z) throw Error();
            let w = Number(z);
            if (`${w}` !== z) throw Error();
            if (w < 0 || w > 128) throw Error();
            new URL(`http://[${Y}]`);
          } catch {
            K.issues.push({
              code: "invalid_format",
              format: "cidrv6",
              input: K.value,
              inst: A,
              continue: !q.abort,
            });
          }
        }));
    })));
  PB6 = PA("$ZodBase64", (A, q) => {
    (q.pattern ?? (q.pattern = Du6),
      Lw.init(A, q),
      A._zod.onattach.push((K) => {
        K._zod.bag.contentEncoding = "base64";
      }),
      (A._zod.check = (K) => {
        if (MB6(K.value)) return;
        K.issues.push({
          code: "invalid_format",
          format: "base64",
          input: K.value,
          inst: A,
          continue: !q.abort,
        });
      }));
  });
  ((WB6 = PA("$ZodBase64URL", (A, q) => {
    (q.pattern ?? (q.pattern = ms1),
      Lw.init(A, q),
      A._zod.onattach.push((K) => {
        K._zod.bag.contentEncoding = "base64url";
      }),
      (A._zod.check = (K) => {
        if (pw8(K.value)) return;
        K.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: K.value,
          inst: A,
          continue: !q.abort,
        });
      }));
  })),
    (GB6 = PA("$ZodE164", (A, q) => {
      (q.pattern ?? (q.pattern = Pu6), Lw.init(A, q));
    })));
  ((ZB6 = PA("$ZodJWT", (A, q) => {
    (Lw.init(A, q),
      (A._zod.check = (K) => {
        if (dw8(K.value, q.alg)) return;
        K.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: K.value,
          inst: A,
          continue: !q.abort,
        });
      }));
  })),
    (fB6 = PA("$ZodCustomStringFormat", (A, q) => {
      (Lw.init(A, q),
        (A._zod.check = (K) => {
          if (q.fn(K.value)) return;
          K.issues.push({
            code: "invalid_format",
            format: q.format,
            input: K.value,
            inst: A,
            continue: !q.abort,
          });
        }));
    })),
    (ls1 = PA("$ZodNumber", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern = A._zod.bag.pattern ?? Tu6),
        (A._zod.parse = (K, Y) => {
          if (q.coerce)
            try {
              K.value = Number(K.value);
            } catch (H) {}
          let z = K.value;
          if (typeof z === "number" && !Number.isNaN(z) && Number.isFinite(z))
            return K;
          let w =
            typeof z === "number"
              ? Number.isNaN(z)
                ? "NaN"
                : !Number.isFinite(z)
                  ? "Infinity"
                  : void 0
              : void 0;
          return (
            K.issues.push({
              expected: "number",
              code: "invalid_type",
              input: z,
              inst: A,
              ...(w ? { received: w } : {}),
            }),
            K
          );
        }));
    })),
    (VB6 = PA("$ZodNumber", (A, q) => {
      (Cu6.init(A, q), ls1.init(A, q));
    })),
    (zE1 = PA("$ZodBoolean", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern = vu6),
        (A._zod.parse = (K, Y) => {
          if (q.coerce)
            try {
              K.value = Boolean(K.value);
            } catch (w) {}
          let z = K.value;
          if (typeof z === "boolean") return K;
          return (
            K.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (is1 = PA("$ZodBigInt", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern = Vu6),
        (A._zod.parse = (K, Y) => {
          if (q.coerce)
            try {
              K.value = BigInt(K.value);
            } catch (z) {}
          if (typeof K.value === "bigint") return K;
          return (
            K.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: K.value,
              inst: A,
            }),
            K
          );
        }));
    })),
    (NB6 = PA("$ZodBigInt", (A, q) => {
      (Su6.init(A, q), is1.init(A, q));
    })),
    (TB6 = PA("$ZodSymbol", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (typeof z === "symbol") return K;
          return (
            K.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (vB6 = PA("$ZodUndefined", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern = ku6),
        (A._zod.values = new Set([void 0])),
        (A._zod.optin = "optional"),
        (A._zod.optout = "optional"),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (typeof z > "u") return K;
          return (
            K.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (EB6 = PA("$ZodNull", (A, q) => {
      (V3.init(A, q),
        (A._zod.pattern = Eu6),
        (A._zod.values = new Set([null])),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (z === null) return K;
          return (
            K.issues.push({
              expected: "null",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (kB6 = PA("$ZodAny", (A, q) => {
      (V3.init(A, q), (A._zod.parse = (K) => K));
    })),
    (bH1 = PA("$ZodUnknown", (A, q) => {
      (V3.init(A, q), (A._zod.parse = (K) => K));
    })),
    (LB6 = PA("$ZodNever", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          return (
            K.issues.push({
              expected: "never",
              code: "invalid_type",
              input: K.value,
              inst: A,
            }),
            K
          );
        }));
    })),
    (RB6 = PA("$ZodVoid", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (typeof z > "u") return K;
          return (
            K.issues.push({
              expected: "void",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (yB6 = PA("$ZodDate", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          if (q.coerce)
            try {
              K.value = new Date(K.value);
            } catch ($) {}
          let z = K.value,
            w = z instanceof Date;
          if (w && !Number.isNaN(z.getTime())) return K;
          return (
            K.issues.push({
              expected: "date",
              code: "invalid_type",
              input: z,
              ...(w ? { received: "Invalid Date" } : {}),
              inst: A,
            }),
            K
          );
        }));
    })));
  wE1 = PA("$ZodArray", (A, q) => {
    (V3.init(A, q),
      (A._zod.parse = (K, Y) => {
        let z = K.value;
        if (!Array.isArray(z))
          return (
            K.issues.push({
              expected: "array",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        K.value = Array(z.length);
        let w = [];
        for (let H = 0; H < z.length; H++) {
          let $ = z[H],
            O = q.element._zod.run({ value: $, issues: [] }, Y);
          if (O instanceof Promise) w.push(O.then((_) => hw8(_, K, H)));
          else hw8(O, K, H);
        }
        if (w.length) return Promise.all(w).then(() => K);
        return K;
      }));
  });
  CB6 = PA("$ZodObject", (A, q) => {
    V3.init(A, q);
    let K = nv1(() => {
      let X = Object.keys(q.shape);
      for (let D of X)
        if (!(q.shape[D] instanceof V3))
          throw Error(`Invalid element at key "${D}": expected a Zod schema`);
      let j = ib6(q.shape);
      return {
        shape: q.shape,
        keys: X,
        keySet: new Set(X),
        numKeys: X.length,
        optionalKeys: new Set(j),
      };
    });
    Lz(A._zod, "propValues", () => {
      let X = q.shape,
        j = {};
      for (let D in X) {
        let M = X[D]._zod;
        if (M.values) {
          j[D] ?? (j[D] = new Set());
          for (let P of M.values) j[D].add(P);
        }
      }
      return j;
    });
    let Y = (X) => {
        let j = new ps1(["shape", "payload", "ctx"]),
          D = K.value,
          M = (V) => {
            let Z = RA1(V);
            return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
          };
        j.write("const input = payload.value;");
        let P = Object.create(null),
          W = 0;
        for (let V of D.keys) P[V] = `key_${W++}`;
        j.write("const newResult = {}");
        for (let V of D.keys)
          if (D.optionalKeys.has(V)) {
            let Z = P[V];
            j.write(`const ${Z} = ${M(V)};`);
            let N = RA1(V);
            j.write(`
        if (${Z}.issues.length) {
          if (input[${N}] === undefined) {
            if (${N} in input) {
              newResult[${N}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${Z}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${N}, ...iss.path] : [${N}],
              }))
            );
          }
        } else if (${Z}.value === undefined) {
          if (${N} in input) newResult[${N}] = undefined;
        } else {
          newResult[${N}] = ${Z}.value;
        }
        `);
          } else {
            let Z = P[V];
            (j.write(`const ${Z} = ${M(V)};`),
              j.write(`
          if (${Z}.issues.length) payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${RA1(V)}, ...iss.path] : [${RA1(V)}]
          })));`),
              j.write(`newResult[${RA1(V)}] = ${Z}.value`));
          }
        (j.write("payload.value = newResult;"), j.write("return payload;"));
        let G = j.compile();
        return (V, Z) => G(X, V, Z);
      },
      z,
      w = CH1,
      H = !dv1.jitless,
      O = H && cb6.value,
      _ = q.catchall,
      J;
    A._zod.parse = (X, j) => {
      J ?? (J = K.value);
      let D = X.value;
      if (!w(D))
        return (
          X.issues.push({
            expected: "object",
            code: "invalid_type",
            input: D,
            inst: A,
          }),
          X
        );
      let M = [];
      if (H && O && j?.async === !1 && j.jitless !== !0) {
        if (!z) z = Y(q.shape);
        X = z(X, j);
      } else {
        X.value = {};
        let Z = J.shape;
        for (let N of J.keys) {
          let T = Z[N],
            k = T._zod.run({ value: D[N], issues: [] }, j),
            y = T._zod.optin === "optional" && T._zod.optout === "optional";
          if (k instanceof Promise)
            M.push(k.then((B) => (y ? Iw8(B, X, N, D) : ds1(B, X, N))));
          else if (y) Iw8(k, X, N, D);
          else ds1(k, X, N);
        }
      }
      if (!_) return M.length ? Promise.all(M).then(() => X) : X;
      let P = [],
        W = J.keySet,
        G = _._zod,
        V = G.def.type;
      for (let Z of Object.keys(D)) {
        if (W.has(Z)) continue;
        if (V === "never") {
          P.push(Z);
          continue;
        }
        let N = G.run({ value: D[Z], issues: [] }, j);
        if (N instanceof Promise) M.push(N.then((T) => ds1(T, X, Z)));
        else ds1(N, X, Z);
      }
      if (P.length)
        X.issues.push({
          code: "unrecognized_keys",
          keys: P,
          input: D,
          inst: A,
        });
      if (!M.length) return X;
      return Promise.all(M).then(() => {
        return X;
      });
    };
  });
  ((ns1 = PA("$ZodUnion", (A, q) => {
    (V3.init(A, q),
      Lz(A._zod, "optin", () =>
        q.options.some((K) => K._zod.optin === "optional")
          ? "optional"
          : void 0,
      ),
      Lz(A._zod, "optout", () =>
        q.options.some((K) => K._zod.optout === "optional")
          ? "optional"
          : void 0,
      ),
      Lz(A._zod, "values", () => {
        if (q.options.every((K) => K._zod.values))
          return new Set(q.options.flatMap((K) => Array.from(K._zod.values)));
        return;
      }),
      Lz(A._zod, "pattern", () => {
        if (q.options.every((K) => K._zod.pattern)) {
          let K = q.options.map((Y) => Y._zod.pattern);
          return new RegExp(`^(${K.map((Y) => rv1(Y.source)).join("|")})$`);
        }
        return;
      }),
      (A._zod.parse = (K, Y) => {
        let z = !1,
          w = [];
        for (let H of q.options) {
          let $ = H._zod.run({ value: K.value, issues: [] }, Y);
          if ($ instanceof Promise) (w.push($), (z = !0));
          else {
            if ($.issues.length === 0) return $;
            w.push($);
          }
        }
        if (!z) return xw8(w, K, A, Y);
        return Promise.all(w).then((H) => {
          return xw8(H, K, A, Y);
        });
      }));
  })),
    (SB6 = PA("$ZodDiscriminatedUnion", (A, q) => {
      ns1.init(A, q);
      let K = A._zod.parse;
      Lz(A._zod, "propValues", () => {
        let z = {};
        for (let w of q.options) {
          let H = w._zod.propValues;
          if (!H || Object.keys(H).length === 0)
            throw Error(
              `Invalid discriminated union option at index "${q.options.indexOf(w)}"`,
            );
          for (let [$, O] of Object.entries(H)) {
            if (!z[$]) z[$] = new Set();
            for (let _ of O) z[$].add(_);
          }
        }
        return z;
      });
      let Y = nv1(() => {
        let z = q.options,
          w = new Map();
        for (let H of z) {
          let $ = H._zod.propValues[q.discriminator];
          if (!$ || $.size === 0)
            throw Error(
              `Invalid discriminated union option at index "${q.options.indexOf(H)}"`,
            );
          for (let O of $) {
            if (w.has(O))
              throw Error(`Duplicate discriminator value "${String(O)}"`);
            w.set(O, H);
          }
        }
        return w;
      });
      A._zod.parse = (z, w) => {
        let H = z.value;
        if (!CH1(H))
          return (
            z.issues.push({
              code: "invalid_type",
              expected: "object",
              input: H,
              inst: A,
            }),
            z
          );
        let $ = Y.value.get(H?.[q.discriminator]);
        if ($) return $._zod.run(z, w);
        if (q.unionFallback) return K(z, w);
        return (
          z.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            input: H,
            path: [q.discriminator],
            inst: A,
          }),
          z
        );
      };
    })),
    (hB6 = PA("$ZodIntersection", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = K.value,
            w = q.left._zod.run({ value: z, issues: [] }, Y),
            H = q.right._zod.run({ value: z, issues: [] }, Y);
          if (w instanceof Promise || H instanceof Promise)
            return Promise.all([w, H]).then(([O, _]) => {
              return bw8(K, O, _);
            });
          return bw8(K, w, H);
        }));
    })));
  IA1 = PA("$ZodTuple", (A, q) => {
    V3.init(A, q);
    let K = q.items,
      Y =
        K.length -
        [...K].reverse().findIndex((z) => z._zod.optin !== "optional");
    A._zod.parse = (z, w) => {
      let H = z.value;
      if (!Array.isArray(H))
        return (
          z.issues.push({
            input: H,
            inst: A,
            expected: "tuple",
            code: "invalid_type",
          }),
          z
        );
      z.value = [];
      let $ = [];
      if (!q.rest) {
        let _ = H.length > K.length,
          J = H.length < Y - 1;
        if (_ || J)
          return (
            z.issues.push({
              input: H,
              inst: A,
              origin: "array",
              ...(_
                ? { code: "too_big", maximum: K.length }
                : { code: "too_small", minimum: K.length }),
            }),
            z
          );
      }
      let O = -1;
      for (let _ of K) {
        if ((O++, O >= H.length)) {
          if (O >= Y) continue;
        }
        let J = _._zod.run({ value: H[O], issues: [] }, w);
        if (J instanceof Promise) $.push(J.then((X) => cs1(X, z, O)));
        else cs1(J, z, O);
      }
      if (q.rest) {
        let _ = H.slice(K.length);
        for (let J of _) {
          O++;
          let X = q.rest._zod.run({ value: J, issues: [] }, w);
          if (X instanceof Promise) $.push(X.then((j) => cs1(j, z, O)));
          else cs1(X, z, O);
        }
      }
      if ($.length) return Promise.all($).then(() => z);
      return z;
    };
  });
  ((IB6 = PA("$ZodRecord", (A, q) => {
    (V3.init(A, q),
      (A._zod.parse = (K, Y) => {
        let z = K.value;
        if (!SH1(z))
          return (
            K.issues.push({
              expected: "record",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        let w = [];
        if (q.keyType._zod.values) {
          let H = q.keyType._zod.values;
          K.value = {};
          for (let O of H)
            if (
              typeof O === "string" ||
              typeof O === "number" ||
              typeof O === "symbol"
            ) {
              let _ = q.valueType._zod.run({ value: z[O], issues: [] }, Y);
              if (_ instanceof Promise)
                w.push(
                  _.then((J) => {
                    if (J.issues.length) K.issues.push(...nf(O, J.issues));
                    K.value[O] = J.value;
                  }),
                );
              else {
                if (_.issues.length) K.issues.push(...nf(O, _.issues));
                K.value[O] = _.value;
              }
            }
          let $;
          for (let O in z) if (!H.has(O)) (($ = $ ?? []), $.push(O));
          if ($ && $.length > 0)
            K.issues.push({
              code: "unrecognized_keys",
              input: z,
              inst: A,
              keys: $,
            });
        } else {
          K.value = {};
          for (let H of Reflect.ownKeys(z)) {
            if (H === "__proto__") continue;
            let $ = q.keyType._zod.run({ value: H, issues: [] }, Y);
            if ($ instanceof Promise)
              throw Error(
                "Async schemas not supported in object keys currently",
              );
            if ($.issues.length) {
              (K.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: $.issues.map((_) => BT(_, Y, DX())),
                input: H,
                path: [H],
                inst: A,
              }),
                (K.value[$.value] = $.value));
              continue;
            }
            let O = q.valueType._zod.run({ value: z[H], issues: [] }, Y);
            if (O instanceof Promise)
              w.push(
                O.then((_) => {
                  if (_.issues.length) K.issues.push(...nf(H, _.issues));
                  K.value[$.value] = _.value;
                }),
              );
            else {
              if (O.issues.length) K.issues.push(...nf(H, O.issues));
              K.value[$.value] = O.value;
            }
          }
        }
        if (w.length) return Promise.all(w).then(() => K);
        return K;
      }));
  })),
    (xB6 = PA("$ZodMap", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (!(z instanceof Map))
            return (
              K.issues.push({
                expected: "map",
                code: "invalid_type",
                input: z,
                inst: A,
              }),
              K
            );
          let w = [];
          K.value = new Map();
          for (let [H, $] of z) {
            let O = q.keyType._zod.run({ value: H, issues: [] }, Y),
              _ = q.valueType._zod.run({ value: $, issues: [] }, Y);
            if (O instanceof Promise || _ instanceof Promise)
              w.push(
                Promise.all([O, _]).then(([J, X]) => {
                  uw8(J, X, K, H, z, A, Y);
                }),
              );
            else uw8(O, _, K, H, z, A, Y);
          }
          if (w.length) return Promise.all(w).then(() => K);
          return K;
        }));
    })));
  bB6 = PA("$ZodSet", (A, q) => {
    (V3.init(A, q),
      (A._zod.parse = (K, Y) => {
        let z = K.value;
        if (!(z instanceof Set))
          return (
            K.issues.push({
              input: z,
              inst: A,
              expected: "set",
              code: "invalid_type",
            }),
            K
          );
        let w = [];
        K.value = new Set();
        for (let H of z) {
          let $ = q.valueType._zod.run({ value: H, issues: [] }, Y);
          if ($ instanceof Promise) w.push($.then((O) => Bw8(O, K)));
          else Bw8($, K);
        }
        if (w.length) return Promise.all(w).then(() => K);
        return K;
      }));
  });
  ((uB6 = PA("$ZodEnum", (A, q) => {
    V3.init(A, q);
    let K = iv1(q.entries);
    ((A._zod.values = new Set(K)),
      (A._zod.pattern = new RegExp(
        `^(${K.filter((Y) => av1.has(typeof Y))
          .map((Y) => (typeof Y === "string" ? lQ(Y) : Y.toString()))
          .join("|")})$`,
      )),
      (A._zod.parse = (Y, z) => {
        let w = Y.value;
        if (A._zod.values.has(w)) return Y;
        return (
          Y.issues.push({
            code: "invalid_value",
            values: K,
            input: w,
            inst: A,
          }),
          Y
        );
      }));
  })),
    (BB6 = PA("$ZodLiteral", (A, q) => {
      (V3.init(A, q),
        (A._zod.values = new Set(q.values)),
        (A._zod.pattern = new RegExp(
          `^(${q.values.map((K) => (typeof K === "string" ? lQ(K) : K ? K.toString() : String(K))).join("|")})$`,
        )),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (A._zod.values.has(z)) return K;
          return (
            K.issues.push({
              code: "invalid_value",
              values: q.values,
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (mB6 = PA("$ZodFile", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = K.value;
          if (z instanceof File) return K;
          return (
            K.issues.push({
              expected: "file",
              code: "invalid_type",
              input: z,
              inst: A,
            }),
            K
          );
        }));
    })),
    (HE1 = PA("$ZodTransform", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          let z = q.transform(K.value, K);
          if (Y.async)
            return (z instanceof Promise ? z : Promise.resolve(z)).then((H) => {
              return ((K.value = H), K);
            });
          if (z instanceof Promise) throw new cQ();
          return ((K.value = z), K);
        }));
    })),
    (FB6 = PA("$ZodOptional", (A, q) => {
      (V3.init(A, q),
        (A._zod.optin = "optional"),
        (A._zod.optout = "optional"),
        Lz(A._zod, "values", () => {
          return q.innerType._zod.values
            ? new Set([...q.innerType._zod.values, void 0])
            : void 0;
        }),
        Lz(A._zod, "pattern", () => {
          let K = q.innerType._zod.pattern;
          return K ? new RegExp(`^(${rv1(K.source)})?$`) : void 0;
        }),
        (A._zod.parse = (K, Y) => {
          if (q.innerType._zod.optin === "optional")
            return q.innerType._zod.run(K, Y);
          if (K.value === void 0) return K;
          return q.innerType._zod.run(K, Y);
        }));
    })),
    (QB6 = PA("$ZodNullable", (A, q) => {
      (V3.init(A, q),
        Lz(A._zod, "optin", () => q.innerType._zod.optin),
        Lz(A._zod, "optout", () => q.innerType._zod.optout),
        Lz(A._zod, "pattern", () => {
          let K = q.innerType._zod.pattern;
          return K ? new RegExp(`^(${rv1(K.source)}|null)$`) : void 0;
        }),
        Lz(A._zod, "values", () => {
          return q.innerType._zod.values
            ? new Set([...q.innerType._zod.values, null])
            : void 0;
        }),
        (A._zod.parse = (K, Y) => {
          if (K.value === null) return K;
          return q.innerType._zod.run(K, Y);
        }));
    })),
    (gB6 = PA("$ZodDefault", (A, q) => {
      (V3.init(A, q),
        (A._zod.optin = "optional"),
        Lz(A._zod, "values", () => q.innerType._zod.values),
        (A._zod.parse = (K, Y) => {
          if (K.value === void 0) return ((K.value = q.defaultValue), K);
          let z = q.innerType._zod.run(K, Y);
          if (z instanceof Promise) return z.then((w) => mw8(w, q));
          return mw8(z, q);
        }));
    })));
  ((UB6 = PA("$ZodPrefault", (A, q) => {
    (V3.init(A, q),
      (A._zod.optin = "optional"),
      Lz(A._zod, "values", () => q.innerType._zod.values),
      (A._zod.parse = (K, Y) => {
        if (K.value === void 0) K.value = q.defaultValue;
        return q.innerType._zod.run(K, Y);
      }));
  })),
    (pB6 = PA("$ZodNonOptional", (A, q) => {
      (V3.init(A, q),
        Lz(A._zod, "values", () => {
          let K = q.innerType._zod.values;
          return K ? new Set([...K].filter((Y) => Y !== void 0)) : void 0;
        }),
        (A._zod.parse = (K, Y) => {
          let z = q.innerType._zod.run(K, Y);
          if (z instanceof Promise) return z.then((w) => Fw8(w, A));
          return Fw8(z, A);
        }));
    })));
  ((dB6 = PA("$ZodSuccess", (A, q) => {
    (V3.init(A, q),
      (A._zod.parse = (K, Y) => {
        let z = q.innerType._zod.run(K, Y);
        if (z instanceof Promise)
          return z.then((w) => {
            return ((K.value = w.issues.length === 0), K);
          });
        return ((K.value = z.issues.length === 0), K);
      }));
  })),
    (cB6 = PA("$ZodCatch", (A, q) => {
      (V3.init(A, q),
        (A._zod.optin = "optional"),
        Lz(A._zod, "optout", () => q.innerType._zod.optout),
        Lz(A._zod, "values", () => q.innerType._zod.values),
        (A._zod.parse = (K, Y) => {
          let z = q.innerType._zod.run(K, Y);
          if (z instanceof Promise)
            return z.then((w) => {
              if (((K.value = w.value), w.issues.length))
                ((K.value = q.catchValue({
                  ...K,
                  error: { issues: w.issues.map((H) => BT(H, Y, DX())) },
                  input: K.value,
                })),
                  (K.issues = []));
              return K;
            });
          if (((K.value = z.value), z.issues.length))
            ((K.value = q.catchValue({
              ...K,
              error: { issues: z.issues.map((w) => BT(w, Y, DX())) },
              input: K.value,
            })),
              (K.issues = []));
          return K;
        }));
    })),
    (lB6 = PA("$ZodNaN", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          if (typeof K.value !== "number" || !Number.isNaN(K.value))
            return (
              K.issues.push({
                input: K.value,
                inst: A,
                expected: "nan",
                code: "invalid_type",
              }),
              K
            );
          return K;
        }));
    })),
    ($E1 = PA("$ZodPipe", (A, q) => {
      (V3.init(A, q),
        Lz(A._zod, "values", () => q.in._zod.values),
        Lz(A._zod, "optin", () => q.in._zod.optin),
        Lz(A._zod, "optout", () => q.out._zod.optout),
        (A._zod.parse = (K, Y) => {
          let z = q.in._zod.run(K, Y);
          if (z instanceof Promise) return z.then((w) => Qw8(w, q, Y));
          return Qw8(z, q, Y);
        }));
    })));
  iB6 = PA("$ZodReadonly", (A, q) => {
    (V3.init(A, q),
      Lz(A._zod, "propValues", () => q.innerType._zod.propValues),
      Lz(A._zod, "values", () => q.innerType._zod.values),
      Lz(A._zod, "optin", () => q.innerType._zod.optin),
      Lz(A._zod, "optout", () => q.innerType._zod.optout),
      (A._zod.parse = (K, Y) => {
        let z = q.innerType._zod.run(K, Y);
        if (z instanceof Promise) return z.then(gw8);
        return gw8(z);
      }));
  });
  ((nB6 = PA("$ZodTemplateLiteral", (A, q) => {
    V3.init(A, q);
    let K = [];
    for (let Y of q.parts)
      if (Y instanceof V3) {
        if (!Y._zod.pattern)
          throw Error(
            `Invalid template literal part, no pattern found: ${[...Y._zod.traits].shift()}`,
          );
        let z =
          Y._zod.pattern instanceof RegExp
            ? Y._zod.pattern.source
            : Y._zod.pattern;
        if (!z) throw Error(`Invalid template literal part: ${Y._zod.traits}`);
        let w = z.startsWith("^") ? 1 : 0,
          H = z.endsWith("$") ? z.length - 1 : z.length;
        K.push(z.slice(w, H));
      } else if (Y === null || lb6.has(typeof Y)) K.push(lQ(`${Y}`));
      else throw Error(`Invalid template literal part: ${Y}`);
    ((A._zod.pattern = new RegExp(`^${K.join("")}$`)),
      (A._zod.parse = (Y, z) => {
        if (typeof Y.value !== "string")
          return (
            Y.issues.push({
              input: Y.value,
              inst: A,
              expected: "template_literal",
              code: "invalid_type",
            }),
            Y
          );
        if (((A._zod.pattern.lastIndex = 0), !A._zod.pattern.test(Y.value)))
          return (
            Y.issues.push({
              input: Y.value,
              inst: A,
              code: "invalid_format",
              format: "template_literal",
              pattern: A._zod.pattern.source,
            }),
            Y
          );
        return Y;
      }));
  })),
    (rB6 = PA("$ZodPromise", (A, q) => {
      (V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          return Promise.resolve(K.value).then((z) =>
            q.innerType._zod.run({ value: z, issues: [] }, Y),
          );
        }));
    })),
    (aB6 = PA("$ZodLazy", (A, q) => {
      (V3.init(A, q),
        Lz(A._zod, "innerType", () => q.getter()),
        Lz(A._zod, "pattern", () => A._zod.innerType._zod.pattern),
        Lz(A._zod, "propValues", () => A._zod.innerType._zod.propValues),
        Lz(A._zod, "optin", () => A._zod.innerType._zod.optin),
        Lz(A._zod, "optout", () => A._zod.innerType._zod.optout),
        (A._zod.parse = (K, Y) => {
          return A._zod.innerType._zod.run(K, Y);
        }));
    })),
    (oB6 = PA("$ZodCustom", (A, q) => {
      (kO.init(A, q),
        V3.init(A, q),
        (A._zod.parse = (K, Y) => {
          return K;
        }),
        (A._zod.check = (K) => {
          let Y = K.value,
            z = q.fn(Y);
          if (z instanceof Promise) return z.then((w) => Uw8(w, K, Y, A));
          Uw8(z, K, Y, A);
          return;
        }));
    })));
