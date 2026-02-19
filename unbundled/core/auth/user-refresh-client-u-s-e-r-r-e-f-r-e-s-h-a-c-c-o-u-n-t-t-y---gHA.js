// Module: gHA (cjs)
// Dependencies: [hq1]
// Exports: UserRefreshClient, USER_REFRESH_ACCOUNT_TYPE
// Lines: 201256-201356 in cli.formatted.js
// ---

  Object.defineProperty(VV7, "__esModule", { value: !0 });
  VV7.UserRefreshClient = VV7.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var xA9 = hq1(),
    bA9 = h1("querystring");
  VV7.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class u26 extends xA9.OAuth2Client {
    constructor(A, q, K, Y, z) {
      let w =
        A && typeof A === "object"
          ? A
          : {
              clientId: A,
              clientSecret: q,
              refreshToken: K,
              eagerRefreshThresholdMillis: Y,
              forceRefreshOnFailure: z,
            };
      super(w);
      ((this._refreshToken = w.refreshToken),
        (this.credentials.refresh_token = w.refreshToken));
    }
    async refreshTokenNoCache(A) {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(A) {
      return (
        await this.transporter.request({
          ...u26.RETRY_CONFIG,
          url: this.endpoints.oauth2TokenUrl,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          data: (0, bA9.stringify)({
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: "refresh_token",
            refresh_token: this._refreshToken,
            target_audience: A,
          }),
        })
      ).data.id_token;
    }
    fromJSON(A) {
      if (!A)
        throw Error(
          "Must pass in a JSON object containing the user refresh token",
        );
      if (A.type !== "authorized_user")
        throw Error(
          'The incoming JSON object does not have the "authorized_user" type',
        );
      if (!A.client_id)
        throw Error(
          "The incoming JSON object does not contain a client_id field",
        );
      if (!A.client_secret)
        throw Error(
          "The incoming JSON object does not contain a client_secret field",
        );
      if (!A.refresh_token)
        throw Error(
          "The incoming JSON object does not contain a refresh_token field",
        );
      ((this._clientId = A.client_id),
        (this._clientSecret = A.client_secret),
        (this._refreshToken = A.refresh_token),
        (this.credentials.refresh_token = A.refresh_token),
        (this.quotaProjectId = A.quota_project_id),
        (this.universeDomain = A.universe_domain || this.universeDomain));
    }
    fromStream(A, q) {
      if (q) this.fromStreamAsync(A).then(() => q(), q);
      else return this.fromStreamAsync(A);
    }
    async fromStreamAsync(A) {
      return new Promise((q, K) => {
        if (!A)
          return K(
            Error("Must pass in a stream containing the user refresh token."),
          );
        let Y = "";
        A.setEncoding("utf8")
          .on("error", K)
          .on("data", (z) => (Y += z))
          .on("end", () => {
            try {
              let z = JSON.parse(Y);
              return (this.fromJSON(z), q());
            } catch (z) {
              return K(z);
            }
          });
      });
    }
    static fromJSON(A) {
      let q = new u26();
      return (q.fromJSON(A), q);
    }
  }
  VV7.UserRefreshClient = u26;
