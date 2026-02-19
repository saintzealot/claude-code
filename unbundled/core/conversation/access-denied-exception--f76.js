// Module: f76 (cjs)
// Dependencies: [b$, tz, Vg, Ng, Tg, cb, DJ, yg, aC, XM, oC, om8, ZQ8, fQ8, mR1, rt6, Lg8, Sg8]
// Exports: AccessDeniedException, ApplyGuardrailCommand, AsyncInvokeStatus, BedrockRuntime, BedrockRuntimeClient, BedrockRuntimeServiceException, CachePointType, ConflictException, ConversationRole, ConverseCommand, ConverseStreamCommand, CountTokensCommand, DocumentFormat, GetAsyncInvokeCommand, GuardrailAction, GuardrailAutomatedReasoningLogicWarningType, GuardrailContentFilterConfidence, GuardrailContentFilterStrength, GuardrailContentFilterType, GuardrailContentPolicyAction, GuardrailContentQualifier, GuardrailContentSource, GuardrailContextualGroundingFilterType, GuardrailContextualGroundingPolicyAction, GuardrailConverseContentQualifier, GuardrailConverseImageFormat, GuardrailImageFormat, GuardrailManagedWordType, GuardrailOutputScope, GuardrailPiiEntityType, GuardrailSensitiveInformationPolicyAction, GuardrailStreamProcessingMode, GuardrailTopicPolicyAction, GuardrailTopicType, GuardrailTrace, GuardrailWordPolicyAction, ImageFormat, InternalServerException, InvokeModelCommand, InvokeModelWithBidirectionalStreamCommand, InvokeModelWithResponseStreamCommand, ListAsyncInvokesCommand, ModelErrorException, ModelNotReadyException, ModelStreamErrorException, ModelTimeoutException, PerformanceConfigLatency, ResourceNotFoundException, ServiceQuotaExceededException, ServiceTierType, ServiceUnavailableException, SortAsyncInvocationBy, SortOrder, StartAsyncInvokeCommand, StopReason, ThrottlingException, ToolResultStatus, ToolUseType, Trace, ValidationException, VideoFormat, paginateListAsyncInvokes
// Lines: 104001-105720 in cli.formatted.js
// ---

  var cg8 = om8(),
    hg8 = Vg(),
    $p3 = Ng(),
    Op3 = Tg(),
    Ig8 = cb(),
    lg8 = ZQ8(),
    _p3 = DJ(),
    l86 = tz(),
    MV = b$(),
    Jp3 = fQ8(),
    Xp3 = yg(),
    wS = aC(),
    xg8 = XM(),
    WM = mR1(),
    bg8 = rt6(),
    jp3 = Lg8(),
    ug8 = oC(),
    Bg8 = Sg8(),
    Dp3 = (A) => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "bedrock",
      });
    },
    Hu = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    Mp3 = (A) => {
      let {
        httpAuthSchemes: q,
        httpAuthSchemeProvider: K,
        credentials: Y,
        token: z,
      } = A;
      return {
        setHttpAuthScheme(w) {
          let H = q.findIndex(($) => $.schemeId === w.schemeId);
          if (H === -1) q.push(w);
          else q.splice(H, 1, w);
        },
        httpAuthSchemes() {
          return q;
        },
        setHttpAuthSchemeProvider(w) {
          K = w;
        },
        httpAuthSchemeProvider() {
          return K;
        },
        setCredentials(w) {
          Y = w;
        },
        credentials() {
          return Y;
        },
        setToken(w) {
          z = w;
        },
        token() {
          return z;
        },
      };
    },
    Pp3 = (A) => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
        token: A.token(),
      };
    },
    Wp3 = (A, q) => {
      let K = Object.assign(
        ug8.getAwsRegionExtensionConfiguration(A),
        WM.getDefaultExtensionConfiguration(A),
        Bg8.getHttpHandlerExtensionConfiguration(A),
        Mp3(A),
      );
      return (
        q.forEach((Y) => Y.configure(K)),
        Object.assign(
          A,
          ug8.resolveAwsRegionExtensionConfiguration(K),
          WM.resolveDefaultRuntimeConfig(K),
          Bg8.resolveHttpHandlerRuntimeConfig(K),
          Pp3(K),
        )
      );
    };
  class n86 extends WM.Client {
    config;
    constructor(...[A]) {
      let q = jp3.getRuntimeConfig(A || {});
      super(q);
      this.initConfig = q;
      let K = Dp3(q),
        Y = Ig8.resolveUserAgentConfig(K),
        z = xg8.resolveRetryConfig(Y),
        w = _p3.resolveRegionConfig(z),
        H = hg8.resolveHostHeaderConfig(w),
        $ = wS.resolveEndpointConfig(H),
        O = Jp3.resolveEventStreamSerdeConfig($),
        _ = bg8.resolveHttpAuthSchemeConfig(O),
        J = cg8.resolveEventStreamConfig(_),
        X = lg8.resolveWebSocketConfig(J),
        j = Wp3(X, A?.extensions || []);
      ((this.config = j),
        this.middlewareStack.use(MV.getSchemaSerdePlugin(this.config)),
        this.middlewareStack.use(Ig8.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(xg8.getRetryPlugin(this.config)),
        this.middlewareStack.use(Xp3.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(hg8.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use($p3.getLoggerPlugin(this.config)),
        this.middlewareStack.use(Op3.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          l86.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              bg8.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (D) =>
              new l86.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": D.credentials,
                "smithy.api#httpBearerAuth": D.token,
              }),
          }),
        ),
        this.middlewareStack.use(l86.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  }
  var PV = class A extends WM.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ig8 = class A extends PV {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(q) {
        super({ name: "AccessDeniedException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ng8 = class A extends PV {
      name = "InternalServerException";
      $fault = "server";
      constructor(q) {
        super({ name: "InternalServerException", $fault: "server", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    rg8 = class A extends PV {
      name = "ThrottlingException";
      $fault = "client";
      constructor(q) {
        super({ name: "ThrottlingException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ag8 = class A extends PV {
      name = "ValidationException";
      $fault = "client";
      constructor(q) {
        super({ name: "ValidationException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    og8 = class A extends PV {
      name = "ConflictException";
      $fault = "client";
      constructor(q) {
        super({ name: "ConflictException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    sg8 = class A extends PV {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    tg8 = class A extends PV {
      name = "ServiceQuotaExceededException";
      $fault = "client";
      constructor(q) {
        super({
          name: "ServiceQuotaExceededException",
          $fault: "client",
          ...q,
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    eg8 = class A extends PV {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(q) {
        super({ name: "ServiceUnavailableException", $fault: "server", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    AU8 = class A extends PV {
      name = "ModelErrorException";
      $fault = "client";
      originalStatusCode;
      resourceName;
      constructor(q) {
        super({ name: "ModelErrorException", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype),
          (this.originalStatusCode = q.originalStatusCode),
          (this.resourceName = q.resourceName));
      }
    },
    qU8 = class A extends PV {
      name = "ModelNotReadyException";
      $fault = "client";
      $retryable = {};
      constructor(q) {
        super({ name: "ModelNotReadyException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    KU8 = class A extends PV {
      name = "ModelTimeoutException";
      $fault = "client";
      constructor(q) {
        super({ name: "ModelTimeoutException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    YU8 = class A extends PV {
      name = "ModelStreamErrorException";
      $fault = "client";
      originalStatusCode;
      originalMessage;
      constructor(q) {
        super({ name: "ModelStreamErrorException", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype),
          (this.originalStatusCode = q.originalStatusCode),
          (this.originalMessage = q.originalMessage));
      }
    },
    Gp3 = "Accept",
    Zp3 = "AccessDeniedException",
    fp3 = "ApplyGuardrail",
    Vp3 = "ApplyGuardrailRequest",
    Np3 = "ApplyGuardrailResponse",
    Tp3 = "AsyncInvokeMessage",
    vp3 = "AsyncInvokeOutputDataConfig",
    Ep3 = "AsyncInvokeSummary",
    kp3 = "AsyncInvokeS3OutputDataConfig",
    Lp3 = "AsyncInvokeSummaries",
    Rp3 = "AnyToolChoice",
    yp3 = "AutoToolChoice",
    Cp3 = "Body",
    Sp3 = "BidirectionalInputPayloadPart",
    hp3 = "BidirectionalOutputPayloadPart",
    Ip3 = "Citation",
    xp3 = "ContentBlocks",
    bp3 = "ContentBlockDelta",
    up3 = "ContentBlockDeltaEvent",
    Bp3 = "ContentBlockStart",
    mp3 = "ContentBlockStartEvent",
    Fp3 = "ContentBlockStopEvent",
    Qp3 = "ContentBlock",
    gp3 = "CitationsConfig",
    Up3 = "CitationsContentBlock",
    pp3 = "CitationsDelta",
    dp3 = "ConflictException",
    cp3 = "CitationGeneratedContent",
    lp3 = "CitationGeneratedContentList",
    ip3 = "CitationLocation",
    np3 = "ConverseMetrics",
    rp3 = "ConverseOutput",
    ap3 = "CachePointBlock",
    op3 = "ConverseRequest",
    sp3 = "ConverseResponse",
    tp3 = "ConverseStream",
    ep3 = "CitationSourceContent",
    Ad3 = "CitationSourceContentDelta",
    qd3 = "CitationSourceContentList",
    Kd3 = "CitationSourceContentListDelta",
    Yd3 = "ConverseStreamMetrics",
    zd3 = "ConverseStreamMetadataEvent",
    wd3 = "ConverseStreamOutput",
    Hd3 = "ConverseStreamRequest",
    $d3 = "ConverseStreamResponse",
    Od3 = "ConverseStreamTrace",
    _d3 = "ConverseTrace",
    Jd3 = "CountTokensInput",
    Xd3 = "ConverseTokensRequest",
    jd3 = "CountTokensRequest",
    Dd3 = "CountTokensResponse",
    Ye6 = "Content-Type",
    Md3 = "CountTokens",
    Pd3 = "Citations",
    Wd3 = "Converse",
    Gd3 = "DocumentBlock",
    Zd3 = "DocumentContentBlocks",
    fd3 = "DocumentContentBlock",
    Vd3 = "DocumentCharLocation",
    Nd3 = "DocumentChunkLocation",
    Td3 = "DocumentPageLocation",
    vd3 = "DocumentSource",
    Ed3 = "GuardrailAssessment",
    kd3 = "GetAsyncInvoke",
    Ld3 = "GetAsyncInvokeRequest",
    Rd3 = "GetAsyncInvokeResponse",
    yd3 = "GuardrailAssessmentList",
    Cd3 = "GuardrailAssessmentListMap",
    Sd3 = "GuardrailAssessmentMap",
    hd3 = "GuardrailAutomatedReasoningDifferenceScenarioList",
    Id3 = "GuardrailAutomatedReasoningFinding",
    xd3 = "GuardrailAutomatedReasoningFindingList",
    bd3 = "GuardrailAutomatedReasoningImpossibleFinding",
    ud3 = "GuardrailAutomatedReasoningInvalidFinding",
    Bd3 = "GuardrailAutomatedReasoningInputTextReference",
    md3 = "GuardrailAutomatedReasoningInputTextReferenceList",
    Fd3 = "GuardrailAutomatedReasoningLogicWarning",
    Qd3 = "GuardrailAutomatedReasoningNoTranslationsFinding",
    gd3 = "GuardrailAutomatedReasoningPolicyAssessment",
    Ud3 = "GuardrailAutomatedReasoningRule",
    pd3 = "GuardrailAutomatedReasoningRuleList",
    dd3 = "GuardrailAutomatedReasoningScenario",
    cd3 = "GuardrailAutomatedReasoningSatisfiableFinding",
    ld3 = "GuardrailAutomatedReasoningStatementList",
    id3 = "GuardrailAutomatedReasoningStatementLogicContent",
    nd3 = "GuardrailAutomatedReasoningStatementNaturalLanguageContent",
    rd3 = "GuardrailAutomatedReasoningStatement",
    ad3 = "GuardrailAutomatedReasoningTranslation",
    od3 = "GuardrailAutomatedReasoningTranslationAmbiguousFinding",
    sd3 = "GuardrailAutomatedReasoningTooComplexFinding",
    td3 = "GuardrailAutomatedReasoningTranslationList",
    ed3 = "GuardrailAutomatedReasoningTranslationOption",
    Ac3 = "GuardrailAutomatedReasoningTranslationOptionList",
    qc3 = "GuardrailAutomatedReasoningValidFinding",
    Kc3 = "GuardrailConfiguration",
    Yc3 = "GuardrailContentBlock",
    zc3 = "GuardrailContentBlockList",
    wc3 = "GuardrailConverseContentBlock",
    Hc3 = "GuardrailContentFilter",
    $c3 = "GuardrailContentFilterList",
    Oc3 = "GuardrailContextualGroundingFilter",
    _c3 = "GuardrailContextualGroundingFilters",
    Jc3 = "GuardrailContextualGroundingPolicyAssessment",
    Xc3 = "GuardrailConverseImageBlock",
    jc3 = "GuardrailConverseImageSource",
    Dc3 = "GuardrailContentPolicyAssessment",
    Mc3 = "GuardrailConverseTextBlock",
    Pc3 = "GuardrailCustomWord",
    Wc3 = "GuardrailCustomWordList",
    Gc3 = "GuardrailCoverage",
    Zc3 = "GuardrailImageBlock",
    fc3 = "GuardrailImageCoverage",
    Vc3 = "GuardrailInvocationMetrics",
    Nc3 = "GuardrailImageSource",
    Tc3 = "GuardrailManagedWord",
    vc3 = "GuardrailManagedWordList",
    Ec3 = "GuardrailOutputContent",
    kc3 = "GuardrailOutputContentList",
    Lc3 = "GuardrailPiiEntityFilter",
    Rc3 = "GuardrailPiiEntityFilterList",
    yc3 = "GuardrailRegexFilter",
    Cc3 = "GuardrailRegexFilterList",
    Sc3 = "GuardrailStreamConfiguration",
    hc3 = "GuardrailSensitiveInformationPolicyAssessment",
    Ic3 = "GuardrailTopic",
    xc3 = "GuardrailTraceAssessment",
    bc3 = "GuardrailTextBlock",
    uc3 = "GuardrailTextCharactersCoverage",
    Bc3 = "GuardrailTopicList",
    mc3 = "GuardrailTopicPolicyAssessment",
    Fc3 = "GuardrailUsage",
    Qc3 = "GuardrailWordPolicyAssessment",
    gc3 = "ImageBlock",
    Uc3 = "InferenceConfiguration",
    pc3 = "InvokeModel",
    dc3 = "InvokeModelRequest",
    cc3 = "InvokeModelResponse",
    lc3 = "InvokeModelTokensRequest",
    ic3 = "InvokeModelWithBidirectionalStream",
    nc3 = "InvokeModelWithBidirectionalStreamInput",
    rc3 = "InvokeModelWithBidirectionalStreamOutput",
    ac3 = "InvokeModelWithBidirectionalStreamRequest",
    oc3 = "InvokeModelWithBidirectionalStreamResponse",
    sc3 = "InvokeModelWithResponseStream",
    tc3 = "InvokeModelWithResponseStreamRequest",
    ec3 = "InvokeModelWithResponseStreamResponse",
    Al3 = "ImageSource",
    ql3 = "InternalServerException",
    Kl3 = "ListAsyncInvokes",
    Yl3 = "ListAsyncInvokesRequest",
    zl3 = "ListAsyncInvokesResponse",
    wl3 = "Message",
    Hl3 = "ModelErrorException",
    $l3 = "ModelInputPayload",
    Ol3 = "ModelNotReadyException",
    _l3 = "MessageStartEvent",
    Jl3 = "ModelStreamErrorException",
    Xl3 = "MessageStopEvent",
    jl3 = "ModelTimeoutException",
    Dl3 = "Messages",
    Ml3 = "PartBody",
    Pl3 = "PerformanceConfiguration",
    Wl3 = "PayloadPart",
    Gl3 = "PromptRouterTrace",
    Zl3 = "PromptVariableMap",
    fl3 = "PromptVariableValues",
    Vl3 = "ReasoningContentBlock",
    Nl3 = "ReasoningContentBlockDelta",
    Tl3 = "RequestMetadata",
    vl3 = "ResourceNotFoundException",
    El3 = "ResponseStream",
    kl3 = "ReasoningTextBlock",
    Ll3 = "StartAsyncInvoke",
    Rl3 = "StartAsyncInvokeRequest",
    yl3 = "StartAsyncInvokeResponse",
    Cl3 = "SystemContentBlocks",
    Sl3 = "SystemContentBlock",
    hl3 = "S3Location",
    Il3 = "ServiceQuotaExceededException",
    xl3 = "SearchResultBlock",
    bl3 = "SearchResultContentBlock",
    ul3 = "SearchResultContentBlocks",
    Bl3 = "SearchResultLocation",
    ml3 = "ServiceTier",
    Fl3 = "SpecificToolChoice",
    Ql3 = "SystemTool",
    gl3 = "ServiceUnavailableException",
    Ul3 = "Tag",
    pl3 = "ToolConfiguration",
    dl3 = "ToolChoice",
    cl3 = "ThrottlingException",
    ll3 = "ToolInputSchema",
    il3 = "TagList",
    nl3 = "ToolResultBlock",
    rl3 = "ToolResultBlocksDelta",
    al3 = "ToolResultBlockDelta",
    ol3 = "ToolResultBlockStart",
    sl3 = "ToolResultContentBlocks",
    tl3 = "ToolResultContentBlock",
    el3 = "ToolSpecification",
    Ai3 = "TokenUsage",
    qi3 = "ToolUseBlock",
    Ki3 = "ToolUseBlockDelta",
    Yi3 = "ToolUseBlockStart",
    zi3 = "Tools",
    wi3 = "Tool",
    Hi3 = "VideoBlock",
    $i3 = "ValidationException",
    Oi3 = "VideoSource",
    _i3 = "WebLocation",
    Ji3 = "X-Amzn-Bedrock-Accept",
    Xi3 = "X-Amzn-Bedrock-Content-Type",
    zU8 = "X-Amzn-Bedrock-GuardrailIdentifier",
    wU8 = "X-Amzn-Bedrock-GuardrailVersion",
    r86 = "X-Amzn-Bedrock-PerformanceConfig-Latency",
    a86 = "X-Amzn-Bedrock-Service-Tier",
    HU8 = "X-Amzn-Bedrock-Trace",
    qr = "action",
    ji3 = "asyncInvokeSummaries",
    ze6 = "additionalModelRequestFields",
    $U8 = "additionalModelResponseFieldPaths",
    OU8 = "additionalModelResponseFields",
    _U8 = "actionReason",
    Di3 = "automatedReasoningPolicy",
    Mi3 = "automatedReasoningPolicyUnits",
    Pi3 = "automatedReasoningPolicies",
    JU8 = "accept",
    Wi3 = "any",
    Gi3 = "assessments",
    Zi3 = "auto",
    Kr = "bytes",
    XU8 = "bucketOwner",
    n81 = "body",
    $u = "client",
    fi3 = "contentBlockDelta",
    we6 = "contentBlockIndex",
    Vi3 = "contentBlockStart",
    Ni3 = "contentBlockStop",
    Ti3 = "citationsContent",
    vi3 = "claimsFalseScenario",
    Ei3 = "contextualGroundingPolicy",
    ki3 = "contextualGroundingPolicyUnits",
    Li3 = "contentPolicy",
    Ri3 = "contentPolicyImageUnits",
    yi3 = "contentPolicyUnits",
    He6 = "cachePoint",
    jU8 = "contradictingRules",
    Ci3 = "cacheReadInputTokens",
    $e6 = "clientRequestToken",
    o86 = "contentType",
    DU8 = "claimsTrueScenario",
    Si3 = "customWords",
    hi3 = "cacheWriteInputTokens",
    Oe6 = "chunk",
    _e6 = "citations",
    Ii3 = "citation",
    MU8 = "claims",
    Y_1 = "content",
    xi3 = "context",
    PU8 = "confidence",
    bi3 = "converse",
    ui3 = "delta",
    Bi3 = "documentChar",
    mi3 = "documentChunk",
    Je6 = "documentIndex",
    Fi3 = "documentPage",
    Qi3 = "differenceScenarios",
    r81 = "detected",
    gi3 = "description",
    Ui3 = "domain",
    WU8 = "document",
    DL = "error",
    GU8 = "endTime",
    pi3 = "enabled",
    s86 = "end",
    dR1 = "format",
    ZU8 = "failureMessage",
    di3 = "filterStrength",
    ci3 = "findings",
    fU8 = "filters",
    VU8 = "guardrail",
    NU8 = "guardrailCoverage",
    TU8 = "guardrailConfig",
    vU8 = "guardContent",
    cR1 = "guardrailIdentifier",
    li3 = "guardrailProcessingLatency",
    lR1 = "guardrailVersion",
    EU8 = "guarded",
    Ou = "http",
    ML = "httpError",
    NX = "httpHeader",
    i81 = "httpQuery",
    Xe6 = "input",
    t86 = "invocationArn",
    ii3 = "inputAssessment",
    kU8 = "inferenceConfig",
    ni3 = "invocationMetrics",
    ri3 = "invokedModelId",
    ai3 = "invokeModel",
    oi3 = "inputSchema",
    je6 = "internalServerException",
    LU8 = "inputTokens",
    si3 = "identifier",
    ti3 = "images",
    e86 = "image",
    ei3 = "impossible",
    An3 = "invalid",
    RU8 = "json",
    qn3 = "key",
    Kn3 = "kmsKeyId",
    yU8 = "location",
    CU8 = "latencyMs",
    SU8 = "lastModifiedTime",
    A76 = "logicWarning",
    Yn3 = "latency",
    zn3 = "logic",
    qv = "message",
    hU8 = "modelArn",
    a81 = "modelId",
    wn3 = "modelInput",
    Hn3 = "modelOutput",
    mg8 = "maxResults",
    $n3 = "messageStart",
    De6 = "modelStreamErrorException",
    On3 = "messageStop",
    _n3 = "maxTokens",
    IU8 = "modelTimeoutException",
    Jn3 = "managedWordLists",
    q76 = "match",
    Me6 = "messages",
    xU8 = "metrics",
    Xn3 = "metadata",
    Yr = "name",
    jn3 = "naturalLanguage",
    Ke6 = "nextToken",
    Dn3 = "noTranslations",
    Mn3 = "outputs",
    Pn3 = "outputAssessments",
    Pe6 = "outputDataConfig",
    Wn3 = "originalMessage",
    Gn3 = "outputScope",
    bU8 = "originalStatusCode",
    Zn3 = "outputTokens",
    fn3 = "options",
    Vn3 = "output",
    uU8 = "premises",
    K76 = "performanceConfig",
    Y76 = "performanceConfigLatency",
    Nn3 = "piiEntities",
    BU8 = "promptRouter",
    mU8 = "promptVariables",
    Tn3 = "policyVersionArn",
    FU8 = "qualifiers",
    vn3 = "regex",
    QU8 = "reasoningContent",
    gU8 = "redactedContent",
    UU8 = "requestMetadata",
    En3 = "resourceName",
    kn3 = "reasoningText",
    Ln3 = "regexes",
    pU8 = "role",
    dg = "source",
    Fg8 = "sortBy",
    dU8 = "sourceContent",
    Qg8 = "statusEquals",
    Rn3 = "sensitiveInformationPolicy",
    yn3 = "sensitiveInformationPolicyFreeUnits",
    Cn3 = "sensitiveInformationPolicyUnits",
    We6 = "s3Location",
    gg8 = "sortOrder",
    Sn3 = "s3OutputDataConfig",
    hn3 = "streamProcessingMode",
    cU8 = "stopReason",
    In3 = "searchResultIndex",
    xn3 = "searchResultLocation",
    lU8 = "searchResult",
    bn3 = "supportingRules",
    un3 = "stopSequences",
    iU8 = "submitTime",
    Ug8 = "submitTimeAfter",
    pg8 = "submitTimeBefore",
    zr = "serviceTier",
    Bn3 = "systemTool",
    mn3 = "s3Uri",
    Ge6 = "serviceUnavailableException",
    Fn3 = "satisfiable",
    Qn3 = "score",
    nU8 = "server",
    rU8 = "signature",
    aU8 = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime",
    z76 = "status",
    iR1 = "start",
    gn3 = "statements",
    Un3 = "stream",
    w76 = "streaming",
    Ze6 = "system",
    PL = "type",
    pn3 = "translationAmbiguous",
    fe6 = "toolConfig",
    dn3 = "textCharacters",
    cn3 = "toolChoice",
    ln3 = "tooComplex",
    Ve6 = "throttlingException",
    in3 = "topicPolicy",
    nn3 = "topicPolicyUnits",
    rn3 = "topP",
    Ne6 = "toolResult",
    an3 = "toolSpec",
    on3 = "totalTokens",
    Te6 = "toolUse",
    H76 = "toolUseId",
    sn3 = "tags",
    TX = "text",
    tn3 = "temperature",
    en3 = "threshold",
    ve6 = "title",
    oU8 = "total",
    Ar3 = "tools",
    qr3 = "tool",
    Kr3 = "topics",
    z_1 = "trace",
    $76 = "translation",
    Yr3 = "translations",
    O76 = "usage",
    zr3 = "untranslatedClaims",
    wr3 = "untranslatedPremises",
    Hr3 = "uri",
    $r3 = "url",
    Or3 = "value",
    Ee6 = "validationException",
    _r3 = "valid",
    sU8 = "video",
    Jr3 = "web",
    Xr3 = "wordPolicy",
    jr3 = "wordPolicyUnits",
    B6 = "com.amazonaws.bedrockruntime",
    tU8 = [0, B6, Tp3, 8, 0],
    _76 = [0, B6, Cp3, 8, 21],
    Dr3 = [0, B6, id3, 8, 0],
    eU8 = [0, B6, nd3, 8, 0],
    Mr3 = [0, B6, $l3, 8, 15],
    ke6 = [0, B6, Ml3, 8, 21],
    Pr3 = [-3, B6, Zp3, { [DL]: $u, [ML]: 403 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(Pr3, ig8);
  var Wr3 = [3, B6, Rp3, 0, [], []],
    Gr3 = [
      3,
      B6,
      Vp3,
      0,
      [cR1, lR1, dg, Y_1, Gn3],
      [[0, 1], [0, 1], 0, [() => Zo3, 0], 0],
    ],
    Zr3 = [
      3,
      B6,
      Np3,
      0,
      [O76, qr, _U8, Mn3, Gi3, NU8],
      [() => wp8, 0, 0, () => vo3, [() => Dp8, 0], () => Yp8],
    ],
    fr3 = [3, B6, kp3, 0, [mn3, Kn3, XU8], [0, 0, 0]],
    Vr3 = [
      3,
      B6,
      Ep3,
      0,
      [t86, hU8, $e6, z76, ZU8, iU8, SU8, GU8, Pe6],
      [0, 0, 0, 0, [() => tU8, 0], 5, 5, 5, () => xe6],
    ],
    Nr3 = [3, B6, yp3, 0, [], []],
    Tr3 = [3, B6, Sp3, 8, [Kr], [[() => ke6, 0]]],
    vr3 = [3, B6, hp3, 8, [Kr], [[() => ke6, 0]]],
    Le6 = [3, B6, ap3, 0, [PL], [0]],
    Er3 = [3, B6, Ip3, 0, [ve6, dg, dU8, yU8], [0, 0, () => Jo3, () => Wp8]],
    Ap8 = [3, B6, gp3, 0, [pi3], [2]],
    kr3 = [3, B6, Up3, 0, [Y_1, _e6], [() => Oo3, () => _o3]],
    Lr3 = [3, B6, pp3, 0, [ve6, dg, dU8, yU8], [0, 0, () => Xo3, () => Wp8]],
    Rr3 = [3, B6, Ad3, 0, [TX], [0]],
    yr3 = [-3, B6, dp3, { [DL]: $u, [ML]: 400 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(yr3, og8);
  var Cr3 = [3, B6, up3, 0, [ui3, we6], [[() => mo3, 0], 1]],
    Sr3 = [3, B6, mp3, 0, [iR1, we6], [() => Fo3, 1]],
    hr3 = [3, B6, Fp3, 0, [we6], [1]],
    Ir3 = [3, B6, np3, 0, [CU8], [1]],
    xr3 = [
      3,
      B6,
      op3,
      0,
      [a81, Me6, Ze6, kU8, fe6, TU8, ze6, mU8, $U8, UU8, K76, zr],
      [
        [0, 1],
        [() => he6, 0],
        [() => Ie6, 0],
        () => $p8,
        () => Ce6,
        () => $a3,
        15,
        [() => Mp8, 0],
        64,
        [() => Pp8, 0],
        () => D76,
        () => M76,
      ],
    ],
    br3 = [
      3,
      B6,
      sp3,
      0,
      [Vn3, cU8, O76, xU8, OU8, z_1, K76, zr],
      [
        [() => Qo3, 0],
        0,
        () => Xp8,
        () => Ir3,
        15,
        [() => Ur3, 0],
        () => D76,
        () => M76,
      ],
    ],
    ur3 = [
      3,
      B6,
      zd3,
      0,
      [O76, xU8, z_1, K76, zr],
      [() => Xp8, () => Br3, [() => Qr3, 0], () => D76, () => M76],
    ],
    Br3 = [3, B6, Yd3, 0, [CU8], [1]],
    mr3 = [
      3,
      B6,
      Hd3,
      0,
      [a81, Me6, Ze6, kU8, fe6, TU8, ze6, mU8, $U8, UU8, K76, zr],
      [
        [0, 1],
        [() => he6, 0],
        [() => Ie6, 0],
        () => $p8,
        () => Ce6,
        () => va3,
        15,
        [() => Mp8, 0],
        64,
        [() => Pp8, 0],
        () => D76,
        () => M76,
      ],
    ],
    Fr3 = [3, B6, $d3, 0, [Un3], [[() => go3, 16]]],
    Qr3 = [3, B6, Od3, 0, [VU8, BU8], [[() => zp8, 0], () => _p8]],
    gr3 = [
      3,
      B6,
      Xd3,
      0,
      [Me6, Ze6, fe6, ze6],
      [[() => he6, 0], [() => Ie6, 0], () => Ce6, 15],
    ],
    Ur3 = [3, B6, _d3, 0, [VU8, BU8], [[() => zp8, 0], () => _p8]],
    pr3 = [
      3,
      B6,
      jd3,
      0,
      [a81, Xe6],
      [
        [0, 1],
        [() => Uo3, 0],
      ],
    ],
    dr3 = [3, B6, Dd3, 0, [LU8], [1]],
    qp8 = [
      3,
      B6,
      Gd3,
      0,
      [dR1, Yr, dg, xi3, _e6],
      [0, 0, () => do3, 0, () => Ap8],
    ],
    cr3 = [3, B6, Vd3, 0, [Je6, iR1, s86], [1, 1, 1]],
    lr3 = [3, B6, Nd3, 0, [Je6, iR1, s86], [1, 1, 1]],
    ir3 = [3, B6, Td3, 0, [Je6, iR1, s86], [1, 1, 1]],
    nr3 = [3, B6, Ld3, 0, [t86], [[0, 1]]],
    rr3 = [
      3,
      B6,
      Rd3,
      0,
      [t86, hU8, $e6, z76, ZU8, iU8, SU8, GU8, Pe6],
      [0, 0, 0, 0, [() => tU8, 0], 5, 5, 5, () => xe6],
    ],
    Kp8 = [
      3,
      B6,
      Ed3,
      0,
      [in3, Li3, Xr3, Rn3, Ei3, Di3, ni3],
      [
        () => Ra3,
        () => _a3,
        () => ya3,
        () => Ta3,
        () => Xa3,
        [() => er3, 0],
        () => Ga3,
      ],
    ],
    ar3 = [
      3,
      B6,
      bd3,
      0,
      [$76, jU8, A76],
      [[() => nR1, 0], () => Se6, [() => J76, 0]],
    ],
    or3 = [3, B6, Bd3, 0, [TX], [[() => eU8, 0]]],
    sr3 = [
      3,
      B6,
      ud3,
      0,
      [$76, jU8, A76],
      [[() => nR1, 0], () => Se6, [() => J76, 0]],
    ],
    J76 = [3, B6, Fd3, 0, [PL, uU8, MU8], [0, [() => pR1, 0], [() => pR1, 0]]],
    tr3 = [3, B6, Qd3, 0, [], []],
    er3 = [3, B6, gd3, 0, [ci3], [[() => Po3, 0]]],
    Aa3 = [3, B6, Ud3, 0, [si3, Tn3], [0, 0]],
    qa3 = [
      3,
      B6,
      cd3,
      0,
      [$76, DU8, vi3, A76],
      [
        [() => nR1, 0],
        [() => i86, 0],
        [() => i86, 0],
        [() => J76, 0],
      ],
    ],
    i86 = [3, B6, dd3, 0, [gn3], [[() => pR1, 0]]],
    Ka3 = [
      3,
      B6,
      rd3,
      0,
      [zn3, jn3],
      [
        [() => Dr3, 0],
        [() => eU8, 0],
      ],
    ],
    Ya3 = [3, B6, sd3, 0, [], []],
    nR1 = [
      3,
      B6,
      ad3,
      0,
      [uU8, MU8, wr3, zr3, PU8],
      [[() => pR1, 0], [() => pR1, 0], [() => dg8, 0], [() => dg8, 0], 1],
    ],
    za3 = [
      3,
      B6,
      od3,
      0,
      [fn3, Qi3],
      [
        [() => Go3, 0],
        [() => Mo3, 0],
      ],
    ],
    wa3 = [3, B6, ed3, 0, [Yr3], [[() => Wo3, 0]]],
    Ha3 = [
      3,
      B6,
      qc3,
      0,
      [$76, DU8, bn3, A76],
      [[() => nR1, 0], [() => i86, 0], () => Se6, [() => J76, 0]],
    ],
    $a3 = [3, B6, Kc3, 0, [cR1, lR1, z_1], [0, 0, 0]],
    Oa3 = [3, B6, Hc3, 0, [PL, PU8, di3, qr, r81], [0, 0, 0, 0, 2]],
    _a3 = [3, B6, Dc3, 0, [fU8], [() => fo3]],
    Ja3 = [3, B6, Oc3, 0, [PL, en3, Qn3, qr, r81], [0, 1, 1, 0, 2]],
    Xa3 = [3, B6, Jc3, 0, [fU8], [() => Vo3]],
    ja3 = [3, B6, Xc3, 8, [dR1, dg], [0, [() => io3, 0]]],
    Da3 = [3, B6, Mc3, 0, [TX, FU8], [0, 64]],
    Yp8 = [3, B6, Gc3, 0, [dn3, ti3], [() => ka3, () => Wa3]],
    Ma3 = [3, B6, Pc3, 0, [q76, qr, r81], [0, 0, 2]],
    Pa3 = [3, B6, Zc3, 8, [dR1, dg], [0, [() => no3, 0]]],
    Wa3 = [3, B6, fc3, 0, [EU8, oU8], [1, 1]],
    Ga3 = [3, B6, Vc3, 0, [li3, O76, NU8], [1, () => wp8, () => Yp8]],
    Za3 = [3, B6, Tc3, 0, [q76, PL, qr, r81], [0, 0, 0, 2]],
    fa3 = [3, B6, Ec3, 0, [TX], [0]],
    Va3 = [3, B6, Lc3, 0, [q76, PL, qr, r81], [0, 0, 0, 2]],
    Na3 = [3, B6, yc3, 0, [Yr, q76, vn3, qr, r81], [0, 0, 0, 0, 2]],
    Ta3 = [3, B6, hc3, 0, [Nn3, Ln3], [() => Eo3, () => ko3]],
    va3 = [3, B6, Sc3, 0, [cR1, lR1, z_1, hn3], [0, 0, 0, 0]],
    Ea3 = [3, B6, bc3, 0, [TX, FU8], [0, 64]],
    ka3 = [3, B6, uc3, 0, [EU8, oU8], [1, 1]],
    La3 = [3, B6, Ic3, 0, [Yr, PL, qr, r81], [0, 0, 0, 2]],
    Ra3 = [3, B6, mc3, 0, [Kr3], [() => Lo3]],
    zp8 = [
      3,
      B6,
      xc3,
      0,
      [Hn3, ii3, Pn3, _U8],
      [64, [() => xo3, 0], [() => Io3, 0], 0],
    ],
    wp8 = [
      3,
      B6,
      Fc3,
      0,
      [nn3, yi3, jr3, Cn3, yn3, ki3, Ri3, Mi3, Pi3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    ya3 = [3, B6, Qc3, 0, [Si3, Jn3], [() => No3, () => To3]],
    Hp8 = [3, B6, gc3, 0, [dR1, dg], [0, () => ro3]],
    $p8 = [3, B6, Uc3, 0, [_n3, tn3, rn3, un3], [1, 1, 1, 64]],
    X76 = [-3, B6, ql3, { [DL]: nU8, [ML]: 500 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(X76, ng8);
  var Ca3 = [
      3,
      B6,
      dc3,
      0,
      [n81, o86, JU8, a81, z_1, cR1, lR1, Y76, zr],
      [
        [() => _76, 16],
        [0, { [NX]: Ye6 }],
        [0, { [NX]: Gp3 }],
        [0, 1],
        [0, { [NX]: HU8 }],
        [0, { [NX]: zU8 }],
        [0, { [NX]: wU8 }],
        [0, { [NX]: r86 }],
        [0, { [NX]: a86 }],
      ],
    ],
    Sa3 = [
      3,
      B6,
      cc3,
      0,
      [n81, o86, Y76, zr],
      [
        [() => _76, 16],
        [0, { [NX]: Ye6 }],
        [0, { [NX]: r86 }],
        [0, { [NX]: a86 }],
      ],
    ],
    ha3 = [3, B6, lc3, 0, [n81], [[() => _76, 0]]],
    Ia3 = [
      3,
      B6,
      ac3,
      0,
      [a81, n81],
      [
        [0, 1],
        [() => ao3, 16],
      ],
    ],
    xa3 = [3, B6, oc3, 0, [n81], [[() => oo3, 16]]],
    ba3 = [
      3,
      B6,
      tc3,
      0,
      [n81, o86, JU8, a81, z_1, cR1, lR1, Y76, zr],
      [
        [() => _76, 16],
        [0, { [NX]: Ye6 }],
        [0, { [NX]: Ji3 }],
        [0, 1],
        [0, { [NX]: HU8 }],
        [0, { [NX]: zU8 }],
        [0, { [NX]: wU8 }],
        [0, { [NX]: r86 }],
        [0, { [NX]: a86 }],
      ],
    ],
    ua3 = [
      3,
      B6,
      ec3,
      0,
      [n81, o86, Y76, zr],
      [
        [() => As3, 16],
        [0, { [NX]: Xi3 }],
        [0, { [NX]: r86 }],
        [0, { [NX]: a86 }],
      ],
    ],
    Ba3 = [
      3,
      B6,
      Yl3,
      0,
      [Ug8, pg8, Qg8, mg8, Ke6, Fg8, gg8],
      [
        [5, { [i81]: Ug8 }],
        [5, { [i81]: pg8 }],
        [0, { [i81]: Qg8 }],
        [1, { [i81]: mg8 }],
        [0, { [i81]: Ke6 }],
        [0, { [i81]: Fg8 }],
        [0, { [i81]: gg8 }],
      ],
    ],
    ma3 = [3, B6, zl3, 0, [Ke6, ji3], [0, [() => $o3, 0]]],
    Op8 = [3, B6, wl3, 0, [pU8, Y_1], [0, [() => jo3, 0]]],
    Fa3 = [3, B6, _l3, 0, [pU8], [0]],
    Qa3 = [3, B6, Xl3, 0, [cU8, OU8], [0, 15]],
    ga3 = [-3, B6, Hl3, { [DL]: $u, [ML]: 424 }, [qv, bU8, En3], [0, 1, 0]];
  MV.TypeRegistry.for(B6).registerError(ga3, AU8);
  var Ua3 = [-3, B6, Ol3, { [DL]: $u, [ML]: 429 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(Ua3, qU8);
  var j76 = [-3, B6, Jl3, { [DL]: $u, [ML]: 424 }, [qv, bU8, Wn3], [0, 1, 0]];
  MV.TypeRegistry.for(B6).registerError(j76, YU8);
  var Re6 = [-3, B6, jl3, { [DL]: $u, [ML]: 408 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(Re6, KU8);
  var pa3 = [3, B6, Wl3, 8, [Kr], [[() => ke6, 0]]],
    D76 = [3, B6, Pl3, 0, [Yn3], [0]],
    _p8 = [3, B6, Gl3, 0, [ri3], [0]],
    da3 = [3, B6, kl3, 8, [TX, rU8], [0, 0]],
    ca3 = [-3, B6, vl3, { [DL]: $u, [ML]: 404 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(ca3, sg8);
  var ye6 = [3, B6, hl3, 0, [Hr3, XU8], [0, 0]],
    Jp8 = [3, B6, xl3, 0, [dg, ve6, Y_1, _e6], [0, 0, () => Ro3, () => Ap8]],
    la3 = [3, B6, bl3, 0, [TX], [0]],
    ia3 = [3, B6, Bl3, 0, [In3, iR1, s86], [1, 1, 1]],
    na3 = [-3, B6, Il3, { [DL]: $u, [ML]: 400 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(na3, tg8);
  var M76 = [3, B6, ml3, 0, [PL], [0]],
    P76 = [-3, B6, gl3, { [DL]: nU8, [ML]: 503 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(P76, eg8);
  var ra3 = [3, B6, Fl3, 0, [Yr], [0]],
    aa3 = [
      3,
      B6,
      Rl3,
      0,
      [$e6, a81, wn3, Pe6, sn3],
      [[0, 4], 0, [() => Mr3, 0], () => xe6, () => yo3],
    ],
    oa3 = [3, B6, yl3, 0, [t86], [0]],
    sa3 = [3, B6, Ql3, 0, [Yr], [0]],
    ta3 = [3, B6, Ul3, 0, [qn3, Or3], [0, 0]],
    W76 = [-3, B6, cl3, { [DL]: $u, [ML]: 429 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(W76, rg8);
  var Xp8 = [3, B6, Ai3, 0, [LU8, Zn3, on3, Ci3, hi3], [1, 1, 1, 1, 1]],
    Ce6 = [3, B6, pl3, 0, [Ar3, cn3], [() => ho3, () => Ys3]],
    ea3 = [3, B6, nl3, 0, [H76, Y_1, z76, PL], [0, () => So3, 0, 0]],
    Ao3 = [3, B6, ol3, 0, [H76, PL, z76], [0, 0, 0]],
    qo3 = [3, B6, el3, 0, [Yr, gi3, oi3], [0, 0, () => zs3]],
    Ko3 = [3, B6, qi3, 0, [H76, Yr, Xe6, PL], [0, 0, 15, 0]],
    Yo3 = [3, B6, Ki3, 0, [Xe6], [0]],
    zo3 = [3, B6, Yi3, 0, [H76, Yr, PL], [0, 0, 0]],
    G76 = [-3, B6, $i3, { [DL]: $u, [ML]: 400 }, [qv], [0]];
  MV.TypeRegistry.for(B6).registerError(G76, ag8);
  var jp8 = [3, B6, Hi3, 0, [dR1, dg], [0, () => $s3]],
    wo3 = [3, B6, _i3, 0, [$r3, Ui3], [0, 0]],
    Ho3 = [-3, aU8, "BedrockRuntimeServiceException", 0, [], []];
  MV.TypeRegistry.for(aU8).registerError(Ho3, PV);
  var $o3 = [1, B6, Lp3, 0, [() => Vr3, 0]],
    Oo3 = [1, B6, lp3, 0, () => bo3],
    _o3 = [1, B6, Pd3, 0, () => Er3],
    Jo3 = [1, B6, qd3, 0, () => uo3],
    Xo3 = [1, B6, Kd3, 0, () => Rr3],
    jo3 = [1, B6, xp3, 0, [() => Bo3, 0]],
    Do3 = [1, B6, Zd3, 0, () => po3],
    Dp8 = [1, B6, yd3, 0, [() => Kp8, 0]],
    Mo3 = [1, B6, hd3, 0, [() => i86, 0]],
    Po3 = [1, B6, xd3, 0, [() => co3, 0]],
    dg8 = [1, B6, md3, 0, [() => or3, 0]],
    Se6 = [1, B6, pd3, 0, () => Aa3],
    pR1 = [1, B6, ld3, 0, [() => Ka3, 0]],
    Wo3 = [1, B6, td3, 0, [() => nR1, 0]],
    Go3 = [1, B6, Ac3, 0, [() => wa3, 0]],
    Zo3 = [1, B6, zc3, 0, [() => lo3, 0]],
    fo3 = [1, B6, $c3, 0, () => Oa3],
    Vo3 = [1, B6, _c3, 0, () => Ja3],
    No3 = [1, B6, Wc3, 0, () => Ma3],
    To3 = [1, B6, vc3, 0, () => Za3],
    vo3 = [1, B6, kc3, 0, () => fa3],
    Eo3 = [1, B6, Rc3, 0, () => Va3],
    ko3 = [1, B6, Cc3, 0, () => Na3],
    Lo3 = [1, B6, Bc3, 0, () => La3],
    he6 = [1, B6, Dl3, 0, [() => Op8, 0]],
    Ro3 = [1, B6, ul3, 0, () => la3],
    Ie6 = [1, B6, Cl3, 0, [() => qs3, 0]],
    yo3 = [1, B6, il3, 0, () => ta3],
    Co3 = [1, B6, rl3, 0, () => ws3],
    So3 = [1, B6, sl3, 0, () => Hs3],
    ho3 = [1, B6, zi3, 0, () => Ks3],
    Io3 = [2, B6, Cd3, 0, [0, 0], [() => Dp8, 0]],
    xo3 = [2, B6, Sd3, 0, [0, 0], [() => Kp8, 0]],
    Mp8 = [2, B6, Zl3, 8, 0, () => so3],
    Pp8 = [2, B6, Tl3, 8, 0, 0],
    xe6 = [3, B6, vp3, 0, [Sn3], [() => fr3]],
    bo3 = [3, B6, cp3, 0, [TX], [0]],
    Wp8 = [
      3,
      B6,
      ip3,
      0,
      [Jr3, Bi3, Fi3, mi3, xn3],
      [() => wo3, () => cr3, () => ir3, () => lr3, () => ia3],
    ],
    uo3 = [3, B6, ep3, 0, [TX], [0]],
    Bo3 = [
      3,
      B6,
      Qp3,
      0,
      [TX, e86, WU8, sU8, Te6, Ne6, vU8, He6, QU8, Ti3, lU8],
      [
        0,
        () => Hp8,
        () => qp8,
        () => jp8,
        () => Ko3,
        () => ea3,
        [() => Gp8, 0],
        () => Le6,
        [() => to3, 0],
        () => kr3,
        () => Jp8,
      ],
    ],
    mo3 = [
      3,
      B6,
      bp3,
      0,
      [TX, Te6, Ne6, QU8, Ii3],
      [0, () => Yo3, () => Co3, [() => eo3, 0], () => Lr3],
    ],
    Fo3 = [3, B6, Bp3, 0, [Te6, Ne6], [() => zo3, () => Ao3]],
    Qo3 = [3, B6, rp3, 0, [qv], [[() => Op8, 0]]],
    go3 = [
      3,
      B6,
      wd3,
      { [w76]: 1 },
      [$n3, Vi3, fi3, Ni3, On3, Xn3, je6, De6, Ee6, Ve6, Ge6],
      [
        () => Fa3,
        () => Sr3,
        [() => Cr3, 0],
        () => hr3,
        () => Qa3,
        [() => ur3, 0],
        [() => X76, 0],
        [() => j76, 0],
        [() => G76, 0],
        [() => W76, 0],
        [() => P76, 0],
      ],
    ],
    Uo3 = [
      3,
      B6,
      Jd3,
      0,
      [ai3, bi3],
      [
        [() => ha3, 0],
        [() => gr3, 0],
      ],
    ],
    po3 = [3, B6, fd3, 0, [TX], [0]],
    do3 = [3, B6, vd3, 0, [Kr, We6, TX, Y_1], [21, () => ye6, 0, () => Do3]],
    co3 = [
      3,
      B6,
      Id3,
      0,
      [_r3, An3, Fn3, ei3, pn3, ln3, Dn3],
      [
        [() => Ha3, 0],
        [() => sr3, 0],
        [() => qa3, 0],
        [() => ar3, 0],
        [() => za3, 0],
        () => Ya3,
        () => tr3,
      ],
    ],
    lo3 = [3, B6, Yc3, 0, [TX, e86], [() => Ea3, [() => Pa3, 0]]],
    Gp8 = [3, B6, wc3, 0, [TX, e86], [() => Da3, [() => ja3, 0]]],
    io3 = [3, B6, jc3, 8, [Kr], [21]],
    no3 = [3, B6, Nc3, 8, [Kr], [21]],
    ro3 = [3, B6, Al3, 0, [Kr, We6], [21, () => ye6]],
    ao3 = [3, B6, nc3, { [w76]: 1 }, [Oe6], [[() => Tr3, 0]]],
    oo3 = [
      3,
      B6,
      rc3,
      { [w76]: 1 },
      [Oe6, je6, De6, Ee6, Ve6, IU8, Ge6],
      [
        [() => vr3, 0],
        [() => X76, 0],
        [() => j76, 0],
        [() => G76, 0],
        [() => W76, 0],
        [() => Re6, 0],
        [() => P76, 0],
      ],
    ],
    so3 = [3, B6, fl3, 0, [TX], [0]],
    to3 = [3, B6, Vl3, 8, [kn3, gU8], [[() => da3, 0], 21]],
    eo3 = [3, B6, Nl3, 8, [TX, gU8, rU8], [0, 21, 0]],
    As3 = [
      3,
      B6,
      El3,
      { [w76]: 1 },
      [Oe6, je6, De6, Ee6, Ve6, IU8, Ge6],
      [
        [() => pa3, 0],
        [() => X76, 0],
        [() => j76, 0],
        [() => G76, 0],
        [() => W76, 0],
        [() => Re6, 0],
        [() => P76, 0],
      ],
    ],
    qs3 = [3, B6, Sl3, 0, [TX, vU8, He6], [0, [() => Gp8, 0], () => Le6]],
    Ks3 = [3, B6, wi3, 0, [an3, Bn3, He6], [() => qo3, () => sa3, () => Le6]],
    Ys3 = [3, B6, dl3, 0, [Zi3, Wi3, qr3], [() => Nr3, () => Wr3, () => ra3]],
    zs3 = [3, B6, ll3, 0, [RU8], [15]],
    ws3 = [3, B6, al3, 0, [TX], [0]],
    Hs3 = [
      3,
      B6,
      tl3,
      0,
      [RU8, TX, e86, WU8, sU8, lU8],
      [15, 0, () => Hp8, () => qp8, () => jp8, () => Jp8],
    ],
    $s3 = [3, B6, Oi3, 0, [Kr, We6], [21, () => ye6]],
    Os3 = [
      9,
      B6,
      fp3,
      {
        [Ou]: [
          "POST",
          "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply",
          200,
        ],
      },
      () => Gr3,
      () => Zr3,
    ],
    _s3 = [
      9,
      B6,
      Wd3,
      { [Ou]: ["POST", "/model/{modelId}/converse", 200] },
      () => xr3,
      () => br3,
    ],
    Js3 = [
      9,
      B6,
      tp3,
      { [Ou]: ["POST", "/model/{modelId}/converse-stream", 200] },
      () => mr3,
      () => Fr3,
    ],
    Xs3 = [
      9,
      B6,
      Md3,
      { [Ou]: ["POST", "/model/{modelId}/count-tokens", 200] },
      () => pr3,
      () => dr3,
    ],
    js3 = [
      9,
      B6,
      kd3,
      { [Ou]: ["GET", "/async-invoke/{invocationArn}", 200] },
      () => nr3,
      () => rr3,
    ],
    Ds3 = [
      9,
      B6,
      pc3,
      { [Ou]: ["POST", "/model/{modelId}/invoke", 200] },
      () => Ca3,
      () => Sa3,
    ],
    Ms3 = [
      9,
      B6,
      ic3,
      {
        [Ou]: [
          "POST",
          "/model/{modelId}/invoke-with-bidirectional-stream",
          200,
        ],
      },
      () => Ia3,
      () => xa3,
    ],
    Ps3 = [
      9,
      B6,
      sc3,
      { [Ou]: ["POST", "/model/{modelId}/invoke-with-response-stream", 200] },
      () => ba3,
      () => ua3,
    ],
    Ws3 = [
      9,
      B6,
      Kl3,
      { [Ou]: ["GET", "/async-invoke", 200] },
      () => Ba3,
      () => ma3,
    ],
    Gs3 = [
      9,
      B6,
      Ll3,
      { [Ou]: ["POST", "/async-invoke", 200] },
      () => aa3,
      () => oa3,
    ];
  class be6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "ApplyGuardrail", {})
    .n("BedrockRuntimeClient", "ApplyGuardrailCommand")
    .sc(Os3)
    .build() {}
  class ue6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "Converse", {})
    .n("BedrockRuntimeClient", "ConverseCommand")
    .sc(_s3)
    .build() {}
  class Be6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "ConverseStream", {
      eventStream: { output: !0 },
    })
    .n("BedrockRuntimeClient", "ConverseStreamCommand")
    .sc(Js3)
    .build() {}
  class me6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "CountTokens", {})
    .n("BedrockRuntimeClient", "CountTokensCommand")
    .sc(Xs3)
    .build() {}
  class Fe6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "GetAsyncInvoke", {})
    .n("BedrockRuntimeClient", "GetAsyncInvokeCommand")
    .sc(js3)
    .build() {}
  class Qe6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "InvokeModel", {})
    .n("BedrockRuntimeClient", "InvokeModelCommand")
    .sc(Ds3)
    .build() {}
  class ge6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [
        wS.getEndpointPlugin(K, A.getEndpointParameterInstructions()),
        cg8.getEventStreamPlugin(K),
        lg8.getWebSocketPlugin(K, { headerPrefix: "x-amz-bedrock-" }),
      ];
    })
    .s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
      eventStream: { input: !0, output: !0 },
    })
    .n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand")
    .sc(Ms3)
    .build() {}
  class Ue6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
      eventStream: { output: !0 },
    })
    .n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand")
    .sc(Ps3)
    .build() {}
  class Z76 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "ListAsyncInvokes", {})
    .n("BedrockRuntimeClient", "ListAsyncInvokesCommand")
    .sc(Ws3)
    .build() {}
  class pe6 extends WM.Command.classBuilder()
    .ep(Hu)
    .m(function (A, q, K, Y) {
      return [wS.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockFrontendService", "StartAsyncInvoke", {})
    .n("BedrockRuntimeClient", "StartAsyncInvokeCommand")
    .sc(Gs3)
    .build() {}
  var Zs3 = {
    ApplyGuardrailCommand: be6,
    ConverseCommand: ue6,
    ConverseStreamCommand: Be6,
    CountTokensCommand: me6,
    GetAsyncInvokeCommand: Fe6,
    InvokeModelCommand: Qe6,
    InvokeModelWithBidirectionalStreamCommand: ge6,
    InvokeModelWithResponseStreamCommand: Ue6,
    ListAsyncInvokesCommand: Z76,
    StartAsyncInvokeCommand: pe6,
  };
  class de6 extends n86 {}
  WM.createAggregatedClient(Zs3, de6);
  var fs3 = l86.createPaginator(
      n86,
      Z76,
      "nextToken",
      "nextToken",
      "maxResults",
    ),
    Vs3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
    },
    Ns3 = { SUBMISSION_TIME: "SubmissionTime" },
    Ts3 = { ASCENDING: "Ascending", DESCENDING: "Descending" },
    vs3 = { JPEG: "jpeg", PNG: "png" },
    Es3 = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query",
    },
    ks3 = { FULL: "FULL", INTERVENTIONS: "INTERVENTIONS" },
    Ls3 = { INPUT: "INPUT", OUTPUT: "OUTPUT" },
    Rs3 = { GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED", NONE: "NONE" },
    ys3 = { ALWAYS_FALSE: "ALWAYS_FALSE", ALWAYS_TRUE: "ALWAYS_TRUE" },
    Cs3 = { BLOCKED: "BLOCKED", NONE: "NONE" },
    Ss3 = { HIGH: "HIGH", LOW: "LOW", MEDIUM: "MEDIUM", NONE: "NONE" },
    hs3 = { HIGH: "HIGH", LOW: "LOW", MEDIUM: "MEDIUM", NONE: "NONE" },
    Is3 = {
      HATE: "HATE",
      INSULTS: "INSULTS",
      MISCONDUCT: "MISCONDUCT",
      PROMPT_ATTACK: "PROMPT_ATTACK",
      SEXUAL: "SEXUAL",
      VIOLENCE: "VIOLENCE",
    },
    xs3 = { BLOCKED: "BLOCKED", NONE: "NONE" },
    bs3 = { GROUNDING: "GROUNDING", RELEVANCE: "RELEVANCE" },
    us3 = { ANONYMIZED: "ANONYMIZED", BLOCKED: "BLOCKED", NONE: "NONE" },
    Bs3 = {
      ADDRESS: "ADDRESS",
      AGE: "AGE",
      AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
      AWS_SECRET_KEY: "AWS_SECRET_KEY",
      CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
      CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
      CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
      CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
      CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
      DRIVER_ID: "DRIVER_ID",
      EMAIL: "EMAIL",
      INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
      IP_ADDRESS: "IP_ADDRESS",
      LICENSE_PLATE: "LICENSE_PLATE",
      MAC_ADDRESS: "MAC_ADDRESS",
      NAME: "NAME",
      PASSWORD: "PASSWORD",
      PHONE: "PHONE",
      PIN: "PIN",
      SWIFT_CODE: "SWIFT_CODE",
      UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
      UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
      UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER:
        "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
      URL: "URL",
      USERNAME: "USERNAME",
      US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
      US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
      US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER:
        "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
      US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
      US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
      VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
    },
    ms3 = { BLOCKED: "BLOCKED", NONE: "NONE" },
    Fs3 = { DENY: "DENY" },
    Qs3 = { BLOCKED: "BLOCKED", NONE: "NONE" },
    gs3 = { PROFANITY: "PROFANITY" },
    Us3 = {
      DISABLED: "disabled",
      ENABLED: "enabled",
      ENABLED_FULL: "enabled_full",
    },
    ps3 = { DEFAULT: "default" },
    ds3 = {
      CSV: "csv",
      DOC: "doc",
      DOCX: "docx",
      HTML: "html",
      MD: "md",
      PDF: "pdf",
      TXT: "txt",
      XLS: "xls",
      XLSX: "xlsx",
    },
    cs3 = { JPEG: "jpeg", PNG: "png" },
    ls3 = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query",
    },
    is3 = { GIF: "gif", JPEG: "jpeg", PNG: "png", WEBP: "webp" },
    ns3 = {
      FLV: "flv",
      MKV: "mkv",
      MOV: "mov",
      MP4: "mp4",
      MPEG: "mpeg",
      MPG: "mpg",
      THREE_GP: "three_gp",
      WEBM: "webm",
      WMV: "wmv",
    },
    rs3 = { ERROR: "error", SUCCESS: "success" },
    as3 = { SERVER_TOOL_USE: "server_tool_use" },
    os3 = { ASSISTANT: "assistant", USER: "user" },
    ss3 = { OPTIMIZED: "optimized", STANDARD: "standard" },
    ts3 = { DEFAULT: "default", FLEX: "flex", PRIORITY: "priority" },
    es3 = {
      CONTENT_FILTERED: "content_filtered",
      END_TURN: "end_turn",
      GUARDRAIL_INTERVENED: "guardrail_intervened",
      MAX_TOKENS: "max_tokens",
      MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
      STOP_SEQUENCE: "stop_sequence",
      TOOL_USE: "tool_use",
    },
    At3 = { ASYNC: "async", SYNC: "sync" },
    qt3 = {
      DISABLED: "DISABLED",
      ENABLED: "ENABLED",
      ENABLED_FULL: "ENABLED_FULL",
    };
  Object.defineProperty(ce6, "$Command", {
    enumerable: !0,
    get: function () {
      return WM.Command;
    },
  });
  Object.defineProperty(ce6, "__Client", {
    enumerable: !0,
    get: function () {
      return WM.Client;
    },
  });
  ce6.AccessDeniedException = ig8;
  ce6.ApplyGuardrailCommand = be6;
  ce6.AsyncInvokeStatus = Vs3;
  ce6.BedrockRuntime = de6;
  ce6.BedrockRuntimeClient = n86;
  ce6.BedrockRuntimeServiceException = PV;
  ce6.CachePointType = ps3;
  ce6.ConflictException = og8;
  ce6.ConversationRole = os3;
  ce6.ConverseCommand = ue6;
  ce6.ConverseStreamCommand = Be6;
  ce6.CountTokensCommand = me6;
  ce6.DocumentFormat = ds3;
  ce6.GetAsyncInvokeCommand = Fe6;
  ce6.GuardrailAction = Rs3;
  ce6.GuardrailAutomatedReasoningLogicWarningType = ys3;
  ce6.GuardrailContentFilterConfidence = Ss3;
  ce6.GuardrailContentFilterStrength = hs3;
  ce6.GuardrailContentFilterType = Is3;
  ce6.GuardrailContentPolicyAction = Cs3;
  ce6.GuardrailContentQualifier = Es3;
  ce6.GuardrailContentSource = Ls3;
  ce6.GuardrailContextualGroundingFilterType = bs3;
  ce6.GuardrailContextualGroundingPolicyAction = xs3;
  ce6.GuardrailConverseContentQualifier = ls3;
  ce6.GuardrailConverseImageFormat = cs3;
  ce6.GuardrailImageFormat = vs3;
  ce6.GuardrailManagedWordType = gs3;
  ce6.GuardrailOutputScope = ks3;
  ce6.GuardrailPiiEntityType = Bs3;
  ce6.GuardrailSensitiveInformationPolicyAction = us3;
  ce6.GuardrailStreamProcessingMode = At3;
  ce6.GuardrailTopicPolicyAction = ms3;
  ce6.GuardrailTopicType = Fs3;
  ce6.GuardrailTrace = Us3;
  ce6.GuardrailWordPolicyAction = Qs3;
  ce6.ImageFormat = is3;
  ce6.InternalServerException = ng8;
  ce6.InvokeModelCommand = Qe6;
  ce6.InvokeModelWithBidirectionalStreamCommand = ge6;
  ce6.InvokeModelWithResponseStreamCommand = Ue6;
  ce6.ListAsyncInvokesCommand = Z76;
  ce6.ModelErrorException = AU8;
  ce6.ModelNotReadyException = qU8;
  ce6.ModelStreamErrorException = YU8;
  ce6.ModelTimeoutException = KU8;
  ce6.PerformanceConfigLatency = ss3;
  ce6.ResourceNotFoundException = sg8;
  ce6.ServiceQuotaExceededException = tg8;
  ce6.ServiceTierType = ts3;
  ce6.ServiceUnavailableException = eg8;
  ce6.SortAsyncInvocationBy = Ns3;
  ce6.SortOrder = Ts3;
  ce6.StartAsyncInvokeCommand = pe6;
  ce6.StopReason = es3;
  ce6.ThrottlingException = rg8;
  ce6.ToolResultStatus = rs3;
  ce6.ToolUseType = as3;
  ce6.Trace = qt3;
  ce6.ValidationException = ag8;
  ce6.VideoFormat = ns3;
  ce6.paginateListAsyncInvokes = fs3;
