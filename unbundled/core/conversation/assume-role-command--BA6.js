// Module: BA6 (cjs)
// Dependencies: [zV, b$, aC, dG, oC, Br6, ur6]
// Exports: AssumeRoleCommand, AssumeRoleWithWebIdentityCommand, ExpiredTokenException, IDPCommunicationErrorException, IDPRejectedClaimException, InvalidIdentityTokenException, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, STS, STSServiceException, decorateDefaultCredentialProvider, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity
// Lines: 91698-92139 in cli.formatted.js
// ---

  var HR1 = ur6(),
    $R1 = dG(),
    hI8 = aC(),
    II8 = Br6(),
    ln = b$(),
    cr6 = zV(),
    _33 = oC(),
    Fg = class A extends $R1.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    xI8 = class A extends Fg {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(q) {
        super({ name: "ExpiredTokenException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    bI8 = class A extends Fg {
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
    uI8 = class A extends Fg {
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
    BI8 = class A extends Fg {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(q) {
        super({ name: "RegionDisabledException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    mI8 = class A extends Fg {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(q) {
        super({ name: "IDPRejectedClaimException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    FI8 = class A extends Fg {
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
    QI8 = class A extends Fg {
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
    J33 = "Arn",
    X33 = "AccessKeyId",
    j33 = "AssumeRole",
    D33 = "AssumedRoleId",
    M33 = "AssumeRoleRequest",
    P33 = "AssumeRoleResponse",
    lr6 = "AssumedRoleUser",
    W33 = "AssumeRoleWithWebIdentity",
    G33 = "AssumeRoleWithWebIdentityRequest",
    Z33 = "AssumeRoleWithWebIdentityResponse",
    f33 = "Audience",
    ir6 = "Credentials",
    V33 = "ContextAssertion",
    gI8 = "DurationSeconds",
    N33 = "Expiration",
    T33 = "ExternalId",
    v33 = "ExpiredTokenException",
    E33 = "IDPCommunicationErrorException",
    k33 = "IDPRejectedClaimException",
    L33 = "InvalidIdentityTokenException",
    R33 = "Key",
    y33 = "MalformedPolicyDocumentException",
    UI8 = "Policy",
    pI8 = "PolicyArns",
    C33 = "ProviderArn",
    S33 = "ProvidedContexts",
    h33 = "ProvidedContextsListType",
    I33 = "ProvidedContext",
    x33 = "PolicyDescriptorType",
    b33 = "ProviderId",
    dI8 = "PackedPolicySize",
    u33 = "PackedPolicyTooLargeException",
    B33 = "Provider",
    cI8 = "RoleArn",
    m33 = "RegionDisabledException",
    lI8 = "RoleSessionName",
    F33 = "SecretAccessKey",
    Q33 = "SubjectFromWebIdentityToken",
    nr6 = "SourceIdentity",
    g33 = "SerialNumber",
    U33 = "SessionToken",
    p33 = "Tags",
    d33 = "TokenCode",
    c33 = "TransitiveTagKeys",
    l33 = "Tag",
    i33 = "Value",
    n33 = "WebIdentityToken",
    r33 = "arn",
    a33 = "accessKeySecretType",
    R81 = "awsQueryError",
    y81 = "client",
    o33 = "clientTokenType",
    C81 = "error",
    S81 = "httpError",
    h81 = "message",
    s33 = "policyDescriptorListType",
    iI8 = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    t33 = "tagListType",
    A2 = "com.amazonaws.sts",
    e33 = [0, A2, a33, 8, 0],
    A53 = [0, A2, o33, 8, 0],
    nI8 = [3, A2, lr6, 0, [D33, J33], [0, 0]],
    q53 = [
      3,
      A2,
      M33,
      0,
      [cI8, lI8, pI8, UI8, gI8, p33, c33, T33, g33, d33, nr6, S33],
      [0, 0, () => aI8, 0, 1, () => G53, 64, 0, 0, 0, 0, () => W53],
    ],
    K53 = [
      3,
      A2,
      P33,
      0,
      [ir6, lr6, dI8, nr6],
      [[() => rI8, 0], () => nI8, 1, 0],
    ],
    Y53 = [
      3,
      A2,
      G33,
      0,
      [cI8, lI8, n33, b33, pI8, UI8, gI8],
      [0, 0, [() => A53, 0], 0, () => aI8, 0, 1],
    ],
    z53 = [
      3,
      A2,
      Z33,
      0,
      [ir6, Q33, lr6, dI8, B33, f33, nr6],
      [[() => rI8, 0], 0, () => nI8, 1, 0, 0, 0],
    ],
    rI8 = [3, A2, ir6, 0, [X33, F33, U33, N33], [0, [() => e33, 0], 0, 4]],
    w53 = [
      -3,
      A2,
      v33,
      { [C81]: y81, [S81]: 400, [R81]: ["ExpiredTokenException", 400] },
      [h81],
      [0],
    ];
  ln.TypeRegistry.for(A2).registerError(w53, xI8);
  var H53 = [
    -3,
    A2,
    E33,
    { [C81]: y81, [S81]: 400, [R81]: ["IDPCommunicationError", 400] },
    [h81],
    [0],
  ];
  ln.TypeRegistry.for(A2).registerError(H53, QI8);
  var $53 = [
    -3,
    A2,
    k33,
    { [C81]: y81, [S81]: 403, [R81]: ["IDPRejectedClaim", 403] },
    [h81],
    [0],
  ];
  ln.TypeRegistry.for(A2).registerError($53, mI8);
  var O53 = [
    -3,
    A2,
    L33,
    { [C81]: y81, [S81]: 400, [R81]: ["InvalidIdentityToken", 400] },
    [h81],
    [0],
  ];
  ln.TypeRegistry.for(A2).registerError(O53, FI8);
  var _53 = [
    -3,
    A2,
    y33,
    { [C81]: y81, [S81]: 400, [R81]: ["MalformedPolicyDocument", 400] },
    [h81],
    [0],
  ];
  ln.TypeRegistry.for(A2).registerError(_53, bI8);
  var J53 = [
    -3,
    A2,
    u33,
    { [C81]: y81, [S81]: 400, [R81]: ["PackedPolicyTooLarge", 400] },
    [h81],
    [0],
  ];
  ln.TypeRegistry.for(A2).registerError(J53, uI8);
  var X53 = [3, A2, x33, 0, [r33], [0]],
    j53 = [3, A2, I33, 0, [C33, V33], [0, 0]],
    D53 = [
      -3,
      A2,
      m33,
      { [C81]: y81, [S81]: 403, [R81]: ["RegionDisabledException", 403] },
      [h81],
      [0],
    ];
  ln.TypeRegistry.for(A2).registerError(D53, BI8);
  var M53 = [3, A2, l33, 0, [R33, i33], [0, 0]],
    P53 = [-3, iI8, "STSServiceException", 0, [], []];
  ln.TypeRegistry.for(iI8).registerError(P53, Fg);
  var aI8 = [1, A2, s33, 0, () => X53],
    W53 = [1, A2, h33, 0, () => j53],
    G53 = [1, A2, t33, 0, () => M53],
    Z53 = [9, A2, j33, 0, () => q53, () => K53],
    f53 = [9, A2, W33, 0, () => Y53, () => z53];
  class bA6 extends $R1.Command.classBuilder()
    .ep(II8.commonParams)
    .m(function (A, q, K, Y) {
      return [hI8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
    .n("STSClient", "AssumeRoleCommand")
    .sc(Z53)
    .build() {}
  class uA6 extends $R1.Command.classBuilder()
    .ep(II8.commonParams)
    .m(function (A, q, K, Y) {
      return [hI8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .sc(f53)
    .build() {}
  var V53 = { AssumeRoleCommand: bA6, AssumeRoleWithWebIdentityCommand: uA6 };
  class rr6 extends HR1.STSClient {}
  $R1.createAggregatedClient(V53, rr6);
  var oI8 = (A) => {
      if (typeof A?.Arn === "string") {
        let q = A.Arn.split(":");
        if (q.length > 4 && q[4] !== "") return q[4];
      }
      return;
    },
    sI8 = async (A, q, K, Y = {}) => {
      let z = typeof A === "function" ? await A() : A,
        w = typeof q === "function" ? await q() : q,
        H = await _33.stsRegionDefaultResolver(Y)();
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
    N53 = (A, q) => {
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
            W = await sI8(j, A?.parentClientConfig?.region, M, {
              logger: J,
              profile: X,
            }),
            G = !tI8(D);
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
        let { Credentials: H, AssumedRoleUser: $ } = await K.send(new bA6(w));
        if (!H || !H.AccessKeyId || !H.SecretAccessKey)
          throw Error(
            `Invalid response from STS.assumeRole call with role ${w.RoleArn}`,
          );
        let O = oI8($),
          _ = {
            accessKeyId: H.AccessKeyId,
            secretAccessKey: H.SecretAccessKey,
            sessionToken: H.SessionToken,
            expiration: H.Expiration,
            ...(H.CredentialScope && { credentialScope: H.CredentialScope }),
            ...(O && { accountId: O }),
          };
        return (
          cr6.setCredentialFeature(_, "CREDENTIALS_STS_ASSUME_ROLE", "i"),
          _
        );
      };
    },
    T53 = (A, q) => {
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
            M = await sI8(J, A?.parentClientConfig?.region, j, {
              logger: O,
              profile: _,
            }),
            P = !tI8(X);
          K = new q({
            ...A,
            userAgentAppId: D,
            profile: _,
            region: M,
            requestHandler: P ? X : void 0,
            logger: O,
          });
        }
        let { Credentials: z, AssumedRoleUser: w } = await K.send(new uA6(Y));
        if (!z || !z.AccessKeyId || !z.SecretAccessKey)
          throw Error(
            `Invalid response from STS.assumeRoleWithWebIdentity call with role ${Y.RoleArn}`,
          );
        let H = oI8(w),
          $ = {
            accessKeyId: z.AccessKeyId,
            secretAccessKey: z.SecretAccessKey,
            sessionToken: z.SessionToken,
            expiration: z.Expiration,
            ...(z.CredentialScope && { credentialScope: z.CredentialScope }),
            ...(H && { accountId: H }),
          };
        if (H) cr6.setCredentialFeature($, "RESOLVED_ACCOUNT_ID", "T");
        return (
          cr6.setCredentialFeature(
            $,
            "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID",
            "k",
          ),
          $
        );
      };
    },
    tI8 = (A) => {
      return A?.metadata?.handlerProtocol === "h2";
    },
    eI8 = (A, q) => {
      if (!q) return A;
      else
        return class extends A {
          constructor(Y) {
            super(Y);
            for (let z of q) this.middlewareStack.use(z);
          }
        };
    },
    Ax8 = (A = {}, q) => N53(A, eI8(HR1.STSClient, q)),
    qx8 = (A = {}, q) => T53(A, eI8(HR1.STSClient, q)),
    v53 = (A) => (q) =>
      A({ roleAssumer: Ax8(q), roleAssumerWithWebIdentity: qx8(q), ...q });
  Object.defineProperty(xA6, "$Command", {
    enumerable: !0,
    get: function () {
      return $R1.Command;
    },
  });
  xA6.AssumeRoleCommand = bA6;
  xA6.AssumeRoleWithWebIdentityCommand = uA6;
  xA6.ExpiredTokenException = xI8;
  xA6.IDPCommunicationErrorException = QI8;
  xA6.IDPRejectedClaimException = mI8;
  xA6.InvalidIdentityTokenException = FI8;
  xA6.MalformedPolicyDocumentException = bI8;
  xA6.PackedPolicyTooLargeException = uI8;
  xA6.RegionDisabledException = BI8;
  xA6.STS = rr6;
  xA6.STSServiceException = Fg;
  xA6.decorateDefaultCredentialProvider = v53;
  xA6.getDefaultRoleAssumer = Ax8;
  xA6.getDefaultRoleAssumerWithWebIdentity = qx8;
  Object.keys(HR1).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(xA6, A))
      Object.defineProperty(xA6, A, {
        enumerable: !0,
        get: function () {
          return HR1[A];
        },
      });
  });
