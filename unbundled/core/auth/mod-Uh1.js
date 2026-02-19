// Module: Uh1 (lazy)
// Dependencies: [pu, t2, Qj, Ga, iu, pO7, yM]
// Lines: 165197-165430 in cli.formatted.js
// ---

  pO7();
  Ga();
  iu();
  Qj();
  pu();
  yM();
  t2();
  ru = class ru extends zY6 {
    constructor(A) {
      var q, K;
      let Y = `azsdk-js-identity/${y96}`,
        z = (
          (q = A === null || A === void 0 ? void 0 : A.userAgentOptions) ===
            null || q === void 0
            ? void 0
            : q.userAgentPrefix
        )
          ? `${A.userAgentOptions.userAgentPrefix} ${Y}`
          : `${Y}`,
        w = fF5(A);
      if (!w.startsWith("https:"))
        throw Error("The authorityHost address must use the 'https' protocol.");
      super(
        Object.assign(
          Object.assign(
            {
              requestContentType: "application/json; charset=utf-8",
              retryOptions: { maxRetries: 3 },
            },
            A,
          ),
          { userAgentOptions: { userAgentPrefix: z }, baseUri: w },
        ),
      );
      if (
        ((this.allowInsecureConnection = !1),
        (this.authorityHost = w),
        (this.abortControllers = new Map()),
        (this.allowLoggingAccountIdentifiers =
          (K = A === null || A === void 0 ? void 0 : A.loggingOptions) ===
            null || K === void 0
            ? void 0
            : K.allowLoggingAccountIdentifiers),
        (this.tokenCredentialOptions = Object.assign({}, A)),
        A === null || A === void 0 ? void 0 : A.allowInsecureConnection)
      )
        this.allowInsecureConnection = A.allowInsecureConnection;
    }
    async sendTokenRequest(A) {
      CV.info(`IdentityClient: sending token request to [${A.url}]`);
      let q = await this.sendRequest(A);
      if (q.bodyAsText && (q.status === 200 || q.status === 201)) {
        let K = JSON.parse(q.bodyAsText);
        if (!K.access_token) return null;
        this.logIdentifiers(q);
        let Y = {
          accessToken: {
            token: K.access_token,
            expiresOnTimestamp: lO7(K),
            refreshAfterTimestamp: iO7(K),
            tokenType: "Bearer",
          },
          refreshToken: K.refresh_token,
        };
        return (
          CV.info(
            `IdentityClient: [${A.url}] token acquired, expires on ${Y.accessToken.expiresOnTimestamp}`,
          ),
          Y
        );
      } else {
        let K = new uS(q.status, q.bodyAsText);
        throw (
          CV.warning(
            `IdentityClient: authentication error. HTTP status: ${q.status}, ${K.errorResponse.errorDescription}`,
          ),
          K
        );
      }
    }
    async refreshAccessToken(A, q, K, Y, z, w = {}) {
      if (Y === void 0) return null;
      CV.info(
        `IdentityClient: refreshing access token with client ID: ${q}, scopes: ${K} started`,
      );
      let H = {
        grant_type: "refresh_token",
        client_id: q,
        refresh_token: Y,
        scope: K,
      };
      if (z !== void 0) H.client_secret = z;
      let $ = new URLSearchParams(H);
      return yY.withSpan("IdentityClient.refreshAccessToken", w, async (O) => {
        try {
          let _ = dO7(A),
            J = yv({
              url: `${this.authorityHost}/${A}/${_}`,
              method: "POST",
              body: $.toString(),
              abortSignal: w.abortSignal,
              headers: RU({
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
              }),
              tracingOptions: O.tracingOptions,
            }),
            X = await this.sendTokenRequest(J);
          return (
            CV.info(`IdentityClient: refreshed token for client ID: ${q}`),
            X
          );
        } catch (_) {
          if (
            _.name === Nh1 &&
            _.errorResponse.error === "interaction_required"
          )
            return (
              CV.info(
                `IdentityClient: interaction required for client ID: ${q}`,
              ),
              null
            );
          else
            throw (
              CV.warning(
                `IdentityClient: failed refreshing token for client ID: ${q}: ${_}`,
              ),
              _
            );
        }
      });
    }
    generateAbortSignal(A) {
      let q = new AbortController(),
        K = this.abortControllers.get(A) || [];
      (K.push(q), this.abortControllers.set(A, K));
      let Y = q.signal.onabort;
      return (
        (q.signal.onabort = (...z) => {
          if ((this.abortControllers.set(A, void 0), Y)) Y.apply(q.signal, z);
        }),
        q.signal
      );
    }
    abortRequests(A) {
      let q = A || gh1,
        K = [
          ...(this.abortControllers.get(q) || []),
          ...(this.abortControllers.get(gh1) || []),
        ];
      if (!K.length) return;
      for (let Y of K) Y.abort();
      this.abortControllers.set(q, void 0);
    }
    getCorrelationId(A) {
      var q;
      let K =
        (q = A === null || A === void 0 ? void 0 : A.body) === null ||
        q === void 0
          ? void 0
          : q
              .split("&")
              .map((Y) => Y.split("="))
              .find(([Y]) => Y === "client-request-id");
      return K && K.length ? K[1] || gh1 : gh1;
    }
    async sendGetRequestAsync(A, q) {
      let K = yv({
          url: A,
          method: "GET",
          body: q === null || q === void 0 ? void 0 : q.body,
          allowInsecureConnection: this.allowInsecureConnection,
          headers: RU(q === null || q === void 0 ? void 0 : q.headers),
          abortSignal: this.generateAbortSignal(gh1),
        }),
        Y = await this.sendRequest(K);
      return (
        this.logIdentifiers(Y),
        {
          body: Y.bodyAsText ? JSON.parse(Y.bodyAsText) : void 0,
          headers: Y.headers.toJSON(),
          status: Y.status,
        }
      );
    }
    async sendPostRequestAsync(A, q) {
      let K = yv({
          url: A,
          method: "POST",
          body: q === null || q === void 0 ? void 0 : q.body,
          headers: RU(q === null || q === void 0 ? void 0 : q.headers),
          allowInsecureConnection: this.allowInsecureConnection,
          abortSignal: this.generateAbortSignal(this.getCorrelationId(q)),
        }),
        Y = await this.sendRequest(K);
      return (
        this.logIdentifiers(Y),
        {
          body: Y.bodyAsText ? JSON.parse(Y.bodyAsText) : void 0,
          headers: Y.headers.toJSON(),
          status: Y.status,
        }
      );
    }
    getTokenCredentialOptions() {
      return this.tokenCredentialOptions;
    }
    logIdentifiers(A) {
      if (!this.allowLoggingAccountIdentifiers || !A.bodyAsText) return;
      let q = "No User Principal Name available";
      try {
        let Y = (A.parsedBody || JSON.parse(A.bodyAsText)).access_token;
        if (!Y) return;
        let z = Y.split(".")[1],
          {
            appid: w,
            upn: H,
            tid: $,
            oid: O,
          } = JSON.parse(Buffer.from(z, "base64").toString("utf8"));
        CV.info(
          `[Authenticated account] Client ID: ${w}. Tenant ID: ${$}. User Principal Name: ${H || q}. Object ID (user): ${O}`,
        );
      } catch (K) {
        CV.warning(
          "allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:",
          K.message,
        );
      }
    }
  };
