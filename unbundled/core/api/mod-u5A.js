// Module: u5A (lazy)
// Dependencies: [QC1, zU, k96, Qw7, pw7]
// Pre-declarations: var b5A;
// Lines: 161255-161324 in cli.formatted.js
// ---

var b5A;

  Qw7();
  k96();
  pw7();
  zU();
  zU();
  QC1();
  b5A = class b5A extends ZS {
    constructor({
      baseURL: A = R96("ANTHROPIC_FOUNDRY_BASE_URL"),
      apiKey: q = R96("ANTHROPIC_FOUNDRY_API_KEY"),
      resource: K = R96("ANTHROPIC_FOUNDRY_RESOURCE"),
      azureADTokenProvider: Y,
      dangerouslyAllowBrowser: z,
      ...w
    } = {}) {
      if (typeof Y === "function") z = !0;
      if (!Y && !q)
        throw new a7(
          "Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.",
        );
      if (Y && q)
        throw new a7(
          "The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.",
        );
      if (!A) {
        if (!K)
          throw new a7(
            "Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable",
          );
        A = `https://${K}.services.ai.azure.com/anthropic/`;
      } else if (K) throw new a7("baseURL and resource are mutually exclusive");
      super({
        apiKey: Y ?? q,
        baseURL: A,
        ...w,
        ...(z !== void 0 ? { dangerouslyAllowBrowser: z } : {}),
      });
      ((this.resource = null),
        (this.messages = WB5(this)),
        (this.beta = GB5(this)),
        (this.models = void 0));
    }
    async authHeaders() {
      if (typeof this._options.apiKey === "function") {
        let A;
        try {
          A = await this._options.apiKey();
        } catch (q) {
          if (q instanceof a7) throw q;
          throw new a7(
            `Failed to get token from azureADTokenProvider: ${q.message}`,
            { cause: q },
          );
        }
        if (typeof A !== "string" || !A)
          throw new a7(
            `Expected azureADTokenProvider function argument to return a string but it returned ${A}`,
          );
        return x5A([{ Authorization: `Bearer ${A}` }]);
      }
      if (typeof this._options.apiKey === "string")
        return x5A([{ "x-api-key": this.apiKey }]);
      return;
    }
    validateHeaders() {
      return;
    }
  };
