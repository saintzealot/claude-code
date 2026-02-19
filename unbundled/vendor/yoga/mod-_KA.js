// Module: _KA (lazy)
// Dependencies: [k87, r71, HKA, L77]
// Lines: 147586-147730 in cli.formatted.js
// ---

  BqA();
  r71();
  HKA();
  L77();
  ((C77 = s(k87(), 1)),
    (OKA = uqA),
    (fU = C77.default({
      getRootHostContext: () => ({ isInsideText: !1 }),
      prepareForCommit: () => null,
      preparePortalMount: () => null,
      clearContainer: () => !1,
      resetAfterCommit(A) {
        if (typeof A.onComputeLayout === "function") A.onComputeLayout();
        A.onRender?.();
      },
      getChildHostContext(A, q) {
        let K = A.isInsideText,
          Y = q === "ink-text" || q === "ink-virtual-text" || q === "ink-link";
        if (K === Y) return A;
        return { isInsideText: Y };
      },
      shouldSetTextContent: () => !1,
      createInstance(A, q, K, Y) {
        if (Y.isInsideText && A === "ink-box")
          throw Error("<Box> can't be nested inside <Text> component");
        let z = A === "ink-text" && Y.isInsideText ? "ink-virtual-text" : A,
          w = C36(z);
        for (let [H, $] of Object.entries(q)) {
          if (H === "children") continue;
          if (H === "style") {
            if ((wKA(w, $), w.yogaNode)) $KA(w.yogaNode, $);
            continue;
          }
          if (H === "textStyles") {
            w.textStyles = $;
            continue;
          }
          zKA(w, H, $);
        }
        return w;
      },
      createTextInstance(A, q, K) {
        if (!K.isInsideText)
          throw Error(
            `Text string "${A}" must be rendered inside <Text> component`,
          );
        return k77(A);
      },
      resetTextContent() {},
      hideTextInstance(A) {
        CS1(A, "");
      },
      unhideTextInstance(A, q) {
        CS1(A, q);
      },
      getPublicInstance: (A) => A,
      hideInstance(A) {
        (A.yogaNode?.setDisplay(yS.None), hS(A));
      },
      unhideInstance(A) {
        (A.yogaNode?.setDisplay(yS.Flex), hS(A));
      },
      appendInitialChild: S36,
      appendChild: S36,
      insertBefore: YKA,
      finalizeInitialChildren: () => !1,
      isPrimaryRenderer: !0,
      supportsMutation: !0,
      supportsPersistence: !1,
      supportsHydration: !1,
      scheduleTimeout: setTimeout,
      cancelTimeout: clearTimeout,
      noTimeout: -1,
      getCurrentUpdatePriority: () => OKA,
      beforeActiveInstanceBlur() {},
      afterActiveInstanceBlur() {},
      detachDeletedInstance() {},
      getInstanceFromNode: () => null,
      prepareScopeUpdate() {},
      getInstanceFromScope: () => null,
      appendChildToContainer: S36,
      insertInContainerBefore: YKA,
      removeChildFromContainer(A, q) {
        (yS1(A, q), y77(q));
      },
      commitUpdate(A, q, K, Y) {
        let z = R77(K, Y),
          w = R77(K.style, Y.style);
        if (z)
          for (let [H, $] of Object.entries(z)) {
            if (H === "style") {
              wKA(A, $);
              continue;
            }
            if (H === "textStyles") {
              ((A.textStyles = $), hS(A));
              continue;
            }
            zKA(A, H, $);
          }
        if (w && A.yogaNode) $KA(A.yogaNode, w, Y.style);
      },
      commitTextUpdate(A, q, K) {
        CS1(A, K);
      },
      removeChild(A, q) {
        (yS1(A, q), y77(q));
      },
      maySuspendCommit() {
        return !1;
      },
      preloadInstance() {
        return !0;
      },
      startSuspendingCommit() {},
      suspendInstance() {},
      waitForCommitToBeReady() {
        return null;
      },
      NotPendingTransition: null,
      HostTransitionContext: {
        $$typeof: Symbol.for("react.context"),
        _currentValue: null,
      },
      setCurrentUpdatePriority(A) {
        OKA = A;
      },
      resolveUpdatePriority() {
        return OKA;
      },
      resetFormInstance() {},
      requestPostPaintCallback() {},
      shouldAttemptEagerTransition() {
        return !1;
      },
      trackSchedulerEvent() {},
      resolveEventType() {
        return null;
      },
      resolveEventTimeStamp() {
        return -1.1;
      },
    })));
