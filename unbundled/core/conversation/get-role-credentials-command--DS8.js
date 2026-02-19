// Module: DS8 (cjs)
// Dependencies: [b$, tz, Vg, Ng, Tg, cb, DJ, yg, aC, XM, oC, tL1, sn6, iC8, oC8]
// Exports: GetRoleCredentialsCommand, InvalidRequestException, ListAccountRolesCommand, ListAccountsCommand, LogoutCommand, ResourceNotFoundException, SSO, SSOClient, SSOServiceException, TooManyRequestsException, UnauthorizedException, paginateListAccountRoles, paginateListAccounts
// Lines: 89178-89560 in cli.formatted.js
// ---

  var sC8 = Vg(),
    u83 = Ng(),
    B83 = Tg(),
    tC8 = cb(),
    m83 = DJ(),
    qR1 = tz(),
    bO1 = b$(),
    F83 = yg(),
    KR1 = aC(),
    eC8 = XM(),
    eC = tL1(),
    AS8 = sn6(),
    Q83 = iC8(),
    qS8 = oC(),
    KS8 = oC8(),
    g83 = (A) => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "awsssoportal",
      });
    },
    OA6 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    U83 = (A) => {
      let { httpAuthSchemes: q, httpAuthSchemeProvider: K, credentials: Y } = A;
      return {
        setHttpAuthScheme(z) {
          let w = q.findIndex((H) => H.schemeId === z.schemeId);
          if (w === -1) q.push(z);
          else q.splice(w, 1, z);
        },
        httpAuthSchemes() {
          return q;
        },
        setHttpAuthSchemeProvider(z) {
          K = z;
        },
        httpAuthSchemeProvider() {
          return K;
        },
        setCredentials(z) {
          Y = z;
        },
        credentials() {
          return Y;
        },
      };
    },
    p83 = (A) => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
      };
    },
    d83 = (A, q) => {
      let K = Object.assign(
        qS8.getAwsRegionExtensionConfiguration(A),
        eC.getDefaultExtensionConfiguration(A),
        KS8.getHttpHandlerExtensionConfiguration(A),
        U83(A),
      );
      return (
        q.forEach((Y) => Y.configure(K)),
        Object.assign(
          A,
          qS8.resolveAwsRegionExtensionConfiguration(K),
          eC.resolveDefaultRuntimeConfig(K),
          KS8.resolveHttpHandlerRuntimeConfig(K),
          p83(K),
        )
      );
    };
  class YR1 extends eC.Client {
    config;
    constructor(...[A]) {
      let q = Q83.getRuntimeConfig(A || {});
      super(q);
      this.initConfig = q;
      let K = g83(q),
        Y = tC8.resolveUserAgentConfig(K),
        z = eC8.resolveRetryConfig(Y),
        w = m83.resolveRegionConfig(z),
        H = sC8.resolveHostHeaderConfig(w),
        $ = KR1.resolveEndpointConfig(H),
        O = AS8.resolveHttpAuthSchemeConfig($),
        _ = d83(O, A?.extensions || []);
      ((this.config = _),
        this.middlewareStack.use(bO1.getSchemaSerdePlugin(this.config)),
        this.middlewareStack.use(tC8.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(eC8.getRetryPlugin(this.config)),
        this.middlewareStack.use(F83.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(sC8.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(u83.getLoggerPlugin(this.config)),
        this.middlewareStack.use(B83.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          qR1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              AS8.defaultSSOHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (J) =>
              new qR1.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": J.credentials,
              }),
          }),
        ),
        this.middlewareStack.use(qR1.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  }
  var uO1 = class A extends eC.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    YS8 = class A extends uO1 {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(q) {
        super({ name: "InvalidRequestException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    zS8 = class A extends uO1 {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    wS8 = class A extends uO1 {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(q) {
        super({ name: "TooManyRequestsException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    HS8 = class A extends uO1 {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(q) {
        super({ name: "UnauthorizedException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    c83 = "AccountInfo",
    l83 = "AccountListType",
    i83 = "AccessTokenType",
    n83 = "GetRoleCredentials",
    r83 = "GetRoleCredentialsRequest",
    a83 = "GetRoleCredentialsResponse",
    o83 = "InvalidRequestException",
    s83 = "Logout",
    t83 = "ListAccounts",
    e83 = "ListAccountsRequest",
    A73 = "ListAccountRolesRequest",
    q73 = "ListAccountRolesResponse",
    K73 = "ListAccountsResponse",
    Y73 = "ListAccountRoles",
    z73 = "LogoutRequest",
    w73 = "RoleCredentials",
    H73 = "RoleInfo",
    $73 = "RoleListType",
    O73 = "ResourceNotFoundException",
    _73 = "SecretAccessKeyType",
    J73 = "SessionTokenType",
    X73 = "TooManyRequestsException",
    j73 = "UnauthorizedException",
    _A6 = "accountId",
    D73 = "accessKeyId",
    M73 = "accountList",
    P73 = "accountName",
    JA6 = "accessToken",
    $S8 = "account_id",
    XA6 = "client",
    jA6 = "error",
    W73 = "emailAddress",
    G73 = "expiration",
    DA6 = "http",
    MA6 = "httpError",
    PA6 = "httpHeader",
    v81 = "httpQuery",
    WA6 = "message",
    OS8 = "maxResults",
    _S8 = "max_result",
    GA6 = "nextToken",
    JS8 = "next_token",
    Z73 = "roleCredentials",
    f73 = "roleList",
    XS8 = "roleName",
    V73 = "role_name",
    jS8 = "smithy.ts.sdk.synthetic.com.amazonaws.sso",
    N73 = "secretAccessKey",
    T73 = "sessionToken",
    ZA6 = "x-amz-sso_bearer_token",
    Cw = "com.amazonaws.sso",
    fA6 = [0, Cw, i83, 8, 0],
    v73 = [0, Cw, _73, 8, 0],
    E73 = [0, Cw, J73, 8, 0],
    k73 = [3, Cw, c83, 0, [_A6, P73, W73], [0, 0, 0]],
    L73 = [
      3,
      Cw,
      r83,
      0,
      [XS8, _A6, JA6],
      [
        [0, { [v81]: V73 }],
        [0, { [v81]: $S8 }],
        [() => fA6, { [PA6]: ZA6 }],
      ],
    ],
    R73 = [3, Cw, a83, 0, [Z73], [[() => u73, 0]]],
    y73 = [-3, Cw, o83, { [jA6]: XA6, [MA6]: 400 }, [WA6], [0]];
  bO1.TypeRegistry.for(Cw).registerError(y73, YS8);
  var C73 = [
      3,
      Cw,
      A73,
      0,
      [GA6, OS8, JA6, _A6],
      [
        [0, { [v81]: JS8 }],
        [1, { [v81]: _S8 }],
        [() => fA6, { [PA6]: ZA6 }],
        [0, { [v81]: $S8 }],
      ],
    ],
    S73 = [3, Cw, q73, 0, [GA6, f73], [0, () => p73]],
    h73 = [
      3,
      Cw,
      e83,
      0,
      [GA6, OS8, JA6],
      [
        [0, { [v81]: JS8 }],
        [1, { [v81]: _S8 }],
        [() => fA6, { [PA6]: ZA6 }],
      ],
    ],
    I73 = [3, Cw, K73, 0, [GA6, M73], [0, () => U73]],
    x73 = [3, Cw, z73, 0, [JA6], [[() => fA6, { [PA6]: ZA6 }]]],
    b73 = [-3, Cw, O73, { [jA6]: XA6, [MA6]: 404 }, [WA6], [0]];
  bO1.TypeRegistry.for(Cw).registerError(b73, zS8);
  var u73 = [
      3,
      Cw,
      w73,
      0,
      [D73, N73, T73, G73],
      [0, [() => v73, 0], [() => E73, 0], 1],
    ],
    B73 = [3, Cw, H73, 0, [XS8, _A6], [0, 0]],
    m73 = [-3, Cw, X73, { [jA6]: XA6, [MA6]: 429 }, [WA6], [0]];
  bO1.TypeRegistry.for(Cw).registerError(m73, wS8);
  var F73 = [-3, Cw, j73, { [jA6]: XA6, [MA6]: 401 }, [WA6], [0]];
  bO1.TypeRegistry.for(Cw).registerError(F73, HS8);
  var Q73 = "unit",
    g73 = [-3, jS8, "SSOServiceException", 0, [], []];
  bO1.TypeRegistry.for(jS8).registerError(g73, uO1);
  var U73 = [1, Cw, l83, 0, () => k73],
    p73 = [1, Cw, $73, 0, () => B73],
    d73 = [
      9,
      Cw,
      n83,
      { [DA6]: ["GET", "/federation/credentials", 200] },
      () => L73,
      () => R73,
    ],
    c73 = [
      9,
      Cw,
      Y73,
      { [DA6]: ["GET", "/assignment/roles", 200] },
      () => C73,
      () => S73,
    ],
    l73 = [
      9,
      Cw,
      t83,
      { [DA6]: ["GET", "/assignment/accounts", 200] },
      () => h73,
      () => I73,
    ],
    i73 = [
      9,
      Cw,
      s83,
      { [DA6]: ["POST", "/logout", 200] },
      () => x73,
      () => Q73,
    ];
  class Yr6 extends eC.Command.classBuilder()
    .ep(OA6)
    .m(function (A, q, K, Y) {
      return [KR1.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("SWBPortalService", "GetRoleCredentials", {})
    .n("SSOClient", "GetRoleCredentialsCommand")
    .sc(d73)
    .build() {}
  class VA6 extends eC.Command.classBuilder()
    .ep(OA6)
    .m(function (A, q, K, Y) {
      return [KR1.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("SWBPortalService", "ListAccountRoles", {})
    .n("SSOClient", "ListAccountRolesCommand")
    .sc(c73)
    .build() {}
  class NA6 extends eC.Command.classBuilder()
    .ep(OA6)
    .m(function (A, q, K, Y) {
      return [KR1.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("SWBPortalService", "ListAccounts", {})
    .n("SSOClient", "ListAccountsCommand")
    .sc(l73)
    .build() {}
  class zr6 extends eC.Command.classBuilder()
    .ep(OA6)
    .m(function (A, q, K, Y) {
      return [KR1.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("SWBPortalService", "Logout", {})
    .n("SSOClient", "LogoutCommand")
    .sc(i73)
    .build() {}
  var n73 = {
    GetRoleCredentialsCommand: Yr6,
    ListAccountRolesCommand: VA6,
    ListAccountsCommand: NA6,
    LogoutCommand: zr6,
  };
  class wr6 extends YR1 {}
  eC.createAggregatedClient(n73, wr6);
  var r73 = qR1.createPaginator(
      YR1,
      VA6,
      "nextToken",
      "nextToken",
      "maxResults",
    ),
    a73 = qR1.createPaginator(YR1, NA6, "nextToken", "nextToken", "maxResults");
  Object.defineProperty(Hr6, "$Command", {
    enumerable: !0,
    get: function () {
      return eC.Command;
    },
  });
  Object.defineProperty(Hr6, "__Client", {
    enumerable: !0,
    get: function () {
      return eC.Client;
    },
  });
  Hr6.GetRoleCredentialsCommand = Yr6;
  Hr6.InvalidRequestException = YS8;
  Hr6.ListAccountRolesCommand = VA6;
  Hr6.ListAccountsCommand = NA6;
  Hr6.LogoutCommand = zr6;
  Hr6.ResourceNotFoundException = zS8;
  Hr6.SSO = wr6;
  Hr6.SSOClient = YR1;
  Hr6.SSOServiceException = uO1;
  Hr6.TooManyRequestsException = wS8;
  Hr6.UnauthorizedException = HS8;
  Hr6.paginateListAccountRoles = r73;
  Hr6.paginateListAccounts = a73;
