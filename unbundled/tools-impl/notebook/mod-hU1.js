// Module: hU1 (lazy)
// Dependencies: [Q6, j8, v7, kw, n7, iH6, RN, sc4, o2, zq]
// Pre-declarations: var ZxY, fxY, Gc;
// Lines: 408976-409303 in cli.formatted.js
// ---

var ZxY, fxY, Gc;

  n7();
  iH6();
  zq();
  kw();
  v7();
  o2();
  j8();
  RN();
  sc4();
  Q6();
  ((ZxY = L6(() =>
    x.strictObject({
      notebook_path: x
        .string()
        .describe(
          "The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)",
        ),
      cell_id: x
        .string()
        .optional()
        .describe(
          "The ID of the cell to edit. When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified.",
        ),
      new_source: x.string().describe("The new source for the cell"),
      cell_type: x
        .enum(["code", "markdown"])
        .optional()
        .describe(
          "The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required.",
        ),
      edit_mode: x
        .enum(["replace", "insert", "delete"])
        .optional()
        .describe(
          "The type of edit to make (replace, insert, delete). Defaults to replace.",
        ),
    }),
  )),
    (fxY = L6(() =>
      x.object({
        new_source: x
          .string()
          .describe("The new source code that was written to the cell"),
        cell_id: x
          .string()
          .optional()
          .describe("The ID of the cell that was edited"),
        cell_type: x
          .enum(["code", "markdown"])
          .describe("The type of the cell"),
        language: x
          .string()
          .describe("The programming language of the notebook"),
        edit_mode: x.string().describe("The edit mode that was used"),
        error: x
          .string()
          .optional()
          .describe("Error message if the operation failed"),
        notebook_path: x.string().describe("The path to the notebook file"),
        original_file: x
          .string()
          .describe("The original notebook content before modification"),
        updated_file: x
          .string()
          .describe("The updated notebook content after modification"),
      }),
    )),
    (Gc = {
      name: vM,
      maxResultSizeChars: 1e5,
      shouldDefer: !0,
      async description() {
        return pc4;
      },
      async prompt() {
        return dc4;
      },
      userFacingName() {
        return "Edit Notebook";
      },
      getToolUseSummary: myA,
      getActivityDescription(A) {
        let q = myA(A);
        return q ? `Editing notebook ${q}` : "Editing notebook";
      },
      isEnabled() {
        return !0;
      },
      get inputSchema() {
        return ZxY();
      },
      get outputSchema() {
        return fxY();
      },
      isConcurrencySafe() {
        return !1;
      },
      isReadOnly() {
        return !1;
      },
      getPath(A) {
        return A.notebook_path;
      },
      async checkPermissions(A, q) {
        let K = await q.getAppState();
        return Z91(Gc, A, K.toolPermissionContext);
      },
      mapToolResultToToolResultBlockParam(
        { cell_id: A, edit_mode: q, new_source: K, error: Y },
        z,
      ) {
        if (Y)
          return {
            tool_use_id: z,
            type: "tool_result",
            content: Y,
            is_error: !0,
          };
        switch (q) {
          case "replace":
            return {
              tool_use_id: z,
              type: "tool_result",
              content: `Updated cell ${A} with ${K}`,
            };
          case "insert":
            return {
              tool_use_id: z,
              type: "tool_result",
              content: `Inserted cell ${A} with ${K}`,
            };
          case "delete":
            return {
              tool_use_id: z,
              type: "tool_result",
              content: `Deleted cell ${A}`,
            };
          default:
            return {
              tool_use_id: z,
              type: "tool_result",
              content: "Unknown edit mode",
            };
        }
      },
      renderToolUseMessage: ic4,
      renderToolUseRejectedMessage: nc4,
      renderToolUseErrorMessage: rc4,
      renderToolUseProgressMessage: ac4,
      renderToolResultMessage: oc4,
      async validateInput({
        notebook_path: A,
        cell_type: q,
        cell_id: K,
        edit_mode: Y = "replace",
      }) {
        let z = tc4(A) ? A : ec4(I6(), A);
        if (z.startsWith("\\\\") || z.startsWith("//")) return { result: !0 };
        let w = u1();
        if (!w.existsSync(z))
          return {
            result: !1,
            message: "Notebook file does not exist.",
            errorCode: 1,
          };
        if (GxY(z) !== ".ipynb")
          return {
            result: !1,
            message:
              "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
            errorCode: 2,
          };
        if (Y !== "replace" && Y !== "insert" && Y !== "delete")
          return {
            result: !1,
            message: "Edit mode must be replace, insert, or delete.",
            errorCode: 4,
          };
        if (Y === "insert" && !q)
          return {
            result: !1,
            message: "Cell type is required when using edit_mode=insert.",
            errorCode: 5,
          };
        let H = JX(z),
          $ = w.readFileSync(z, { encoding: H }),
          O = p5($);
        if (!O)
          return {
            result: !1,
            message: "Notebook is not valid JSON.",
            errorCode: 6,
          };
        if (!K) {
          if (Y !== "insert")
            return {
              result: !1,
              message:
                "Cell ID must be specified when not inserting a new cell.",
              errorCode: 7,
            };
        } else if (O.cells.findIndex((J) => J.id === K) === -1) {
          let J = nb1(K);
          if (J !== void 0) {
            if (!O.cells[J])
              return {
                result: !1,
                message: `Cell with index ${J} does not exist in notebook.`,
                errorCode: 7,
              };
          } else
            return {
              result: !1,
              message: `Cell with ID "${K}" not found in notebook.`,
              errorCode: 8,
            };
        }
        return { result: !0 };
      },
      async call(
        {
          notebook_path: A,
          new_source: q,
          cell_id: K,
          cell_type: Y,
          edit_mode: z,
        },
        { updateFileHistoryState: w },
        H,
        $,
      ) {
        let O = tc4(A) ? A : ec4(I6(), A);
        if (J2()) await Ye(w, O, $.uuid);
        try {
          let _ = JX(O),
            J = u1().readFileSync(O, { encoding: _ }),
            X = jA(J),
            j;
          if (!K) j = 0;
          else {
            if (((j = X.cells.findIndex((Z) => Z.id === K)), j === -1)) {
              let Z = nb1(K);
              if (Z !== void 0) j = Z;
            }
            if (z === "insert") j += 1;
          }
          let D = z;
          if (D === "replace" && j === X.cells.length) {
            if (((D = "insert"), !Y)) Y = "code";
          }
          let M = X.metadata.language_info?.name ?? "python",
            P = void 0;
          if (X.nbformat > 4 || (X.nbformat === 4 && X.nbformat_minor >= 5)) {
            if (D === "insert") P = Math.random().toString(36).substring(2, 15);
            else if (K !== null) P = K;
          }
          if (D === "delete") X.cells.splice(j, 1);
          else if (D === "insert") {
            let Z;
            if (Y === "markdown")
              Z = { cell_type: "markdown", id: P, source: q, metadata: {} };
            else
              Z = {
                cell_type: "code",
                id: P,
                source: q,
                metadata: {},
                execution_count: null,
                outputs: [],
              };
            X.cells.splice(j, 0, Z);
          } else {
            let Z = X.cells[j];
            if (((Z.source = q), Z.cell_type === "code"))
              ((Z.execution_count = null), (Z.outputs = []));
            if (Y && Y !== Z.cell_type) Z.cell_type = Y;
          }
          let W = Wc(O),
            G = F1(X, null, 1);
          return (
            $e(O, G, _, W),
            {
              data: {
                new_source: q,
                cell_type: Y ?? "code",
                language: M,
                edit_mode: D ?? "replace",
                cell_id: P || void 0,
                error: "",
                notebook_path: O,
                original_file: J,
                updated_file: G,
              },
            }
          );
        } catch (_) {
          if (_ instanceof Error)
            return {
              data: {
                new_source: q,
                cell_type: Y ?? "code",
                language: "python",
                edit_mode: "replace",
                error: _.message,
                cell_id: K,
                notebook_path: O,
                original_file: "",
                updated_file: "",
              },
            };
          return {
            data: {
              new_source: q,
              cell_type: Y ?? "code",
              language: "python",
              edit_mode: "replace",
              error: "Unknown error occurred while editing notebook",
              cell_id: K,
              notebook_path: O,
              original_file: "",
              updated_file: "",
            },
          };
        }
      },
    }));
