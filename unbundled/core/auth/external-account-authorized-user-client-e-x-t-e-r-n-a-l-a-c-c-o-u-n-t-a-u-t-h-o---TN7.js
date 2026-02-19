// Module: TN7 (cjs)
// Dependencies: [sS, XB, pHA, qo]
// Exports: ExternalAccountAuthorizedUserClient, EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE
// Lines: 202767-202916 in cli.formatted.js
// ---

  Object.defineProperty(VN7, "__esModule", { value: !0 });
  VN7.ExternalAccountAuthorizedUserClient =
    VN7.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var u89 = XB(),
    ZN7 = pHA(),
    B89 = sS(),
    m89 = h1("stream"),
    F89 = qo();
  VN7.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE =
    "external_account_authorized_user";
  var Q89 = "https://sts.{universeDomain}/v1/oauthtoken";
  class Z$A extends ZN7.OAuthClientAuthHandler {
    constructor(A, q, K) {
      super(K);
      ((this.url = A), (this.transporter = q));
    }
    async refreshToken(A, q) {
      let K = new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: A,
        }),
        Y = { "Content-Type": "application/x-www-form-urlencoded", ...q },
        z = {
          ...Z$A.RETRY_CONFIG,
          url: this.url,
          method: "POST",
          headers: Y,
          data: K.toString(),
          responseType: "json",
        };
      this.applyClientAuthenticationOptions(z);
      try {
        let w = await this.transporter.request(z),
          H = w.data;
        return ((H.res = w), H);
      } catch (w) {
        if (w instanceof B89.GaxiosError && w.response)
          throw (0, ZN7.getErrorFromOAuthErrorResponse)(w.response.data, w);
        throw w;
      }
    }
  }
  class fN7 extends u89.AuthClient {
    constructor(A, q) {
      var K;
      super({ ...A, ...q });
      if (A.universe_domain) this.universeDomain = A.universe_domain;
      this.refreshToken = A.refresh_token;
      let Y = {
        confidentialClientType: "basic",
        clientId: A.client_id,
        clientSecret: A.client_secret,
      };
      if (
        ((this.externalAccountAuthorizedUserHandler = new Z$A(
          (K = A.token_url) !== null && K !== void 0
            ? K
            : Q89.replace("{universeDomain}", this.universeDomain),
          this.transporter,
          Y,
        )),
        (this.cachedAccessToken = null),
        (this.quotaProjectId = A.quota_project_id),
        typeof (q === null || q === void 0
          ? void 0
          : q.eagerRefreshThresholdMillis) !== "number")
      )
        this.eagerRefreshThresholdMillis = F89.EXPIRATION_TIME_OFFSET;
      else this.eagerRefreshThresholdMillis = q.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = !!(q === null || q === void 0
        ? void 0
        : q.forceRefreshOnFailure);
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken))
        await this.refreshAccessTokenAsync();
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res,
      };
    }
    async getRequestHeaders() {
      let q = {
        Authorization: `Bearer ${(await this.getAccessToken()).token}`,
      };
      return this.addSharedMetadataHeaders(q);
    }
    request(A, q) {
      if (q)
        this.requestAsync(A).then(
          (K) => q(null, K),
          (K) => {
            return q(K, K.response);
          },
        );
      else return this.requestAsync(A);
    }
    async requestAsync(A, q = !1) {
      let K;
      try {
        let Y = await this.getRequestHeaders();
        if (((A.headers = A.headers || {}), Y && Y["x-goog-user-project"]))
          A.headers["x-goog-user-project"] = Y["x-goog-user-project"];
        if (Y && Y.Authorization) A.headers.Authorization = Y.Authorization;
        K = await this.transporter.request(A);
      } catch (Y) {
        let z = Y.response;
        if (z) {
          let w = z.status,
            H = z.config.data instanceof m89.Readable;
          if (
            !q &&
            (w === 401 || w === 403) &&
            !H &&
            this.forceRefreshOnFailure
          )
            return (
              await this.refreshAccessTokenAsync(),
              await this.requestAsync(A, !0)
            );
        }
        throw Y;
      }
      return K;
    }
    async refreshAccessTokenAsync() {
      let A = await this.externalAccountAuthorizedUserHandler.refreshToken(
        this.refreshToken,
      );
      if (
        ((this.cachedAccessToken = {
          access_token: A.access_token,
          expiry_date: new Date().getTime() + A.expires_in * 1000,
          res: A.res,
        }),
        A.refresh_token !== void 0)
      )
        this.refreshToken = A.refresh_token;
      return this.cachedAccessToken;
    }
    isExpired(A) {
      let q = new Date().getTime();
      return A.expiry_date
        ? q >= A.expiry_date - this.eagerRefreshThresholdMillis
        : !1;
    }
  }
  VN7.ExternalAccountAuthorizedUserClient = fN7;
