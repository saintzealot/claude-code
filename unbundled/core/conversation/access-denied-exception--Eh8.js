// Module: Eh8 (cjs)
// Dependencies: [b$, tz, Vg, Ng, Tg, cb, DJ, yg, aC, XM, dG, oC, YA6, Pr6, eS8]
// Exports: AccessDeniedException, CreateOAuth2TokenCommand, InternalServerException, OAuth2ErrorCode, Signin, SigninClient, SigninServiceException, TooManyRequestsError, ValidationException
// Lines: 90443-90740 in cli.formatted.js
// ---

  var Ah8 = Vg(),
    Mq3 = Ng(),
    Pq3 = Tg(),
    qh8 = cb(),
    Wq3 = DJ(),
    Nr6 = tz(),
    mO1 = b$(),
    Gq3 = yg(),
    Gh8 = aC(),
    Kh8 = XM(),
    gn = dG(),
    Yh8 = Pr6(),
    Zq3 = eS8(),
    zh8 = oC(),
    wh8 = YA6(),
    fq3 = (A) => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "signin",
      });
    },
    Vq3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    Nq3 = (A) => {
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
    Tq3 = (A) => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
      };
    },
    vq3 = (A, q) => {
      let K = Object.assign(
        zh8.getAwsRegionExtensionConfiguration(A),
        gn.getDefaultExtensionConfiguration(A),
        wh8.getHttpHandlerExtensionConfiguration(A),
        Nq3(A),
      );
      return (
        q.forEach((Y) => Y.configure(K)),
        Object.assign(
          A,
          zh8.resolveAwsRegionExtensionConfiguration(K),
          gn.resolveDefaultRuntimeConfig(K),
          wh8.resolveHttpHandlerRuntimeConfig(K),
          Tq3(K),
        )
      );
    };
  class Tr6 extends gn.Client {
    config;
    constructor(...[A]) {
      let q = Zq3.getRuntimeConfig(A || {});
      super(q);
      this.initConfig = q;
      let K = fq3(q),
        Y = qh8.resolveUserAgentConfig(K),
        z = Kh8.resolveRetryConfig(Y),
        w = Wq3.resolveRegionConfig(z),
        H = Ah8.resolveHostHeaderConfig(w),
        $ = Gh8.resolveEndpointConfig(H),
        O = Yh8.resolveHttpAuthSchemeConfig($),
        _ = vq3(O, A?.extensions || []);
      ((this.config = _),
        this.middlewareStack.use(mO1.getSchemaSerdePlugin(this.config)),
        this.middlewareStack.use(qh8.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(Kh8.getRetryPlugin(this.config)),
        this.middlewareStack.use(Gq3.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(Ah8.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(Mq3.getLoggerPlugin(this.config)),
        this.middlewareStack.use(Pq3.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          Nr6.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              Yh8.defaultSigninHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (J) =>
              new Nr6.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": J.credentials,
              }),
          }),
        ),
        this.middlewareStack.use(Nr6.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  }
  var FO1 = class A extends gn.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Zh8 = class A extends FO1 {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(q) {
        super({ name: "AccessDeniedException", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype), (this.error = q.error));
      }
    },
    fh8 = class A extends FO1 {
      name = "InternalServerException";
      $fault = "server";
      error;
      constructor(q) {
        super({ name: "InternalServerException", $fault: "server", ...q });
        (Object.setPrototypeOf(this, A.prototype), (this.error = q.error));
      }
    },
    Vh8 = class A extends FO1 {
      name = "TooManyRequestsError";
      $fault = "client";
      error;
      constructor(q) {
        super({ name: "TooManyRequestsError", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype), (this.error = q.error));
      }
    },
    Nh8 = class A extends FO1 {
      name = "ValidationException";
      $fault = "client";
      error;
      constructor(q) {
        super({ name: "ValidationException", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype), (this.error = q.error));
      }
    },
    Eq3 = "AccessDeniedException",
    kq3 = "AccessToken",
    Lq3 = "CreateOAuth2Token",
    Rq3 = "CreateOAuth2TokenRequest",
    yq3 = "CreateOAuth2TokenRequestBody",
    Cq3 = "CreateOAuth2TokenResponseBody",
    Sq3 = "CreateOAuth2TokenResponse",
    hq3 = "InternalServerException",
    Iq3 = "RefreshToken",
    xq3 = "TooManyRequestsError",
    bq3 = "ValidationException",
    Hh8 = "accessKeyId",
    $h8 = "accessToken",
    vr6 = "client",
    Oh8 = "clientId",
    _h8 = "codeVerifier",
    uq3 = "code",
    Un = "error",
    Jh8 = "expiresIn",
    Xh8 = "grantType",
    Bq3 = "http",
    Er6 = "httpError",
    jh8 = "idToken",
    tT = "jsonName",
    SA6 = "message",
    CA6 = "refreshToken",
    Dh8 = "redirectUri",
    mq3 = "server",
    Mh8 = "secretAccessKey",
    Ph8 = "sessionToken",
    Th8 = "smithy.ts.sdk.synthetic.com.amazonaws.signin",
    Fq3 = "tokenInput",
    Qq3 = "tokenOutput",
    Wh8 = "tokenType",
    cG = "com.amazonaws.signin",
    vh8 = [0, cG, Iq3, 8, 0],
    gq3 = [-3, cG, Eq3, { [Un]: vr6 }, [Un, SA6], [0, 0]];
  mO1.TypeRegistry.for(cG).registerError(gq3, Zh8);
  var Uq3 = [
      3,
      cG,
      kq3,
      8,
      [Hh8, Mh8, Ph8],
      [
        [0, { [tT]: Hh8 }],
        [0, { [tT]: Mh8 }],
        [0, { [tT]: Ph8 }],
      ],
    ],
    pq3 = [3, cG, Rq3, 0, [Fq3], [[() => dq3, 16]]],
    dq3 = [
      3,
      cG,
      yq3,
      0,
      [Oh8, Xh8, uq3, Dh8, _h8, CA6],
      [
        [0, { [tT]: Oh8 }],
        [0, { [tT]: Xh8 }],
        0,
        [0, { [tT]: Dh8 }],
        [0, { [tT]: _h8 }],
        [() => vh8, { [tT]: CA6 }],
      ],
    ],
    cq3 = [3, cG, Sq3, 0, [Qq3], [[() => lq3, 16]]],
    lq3 = [
      3,
      cG,
      Cq3,
      0,
      [$h8, Wh8, Jh8, CA6, jh8],
      [
        [() => Uq3, { [tT]: $h8 }],
        [0, { [tT]: Wh8 }],
        [1, { [tT]: Jh8 }],
        [() => vh8, { [tT]: CA6 }],
        [0, { [tT]: jh8 }],
      ],
    ],
    iq3 = [-3, cG, hq3, { [Un]: mq3, [Er6]: 500 }, [Un, SA6], [0, 0]];
  mO1.TypeRegistry.for(cG).registerError(iq3, fh8);
  var nq3 = [-3, cG, xq3, { [Un]: vr6, [Er6]: 429 }, [Un, SA6], [0, 0]];
  mO1.TypeRegistry.for(cG).registerError(nq3, Vh8);
  var rq3 = [-3, cG, bq3, { [Un]: vr6, [Er6]: 400 }, [Un, SA6], [0, 0]];
  mO1.TypeRegistry.for(cG).registerError(rq3, Nh8);
  var aq3 = [-3, Th8, "SigninServiceException", 0, [], []];
  mO1.TypeRegistry.for(Th8).registerError(aq3, FO1);
  var oq3 = [
    9,
    cG,
    Lq3,
    { [Bq3]: ["POST", "/v1/token", 200] },
    () => pq3,
    () => cq3,
  ];
  class kr6 extends gn.Command.classBuilder()
    .ep(Vq3)
    .m(function (A, q, K, Y) {
      return [Gh8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("Signin", "CreateOAuth2Token", {})
    .n("SigninClient", "CreateOAuth2TokenCommand")
    .sc(oq3)
    .build() {}
  var sq3 = { CreateOAuth2TokenCommand: kr6 };
  class Lr6 extends Tr6 {}
  gn.createAggregatedClient(sq3, Lr6);
  var tq3 = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED",
  };
  Object.defineProperty(Rr6, "$Command", {
    enumerable: !0,
    get: function () {
      return gn.Command;
    },
  });
  Object.defineProperty(Rr6, "__Client", {
    enumerable: !0,
    get: function () {
      return gn.Client;
    },
  });
  Rr6.AccessDeniedException = Zh8;
  Rr6.CreateOAuth2TokenCommand = kr6;
  Rr6.InternalServerException = fh8;
  Rr6.OAuth2ErrorCode = tq3;
  Rr6.Signin = Lr6;
  Rr6.SigninClient = Tr6;
  Rr6.SigninServiceException = FO1;
  Rr6.TooManyRequestsError = Vh8;
  Rr6.ValidationException = Nh8;
