// Module: G91 (lazy)
// Dependencies: [F6, j8, Z6, u6, v7, C6, kz, X$6, uo, X31, Xd, D31, fU4, kU1, Ae, gG6, Bd4, bG1, RN, LyA, yU1, o2, zq, G4]
// Pre-declarations: var wG;
// Lines: 407177-407525 in cli.formatted.js
// ---

var wG;

  u6();
  X$6();
  zq();
  v7();
  F6();
  Xd();
  fU4();
  D31();
  o2();
  kz();
  j8();
  X31();
  Ae();
  kU1();
  C6();
  Z6();
  gG6();
  Bd4();
  RN();
  bG1();
  LyA();
  G4();
  yU1();
  LA();
  uo();
  wG = {
    name: bq,
    maxResultSizeChars: 1e5,
    strict: !0,
    async description() {
      return "A tool for editing files";
    },
    async prompt() {
      return ZU4();
    },
    userFacingName: nG6,
    getToolUseSummary: kyA,
    getActivityDescription(A) {
      let q = kyA(A);
      return q ? `Editing ${q}` : "Editing file";
    },
    isEnabled() {
      return !0;
    },
    get inputSchema() {
      return QG6();
    },
    get outputSchema() {
      return bd4();
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    getPath(A) {
      return A.file_path;
    },
    async checkPermissions(A, q) {
      let K = await q.getAppState();
      return Z91(wG, A, K.toolPermissionContext);
    },
    renderToolUseMessage: Oc4,
    renderToolUseProgressMessage: _c4,
    renderToolResultMessage: Jc4,
    renderToolUseRejectedMessage: Xc4,
    renderToolUseErrorMessage: jc4,
    async validateInput(
      { file_path: A, old_string: q, new_string: K, replace_all: Y = !1 },
      z,
    ) {
      if (q === K)
        return {
          result: !1,
          behavior: "ask",
          message:
            "No changes to make: old_string and new_string are exactly the same.",
          errorCode: 1,
        };
      let w = p4(A),
        H = await z.getAppState();
      if (K0(w, H.toolPermissionContext, "edit", "deny") !== null)
        return {
          result: !1,
          behavior: "ask",
          message:
            "File is in a directory that is denied by your permission settings.",
          errorCode: 2,
        };
      if (w.startsWith("\\\\") || w.startsWith("//")) return { result: !0 };
      let O = u1();
      if (O.existsSync(w) && q === "") {
        if (
          O.readFileSync(w, { encoding: JX(w) })
            .replaceAll(
              `\r
`,
              `
`,
            )
            .trim() !== ""
        )
          return {
            result: !1,
            behavior: "ask",
            message: "Cannot create new file - file already exists.",
            errorCode: 3,
          };
        return { result: !0 };
      }
      if (!O.existsSync(w) && q === "") return { result: !0 };
      if (!O.existsSync(w)) {
        let M = V$6(w),
          P = "File does not exist.",
          W = I6(),
          G = R8();
        if (W !== G) P += ` Current working directory: ${W}`;
        if (M) P += ` Did you mean ${M}?`;
        return { result: !1, behavior: "ask", message: P, errorCode: 4 };
      }
      if (w.endsWith(".ipynb"))
        return {
          result: !1,
          behavior: "ask",
          message: `File is a Jupyter Notebook. Use the ${vM} to edit this file.`,
          errorCode: 5,
        };
      let _ = z.readFileState.get(w);
      if (!_)
        return {
          result: !1,
          behavior: "ask",
          message:
            "File has not been read yet. Read it first before writing to it.",
          meta: { isFilePathAbsolute: String(CyA(A)) },
          errorCode: 6,
        };
      if (_) {
        if (yE(w) > _.timestamp)
          if (_.offset === void 0 && _.limit === void 0)
            if (
              O.readFileSync(w, { encoding: JX(w) }).replaceAll(
                `\r
`,
                `
`,
              ) === _.content
            );
            else
              return {
                result: !1,
                behavior: "ask",
                message:
                  "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
                errorCode: 7,
              };
          else
            return {
              result: !1,
              behavior: "ask",
              message:
                "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
              errorCode: 7,
            };
      }
      let J = O.readFileSync(w, { encoding: JX(w) }).replaceAll(
          `\r
`,
          `
`,
        ),
        X = j31(J, q);
      if (!X)
        return {
          result: !1,
          behavior: "ask",
          message: `String to replace not found in file.
String: ${q}`,
          meta: { isFilePathAbsolute: String(CyA(A)) },
          errorCode: 8,
        };
      let j = J.split(X).length - 1;
      if (j > 1 && !Y)
        return {
          result: !1,
          behavior: "ask",
          message: `Found ${j} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${q}`,
          meta: { isFilePathAbsolute: String(CyA(A)), actualOldString: X },
          errorCode: 9,
        };
      let D = ud4(w, J, () => {
        return Y ? J.replaceAll(X, K) : J.replace(X, K);
      });
      if (D !== null) return D;
      return { result: !0, meta: { actualOldString: X } };
    },
    inputsEquivalent(A, q) {
      return Tr7(
        {
          file_path: A.file_path,
          edits: [
            {
              old_string: A.old_string,
              new_string: A.new_string,
              replace_all: A.replace_all ?? !1,
            },
          ],
        },
        {
          file_path: q.file_path,
          edits: [
            {
              old_string: q.old_string,
              new_string: q.new_string,
              replace_all: q.replace_all ?? !1,
            },
          ],
        },
      );
    },
    async call(
      { file_path: A, old_string: q, new_string: K, replace_all: Y = !1 },
      {
        readFileState: z,
        userModified: w,
        updateFileHistoryState: H,
        dynamicSkillDirTriggers: $,
      },
      O,
      _,
    ) {
      let J = u1(),
        X = p4(A),
        j = I6(),
        D = M01([X], j);
      if (D.length > 0) {
        for (let B of D) $?.add(B);
        P01(D).catch(() => {});
      }
      (W01([X], j), await Jd.beforeFileEdited(X));
      let M = J.existsSync(X) ? PJ(X) : "";
      if (J.existsSync(X)) {
        let B = yE(X),
          S = z.get(X);
        if (!S || B > S.timestamp) {
          if (
            !(S && S.offset === void 0 && S.limit === void 0 && M === S.content)
          )
            throw Error(_S1);
        }
      }
      if (J2()) await Ye(H, X, _.uuid);
      let P = j31(M, q) || q,
        { patch: W, updatedFile: G } = BX6({
          filePath: X,
          fileContents: M,
          oldString: P,
          newString: K,
          replaceAll: Y,
        }),
        V = AxY(X);
      J.mkdirSync(V);
      let Z = J.existsSync(X) ? Wc(X) : "LF",
        N = J.existsSync(X) ? JX(X) : "utf8";
      $e(X, G, N, Z);
      let T = Pc();
      if (T)
        (uG6(`file://${X}`),
          T.changeFile(X, G).catch((B) => {
            (h(
              `LSP: Failed to notify server of file change for ${X}: ${B.message}`,
            ),
              A1(B));
          }),
          T.saveFile(X).catch((B) => {
            (h(
              `LSP: Failed to notify server of file save for ${X}: ${B.message}`,
            ),
              A1(B));
          }));
      if (
        (qe(X, M, G),
        z.set(X, {
          content: G,
          timestamp: yE(X),
          offset: void 0,
          limit: void 0,
        }),
        X.endsWith(`${qxY}CLAUDE.md`))
      )
        c("tengu_write_claudemd", {});
      (bm1(W), Wh({ operation: "edit", tool: "FileEditTool", filePath: X }));
      let k;
      if (
        $6(process.env.CLAUDE_CODE_REMOTE) &&
        D8("tengu_quartz_lantern", !1)
      ) {
        let B = Date.now(),
          S = await aG6(X);
        if (S) k = S;
        c("tengu_tool_use_diff_computed", {
          isEditTool: !0,
          durationMs: Date.now() - B,
          hasDiff: !!S,
        });
      }
      return {
        data: {
          filePath: A,
          oldString: P,
          newString: K,
          originalFile: M,
          structuredPatch: W,
          userModified: w ?? !1,
          replaceAll: Y,
          ...(k && { gitDiff: k }),
        },
      };
    },
    mapToolResultToToolResultBlockParam(
      {
        filePath: A,
        oldString: q,
        newString: K,
        userModified: Y,
        replaceAll: z,
      },
      w,
    ) {
      let H = Y
        ? ".  The user modified your proposed changes before accepting them. "
        : "";
      if (z)
        return {
          tool_use_id: w,
          type: "tool_result",
          content: `The file ${A} has been updated${H}. All occurrences of '${q}' were successfully replaced with '${K}'.`,
        };
      return {
        tool_use_id: w,
        type: "tool_result",
        content: `The file ${A} has been updated successfully${H}.`,
      };
    },
  };
