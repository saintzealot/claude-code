// Module: u86 (cjs)
// Dependencies: [b$, tz, Vg, Ng, Tg, cb, DJ, yg, aC, XM, oC, MR1, fa6, Zb8, Tb8]
// Exports: AccessDeniedException, AgreementStatus, ApplicationType, AttributeType, AuthorizationStatus, AutomatedReasoningCheckLogicWarningType, AutomatedReasoningCheckResult, AutomatedReasoningPolicyAnnotationStatus, AutomatedReasoningPolicyBuildDocumentContentType, AutomatedReasoningPolicyBuildMessageType, AutomatedReasoningPolicyBuildResultAssetType, AutomatedReasoningPolicyBuildWorkflowStatus, AutomatedReasoningPolicyBuildWorkflowType, AutomatedReasoningPolicyTestRunResult, AutomatedReasoningPolicyTestRunStatus, BatchDeleteEvaluationJobCommand, Bedrock, BedrockClient, BedrockServiceException, CancelAutomatedReasoningPolicyBuildWorkflowCommand, CommitmentDuration, ConflictException, CreateAutomatedReasoningPolicyCommand, CreateAutomatedReasoningPolicyTestCaseCommand, CreateAutomatedReasoningPolicyVersionCommand, CreateCustomModelCommand, CreateCustomModelDeploymentCommand, CreateEvaluationJobCommand, CreateFoundationModelAgreementCommand, CreateGuardrailCommand, CreateGuardrailVersionCommand, CreateInferenceProfileCommand, CreateMarketplaceModelEndpointCommand, CreateModelCopyJobCommand, CreateModelCustomizationJobCommand, CreateModelImportJobCommand, CreateModelInvocationJobCommand, CreatePromptRouterCommand, CreateProvisionedModelThroughputCommand, CustomModelDeploymentStatus, CustomizationType, DeleteAutomatedReasoningPolicyBuildWorkflowCommand, DeleteAutomatedReasoningPolicyCommand, DeleteAutomatedReasoningPolicyTestCaseCommand, DeleteCustomModelCommand, DeleteCustomModelDeploymentCommand, DeleteFoundationModelAgreementCommand, DeleteGuardrailCommand, DeleteImportedModelCommand, DeleteInferenceProfileCommand, DeleteMarketplaceModelEndpointCommand, DeleteModelInvocationLoggingConfigurationCommand, DeletePromptRouterCommand, DeleteProvisionedModelThroughputCommand, DeregisterMarketplaceModelEndpointCommand, EntitlementAvailability, EvaluationJobStatus, EvaluationJobType, EvaluationTaskType, ExportAutomatedReasoningPolicyVersionCommand, ExternalSourceType, FineTuningJobStatus, FoundationModelLifecycleStatus, GetAutomatedReasoningPolicyAnnotationsCommand, GetAutomatedReasoningPolicyBuildWorkflowCommand, GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand, GetAutomatedReasoningPolicyCommand, GetAutomatedReasoningPolicyNextScenarioCommand, GetAutomatedReasoningPolicyTestCaseCommand, GetAutomatedReasoningPolicyTestResultCommand, GetCustomModelCommand, GetCustomModelDeploymentCommand, GetEvaluationJobCommand, GetFoundationModelAvailabilityCommand, GetFoundationModelCommand, GetGuardrailCommand, GetImportedModelCommand, GetInferenceProfileCommand, GetMarketplaceModelEndpointCommand, GetModelCopyJobCommand, GetModelCustomizationJobCommand, GetModelImportJobCommand, GetModelInvocationJobCommand, GetModelInvocationLoggingConfigurationCommand, GetPromptRouterCommand, GetProvisionedModelThroughputCommand, GetUseCaseForModelAccessCommand, GuardrailContentFilterAction, GuardrailContentFilterType, GuardrailContentFiltersTierName, GuardrailContextualGroundingAction, GuardrailContextualGroundingFilterType, GuardrailFilterStrength, GuardrailManagedWordsType, GuardrailModality, GuardrailPiiEntityType, GuardrailSensitiveInformationAction, GuardrailStatus, GuardrailTopicAction, GuardrailTopicType, GuardrailTopicsTierName, GuardrailWordAction, InferenceProfileStatus, InferenceProfileType, InferenceType, InternalServerException, JobStatusDetails, ListAutomatedReasoningPoliciesCommand, ListAutomatedReasoningPolicyBuildWorkflowsCommand, ListAutomatedReasoningPolicyTestCasesCommand, ListAutomatedReasoningPolicyTestResultsCommand, ListCustomModelDeploymentsCommand, ListCustomModelsCommand, ListEvaluationJobsCommand, ListFoundationModelAgreementOffersCommand, ListFoundationModelsCommand, ListGuardrailsCommand, ListImportedModelsCommand, ListInferenceProfilesCommand, ListMarketplaceModelEndpointsCommand, ListModelCopyJobsCommand, ListModelCustomizationJobsCommand, ListModelImportJobsCommand, ListModelInvocationJobsCommand, ListPromptRoutersCommand, ListProvisionedModelThroughputsCommand, ListTagsForResourceCommand, ModelCopyJobStatus, ModelCustomization, ModelCustomizationJobStatus, ModelImportJobStatus, ModelInvocationJobStatus, ModelModality, ModelStatus, OfferType, PerformanceConfigLatency, PromptRouterStatus, PromptRouterType, ProvisionedModelStatus, PutModelInvocationLoggingConfigurationCommand, PutUseCaseForModelAccessCommand, QueryTransformationType, RegionAvailability, RegisterMarketplaceModelEndpointCommand, RerankingMetadataSelectionMode, ResourceInUseException, ResourceNotFoundException, RetrieveAndGenerateType, S3InputFormat, SearchType, ServiceQuotaExceededException, ServiceUnavailableException, SortByProvisionedModels, SortJobsBy, SortModelsBy, SortOrder, StartAutomatedReasoningPolicyBuildWorkflowCommand, StartAutomatedReasoningPolicyTestWorkflowCommand, Status, StopEvaluationJobCommand, StopModelCustomizationJobCommand, StopModelInvocationJobCommand, TagResourceCommand, ThrottlingException, TooManyTagsException, UntagResourceCommand, UpdateAutomatedReasoningPolicyAnnotationsCommand, UpdateAutomatedReasoningPolicyCommand, UpdateAutomatedReasoningPolicyTestCaseCommand, UpdateGuardrailCommand, UpdateMarketplaceModelEndpointCommand, UpdateProvisionedModelThroughputCommand, ValidationException, VectorSearchRerankingConfigurationType, paginateListAutomatedReasoningPolicies, paginateListAutomatedReasoningPolicyBuildWorkflows, paginateListAutomatedReasoningPolicyTestCases, paginateListAutomatedReasoningPolicyTestResults, paginateListCustomModelDeployments, paginateListCustomModels, paginateListEvaluationJobs, paginateListGuardrails, paginateListImportedModels, paginateListInferenceProfiles, paginateListMarketplaceModelEndpoints, paginateListModelCopyJobs, paginateListModelCustomizationJobs, paginateListModelImportJobs, paginateListModelInvocationJobs, paginateListPromptRouters, paginateListProvisionedModelThroughputs
// Lines: 94308-100303 in cli.formatted.js
// ---

  var vb8 = Vg(),
    Uz3 = Ng(),
    pz3 = Tg(),
    Eb8 = cb(),
    dz3 = DJ(),
    ZX = tz(),
    HL = b$(),
    cz3 = yg(),
    e8 = aC(),
    kb8 = XM(),
    U8 = MR1(),
    Lb8 = fa6(),
    lz3 = Zb8(),
    Rb8 = oC(),
    yb8 = Tb8(),
    iz3 = (A) => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "bedrock",
      });
    },
    K7 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    nz3 = (A) => {
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
    rz3 = (A) => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
        token: A.token(),
      };
    },
    az3 = (A, q) => {
      let K = Object.assign(
        Rb8.getAwsRegionExtensionConfiguration(A),
        U8.getDefaultExtensionConfiguration(A),
        yb8.getHttpHandlerExtensionConfiguration(A),
        nz3(A),
      );
      return (
        q.forEach((Y) => Y.configure(K)),
        Object.assign(
          A,
          Rb8.resolveAwsRegionExtensionConfiguration(K),
          U8.resolveDefaultRuntimeConfig(K),
          yb8.resolveHttpHandlerRuntimeConfig(K),
          rz3(K),
        )
      );
    };
  class VX extends U8.Client {
    config;
    constructor(...[A]) {
      let q = lz3.getRuntimeConfig(A || {});
      super(q);
      this.initConfig = q;
      let K = iz3(q),
        Y = Eb8.resolveUserAgentConfig(K),
        z = kb8.resolveRetryConfig(Y),
        w = dz3.resolveRegionConfig(z),
        H = vb8.resolveHostHeaderConfig(w),
        $ = e8.resolveEndpointConfig(H),
        O = Lb8.resolveHttpAuthSchemeConfig($),
        _ = az3(O, A?.extensions || []);
      ((this.config = _),
        this.middlewareStack.use(HL.getSchemaSerdePlugin(this.config)),
        this.middlewareStack.use(Eb8.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(kb8.getRetryPlugin(this.config)),
        this.middlewareStack.use(cz3.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(vb8.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(Uz3.getLoggerPlugin(this.config)),
        this.middlewareStack.use(pz3.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          ZX.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              Lb8.defaultBedrockHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (J) =>
              new ZX.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": J.credentials,
                "smithy.api#httpBearerAuth": J.token,
              }),
          }),
        ),
        this.middlewareStack.use(ZX.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  }
  var $L = class A extends U8.ServiceException {
      constructor(q) {
        super(q);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ob8 = class A extends $L {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(q) {
        super({ name: "AccessDeniedException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    sb8 = class A extends $L {
      name = "InternalServerException";
      $fault = "server";
      constructor(q) {
        super({ name: "InternalServerException", $fault: "server", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    tb8 = class A extends $L {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceNotFoundException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    eb8 = class A extends $L {
      name = "ThrottlingException";
      $fault = "client";
      constructor(q) {
        super({ name: "ThrottlingException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Au8 = class A extends $L {
      name = "ValidationException";
      $fault = "client";
      constructor(q) {
        super({ name: "ValidationException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    qu8 = class A extends $L {
      name = "ConflictException";
      $fault = "client";
      constructor(q) {
        super({ name: "ConflictException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Ku8 = class A extends $L {
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
    Yu8 = class A extends $L {
      name = "TooManyTagsException";
      $fault = "client";
      resourceName;
      constructor(q) {
        super({ name: "TooManyTagsException", $fault: "client", ...q });
        (Object.setPrototypeOf(this, A.prototype),
          (this.resourceName = q.resourceName));
      }
    },
    zu8 = class A extends $L {
      name = "ResourceInUseException";
      $fault = "client";
      constructor(q) {
        super({ name: "ResourceInUseException", $fault: "client", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    wu8 = class A extends $L {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(q) {
        super({ name: "ServiceUnavailableException", $fault: "server", ...q });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    oz3 = "AgreementAvailability",
    sz3 = "AccessDeniedException",
    tz3 = "AutomatedEvaluationConfig",
    ez3 = "AutomatedEvaluationCustomMetrics",
    A23 = "AutomatedEvaluationCustomMetricConfig",
    q23 = "AutomatedEvaluationCustomMetricSource",
    K23 = "AutomatedReasoningCheckDifferenceScenarioList",
    Y23 = "AutomatedReasoningCheckFinding",
    z23 = "AutomatedReasoningCheckFindingList",
    w23 = "AutomatedReasoningCheckImpossibleFinding",
    H23 = "AutomatedReasoningCheckInvalidFinding",
    $23 = "AutomatedReasoningCheckInputTextReference",
    O23 = "AutomatedReasoningCheckInputTextReferenceList",
    _23 = "AutomatedReasoningCheckLogicWarning",
    J23 = "AutomatedReasoningCheckNoTranslationsFinding",
    X23 = "AutomatedReasoningCheckRule",
    j23 = "AutomatedReasoningCheckRuleList",
    D23 = "AutomatedReasoningCheckScenario",
    M23 = "AutomatedReasoningCheckSatisfiableFinding",
    P23 = "AutomatedReasoningCheckTranslation",
    W23 = "AutomatedReasoningCheckTranslationAmbiguousFinding",
    G23 = "AutomatedReasoningCheckTooComplexFinding",
    Z23 = "AutomatedReasoningCheckTranslationList",
    f23 = "AutomatedReasoningCheckTranslationOption",
    V23 = "AutomatedReasoningCheckTranslationOptionList",
    N23 = "AutomatedReasoningCheckValidFinding",
    T23 = "AutomatedReasoningLogicStatement",
    v23 = "AutomatedReasoningLogicStatementContent",
    E23 = "AutomatedReasoningLogicStatementList",
    k23 = "AutomatedReasoningNaturalLanguageStatementContent",
    L23 = "AutomatedReasoningPolicyAnnotation",
    R23 = "AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage",
    y23 = "AutomatedReasoningPolicyAnnotationIngestContent",
    C23 = "AutomatedReasoningPolicyAnnotationList",
    S23 = "AutomatedReasoningPolicyAddRuleAnnotation",
    h23 = "AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation",
    I23 = "AutomatedReasoningPolicyAddRuleMutation",
    x23 = "AutomatedReasoningPolicyAnnotationRuleNaturalLanguage",
    b23 = "AutomatedReasoningPolicyAddTypeAnnotation",
    u23 = "AutomatedReasoningPolicyAddTypeMutation",
    B23 = "AutomatedReasoningPolicyAddTypeValue",
    m23 = "AutomatedReasoningPolicyAddVariableAnnotation",
    F23 = "AutomatedReasoningPolicyAddVariableMutation",
    Q23 = "AutomatedReasoningPolicyBuildDocumentBlob",
    g23 = "AutomatedReasoningPolicyBuildDocumentDescription",
    U23 = "AutomatedReasoningPolicyBuildDocumentName",
    p23 = "AutomatedReasoningPolicyBuildLog",
    d23 = "AutomatedReasoningPolicyBuildLogEntry",
    c23 = "AutomatedReasoningPolicyBuildLogEntryList",
    l23 = "AutomatedReasoningPolicyBuildResultAssets",
    i23 = "AutomatedReasoningPolicyBuildStep",
    n23 = "AutomatedReasoningPolicyBuildStepContext",
    r23 = "AutomatedReasoningPolicyBuildStepList",
    a23 = "AutomatedReasoningPolicyBuildStepMessage",
    o23 = "AutomatedReasoningPolicyBuildStepMessageList",
    s23 = "AutomatedReasoningPolicyBuildWorkflowDocument",
    t23 = "AutomatedReasoningPolicyBuildWorkflowDocumentList",
    e23 = "AutomatedReasoningPolicyBuildWorkflowRepairContent",
    Aw3 = "AutomatedReasoningPolicyBuildWorkflowSource",
    qw3 = "AutomatedReasoningPolicyBuildWorkflowSummary",
    Kw3 = "AutomatedReasoningPolicyBuildWorkflowSummaries",
    Yw3 = "AutomatedReasoningPolicyDescription",
    zw3 = "AutomatedReasoningPolicyDefinitionElement",
    ww3 = "AutomatedReasoningPolicyDefinitionQualityReport",
    Hw3 = "AutomatedReasoningPolicyDefinitionRule",
    $w3 = "AutomatedReasoningPolicyDeleteRuleAnnotation",
    Ow3 = "AutomatedReasoningPolicyDefinitionRuleAlternateExpression",
    _w3 = "AutomatedReasoningPolicyDefinitionRuleExpression",
    Jw3 = "AutomatedReasoningPolicyDefinitionRuleList",
    Xw3 = "AutomatedReasoningPolicyDeleteRuleMutation",
    jw3 = "AutomatedReasoningPolicyDisjointRuleSet",
    Dw3 = "AutomatedReasoningPolicyDisjointRuleSetList",
    Mw3 = "AutomatedReasoningPolicyDefinitionType",
    Pw3 = "AutomatedReasoningPolicyDeleteTypeAnnotation",
    Ww3 = "AutomatedReasoningPolicyDefinitionTypeDescription",
    Gw3 = "AutomatedReasoningPolicyDefinitionTypeList",
    Zw3 = "AutomatedReasoningPolicyDeleteTypeMutation",
    fw3 = "AutomatedReasoningPolicyDefinitionTypeName",
    Vw3 = "AutomatedReasoningPolicyDefinitionTypeNameList",
    Nw3 = "AutomatedReasoningPolicyDefinitionTypeValue",
    Tw3 = "AutomatedReasoningPolicyDefinitionTypeValueDescription",
    vw3 = "AutomatedReasoningPolicyDefinitionTypeValueList",
    Ew3 = "AutomatedReasoningPolicyDefinitionTypeValuePair",
    kw3 = "AutomatedReasoningPolicyDefinitionTypeValuePairList",
    Lw3 = "AutomatedReasoningPolicyDeleteTypeValue",
    Rw3 = "AutomatedReasoningPolicyDefinitionVariable",
    yw3 = "AutomatedReasoningPolicyDeleteVariableAnnotation",
    Cw3 = "AutomatedReasoningPolicyDefinitionVariableDescription",
    Sw3 = "AutomatedReasoningPolicyDefinitionVariableList",
    hw3 = "AutomatedReasoningPolicyDeleteVariableMutation",
    Iw3 = "AutomatedReasoningPolicyDefinitionVariableName",
    xw3 = "AutomatedReasoningPolicyDefinitionVariableNameList",
    bw3 = "AutomatedReasoningPolicyDefinition",
    uw3 = "AutomatedReasoningPolicyGeneratedTestCase",
    Bw3 = "AutomatedReasoningPolicyGeneratedTestCaseList",
    mw3 = "AutomatedReasoningPolicyGeneratedTestCases",
    Fw3 = "AutomatedReasoningPolicyIngestContentAnnotation",
    Qw3 = "AutomatedReasoningPolicyMutation",
    gw3 = "AutomatedReasoningPolicyName",
    Uw3 = "AutomatedReasoningPolicyPlanning",
    pw3 = "AutomatedReasoningPolicyScenario",
    dw3 = "AutomatedReasoningPolicyScenarioAlternateExpression",
    cw3 = "AutomatedReasoningPolicyScenarioExpression",
    lw3 = "AutomatedReasoningPolicySummary",
    iw3 = "AutomatedReasoningPolicySummaries",
    nw3 = "AutomatedReasoningPolicyTestCase",
    rw3 = "AutomatedReasoningPolicyTestCaseList",
    aw3 = "AutomatedReasoningPolicyTestGuardContent",
    ow3 = "AutomatedReasoningPolicyTestList",
    sw3 = "AutomatedReasoningPolicyTestQueryContent",
    tw3 = "AutomatedReasoningPolicyTestResult",
    ew3 = "AutomatedReasoningPolicyTypeValueAnnotation",
    AH3 = "AutomatedReasoningPolicyTypeValueAnnotationList",
    qH3 = "AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation",
    KH3 = "AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation",
    YH3 = "AutomatedReasoningPolicyUpdateRuleAnnotation",
    zH3 = "AutomatedReasoningPolicyUpdateRuleMutation",
    wH3 = "AutomatedReasoningPolicyUpdateTypeAnnotation",
    HH3 = "AutomatedReasoningPolicyUpdateTypeMutation",
    $H3 = "AutomatedReasoningPolicyUpdateTypeValue",
    OH3 = "AutomatedReasoningPolicyUpdateVariableAnnotation",
    _H3 = "AutomatedReasoningPolicyUpdateVariableMutation",
    JH3 = "AutomatedReasoningPolicyWorkflowTypeContent",
    XH3 = "ByteContentBlob",
    jH3 = "ByteContentDoc",
    DH3 = "BatchDeleteEvaluationJob",
    MH3 = "BatchDeleteEvaluationJobError",
    PH3 = "BatchDeleteEvaluationJobErrors",
    WH3 = "BatchDeleteEvaluationJobItem",
    GH3 = "BatchDeleteEvaluationJobItems",
    ZH3 = "BatchDeleteEvaluationJobRequest",
    fH3 = "BatchDeleteEvaluationJobResponse",
    VH3 = "BedrockEvaluatorModel",
    NH3 = "BedrockEvaluatorModels",
    TH3 = "CreateAutomatedReasoningPolicy",
    vH3 = "CancelAutomatedReasoningPolicyBuildWorkflow",
    EH3 = "CancelAutomatedReasoningPolicyBuildWorkflowRequest",
    kH3 = "CancelAutomatedReasoningPolicyBuildWorkflowResponse",
    LH3 = "CreateAutomatedReasoningPolicyRequest",
    RH3 = "CreateAutomatedReasoningPolicyResponse",
    yH3 = "CreateAutomatedReasoningPolicyTestCase",
    CH3 = "CreateAutomatedReasoningPolicyTestCaseRequest",
    SH3 = "CreateAutomatedReasoningPolicyTestCaseResponse",
    hH3 = "CreateAutomatedReasoningPolicyVersion",
    IH3 = "CreateAutomatedReasoningPolicyVersionRequest",
    xH3 = "CreateAutomatedReasoningPolicyVersionResponse",
    bH3 = "CustomizationConfig",
    uH3 = "CreateCustomModel",
    BH3 = "CreateCustomModelDeployment",
    mH3 = "CreateCustomModelDeploymentRequest",
    FH3 = "CreateCustomModelDeploymentResponse",
    QH3 = "CreateCustomModelRequest",
    gH3 = "CreateCustomModelResponse",
    UH3 = "ConflictException",
    pH3 = "CreateEvaluationJob",
    dH3 = "CreateEvaluationJobRequest",
    cH3 = "CreateEvaluationJobResponse",
    lH3 = "CreateFoundationModelAgreement",
    iH3 = "CreateFoundationModelAgreementRequest",
    nH3 = "CreateFoundationModelAgreementResponse",
    rH3 = "CreateGuardrail",
    aH3 = "CreateGuardrailRequest",
    oH3 = "CreateGuardrailResponse",
    sH3 = "CreateGuardrailVersion",
    tH3 = "CreateGuardrailVersionRequest",
    eH3 = "CreateGuardrailVersionResponse",
    A$3 = "CreateInferenceProfile",
    q$3 = "CreateInferenceProfileRequest",
    K$3 = "CreateInferenceProfileResponse",
    Y$3 = "CustomMetricBedrockEvaluatorModel",
    z$3 = "CustomMetricBedrockEvaluatorModels",
    w$3 = "CreateModelCopyJob",
    H$3 = "CreateModelCopyJobRequest",
    $$3 = "CreateModelCopyJobResponse",
    O$3 = "CreateModelCustomizationJobRequest",
    _$3 = "CreateModelCustomizationJobResponse",
    J$3 = "CreateModelCustomizationJob",
    X$3 = "CustomMetricDefinition",
    j$3 = "CustomModelDeploymentSummary",
    D$3 = "CustomModelDeploymentSummaryList",
    M$3 = "CustomMetricEvaluatorModelConfig",
    P$3 = "CreateModelImportJob",
    W$3 = "CreateModelImportJobRequest",
    G$3 = "CreateModelImportJobResponse",
    Z$3 = "CreateModelInvocationJobRequest",
    f$3 = "CreateModelInvocationJobResponse",
    V$3 = "CreateModelInvocationJob",
    N$3 = "CreateMarketplaceModelEndpoint",
    T$3 = "CreateMarketplaceModelEndpointRequest",
    v$3 = "CreateMarketplaceModelEndpointResponse",
    E$3 = "CustomModelSummary",
    k$3 = "CustomModelSummaryList",
    L$3 = "CustomModelUnits",
    R$3 = "CreateProvisionedModelThroughput",
    y$3 = "CreateProvisionedModelThroughputRequest",
    C$3 = "CreateProvisionedModelThroughputResponse",
    S$3 = "CreatePromptRouter",
    h$3 = "CreatePromptRouterRequest",
    I$3 = "CreatePromptRouterResponse",
    x$3 = "CloudWatchConfig",
    b$3 = "DeleteAutomatedReasoningPolicy",
    u$3 = "DeleteAutomatedReasoningPolicyBuildWorkflow",
    B$3 = "DeleteAutomatedReasoningPolicyBuildWorkflowRequest",
    m$3 = "DeleteAutomatedReasoningPolicyBuildWorkflowResponse",
    F$3 = "DeleteAutomatedReasoningPolicyRequest",
    Q$3 = "DeleteAutomatedReasoningPolicyResponse",
    g$3 = "DeleteAutomatedReasoningPolicyTestCase",
    U$3 = "DeleteAutomatedReasoningPolicyTestCaseRequest",
    p$3 = "DeleteAutomatedReasoningPolicyTestCaseResponse",
    d$3 = "DistillationConfig",
    c$3 = "DeleteCustomModel",
    l$3 = "DeleteCustomModelDeployment",
    i$3 = "DeleteCustomModelDeploymentRequest",
    n$3 = "DeleteCustomModelDeploymentResponse",
    r$3 = "DeleteCustomModelRequest",
    a$3 = "DeleteCustomModelResponse",
    o$3 = "DeleteFoundationModelAgreement",
    s$3 = "DeleteFoundationModelAgreementRequest",
    t$3 = "DeleteFoundationModelAgreementResponse",
    e$3 = "DeleteGuardrail",
    AO3 = "DeleteGuardrailRequest",
    qO3 = "DeleteGuardrailResponse",
    KO3 = "DeleteImportedModel",
    YO3 = "DeleteImportedModelRequest",
    zO3 = "DeleteImportedModelResponse",
    wO3 = "DeleteInferenceProfile",
    HO3 = "DeleteInferenceProfileRequest",
    $O3 = "DeleteInferenceProfileResponse",
    OO3 = "DeleteModelInvocationLoggingConfiguration",
    _O3 = "DeleteModelInvocationLoggingConfigurationRequest",
    JO3 = "DeleteModelInvocationLoggingConfigurationResponse",
    XO3 = "DeleteMarketplaceModelEndpoint",
    jO3 = "DeleteMarketplaceModelEndpointRequest",
    DO3 = "DeleteMarketplaceModelEndpointResponse",
    MO3 = "DeregisterMarketplaceModelEndpointRequest",
    PO3 = "DeregisterMarketplaceModelEndpointResponse",
    WO3 = "DeregisterMarketplaceModelEndpoint",
    GO3 = "DataProcessingDetails",
    ZO3 = "DeleteProvisionedModelThroughput",
    fO3 = "DeleteProvisionedModelThroughputRequest",
    VO3 = "DeleteProvisionedModelThroughputResponse",
    NO3 = "DimensionalPriceRate",
    TO3 = "DeletePromptRouterRequest",
    vO3 = "DeletePromptRouterResponse",
    EO3 = "DeletePromptRouter",
    kO3 = "ExportAutomatedReasoningPolicyVersion",
    LO3 = "ExportAutomatedReasoningPolicyVersionRequest",
    RO3 = "ExportAutomatedReasoningPolicyVersionResponse",
    yO3 = "EvaluationBedrockModel",
    CO3 = "EndpointConfig",
    SO3 = "EvaluationConfig",
    hO3 = "EvaluationDataset",
    IO3 = "EvaluationDatasetLocation",
    xO3 = "EvaluationDatasetMetricConfig",
    bO3 = "EvaluationDatasetMetricConfigs",
    uO3 = "EvaluationDatasetName",
    BO3 = "EvaluationInferenceConfig",
    mO3 = "EvaluationInferenceConfigSummary",
    FO3 = "EvaluationJobDescription",
    QO3 = "EvaluationJobIdentifier",
    gO3 = "EvaluationJobIdentifiers",
    UO3 = "EvaluationModelConfigs",
    pO3 = "EvaluationModelConfigSummary",
    dO3 = "EvaluationModelConfig",
    cO3 = "EvaluatorModelConfig",
    lO3 = "EvaluationMetricDescription",
    iO3 = "EvaluationModelInferenceParams",
    nO3 = "EvaluationMetricName",
    rO3 = "EvaluationMetricNames",
    aO3 = "EvaluationOutputDataConfig",
    oO3 = "EvaluationPrecomputedInferenceSource",
    sO3 = "EvaluationPrecomputedRetrieveAndGenerateSourceConfig",
    tO3 = "EvaluationPrecomputedRetrieveSourceConfig",
    eO3 = "EvaluationPrecomputedRagSourceConfig",
    A_3 = "EvaluationRagConfigSummary",
    q_3 = "EvaluationSummary",
    K_3 = "ExternalSourcesGenerationConfiguration",
    Y_3 = "ExternalSourcesRetrieveAndGenerateConfiguration",
    z_3 = "EvaluationSummaries",
    w_3 = "ExternalSource",
    H_3 = "ExternalSources",
    $_3 = "FilterAttribute",
    O_3 = "FieldForReranking",
    __3 = "FieldsForReranking",
    J_3 = "FoundationModelDetails",
    X_3 = "FoundationModelLifecycle",
    j_3 = "FoundationModelSummary",
    D_3 = "FoundationModelSummaryList",
    M_3 = "GuardrailAutomatedReasoningPolicy",
    P_3 = "GetAutomatedReasoningPolicyAnnotations",
    W_3 = "GetAutomatedReasoningPolicyAnnotationsRequest",
    G_3 = "GetAutomatedReasoningPolicyAnnotationsResponse",
    Z_3 = "GetAutomatedReasoningPolicyBuildWorkflow",
    f_3 = "GetAutomatedReasoningPolicyBuildWorkflowRequest",
    V_3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssets",
    N_3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest",
    T_3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse",
    v_3 = "GetAutomatedReasoningPolicyBuildWorkflowResponse",
    E_3 = "GuardrailAutomatedReasoningPolicyConfig",
    k_3 = "GetAutomatedReasoningPolicyNextScenario",
    L_3 = "GetAutomatedReasoningPolicyNextScenarioRequest",
    R_3 = "GetAutomatedReasoningPolicyNextScenarioResponse",
    y_3 = "GetAutomatedReasoningPolicyRequest",
    C_3 = "GetAutomatedReasoningPolicyResponse",
    S_3 = "GetAutomatedReasoningPolicyTestCase",
    h_3 = "GetAutomatedReasoningPolicyTestCaseRequest",
    I_3 = "GetAutomatedReasoningPolicyTestCaseResponse",
    x_3 = "GetAutomatedReasoningPolicyTestResult",
    b_3 = "GetAutomatedReasoningPolicyTestResultRequest",
    u_3 = "GetAutomatedReasoningPolicyTestResultResponse",
    B_3 = "GetAutomatedReasoningPolicy",
    m_3 = "GuardrailBlockedMessaging",
    F_3 = "GenerationConfiguration",
    Q_3 = "GuardrailContentFilter",
    g_3 = "GuardrailContentFilterAction",
    U_3 = "GuardrailContentFilterConfig",
    p_3 = "GuardrailContentFiltersConfig",
    d_3 = "GuardrailContentFiltersTier",
    c_3 = "GuardrailContentFiltersTierConfig",
    l_3 = "GuardrailContentFiltersTierName",
    i_3 = "GuardrailContentFilters",
    n_3 = "GuardrailContextualGroundingAction",
    r_3 = "GuardrailContextualGroundingFilter",
    a_3 = "GuardrailContextualGroundingFilterConfig",
    o_3 = "GuardrailContextualGroundingFiltersConfig",
    s_3 = "GuardrailContextualGroundingFilters",
    t_3 = "GuardrailContextualGroundingPolicy",
    e_3 = "GuardrailContextualGroundingPolicyConfig",
    AJ3 = "GetCustomModel",
    qJ3 = "GetCustomModelDeployment",
    KJ3 = "GetCustomModelDeploymentRequest",
    YJ3 = "GetCustomModelDeploymentResponse",
    zJ3 = "GetCustomModelRequest",
    wJ3 = "GetCustomModelResponse",
    HJ3 = "GuardrailContentPolicy",
    $J3 = "GuardrailContentPolicyConfig",
    OJ3 = "GuardrailCrossRegionConfig",
    _J3 = "GuardrailCrossRegionDetails",
    JJ3 = "GuardrailConfiguration",
    XJ3 = "GuardrailDescription",
    jJ3 = "GetEvaluationJob",
    DJ3 = "GetEvaluationJobRequest",
    MJ3 = "GetEvaluationJobResponse",
    PJ3 = "GetFoundationModel",
    WJ3 = "GetFoundationModelAvailability",
    GJ3 = "GetFoundationModelAvailabilityRequest",
    ZJ3 = "GetFoundationModelAvailabilityResponse",
    fJ3 = "GetFoundationModelRequest",
    VJ3 = "GetFoundationModelResponse",
    NJ3 = "GuardrailFailureRecommendation",
    TJ3 = "GuardrailFailureRecommendations",
    vJ3 = "GetGuardrail",
    EJ3 = "GetGuardrailRequest",
    kJ3 = "GetGuardrailResponse",
    LJ3 = "GetImportedModel",
    RJ3 = "GetImportedModelRequest",
    yJ3 = "GetImportedModelResponse",
    CJ3 = "GetInferenceProfile",
    SJ3 = "GetInferenceProfileRequest",
    hJ3 = "GetInferenceProfileResponse",
    IJ3 = "GuardrailModality",
    xJ3 = "GetModelCopyJob",
    bJ3 = "GetModelCopyJobRequest",
    uJ3 = "GetModelCopyJobResponse",
    BJ3 = "GetModelCustomizationJobRequest",
    mJ3 = "GetModelCustomizationJobResponse",
    FJ3 = "GetModelCustomizationJob",
    QJ3 = "GetModelImportJob",
    gJ3 = "GetModelImportJobRequest",
    UJ3 = "GetModelImportJobResponse",
    pJ3 = "GetModelInvocationJobRequest",
    dJ3 = "GetModelInvocationJobResponse",
    cJ3 = "GetModelInvocationJob",
    lJ3 = "GetModelInvocationLoggingConfiguration",
    iJ3 = "GetModelInvocationLoggingConfigurationRequest",
    nJ3 = "GetModelInvocationLoggingConfigurationResponse",
    rJ3 = "GetMarketplaceModelEndpoint",
    aJ3 = "GetMarketplaceModelEndpointRequest",
    oJ3 = "GetMarketplaceModelEndpointResponse",
    sJ3 = "GuardrailManagedWords",
    tJ3 = "GuardrailManagedWordsConfig",
    eJ3 = "GuardrailManagedWordLists",
    AX3 = "GuardrailManagedWordListsConfig",
    qX3 = "GuardrailModalities",
    KX3 = "GuardrailName",
    YX3 = "GuardrailPiiEntity",
    zX3 = "GuardrailPiiEntityConfig",
    wX3 = "GuardrailPiiEntitiesConfig",
    HX3 = "GuardrailPiiEntities",
    $X3 = "GetProvisionedModelThroughput",
    OX3 = "GetProvisionedModelThroughputRequest",
    _X3 = "GetProvisionedModelThroughputResponse",
    JX3 = "GetPromptRouter",
    XX3 = "GetPromptRouterRequest",
    jX3 = "GetPromptRouterResponse",
    DX3 = "GuardrailRegex",
    MX3 = "GuardrailRegexConfig",
    PX3 = "GuardrailRegexesConfig",
    WX3 = "GuardrailRegexes",
    GX3 = "GuardrailSummary",
    ZX3 = "GuardrailSensitiveInformationPolicy",
    fX3 = "GuardrailSensitiveInformationPolicyConfig",
    VX3 = "GuardrailStatusReason",
    NX3 = "GuardrailStatusReasons",
    TX3 = "GuardrailSummaries",
    vX3 = "GuardrailTopic",
    EX3 = "GuardrailTopicAction",
    kX3 = "GuardrailTopicConfig",
    LX3 = "GuardrailTopicsConfig",
    RX3 = "GuardrailTopicDefinition",
    yX3 = "GuardrailTopicExample",
    CX3 = "GuardrailTopicExamples",
    SX3 = "GuardrailTopicName",
    hX3 = "GuardrailTopicPolicy",
    IX3 = "GuardrailTopicPolicyConfig",
    xX3 = "GuardrailTopicsTier",
    bX3 = "GuardrailTopicsTierConfig",
    uX3 = "GuardrailTopicsTierName",
    BX3 = "GuardrailTopics",
    mX3 = "GetUseCaseForModelAccess",
    FX3 = "GetUseCaseForModelAccessRequest",
    QX3 = "GetUseCaseForModelAccessResponse",
    gX3 = "GuardrailWord",
    UX3 = "GuardrailWordAction",
    pX3 = "GuardrailWordConfig",
    dX3 = "GuardrailWordsConfig",
    cX3 = "GuardrailWordPolicy",
    lX3 = "GuardrailWordPolicyConfig",
    iX3 = "GuardrailWords",
    nX3 = "HumanEvaluationConfig",
    rX3 = "HumanEvaluationCustomMetric",
    aX3 = "HumanEvaluationCustomMetrics",
    oX3 = "HumanTaskInstructions",
    sX3 = "HumanWorkflowConfig",
    tX3 = "Identifier",
    eX3 = "ImplicitFilterConfiguration",
    Aj3 = "InvocationLogsConfig",
    qj3 = "InvocationLogSource",
    Kj3 = "ImportedModelSummary",
    Yj3 = "ImportedModelSummaryList",
    zj3 = "InferenceProfileDescription",
    wj3 = "InferenceProfileModel",
    Hj3 = "InferenceProfileModelSource",
    $j3 = "InferenceProfileModels",
    Oj3 = "InferenceProfileSummary",
    _j3 = "InferenceProfileSummaries",
    Jj3 = "InternalServerException",
    Xj3 = "KnowledgeBaseConfig",
    jj3 = "KnowledgeBaseRetrieveAndGenerateConfiguration",
    Dj3 = "KnowledgeBaseRetrievalConfiguration",
    Mj3 = "KnowledgeBaseVectorSearchConfiguration",
    Pj3 = "KbInferenceConfig",
    Wj3 = "ListAutomatedReasoningPolicies",
    Gj3 = "ListAutomatedReasoningPolicyBuildWorkflows",
    Zj3 = "ListAutomatedReasoningPolicyBuildWorkflowsRequest",
    fj3 = "ListAutomatedReasoningPolicyBuildWorkflowsResponse",
    Vj3 = "ListAutomatedReasoningPoliciesRequest",
    Nj3 = "ListAutomatedReasoningPoliciesResponse",
    Tj3 = "ListAutomatedReasoningPolicyTestCases",
    vj3 = "ListAutomatedReasoningPolicyTestCasesRequest",
    Ej3 = "ListAutomatedReasoningPolicyTestCasesResponse",
    kj3 = "ListAutomatedReasoningPolicyTestResults",
    Lj3 = "ListAutomatedReasoningPolicyTestResultsRequest",
    Rj3 = "ListAutomatedReasoningPolicyTestResultsResponse",
    yj3 = "LoggingConfig",
    Cj3 = "ListCustomModels",
    Sj3 = "ListCustomModelDeployments",
    hj3 = "ListCustomModelDeploymentsRequest",
    Ij3 = "ListCustomModelDeploymentsResponse",
    xj3 = "ListCustomModelsRequest",
    bj3 = "ListCustomModelsResponse",
    uj3 = "ListEvaluationJobs",
    Bj3 = "ListEvaluationJobsRequest",
    mj3 = "ListEvaluationJobsResponse",
    Fj3 = "ListFoundationModels",
    Qj3 = "ListFoundationModelAgreementOffers",
    gj3 = "ListFoundationModelAgreementOffersRequest",
    Uj3 = "ListFoundationModelAgreementOffersResponse",
    pj3 = "ListFoundationModelsRequest",
    dj3 = "ListFoundationModelsResponse",
    cj3 = "ListGuardrails",
    lj3 = "ListGuardrailsRequest",
    ij3 = "ListGuardrailsResponse",
    nj3 = "ListImportedModels",
    rj3 = "ListImportedModelsRequest",
    aj3 = "ListImportedModelsResponse",
    oj3 = "ListInferenceProfiles",
    sj3 = "ListInferenceProfilesRequest",
    tj3 = "ListInferenceProfilesResponse",
    ej3 = "ListModelCopyJobs",
    AD3 = "ListModelCopyJobsRequest",
    qD3 = "ListModelCopyJobsResponse",
    KD3 = "ListModelCustomizationJobsRequest",
    YD3 = "ListModelCustomizationJobsResponse",
    zD3 = "ListModelCustomizationJobs",
    wD3 = "ListModelImportJobs",
    HD3 = "ListModelImportJobsRequest",
    $D3 = "ListModelImportJobsResponse",
    OD3 = "ListModelInvocationJobsRequest",
    _D3 = "ListModelInvocationJobsResponse",
    JD3 = "ListModelInvocationJobs",
    XD3 = "ListMarketplaceModelEndpoints",
    jD3 = "ListMarketplaceModelEndpointsRequest",
    DD3 = "ListMarketplaceModelEndpointsResponse",
    MD3 = "ListProvisionedModelThroughputs",
    PD3 = "ListProvisionedModelThroughputsRequest",
    WD3 = "ListProvisionedModelThroughputsResponse",
    GD3 = "ListPromptRouters",
    ZD3 = "ListPromptRoutersRequest",
    fD3 = "ListPromptRoutersResponse",
    VD3 = "LegalTerm",
    ND3 = "ListTagsForResource",
    TD3 = "ListTagsForResourceRequest",
    vD3 = "ListTagsForResourceResponse",
    ED3 = "Message",
    kD3 = "MetadataAttributeSchema",
    LD3 = "MetadataAttributeSchemaList",
    RD3 = "MetadataConfigurationForReranking",
    yD3 = "ModelCopyJobSummary",
    CD3 = "ModelCustomizationJobSummary",
    SD3 = "ModelCopyJobSummaries",
    hD3 = "ModelCustomizationJobSummaries",
    ID3 = "ModelDataSource",
    xD3 = "ModelInvocationJobInputDataConfig",
    bD3 = "ModelInvocationJobOutputDataConfig",
    uD3 = "ModelImportJobSummary",
    BD3 = "ModelInvocationJobS3InputDataConfig",
    mD3 = "ModelInvocationJobS3OutputDataConfig",
    FD3 = "ModelInvocationJobSummary",
    QD3 = "ModelImportJobSummaries",
    gD3 = "ModelInvocationJobSummaries",
    UD3 = "MarketplaceModelEndpoint",
    pD3 = "MarketplaceModelEndpointSummary",
    dD3 = "MarketplaceModelEndpointSummaries",
    cD3 = "MetricName",
    lD3 = "Offer",
    iD3 = "OrchestrationConfiguration",
    nD3 = "OutputDataConfig",
    rD3 = "Offers",
    aD3 = "PerformanceConfiguration",
    oD3 = "PutModelInvocationLoggingConfiguration",
    sD3 = "PutModelInvocationLoggingConfigurationRequest",
    tD3 = "PutModelInvocationLoggingConfigurationResponse",
    eD3 = "ProvisionedModelSummary",
    A03 = "ProvisionedModelSummaries",
    q03 = "PromptRouterDescription",
    K03 = "PromptRouterSummary",
    Y03 = "PromptRouterSummaries",
    z03 = "PromptRouterTargetModel",
    w03 = "PromptRouterTargetModels",
    H03 = "PricingTerm",
    $03 = "PromptTemplate",
    O03 = "PutUseCaseForModelAccess",
    _03 = "PutUseCaseForModelAccessRequest",
    J03 = "PutUseCaseForModelAccessResponse",
    X03 = "QueryTransformationConfiguration",
    j03 = "RetrieveAndGenerateConfiguration",
    D03 = "RAGConfig",
    M03 = "RetrieveConfig",
    P03 = "RagConfigs",
    W03 = "RateCard",
    G03 = "RoutingCriteria",
    Z03 = "RetrievalFilter",
    f03 = "RetrievalFilterList",
    V03 = "ResourceInUseException",
    N03 = "RequestMetadataBaseFilters",
    T03 = "RequestMetadataFilters",
    v03 = "RequestMetadataFiltersList",
    E03 = "RequestMetadataMap",
    k03 = "RegisterMarketplaceModelEndpoint",
    L03 = "RegisterMarketplaceModelEndpointRequest",
    R03 = "RegisterMarketplaceModelEndpointResponse",
    y03 = "RerankingMetadataSelectiveModeConfiguration",
    C03 = "ResourceNotFoundException",
    S03 = "RatingScale",
    h03 = "RatingScaleItem",
    I03 = "RatingScaleItemValue",
    x03 = "StartAutomatedReasoningPolicyBuildWorkflow",
    b03 = "StartAutomatedReasoningPolicyBuildWorkflowRequest",
    u03 = "StartAutomatedReasoningPolicyBuildWorkflowResponse",
    B03 = "StartAutomatedReasoningPolicyTestWorkflow",
    m03 = "StartAutomatedReasoningPolicyTestWorkflowRequest",
    F03 = "StartAutomatedReasoningPolicyTestWorkflowResponse",
    Q03 = "S3Config",
    g03 = "StatusDetails",
    U03 = "S3DataSource",
    p03 = "StopEvaluationJob",
    d03 = "StopEvaluationJobRequest",
    c03 = "StopEvaluationJobResponse",
    l03 = "StopModelCustomizationJob",
    i03 = "StopModelCustomizationJobRequest",
    n03 = "StopModelCustomizationJobResponse",
    r03 = "SageMakerEndpoint",
    a03 = "StopModelInvocationJob",
    o03 = "StopModelInvocationJobRequest",
    s03 = "StopModelInvocationJobResponse",
    t03 = "S3ObjectDoc",
    e03 = "ServiceQuotaExceededException",
    AM3 = "SupportTerm",
    qM3 = "ServiceUnavailableException",
    KM3 = "Tag",
    YM3 = "TermDetails",
    zM3 = "TrainingDataConfig",
    wM3 = "TrainingDetails",
    HM3 = "ThrottlingException",
    $M3 = "TextInferenceConfig",
    OM3 = "TagList",
    _M3 = "TrainingMetrics",
    JM3 = "TeacherModelConfig",
    XM3 = "TooManyTagsException",
    jM3 = "TextPromptTemplate",
    DM3 = "TagResource",
    MM3 = "TagResourceRequest",
    PM3 = "TagResourceResponse",
    WM3 = "UpdateAutomatedReasoningPolicy",
    GM3 = "UpdateAutomatedReasoningPolicyAnnotations",
    ZM3 = "UpdateAutomatedReasoningPolicyAnnotationsRequest",
    fM3 = "UpdateAutomatedReasoningPolicyAnnotationsResponse",
    VM3 = "UpdateAutomatedReasoningPolicyRequest",
    NM3 = "UpdateAutomatedReasoningPolicyResponse",
    TM3 = "UpdateAutomatedReasoningPolicyTestCase",
    vM3 = "UpdateAutomatedReasoningPolicyTestCaseRequest",
    EM3 = "UpdateAutomatedReasoningPolicyTestCaseResponse",
    kM3 = "UpdateGuardrail",
    LM3 = "UpdateGuardrailRequest",
    RM3 = "UpdateGuardrailResponse",
    yM3 = "UpdateMarketplaceModelEndpoint",
    CM3 = "UpdateMarketplaceModelEndpointRequest",
    SM3 = "UpdateMarketplaceModelEndpointResponse",
    hM3 = "UpdateProvisionedModelThroughput",
    IM3 = "UpdateProvisionedModelThroughputRequest",
    xM3 = "UpdateProvisionedModelThroughputResponse",
    bM3 = "UntagResource",
    uM3 = "UntagResourceRequest",
    BM3 = "UntagResourceResponse",
    mM3 = "Validator",
    FM3 = "VpcConfig",
    QM3 = "ValidationDetails",
    gM3 = "ValidationDataConfig",
    UM3 = "ValidationException",
    pM3 = "ValidatorMetric",
    dM3 = "ValidationMetrics",
    cM3 = "VectorSearchBedrockRerankingConfiguration",
    lM3 = "VectorSearchBedrockRerankingModelConfiguration",
    iM3 = "VectorSearchRerankingConfiguration",
    nM3 = "ValidityTerm",
    rM3 = "Validators",
    aM3 = "annotation",
    oM3 = "agreementAvailability",
    Hu8 = "andAll",
    sM3 = "agreementDuration",
    $u8 = "alternateExpression",
    tM3 = "acceptEula",
    ka6 = "additionalModelRequestFields",
    Ou8 = "addRule",
    eM3 = "addRuleFromNaturalLanguage",
    AP3 = "automatedReasoningPolicy",
    qP3 = "automatedReasoningPolicyBuildWorkflowSummaries",
    _u8 = "automatedReasoningPolicyConfig",
    KP3 = "automatedReasoningPolicySummaries",
    YP3 = "authorizationStatus",
    Ju8 = "annotationSetHash",
    La6 = "applicationType",
    Cb8 = "applicationTypeEquals",
    zP3 = "aggregatedTestFindingsResult",
    wP3 = "addTypeValue",
    Xu8 = "addType",
    Sb8 = "assetType",
    ju8 = "addVariable",
    iO1 = "action",
    Ra6 = "annotations",
    HP3 = "arn",
    $P3 = "automated",
    OP3 = "byteContent",
    hb8 = "byCustomizationType",
    Du8 = "bedrockEvaluatorModels",
    ya6 = "blockedInputMessaging",
    Ib8 = "byInferenceType",
    _P3 = "bedrockKnowledgeBaseIdentifiers",
    JP3 = "buildLog",
    XP3 = "bedrockModel",
    aA6 = "baseModelArn",
    xb8 = "baseModelArnEquals",
    jP3 = "baseModelIdentifier",
    DP3 = "bedrockModelIdentifiers",
    MP3 = "baseModelName",
    PP3 = "bucketName",
    Ca6 = "blockedOutputsMessaging",
    bb8 = "byOutputModality",
    ub8 = "byProvider",
    WP3 = "bedrockRerankingConfiguration",
    GP3 = "buildSteps",
    ZP3 = "buildWorkflowAssets",
    XW = "buildWorkflowId",
    Sa6 = "buildWorkflowType",
    rn = "client",
    mD = "createdAt",
    Bb8 = "createdAfter",
    mb8 = "createdBefore",
    ha6 = "customizationConfig",
    Ia6 = "commitmentDuration",
    Mu8 = "customerEncryptionKeyId",
    Pu8 = "commitmentExpirationTime",
    fP3 = "copyFrom",
    VP3 = "claimsFalseScenario",
    NP3 = "contextualGroundingPolicy",
    Wu8 = "contextualGroundingPolicyConfig",
    Gu8 = "customMetrics",
    TP3 = "customModelArn",
    vP3 = "customMetricConfig",
    EP3 = "customMetricDefinition",
    xa6 = "customModelDeploymentArn",
    Zu8 = "customModelDeploymentIdentifier",
    kP3 = "customModelDeploymentName",
    LP3 = "customMetricsEvaluatorModelIdentifiers",
    RP3 = "customModelKmsKeyId",
    fu8 = "customModelName",
    yP3 = "customModelTags",
    CP3 = "customModelUnits",
    SP3 = "customModelUnitsPerModelCopy",
    hP3 = "customModelUnitsVersion",
    IP3 = "contentPolicy",
    Vu8 = "contentPolicyConfig",
    Nu8 = "contradictingRules",
    Tu8 = "crossRegionConfig",
    vu8 = "crossRegionDetails",
    yO = "clientRequestToken",
    xP3 = "conflictingRules",
    Eu8 = "customizationsSupported",
    VR1 = "confidenceThreshold",
    _V = "creationTimeAfter",
    JV = "creationTimeBefore",
    ku8 = "claimsTrueScenario",
    bP3 = "contentType",
    PM = "creationTime",
    NR1 = "customizationType",
    uP3 = "cloudWatchConfig",
    Lu8 = "claims",
    BP3 = "confidence",
    mP3 = "code",
    FP3 = "context",
    QP3 = "content",
    QY = "description",
    gP3 = "distillationConfig",
    Ru8 = "documentContentType",
    yu8 = "documentDescription",
    oA6 = "definitionHash",
    UP3 = "datasetLocation",
    Cu8 = "desiredModelArn",
    Su8 = "datasetMetricConfigs",
    pP3 = "desiredModelId",
    hu8 = "desiredModelUnits",
    Iu8 = "documentName",
    dP3 = "dataProcessingDetails",
    cP3 = "desiredProvisionedModelName",
    xu8 = "deleteRule",
    lP3 = "disjointRuleSets",
    iP3 = "differenceScenarios",
    bu8 = "deleteType",
    nP3 = "deleteTypeValue",
    uu8 = "deleteVariable",
    rP3 = "data",
    aP3 = "dataset",
    ba6 = "definition",
    oP3 = "dimension",
    sP3 = "document",
    tP3 = "documents",
    Au = "error",
    nO1 = "endpointArn",
    sA6 = "expectedAggregatedFindingsResult",
    eP3 = "entitlementAvailability",
    Bu8 = "evaluationConfig",
    ua6 = "endpointConfig",
    AW3 = "embeddingDataDeliveryEnabled",
    qW3 = "endpointIdentifier",
    KW3 = "evaluationJobs",
    YW3 = "errorMessage",
    mu8 = "evaluatorModelConfig",
    zW3 = "evaluatorModelIdentifiers",
    wW3 = "endpointName",
    HW3 = "expectedResult",
    $W3 = "executionRole",
    OW3 = "endpointStatus",
    _W3 = "externalSourcesConfiguration",
    JW3 = "endpointStatusMessage",
    rO1 = "endTime",
    XW3 = "evaluationTaskTypes",
    jW3 = "entries",
    Fu8 = "enabled",
    Ba6 = "equals",
    DW3 = "errors",
    tA6 = "expression",
    Qu8 = "examples",
    gu8 = "feedback",
    Uu8 = "filtersConfig",
    pu8 = "formData",
    MW3 = "flowDefinitionArn",
    ma6 = "fallbackModel",
    du8 = "foundationModelArn",
    Fb8 = "foundationModelArnEquals",
    an = "failureMessage",
    PW3 = "failureMessages",
    WW3 = "fieldName",
    GW3 = "failureRecommendations",
    ZW3 = "fieldsToExclude",
    fW3 = "fieldsToInclude",
    VW3 = "floatValue",
    cu8 = "filters",
    NW3 = "filter",
    Qb8 = "force",
    TW3 = "guardrails",
    Fa6 = "guardrailArn",
    eA6 = "guardContent",
    lu8 = "generationConfiguration",
    iu8 = "guardrailConfiguration",
    TR1 = "guardrailId",
    cO1 = "guardrailIdentifier",
    vW3 = "guardrailProfileArn",
    EW3 = "guardrailProfileIdentifier",
    kW3 = "guardrailProfileId",
    LW3 = "greaterThan",
    nu8 = "generatedTestCases",
    RW3 = "greaterThanOrEquals",
    ZR1 = "guardrailVersion",
    yW3 = "human",
    qu = "httpError",
    CW3 = "httpHeader",
    Qa6 = "hyperParameters",
    E8 = "httpQuery",
    SW3 = "humanWorkflowConfig",
    Y7 = "http",
    A86 = "id",
    OL = "inputAction",
    ru8 = "inferenceConfig",
    hW3 = "inferenceConfigSummary",
    IW3 = "ingestContent",
    ga6 = "inputDataConfig",
    xW3 = "imageDataDeliveryEnabled",
    _L = "inputEnabled",
    bW3 = "implicitFilterConfiguration",
    uW3 = "initialInstanceCount",
    BW3 = "invocationJobSummaries",
    mW3 = "invocationLogsConfig",
    FW3 = "invocationLogSource",
    q86 = "inputModalities",
    au8 = "importedModelArn",
    QW3 = "importedModelKmsKeyArn",
    gW3 = "importedModelKmsKeyId",
    Ua6 = "importedModelName",
    UW3 = "importedModelTags",
    gb8 = "isOwned",
    pW3 = "inferenceParams",
    pa6 = "inferenceProfileArn",
    ou8 = "inferenceProfileIdentifier",
    su8 = "inferenceProfileId",
    da6 = "inferenceProfileName",
    dW3 = "inferenceProfileSummaries",
    tu8 = "instructSupported",
    cW3 = "inferenceSourceIdentifier",
    eu8 = "inputStrength",
    lW3 = "instanceType",
    AB8 = "inferenceTypesSupported",
    iW3 = "idempotencyToken",
    nW3 = "identifier",
    rW3 = "impossible",
    qB8 = "instructions",
    aW3 = "in",
    oW3 = "invalid",
    FD = "jobArn",
    KB8 = "jobDescription",
    YB8 = "jobExpirationTime",
    Ug = "jobIdentifier",
    sW3 = "jobIdentifiers",
    jV = "jobName",
    tW3 = "jobStatus",
    eW3 = "jobSummaries",
    ca6 = "jobTags",
    zB8 = "jobType",
    la6 = "key",
    AG3 = "knowledgeBaseConfiguration",
    qG3 = "knowledgeBaseConfig",
    wB8 = "knowledgeBaseId",
    KG3 = "knowledgeBaseRetrievalConfiguration",
    YG3 = "kmsEncryptionKey",
    HB8 = "kbInferenceConfig",
    $B8 = "kmsKeyArn",
    ia6 = "kmsKeyId",
    zG3 = "keyPrefix",
    wG3 = "logic",
    OB8 = "loggingConfig",
    HG3 = "listContains",
    $G3 = "largeDataDeliveryS3Config",
    OG3 = "logGroupName",
    JL = "lastModifiedTime",
    _G3 = "legalTerm",
    JG3 = "lessThanOrEquals",
    XG3 = "lessThan",
    vR1 = "lastUpdatedAt",
    jG3 = "lastUpdatedAnnotationSetHash",
    DG3 = "lastUpdatedDefinitionHash",
    K86 = "logicWarning",
    MG3 = "latency",
    DV = "message",
    QD = "modelArn",
    pA6 = "modelArnEquals",
    PG3 = "metadataAttributes",
    _B8 = "modelArchitecture",
    WG3 = "modelConfiguration",
    GG3 = "modelCopyJobSummaries",
    ZG3 = "modelCustomizationJobSummaries",
    fG3 = "modelConfigSummary",
    VG3 = "metadataConfiguration",
    NG3 = "modelDetails",
    JB8 = "modelDeploymentName",
    na6 = "modelDataSource",
    TG3 = "modelDeploymentSummaries",
    on = "modelIdentifier",
    vG3 = "modelImportJobSummaries",
    Av = "modelId",
    EG3 = "modelIdentifiers",
    ra6 = "modelKmsKeyArn",
    kG3 = "modelKmsKeyId",
    XB8 = "modelLifecycle",
    Y86 = "marketplaceModelEndpoint",
    LG3 = "marketplaceModelEndpoints",
    F81 = "modelName",
    RG3 = "metricNames",
    kY = "maxResults",
    yG3 = "maxResponseLengthForInference",
    CG3 = "modelSource",
    SG3 = "modelSourceConfig",
    hG3 = "modelSourceEquals",
    ER1 = "modelSourceIdentifier",
    dA6 = "modelStatus",
    aa6 = "modelSummaries",
    IG3 = "messageType",
    xG3 = "maxTokens",
    bG3 = "modelTags",
    oa6 = "modelUnits",
    uG3 = "managedWordLists",
    BG3 = "managedWordListsConfig",
    mG3 = "messages",
    aO1 = "models",
    FG3 = "mutation",
    L2 = "name",
    JW = "nameContains",
    sa6 = "notEquals",
    QG3 = "notIn",
    jB8 = "naturalLanguage",
    DB8 = "newName",
    gG3 = "numberOfResults",
    UG3 = "numberOfRerankedResults",
    LK = "nextToken",
    pG3 = "noTranslations",
    dG3 = "newValue",
    cG3 = "options",
    XL = "outputAction",
    lG3 = "ownerAccountId",
    MB8 = "orAll",
    iG3 = "orchestrationConfiguration",
    sn = "outputDataConfig",
    jL = "outputEnabled",
    nG3 = "offerId",
    z86 = "outputModalities",
    rG3 = "outputModelArn",
    aG3 = "outputModelKmsKeyArn",
    oG3 = "outputModelName",
    sG3 = "outputModelNameContains",
    PB8 = "outputStrength",
    tG3 = "overrideSearchType",
    WB8 = "offerToken",
    Ub8 = "offerType",
    eG3 = "offers",
    GB8 = "premises",
    h5 = "policyArn",
    AZ3 = "performanceConfig",
    kR1 = "policyDefinition",
    qZ3 = "policyDefinitionRule",
    KZ3 = "policyDefinitionType",
    YZ3 = "policyDefinitionVariable",
    zZ3 = "priorElement",
    wZ3 = "piiEntitiesConfig",
    HZ3 = "piiEntities",
    ZB8 = "policyId",
    $Z3 = "precomputedInferenceSource",
    OZ3 = "precomputedInferenceSourceIdentifiers",
    ta6 = "provisionedModelArn",
    ea6 = "provisionedModelId",
    Ao6 = "provisionedModelName",
    _Z3 = "provisionedModelSummaries",
    fB8 = "providerName",
    LR1 = "promptRouterArn",
    JZ3 = "policyRepairAssets",
    qo6 = "promptRouterName",
    XZ3 = "promptRouterSummaries",
    jZ3 = "precomputedRagSourceConfig",
    DZ3 = "precomputedRagSourceIdentifiers",
    VB8 = "promptTemplate",
    MZ3 = "policyVersionArn",
    NB8 = "pattern",
    PZ3 = "planning",
    TB8 = "policies",
    WZ3 = "price",
    w86 = "queryContent",
    GZ3 = "qualityReport",
    ZZ3 = "queryTransformationConfiguration",
    vB8 = "rule",
    YS = "roleArn",
    fZ3 = "retrieveAndGenerateConfig",
    VZ3 = "retrieveAndGenerateSourceConfig",
    Ko6 = "resourceARN",
    NZ3 = "regionAvailability",
    TZ3 = "ruleCount",
    vZ3 = "ragConfigSummary",
    EZ3 = "rateCard",
    kZ3 = "ragConfigs",
    LZ3 = "regexesConfig",
    RZ3 = "rerankingConfiguration",
    yZ3 = "retrievalConfiguration",
    CZ3 = "retrieveConfig",
    Yo6 = "routingCriteria",
    EB8 = "ruleId",
    SZ3 = "ragIdentifiers",
    zo6 = "ruleIds",
    hZ3 = "ratingMethod",
    IZ3 = "requestMetadataFilters",
    xZ3 = "resourceName",
    bZ3 = "refundPolicyDescription",
    uZ3 = "responseQualityDifference",
    BZ3 = "ratingScale",
    mZ3 = "retrieveSourceConfig",
    kB8 = "ragSourceIdentifier",
    LB8 = "responseStreamingSupported",
    FZ3 = "regexes",
    RB8 = "rules",
    Cz = "status",
    pb8 = "sourceAccountEquals",
    yB8 = "sourceAccountId",
    uD = "sortBy",
    CB8 = "s3BucketOwner",
    QZ3 = "s3Config",
    gZ3 = "sourceContent",
    UZ3 = "stringContains",
    SB8 = "statusDetails",
    pZ3 = "s3DataSource",
    dZ3 = "scenarioExpression",
    cZ3 = "s3EncryptionKeyId",
    XV = "statusEquals",
    lZ3 = "securityGroupIds",
    iZ3 = "subnetIds",
    nZ3 = "s3InputDataConfig",
    rZ3 = "s3InputFormat",
    aZ3 = "sensitiveInformationPolicy",
    hB8 = "sensitiveInformationPolicyConfig",
    oZ3 = "s3Location",
    IB8 = "statusMessage",
    wo6 = "sourceModelArn",
    db8 = "sourceModelArnEquals",
    sZ3 = "selectiveModeConfiguration",
    xB8 = "sourceModelName",
    tZ3 = "sageMaker",
    eZ3 = "selectionMode",
    BD = "sortOrder",
    Af3 = "s3OutputDataConfig",
    qf3 = "supportingRules",
    Kf3 = "statusReasons",
    Yf3 = "stopSequences",
    zf3 = "sourceType",
    cb8 = "submitTimeAfter",
    lb8 = "submitTimeBefore",
    bB8 = "submitTime",
    wf3 = "supportTerm",
    pg = "s3Uri",
    Hf3 = "stringValue",
    $f3 = "startsWith",
    Of3 = "satisfiable",
    _f3 = "scenario",
    uB8 = "server",
    BB8 = "smithy.ts.sdk.synthetic.com.amazonaws.bedrock",
    Jf3 = "sources",
    Xf3 = "statements",
    H86 = "translation",
    jf3 = "translationAmbiguous",
    Df3 = "typeCount",
    Q81 = "testCaseId",
    Mf3 = "testCaseIds",
    mB8 = "testCase",
    Pf3 = "testCases",
    FB8 = "tierConfig",
    Wf3 = "topicsConfig",
    Gf3 = "tooComplex",
    Zf3 = "termDetails",
    Ho6 = "trainingDataConfig",
    ff3 = "textDataDeliveryEnabled",
    $o6 = "timeoutDurationInHours",
    Vf3 = "trainingDetails",
    Nf3 = "typeEquals",
    Tf3 = "testFindings",
    vf3 = "textInferenceConfig",
    Ef3 = "tagKeys",
    kf3 = "trainingLoss",
    QB8 = "trainingMetrics",
    gB8 = "targetModelArn",
    Lf3 = "teacherModelConfig",
    Rf3 = "teacherModelIdentifier",
    UB8 = "targetModelKmsKeyArn",
    Oo6 = "targetModelName",
    yf3 = "targetModelNameContains",
    _o6 = "targetModelTags",
    Cf3 = "typeName",
    $86 = "tierName",
    Sf3 = "topicPolicy",
    pB8 = "topicPolicyConfig",
    hf3 = "textPromptTemplate",
    If3 = "topP",
    xf3 = "testResult",
    bf3 = "testRunResult",
    uf3 = "testRunStatus",
    Bf3 = "testResults",
    mf3 = "taskType",
    zS = "tags",
    Jo6 = "text",
    Ff3 = "temperature",
    dB8 = "threshold",
    cB8 = "tier",
    Qf3 = "topics",
    gf3 = "translations",
    _H = "type",
    Uf3 = "types",
    pf3 = "unit",
    MJ = "updatedAt",
    df3 = "usageBasedPricingTerm",
    cf3 = "untranslatedClaims",
    lf3 = "updateFromRulesFeedback",
    if3 = "updateFromScenarioFeedback",
    nf3 = "untranslatedPremises",
    rf3 = "usePromptResponse",
    lB8 = "updateRule",
    af3 = "unusedTypes",
    of3 = "unusedTypeValues",
    sf3 = "updateTypeValue",
    iB8 = "updateType",
    tf3 = "unusedVariables",
    nB8 = "updateVariable",
    ef3 = "url",
    AV3 = "uri",
    Xo6 = "values",
    qV3 = "variableCount",
    g81 = "vpcConfig",
    KV3 = "validationDetails",
    jo6 = "validationDataConfig",
    YV3 = "videoDataDeliveryEnabled",
    zV3 = "validationLoss",
    rB8 = "validationMetrics",
    wV3 = "valueName",
    HV3 = "vectorSearchConfiguration",
    $V3 = "validityTerm",
    U81 = "value",
    OV3 = "validators",
    _V3 = "valid",
    aB8 = "variable",
    oB8 = "variables",
    Ku = "version",
    JV3 = "vpc",
    XV3 = "words",
    jV3 = "workflowContent",
    DV3 = "wordsConfig",
    MV3 = "wordPolicy",
    sB8 = "wordPolicyConfig",
    PV3 = "x-amz-client-token",
    G1 = "com.amazonaws.bedrock",
    WV3 = [0, G1, v23, 8, 0],
    tB8 = [0, G1, k23, 8, 0],
    eB8 = [0, G1, R23, 8, 0],
    GV3 = [0, G1, y23, 8, 0],
    ZV3 = [0, G1, x23, 8, 0],
    fV3 = [0, G1, Q23, 8, 21],
    Am8 = [0, G1, g23, 8, 0],
    qm8 = [0, G1, U23, 8, 0],
    VV3 = [0, G1, Ow3, 8, 0],
    Do6 = [0, G1, _w3, 8, 0],
    Mo6 = [0, G1, Ww3, 8, 0],
    eb = [0, G1, fw3, 8, 0],
    Po6 = [0, G1, Tw3, 8, 0],
    Wo6 = [0, G1, Cw3, 8, 0],
    m81 = [0, G1, Iw3, 8, 0],
    oO1 = [0, G1, Yw3, 8, 0],
    tn = [0, G1, gw3, 8, 0],
    NV3 = [0, G1, dw3, 8, 0],
    Km8 = [0, G1, cw3, 8, 0],
    O86 = [0, G1, aw3, 8, 0],
    _86 = [0, G1, sw3, 8, 0],
    TV3 = [0, G1, XH3, 8, 21],
    vV3 = [0, G1, uO3, 8, 0],
    Ym8 = [0, G1, FO3, 8, 0],
    RR1 = [0, G1, QO3, 8, 0],
    EV3 = [0, G1, lO3, 8, 0],
    zm8 = [0, G1, nO3, 8, 0],
    kV3 = [0, G1, iO3, 8, 0],
    lO1 = [0, G1, m_3, 8, 0],
    cA6 = [0, G1, g_3, 8, 0],
    wm8 = [0, G1, l_3, 8, 0],
    Hm8 = [0, G1, n_3, 8, 0],
    yR1 = [0, G1, XJ3, 8, 0],
    LV3 = [0, G1, NJ3, 8, 0],
    RV3 = [0, G1, IJ3, 8, 0],
    J86 = [0, G1, KX3, 8, 0],
    yV3 = [0, G1, VX3, 8, 0],
    lA6 = [0, G1, EX3, 8, 0],
    $m8 = [0, G1, RX3, 8, 0],
    CV3 = [0, G1, yX3, 8, 0],
    Om8 = [0, G1, SX3, 8, 0],
    _m8 = [0, G1, uX3, 8, 0],
    nn = [0, G1, UX3, 8, 0],
    SV3 = [0, G1, oX3, 8, 0],
    hV3 = [0, G1, tX3, 8, 0],
    Go6 = [0, G1, zj3, 8, 0],
    Jm8 = [0, G1, ED3, 8, 0],
    IV3 = [0, G1, cD3, 8, 0],
    Zo6 = [0, G1, q03, 8, 0],
    xV3 = [0, G1, jM3, 8, 0],
    bV3 = [-3, G1, sz3, { [Au]: rn, [qu]: 403 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(bV3, ob8);
  var uV3 = [3, G1, oz3, 0, [Cz, YW3], [0, 0]],
    BV3 = [
      3,
      G1,
      tz3,
      0,
      [Su8, mu8, vP3],
      [[() => Im8, 0], () => my3, [() => mV3, 0]],
    ],
    mV3 = [3, G1, A23, 0, [Gu8, mu8], [[() => MR3, 0], () => CT3]],
    FV3 = [
      3,
      G1,
      w23,
      0,
      [H86, Nu8, K86],
      [[() => CR1, 0], () => Eo6, [() => X86, 0]],
    ],
    QV3 = [3, G1, $23, 0, [Jo6], [[() => tB8, 0]]],
    gV3 = [
      3,
      G1,
      H23,
      0,
      [H86, Nu8, K86],
      [[() => CR1, 0], () => Eo6, [() => X86, 0]],
    ],
    X86 = [3, G1, _23, 0, [_H, GB8, Lu8], [0, [() => fR1, 0], [() => fR1, 0]]],
    UV3 = [3, G1, J23, 0, [], []],
    pV3 = [3, G1, X23, 0, [A86, MZ3], [0, 0]],
    dV3 = [
      3,
      G1,
      M23,
      0,
      [H86, ku8, VP3, K86],
      [
        [() => CR1, 0],
        [() => iA6, 0],
        [() => iA6, 0],
        [() => X86, 0],
      ],
    ],
    iA6 = [3, G1, D23, 0, [Xf3], [[() => fR1, 0]]],
    cV3 = [3, G1, G23, 0, [], []],
    CR1 = [
      3,
      G1,
      P23,
      0,
      [GB8, Lu8, nf3, cf3, BP3],
      [[() => fR1, 0], [() => fR1, 0], [() => ib8, 0], [() => ib8, 0], 1],
    ],
    lV3 = [
      3,
      G1,
      W23,
      0,
      [cG3, iP3],
      [
        [() => ZR3, 0],
        [() => PR3, 0],
      ],
    ],
    iV3 = [3, G1, f23, 0, [gf3], [[() => GR3, 0]]],
    nV3 = [
      3,
      G1,
      N23,
      0,
      [H86, ku8, qf3, K86],
      [[() => CR1, 0], [() => iA6, 0], () => Eo6, [() => X86, 0]],
    ],
    rV3 = [
      3,
      G1,
      T23,
      0,
      [wG3, jB8],
      [
        [() => WV3, 0],
        [() => tB8, 0],
      ],
    ],
    aV3 = [3, G1, S23, 0, [tA6], [[() => Do6, 0]]],
    oV3 = [3, G1, h23, 0, [jB8], [[() => ZV3, 0]]],
    sV3 = [3, G1, I23, 0, [vB8], [[() => j86, 0]]],
    tV3 = [
      3,
      G1,
      b23,
      0,
      [L2, QY, Xo6],
      [
        [() => eb, 0],
        [() => Mo6, 0],
        [() => Sm8, 0],
      ],
    ],
    eV3 = [3, G1, u23, 0, [_H], [[() => D86, 0]]],
    AN3 = [3, G1, B23, 0, [U81, QY], [0, [() => Po6, 0]]],
    qN3 = [
      3,
      G1,
      m23,
      0,
      [L2, _H, QY],
      [
        [() => m81, 0],
        [() => eb, 0],
        [() => Wo6, 0],
      ],
    ],
    KN3 = [3, G1, F23, 0, [aB8], [[() => M86, 0]]],
    YN3 = [3, G1, p23, 0, [jW3], [[() => fR3, 0]]],
    zN3 = [3, G1, d23, 0, [aM3, Cz, GP3], [[() => Bm8, 0], 0, [() => VR3, 0]]],
    wN3 = [
      3,
      G1,
      i23,
      0,
      [FP3, zZ3, mG3],
      [[() => Cy3, 0], [() => Sy3, 0], () => NR3],
    ],
    HN3 = [3, G1, a23, 0, [DV, IG3], [0, 0]],
    $N3 = [
      3,
      G1,
      s23,
      0,
      [sP3, Ru8, Iu8, yu8],
      [[() => fV3, 0], 0, [() => qm8, 0], [() => Am8, 0]],
    ],
    ON3 = [3, G1, e23, 0, [Ra6], [[() => ko6, 0]]],
    _N3 = [
      3,
      G1,
      Aw3,
      0,
      [kR1, jV3],
      [
        [() => SR1, 0],
        [() => xy3, 0],
      ],
    ],
    JN3 = [3, G1, qw3, 0, [h5, XW, Cz, Sa6, mD, MJ], [0, 0, 0, 0, 5, 5]],
    SR1 = [
      3,
      G1,
      bw3,
      0,
      [Ku, Uf3, RB8, oB8],
      [0, [() => kR3, 0], [() => ER3, 0], [() => yR3, 0]],
    ],
    XN3 = [
      3,
      G1,
      ww3,
      0,
      [Df3, qV3, TZ3, af3, of3, tf3, xP3, lP3],
      [
        1,
        1,
        1,
        [() => LR3, 0],
        [() => RR3, 0],
        [() => hm8, 0],
        64,
        [() => CR3, 0],
      ],
    ],
    j86 = [3, G1, Hw3, 0, [A86, tA6, $u8], [0, [() => Do6, 0], [() => VV3, 0]]],
    D86 = [
      3,
      G1,
      Mw3,
      0,
      [L2, QY, Xo6],
      [
        [() => eb, 0],
        [() => Mo6, 0],
        [() => Sm8, 0],
      ],
    ],
    jN3 = [3, G1, Nw3, 0, [U81, QY], [0, [() => Po6, 0]]],
    DN3 = [3, G1, Ew3, 0, [Cf3, wV3], [[() => eb, 0], 0]],
    M86 = [
      3,
      G1,
      Rw3,
      0,
      [L2, _H, QY],
      [
        [() => m81, 0],
        [() => eb, 0],
        [() => Wo6, 0],
      ],
    ],
    MN3 = [3, G1, $w3, 0, [EB8], [0]],
    PN3 = [3, G1, Xw3, 0, [A86], [0]],
    WN3 = [3, G1, Pw3, 0, [L2], [[() => eb, 0]]],
    GN3 = [3, G1, Zw3, 0, [L2], [[() => eb, 0]]],
    ZN3 = [3, G1, Lw3, 0, [U81], [0]],
    fN3 = [3, G1, yw3, 0, [L2], [[() => m81, 0]]],
    VN3 = [3, G1, hw3, 0, [L2], [[() => m81, 0]]],
    NN3 = [3, G1, jw3, 0, [oB8, RB8], [[() => hm8, 0], 64]],
    TN3 = [3, G1, uw3, 0, [w86, eA6, sA6], [[() => _86, 0], [() => O86, 0], 0]],
    vN3 = [3, G1, mw3, 0, [nu8], [[() => SR3, 0]]],
    EN3 = [3, G1, Fw3, 0, [QP3], [[() => GV3, 0]]],
    kN3 = [3, G1, Uw3, 0, [], []],
    LN3 = [
      3,
      G1,
      pw3,
      0,
      [tA6, $u8, zo6, HW3],
      [[() => Km8, 0], [() => NV3, 0], 64, 0],
    ],
    RN3 = [
      3,
      G1,
      lw3,
      0,
      [h5, L2, QY, Ku, ZB8, mD, MJ],
      [0, [() => tn, 0], [() => oO1, 0], 0, 0, 5, 5],
    ],
    fo6 = [
      3,
      G1,
      nw3,
      0,
      [Q81, eA6, w86, sA6, mD, MJ, VR1],
      [0, [() => O86, 0], [() => _86, 0], 0, 5, 5, 1],
    ],
    Xm8 = [
      3,
      G1,
      tw3,
      0,
      [mB8, h5, uf3, Tf3, bf3, zP3, MJ],
      [[() => fo6, 0], 0, 0, [() => WR3, 0], 0, 0, 5],
    ],
    yN3 = [3, G1, qH3, 0, [zo6, gu8], [64, [() => eB8, 0]]],
    CN3 = [
      3,
      G1,
      KH3,
      0,
      [zo6, dZ3, gu8],
      [64, [() => Km8, 0], [() => eB8, 0]],
    ],
    SN3 = [3, G1, YH3, 0, [EB8, tA6], [0, [() => Do6, 0]]],
    hN3 = [3, G1, zH3, 0, [vB8], [[() => j86, 0]]],
    IN3 = [
      3,
      G1,
      wH3,
      0,
      [L2, DB8, QY, Xo6],
      [
        [() => eb, 0],
        [() => eb, 0],
        [() => Mo6, 0],
        [() => bR3, 0],
      ],
    ],
    xN3 = [3, G1, HH3, 0, [_H], [[() => D86, 0]]],
    bN3 = [3, G1, $H3, 0, [U81, dG3, QY], [0, 0, [() => Po6, 0]]],
    uN3 = [
      3,
      G1,
      OH3,
      0,
      [L2, DB8, QY],
      [
        [() => m81, 0],
        [() => m81, 0],
        [() => Wo6, 0],
      ],
    ],
    BN3 = [3, G1, _H3, 0, [aB8], [[() => M86, 0]]],
    mN3 = [3, G1, MH3, 0, [Ug, mP3, DV], [[() => RR1, 0], 0, 0]],
    FN3 = [3, G1, WH3, 0, [Ug, tW3], [[() => RR1, 0], 0]],
    QN3 = [3, G1, ZH3, 0, [sW3], [[() => UR3, 0]]],
    gN3 = [
      3,
      G1,
      fH3,
      0,
      [DW3, KW3],
      [
        [() => uR3, 0],
        [() => BR3, 0],
      ],
    ],
    UN3 = [3, G1, VH3, 0, [on], [0]],
    pN3 = [3, G1, jH3, 0, [nW3, bP3, rP3], [[() => hV3, 0], 0, [() => TV3, 0]]],
    dN3 = [
      3,
      G1,
      EH3,
      0,
      [h5, XW],
      [
        [0, 1],
        [0, 1],
      ],
    ],
    cN3 = [3, G1, kH3, 0, [], []],
    lN3 = [3, G1, x$3, 0, [OG3, YS, $G3], [0, 0, () => Rm8]],
    iN3 = [-3, G1, UH3, { [Au]: rn, [qu]: 400 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(iN3, qu8);
  var nN3 = [
      3,
      G1,
      LH3,
      0,
      [L2, QY, yO, kR1, ia6, zS],
      [[() => tn, 0], [() => oO1, 0], [0, 4], [() => SR1, 0], 0, () => fX],
    ],
    rN3 = [
      3,
      G1,
      RH3,
      0,
      [h5, Ku, L2, QY, oA6, mD, MJ],
      [0, 0, [() => tn, 0], [() => oO1, 0], 0, 5, 5],
    ],
    aN3 = [
      3,
      G1,
      CH3,
      0,
      [h5, eA6, w86, sA6, yO, VR1],
      [[0, 1], [() => O86, 0], [() => _86, 0], 0, [0, 4], 1],
    ],
    oN3 = [3, G1, SH3, 0, [h5, Q81], [0, 0]],
    sN3 = [3, G1, IH3, 0, [h5, yO, DG3, zS], [[0, 1], [0, 4], 0, () => fX]],
    tN3 = [
      3,
      G1,
      xH3,
      0,
      [h5, Ku, L2, QY, oA6, mD],
      [0, 0, [() => tn, 0], [() => oO1, 0], 0, 5],
    ],
    eN3 = [3, G1, mH3, 0, [JB8, QD, QY, zS, yO], [0, 0, 0, () => fX, [0, 4]]],
    AT3 = [3, G1, FH3, 0, [xa6], [0]],
    qT3 = [
      3,
      G1,
      QH3,
      0,
      [F81, SG3, ra6, YS, bG3, yO],
      [0, () => G86, 0, 0, () => fX, [0, 4]],
    ],
    KT3 = [3, G1, gH3, 0, [QD], [0]],
    YT3 = [
      3,
      G1,
      dH3,
      0,
      [jV, KB8, yO, YS, Mu8, ca6, La6, Bu8, ru8, sn],
      [
        0,
        [() => Ym8, 0],
        [0, 4],
        0,
        0,
        () => fX,
        0,
        [() => mm8, 0],
        [() => Fm8, 0],
        () => jm8,
      ],
    ],
    zT3 = [3, G1, cH3, 0, [FD], [0]],
    wT3 = [3, G1, iH3, 0, [WB8, Av], [0, 0]],
    HT3 = [3, G1, nH3, 0, [Av], [0]],
    $T3 = [
      3,
      G1,
      aH3,
      0,
      [L2, QY, pB8, Vu8, sB8, hB8, Wu8, _u8, Tu8, ya6, Ca6, ia6, zS, yO],
      [
        [() => J86, 0],
        [() => yR1, 0],
        [() => Nm8, 0],
        [() => Wm8, 0],
        [() => Tm8, 0],
        () => Vm8,
        [() => Gm8, 0],
        () => Mm8,
        () => Zm8,
        [() => lO1, 0],
        [() => lO1, 0],
        0,
        () => fX,
        [0, 4],
      ],
    ],
    OT3 = [3, G1, oH3, 0, [TR1, Fa6, Ku, mD], [0, 0, 0, 5]],
    _T3 = [
      3,
      G1,
      tH3,
      0,
      [cO1, QY, yO],
      [
        [0, 1],
        [() => yR1, 0],
        [0, 4],
      ],
    ],
    JT3 = [3, G1, eH3, 0, [TR1, Ku], [0, 0]],
    XT3 = [
      3,
      G1,
      q$3,
      0,
      [da6, QY, yO, CG3, zS],
      [0, [() => Go6, 0], [0, 4], () => Fy3, () => fX],
    ],
    jT3 = [3, G1, K$3, 0, [pa6, Cz], [0, 0]],
    DT3 = [
      3,
      G1,
      T$3,
      0,
      [ER1, ua6, tM3, wW3, yO, zS],
      [0, () => yo6, 2, 0, [0, 4], () => fX],
    ],
    MT3 = [3, G1, v$3, 0, [Y86], [() => P86]],
    PT3 = [
      3,
      G1,
      H$3,
      0,
      [wo6, Oo6, kG3, _o6, yO],
      [0, 0, 0, () => fX, [0, 4]],
    ],
    WT3 = [3, G1, $$3, 0, [FD], [0]],
    GT3 = [
      3,
      G1,
      O$3,
      0,
      [jV, fu8, YS, yO, jP3, NR1, RP3, ca6, yP3, Ho6, jo6, sn, Qa6, g81, ha6],
      [
        0,
        0,
        0,
        [0, 4],
        0,
        0,
        0,
        () => fX,
        () => fX,
        [() => To6, 0],
        () => vo6,
        () => Vo6,
        128,
        () => en,
        () => Ro6,
      ],
    ],
    ZT3 = [3, G1, _$3, 0, [FD], [0]],
    fT3 = [
      3,
      G1,
      W$3,
      0,
      [jV, Ua6, YS, na6, ca6, UW3, yO, g81, gW3],
      [0, 0, 0, () => G86, () => fX, () => fX, 0, () => en, 0],
    ],
    VT3 = [3, G1, G$3, 0, [FD], [0]],
    NT3 = [
      3,
      G1,
      Z$3,
      0,
      [jV, YS, yO, Av, ga6, sn, g81, $o6, zS],
      [0, 0, [0, 4], 0, () => Co6, () => So6, () => en, 1, () => fX],
    ],
    TT3 = [3, G1, f$3, 0, [FD], [0]],
    vT3 = [
      3,
      G1,
      h$3,
      0,
      [yO, qo6, aO1, QY, Yo6, ma6, zS],
      [[0, 4], 0, () => Lo6, [() => Zo6, 0], () => No6, () => W86, () => fX],
    ],
    ET3 = [3, G1, I$3, 0, [LR1], [0]],
    kT3 = [
      3,
      G1,
      y$3,
      0,
      [yO, oa6, Ao6, Av, Ia6, zS],
      [[0, 4], 1, 0, 0, 0, () => fX],
    ],
    LT3 = [3, G1, C$3, 0, [ta6], [0]],
    RT3 = [3, G1, Y$3, 0, [on], [0]],
    yT3 = [3, G1, X$3, 8, [L2, qB8, BZ3], [[() => IV3, 0], 0, () => Ey3]],
    CT3 = [3, G1, M$3, 0, [Du8], [() => FR3]],
    ST3 = [
      3,
      G1,
      j$3,
      0,
      [xa6, kP3, QD, mD, Cz, vR1, an],
      [0, 0, 0, 5, 0, 5, 0],
    ],
    hT3 = [
      3,
      G1,
      E$3,
      0,
      [QD, F81, PM, aA6, MP3, NR1, lG3, dA6],
      [0, 0, 5, 0, 0, 0, 0, 0],
    ],
    IT3 = [3, G1, L$3, 0, [SP3, hP3], [1, 0]],
    xT3 = [3, G1, GO3, 0, [Cz, PM, JL], [0, 5, 5]],
    bT3 = [
      3,
      G1,
      B$3,
      0,
      [h5, XW, vR1],
      [
        [0, 1],
        [0, 1],
        [5, { [E8]: MJ }],
      ],
    ],
    uT3 = [3, G1, m$3, 0, [], []],
    BT3 = [
      3,
      G1,
      F$3,
      0,
      [h5, Qb8],
      [
        [0, 1],
        [2, { [E8]: Qb8 }],
      ],
    ],
    mT3 = [3, G1, Q$3, 0, [], []],
    FT3 = [
      3,
      G1,
      U$3,
      0,
      [h5, Q81, vR1],
      [
        [0, 1],
        [0, 1],
        [5, { [E8]: MJ }],
      ],
    ],
    QT3 = [3, G1, p$3, 0, [], []],
    gT3 = [3, G1, i$3, 0, [Zu8], [[0, 1]]],
    UT3 = [3, G1, n$3, 0, [], []],
    pT3 = [3, G1, r$3, 0, [on], [[0, 1]]],
    dT3 = [3, G1, a$3, 0, [], []],
    cT3 = [3, G1, s$3, 0, [Av], [0]],
    lT3 = [3, G1, t$3, 0, [], []],
    iT3 = [
      3,
      G1,
      AO3,
      0,
      [cO1, ZR1],
      [
        [0, 1],
        [0, { [E8]: ZR1 }],
      ],
    ],
    nT3 = [3, G1, qO3, 0, [], []],
    rT3 = [3, G1, YO3, 0, [on], [[0, 1]]],
    aT3 = [3, G1, zO3, 0, [], []],
    oT3 = [3, G1, HO3, 0, [ou8], [[0, 1]]],
    sT3 = [3, G1, $O3, 0, [], []],
    tT3 = [3, G1, jO3, 0, [nO1], [[0, 1]]],
    eT3 = [3, G1, DO3, 0, [], []],
    Av3 = [3, G1, _O3, 0, [], []],
    qv3 = [3, G1, JO3, 0, [], []],
    Kv3 = [3, G1, TO3, 0, [LR1], [[0, 1]]],
    Yv3 = [3, G1, vO3, 0, [], []],
    zv3 = [3, G1, fO3, 0, [ea6], [[0, 1]]],
    wv3 = [3, G1, VO3, 0, [], []],
    Hv3 = [3, G1, MO3, 0, [nO1], [[0, 1]]],
    $v3 = [3, G1, PO3, 0, [], []],
    Ov3 = [3, G1, NO3, 0, [oP3, WZ3, QY, pf3], [0, 0, 0, 0]],
    _v3 = [3, G1, d$3, 0, [Lf3], [() => QL3]],
    Jv3 = [3, G1, yO3, 0, [on, pW3, AZ3], [0, [() => kV3, 0], () => YL3]],
    Xv3 = [3, G1, hO3, 0, [L2, UP3], [[() => vV3, 0], () => by3]],
    jv3 = [3, G1, xO3, 0, [mf3, aP3, RG3], [0, [() => Xv3, 0], [() => pR3, 0]]],
    Dv3 = [3, G1, mO3, 0, [fG3, vZ3], [() => Mv3, () => Zv3]],
    Mv3 = [3, G1, pO3, 0, [DP3, OZ3], [64, 64]],
    jm8 = [3, G1, aO3, 0, [pg], [0]],
    Pv3 = [3, G1, oO3, 0, [cW3], [0]],
    Wv3 = [3, G1, sO3, 0, [kB8], [0]],
    Gv3 = [3, G1, tO3, 0, [kB8], [0]],
    Zv3 = [3, G1, A_3, 0, [_P3, DZ3], [64, 64]],
    fv3 = [
      3,
      G1,
      q_3,
      0,
      [FD, jV, Cz, PM, zB8, XW3, EG3, SZ3, zW3, LP3, hW3, La6],
      [0, 0, 0, 5, 0, 64, 64, 64, 64, 64, () => Dv3, 0],
    ],
    Vv3 = [3, G1, LO3, 0, [h5], [[0, 1]]],
    Nv3 = [3, G1, RO3, 0, [kR1], [[() => SR1, 16]]],
    Tv3 = [3, G1, w_3, 0, [zf3, oZ3, OP3], [0, () => NL3, [() => pN3, 0]]],
    vv3 = [
      3,
      G1,
      K_3,
      0,
      [VB8, iu8, HB8, ka6],
      [[() => Lm8, 0], () => Pm8, () => vm8, 143],
    ],
    Ev3 = [3, G1, Y_3, 0, [QD, Jf3, lu8], [0, [() => lR3, 0], [() => vv3, 0]]],
    kv3 = [3, G1, O_3, 0, [WW3], [0]],
    KS = [3, G1, $_3, 0, [la6, U81], [0, 15]],
    Lv3 = [
      3,
      G1,
      J_3,
      0,
      [QD, Av, F81, fB8, q86, z86, LB8, Eu8, AB8, XB8],
      [0, 0, 0, 0, 64, 64, 2, 64, 64, () => Dm8],
    ],
    Dm8 = [3, G1, X_3, 0, [Cz], [0]],
    Rv3 = [
      3,
      G1,
      j_3,
      0,
      [QD, Av, F81, fB8, q86, z86, LB8, Eu8, AB8, XB8],
      [0, 0, 0, 0, 64, 64, 2, 64, 64, () => Dm8],
    ],
    yv3 = [
      3,
      G1,
      F_3,
      0,
      [VB8, iu8, HB8, ka6],
      [[() => Lm8, 0], () => Pm8, () => vm8, 143],
    ],
    Cv3 = [
      3,
      G1,
      W_3,
      0,
      [h5, XW],
      [
        [0, 1],
        [0, 1],
      ],
    ],
    Sv3 = [
      3,
      G1,
      G_3,
      0,
      [h5, L2, XW, Ra6, Ju8, MJ],
      [0, [() => tn, 0], 0, [() => ko6, 0], 0, 5],
    ],
    hv3 = [
      3,
      G1,
      f_3,
      0,
      [h5, XW],
      [
        [0, 1],
        [0, 1],
      ],
    ],
    Iv3 = [
      3,
      G1,
      v_3,
      0,
      [h5, XW, Cz, Sa6, Iu8, Ru8, yu8, mD, MJ],
      [0, 0, 0, 0, [() => qm8, 0], 0, [() => Am8, 0], 5, 5],
    ],
    xv3 = [
      3,
      G1,
      N_3,
      0,
      [h5, XW, Sb8],
      [
        [0, 1],
        [0, 1],
        [0, { [E8]: Sb8 }],
      ],
    ],
    bv3 = [3, G1, T_3, 0, [h5, XW, ZP3], [0, 0, [() => yy3, 0]]],
    uv3 = [
      3,
      G1,
      L_3,
      0,
      [h5, XW],
      [
        [0, 1],
        [0, 1],
      ],
    ],
    Bv3 = [3, G1, R_3, 0, [h5, _f3], [0, [() => LN3, 0]]],
    mv3 = [3, G1, y_3, 0, [h5], [[0, 1]]],
    Fv3 = [
      3,
      G1,
      C_3,
      0,
      [h5, L2, Ku, ZB8, QY, oA6, $B8, mD, MJ],
      [0, [() => tn, 0], 0, 0, [() => oO1, 0], 0, 0, 5, 5],
    ],
    Qv3 = [
      3,
      G1,
      h_3,
      0,
      [h5, Q81],
      [
        [0, 1],
        [0, 1],
      ],
    ],
    gv3 = [3, G1, I_3, 0, [h5, mB8], [0, [() => fo6, 0]]],
    Uv3 = [
      3,
      G1,
      b_3,
      0,
      [h5, XW, Q81],
      [
        [0, 1],
        [0, 1],
        [0, 1],
      ],
    ],
    pv3 = [3, G1, u_3, 0, [xf3], [[() => Xm8, 0]]],
    dv3 = [3, G1, KJ3, 0, [Zu8], [[0, 1]]],
    cv3 = [
      3,
      G1,
      YJ3,
      0,
      [xa6, JB8, QD, mD, Cz, QY, an, vR1],
      [0, 0, 0, 5, 0, 0, 0, 5],
    ],
    lv3 = [3, G1, zJ3, 0, [on], [[0, 1]]],
    iv3 = [
      3,
      G1,
      wJ3,
      0,
      [
        QD,
        F81,
        jV,
        FD,
        aA6,
        NR1,
        ra6,
        Qa6,
        Ho6,
        jo6,
        sn,
        QB8,
        rB8,
        PM,
        ha6,
        dA6,
        an,
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        128,
        [() => To6, 0],
        () => vo6,
        () => Vo6,
        () => Cm8,
        () => um8,
        5,
        () => Ro6,
        0,
        0,
      ],
    ],
    nv3 = [3, G1, DJ3, 0, [Ug], [[() => RR1, 1]]],
    rv3 = [
      3,
      G1,
      MJ3,
      0,
      [jV, Cz, FD, KB8, YS, Mu8, zB8, La6, Bu8, ru8, sn, PM, JL, PW3],
      [
        0,
        0,
        0,
        [() => Ym8, 0],
        0,
        0,
        0,
        0,
        [() => mm8, 0],
        [() => Fm8, 0],
        () => jm8,
        5,
        5,
        64,
      ],
    ],
    av3 = [3, G1, GJ3, 0, [Av], [[0, 1]]],
    ov3 = [3, G1, ZJ3, 0, [Av, oM3, YP3, eP3, NZ3], [0, () => uV3, 0, 0, 0]],
    sv3 = [3, G1, fJ3, 0, [on], [[0, 1]]],
    tv3 = [3, G1, VJ3, 0, [NG3], [() => Lv3]],
    ev3 = [
      3,
      G1,
      EJ3,
      0,
      [cO1, ZR1],
      [
        [0, 1],
        [0, { [E8]: ZR1 }],
      ],
    ],
    AE3 = [
      3,
      G1,
      kJ3,
      0,
      [
        L2,
        QY,
        TR1,
        Fa6,
        Ku,
        Cz,
        Sf3,
        IP3,
        MV3,
        aZ3,
        NP3,
        AP3,
        vu8,
        mD,
        MJ,
        Kf3,
        GW3,
        ya6,
        Ca6,
        $B8,
      ],
      [
        [() => J86, 0],
        [() => yR1, 0],
        0,
        0,
        0,
        0,
        [() => pE3, 0],
        [() => yE3, 0],
        [() => nE3, 0],
        () => FE3,
        [() => hE3, 0],
        () => vE3,
        () => fm8,
        5,
        5,
        [() => zy3, 0],
        [() => sR3, 0],
        [() => lO1, 0],
        [() => lO1, 0],
        0,
      ],
    ],
    qE3 = [3, G1, RJ3, 0, [on], [[0, 1]]],
    KE3 = [
      3,
      G1,
      yJ3,
      0,
      [QD, F81, jV, FD, na6, PM, _B8, ra6, tu8, CP3],
      [0, 0, 0, 0, () => G86, 5, 0, 0, 2, () => IT3],
    ],
    YE3 = [3, G1, SJ3, 0, [ou8], [[0, 1]]],
    zE3 = [
      3,
      G1,
      hJ3,
      0,
      [da6, QY, mD, MJ, pa6, aO1, su8, Cz, _H],
      [0, [() => Go6, 0], 5, 5, 0, () => bm8, 0, 0, 0],
    ],
    wE3 = [3, G1, aJ3, 0, [nO1], [[0, 1]]],
    HE3 = [3, G1, oJ3, 0, [Y86], [() => P86]],
    $E3 = [3, G1, bJ3, 0, [FD], [[0, 1]]],
    OE3 = [
      3,
      G1,
      uJ3,
      0,
      [FD, Cz, PM, gB8, Oo6, yB8, wo6, UB8, _o6, an, xB8],
      [0, 0, 5, 0, 0, 0, 0, 0, () => fX, 0, 0],
    ],
    _E3 = [3, G1, BJ3, 0, [Ug], [[0, 1]]],
    JE3 = [
      3,
      G1,
      mJ3,
      0,
      [
        FD,
        jV,
        oG3,
        rG3,
        yO,
        YS,
        Cz,
        SB8,
        an,
        PM,
        JL,
        rO1,
        aA6,
        Qa6,
        Ho6,
        jo6,
        sn,
        NR1,
        aG3,
        QB8,
        rB8,
        g81,
        ha6,
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        () => ym8,
        0,
        5,
        5,
        5,
        0,
        128,
        [() => To6, 0],
        () => vo6,
        () => Vo6,
        0,
        0,
        () => Cm8,
        () => um8,
        () => en,
        () => Ro6,
      ],
    ],
    XE3 = [3, G1, gJ3, 0, [Ug], [[0, 1]]],
    jE3 = [
      3,
      G1,
      UJ3,
      0,
      [FD, jV, Ua6, au8, YS, na6, Cz, an, PM, JL, rO1, g81, QW3],
      [0, 0, 0, 0, 0, () => G86, 0, 0, 5, 5, 5, () => en, 0],
    ],
    DE3 = [3, G1, pJ3, 0, [Ug], [[0, 1]]],
    ME3 = [
      3,
      G1,
      dJ3,
      0,
      [FD, jV, Av, yO, YS, Cz, DV, bB8, JL, rO1, ga6, sn, g81, $o6, YB8],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        [() => Jm8, 0],
        5,
        5,
        5,
        () => Co6,
        () => So6,
        () => en,
        1,
        5,
      ],
    ],
    PE3 = [3, G1, iJ3, 0, [], []],
    WE3 = [3, G1, nJ3, 0, [OB8], [() => km8]],
    GE3 = [3, G1, XX3, 0, [LR1], [[0, 1]]],
    ZE3 = [
      3,
      G1,
      jX3,
      0,
      [qo6, Yo6, QY, mD, MJ, LR1, aO1, ma6, Cz, _H],
      [0, () => No6, [() => Zo6, 0], 5, 5, 0, () => Lo6, () => W86, 0, 0],
    ],
    fE3 = [3, G1, OX3, 0, [ea6], [[0, 1]]],
    VE3 = [
      3,
      G1,
      _X3,
      0,
      [oa6, hu8, Ao6, ta6, QD, Cu8, du8, Cz, PM, JL, an, Ia6, Pu8],
      [1, 1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5],
    ],
    NE3 = [3, G1, FX3, 0, [], []],
    TE3 = [3, G1, QX3, 0, [pu8], [21]],
    vE3 = [3, G1, M_3, 0, [TB8, VR1], [64, 1]],
    Mm8 = [3, G1, E_3, 0, [TB8, VR1], [64, 1]],
    Pm8 = [3, G1, JJ3, 0, [TR1, ZR1], [0, 0]],
    EE3 = [
      3,
      G1,
      Q_3,
      0,
      [_H, eu8, PB8, q86, z86, OL, XL, _L, jL],
      [
        0,
        0,
        0,
        [() => nA6, 0],
        [() => nA6, 0],
        [() => cA6, 0],
        [() => cA6, 0],
        2,
        2,
      ],
    ],
    kE3 = [
      3,
      G1,
      U_3,
      0,
      [_H, eu8, PB8, q86, z86, OL, XL, _L, jL],
      [
        0,
        0,
        0,
        [() => nA6, 0],
        [() => nA6, 0],
        [() => cA6, 0],
        [() => cA6, 0],
        2,
        2,
      ],
    ],
    LE3 = [3, G1, d_3, 0, [$86], [[() => wm8, 0]]],
    RE3 = [3, G1, c_3, 0, [$86], [[() => wm8, 0]]],
    yE3 = [
      3,
      G1,
      HJ3,
      0,
      [cu8, cB8],
      [
        [() => nR3, 0],
        [() => LE3, 0],
      ],
    ],
    Wm8 = [
      3,
      G1,
      $J3,
      0,
      [Uu8, FB8],
      [
        [() => rR3, 0],
        [() => RE3, 0],
      ],
    ],
    CE3 = [3, G1, r_3, 0, [_H, dB8, iO1, Fu8], [0, 1, [() => Hm8, 0], 2]],
    SE3 = [3, G1, a_3, 0, [_H, dB8, iO1, Fu8], [0, 1, [() => Hm8, 0], 2]],
    hE3 = [3, G1, t_3, 0, [cu8], [[() => aR3, 0]]],
    Gm8 = [3, G1, e_3, 0, [Uu8], [[() => oR3, 0]]],
    Zm8 = [3, G1, OJ3, 0, [EW3], [0]],
    fm8 = [3, G1, _J3, 0, [kW3, vW3], [0, 0]],
    IE3 = [
      3,
      G1,
      sJ3,
      0,
      [_H, OL, XL, _L, jL],
      [0, [() => nn, 0], [() => nn, 0], 2, 2],
    ],
    xE3 = [
      3,
      G1,
      tJ3,
      0,
      [_H, OL, XL, _L, jL],
      [0, [() => nn, 0], [() => nn, 0], 2, 2],
    ],
    bE3 = [3, G1, YX3, 0, [_H, iO1, OL, XL, _L, jL], [0, 0, 0, 0, 2, 2]],
    uE3 = [3, G1, zX3, 0, [_H, iO1, OL, XL, _L, jL], [0, 0, 0, 0, 2, 2]],
    BE3 = [
      3,
      G1,
      DX3,
      0,
      [L2, QY, NB8, iO1, OL, XL, _L, jL],
      [0, 0, 0, 0, 0, 0, 2, 2],
    ],
    mE3 = [
      3,
      G1,
      MX3,
      0,
      [L2, QY, NB8, iO1, OL, XL, _L, jL],
      [0, 0, 0, 0, 0, 0, 2, 2],
    ],
    FE3 = [3, G1, ZX3, 0, [HZ3, FZ3], [() => Ay3, () => Ky3]],
    Vm8 = [3, G1, fX3, 0, [wZ3, LZ3], [() => qy3, () => Yy3]],
    QE3 = [
      3,
      G1,
      GX3,
      0,
      [A86, HP3, Cz, L2, QY, Ku, mD, MJ, vu8],
      [0, 0, 0, [() => J86, 0], [() => yR1, 0], 0, 5, 5, () => fm8],
    ],
    gE3 = [
      3,
      G1,
      vX3,
      0,
      [L2, ba6, Qu8, _H, OL, XL, _L, jL],
      [
        [() => Om8, 0],
        [() => $m8, 0],
        [() => xm8, 0],
        0,
        [() => lA6, 0],
        [() => lA6, 0],
        2,
        2,
      ],
    ],
    UE3 = [
      3,
      G1,
      kX3,
      0,
      [L2, ba6, Qu8, _H, OL, XL, _L, jL],
      [
        [() => Om8, 0],
        [() => $m8, 0],
        [() => xm8, 0],
        0,
        [() => lA6, 0],
        [() => lA6, 0],
        2,
        2,
      ],
    ],
    pE3 = [
      3,
      G1,
      hX3,
      0,
      [Qf3, cB8],
      [
        [() => Hy3, 0],
        [() => dE3, 0],
      ],
    ],
    Nm8 = [
      3,
      G1,
      IX3,
      0,
      [Wf3, FB8],
      [
        [() => $y3, 0],
        [() => cE3, 0],
      ],
    ],
    dE3 = [3, G1, xX3, 0, [$86], [[() => _m8, 0]]],
    cE3 = [3, G1, bX3, 0, [$86], [[() => _m8, 0]]],
    lE3 = [
      3,
      G1,
      gX3,
      0,
      [Jo6, OL, XL, _L, jL],
      [0, [() => nn, 0], [() => nn, 0], 2, 2],
    ],
    iE3 = [
      3,
      G1,
      pX3,
      0,
      [Jo6, OL, XL, _L, jL],
      [0, [() => nn, 0], [() => nn, 0], 2, 2],
    ],
    nE3 = [
      3,
      G1,
      cX3,
      0,
      [XV3, uG3],
      [
        [() => Oy3, 0],
        [() => tR3, 0],
      ],
    ],
    Tm8 = [
      3,
      G1,
      lX3,
      0,
      [DV3, BG3],
      [
        [() => _y3, 0],
        [() => eR3, 0],
      ],
    ],
    rE3 = [
      3,
      G1,
      nX3,
      0,
      [SW3, Gu8, Su8],
      [
        [() => oE3, 0],
        [() => Jy3, 0],
        [() => Im8, 0],
      ],
    ],
    aE3 = [3, G1, rX3, 0, [L2, QY, hZ3], [[() => zm8, 0], [() => EV3, 0], 0]],
    oE3 = [3, G1, sX3, 0, [MW3, qB8], [0, [() => SV3, 0]]],
    sE3 = [3, G1, eX3, 0, [PG3, QD], [[() => My3, 0], 0]],
    tE3 = [3, G1, Kj3, 0, [QD, F81, PM, tu8, _B8], [0, 0, 5, 2, 0]],
    eE3 = [3, G1, wj3, 0, [QD], [0]],
    Ak3 = [
      3,
      G1,
      Oj3,
      0,
      [da6, QY, mD, MJ, pa6, aO1, su8, Cz, _H],
      [0, [() => Go6, 0], 5, 5, 0, () => bm8, 0, 0, 0],
    ],
    qk3 = [-3, G1, Jj3, { [Au]: uB8, [qu]: 500 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(qk3, sb8);
  var Kk3 = [3, G1, Aj3, 0, [rf3, FW3, IZ3], [2, () => Qy3, [() => dy3, 0]]],
    vm8 = [3, G1, Pj3, 0, [vf3], [() => UL3]],
    Em8 = [3, G1, Dj3, 0, [HV3], [[() => zk3, 0]]],
    Yk3 = [
      3,
      G1,
      jj3,
      0,
      [wB8, QD, yZ3, lu8, iG3],
      [0, 0, [() => Em8, 0], [() => yv3, 0], () => KL3],
    ],
    zk3 = [
      3,
      G1,
      Mj3,
      0,
      [gG3, tG3, NW3, bW3, RZ3],
      [1, 0, [() => Qm8, 0], [() => sE3, 0], [() => jR3, 0]],
    ],
    wk3 = [3, G1, VD3, 0, [ef3], [0]],
    Hk3 = [
      3,
      G1,
      Vj3,
      0,
      [h5, LK, kY],
      [
        [0, { [E8]: h5 }],
        [0, { [E8]: LK }],
        [1, { [E8]: kY }],
      ],
    ],
    $k3 = [3, G1, Nj3, 0, [KP3, LK], [[() => hR3, 0], 0]],
    Ok3 = [
      3,
      G1,
      Zj3,
      0,
      [h5, LK, kY],
      [
        [0, 1],
        [0, { [E8]: LK }],
        [1, { [E8]: kY }],
      ],
    ],
    _k3 = [3, G1, fj3, 0, [qP3, LK], [() => vR3, 0]],
    Jk3 = [
      3,
      G1,
      vj3,
      0,
      [h5, LK, kY],
      [
        [0, 1],
        [0, { [E8]: LK }],
        [1, { [E8]: kY }],
      ],
    ],
    Xk3 = [3, G1, Ej3, 0, [Pf3, LK], [[() => IR3, 0], 0]],
    jk3 = [
      3,
      G1,
      Lj3,
      0,
      [h5, XW, LK, kY],
      [
        [0, 1],
        [0, 1],
        [0, { [E8]: LK }],
        [1, { [E8]: kY }],
      ],
    ],
    Dk3 = [3, G1, Rj3, 0, [Bf3, LK], [[() => xR3, 0], 0]],
    Mk3 = [
      3,
      G1,
      hj3,
      0,
      [mb8, Bb8, JW, kY, LK, uD, BD, XV, pA6],
      [
        [5, { [E8]: mb8 }],
        [5, { [E8]: Bb8 }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
        [0, { [E8]: XV }],
        [0, { [E8]: pA6 }],
      ],
    ],
    Pk3 = [3, G1, Ij3, 0, [LK, TG3], [0, () => QR3]],
    Wk3 = [
      3,
      G1,
      xj3,
      0,
      [JV, _V, JW, xb8, Fb8, kY, LK, uD, BD, gb8, dA6],
      [
        [5, { [E8]: JV }],
        [5, { [E8]: _V }],
        [0, { [E8]: JW }],
        [0, { [E8]: xb8 }],
        [0, { [E8]: Fb8 }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
        [2, { [E8]: gb8 }],
        [0, { [E8]: dA6 }],
      ],
    ],
    Gk3 = [3, G1, bj3, 0, [LK, aa6], [0, () => gR3]],
    Zk3 = [
      3,
      G1,
      Bj3,
      0,
      [_V, JV, XV, Cb8, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: _V }],
        [5, { [E8]: JV }],
        [0, { [E8]: XV }],
        [0, { [E8]: Cb8 }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    fk3 = [3, G1, mj3, 0, [LK, eW3], [0, () => cR3]],
    Vk3 = [
      3,
      G1,
      gj3,
      0,
      [Av, Ub8],
      [
        [0, 1],
        [0, { [E8]: Ub8 }],
      ],
    ],
    Nk3 = [3, G1, Uj3, 0, [Av, eG3], [0, () => fy3]],
    Tk3 = [
      3,
      G1,
      pj3,
      0,
      [ub8, hb8, bb8, Ib8],
      [
        [0, { [E8]: ub8 }],
        [0, { [E8]: hb8 }],
        [0, { [E8]: bb8 }],
        [0, { [E8]: Ib8 }],
      ],
    ],
    vk3 = [3, G1, dj3, 0, [aa6], [() => iR3]],
    Ek3 = [
      3,
      G1,
      lj3,
      0,
      [cO1, kY, LK],
      [
        [0, { [E8]: cO1 }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
      ],
    ],
    kk3 = [3, G1, ij3, 0, [TW3, LK], [[() => wy3, 0], 0]],
    Lk3 = [
      3,
      G1,
      rj3,
      0,
      [JV, _V, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: JV }],
        [5, { [E8]: _V }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    Rk3 = [3, G1, aj3, 0, [LK, aa6], [0, () => Xy3]],
    yk3 = [
      3,
      G1,
      sj3,
      0,
      [kY, LK, Nf3],
      [
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: _H }],
      ],
    ],
    Ck3 = [3, G1, tj3, 0, [dW3, LK], [[() => jy3, 0], 0]],
    Sk3 = [
      3,
      G1,
      jD3,
      0,
      [kY, LK, hG3],
      [
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: ER1 }],
      ],
    ],
    hk3 = [3, G1, DD3, 0, [LG3, LK], [() => Dy3, 0]],
    Ik3 = [
      3,
      G1,
      AD3,
      0,
      [_V, JV, XV, pb8, db8, yf3, kY, LK, uD, BD],
      [
        [5, { [E8]: _V }],
        [5, { [E8]: JV }],
        [0, { [E8]: XV }],
        [0, { [E8]: pb8 }],
        [0, { [E8]: db8 }],
        [0, { [E8]: sG3 }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    xk3 = [3, G1, qD3, 0, [LK, GG3], [0, () => Py3]],
    bk3 = [
      3,
      G1,
      KD3,
      0,
      [_V, JV, XV, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: _V }],
        [5, { [E8]: JV }],
        [0, { [E8]: XV }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    uk3 = [3, G1, YD3, 0, [LK, ZG3], [0, () => Wy3]],
    Bk3 = [
      3,
      G1,
      HD3,
      0,
      [_V, JV, XV, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: _V }],
        [5, { [E8]: JV }],
        [0, { [E8]: XV }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    mk3 = [3, G1, $D3, 0, [LK, vG3], [0, () => Gy3]],
    Fk3 = [
      3,
      G1,
      OD3,
      0,
      [cb8, lb8, XV, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: cb8 }],
        [5, { [E8]: lb8 }],
        [0, { [E8]: XV }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    Qk3 = [3, G1, _D3, 0, [LK, BW3], [0, [() => Zy3, 0]]],
    gk3 = [
      3,
      G1,
      ZD3,
      0,
      [kY, LK, _H],
      [
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: _H }],
      ],
    ],
    Uk3 = [3, G1, fD3, 0, [XZ3, LK], [[() => Vy3, 0], 0]],
    pk3 = [
      3,
      G1,
      PD3,
      0,
      [_V, JV, XV, pA6, JW, kY, LK, uD, BD],
      [
        [5, { [E8]: _V }],
        [5, { [E8]: JV }],
        [0, { [E8]: XV }],
        [0, { [E8]: pA6 }],
        [0, { [E8]: JW }],
        [1, { [E8]: kY }],
        [0, { [E8]: LK }],
        [0, { [E8]: uD }],
        [0, { [E8]: BD }],
      ],
    ],
    dk3 = [3, G1, WD3, 0, [LK, _Z3], [0, () => Ny3]],
    ck3 = [3, G1, TD3, 0, [Ko6], [0]],
    lk3 = [3, G1, vD3, 0, [zS], [() => fX]],
    km8 = [
      3,
      G1,
      yj3,
      0,
      [uP3, QZ3, ff3, xW3, AW3, YV3],
      [() => lN3, () => Rm8, 2, 2, 2, 2],
    ],
    P86 = [
      3,
      G1,
      UD3,
      0,
      [nO1, ER1, Cz, IB8, mD, MJ, ua6, OW3, JW3],
      [0, 0, 0, 0, 5, 5, () => yo6, 0, 0],
    ],
    ik3 = [3, G1, pD3, 0, [nO1, ER1, Cz, IB8, mD, MJ], [0, 0, 0, 0, 5, 5]],
    nk3 = [3, G1, kD3, 8, [la6, _H, QY], [0, 0, 0]],
    rk3 = [3, G1, RD3, 0, [eZ3, sZ3], [0, [() => cy3, 0]]],
    ak3 = [
      3,
      G1,
      yD3,
      0,
      [FD, Cz, PM, gB8, Oo6, yB8, wo6, UB8, _o6, an, xB8],
      [0, 0, 5, 0, 0, 0, 0, 0, () => fX, 0, 0],
    ],
    ok3 = [
      3,
      G1,
      CD3,
      0,
      [FD, aA6, jV, Cz, SB8, JL, PM, rO1, TP3, fu8, NR1],
      [0, 0, 0, 0, () => ym8, 5, 5, 5, 0, 0, 0],
    ],
    sk3 = [
      3,
      G1,
      uD3,
      0,
      [FD, jV, Cz, JL, PM, rO1, au8, Ua6],
      [0, 0, 0, 5, 5, 5, 0, 0],
    ],
    tk3 = [3, G1, BD3, 0, [rZ3, pg, CB8], [0, 0, 0]],
    ek3 = [3, G1, mD3, 0, [pg, cZ3, CB8], [0, 0, 0]],
    AL3 = [
      3,
      G1,
      FD3,
      0,
      [FD, jV, Av, yO, YS, Cz, DV, bB8, JL, rO1, ga6, sn, g81, $o6, YB8],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        [() => Jm8, 0],
        5,
        5,
        5,
        () => Co6,
        () => So6,
        () => en,
        1,
        5,
      ],
    ],
    qL3 = [3, G1, lD3, 0, [nG3, WB8, Zf3], [0, 0, () => gL3]],
    KL3 = [3, G1, iD3, 0, [ZZ3], [() => XL3]],
    Vo6 = [3, G1, nD3, 0, [pg], [0]],
    YL3 = [3, G1, aD3, 0, [MG3], [0]],
    zL3 = [3, G1, H03, 0, [EZ3], [() => vy3]],
    wL3 = [
      3,
      G1,
      K03,
      0,
      [qo6, Yo6, QY, mD, MJ, LR1, aO1, ma6, Cz, _H],
      [0, () => No6, [() => Zo6, 0], 5, 5, 0, () => Lo6, () => W86, 0, 0],
    ],
    W86 = [3, G1, z03, 0, [QD], [0]],
    Lm8 = [3, G1, $03, 0, [hf3], [[() => xV3, 0]]],
    HL3 = [
      3,
      G1,
      eD3,
      0,
      [Ao6, ta6, QD, Cu8, du8, oa6, hu8, Cz, Ia6, Pu8, PM, JL],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 5, 5],
    ],
    $L3 = [3, G1, sD3, 0, [OB8], [() => km8]],
    OL3 = [3, G1, tD3, 0, [], []],
    _L3 = [3, G1, _03, 0, [pu8], [21]],
    JL3 = [3, G1, J03, 0, [], []],
    XL3 = [3, G1, X03, 0, [_H], [0]],
    jL3 = [3, G1, h03, 0, [ba6, U81], [0, () => py3]],
    DL3 = [3, G1, L03, 0, [qW3, ER1], [[0, 1], 0]],
    ML3 = [3, G1, R03, 0, [Y86], [() => P86]],
    PL3 = [
      3,
      G1,
      N03,
      0,
      [Ba6, sa6],
      [
        [() => rA6, 0],
        [() => rA6, 0],
      ],
    ],
    WL3 = [-3, G1, V03, { [Au]: rn, [qu]: 400 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(WL3, zu8);
  var GL3 = [-3, G1, C03, { [Au]: rn, [qu]: 404 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(GL3, tb8);
  var ZL3 = [
      3,
      G1,
      j03,
      0,
      [_H, AG3, _W3],
      [0, [() => Yk3, 0], [() => Ev3, 0]],
    ],
    fL3 = [3, G1, M03, 0, [wB8, KG3], [0, [() => Em8, 0]]],
    No6 = [3, G1, G03, 0, [uZ3], [1]],
    Rm8 = [3, G1, Q03, 0, [PP3, zG3], [0, 0]],
    VL3 = [3, G1, U03, 0, [pg], [0]],
    NL3 = [3, G1, t03, 0, [AV3], [0]],
    TL3 = [3, G1, r03, 0, [uW3, lW3, $W3, YG3, JV3], [1, 0, 0, 0, () => en]],
    vL3 = [-3, G1, e03, { [Au]: rn, [qu]: 400 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(vL3, Ku8);
  var EL3 = [-3, G1, qM3, { [Au]: uB8, [qu]: 503 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(EL3, wu8);
  var kL3 = [
      3,
      G1,
      b03,
      0,
      [h5, Sa6, yO, gZ3],
      [
        [0, 1],
        [0, 1],
        [0, { [CW3]: PV3, [iW3]: 1 }],
        [() => _N3, 16],
      ],
    ],
    LL3 = [3, G1, u03, 0, [h5, XW], [0, 0]],
    RL3 = [3, G1, m03, 0, [h5, XW, Mf3, yO], [[0, 1], [0, 1], 64, [0, 4]]],
    yL3 = [3, G1, F03, 0, [h5], [0]],
    ym8 = [3, G1, g03, 0, [KV3, dP3, Vf3], [() => wR3, () => xT3, () => cL3]],
    CL3 = [3, G1, d03, 0, [Ug], [[() => RR1, 1]]],
    SL3 = [3, G1, c03, 0, [], []],
    hL3 = [3, G1, i03, 0, [Ug], [[0, 1]]],
    IL3 = [3, G1, n03, 0, [], []],
    xL3 = [3, G1, o03, 0, [Ug], [[0, 1]]],
    bL3 = [3, G1, s03, 0, [], []],
    uL3 = [3, G1, AM3, 0, [bZ3], [0]],
    BL3 = [3, G1, KM3, 0, [la6, U81], [0, 0]],
    mL3 = [3, G1, MM3, 0, [Ko6, zS], [0, () => fX]],
    FL3 = [3, G1, PM3, 0, [], []],
    QL3 = [3, G1, JM3, 0, [Rf3, yG3], [0, 1]],
    gL3 = [
      3,
      G1,
      YM3,
      0,
      [df3, _G3, wf3, $V3],
      [() => zL3, () => wk3, () => uL3, () => _R3],
    ],
    UL3 = [3, G1, $M3, 0, [Ff3, If3, xG3, Yf3], [1, 1, 1, 64]],
    pL3 = [-3, G1, HM3, { [Au]: rn, [qu]: 429 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(pL3, eb8);
  var dL3 = [-3, G1, XM3, { [Au]: rn, [qu]: 400 }, [DV, xZ3], [0, 0]];
  HL.TypeRegistry.for(G1).registerError(dL3, Yu8);
  var To6 = [3, G1, zM3, 0, [pg, mW3], [0, [() => Kk3, 0]]],
    cL3 = [3, G1, wM3, 0, [Cz, PM, JL], [0, 5, 5]],
    Cm8 = [3, G1, _M3, 0, [kf3], [1]],
    lL3 = [3, G1, uM3, 0, [Ko6, Ef3], [0, 64]],
    iL3 = [3, G1, BM3, 0, [], []],
    nL3 = [
      3,
      G1,
      ZM3,
      0,
      [h5, XW, Ra6, jG3],
      [[0, 1], [0, 1], [() => ko6, 0], 0],
    ],
    rL3 = [3, G1, fM3, 0, [h5, XW, Ju8, MJ], [0, 0, 0, 5]],
    aL3 = [
      3,
      G1,
      VM3,
      0,
      [h5, kR1, L2, QY],
      [
        [0, 1],
        [() => SR1, 0],
        [() => tn, 0],
        [() => oO1, 0],
      ],
    ],
    oL3 = [3, G1, NM3, 0, [h5, L2, oA6, MJ], [0, [() => tn, 0], 0, 5]],
    sL3 = [
      3,
      G1,
      vM3,
      0,
      [h5, Q81, eA6, w86, vR1, sA6, VR1, yO],
      [[0, 1], [0, 1], [() => O86, 0], [() => _86, 0], 5, 0, 1, [0, 4]],
    ],
    tL3 = [3, G1, EM3, 0, [h5, Q81], [0, 0]],
    eL3 = [
      3,
      G1,
      LM3,
      0,
      [cO1, L2, QY, pB8, Vu8, sB8, hB8, Wu8, _u8, Tu8, ya6, Ca6, ia6],
      [
        [0, 1],
        [() => J86, 0],
        [() => yR1, 0],
        [() => Nm8, 0],
        [() => Wm8, 0],
        [() => Tm8, 0],
        () => Vm8,
        [() => Gm8, 0],
        () => Mm8,
        () => Zm8,
        [() => lO1, 0],
        [() => lO1, 0],
        0,
      ],
    ],
    AR3 = [3, G1, RM3, 0, [TR1, Fa6, Ku, MJ], [0, 0, 0, 5]],
    qR3 = [3, G1, CM3, 0, [nO1, ua6, yO], [[0, 1], () => yo6, [0, 4]]],
    KR3 = [3, G1, SM3, 0, [Y86], [() => P86]],
    YR3 = [3, G1, IM3, 0, [ea6, cP3, pP3], [[0, 1], 0, 0]],
    zR3 = [3, G1, xM3, 0, [], []],
    vo6 = [3, G1, gM3, 0, [OV3], [() => ky3]],
    wR3 = [3, G1, QM3, 0, [Cz, PM, JL], [0, 5, 5]],
    HR3 = [-3, G1, UM3, { [Au]: rn, [qu]: 400 }, [DV], [0]];
  HL.TypeRegistry.for(G1).registerError(HR3, Au8);
  var $R3 = [3, G1, mM3, 0, [pg], [0]],
    OR3 = [3, G1, pM3, 0, [zV3], [1]],
    _R3 = [3, G1, nM3, 0, [sM3], [0]],
    JR3 = [3, G1, cM3, 0, [WG3, UG3, VG3], [() => XR3, 1, [() => rk3, 0]]],
    XR3 = [3, G1, lM3, 0, [QD, ka6], [0, 143]],
    jR3 = [3, G1, iM3, 0, [_H, WP3], [0, [() => JR3, 0]]],
    en = [3, G1, FM3, 0, [iZ3, lZ3], [64, 64]],
    DR3 = [-3, BB8, "BedrockServiceException", 0, [], []];
  HL.TypeRegistry.for(BB8).registerError(DR3, $L);
  var MR3 = [1, G1, ez3, 0, [() => Ly3, 0]],
    PR3 = [1, G1, K23, 0, [() => iA6, 0]],
    WR3 = [1, G1, z23, 0, [() => Ry3, 0]],
    ib8 = [1, G1, O23, 0, [() => QV3, 0]],
    Eo6 = [1, G1, j23, 0, () => pV3],
    GR3 = [1, G1, Z23, 0, [() => CR1, 0]],
    ZR3 = [1, G1, V23, 0, [() => iV3, 0]],
    fR1 = [1, G1, E23, 0, [() => rV3, 0]],
    ko6 = [1, G1, C23, 0, [() => Bm8, 0]],
    fR3 = [1, G1, c23, 0, [() => zN3, 0]],
    VR3 = [1, G1, r23, 0, [() => wN3, 0]],
    NR3 = [1, G1, o23, 0, () => HN3],
    TR3 = [1, G1, t23, 0, [() => $N3, 0]],
    vR3 = [1, G1, Kw3, 0, () => JN3],
    ER3 = [1, G1, Jw3, 0, [() => j86, 0]],
    kR3 = [1, G1, Gw3, 0, [() => D86, 0]],
    LR3 = [1, G1, Vw3, 0, [() => eb, 0]],
    Sm8 = [1, G1, vw3, 0, [() => jN3, 0]],
    RR3 = [1, G1, kw3, 0, [() => DN3, 0]],
    yR3 = [1, G1, Sw3, 0, [() => M86, 0]],
    hm8 = [1, G1, xw3, 0, [() => m81, 0]],
    CR3 = [1, G1, Dw3, 0, [() => NN3, 0]],
    SR3 = [1, G1, Bw3, 0, [() => TN3, 0]],
    hR3 = [1, G1, iw3, 0, [() => RN3, 0]],
    IR3 = [1, G1, rw3, 0, [() => fo6, 0]],
    xR3 = [1, G1, ow3, 0, [() => Xm8, 0]],
    bR3 = [1, G1, AH3, 0, [() => Iy3, 0]],
    uR3 = [1, G1, PH3, 0, [() => mN3, 0]],
    BR3 = [1, G1, GH3, 0, [() => FN3, 0]],
    mR3 = [1, G1, NH3, 0, () => UN3],
    FR3 = [1, G1, z$3, 0, () => RT3],
    QR3 = [1, G1, D$3, 0, () => ST3],
    gR3 = [1, G1, k$3, 0, () => hT3],
    Im8 = [1, G1, bO3, 0, [() => jv3, 0]],
    UR3 = [1, G1, gO3, 0, [() => RR1, 0]],
    pR3 = [1, G1, rO3, 0, [() => zm8, 0]],
    dR3 = [1, G1, UO3, 0, [() => uy3, 0]],
    cR3 = [1, G1, z_3, 0, () => fv3],
    lR3 = [1, G1, H_3, 0, [() => Tv3, 0]],
    nb8 = [1, G1, __3, 8, () => kv3],
    iR3 = [1, G1, D_3, 0, () => Rv3],
    nR3 = [1, G1, i_3, 0, [() => EE3, 0]],
    rR3 = [1, G1, p_3, 0, [() => kE3, 0]],
    aR3 = [1, G1, s_3, 0, [() => CE3, 0]],
    oR3 = [1, G1, o_3, 0, [() => SE3, 0]],
    sR3 = [1, G1, TJ3, 0, [() => LV3, 0]],
    tR3 = [1, G1, eJ3, 0, [() => IE3, 0]],
    eR3 = [1, G1, AX3, 0, [() => xE3, 0]],
    nA6 = [1, G1, qX3, 0, [() => RV3, 0]],
    Ay3 = [1, G1, HX3, 0, () => bE3],
    qy3 = [1, G1, wX3, 0, () => uE3],
    Ky3 = [1, G1, WX3, 0, () => BE3],
    Yy3 = [1, G1, PX3, 0, () => mE3],
    zy3 = [1, G1, NX3, 0, [() => yV3, 0]],
    wy3 = [1, G1, TX3, 0, [() => QE3, 0]],
    xm8 = [1, G1, CX3, 0, [() => CV3, 0]],
    Hy3 = [1, G1, BX3, 0, [() => gE3, 0]],
    $y3 = [1, G1, LX3, 0, [() => UE3, 0]],
    Oy3 = [1, G1, iX3, 0, [() => lE3, 0]],
    _y3 = [1, G1, dX3, 0, [() => iE3, 0]],
    Jy3 = [1, G1, aX3, 0, [() => aE3, 0]],
    Xy3 = [1, G1, Yj3, 0, () => tE3],
    bm8 = [1, G1, $j3, 0, () => eE3],
    jy3 = [1, G1, _j3, 0, [() => Ak3, 0]],
    Dy3 = [1, G1, dD3, 0, () => ik3],
    My3 = [1, G1, LD3, 0, [() => nk3, 0]],
    Py3 = [1, G1, SD3, 0, () => ak3],
    Wy3 = [1, G1, hD3, 0, () => ok3],
    Gy3 = [1, G1, QD3, 0, () => sk3],
    Zy3 = [1, G1, gD3, 0, [() => AL3, 0]],
    fy3 = [1, G1, rD3, 0, () => qL3],
    Vy3 = [1, G1, Y03, 0, [() => wL3, 0]],
    Lo6 = [1, G1, w03, 0, () => W86],
    Ny3 = [1, G1, A03, 0, () => HL3],
    Ty3 = [1, G1, P03, 0, [() => Uy3, 0]],
    vy3 = [1, G1, W03, 0, () => Ov3],
    Ey3 = [1, G1, S03, 0, () => jL3],
    rb8 = [1, G1, v03, 0, [() => PL3, 0]],
    ab8 = [1, G1, f03, 0, [() => Qm8, 0]],
    fX = [1, G1, OM3, 0, () => BL3],
    um8 = [1, G1, dM3, 0, () => OR3],
    ky3 = [1, G1, rM3, 0, () => $R3],
    rA6 = [2, G1, E03, 8, 0, 0],
    Ly3 = [3, G1, q23, 0, [EP3], [[() => yT3, 0]]],
    Ry3 = [
      3,
      G1,
      Y23,
      0,
      [_V3, oW3, Of3, rW3, jf3, Gf3, pG3],
      [
        [() => nV3, 0],
        [() => gV3, 0],
        [() => dV3, 0],
        [() => FV3, 0],
        [() => lV3, 0],
        () => cV3,
        () => UV3,
      ],
    ],
    Bm8 = [
      3,
      G1,
      L23,
      0,
      [Xu8, iB8, bu8, ju8, nB8, uu8, Ou8, lB8, xu8, eM3, lf3, if3, IW3],
      [
        [() => tV3, 0],
        [() => IN3, 0],
        [() => WN3, 0],
        [() => qN3, 0],
        [() => uN3, 0],
        [() => fN3, 0],
        [() => aV3, 0],
        [() => SN3, 0],
        () => MN3,
        [() => oV3, 0],
        [() => yN3, 0],
        [() => CN3, 0],
        [() => EN3, 0],
      ],
    ],
    yy3 = [
      3,
      G1,
      l23,
      0,
      [kR1, GZ3, JP3, nu8],
      [
        [() => SR1, 0],
        [() => XN3, 0],
        [() => YN3, 0],
        [() => vN3, 0],
      ],
    ],
    Cy3 = [3, G1, n23, 0, [PZ3, FG3], [() => kN3, [() => hy3, 0]]],
    Sy3 = [
      3,
      G1,
      zw3,
      0,
      [YZ3, KZ3, qZ3],
      [
        [() => M86, 0],
        [() => D86, 0],
        [() => j86, 0],
      ],
    ],
    hy3 = [
      3,
      G1,
      Qw3,
      0,
      [Xu8, iB8, bu8, ju8, nB8, uu8, Ou8, lB8, xu8],
      [
        [() => eV3, 0],
        [() => xN3, 0],
        [() => GN3, 0],
        [() => KN3, 0],
        [() => BN3, 0],
        [() => VN3, 0],
        [() => sV3, 0],
        [() => hN3, 0],
        () => PN3,
      ],
    ],
    Iy3 = [
      3,
      G1,
      ew3,
      0,
      [wP3, sf3, nP3],
      [[() => AN3, 0], [() => bN3, 0], () => ZN3],
    ],
    xy3 = [
      3,
      G1,
      JH3,
      0,
      [tP3, JZ3],
      [
        [() => TR3, 0],
        [() => ON3, 0],
      ],
    ],
    Ro6 = [3, G1, bH3, 0, [gP3], [() => _v3]],
    yo6 = [3, G1, CO3, 0, [tZ3], [() => TL3]],
    mm8 = [
      3,
      G1,
      SO3,
      0,
      [$P3, yW3],
      [
        [() => BV3, 0],
        [() => rE3, 0],
      ],
    ],
    by3 = [3, G1, IO3, 0, [pg], [0]],
    Fm8 = [
      3,
      G1,
      BO3,
      0,
      [aO1, kZ3],
      [
        [() => dR3, 0],
        [() => Ty3, 0],
      ],
    ],
    uy3 = [3, G1, dO3, 0, [XP3, $Z3], [[() => Jv3, 0], () => Pv3]],
    By3 = [3, G1, eO3, 0, [mZ3, VZ3], [() => Gv3, () => Wv3]],
    my3 = [3, G1, cO3, 0, [Du8], [() => mR3]],
    Fy3 = [3, G1, Hj3, 0, [fP3], [0]],
    Qy3 = [3, G1, qj3, 0, [pg], [0]],
    gy3 = [
      3,
      G1,
      Xj3,
      0,
      [CZ3, fZ3],
      [
        [() => fL3, 0],
        [() => ZL3, 0],
      ],
    ],
    G86 = [3, G1, ID3, 0, [pZ3], [() => VL3]],
    Co6 = [3, G1, xD3, 0, [nZ3], [() => tk3]],
    So6 = [3, G1, bD3, 0, [Af3], [() => ek3]],
    Uy3 = [3, G1, D03, 0, [qG3, jZ3], [[() => gy3, 0], () => By3]],
    py3 = [3, G1, I03, 0, [Hf3, VW3], [0, 1]],
    dy3 = [
      3,
      G1,
      T03,
      0,
      [Ba6, sa6, Hu8, MB8],
      [
        [() => rA6, 0],
        [() => rA6, 0],
        [() => rb8, 0],
        [() => rb8, 0],
      ],
    ],
    cy3 = [
      3,
      G1,
      y03,
      0,
      [fW3, ZW3],
      [
        [() => nb8, 0],
        [() => nb8, 0],
      ],
    ],
    Qm8 = [
      3,
      G1,
      Z03,
      8,
      [Ba6, sa6, LW3, RW3, XG3, JG3, aW3, QG3, $f3, HG3, UZ3, Hu8, MB8],
      [
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        () => KS,
        [() => ab8, 0],
        [() => ab8, 0],
      ],
    ],
    ly3 = [
      9,
      G1,
      DH3,
      { [Y7]: ["POST", "/evaluation-jobs/batch-delete", 202] },
      () => QN3,
      () => gN3,
    ],
    iy3 = [
      9,
      G1,
      vH3,
      {
        [Y7]: [
          "POST",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/cancel",
          202,
        ],
      },
      () => dN3,
      () => cN3,
    ],
    ny3 = [
      9,
      G1,
      TH3,
      { [Y7]: ["POST", "/automated-reasoning-policies", 200] },
      () => nN3,
      () => rN3,
    ],
    ry3 = [
      9,
      G1,
      yH3,
      {
        [Y7]: [
          "POST",
          "/automated-reasoning-policies/{policyArn}/test-cases",
          200,
        ],
      },
      () => aN3,
      () => oN3,
    ],
    ay3 = [
      9,
      G1,
      hH3,
      {
        [Y7]: [
          "POST",
          "/automated-reasoning-policies/{policyArn}/versions",
          200,
        ],
      },
      () => sN3,
      () => tN3,
    ],
    oy3 = [
      9,
      G1,
      uH3,
      { [Y7]: ["POST", "/custom-models/create-custom-model", 202] },
      () => qT3,
      () => KT3,
    ],
    sy3 = [
      9,
      G1,
      BH3,
      { [Y7]: ["POST", "/model-customization/custom-model-deployments", 202] },
      () => eN3,
      () => AT3,
    ],
    ty3 = [
      9,
      G1,
      pH3,
      { [Y7]: ["POST", "/evaluation-jobs", 202] },
      () => YT3,
      () => zT3,
    ],
    ey3 = [
      9,
      G1,
      lH3,
      { [Y7]: ["POST", "/create-foundation-model-agreement", 202] },
      () => wT3,
      () => HT3,
    ],
    AC3 = [
      9,
      G1,
      rH3,
      { [Y7]: ["POST", "/guardrails", 202] },
      () => $T3,
      () => OT3,
    ],
    qC3 = [
      9,
      G1,
      sH3,
      { [Y7]: ["POST", "/guardrails/{guardrailIdentifier}", 202] },
      () => _T3,
      () => JT3,
    ],
    KC3 = [
      9,
      G1,
      A$3,
      { [Y7]: ["POST", "/inference-profiles", 201] },
      () => XT3,
      () => jT3,
    ],
    YC3 = [
      9,
      G1,
      N$3,
      { [Y7]: ["POST", "/marketplace-model/endpoints", 200] },
      () => DT3,
      () => MT3,
    ],
    zC3 = [
      9,
      G1,
      w$3,
      { [Y7]: ["POST", "/model-copy-jobs", 201] },
      () => PT3,
      () => WT3,
    ],
    wC3 = [
      9,
      G1,
      J$3,
      { [Y7]: ["POST", "/model-customization-jobs", 201] },
      () => GT3,
      () => ZT3,
    ],
    HC3 = [
      9,
      G1,
      P$3,
      { [Y7]: ["POST", "/model-import-jobs", 201] },
      () => fT3,
      () => VT3,
    ],
    $C3 = [
      9,
      G1,
      V$3,
      { [Y7]: ["POST", "/model-invocation-job", 200] },
      () => NT3,
      () => TT3,
    ],
    OC3 = [
      9,
      G1,
      S$3,
      { [Y7]: ["POST", "/prompt-routers", 200] },
      () => vT3,
      () => ET3,
    ],
    _C3 = [
      9,
      G1,
      R$3,
      { [Y7]: ["POST", "/provisioned-model-throughput", 201] },
      () => kT3,
      () => LT3,
    ],
    JC3 = [
      9,
      G1,
      b$3,
      { [Y7]: ["DELETE", "/automated-reasoning-policies/{policyArn}", 202] },
      () => BT3,
      () => mT3,
    ],
    XC3 = [
      9,
      G1,
      u$3,
      {
        [Y7]: [
          "DELETE",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}",
          202,
        ],
      },
      () => bT3,
      () => uT3,
    ],
    jC3 = [
      9,
      G1,
      g$3,
      {
        [Y7]: [
          "DELETE",
          "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}",
          202,
        ],
      },
      () => FT3,
      () => QT3,
    ],
    DC3 = [
      9,
      G1,
      c$3,
      { [Y7]: ["DELETE", "/custom-models/{modelIdentifier}", 200] },
      () => pT3,
      () => dT3,
    ],
    MC3 = [
      9,
      G1,
      l$3,
      {
        [Y7]: [
          "DELETE",
          "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
          200,
        ],
      },
      () => gT3,
      () => UT3,
    ],
    PC3 = [
      9,
      G1,
      o$3,
      { [Y7]: ["POST", "/delete-foundation-model-agreement", 202] },
      () => cT3,
      () => lT3,
    ],
    WC3 = [
      9,
      G1,
      e$3,
      { [Y7]: ["DELETE", "/guardrails/{guardrailIdentifier}", 202] },
      () => iT3,
      () => nT3,
    ],
    GC3 = [
      9,
      G1,
      KO3,
      { [Y7]: ["DELETE", "/imported-models/{modelIdentifier}", 200] },
      () => rT3,
      () => aT3,
    ],
    ZC3 = [
      9,
      G1,
      wO3,
      {
        [Y7]: [
          "DELETE",
          "/inference-profiles/{inferenceProfileIdentifier}",
          200,
        ],
      },
      () => oT3,
      () => sT3,
    ],
    fC3 = [
      9,
      G1,
      XO3,
      { [Y7]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}", 200] },
      () => tT3,
      () => eT3,
    ],
    VC3 = [
      9,
      G1,
      OO3,
      { [Y7]: ["DELETE", "/logging/modelinvocations", 200] },
      () => Av3,
      () => qv3,
    ],
    NC3 = [
      9,
      G1,
      EO3,
      { [Y7]: ["DELETE", "/prompt-routers/{promptRouterArn}", 200] },
      () => Kv3,
      () => Yv3,
    ],
    TC3 = [
      9,
      G1,
      ZO3,
      {
        [Y7]: [
          "DELETE",
          "/provisioned-model-throughput/{provisionedModelId}",
          200,
        ],
      },
      () => zv3,
      () => wv3,
    ],
    vC3 = [
      9,
      G1,
      WO3,
      {
        [Y7]: [
          "DELETE",
          "/marketplace-model/endpoints/{endpointArn}/registration",
          200,
        ],
      },
      () => Hv3,
      () => $v3,
    ],
    EC3 = [
      9,
      G1,
      kO3,
      {
        [Y7]: ["GET", "/automated-reasoning-policies/{policyArn}/export", 200],
      },
      () => Vv3,
      () => Nv3,
    ],
    kC3 = [
      9,
      G1,
      B_3,
      { [Y7]: ["GET", "/automated-reasoning-policies/{policyArn}", 200] },
      () => mv3,
      () => Fv3,
    ],
    LC3 = [
      9,
      G1,
      P_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations",
          200,
        ],
      },
      () => Cv3,
      () => Sv3,
    ],
    RC3 = [
      9,
      G1,
      Z_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}",
          200,
        ],
      },
      () => hv3,
      () => Iv3,
    ],
    yC3 = [
      9,
      G1,
      V_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/result-assets",
          200,
        ],
      },
      () => xv3,
      () => bv3,
    ],
    CC3 = [
      9,
      G1,
      k_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/scenarios",
          200,
        ],
      },
      () => uv3,
      () => Bv3,
    ],
    SC3 = [
      9,
      G1,
      S_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}",
          200,
        ],
      },
      () => Qv3,
      () => gv3,
    ],
    hC3 = [
      9,
      G1,
      x_3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-cases/{testCaseId}/test-results",
          200,
        ],
      },
      () => Uv3,
      () => pv3,
    ],
    IC3 = [
      9,
      G1,
      AJ3,
      { [Y7]: ["GET", "/custom-models/{modelIdentifier}", 200] },
      () => lv3,
      () => iv3,
    ],
    xC3 = [
      9,
      G1,
      qJ3,
      {
        [Y7]: [
          "GET",
          "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
          200,
        ],
      },
      () => dv3,
      () => cv3,
    ],
    bC3 = [
      9,
      G1,
      jJ3,
      { [Y7]: ["GET", "/evaluation-jobs/{jobIdentifier}", 200] },
      () => nv3,
      () => rv3,
    ],
    uC3 = [
      9,
      G1,
      PJ3,
      { [Y7]: ["GET", "/foundation-models/{modelIdentifier}", 200] },
      () => sv3,
      () => tv3,
    ],
    BC3 = [
      9,
      G1,
      WJ3,
      { [Y7]: ["GET", "/foundation-model-availability/{modelId}", 200] },
      () => av3,
      () => ov3,
    ],
    mC3 = [
      9,
      G1,
      vJ3,
      { [Y7]: ["GET", "/guardrails/{guardrailIdentifier}", 200] },
      () => ev3,
      () => AE3,
    ],
    FC3 = [
      9,
      G1,
      LJ3,
      { [Y7]: ["GET", "/imported-models/{modelIdentifier}", 200] },
      () => qE3,
      () => KE3,
    ],
    QC3 = [
      9,
      G1,
      CJ3,
      {
        [Y7]: ["GET", "/inference-profiles/{inferenceProfileIdentifier}", 200],
      },
      () => YE3,
      () => zE3,
    ],
    gC3 = [
      9,
      G1,
      rJ3,
      { [Y7]: ["GET", "/marketplace-model/endpoints/{endpointArn}", 200] },
      () => wE3,
      () => HE3,
    ],
    UC3 = [
      9,
      G1,
      xJ3,
      { [Y7]: ["GET", "/model-copy-jobs/{jobArn}", 200] },
      () => $E3,
      () => OE3,
    ],
    pC3 = [
      9,
      G1,
      FJ3,
      { [Y7]: ["GET", "/model-customization-jobs/{jobIdentifier}", 200] },
      () => _E3,
      () => JE3,
    ],
    dC3 = [
      9,
      G1,
      QJ3,
      { [Y7]: ["GET", "/model-import-jobs/{jobIdentifier}", 200] },
      () => XE3,
      () => jE3,
    ],
    cC3 = [
      9,
      G1,
      cJ3,
      { [Y7]: ["GET", "/model-invocation-job/{jobIdentifier}", 200] },
      () => DE3,
      () => ME3,
    ],
    lC3 = [
      9,
      G1,
      lJ3,
      { [Y7]: ["GET", "/logging/modelinvocations", 200] },
      () => PE3,
      () => WE3,
    ],
    iC3 = [
      9,
      G1,
      JX3,
      { [Y7]: ["GET", "/prompt-routers/{promptRouterArn}", 200] },
      () => GE3,
      () => ZE3,
    ],
    nC3 = [
      9,
      G1,
      $X3,
      {
        [Y7]: [
          "GET",
          "/provisioned-model-throughput/{provisionedModelId}",
          200,
        ],
      },
      () => fE3,
      () => VE3,
    ],
    rC3 = [
      9,
      G1,
      mX3,
      { [Y7]: ["GET", "/use-case-for-model-access", 200] },
      () => NE3,
      () => TE3,
    ],
    aC3 = [
      9,
      G1,
      Wj3,
      { [Y7]: ["GET", "/automated-reasoning-policies", 200] },
      () => Hk3,
      () => $k3,
    ],
    oC3 = [
      9,
      G1,
      Gj3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows",
          200,
        ],
      },
      () => Ok3,
      () => _k3,
    ],
    sC3 = [
      9,
      G1,
      Tj3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/test-cases",
          200,
        ],
      },
      () => Jk3,
      () => Xk3,
    ],
    tC3 = [
      9,
      G1,
      kj3,
      {
        [Y7]: [
          "GET",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-results",
          200,
        ],
      },
      () => jk3,
      () => Dk3,
    ],
    eC3 = [
      9,
      G1,
      Sj3,
      { [Y7]: ["GET", "/model-customization/custom-model-deployments", 200] },
      () => Mk3,
      () => Pk3,
    ],
    AS3 = [
      9,
      G1,
      Cj3,
      { [Y7]: ["GET", "/custom-models", 200] },
      () => Wk3,
      () => Gk3,
    ],
    qS3 = [
      9,
      G1,
      uj3,
      { [Y7]: ["GET", "/evaluation-jobs", 200] },
      () => Zk3,
      () => fk3,
    ],
    KS3 = [
      9,
      G1,
      Qj3,
      {
        [Y7]: ["GET", "/list-foundation-model-agreement-offers/{modelId}", 200],
      },
      () => Vk3,
      () => Nk3,
    ],
    YS3 = [
      9,
      G1,
      Fj3,
      { [Y7]: ["GET", "/foundation-models", 200] },
      () => Tk3,
      () => vk3,
    ],
    zS3 = [
      9,
      G1,
      cj3,
      { [Y7]: ["GET", "/guardrails", 200] },
      () => Ek3,
      () => kk3,
    ],
    wS3 = [
      9,
      G1,
      nj3,
      { [Y7]: ["GET", "/imported-models", 200] },
      () => Lk3,
      () => Rk3,
    ],
    HS3 = [
      9,
      G1,
      oj3,
      { [Y7]: ["GET", "/inference-profiles", 200] },
      () => yk3,
      () => Ck3,
    ],
    $S3 = [
      9,
      G1,
      XD3,
      { [Y7]: ["GET", "/marketplace-model/endpoints", 200] },
      () => Sk3,
      () => hk3,
    ],
    OS3 = [
      9,
      G1,
      ej3,
      { [Y7]: ["GET", "/model-copy-jobs", 200] },
      () => Ik3,
      () => xk3,
    ],
    _S3 = [
      9,
      G1,
      zD3,
      { [Y7]: ["GET", "/model-customization-jobs", 200] },
      () => bk3,
      () => uk3,
    ],
    JS3 = [
      9,
      G1,
      wD3,
      { [Y7]: ["GET", "/model-import-jobs", 200] },
      () => Bk3,
      () => mk3,
    ],
    XS3 = [
      9,
      G1,
      JD3,
      { [Y7]: ["GET", "/model-invocation-jobs", 200] },
      () => Fk3,
      () => Qk3,
    ],
    jS3 = [
      9,
      G1,
      GD3,
      { [Y7]: ["GET", "/prompt-routers", 200] },
      () => gk3,
      () => Uk3,
    ],
    DS3 = [
      9,
      G1,
      MD3,
      { [Y7]: ["GET", "/provisioned-model-throughputs", 200] },
      () => pk3,
      () => dk3,
    ],
    MS3 = [
      9,
      G1,
      ND3,
      { [Y7]: ["POST", "/listTagsForResource", 200] },
      () => ck3,
      () => lk3,
    ],
    PS3 = [
      9,
      G1,
      oD3,
      { [Y7]: ["PUT", "/logging/modelinvocations", 200] },
      () => $L3,
      () => OL3,
    ],
    WS3 = [
      9,
      G1,
      O03,
      { [Y7]: ["POST", "/use-case-for-model-access", 201] },
      () => _L3,
      () => JL3,
    ],
    GS3 = [
      9,
      G1,
      k03,
      {
        [Y7]: [
          "POST",
          "/marketplace-model/endpoints/{endpointIdentifier}/registration",
          200,
        ],
      },
      () => DL3,
      () => ML3,
    ],
    ZS3 = [
      9,
      G1,
      x03,
      {
        [Y7]: [
          "POST",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowType}/start",
          200,
        ],
      },
      () => kL3,
      () => LL3,
    ],
    fS3 = [
      9,
      G1,
      B03,
      {
        [Y7]: [
          "POST",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-workflows",
          200,
        ],
      },
      () => RL3,
      () => yL3,
    ],
    VS3 = [
      9,
      G1,
      p03,
      { [Y7]: ["POST", "/evaluation-job/{jobIdentifier}/stop", 200] },
      () => CL3,
      () => SL3,
    ],
    NS3 = [
      9,
      G1,
      l03,
      { [Y7]: ["POST", "/model-customization-jobs/{jobIdentifier}/stop", 200] },
      () => hL3,
      () => IL3,
    ],
    TS3 = [
      9,
      G1,
      a03,
      { [Y7]: ["POST", "/model-invocation-job/{jobIdentifier}/stop", 200] },
      () => xL3,
      () => bL3,
    ],
    vS3 = [
      9,
      G1,
      DM3,
      { [Y7]: ["POST", "/tagResource", 200] },
      () => mL3,
      () => FL3,
    ],
    ES3 = [
      9,
      G1,
      bM3,
      { [Y7]: ["POST", "/untagResource", 200] },
      () => lL3,
      () => iL3,
    ],
    kS3 = [
      9,
      G1,
      WM3,
      { [Y7]: ["PATCH", "/automated-reasoning-policies/{policyArn}", 200] },
      () => aL3,
      () => oL3,
    ],
    LS3 = [
      9,
      G1,
      GM3,
      {
        [Y7]: [
          "PATCH",
          "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations",
          200,
        ],
      },
      () => nL3,
      () => rL3,
    ],
    RS3 = [
      9,
      G1,
      TM3,
      {
        [Y7]: [
          "PATCH",
          "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}",
          200,
        ],
      },
      () => sL3,
      () => tL3,
    ],
    yS3 = [
      9,
      G1,
      kM3,
      { [Y7]: ["PUT", "/guardrails/{guardrailIdentifier}", 202] },
      () => eL3,
      () => AR3,
    ],
    CS3 = [
      9,
      G1,
      yM3,
      { [Y7]: ["PATCH", "/marketplace-model/endpoints/{endpointArn}", 200] },
      () => qR3,
      () => KR3,
    ],
    SS3 = [
      9,
      G1,
      hM3,
      {
        [Y7]: [
          "PATCH",
          "/provisioned-model-throughput/{provisionedModelId}",
          200,
        ],
      },
      () => YR3,
      () => zR3,
    ];
  class ho6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "BatchDeleteEvaluationJob", {})
    .n("BedrockClient", "BatchDeleteEvaluationJobCommand")
    .sc(ly3)
    .build() {}
  class Io6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "CancelAutomatedReasoningPolicyBuildWorkflow",
      {},
    )
    .n("BedrockClient", "CancelAutomatedReasoningPolicyBuildWorkflowCommand")
    .sc(iy3)
    .build() {}
  class xo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicy", {})
    .n("BedrockClient", "CreateAutomatedReasoningPolicyCommand")
    .sc(ny3)
    .build() {}
  class bo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "CreateAutomatedReasoningPolicyTestCase",
      {},
    )
    .n("BedrockClient", "CreateAutomatedReasoningPolicyTestCaseCommand")
    .sc(ry3)
    .build() {}
  class uo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "CreateAutomatedReasoningPolicyVersion",
      {},
    )
    .n("BedrockClient", "CreateAutomatedReasoningPolicyVersionCommand")
    .sc(ay3)
    .build() {}
  class Bo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateCustomModel", {})
    .n("BedrockClient", "CreateCustomModelCommand")
    .sc(oy3)
    .build() {}
  class mo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateCustomModelDeployment", {})
    .n("BedrockClient", "CreateCustomModelDeploymentCommand")
    .sc(sy3)
    .build() {}
  class Fo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {})
    .n("BedrockClient", "CreateEvaluationJobCommand")
    .sc(ty3)
    .build() {}
  class Qo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateFoundationModelAgreement", {})
    .n("BedrockClient", "CreateFoundationModelAgreementCommand")
    .sc(ey3)
    .build() {}
  class go6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateGuardrail", {})
    .n("BedrockClient", "CreateGuardrailCommand")
    .sc(AC3)
    .build() {}
  class Uo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateGuardrailVersion", {})
    .n("BedrockClient", "CreateGuardrailVersionCommand")
    .sc(qC3)
    .build() {}
  class po6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {})
    .n("BedrockClient", "CreateInferenceProfileCommand")
    .sc(KC3)
    .build() {}
  class do6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateMarketplaceModelEndpoint", {})
    .n("BedrockClient", "CreateMarketplaceModelEndpointCommand")
    .sc(YC3)
    .build() {}
  class co6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {})
    .n("BedrockClient", "CreateModelCopyJobCommand")
    .sc(zC3)
    .build() {}
  class lo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateModelCustomizationJob", {})
    .n("BedrockClient", "CreateModelCustomizationJobCommand")
    .sc(wC3)
    .build() {}
  class io6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateModelImportJob", {})
    .n("BedrockClient", "CreateModelImportJobCommand")
    .sc(HC3)
    .build() {}
  class no6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {})
    .n("BedrockClient", "CreateModelInvocationJobCommand")
    .sc($C3)
    .build() {}
  class ro6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "CreatePromptRouter", {})
    .n("BedrockClient", "CreatePromptRouterCommand")
    .sc(OC3)
    .build() {}
  class ao6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "CreateProvisionedModelThroughput",
      {},
    )
    .n("BedrockClient", "CreateProvisionedModelThroughputCommand")
    .sc(_C3)
    .build() {}
  class oo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "DeleteAutomatedReasoningPolicyBuildWorkflow",
      {},
    )
    .n("BedrockClient", "DeleteAutomatedReasoningPolicyBuildWorkflowCommand")
    .sc(XC3)
    .build() {}
  class so6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicy", {})
    .n("BedrockClient", "DeleteAutomatedReasoningPolicyCommand")
    .sc(JC3)
    .build() {}
  class to6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "DeleteAutomatedReasoningPolicyTestCase",
      {},
    )
    .n("BedrockClient", "DeleteAutomatedReasoningPolicyTestCaseCommand")
    .sc(jC3)
    .build() {}
  class eo6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {})
    .n("BedrockClient", "DeleteCustomModelCommand")
    .sc(DC3)
    .build() {}
  class As6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteCustomModelDeployment", {})
    .n("BedrockClient", "DeleteCustomModelDeploymentCommand")
    .sc(MC3)
    .build() {}
  class qs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteFoundationModelAgreement", {})
    .n("BedrockClient", "DeleteFoundationModelAgreementCommand")
    .sc(PC3)
    .build() {}
  class Ks6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {})
    .n("BedrockClient", "DeleteGuardrailCommand")
    .sc(WC3)
    .build() {}
  class Ys6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteImportedModel", {})
    .n("BedrockClient", "DeleteImportedModelCommand")
    .sc(GC3)
    .build() {}
  class zs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteInferenceProfile", {})
    .n("BedrockClient", "DeleteInferenceProfileCommand")
    .sc(ZC3)
    .build() {}
  class ws6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeleteMarketplaceModelEndpoint", {})
    .n("BedrockClient", "DeleteMarketplaceModelEndpointCommand")
    .sc(fC3)
    .build() {}
  class Hs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "DeleteModelInvocationLoggingConfiguration",
      {},
    )
    .n("BedrockClient", "DeleteModelInvocationLoggingConfigurationCommand")
    .sc(VC3)
    .build() {}
  class $s6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "DeletePromptRouter", {})
    .n("BedrockClient", "DeletePromptRouterCommand")
    .sc(NC3)
    .build() {}
  class Os6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "DeleteProvisionedModelThroughput",
      {},
    )
    .n("BedrockClient", "DeleteProvisionedModelThroughputCommand")
    .sc(TC3)
    .build() {}
  class _s6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "DeregisterMarketplaceModelEndpoint",
      {},
    )
    .n("BedrockClient", "DeregisterMarketplaceModelEndpointCommand")
    .sc(vC3)
    .build() {}
  class Js6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ExportAutomatedReasoningPolicyVersion",
      {},
    )
    .n("BedrockClient", "ExportAutomatedReasoningPolicyVersionCommand")
    .sc(EC3)
    .build() {}
  class Xs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyAnnotations",
      {},
    )
    .n("BedrockClient", "GetAutomatedReasoningPolicyAnnotationsCommand")
    .sc(LC3)
    .build() {}
  class js6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyBuildWorkflow",
      {},
    )
    .n("BedrockClient", "GetAutomatedReasoningPolicyBuildWorkflowCommand")
    .sc(RC3)
    .build() {}
  class Ds6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyBuildWorkflowResultAssets",
      {},
    )
    .n(
      "BedrockClient",
      "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand",
    )
    .sc(yC3)
    .build() {}
  class Ms6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicy", {})
    .n("BedrockClient", "GetAutomatedReasoningPolicyCommand")
    .sc(kC3)
    .build() {}
  class Ps6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyNextScenario",
      {},
    )
    .n("BedrockClient", "GetAutomatedReasoningPolicyNextScenarioCommand")
    .sc(CC3)
    .build() {}
  class Ws6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyTestCase",
      {},
    )
    .n("BedrockClient", "GetAutomatedReasoningPolicyTestCaseCommand")
    .sc(SC3)
    .build() {}
  class Gs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetAutomatedReasoningPolicyTestResult",
      {},
    )
    .n("BedrockClient", "GetAutomatedReasoningPolicyTestResultCommand")
    .sc(hC3)
    .build() {}
  class Zs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetCustomModel", {})
    .n("BedrockClient", "GetCustomModelCommand")
    .sc(IC3)
    .build() {}
  class fs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetCustomModelDeployment", {})
    .n("BedrockClient", "GetCustomModelDeploymentCommand")
    .sc(xC3)
    .build() {}
  class Vs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetEvaluationJob", {})
    .n("BedrockClient", "GetEvaluationJobCommand")
    .sc(bC3)
    .build() {}
  class Ns6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {})
    .n("BedrockClient", "GetFoundationModelAvailabilityCommand")
    .sc(BC3)
    .build() {}
  class Ts6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetFoundationModel", {})
    .n("BedrockClient", "GetFoundationModelCommand")
    .sc(uC3)
    .build() {}
  class vs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetGuardrail", {})
    .n("BedrockClient", "GetGuardrailCommand")
    .sc(mC3)
    .build() {}
  class Es6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetImportedModel", {})
    .n("BedrockClient", "GetImportedModelCommand")
    .sc(FC3)
    .build() {}
  class ks6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {})
    .n("BedrockClient", "GetInferenceProfileCommand")
    .sc(QC3)
    .build() {}
  class Ls6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetMarketplaceModelEndpoint", {})
    .n("BedrockClient", "GetMarketplaceModelEndpointCommand")
    .sc(gC3)
    .build() {}
  class Rs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetModelCopyJob", {})
    .n("BedrockClient", "GetModelCopyJobCommand")
    .sc(UC3)
    .build() {}
  class ys6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetModelCustomizationJob", {})
    .n("BedrockClient", "GetModelCustomizationJobCommand")
    .sc(pC3)
    .build() {}
  class Cs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetModelImportJob", {})
    .n("BedrockClient", "GetModelImportJobCommand")
    .sc(dC3)
    .build() {}
  class Ss6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetModelInvocationJob", {})
    .n("BedrockClient", "GetModelInvocationJobCommand")
    .sc(cC3)
    .build() {}
  class hs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "GetModelInvocationLoggingConfiguration",
      {},
    )
    .n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand")
    .sc(lC3)
    .build() {}
  class Is6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetPromptRouter", {})
    .n("BedrockClient", "GetPromptRouterCommand")
    .sc(iC3)
    .build() {}
  class xs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetProvisionedModelThroughput", {})
    .n("BedrockClient", "GetProvisionedModelThroughputCommand")
    .sc(nC3)
    .build() {}
  class bs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "GetUseCaseForModelAccess", {})
    .n("BedrockClient", "GetUseCaseForModelAccessCommand")
    .sc(rC3)
    .build() {}
  class Z86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicies", {})
    .n("BedrockClient", "ListAutomatedReasoningPoliciesCommand")
    .sc(aC3)
    .build() {}
  class f86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ListAutomatedReasoningPolicyBuildWorkflows",
      {},
    )
    .n("BedrockClient", "ListAutomatedReasoningPolicyBuildWorkflowsCommand")
    .sc(oC3)
    .build() {}
  class V86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ListAutomatedReasoningPolicyTestCases",
      {},
    )
    .n("BedrockClient", "ListAutomatedReasoningPolicyTestCasesCommand")
    .sc(sC3)
    .build() {}
  class N86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ListAutomatedReasoningPolicyTestResults",
      {},
    )
    .n("BedrockClient", "ListAutomatedReasoningPolicyTestResultsCommand")
    .sc(tC3)
    .build() {}
  class T86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListCustomModelDeployments", {})
    .n("BedrockClient", "ListCustomModelDeploymentsCommand")
    .sc(eC3)
    .build() {}
  class v86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListCustomModels", {})
    .n("BedrockClient", "ListCustomModelsCommand")
    .sc(AS3)
    .build() {}
  class E86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {})
    .n("BedrockClient", "ListEvaluationJobsCommand")
    .sc(qS3)
    .build() {}
  class us6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ListFoundationModelAgreementOffers",
      {},
    )
    .n("BedrockClient", "ListFoundationModelAgreementOffersCommand")
    .sc(KS3)
    .build() {}
  class Bs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListFoundationModels", {})
    .n("BedrockClient", "ListFoundationModelsCommand")
    .sc(YS3)
    .build() {}
  class k86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListGuardrails", {})
    .n("BedrockClient", "ListGuardrailsCommand")
    .sc(zS3)
    .build() {}
  class L86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListImportedModels", {})
    .n("BedrockClient", "ListImportedModelsCommand")
    .sc(wS3)
    .build() {}
  class R86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {})
    .n("BedrockClient", "ListInferenceProfilesCommand")
    .sc(HS3)
    .build() {}
  class y86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListMarketplaceModelEndpoints", {})
    .n("BedrockClient", "ListMarketplaceModelEndpointsCommand")
    .sc($S3)
    .build() {}
  class C86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListModelCopyJobs", {})
    .n("BedrockClient", "ListModelCopyJobsCommand")
    .sc(OS3)
    .build() {}
  class S86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {})
    .n("BedrockClient", "ListModelCustomizationJobsCommand")
    .sc(_S3)
    .build() {}
  class h86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListModelImportJobs", {})
    .n("BedrockClient", "ListModelImportJobsCommand")
    .sc(JS3)
    .build() {}
  class I86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListModelInvocationJobs", {})
    .n("BedrockClient", "ListModelInvocationJobsCommand")
    .sc(XS3)
    .build() {}
  class x86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListPromptRouters", {})
    .n("BedrockClient", "ListPromptRoutersCommand")
    .sc(jS3)
    .build() {}
  class b86 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "ListProvisionedModelThroughputs",
      {},
    )
    .n("BedrockClient", "ListProvisionedModelThroughputsCommand")
    .sc(DS3)
    .build() {}
  class ms6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "ListTagsForResource", {})
    .n("BedrockClient", "ListTagsForResourceCommand")
    .sc(MS3)
    .build() {}
  class Fs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "PutModelInvocationLoggingConfiguration",
      {},
    )
    .n("BedrockClient", "PutModelInvocationLoggingConfigurationCommand")
    .sc(PS3)
    .build() {}
  class Qs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "PutUseCaseForModelAccess", {})
    .n("BedrockClient", "PutUseCaseForModelAccessCommand")
    .sc(WS3)
    .build() {}
  class gs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "RegisterMarketplaceModelEndpoint",
      {},
    )
    .n("BedrockClient", "RegisterMarketplaceModelEndpointCommand")
    .sc(GS3)
    .build() {}
  class Us6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "StartAutomatedReasoningPolicyBuildWorkflow",
      {},
    )
    .n("BedrockClient", "StartAutomatedReasoningPolicyBuildWorkflowCommand")
    .sc(ZS3)
    .build() {}
  class ps6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "StartAutomatedReasoningPolicyTestWorkflow",
      {},
    )
    .n("BedrockClient", "StartAutomatedReasoningPolicyTestWorkflowCommand")
    .sc(fS3)
    .build() {}
  class ds6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {})
    .n("BedrockClient", "StopEvaluationJobCommand")
    .sc(VS3)
    .build() {}
  class cs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {})
    .n("BedrockClient", "StopModelCustomizationJobCommand")
    .sc(NS3)
    .build() {}
  class ls6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {})
    .n("BedrockClient", "StopModelInvocationJobCommand")
    .sc(TS3)
    .build() {}
  class is6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "TagResource", {})
    .n("BedrockClient", "TagResourceCommand")
    .sc(vS3)
    .build() {}
  class ns6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "UntagResource", {})
    .n("BedrockClient", "UntagResourceCommand")
    .sc(ES3)
    .build() {}
  class rs6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "UpdateAutomatedReasoningPolicyAnnotations",
      {},
    )
    .n("BedrockClient", "UpdateAutomatedReasoningPolicyAnnotationsCommand")
    .sc(LS3)
    .build() {}
  class as6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicy", {})
    .n("BedrockClient", "UpdateAutomatedReasoningPolicyCommand")
    .sc(kS3)
    .build() {}
  class os6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "UpdateAutomatedReasoningPolicyTestCase",
      {},
    )
    .n("BedrockClient", "UpdateAutomatedReasoningPolicyTestCaseCommand")
    .sc(RS3)
    .build() {}
  class ss6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "UpdateGuardrail", {})
    .n("BedrockClient", "UpdateGuardrailCommand")
    .sc(yS3)
    .build() {}
  class ts6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s("AmazonBedrockControlPlaneService", "UpdateMarketplaceModelEndpoint", {})
    .n("BedrockClient", "UpdateMarketplaceModelEndpointCommand")
    .sc(CS3)
    .build() {}
  class es6 extends U8.Command.classBuilder()
    .ep(K7)
    .m(function (A, q, K, Y) {
      return [e8.getEndpointPlugin(K, A.getEndpointParameterInstructions())];
    })
    .s(
      "AmazonBedrockControlPlaneService",
      "UpdateProvisionedModelThroughput",
      {},
    )
    .n("BedrockClient", "UpdateProvisionedModelThroughputCommand")
    .sc(SS3)
    .build() {}
  var hS3 = {
    BatchDeleteEvaluationJobCommand: ho6,
    CancelAutomatedReasoningPolicyBuildWorkflowCommand: Io6,
    CreateAutomatedReasoningPolicyCommand: xo6,
    CreateAutomatedReasoningPolicyTestCaseCommand: bo6,
    CreateAutomatedReasoningPolicyVersionCommand: uo6,
    CreateCustomModelCommand: Bo6,
    CreateCustomModelDeploymentCommand: mo6,
    CreateEvaluationJobCommand: Fo6,
    CreateFoundationModelAgreementCommand: Qo6,
    CreateGuardrailCommand: go6,
    CreateGuardrailVersionCommand: Uo6,
    CreateInferenceProfileCommand: po6,
    CreateMarketplaceModelEndpointCommand: do6,
    CreateModelCopyJobCommand: co6,
    CreateModelCustomizationJobCommand: lo6,
    CreateModelImportJobCommand: io6,
    CreateModelInvocationJobCommand: no6,
    CreatePromptRouterCommand: ro6,
    CreateProvisionedModelThroughputCommand: ao6,
    DeleteAutomatedReasoningPolicyCommand: so6,
    DeleteAutomatedReasoningPolicyBuildWorkflowCommand: oo6,
    DeleteAutomatedReasoningPolicyTestCaseCommand: to6,
    DeleteCustomModelCommand: eo6,
    DeleteCustomModelDeploymentCommand: As6,
    DeleteFoundationModelAgreementCommand: qs6,
    DeleteGuardrailCommand: Ks6,
    DeleteImportedModelCommand: Ys6,
    DeleteInferenceProfileCommand: zs6,
    DeleteMarketplaceModelEndpointCommand: ws6,
    DeleteModelInvocationLoggingConfigurationCommand: Hs6,
    DeletePromptRouterCommand: $s6,
    DeleteProvisionedModelThroughputCommand: Os6,
    DeregisterMarketplaceModelEndpointCommand: _s6,
    ExportAutomatedReasoningPolicyVersionCommand: Js6,
    GetAutomatedReasoningPolicyCommand: Ms6,
    GetAutomatedReasoningPolicyAnnotationsCommand: Xs6,
    GetAutomatedReasoningPolicyBuildWorkflowCommand: js6,
    GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand: Ds6,
    GetAutomatedReasoningPolicyNextScenarioCommand: Ps6,
    GetAutomatedReasoningPolicyTestCaseCommand: Ws6,
    GetAutomatedReasoningPolicyTestResultCommand: Gs6,
    GetCustomModelCommand: Zs6,
    GetCustomModelDeploymentCommand: fs6,
    GetEvaluationJobCommand: Vs6,
    GetFoundationModelCommand: Ts6,
    GetFoundationModelAvailabilityCommand: Ns6,
    GetGuardrailCommand: vs6,
    GetImportedModelCommand: Es6,
    GetInferenceProfileCommand: ks6,
    GetMarketplaceModelEndpointCommand: Ls6,
    GetModelCopyJobCommand: Rs6,
    GetModelCustomizationJobCommand: ys6,
    GetModelImportJobCommand: Cs6,
    GetModelInvocationJobCommand: Ss6,
    GetModelInvocationLoggingConfigurationCommand: hs6,
    GetPromptRouterCommand: Is6,
    GetProvisionedModelThroughputCommand: xs6,
    GetUseCaseForModelAccessCommand: bs6,
    ListAutomatedReasoningPoliciesCommand: Z86,
    ListAutomatedReasoningPolicyBuildWorkflowsCommand: f86,
    ListAutomatedReasoningPolicyTestCasesCommand: V86,
    ListAutomatedReasoningPolicyTestResultsCommand: N86,
    ListCustomModelDeploymentsCommand: T86,
    ListCustomModelsCommand: v86,
    ListEvaluationJobsCommand: E86,
    ListFoundationModelAgreementOffersCommand: us6,
    ListFoundationModelsCommand: Bs6,
    ListGuardrailsCommand: k86,
    ListImportedModelsCommand: L86,
    ListInferenceProfilesCommand: R86,
    ListMarketplaceModelEndpointsCommand: y86,
    ListModelCopyJobsCommand: C86,
    ListModelCustomizationJobsCommand: S86,
    ListModelImportJobsCommand: h86,
    ListModelInvocationJobsCommand: I86,
    ListPromptRoutersCommand: x86,
    ListProvisionedModelThroughputsCommand: b86,
    ListTagsForResourceCommand: ms6,
    PutModelInvocationLoggingConfigurationCommand: Fs6,
    PutUseCaseForModelAccessCommand: Qs6,
    RegisterMarketplaceModelEndpointCommand: gs6,
    StartAutomatedReasoningPolicyBuildWorkflowCommand: Us6,
    StartAutomatedReasoningPolicyTestWorkflowCommand: ps6,
    StopEvaluationJobCommand: ds6,
    StopModelCustomizationJobCommand: cs6,
    StopModelInvocationJobCommand: ls6,
    TagResourceCommand: is6,
    UntagResourceCommand: ns6,
    UpdateAutomatedReasoningPolicyCommand: as6,
    UpdateAutomatedReasoningPolicyAnnotationsCommand: rs6,
    UpdateAutomatedReasoningPolicyTestCaseCommand: os6,
    UpdateGuardrailCommand: ss6,
    UpdateMarketplaceModelEndpointCommand: ts6,
    UpdateProvisionedModelThroughputCommand: es6,
  };
  class At6 extends VX {}
  U8.createAggregatedClient(hS3, At6);
  var IS3 = ZX.createPaginator(VX, Z86, "nextToken", "nextToken", "maxResults"),
    xS3 = ZX.createPaginator(VX, f86, "nextToken", "nextToken", "maxResults"),
    bS3 = ZX.createPaginator(VX, V86, "nextToken", "nextToken", "maxResults"),
    uS3 = ZX.createPaginator(VX, N86, "nextToken", "nextToken", "maxResults"),
    BS3 = ZX.createPaginator(VX, T86, "nextToken", "nextToken", "maxResults"),
    mS3 = ZX.createPaginator(VX, v86, "nextToken", "nextToken", "maxResults"),
    FS3 = ZX.createPaginator(VX, E86, "nextToken", "nextToken", "maxResults"),
    QS3 = ZX.createPaginator(VX, k86, "nextToken", "nextToken", "maxResults"),
    gS3 = ZX.createPaginator(VX, L86, "nextToken", "nextToken", "maxResults"),
    US3 = ZX.createPaginator(VX, R86, "nextToken", "nextToken", "maxResults"),
    pS3 = ZX.createPaginator(VX, y86, "nextToken", "nextToken", "maxResults"),
    dS3 = ZX.createPaginator(VX, C86, "nextToken", "nextToken", "maxResults"),
    cS3 = ZX.createPaginator(VX, S86, "nextToken", "nextToken", "maxResults"),
    lS3 = ZX.createPaginator(VX, h86, "nextToken", "nextToken", "maxResults"),
    iS3 = ZX.createPaginator(VX, I86, "nextToken", "nextToken", "maxResults"),
    nS3 = ZX.createPaginator(VX, x86, "nextToken", "nextToken", "maxResults"),
    rS3 = ZX.createPaginator(VX, b86, "nextToken", "nextToken", "maxResults"),
    aS3 = {
      AVAILABLE: "AVAILABLE",
      ERROR: "ERROR",
      NOT_AVAILABLE: "NOT_AVAILABLE",
      PENDING: "PENDING",
    },
    oS3 = {
      IMPOSSIBLE: "IMPOSSIBLE",
      INVALID: "INVALID",
      NO_TRANSLATION: "NO_TRANSLATION",
      SATISFIABLE: "SATISFIABLE",
      TOO_COMPLEX: "TOO_COMPLEX",
      TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
      VALID: "VALID",
    },
    sS3 = {
      IMPORT_POLICY: "IMPORT_POLICY",
      INGEST_CONTENT: "INGEST_CONTENT",
      REFINE_POLICY: "REFINE_POLICY",
    },
    tS3 = { PDF: "pdf", TEXT: "txt" },
    eS3 = {
      BUILDING: "BUILDING",
      CANCELLED: "CANCELLED",
      CANCEL_REQUESTED: "CANCEL_REQUESTED",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      PREPROCESSING: "PREPROCESSING",
      SCHEDULED: "SCHEDULED",
      TESTING: "TESTING",
    },
    Ah3 = {
      BUILD_LOG: "BUILD_LOG",
      GENERATED_TEST_CASES: "GENERATED_TEST_CASES",
      POLICY_DEFINITION: "POLICY_DEFINITION",
      QUALITY_REPORT: "QUALITY_REPORT",
    },
    qh3 = { ERROR: "ERROR", INFO: "INFO", WARNING: "WARNING" },
    Kh3 = { APPLIED: "APPLIED", FAILED: "FAILED" },
    Yh3 = { ALWAYS_FALSE: "ALWAYS_FALSE", ALWAYS_TRUE: "ALWAYS_TRUE" },
    zh3 = { FAILED: "FAILED", PASSED: "PASSED" },
    wh3 = {
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      IN_PROGRESS: "IN_PROGRESS",
      NOT_STARTED: "NOT_STARTED",
      SCHEDULED: "SCHEDULED",
    },
    Hh3 = {
      INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
      REGISTERED: "REGISTERED",
    },
    $h3 = { ACTIVE: "Active", CREATING: "Creating", FAILED: "Failed" },
    Oh3 = { CREATION_TIME: "CreationTime" },
    _h3 = { ASCENDING: "Ascending", DESCENDING: "Descending" },
    Jh3 = {
      CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
      DISTILLATION: "DISTILLATION",
      FINE_TUNING: "FINE_TUNING",
      IMPORTED: "IMPORTED",
    },
    Xh3 = { ACTIVE: "Active", CREATING: "Creating", FAILED: "Failed" },
    jh3 = {
      COMPLETED: "Completed",
      DELETING: "Deleting",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
    },
    Dh3 = {
      MODEL_EVALUATION: "ModelEvaluation",
      RAG_EVALUATION: "RagEvaluation",
    },
    Mh3 = {
      CLASSIFICATION: "Classification",
      CUSTOM: "Custom",
      GENERATION: "Generation",
      QUESTION_AND_ANSWER: "QuestionAndAnswer",
      SUMMARIZATION: "Summarization",
    },
    Ph3 = { OPTIMIZED: "optimized", STANDARD: "standard" },
    Wh3 = { BYTE_CONTENT: "BYTE_CONTENT", S3: "S3" },
    Gh3 = { QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION" },
    Zh3 = {
      BOOLEAN: "BOOLEAN",
      NUMBER: "NUMBER",
      STRING: "STRING",
      STRING_LIST: "STRING_LIST",
    },
    fh3 = { HYBRID: "HYBRID", SEMANTIC: "SEMANTIC" },
    Vh3 = { ALL: "ALL", SELECTIVE: "SELECTIVE" },
    Nh3 = { BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL" },
    Th3 = {
      EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
      KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
    },
    vh3 = { AUTOMATED: "Automated", HUMAN: "Human" },
    Eh3 = { CREATION_TIME: "CreationTime" },
    kh3 = { BLOCK: "BLOCK", NONE: "NONE" },
    Lh3 = { IMAGE: "IMAGE", TEXT: "TEXT" },
    Rh3 = { HIGH: "HIGH", LOW: "LOW", MEDIUM: "MEDIUM", NONE: "NONE" },
    yh3 = {
      HATE: "HATE",
      INSULTS: "INSULTS",
      MISCONDUCT: "MISCONDUCT",
      PROMPT_ATTACK: "PROMPT_ATTACK",
      SEXUAL: "SEXUAL",
      VIOLENCE: "VIOLENCE",
    },
    Ch3 = { CLASSIC: "CLASSIC", STANDARD: "STANDARD" },
    Sh3 = { BLOCK: "BLOCK", NONE: "NONE" },
    hh3 = { GROUNDING: "GROUNDING", RELEVANCE: "RELEVANCE" },
    Ih3 = { ANONYMIZE: "ANONYMIZE", BLOCK: "BLOCK", NONE: "NONE" },
    xh3 = {
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
    bh3 = { CLASSIC: "CLASSIC", STANDARD: "STANDARD" },
    uh3 = { BLOCK: "BLOCK", NONE: "NONE" },
    Bh3 = { DENY: "DENY" },
    mh3 = { BLOCK: "BLOCK", NONE: "NONE" },
    Fh3 = { PROFANITY: "PROFANITY" },
    Qh3 = {
      CREATING: "CREATING",
      DELETING: "DELETING",
      FAILED: "FAILED",
      READY: "READY",
      UPDATING: "UPDATING",
      VERSIONING: "VERSIONING",
    },
    gh3 = { ACTIVE: "ACTIVE" },
    Uh3 = { APPLICATION: "APPLICATION", SYSTEM_DEFINED: "SYSTEM_DEFINED" },
    ph3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
    },
    dh3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
    },
    ch3 = { JSONL: "JSONL" },
    lh3 = {
      COMPLETED: "Completed",
      EXPIRED: "Expired",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      PARTIALLY_COMPLETED: "PartiallyCompleted",
      SCHEDULED: "Scheduled",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
      SUBMITTED: "Submitted",
      VALIDATING: "Validating",
    },
    ih3 = {
      CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
      DISTILLATION: "DISTILLATION",
      FINE_TUNING: "FINE_TUNING",
    },
    nh3 = { ON_DEMAND: "ON_DEMAND", PROVISIONED: "PROVISIONED" },
    rh3 = { EMBEDDING: "EMBEDDING", IMAGE: "IMAGE", TEXT: "TEXT" },
    ah3 = { ACTIVE: "ACTIVE", LEGACY: "LEGACY" },
    oh3 = { AVAILABLE: "AVAILABLE" },
    sh3 = { CUSTOM: "custom", DEFAULT: "default" },
    th3 = { ONE_MONTH: "OneMonth", SIX_MONTHS: "SixMonths" },
    eh3 = {
      CREATING: "Creating",
      FAILED: "Failed",
      IN_SERVICE: "InService",
      UPDATING: "Updating",
    },
    AI3 = { CREATION_TIME: "CreationTime" },
    qI3 = { AUTHORIZED: "AUTHORIZED", NOT_AUTHORIZED: "NOT_AUTHORIZED" },
    KI3 = { AVAILABLE: "AVAILABLE", NOT_AVAILABLE: "NOT_AVAILABLE" },
    YI3 = { AVAILABLE: "AVAILABLE", NOT_AVAILABLE: "NOT_AVAILABLE" },
    zI3 = { ALL: "ALL", PUBLIC: "PUBLIC" },
    wI3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
    },
    HI3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      NOT_STARTED: "NotStarted",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
    },
    $I3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
    };
  Object.defineProperty(qt6, "$Command", {
    enumerable: !0,
    get: function () {
      return U8.Command;
    },
  });
  Object.defineProperty(qt6, "__Client", {
    enumerable: !0,
    get: function () {
      return U8.Client;
    },
  });
  qt6.AccessDeniedException = ob8;
  qt6.AgreementStatus = aS3;
  qt6.ApplicationType = Dh3;
  qt6.AttributeType = Zh3;
  qt6.AuthorizationStatus = qI3;
  qt6.AutomatedReasoningCheckLogicWarningType = Yh3;
  qt6.AutomatedReasoningCheckResult = oS3;
  qt6.AutomatedReasoningPolicyAnnotationStatus = Kh3;
  qt6.AutomatedReasoningPolicyBuildDocumentContentType = tS3;
  qt6.AutomatedReasoningPolicyBuildMessageType = qh3;
  qt6.AutomatedReasoningPolicyBuildResultAssetType = Ah3;
  qt6.AutomatedReasoningPolicyBuildWorkflowStatus = eS3;
  qt6.AutomatedReasoningPolicyBuildWorkflowType = sS3;
  qt6.AutomatedReasoningPolicyTestRunResult = zh3;
  qt6.AutomatedReasoningPolicyTestRunStatus = wh3;
  qt6.BatchDeleteEvaluationJobCommand = ho6;
  qt6.Bedrock = At6;
  qt6.BedrockClient = VX;
  qt6.BedrockServiceException = $L;
  qt6.CancelAutomatedReasoningPolicyBuildWorkflowCommand = Io6;
  qt6.CommitmentDuration = th3;
  qt6.ConflictException = qu8;
  qt6.CreateAutomatedReasoningPolicyCommand = xo6;
  qt6.CreateAutomatedReasoningPolicyTestCaseCommand = bo6;
  qt6.CreateAutomatedReasoningPolicyVersionCommand = uo6;
  qt6.CreateCustomModelCommand = Bo6;
  qt6.CreateCustomModelDeploymentCommand = mo6;
  qt6.CreateEvaluationJobCommand = Fo6;
  qt6.CreateFoundationModelAgreementCommand = Qo6;
  qt6.CreateGuardrailCommand = go6;
  qt6.CreateGuardrailVersionCommand = Uo6;
  qt6.CreateInferenceProfileCommand = po6;
  qt6.CreateMarketplaceModelEndpointCommand = do6;
  qt6.CreateModelCopyJobCommand = co6;
  qt6.CreateModelCustomizationJobCommand = lo6;
  qt6.CreateModelImportJobCommand = io6;
  qt6.CreateModelInvocationJobCommand = no6;
  qt6.CreatePromptRouterCommand = ro6;
  qt6.CreateProvisionedModelThroughputCommand = ao6;
  qt6.CustomModelDeploymentStatus = $h3;
  qt6.CustomizationType = Jh3;
  qt6.DeleteAutomatedReasoningPolicyBuildWorkflowCommand = oo6;
  qt6.DeleteAutomatedReasoningPolicyCommand = so6;
  qt6.DeleteAutomatedReasoningPolicyTestCaseCommand = to6;
  qt6.DeleteCustomModelCommand = eo6;
  qt6.DeleteCustomModelDeploymentCommand = As6;
  qt6.DeleteFoundationModelAgreementCommand = qs6;
  qt6.DeleteGuardrailCommand = Ks6;
  qt6.DeleteImportedModelCommand = Ys6;
  qt6.DeleteInferenceProfileCommand = zs6;
  qt6.DeleteMarketplaceModelEndpointCommand = ws6;
  qt6.DeleteModelInvocationLoggingConfigurationCommand = Hs6;
  qt6.DeletePromptRouterCommand = $s6;
  qt6.DeleteProvisionedModelThroughputCommand = Os6;
  qt6.DeregisterMarketplaceModelEndpointCommand = _s6;
  qt6.EntitlementAvailability = KI3;
  qt6.EvaluationJobStatus = jh3;
  qt6.EvaluationJobType = vh3;
  qt6.EvaluationTaskType = Mh3;
  qt6.ExportAutomatedReasoningPolicyVersionCommand = Js6;
  qt6.ExternalSourceType = Wh3;
  qt6.FineTuningJobStatus = $I3;
  qt6.FoundationModelLifecycleStatus = ah3;
  qt6.GetAutomatedReasoningPolicyAnnotationsCommand = Xs6;
  qt6.GetAutomatedReasoningPolicyBuildWorkflowCommand = js6;
  qt6.GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand = Ds6;
  qt6.GetAutomatedReasoningPolicyCommand = Ms6;
  qt6.GetAutomatedReasoningPolicyNextScenarioCommand = Ps6;
  qt6.GetAutomatedReasoningPolicyTestCaseCommand = Ws6;
  qt6.GetAutomatedReasoningPolicyTestResultCommand = Gs6;
  qt6.GetCustomModelCommand = Zs6;
  qt6.GetCustomModelDeploymentCommand = fs6;
  qt6.GetEvaluationJobCommand = Vs6;
  qt6.GetFoundationModelAvailabilityCommand = Ns6;
  qt6.GetFoundationModelCommand = Ts6;
  qt6.GetGuardrailCommand = vs6;
  qt6.GetImportedModelCommand = Es6;
  qt6.GetInferenceProfileCommand = ks6;
  qt6.GetMarketplaceModelEndpointCommand = Ls6;
  qt6.GetModelCopyJobCommand = Rs6;
  qt6.GetModelCustomizationJobCommand = ys6;
  qt6.GetModelImportJobCommand = Cs6;
  qt6.GetModelInvocationJobCommand = Ss6;
  qt6.GetModelInvocationLoggingConfigurationCommand = hs6;
  qt6.GetPromptRouterCommand = Is6;
  qt6.GetProvisionedModelThroughputCommand = xs6;
  qt6.GetUseCaseForModelAccessCommand = bs6;
  qt6.GuardrailContentFilterAction = kh3;
  qt6.GuardrailContentFilterType = yh3;
  qt6.GuardrailContentFiltersTierName = Ch3;
  qt6.GuardrailContextualGroundingAction = Sh3;
  qt6.GuardrailContextualGroundingFilterType = hh3;
  qt6.GuardrailFilterStrength = Rh3;
  qt6.GuardrailManagedWordsType = Fh3;
  qt6.GuardrailModality = Lh3;
  qt6.GuardrailPiiEntityType = xh3;
  qt6.GuardrailSensitiveInformationAction = Ih3;
  qt6.GuardrailStatus = Qh3;
  qt6.GuardrailTopicAction = uh3;
  qt6.GuardrailTopicType = Bh3;
  qt6.GuardrailTopicsTierName = bh3;
  qt6.GuardrailWordAction = mh3;
  qt6.InferenceProfileStatus = gh3;
  qt6.InferenceProfileType = Uh3;
  qt6.InferenceType = nh3;
  qt6.InternalServerException = sb8;
  qt6.JobStatusDetails = HI3;
  qt6.ListAutomatedReasoningPoliciesCommand = Z86;
  qt6.ListAutomatedReasoningPolicyBuildWorkflowsCommand = f86;
  qt6.ListAutomatedReasoningPolicyTestCasesCommand = V86;
  qt6.ListAutomatedReasoningPolicyTestResultsCommand = N86;
  qt6.ListCustomModelDeploymentsCommand = T86;
  qt6.ListCustomModelsCommand = v86;
  qt6.ListEvaluationJobsCommand = E86;
  qt6.ListFoundationModelAgreementOffersCommand = us6;
  qt6.ListFoundationModelsCommand = Bs6;
  qt6.ListGuardrailsCommand = k86;
  qt6.ListImportedModelsCommand = L86;
  qt6.ListInferenceProfilesCommand = R86;
  qt6.ListMarketplaceModelEndpointsCommand = y86;
  qt6.ListModelCopyJobsCommand = C86;
  qt6.ListModelCustomizationJobsCommand = S86;
  qt6.ListModelImportJobsCommand = h86;
  qt6.ListModelInvocationJobsCommand = I86;
  qt6.ListPromptRoutersCommand = x86;
  qt6.ListProvisionedModelThroughputsCommand = b86;
  qt6.ListTagsForResourceCommand = ms6;
  qt6.ModelCopyJobStatus = ph3;
  qt6.ModelCustomization = ih3;
  qt6.ModelCustomizationJobStatus = wI3;
  qt6.ModelImportJobStatus = dh3;
  qt6.ModelInvocationJobStatus = lh3;
  qt6.ModelModality = rh3;
  qt6.ModelStatus = Xh3;
  qt6.OfferType = zI3;
  qt6.PerformanceConfigLatency = Ph3;
  qt6.PromptRouterStatus = oh3;
  qt6.PromptRouterType = sh3;
  qt6.ProvisionedModelStatus = eh3;
  qt6.PutModelInvocationLoggingConfigurationCommand = Fs6;
  qt6.PutUseCaseForModelAccessCommand = Qs6;
  qt6.QueryTransformationType = Gh3;
  qt6.RegionAvailability = YI3;
  qt6.RegisterMarketplaceModelEndpointCommand = gs6;
  qt6.RerankingMetadataSelectionMode = Vh3;
  qt6.ResourceInUseException = zu8;
  qt6.ResourceNotFoundException = tb8;
  qt6.RetrieveAndGenerateType = Th3;
  qt6.S3InputFormat = ch3;
  qt6.SearchType = fh3;
  qt6.ServiceQuotaExceededException = Ku8;
  qt6.ServiceUnavailableException = wu8;
  qt6.SortByProvisionedModels = AI3;
  qt6.SortJobsBy = Eh3;
  qt6.SortModelsBy = Oh3;
  qt6.SortOrder = _h3;
  qt6.StartAutomatedReasoningPolicyBuildWorkflowCommand = Us6;
  qt6.StartAutomatedReasoningPolicyTestWorkflowCommand = ps6;
  qt6.Status = Hh3;
  qt6.StopEvaluationJobCommand = ds6;
  qt6.StopModelCustomizationJobCommand = cs6;
  qt6.StopModelInvocationJobCommand = ls6;
  qt6.TagResourceCommand = is6;
  qt6.ThrottlingException = eb8;
  qt6.TooManyTagsException = Yu8;
  qt6.UntagResourceCommand = ns6;
  qt6.UpdateAutomatedReasoningPolicyAnnotationsCommand = rs6;
  qt6.UpdateAutomatedReasoningPolicyCommand = as6;
  qt6.UpdateAutomatedReasoningPolicyTestCaseCommand = os6;
  qt6.UpdateGuardrailCommand = ss6;
  qt6.UpdateMarketplaceModelEndpointCommand = ts6;
  qt6.UpdateProvisionedModelThroughputCommand = es6;
  qt6.ValidationException = Au8;
  qt6.VectorSearchRerankingConfigurationType = Nh3;
  qt6.paginateListAutomatedReasoningPolicies = IS3;
  qt6.paginateListAutomatedReasoningPolicyBuildWorkflows = xS3;
  qt6.paginateListAutomatedReasoningPolicyTestCases = bS3;
  qt6.paginateListAutomatedReasoningPolicyTestResults = uS3;
  qt6.paginateListCustomModelDeployments = BS3;
  qt6.paginateListCustomModels = mS3;
  qt6.paginateListEvaluationJobs = FS3;
  qt6.paginateListGuardrails = QS3;
  qt6.paginateListImportedModels = gS3;
  qt6.paginateListInferenceProfiles = US3;
  qt6.paginateListMarketplaceModelEndpoints = pS3;
  qt6.paginateListModelCopyJobs = dS3;
  qt6.paginateListModelCustomizationJobs = cS3;
  qt6.paginateListModelImportJobs = lS3;
  qt6.paginateListModelInvocationJobs = iS3;
  qt6.paginateListPromptRouters = nS3;
  qt6.paginateListProvisionedModelThroughputs = rS3;
