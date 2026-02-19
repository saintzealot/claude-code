// Module: T9 (cjs)
// Dependencies: [LF1, TfA, a94, e94, HY4, kfA, jY4, RfA, yJ4, hJ4, xJ4, FJ4, bfA, tJ4, KX4, WX4, fX4, vX4, hX4, uX4, QX4]
// Exports: internal, diagLogLevelFromString, BindOnceFuture, urlMatches, isUrlIgnored, callWithTimeout, TimeoutError, merge, TraceState, unsuppressTracing, suppressTracing, isTracingSuppressed, setRPCMetadata, getRPCMetadata, deleteRPCMetadata, RPCType, parseTraceParent, W3CTraceContextPropagator, TRACE_STATE_HEADER, TRACE_PARENT_HEADER, CompositePropagator, otperformance, getStringListFromEnv, getNumberFromEnv, getBooleanFromEnv, getStringFromEnv, _globalThis, SDK_INFO, parseKeyPairsIntoRecord, ExportResultCode, unrefTimer, timeInputToHrTime, millisToHrTime, isTimeInputHrTime, isTimeInput, hrTimeToTimeStamp, hrTimeToNanoseconds, hrTimeToMilliseconds, hrTimeToMicroseconds, hrTimeDuration, hrTime, getTimeOrigin, addHrTimes, loggingErrorHandler, setGlobalErrorHandler, globalErrorHandler, sanitizeAttributes, isAttributeValue, AnchoredClock, W3CBaggagePropagator
// Lines: 322391-322760 in cli.formatted.js
// ---

  Object.defineProperty(yK, "__esModule", { value: !0 });
  yK.internal =
    yK.diagLogLevelFromString =
    yK.BindOnceFuture =
    yK.urlMatches =
    yK.isUrlIgnored =
    yK.callWithTimeout =
    yK.TimeoutError =
    yK.merge =
    yK.TraceState =
    yK.unsuppressTracing =
    yK.suppressTracing =
    yK.isTracingSuppressed =
    yK.setRPCMetadata =
    yK.getRPCMetadata =
    yK.deleteRPCMetadata =
    yK.RPCType =
    yK.parseTraceParent =
    yK.W3CTraceContextPropagator =
    yK.TRACE_STATE_HEADER =
    yK.TRACE_PARENT_HEADER =
    yK.CompositePropagator =
    yK.otperformance =
    yK.getStringListFromEnv =
    yK.getNumberFromEnv =
    yK.getBooleanFromEnv =
    yK.getStringFromEnv =
    yK._globalThis =
    yK.SDK_INFO =
    yK.parseKeyPairsIntoRecord =
    yK.ExportResultCode =
    yK.unrefTimer =
    yK.timeInputToHrTime =
    yK.millisToHrTime =
    yK.isTimeInputHrTime =
    yK.isTimeInput =
    yK.hrTimeToTimeStamp =
    yK.hrTimeToNanoseconds =
    yK.hrTimeToMilliseconds =
    yK.hrTimeToMicroseconds =
    yK.hrTimeDuration =
    yK.hrTime =
    yK.getTimeOrigin =
    yK.addHrTimes =
    yK.loggingErrorHandler =
    yK.setGlobalErrorHandler =
    yK.globalErrorHandler =
    yK.sanitizeAttributes =
    yK.isAttributeValue =
    yK.AnchoredClock =
    yK.W3CBaggagePropagator =
      void 0;
  var AKY = a94();
  Object.defineProperty(yK, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function () {
      return AKY.W3CBaggagePropagator;
    },
  });
  var qKY = e94();
  Object.defineProperty(yK, "AnchoredClock", {
    enumerable: !0,
    get: function () {
      return qKY.AnchoredClock;
    },
  });
  var gX4 = HY4();
  Object.defineProperty(yK, "isAttributeValue", {
    enumerable: !0,
    get: function () {
      return gX4.isAttributeValue;
    },
  });
  Object.defineProperty(yK, "sanitizeAttributes", {
    enumerable: !0,
    get: function () {
      return gX4.sanitizeAttributes;
    },
  });
  var UX4 = jY4();
  Object.defineProperty(yK, "globalErrorHandler", {
    enumerable: !0,
    get: function () {
      return UX4.globalErrorHandler;
    },
  });
  Object.defineProperty(yK, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function () {
      return UX4.setGlobalErrorHandler;
    },
  });
  var KKY = kfA();
  Object.defineProperty(yK, "loggingErrorHandler", {
    enumerable: !0,
    get: function () {
      return KKY.loggingErrorHandler;
    },
  });
  var Ky = yJ4();
  Object.defineProperty(yK, "addHrTimes", {
    enumerable: !0,
    get: function () {
      return Ky.addHrTimes;
    },
  });
  Object.defineProperty(yK, "getTimeOrigin", {
    enumerable: !0,
    get: function () {
      return Ky.getTimeOrigin;
    },
  });
  Object.defineProperty(yK, "hrTime", {
    enumerable: !0,
    get: function () {
      return Ky.hrTime;
    },
  });
  Object.defineProperty(yK, "hrTimeDuration", {
    enumerable: !0,
    get: function () {
      return Ky.hrTimeDuration;
    },
  });
  Object.defineProperty(yK, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function () {
      return Ky.hrTimeToMicroseconds;
    },
  });
  Object.defineProperty(yK, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function () {
      return Ky.hrTimeToMilliseconds;
    },
  });
  Object.defineProperty(yK, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function () {
      return Ky.hrTimeToNanoseconds;
    },
  });
  Object.defineProperty(yK, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function () {
      return Ky.hrTimeToTimeStamp;
    },
  });
  Object.defineProperty(yK, "isTimeInput", {
    enumerable: !0,
    get: function () {
      return Ky.isTimeInput;
    },
  });
  Object.defineProperty(yK, "isTimeInputHrTime", {
    enumerable: !0,
    get: function () {
      return Ky.isTimeInputHrTime;
    },
  });
  Object.defineProperty(yK, "millisToHrTime", {
    enumerable: !0,
    get: function () {
      return Ky.millisToHrTime;
    },
  });
  Object.defineProperty(yK, "timeInputToHrTime", {
    enumerable: !0,
    get: function () {
      return Ky.timeInputToHrTime;
    },
  });
  var YKY = hJ4();
  Object.defineProperty(yK, "unrefTimer", {
    enumerable: !0,
    get: function () {
      return YKY.unrefTimer;
    },
  });
  var zKY = xJ4();
  Object.defineProperty(yK, "ExportResultCode", {
    enumerable: !0,
    get: function () {
      return zKY.ExportResultCode;
    },
  });
  var wKY = TfA();
  Object.defineProperty(yK, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function () {
      return wKY.parseKeyPairsIntoRecord;
    },
  });
  var e31 = RfA();
  Object.defineProperty(yK, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return e31.SDK_INFO;
    },
  });
  Object.defineProperty(yK, "_globalThis", {
    enumerable: !0,
    get: function () {
      return e31._globalThis;
    },
  });
  Object.defineProperty(yK, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return e31.getStringFromEnv;
    },
  });
  Object.defineProperty(yK, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return e31.getBooleanFromEnv;
    },
  });
  Object.defineProperty(yK, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return e31.getNumberFromEnv;
    },
  });
  Object.defineProperty(yK, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return e31.getStringListFromEnv;
    },
  });
  Object.defineProperty(yK, "otperformance", {
    enumerable: !0,
    get: function () {
      return e31.otperformance;
    },
  });
  var HKY = FJ4();
  Object.defineProperty(yK, "CompositePropagator", {
    enumerable: !0,
    get: function () {
      return HKY.CompositePropagator;
    },
  });
  var mD6 = tJ4();
  Object.defineProperty(yK, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function () {
      return mD6.TRACE_PARENT_HEADER;
    },
  });
  Object.defineProperty(yK, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function () {
      return mD6.TRACE_STATE_HEADER;
    },
  });
  Object.defineProperty(yK, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function () {
      return mD6.W3CTraceContextPropagator;
    },
  });
  Object.defineProperty(yK, "parseTraceParent", {
    enumerable: !0,
    get: function () {
      return mD6.parseTraceParent;
    },
  });
  var FD6 = KX4();
  Object.defineProperty(yK, "RPCType", {
    enumerable: !0,
    get: function () {
      return FD6.RPCType;
    },
  });
  Object.defineProperty(yK, "deleteRPCMetadata", {
    enumerable: !0,
    get: function () {
      return FD6.deleteRPCMetadata;
    },
  });
  Object.defineProperty(yK, "getRPCMetadata", {
    enumerable: !0,
    get: function () {
      return FD6.getRPCMetadata;
    },
  });
  Object.defineProperty(yK, "setRPCMetadata", {
    enumerable: !0,
    get: function () {
      return FD6.setRPCMetadata;
    },
  });
  var mfA = LF1();
  Object.defineProperty(yK, "isTracingSuppressed", {
    enumerable: !0,
    get: function () {
      return mfA.isTracingSuppressed;
    },
  });
  Object.defineProperty(yK, "suppressTracing", {
    enumerable: !0,
    get: function () {
      return mfA.suppressTracing;
    },
  });
  Object.defineProperty(yK, "unsuppressTracing", {
    enumerable: !0,
    get: function () {
      return mfA.unsuppressTracing;
    },
  });
  var $KY = bfA();
  Object.defineProperty(yK, "TraceState", {
    enumerable: !0,
    get: function () {
      return $KY.TraceState;
    },
  });
  var OKY = WX4();
  Object.defineProperty(yK, "merge", {
    enumerable: !0,
    get: function () {
      return OKY.merge;
    },
  });
  var pX4 = fX4();
  Object.defineProperty(yK, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return pX4.TimeoutError;
    },
  });
  Object.defineProperty(yK, "callWithTimeout", {
    enumerable: !0,
    get: function () {
      return pX4.callWithTimeout;
    },
  });
  var dX4 = vX4();
  Object.defineProperty(yK, "isUrlIgnored", {
    enumerable: !0,
    get: function () {
      return dX4.isUrlIgnored;
    },
  });
  Object.defineProperty(yK, "urlMatches", {
    enumerable: !0,
    get: function () {
      return dX4.urlMatches;
    },
  });
  var _KY = hX4();
  Object.defineProperty(yK, "BindOnceFuture", {
    enumerable: !0,
    get: function () {
      return _KY.BindOnceFuture;
    },
  });
  var JKY = uX4();
  Object.defineProperty(yK, "diagLogLevelFromString", {
    enumerable: !0,
    get: function () {
      return JKY.diagLogLevelFromString;
    },
  });
  var XKY = QX4();
  yK.internal = { _export: XKY._export };
