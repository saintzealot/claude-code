// Module: Tn8 (cjs)
// Dependencies: [b$, tz, Vg, Ng, Tg, cb, DJ, yg, aC, XM, oC, jy1, b6A, Bi8, gi8]
// Exports: AmbiguousRoleResolutionType, CognitoIdentity, CognitoIdentityClient, CognitoIdentityServiceException, ConcurrentModificationException, CreateIdentityPoolCommand, DeleteIdentitiesCommand, DeleteIdentityPoolCommand, DescribeIdentityCommand, DescribeIdentityPoolCommand, DeveloperUserAlreadyRegisteredException, ErrorCode, ExternalServiceException, GetCredentialsForIdentityCommand, GetIdCommand, GetIdentityPoolRolesCommand, GetOpenIdTokenCommand, GetOpenIdTokenForDeveloperIdentityCommand, GetPrincipalTagAttributeMapCommand, InternalErrorException, InvalidIdentityPoolConfigurationException, InvalidParameterException, LimitExceededException, ListIdentitiesCommand, ListIdentityPoolsCommand, ListTagsForResourceCommand, LookupDeveloperIdentityCommand, MappingRuleMatchType, MergeDeveloperIdentitiesCommand, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, RoleMappingType, SetIdentityPoolRolesCommand, SetPrincipalTagAttributeMapCommand, TagResourceCommand, TooManyRequestsException, UnlinkDeveloperIdentityCommand, UnlinkIdentityCommand, UntagResourceCommand, UpdateIdentityPoolCommand, paginateListIdentityPools
// Lines: 112315-113121 in cli.formatted.js
// ---

  var Ui8 = Vg(),
    t35 = Ng(),
    e35 = Tg(),
    pi8 = cb(),
    A55 = DJ(),
    K46 = tz(),
    Xv = b$(),
    q55 = yg(),
    m$ = aC(),
    di8 = XM(),
    q2 = jy1(),
    ci8 = b6A(),
    K55 = Bi8(),
    li8 = oC(),
    ii8 = gi8(),
    Y55 = (A) => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "cognito-identity",
      });
    },
    IO = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    z55 = (A) => {
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
    w55 = (A) => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
      };
    },
    H55 = (A, q) => {
      let K = Object.assign(
        li8.getAwsRegionExtensionConfiguration(A),
        q2.getDefaultExtensionConfiguration(A),
        ii8.getHttpHandlerExtensionConfiguration(A),
        z55(A),
      );
      return (
        q.forEach((Y) => Y.configure(K)),
        Object.assign(
          A,
          li8.resolveAwsRegionExtensionConfiguration(K),
          q2.resolveDefaultRuntimeConfig(K),
          ii8.resolveHttpHandlerRuntimeConfig(K),
          w55(K),
        )
      );
    };
  class z46 extends q2.Client {
    config;
    constructor(...[A]) {
      let q = K55.getRuntimeConfig(A || {});
      super(q);
      this.initConfig = q;
      let K = Y55(q),
        Y = pi8.resolveUserAgentConfig(K),
        z = di8.resolveRetryConfig(Y),
        w = A55.resolveRegionConfig(z),
        H = Ui8.resolveHostHeaderConfig(w),
        $ = m$.resolveEndpointConfig(H),
        O = ci8.resolveHttpAuthSchemeConfig($),
        _ = H55(O, A?.extensions || []);
      ((this.config = _),
        this.middlewareStack.use(Xv.getSchemaSerdePlugin(this.config)),
        this.middlewareStack.use(pi8.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(di8.getRetryPlugin(this.config)),
        this.middlewareStack.use(q55.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(Ui8.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(t35.getLoggerPlugin(this.config)),
        this.middlewareStack.use(e35.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          K46.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              ci8.defaultCognitoIdentityHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (J) =>
              new K46.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": J.credentials,
              }),
          }),
        ),
        this.middlewareStack.use(K46.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  }
  var jv = class A extends q2.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ni8 = class A extends jv {
      name = "InternalErrorException";
      $fault = "server";
      constructor(q) {
        super({ name: "InternalErrorException", $fault: "server", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ri8 = class A extends jv {
      name = "InvalidParameterException";
      $fault = "client";
      constructor(q) {
        super({ name: "InvalidParameterException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ai8 = class A extends jv {
      name = "LimitExceededException";
      $fault = "client";
      constructor(q) {
        super({ name: "LimitExceededException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    oi8 = class A extends jv {
      name = "NotAuthorizedException";
      $fault = "client";
      constructor(q) {
        super({ name: "NotAuthorizedException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    si8 = class A extends jv {
      name = "ResourceConflictException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceConflictException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ti8 = class A extends jv {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(q) {
        super({ name: "TooManyRequestsException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ei8 = class A extends jv {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    An8 = class A extends jv {
      name = "ExternalServiceException";
      $fault = "client";
      constructor(q) {
        super({ name: "ExternalServiceException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    qn8 = class A extends jv {
      name = "InvalidIdentityPoolConfigurationException";
      $fault = "client";
      constructor(q) {
        super({
          name: "InvalidIdentityPoolConfigurationException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Kn8 = class A extends jv {
      name = "DeveloperUserAlreadyRegisteredException";
      $fault = "client";
      constructor(q) {
        super({
          name: "DeveloperUserAlreadyRegisteredException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Yn8 = class A extends jv {
      name = "ConcurrentModificationException";
      $fault = "client";
      constructor(q) {
        super({
          name: "ConcurrentModificationException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    zn8 = "AllowClassicFlow",
    $55 = "AccountId",
    O55 = "AccessKeyId",
    _55 = "AmbiguousRoleResolution",
    wn8 = "AllowUnauthenticatedIdentities",
    Hn8 = "Credentials",
    J55 = "CreationDate",
    X55 = "ClientId",
    j55 = "CognitoIdentityProvider",
    D55 = "CreateIdentityPoolInput",
    M55 = "CognitoIdentityProviderList",
    $n8 = "CognitoIdentityProviders",
    P55 = "CreateIdentityPool",
    W55 = "ConcurrentModificationException",
    G55 = "CustomRoleArn",
    Z55 = "Claim",
    f55 = "DeleteIdentities",
    V55 = "DeleteIdentitiesInput",
    N55 = "DescribeIdentityInput",
    T55 = "DeleteIdentityPool",
    v55 = "DeleteIdentityPoolInput",
    E55 = "DescribeIdentityPoolInput",
    k55 = "DescribeIdentityPool",
    L55 = "DeleteIdentitiesResponse",
    R55 = "DescribeIdentity",
    w46 = "DeveloperProviderName",
    y55 = "DeveloperUserAlreadyRegisteredException",
    On8 = "DeveloperUserIdentifier",
    C55 = "DeveloperUserIdentifierList",
    S55 = "DestinationUserIdentifier",
    h55 = "Expiration",
    I55 = "ErrorCode",
    x55 = "ExternalServiceException",
    b55 = "GetCredentialsForIdentity",
    u55 = "GetCredentialsForIdentityInput",
    B55 = "GetCredentialsForIdentityResponse",
    m55 = "GetId",
    F55 = "GetIdInput",
    Q55 = "GetIdentityPoolRoles",
    g55 = "GetIdentityPoolRolesInput",
    U55 = "GetIdentityPoolRolesResponse",
    p55 = "GetIdResponse",
    d55 = "GetOpenIdToken",
    c55 = "GetOpenIdTokenForDeveloperIdentity",
    l55 = "GetOpenIdTokenForDeveloperIdentityInput",
    i55 = "GetOpenIdTokenForDeveloperIdentityResponse",
    n55 = "GetOpenIdTokenInput",
    r55 = "GetOpenIdTokenResponse",
    a55 = "GetPrincipalTagAttributeMap",
    o55 = "GetPrincipalTagAttributeMapInput",
    s55 = "GetPrincipalTagAttributeMapResponse",
    t55 = "HideDisabled",
    e55 = "Identities",
    A95 = "IdentityDescription",
    q95 = "InternalErrorException",
    rG = "IdentityId",
    K95 = "InvalidIdentityPoolConfigurationException",
    Y95 = "IdentityIdsToDelete",
    z95 = "IdentitiesList",
    w95 = "IdentityPool",
    H95 = "InvalidParameterException",
    UD = "IdentityPoolId",
    $95 = "IdentityPoolsList",
    g6A = "IdentityPoolName",
    H46 = "IdentityProviderName",
    O95 = "IdentityPoolShortDescription",
    _95 = "IdentityProviderToken",
    _n8 = "IdentityPoolTags",
    J95 = "IdentityPools",
    k_1 = "Logins",
    X95 = "LookupDeveloperIdentity",
    j95 = "LookupDeveloperIdentityInput",
    D95 = "LookupDeveloperIdentityResponse",
    M95 = "LimitExceededException",
    P95 = "ListIdentities",
    W95 = "ListIdentitiesInput",
    G95 = "ListIdentityPools",
    Z95 = "ListIdentityPoolsInput",
    f95 = "ListIdentityPoolsResponse",
    V95 = "ListIdentitiesResponse",
    N95 = "LoginsMap",
    T95 = "LastModifiedDate",
    v95 = "ListTagsForResource",
    E95 = "ListTagsForResourceInput",
    k95 = "ListTagsForResourceResponse",
    L95 = "LoginsToRemove",
    R95 = "MergeDeveloperIdentities",
    y95 = "MergeDeveloperIdentitiesInput",
    C95 = "MergeDeveloperIdentitiesResponse",
    U6A = "MaxResults",
    S95 = "MappingRulesList",
    h95 = "MappingRule",
    I95 = "MatchType",
    x95 = "NotAuthorizedException",
    L_1 = "NextToken",
    Jn8 = "OpenIdConnectProviderARNs",
    b95 = "OIDCToken",
    u95 = "ProviderName",
    $46 = "PrincipalTags",
    Xn8 = "Roles",
    p6A = "ResourceArn",
    B95 = "RoleARN",
    m95 = "RulesConfiguration",
    F95 = "ResourceConflictException",
    Q95 = "RulesConfigurationType",
    jn8 = "RoleMappings",
    g95 = "RoleMappingMap",
    U95 = "RoleMapping",
    p95 = "ResourceNotFoundException",
    d95 = "Rules",
    c95 = "SetIdentityPoolRoles",
    l95 = "SetIdentityPoolRolesInput",
    i95 = "SecretKey",
    n95 = "SecretKeyString",
    Dn8 = "SupportedLoginProviders",
    Mn8 = "SamlProviderARNs",
    r95 = "SetPrincipalTagAttributeMap",
    a95 = "SetPrincipalTagAttributeMapInput",
    o95 = "SetPrincipalTagAttributeMapResponse",
    s95 = "ServerSideTokenCheck",
    t95 = "SessionToken",
    e95 = "SourceUserIdentifier",
    Pn8 = "Token",
    AY5 = "TokenDuration",
    qY5 = "TagKeys",
    KY5 = "TooManyRequestsException",
    YY5 = "TagResource",
    zY5 = "TagResourceInput",
    wY5 = "TagResourceResponse",
    Wn8 = "Tags",
    HY5 = "Type",
    d6A = "UseDefaults",
    $Y5 = "UnlinkDeveloperIdentity",
    OY5 = "UnlinkDeveloperIdentityInput",
    _Y5 = "UnlinkIdentity",
    JY5 = "UnprocessedIdentityIds",
    XY5 = "UnprocessedIdentityIdList",
    jY5 = "UnlinkIdentityInput",
    DY5 = "UnprocessedIdentityId",
    MY5 = "UpdateIdentityPool",
    PY5 = "UntagResource",
    WY5 = "UntagResourceInput",
    GY5 = "UntagResourceResponse",
    ZY5 = "Value",
    Mu = "client",
    XS = "error",
    Pu = "httpError",
    jS = "message",
    fY5 = "server",
    Gn8 = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity",
    p8 = "com.amazonaws.cognitoidentity",
    VY5 = [0, p8, _95, 8, 0],
    Zn8 = [0, p8, b95, 8, 0],
    NY5 = [0, p8, n95, 8, 0],
    TY5 = [3, p8, j55, 0, [u95, X55, s95], [0, 0, 2]],
    vY5 = [-3, p8, W55, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(vY5, Yn8);
  var EY5 = [
      3,
      p8,
      D55,
      0,
      [g6A, wn8, zn8, Dn8, w46, Jn8, $n8, Mn8, _n8],
      [0, 2, 2, 128, 0, 64, () => Vn8, 64, 128],
    ],
    kY5 = [3, p8, Hn8, 0, [O55, i95, t95, h55], [0, [() => NY5, 0], 0, 4]],
    LY5 = [3, p8, V55, 0, [Y95], [64]],
    RY5 = [3, p8, L55, 0, [JY5], [() => Rz5]],
    yY5 = [3, p8, v55, 0, [UD], [0]],
    CY5 = [3, p8, N55, 0, [rG], [0]],
    SY5 = [3, p8, E55, 0, [UD], [0]],
    hY5 = [-3, p8, y55, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(hY5, Kn8);
  var IY5 = [-3, p8, x55, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(IY5, An8);
  var xY5 = [3, p8, u55, 0, [rG, k_1, G55], [0, [() => Gy1, 0], 0]],
    bY5 = [3, p8, B55, 0, [rG, Hn8], [0, [() => kY5, 0]]],
    uY5 = [3, p8, g55, 0, [UD], [0]],
    BY5 = [3, p8, U55, 0, [UD, Xn8, jn8], [0, 128, () => Nn8]],
    mY5 = [3, p8, F55, 0, [$55, UD, k_1], [0, 0, [() => Gy1, 0]]],
    FY5 = [3, p8, p55, 0, [rG], [0]],
    QY5 = [
      3,
      p8,
      l55,
      0,
      [UD, rG, k_1, $46, AY5],
      [0, 0, [() => Gy1, 0], 128, 1],
    ],
    gY5 = [3, p8, i55, 0, [rG, Pn8], [0, [() => Zn8, 0]]],
    UY5 = [3, p8, n55, 0, [rG, k_1], [0, [() => Gy1, 0]]],
    pY5 = [3, p8, r55, 0, [rG, Pn8], [0, [() => Zn8, 0]]],
    dY5 = [3, p8, o55, 0, [UD, H46], [0, 0]],
    cY5 = [3, p8, s55, 0, [UD, H46, d6A, $46], [0, 0, 2, 128]],
    fn8 = [3, p8, A95, 0, [rG, k_1, J55, T95], [0, 64, 4, 4]],
    Y46 = [
      3,
      p8,
      w95,
      0,
      [UD, g6A, wn8, zn8, Dn8, w46, Jn8, $n8, Mn8, _n8],
      [0, 0, 2, 2, 128, 0, 64, () => Vn8, 64, 128],
    ],
    lY5 = [3, p8, O95, 0, [UD, g6A], [0, 0]],
    iY5 = [-3, p8, q95, { [XS]: fY5 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(iY5, ni8);
  var nY5 = [-3, p8, K95, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(nY5, qn8);
  var rY5 = [-3, p8, H95, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(rY5, ri8);
  var aY5 = [-3, p8, M95, { [XS]: Mu, [Pu]: 400 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(aY5, ai8);
  var oY5 = [3, p8, W95, 0, [UD, U6A, L_1, t55], [0, 1, 0, 2]],
    sY5 = [3, p8, V95, 0, [UD, e55, L_1], [0, () => Ez5, 0]],
    tY5 = [3, p8, Z95, 0, [U6A, L_1], [1, 0]],
    eY5 = [3, p8, f95, 0, [J95, L_1], [() => kz5, 0]],
    Az5 = [3, p8, E95, 0, [p6A], [0]],
    qz5 = [3, p8, k95, 0, [Wn8], [128]],
    Kz5 = [3, p8, j95, 0, [UD, rG, On8, U6A, L_1], [0, 0, 0, 1, 0]],
    Yz5 = [3, p8, D95, 0, [rG, C55, L_1], [0, 64, 0]],
    zz5 = [3, p8, h95, 0, [Z55, I95, ZY5, B95], [0, 0, 0, 0]],
    wz5 = [3, p8, y95, 0, [e95, S55, w46, UD], [0, 0, 0, 0]],
    Hz5 = [3, p8, C95, 0, [rG], [0]],
    $z5 = [-3, p8, x95, { [XS]: Mu, [Pu]: 403 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError($z5, oi8);
  var Oz5 = [-3, p8, F95, { [XS]: Mu, [Pu]: 409 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(Oz5, si8);
  var _z5 = [-3, p8, p95, { [XS]: Mu, [Pu]: 404 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(_z5, ei8);
  var Jz5 = [3, p8, U95, 0, [HY5, _55, m95], [0, 0, () => Xz5]],
    Xz5 = [3, p8, Q95, 0, [d95], [() => Lz5]],
    jz5 = [3, p8, l95, 0, [UD, Xn8, jn8], [0, 128, () => Nn8]],
    Dz5 = [3, p8, a95, 0, [UD, H46, d6A, $46], [0, 0, 2, 128]],
    Mz5 = [3, p8, o95, 0, [UD, H46, d6A, $46], [0, 0, 2, 128]],
    Pz5 = [3, p8, zY5, 0, [p6A, Wn8], [0, 128]],
    Wz5 = [3, p8, wY5, 0, [], []],
    Gz5 = [-3, p8, KY5, { [XS]: Mu, [Pu]: 429 }, [jS], [0]];
  Xv.TypeRegistry.for(p8).registerError(Gz5, ti8);
  var Zz5 = [3, p8, OY5, 0, [rG, UD, w46, On8], [0, 0, 0, 0]],
    fz5 = [3, p8, jY5, 0, [rG, k_1, L95], [0, [() => Gy1, 0], 64]],
    Vz5 = [3, p8, DY5, 0, [rG, I55], [0, 0]],
    Nz5 = [3, p8, WY5, 0, [p6A, qY5], [0, 64]],
    Tz5 = [3, p8, GY5, 0, [], []],
    O46 = "unit",
    vz5 = [-3, Gn8, "CognitoIdentityServiceException", 0, [], []];
  Xv.TypeRegistry.for(Gn8).registerError(vz5, jv);
  var Vn8 = [1, p8, M55, 0, () => TY5],
    Ez5 = [1, p8, z95, 0, () => fn8],
    kz5 = [1, p8, $95, 0, () => lY5],
    Lz5 = [1, p8, S95, 0, () => zz5],
    Rz5 = [1, p8, XY5, 0, () => Vz5],
    Gy1 = [2, p8, N95, 0, [0, 0], [() => VY5, 0]],
    Nn8 = [2, p8, g95, 0, 0, () => Jz5],
    yz5 = [9, p8, P55, 0, () => EY5, () => Y46],
    Cz5 = [9, p8, f55, 0, () => LY5, () => RY5],
    Sz5 = [9, p8, T55, 0, () => yY5, () => O46],
    hz5 = [9, p8, R55, 0, () => CY5, () => fn8],
    Iz5 = [9, p8, k55, 0, () => SY5, () => Y46],
    xz5 = [9, p8, b55, 0, () => xY5, () => bY5],
    bz5 = [9, p8, m55, 0, () => mY5, () => FY5],
    uz5 = [9, p8, Q55, 0, () => uY5, () => BY5],
    Bz5 = [9, p8, d55, 0, () => UY5, () => pY5],
    mz5 = [9, p8, c55, 0, () => QY5, () => gY5],
    Fz5 = [9, p8, a55, 0, () => dY5, () => cY5],
    Qz5 = [9, p8, P95, 0, () => oY5, () => sY5],
    gz5 = [9, p8, G95, 0, () => tY5, () => eY5],
    Uz5 = [9, p8, v95, 0, () => Az5, () => qz5],
    pz5 = [9, p8, X95, 0, () => Kz5, () => Yz5],
    dz5 = [9, p8, R95, 0, () => wz5, () => Hz5],
    cz5 = [9, p8, c95, 0, () => jz5, () => O46],
    lz5 = [9, p8, r95, 0, () => Dz5, () => Mz5],
    iz5 = [9, p8, YY5, 0, () => Pz5, () => Wz5],
    nz5 = [9, p8, $Y5, 0, () => Zz5, () => O46],
    rz5 = [9, p8, _Y5, 0, () => fz5, () => O46],
    az5 = [9, p8, PY5, 0, () => Nz5, () => Tz5],
    oz5 = [9, p8, MY5, 0, () => Y46, () => Y46];
  class c6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "CreateIdentityPool", {})
    .n("CognitoIdentityClient", "CreateIdentityPoolCommand")
    .sc(yz5)
    .build() {}
  class l6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "DeleteIdentities", {})
    .n("CognitoIdentityClient", "DeleteIdentitiesCommand")
    .sc(Cz5)
    .build() {}
  class i6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "DeleteIdentityPool", {})
    .n("CognitoIdentityClient", "DeleteIdentityPoolCommand")
    .sc(Sz5)
    .build() {}
  class n6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "DescribeIdentity", {})
    .n("CognitoIdentityClient", "DescribeIdentityCommand")
    .sc(hz5)
    .build() {}
  class r6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "DescribeIdentityPool", {})
    .n("CognitoIdentityClient", "DescribeIdentityPoolCommand")
    .sc(Iz5)
    .build() {}
  class a6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {})
    .n("CognitoIdentityClient", "GetCredentialsForIdentityCommand")
    .sc(xz5)
    .build() {}
  class o6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetId", {})
    .n("CognitoIdentityClient", "GetIdCommand")
    .sc(bz5)
    .build() {}
  class s6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {})
    .n("CognitoIdentityClient", "GetIdentityPoolRolesCommand")
    .sc(uz5)
    .build() {}
  class t6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetOpenIdToken", {})
    .n("CognitoIdentityClient", "GetOpenIdTokenCommand")
    .sc(Bz5)
    .build() {}
  class e6A extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {})
    .n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand")
    .sc(mz5)
    .build() {}
  class AAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {})
    .n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand")
    .sc(Fz5)
    .build() {}
  class qAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "ListIdentities", {})
    .n("CognitoIdentityClient", "ListIdentitiesCommand")
    .sc(Qz5)
    .build() {}
  class _46 extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "ListIdentityPools", {})
    .n("CognitoIdentityClient", "ListIdentityPoolsCommand")
    .sc(gz5)
    .build() {}
  class KAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "ListTagsForResource", {})
    .n("CognitoIdentityClient", "ListTagsForResourceCommand")
    .sc(Uz5)
    .build() {}
  class YAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {})
    .n("CognitoIdentityClient", "LookupDeveloperIdentityCommand")
    .sc(pz5)
    .build() {}
  class zAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {})
    .n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand")
    .sc(dz5)
    .build() {}
  class wAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {})
    .n("CognitoIdentityClient", "SetIdentityPoolRolesCommand")
    .sc(cz5)
    .build() {}
  class HAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {})
    .n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand")
    .sc(lz5)
    .build() {}
  class $AA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "TagResource", {})
    .n("CognitoIdentityClient", "TagResourceCommand")
    .sc(iz5)
    .build() {}
  class OAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {})
    .n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand")
    .sc(nz5)
    .build() {}
  class _AA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "UnlinkIdentity", {})
    .n("CognitoIdentityClient", "UnlinkIdentityCommand")
    .sc(rz5)
    .build() {}
  class JAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "UntagResource", {})
    .n("CognitoIdentityClient", "UntagResourceCommand")
    .sc(az5)
    .build() {}
  class XAA extends q2.Command.classBuilder()
    .ep(IO)
    .m(function (A, q, K, Y) {
      return [m$.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSCognitoIdentityService", "UpdateIdentityPool", {})
    .n("CognitoIdentityClient", "UpdateIdentityPoolCommand")
    .sc(oz5)
    .build() {}
  var sz5 = {
    CreateIdentityPoolCommand: c6A,
    DeleteIdentitiesCommand: l6A,
    DeleteIdentityPoolCommand: i6A,
    DescribeIdentityCommand: n6A,
    DescribeIdentityPoolCommand: r6A,
    GetCredentialsForIdentityCommand: a6A,
    GetIdCommand: o6A,
    GetIdentityPoolRolesCommand: s6A,
    GetOpenIdTokenCommand: t6A,
    GetOpenIdTokenForDeveloperIdentityCommand: e6A,
    GetPrincipalTagAttributeMapCommand: AAA,
    ListIdentitiesCommand: qAA,
    ListIdentityPoolsCommand: _46,
    ListTagsForResourceCommand: KAA,
    LookupDeveloperIdentityCommand: YAA,
    MergeDeveloperIdentitiesCommand: zAA,
    SetIdentityPoolRolesCommand: wAA,
    SetPrincipalTagAttributeMapCommand: HAA,
    TagResourceCommand: $AA,
    UnlinkDeveloperIdentityCommand: OAA,
    UnlinkIdentityCommand: _AA,
    UntagResourceCommand: JAA,
    UpdateIdentityPoolCommand: XAA,
  };
  class jAA extends z46 {}
  q2.createAggregatedClient(sz5, jAA);
  var tz5 = K46.createPaginator(
      z46,
      _46,
      "NextToken",
      "NextToken",
      "MaxResults",
    ),
    ez5 = { AUTHENTICATED_ROLE: "AuthenticatedRole", DENY: "Deny" },
    A25 = {
      ACCESS_DENIED: "AccessDenied",
      INTERNAL_SERVER_ERROR: "InternalServerError",
    },
    q25 = {
      CONTAINS: "Contains",
      EQUALS: "Equals",
      NOT_EQUAL: "NotEqual",
      STARTS_WITH: "StartsWith",
    },
    K25 = { RULES: "Rules", TOKEN: "Token" };
  Object.defineProperty(DAA, "$Command", {
    enumerable: !0,
    get: function () {
      return q2.Command;
    },
  });
  Object.defineProperty(DAA, "__Client", {
    enumerable: !0,
    get: function () {
      return q2.Client;
    },
  });
  DAA.AmbiguousRoleResolutionType = ez5;
  DAA.CognitoIdentity = jAA;
  DAA.CognitoIdentityClient = z46;
  DAA.CognitoIdentityServiceException = jv;
  DAA.ConcurrentModificationException = Yn8;
  DAA.CreateIdentityPoolCommand = c6A;
  DAA.DeleteIdentitiesCommand = l6A;
  DAA.DeleteIdentityPoolCommand = i6A;
  DAA.DescribeIdentityCommand = n6A;
  DAA.DescribeIdentityPoolCommand = r6A;
  DAA.DeveloperUserAlreadyRegisteredException = Kn8;
  DAA.ErrorCode = A25;
  DAA.ExternalServiceException = An8;
  DAA.GetCredentialsForIdentityCommand = a6A;
  DAA.GetIdCommand = o6A;
  DAA.GetIdentityPoolRolesCommand = s6A;
  DAA.GetOpenIdTokenCommand = t6A;
  DAA.GetOpenIdTokenForDeveloperIdentityCommand = e6A;
  DAA.GetPrincipalTagAttributeMapCommand = AAA;
  DAA.InternalErrorException = ni8;
  DAA.InvalidIdentityPoolConfigurationException = qn8;
  DAA.InvalidParameterException = ri8;
  DAA.LimitExceededException = ai8;
  DAA.ListIdentitiesCommand = qAA;
  DAA.ListIdentityPoolsCommand = _46;
  DAA.ListTagsForResourceCommand = KAA;
  DAA.LookupDeveloperIdentityCommand = YAA;
  DAA.MappingRuleMatchType = q25;
  DAA.MergeDeveloperIdentitiesCommand = zAA;
  DAA.NotAuthorizedException = oi8;
  DAA.ResourceConflictException = si8;
  DAA.ResourceNotFoundException = ei8;
  DAA.RoleMappingType = K25;
  DAA.SetIdentityPoolRolesCommand = wAA;
  DAA.SetPrincipalTagAttributeMapCommand = HAA;
  DAA.TagResourceCommand = $AA;
  DAA.TooManyRequestsException = ti8;
  DAA.UnlinkDeveloperIdentityCommand = OAA;
  DAA.UnlinkIdentityCommand = _AA;
  DAA.UntagResourceCommand = JAA;
  DAA.UpdateIdentityPoolCommand = XAA;
  DAA.paginateListIdentityPools = tz5;
