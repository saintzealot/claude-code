// Module: hl8 (cjs)
// Dependencies: [zV, b$, aC, oC, O71, i1A, l1A]
// Exports: AssumeRoleCommand, AssumeRoleWithSAMLCommand, AssumeRoleWithWebIdentityCommand, AssumeRootCommand, DecodeAuthorizationMessageCommand, ExpiredTokenException, ExpiredTradeInTokenException, GetAccessKeyInfoCommand, GetCallerIdentityCommand, GetDelegatedAccessTokenCommand, GetFederationTokenCommand, GetSessionTokenCommand, GetWebIdentityTokenCommand, IDPCommunicationErrorException, IDPRejectedClaimException, InvalidAuthorizationMessageException, InvalidIdentityTokenException, JWTPayloadSizeExceededException, MalformedPolicyDocumentException, OutboundWebIdentityFederationDisabledException, PackedPolicyTooLargeException, RegionDisabledException, STS, STSServiceException, SessionDurationEscalationException, decorateDefaultCredentialProvider, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity
// Lines: 110154-110916 in cli.formatted.js
// ---

  var Oy1 = l1A(),
    GV = O71(),
    _S = aC(),
    JS = i1A(),
    Jv = b$(),
    K6A = zV(),
    S85 = oC(),
    ZV = class A extends GV.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Yl8 = class A extends ZV {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(q) {
        super({ name: "ExpiredTokenException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    zl8 = class A extends ZV {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(q) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    wl8 = class A extends ZV {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(q) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Hl8 = class A extends ZV {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(q) {
        super({ name: "RegionDisabledException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    $l8 = class A extends ZV {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(q) {
        super({ name: "IDPRejectedClaimException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Ol8 = class A extends ZV {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(q) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    _l8 = class A extends ZV {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(q) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Jl8 = class A extends ZV {
      name = "InvalidAuthorizationMessageException";
      $fault = "client";
      constructor(q) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Xl8 = class A extends ZV {
      name = "ExpiredTradeInTokenException";
      $fault = "client";
      constructor(q) {
        super({ name: "ExpiredTradeInTokenException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    jl8 = class A extends ZV {
      name = "JWTPayloadSizeExceededException";
      $fault = "client";
      constructor(q) {
        super({
          name: "JWTPayloadSizeExceededException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Dl8 = class A extends ZV {
      name = "OutboundWebIdentityFederationDisabledException";
      $fault = "client";
      constructor(q) {
        super({
          name: "OutboundWebIdentityFederationDisabledException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Ml8 = class A extends ZV {
      name = "SessionDurationEscalationException";
      $fault = "client";
      constructor(q) {
        super({
          name: "SessionDurationEscalationException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Y6A = "Arn",
    Pl8 = "AccessKeyId",
    h85 = "AssumedPrincipal",
    I85 = "AssumeRole",
    x85 = "AssumedRoleId",
    b85 = "AssumeRoleRequest",
    u85 = "AssumeRoleResponse",
    B85 = "AssumeRootRequest",
    m85 = "AssumeRootResponse",
    n76 = "AssumedRoleUser",
    F85 = "AssumeRoleWithSAML",
    Q85 = "AssumeRoleWithSAMLRequest",
    g85 = "AssumeRoleWithSAMLResponse",
    U85 = "AssumeRoleWithWebIdentity",
    p85 = "AssumeRoleWithWebIdentityRequest",
    d85 = "AssumeRoleWithWebIdentityResponse",
    c85 = "AssumeRoot",
    Wl8 = "Account",
    z6A = "Audience",
    Dr = "Credentials",
    l85 = "ContextAssertion",
    i85 = "DecodeAuthorizationMessage",
    n85 = "DecodeAuthorizationMessageRequest",
    r85 = "DecodeAuthorizationMessageResponse",
    a85 = "DecodedMessage",
    J71 = "DurationSeconds",
    Gl8 = "Expiration",
    o85 = "ExternalId",
    s85 = "EncodedMessage",
    t85 = "ExpiredTokenException",
    e85 = "ExpiredTradeInTokenException",
    Zl8 = "FederatedUser",
    A75 = "FederatedUserId",
    q75 = "GetAccessKeyInfo",
    K75 = "GetAccessKeyInfoRequest",
    Y75 = "GetAccessKeyInfoResponse",
    z75 = "GetCallerIdentity",
    w75 = "GetCallerIdentityRequest",
    H75 = "GetCallerIdentityResponse",
    $75 = "GetDelegatedAccessToken",
    O75 = "GetDelegatedAccessTokenRequest",
    _75 = "GetDelegatedAccessTokenResponse",
    J75 = "GetFederationToken",
    X75 = "GetFederationTokenRequest",
    j75 = "GetFederationTokenResponse",
    D75 = "GetSessionToken",
    M75 = "GetSessionTokenRequest",
    P75 = "GetSessionTokenResponse",
    W75 = "GetWebIdentityToken",
    G75 = "GetWebIdentityTokenRequest",
    Z75 = "GetWebIdentityTokenResponse",
    f75 = "Issuer",
    V75 = "InvalidAuthorizationMessageException",
    N75 = "IDPCommunicationErrorException",
    T75 = "IDPRejectedClaimException",
    v75 = "InvalidIdentityTokenException",
    E75 = "JWTPayloadSizeExceededException",
    k75 = "Key",
    L75 = "MalformedPolicyDocumentException",
    R75 = "Name",
    y75 = "NameQualifier",
    C75 = "OutboundWebIdentityFederationDisabledException",
    r76 = "Policy",
    a76 = "PolicyArns",
    S75 = "PrincipalArn",
    h75 = "ProviderArn",
    I75 = "ProvidedContexts",
    x75 = "ProvidedContextsListType",
    b75 = "ProvidedContext",
    u75 = "PolicyDescriptorType",
    B75 = "ProviderId",
    _y1 = "PackedPolicySize",
    m75 = "PackedPolicyTooLargeException",
    F75 = "Provider",
    w6A = "RoleArn",
    Q75 = "RegionDisabledException",
    fl8 = "RoleSessionName",
    g75 = "Subject",
    U75 = "SigningAlgorithm",
    p75 = "SecretAccessKey",
    d75 = "SAMLAssertion",
    c75 = "SAMLAssertionType",
    l75 = "SessionDurationEscalationException",
    i75 = "SubjectFromWebIdentityToken",
    Jy1 = "SourceIdentity",
    Vl8 = "SerialNumber",
    n75 = "SubjectType",
    r75 = "SessionToken",
    H6A = "Tags",
    Nl8 = "TokenCode",
    a75 = "TradeInToken",
    o75 = "TargetPrincipal",
    s75 = "TaskPolicyArn",
    t75 = "TransitiveTagKeys",
    e75 = "Tag",
    A45 = "UserId",
    q45 = "Value",
    Tl8 = "WebIdentityToken",
    K45 = "arn",
    Y45 = "accessKeySecretType",
    ZL = "awsQueryError",
    fL = "client",
    z45 = "clientTokenType",
    VL = "error",
    NL = "httpError",
    TL = "message",
    w45 = "policyDescriptorListType",
    vl8 = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    H45 = "tradeInTokenType",
    $45 = "tagListType",
    O45 = "webIdentityTokenType",
    v4 = "com.amazonaws.sts",
    _45 = [0, v4, Y45, 8, 0],
    J45 = [0, v4, z45, 8, 0],
    X45 = [0, v4, c75, 8, 0],
    j45 = [0, v4, H45, 8, 0],
    D45 = [0, v4, O45, 8, 0],
    $6A = [3, v4, n76, 0, [x85, Y6A], [0, 0]],
    M45 = [
      3,
      v4,
      b85,
      0,
      [w6A, fl8, a76, r76, J71, H6A, t75, o85, Vl8, Nl8, Jy1, I75],
      [0, 0, () => o76, 0, 1, () => O6A, 64, 0, 0, 0, 0, () => t45],
    ],
    P45 = [
      3,
      v4,
      u85,
      0,
      [Dr, n76, _y1, Jy1],
      [[() => X71, 0], () => $6A, 1, 0],
    ],
    W45 = [
      3,
      v4,
      Q85,
      0,
      [w6A, S75, d75, a76, r76, J71],
      [0, 0, [() => X45, 0], () => o76, 0, 1],
    ],
    G45 = [
      3,
      v4,
      g85,
      0,
      [Dr, n76, _y1, g75, n75, f75, z6A, y75, Jy1],
      [[() => X71, 0], () => $6A, 1, 0, 0, 0, 0, 0, 0],
    ],
    Z45 = [
      3,
      v4,
      p85,
      0,
      [w6A, fl8, Tl8, B75, a76, r76, J71],
      [0, 0, [() => J45, 0], 0, () => o76, 0, 1],
    ],
    f45 = [
      3,
      v4,
      d85,
      0,
      [Dr, i75, n76, _y1, F75, z6A, Jy1],
      [[() => X71, 0], 0, () => $6A, 1, 0, 0, 0],
    ],
    V45 = [3, v4, B85, 0, [o75, s75, J71], [0, () => El8, 1]],
    N45 = [3, v4, m85, 0, [Dr, Jy1], [[() => X71, 0], 0]],
    X71 = [3, v4, Dr, 0, [Pl8, p75, r75, Gl8], [0, [() => _45, 0], 0, 4]],
    T45 = [3, v4, n85, 0, [s85], [0]],
    v45 = [3, v4, r85, 0, [a85], [0]],
    E45 = [
      -3,
      v4,
      t85,
      { [VL]: fL, [NL]: 400, [ZL]: ["ExpiredTokenException", 400] },
      [TL],
      [0],
    ];
  Jv.TypeRegistry.for(v4).registerError(E45, Yl8);
  var k45 = [
    -3,
    v4,
    e85,
    { [VL]: fL, [NL]: 400, [ZL]: ["ExpiredTradeInTokenException", 400] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(k45, Xl8);
  var L45 = [3, v4, Zl8, 0, [A75, Y6A], [0, 0]],
    R45 = [3, v4, K75, 0, [Pl8], [0]],
    y45 = [3, v4, Y75, 0, [Wl8], [0]],
    C45 = [3, v4, w75, 0, [], []],
    S45 = [3, v4, H75, 0, [A45, Wl8, Y6A], [0, 0, 0]],
    h45 = [3, v4, O75, 0, [a75], [[() => j45, 0]]],
    I45 = [3, v4, _75, 0, [Dr, _y1, h85], [[() => X71, 0], 1, 0]],
    x45 = [
      3,
      v4,
      X75,
      0,
      [R75, r76, a76, J71, H6A],
      [0, 0, () => o76, 1, () => O6A],
    ],
    b45 = [3, v4, j75, 0, [Dr, Zl8, _y1], [[() => X71, 0], () => L45, 1]],
    u45 = [3, v4, M75, 0, [J71, Vl8, Nl8], [1, 0, 0]],
    B45 = [3, v4, P75, 0, [Dr], [[() => X71, 0]]],
    m45 = [3, v4, G75, 0, [z6A, J71, U75, H6A], [64, 1, 0, () => O6A]],
    F45 = [3, v4, Z75, 0, [Tl8, Gl8], [[() => D45, 0], 4]],
    Q45 = [
      -3,
      v4,
      N75,
      { [VL]: fL, [NL]: 400, [ZL]: ["IDPCommunicationError", 400] },
      [TL],
      [0],
    ];
  Jv.TypeRegistry.for(v4).registerError(Q45, _l8);
  var g45 = [
    -3,
    v4,
    T75,
    { [VL]: fL, [NL]: 403, [ZL]: ["IDPRejectedClaim", 403] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(g45, $l8);
  var U45 = [
    -3,
    v4,
    V75,
    {
      [VL]: fL,
      [NL]: 400,
      [ZL]: ["InvalidAuthorizationMessageException", 400],
    },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(U45, Jl8);
  var p45 = [
    -3,
    v4,
    v75,
    { [VL]: fL, [NL]: 400, [ZL]: ["InvalidIdentityToken", 400] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(p45, Ol8);
  var d45 = [
    -3,
    v4,
    E75,
    { [VL]: fL, [NL]: 400, [ZL]: ["JWTPayloadSizeExceededException", 400] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(d45, jl8);
  var c45 = [
    -3,
    v4,
    L75,
    { [VL]: fL, [NL]: 400, [ZL]: ["MalformedPolicyDocument", 400] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(c45, zl8);
  var l45 = [
    -3,
    v4,
    C75,
    {
      [VL]: fL,
      [NL]: 403,
      [ZL]: ["OutboundWebIdentityFederationDisabledException", 403],
    },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(l45, Dl8);
  var i45 = [
    -3,
    v4,
    m75,
    { [VL]: fL, [NL]: 400, [ZL]: ["PackedPolicyTooLarge", 400] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(i45, wl8);
  var El8 = [3, v4, u75, 0, [K45], [0]],
    n45 = [3, v4, b75, 0, [h75, l85], [0, 0]],
    r45 = [
      -3,
      v4,
      Q75,
      { [VL]: fL, [NL]: 403, [ZL]: ["RegionDisabledException", 403] },
      [TL],
      [0],
    ];
  Jv.TypeRegistry.for(v4).registerError(r45, Hl8);
  var a45 = [
    -3,
    v4,
    l75,
    { [VL]: fL, [NL]: 403, [ZL]: ["SessionDurationEscalationException", 403] },
    [TL],
    [0],
  ];
  Jv.TypeRegistry.for(v4).registerError(a45, Ml8);
  var o45 = [3, v4, e75, 0, [k75, q45], [0, 0]],
    s45 = [-3, vl8, "STSServiceException", 0, [], []];
  Jv.TypeRegistry.for(vl8).registerError(s45, ZV);
  var o76 = [1, v4, w45, 0, () => El8],
    t45 = [1, v4, x75, 0, () => n45],
    O6A = [1, v4, $45, 0, () => o45],
    e45 = [9, v4, I85, 0, () => M45, () => P45],
    Aq5 = [9, v4, F85, 0, () => W45, () => G45],
    qq5 = [9, v4, U85, 0, () => Z45, () => f45],
    Kq5 = [9, v4, c85, 0, () => V45, () => N45],
    Yq5 = [9, v4, i85, 0, () => T45, () => v45],
    zq5 = [9, v4, q75, 0, () => R45, () => y45],
    wq5 = [9, v4, z75, 0, () => C45, () => S45],
    Hq5 = [9, v4, $75, 0, () => h45, () => I45],
    $q5 = [9, v4, J75, 0, () => x45, () => b45],
    Oq5 = [9, v4, D75, 0, () => u45, () => B45],
    _q5 = [9, v4, W75, 0, () => m45, () => F45];
  class s76 extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
    .n("STSClient", "AssumeRoleCommand")
    .sc(e45)
    .build() {}
  class _6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
    .n("STSClient", "AssumeRoleWithSAMLCommand")
    .sc(Aq5)
    .build() {}
  class t76 extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .sc(qq5)
    .build() {}
  class J6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {})
    .n("STSClient", "AssumeRootCommand")
    .sc(Kq5)
    .build() {}
  class X6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {})
    .n("STSClient", "DecodeAuthorizationMessageCommand")
    .sc(Yq5)
    .build() {}
  class j6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {})
    .n("STSClient", "GetAccessKeyInfoCommand")
    .sc(zq5)
    .build() {}
  class D6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
    .n("STSClient", "GetCallerIdentityCommand")
    .sc(wq5)
    .build() {}
  class M6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {})
    .n("STSClient", "GetDelegatedAccessTokenCommand")
    .sc(Hq5)
    .build() {}
  class P6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
    .n("STSClient", "GetFederationTokenCommand")
    .sc($q5)
    .build() {}
  class W6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
    .n("STSClient", "GetSessionTokenCommand")
    .sc(Oq5)
    .build() {}
  class G6A extends GV.Command.classBuilder()
    .ep(JS.commonParams)
    .m(function (A, q, K, Y) {
      return [_S.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "GetWebIdentityToken", {})
    .n("STSClient", "GetWebIdentityTokenCommand")
    .sc(_q5)
    .build() {}
  var Jq5 = {
    AssumeRoleCommand: s76,
    AssumeRoleWithSAMLCommand: _6A,
    AssumeRoleWithWebIdentityCommand: t76,
    AssumeRootCommand: J6A,
    DecodeAuthorizationMessageCommand: X6A,
    GetAccessKeyInfoCommand: j6A,
    GetCallerIdentityCommand: D6A,
    GetDelegatedAccessTokenCommand: M6A,
    GetFederationTokenCommand: P6A,
    GetSessionTokenCommand: W6A,
    GetWebIdentityTokenCommand: G6A,
  };
  class Z6A extends Oy1.STSClient {}
  GV.createAggregatedClient(Jq5, Z6A);
  var kl8 = (A) => {
      if (typeof A?.Arn === "string") {
        let q = A.Arn.split(":");
        if (q.length > 4 && q[4] !== "") return q[4];
      }
      return;
    },
    Ll8 = async (A, q, K, Y = {}) => {
      let z = typeof A === "function" ? await A() : A,
        w = typeof q === "function" ? await q() : q,
        H = await S85.stsRegionDefaultResolver(Y)();
      return (
        K?.debug?.(
          "@aws-sdk/client-sts::resolveRegion",
          "accepting first of:",
          `${z} (credential provider clientConfig)`,
          `${w} (contextual client)`,
          `${H} (STS default: AWS_REGION, profile region, or us-east-1)`,
        ),
        z ?? w ?? H
      );
    },
    Xq5 = (A, q) => {
      let K, Y;
      return async (z, w) => {
        if (((Y = z), !K)) {
          let {
              logger: J = A?.parentClientConfig?.logger,
              profile: X = A?.parentClientConfig?.profile,
              region: j,
              requestHandler: D = A?.parentClientConfig?.requestHandler,
              credentialProviderLogger: M,
              userAgentAppId: P = A?.parentClientConfig?.userAgentAppId,
            } = A,
            W = await Ll8(j, A?.parentClientConfig?.region, M, {
              logger: J,
              profile: X,
            }),
            G = !Rl8(D);
          K = new q({
            ...A,
            userAgentAppId: P,
            profile: X,
            credentialDefaultProvider: () => async () => Y,
            region: W,
            requestHandler: G ? D : void 0,
            logger: J,
          });
        }
        let { Credentials: H, AssumedRoleUser: $ } = await K.send(new s76(w));
        if (!H || !H.AccessKeyId || !H.SecretAccessKey)
          throw Error(
            `Invalid response from STS.assumeRole call with role ${w.RoleArn}`,
          );
        let O = kl8($),
          _ = {
            accessKeyId: H.AccessKeyId,
            secretAccessKey: H.SecretAccessKey,
            sessionToken: H.SessionToken,
            expiration: H.Expiration,
            ...(H.CredentialScope && { credentialScope: H.CredentialScope }),
            ...(O && { accountId: O }),
          };
        return (
          K6A.setCredentialFeature(_, "CREDENTIALS_STS_ASSUME_ROLE", "i"),
          _
        );
      };
    },
    jq5 = (A, q) => {
      let K;
      return async (Y) => {
        if (!K) {
          let {
              logger: O = A?.parentClientConfig?.logger,
              profile: _ = A?.parentClientConfig?.profile,
              region: J,
              requestHandler: X = A?.parentClientConfig?.requestHandler,
              credentialProviderLogger: j,
              userAgentAppId: D = A?.parentClientConfig?.userAgentAppId,
            } = A,
            M = await Ll8(J, A?.parentClientConfig?.region, j, {
              logger: O,
              profile: _,
            }),
            P = !Rl8(X);
          K = new q({
            ...A,
            userAgentAppId: D,
            profile: _,
            region: M,
            requestHandler: P ? X : void 0,
            logger: O,
          });
        }
        let { Credentials: z, AssumedRoleUser: w } = await K.send(new t76(Y));
        if (!z || !z.AccessKeyId || !z.SecretAccessKey)
          throw Error(
            `Invalid response from STS.assumeRoleWithWebIdentity call with role ${Y.RoleArn}`,
          );
        let H = kl8(w),
          $ = {
            accessKeyId: z.AccessKeyId,
            secretAccessKey: z.SecretAccessKey,
            sessionToken: z.SessionToken,
            expiration: z.Expiration,
            ...(z.CredentialScope && { credentialScope: z.CredentialScope }),
            ...(H && { accountId: H }),
          };
        if (H) K6A.setCredentialFeature($, "RESOLVED_ACCOUNT_ID", "T");
        return (
          K6A.setCredentialFeature(
            $,
            "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID",
            "k",
          ),
          $
        );
      };
    },
    Rl8 = (A) => {
      return A?.metadata?.handlerProtocol === "h2";
    },
    yl8 = (A, q) => {
      if (!q) return A;
      else
        return class extends A {
          constructor(Y) {
            super(Y);
            for (let z of q) this.middlewareStack.use(z);
          }
        };
    },
    Cl8 = (A = {}, q) => Xq5(A, yl8(Oy1.STSClient, q)),
    Sl8 = (A = {}, q) => jq5(A, yl8(Oy1.STSClient, q)),
    Dq5 = (A) => (q) =>
      A({ roleAssumer: Cl8(q), roleAssumerWithWebIdentity: Sl8(q), ...q });
  Object.defineProperty(i76, "$Command", {
    enumerable: !0,
    get: function () {
      return GV.Command;
    },
  });
  i76.AssumeRoleCommand = s76;
  i76.AssumeRoleWithSAMLCommand = _6A;
  i76.AssumeRoleWithWebIdentityCommand = t76;
  i76.AssumeRootCommand = J6A;
  i76.DecodeAuthorizationMessageCommand = X6A;
  i76.ExpiredTokenException = Yl8;
  i76.ExpiredTradeInTokenException = Xl8;
  i76.GetAccessKeyInfoCommand = j6A;
  i76.GetCallerIdentityCommand = D6A;
  i76.GetDelegatedAccessTokenCommand = M6A;
  i76.GetFederationTokenCommand = P6A;
  i76.GetSessionTokenCommand = W6A;
  i76.GetWebIdentityTokenCommand = G6A;
  i76.IDPCommunicationErrorException = _l8;
  i76.IDPRejectedClaimException = $l8;
  i76.InvalidAuthorizationMessageException = Jl8;
  i76.InvalidIdentityTokenException = Ol8;
  i76.JWTPayloadSizeExceededException = jl8;
  i76.MalformedPolicyDocumentException = zl8;
  i76.OutboundWebIdentityFederationDisabledException = Dl8;
  i76.PackedPolicyTooLargeException = wl8;
  i76.RegionDisabledException = Hl8;
  i76.STS = Z6A;
  i76.STSServiceException = ZV;
  i76.SessionDurationEscalationException = Ml8;
  i76.decorateDefaultCredentialProvider = Dq5;
  i76.getDefaultRoleAssumer = Cl8;
  i76.getDefaultRoleAssumerWithWebIdentity = Sl8;
  Object.keys(Oy1).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(i76, A))
      Object.defineProperty(i76, A, {
        enumerable: !0,
        get: function () {
          return Oy1[A];
        },
      });
  });
