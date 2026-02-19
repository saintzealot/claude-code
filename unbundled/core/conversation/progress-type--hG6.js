// Module: hG6 (cjs)
// Dependencies: [URA, dRA, Kp4, tt, RG1, EG6, Gp4, kp4, xp4, mp4, rp4]
// Exports: ProgressType, ProgressToken, createMessageConnection, NullLogger, ConnectionOptions, ConnectionStrategy, AbstractMessageBuffer, WriteableStreamMessageWriter, AbstractMessageWriter, MessageWriter, ReadableStreamMessageReader, AbstractMessageReader, MessageReader, SharedArrayReceiverStrategy, SharedArraySenderStrategy, CancellationToken, CancellationTokenSource, Emitter, Event, Disposable, LRUCache, Touch, LinkedMap, ParameterStructures, NotificationType9, NotificationType8, NotificationType7, NotificationType6, NotificationType5, NotificationType4, NotificationType3, NotificationType2, NotificationType1, NotificationType0, NotificationType, ErrorCodes, ResponseError, RequestType9, RequestType8, RequestType7, RequestType6, RequestType5, RequestType4, RequestType3, RequestType2, RequestType1, RequestType0, RequestType, Message, RAL, MessageStrategy, CancellationStrategy, CancellationSenderStrategy, CancellationReceiverStrategy, ConnectionError, ConnectionErrors, LogTraceNotification, SetTraceNotification, TraceFormat, TraceValues, Trace
// Lines: 403236-403673 in cli.formatted.js
// ---

  Object.defineProperty(Jq, "__esModule", { value: !0 });
  Jq.ProgressType =
    Jq.ProgressToken =
    Jq.createMessageConnection =
    Jq.NullLogger =
    Jq.ConnectionOptions =
    Jq.ConnectionStrategy =
    Jq.AbstractMessageBuffer =
    Jq.WriteableStreamMessageWriter =
    Jq.AbstractMessageWriter =
    Jq.MessageWriter =
    Jq.ReadableStreamMessageReader =
    Jq.AbstractMessageReader =
    Jq.MessageReader =
    Jq.SharedArrayReceiverStrategy =
    Jq.SharedArraySenderStrategy =
    Jq.CancellationToken =
    Jq.CancellationTokenSource =
    Jq.Emitter =
    Jq.Event =
    Jq.Disposable =
    Jq.LRUCache =
    Jq.Touch =
    Jq.LinkedMap =
    Jq.ParameterStructures =
    Jq.NotificationType9 =
    Jq.NotificationType8 =
    Jq.NotificationType7 =
    Jq.NotificationType6 =
    Jq.NotificationType5 =
    Jq.NotificationType4 =
    Jq.NotificationType3 =
    Jq.NotificationType2 =
    Jq.NotificationType1 =
    Jq.NotificationType0 =
    Jq.NotificationType =
    Jq.ErrorCodes =
    Jq.ResponseError =
    Jq.RequestType9 =
    Jq.RequestType8 =
    Jq.RequestType7 =
    Jq.RequestType6 =
    Jq.RequestType5 =
    Jq.RequestType4 =
    Jq.RequestType3 =
    Jq.RequestType2 =
    Jq.RequestType1 =
    Jq.RequestType0 =
    Jq.RequestType =
    Jq.Message =
    Jq.RAL =
      void 0;
  Jq.MessageStrategy =
    Jq.CancellationStrategy =
    Jq.CancellationSenderStrategy =
    Jq.CancellationReceiverStrategy =
    Jq.ConnectionError =
    Jq.ConnectionErrors =
    Jq.LogTraceNotification =
    Jq.SetTraceNotification =
    Jq.TraceFormat =
    Jq.TraceValues =
    Jq.Trace =
      void 0;
  var hH = URA();
  Object.defineProperty(Jq, "Message", {
    enumerable: !0,
    get: function () {
      return hH.Message;
    },
  });
  Object.defineProperty(Jq, "RequestType", {
    enumerable: !0,
    get: function () {
      return hH.RequestType;
    },
  });
  Object.defineProperty(Jq, "RequestType0", {
    enumerable: !0,
    get: function () {
      return hH.RequestType0;
    },
  });
  Object.defineProperty(Jq, "RequestType1", {
    enumerable: !0,
    get: function () {
      return hH.RequestType1;
    },
  });
  Object.defineProperty(Jq, "RequestType2", {
    enumerable: !0,
    get: function () {
      return hH.RequestType2;
    },
  });
  Object.defineProperty(Jq, "RequestType3", {
    enumerable: !0,
    get: function () {
      return hH.RequestType3;
    },
  });
  Object.defineProperty(Jq, "RequestType4", {
    enumerable: !0,
    get: function () {
      return hH.RequestType4;
    },
  });
  Object.defineProperty(Jq, "RequestType5", {
    enumerable: !0,
    get: function () {
      return hH.RequestType5;
    },
  });
  Object.defineProperty(Jq, "RequestType6", {
    enumerable: !0,
    get: function () {
      return hH.RequestType6;
    },
  });
  Object.defineProperty(Jq, "RequestType7", {
    enumerable: !0,
    get: function () {
      return hH.RequestType7;
    },
  });
  Object.defineProperty(Jq, "RequestType8", {
    enumerable: !0,
    get: function () {
      return hH.RequestType8;
    },
  });
  Object.defineProperty(Jq, "RequestType9", {
    enumerable: !0,
    get: function () {
      return hH.RequestType9;
    },
  });
  Object.defineProperty(Jq, "ResponseError", {
    enumerable: !0,
    get: function () {
      return hH.ResponseError;
    },
  });
  Object.defineProperty(Jq, "ErrorCodes", {
    enumerable: !0,
    get: function () {
      return hH.ErrorCodes;
    },
  });
  Object.defineProperty(Jq, "NotificationType", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType;
    },
  });
  Object.defineProperty(Jq, "NotificationType0", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType0;
    },
  });
  Object.defineProperty(Jq, "NotificationType1", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType1;
    },
  });
  Object.defineProperty(Jq, "NotificationType2", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType2;
    },
  });
  Object.defineProperty(Jq, "NotificationType3", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType3;
    },
  });
  Object.defineProperty(Jq, "NotificationType4", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType4;
    },
  });
  Object.defineProperty(Jq, "NotificationType5", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType5;
    },
  });
  Object.defineProperty(Jq, "NotificationType6", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType6;
    },
  });
  Object.defineProperty(Jq, "NotificationType7", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType7;
    },
  });
  Object.defineProperty(Jq, "NotificationType8", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType8;
    },
  });
  Object.defineProperty(Jq, "NotificationType9", {
    enumerable: !0,
    get: function () {
      return hH.NotificationType9;
    },
  });
  Object.defineProperty(Jq, "ParameterStructures", {
    enumerable: !0,
    get: function () {
      return hH.ParameterStructures;
    },
  });
  var $yA = dRA();
  Object.defineProperty(Jq, "LinkedMap", {
    enumerable: !0,
    get: function () {
      return $yA.LinkedMap;
    },
  });
  Object.defineProperty(Jq, "LRUCache", {
    enumerable: !0,
    get: function () {
      return $yA.LRUCache;
    },
  });
  Object.defineProperty(Jq, "Touch", {
    enumerable: !0,
    get: function () {
      return $yA.Touch;
    },
  });
  var NhY = Kp4();
  Object.defineProperty(Jq, "Disposable", {
    enumerable: !0,
    get: function () {
      return NhY.Disposable;
    },
  });
  var ap4 = RG1();
  Object.defineProperty(Jq, "Event", {
    enumerable: !0,
    get: function () {
      return ap4.Event;
    },
  });
  Object.defineProperty(Jq, "Emitter", {
    enumerable: !0,
    get: function () {
      return ap4.Emitter;
    },
  });
  var op4 = EG6();
  Object.defineProperty(Jq, "CancellationTokenSource", {
    enumerable: !0,
    get: function () {
      return op4.CancellationTokenSource;
    },
  });
  Object.defineProperty(Jq, "CancellationToken", {
    enumerable: !0,
    get: function () {
      return op4.CancellationToken;
    },
  });
  var sp4 = Gp4();
  Object.defineProperty(Jq, "SharedArraySenderStrategy", {
    enumerable: !0,
    get: function () {
      return sp4.SharedArraySenderStrategy;
    },
  });
  Object.defineProperty(Jq, "SharedArrayReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return sp4.SharedArrayReceiverStrategy;
    },
  });
  var OyA = kp4();
  Object.defineProperty(Jq, "MessageReader", {
    enumerable: !0,
    get: function () {
      return OyA.MessageReader;
    },
  });
  Object.defineProperty(Jq, "AbstractMessageReader", {
    enumerable: !0,
    get: function () {
      return OyA.AbstractMessageReader;
    },
  });
  Object.defineProperty(Jq, "ReadableStreamMessageReader", {
    enumerable: !0,
    get: function () {
      return OyA.ReadableStreamMessageReader;
    },
  });
  var _yA = xp4();
  Object.defineProperty(Jq, "MessageWriter", {
    enumerable: !0,
    get: function () {
      return _yA.MessageWriter;
    },
  });
  Object.defineProperty(Jq, "AbstractMessageWriter", {
    enumerable: !0,
    get: function () {
      return _yA.AbstractMessageWriter;
    },
  });
  Object.defineProperty(Jq, "WriteableStreamMessageWriter", {
    enumerable: !0,
    get: function () {
      return _yA.WriteableStreamMessageWriter;
    },
  });
  var ThY = mp4();
  Object.defineProperty(Jq, "AbstractMessageBuffer", {
    enumerable: !0,
    get: function () {
      return ThY.AbstractMessageBuffer;
    },
  });
  var WP = rp4();
  Object.defineProperty(Jq, "ConnectionStrategy", {
    enumerable: !0,
    get: function () {
      return WP.ConnectionStrategy;
    },
  });
  Object.defineProperty(Jq, "ConnectionOptions", {
    enumerable: !0,
    get: function () {
      return WP.ConnectionOptions;
    },
  });
  Object.defineProperty(Jq, "NullLogger", {
    enumerable: !0,
    get: function () {
      return WP.NullLogger;
    },
  });
  Object.defineProperty(Jq, "createMessageConnection", {
    enumerable: !0,
    get: function () {
      return WP.createMessageConnection;
    },
  });
  Object.defineProperty(Jq, "ProgressToken", {
    enumerable: !0,
    get: function () {
      return WP.ProgressToken;
    },
  });
  Object.defineProperty(Jq, "ProgressType", {
    enumerable: !0,
    get: function () {
      return WP.ProgressType;
    },
  });
  Object.defineProperty(Jq, "Trace", {
    enumerable: !0,
    get: function () {
      return WP.Trace;
    },
  });
  Object.defineProperty(Jq, "TraceValues", {
    enumerable: !0,
    get: function () {
      return WP.TraceValues;
    },
  });
  Object.defineProperty(Jq, "TraceFormat", {
    enumerable: !0,
    get: function () {
      return WP.TraceFormat;
    },
  });
  Object.defineProperty(Jq, "SetTraceNotification", {
    enumerable: !0,
    get: function () {
      return WP.SetTraceNotification;
    },
  });
  Object.defineProperty(Jq, "LogTraceNotification", {
    enumerable: !0,
    get: function () {
      return WP.LogTraceNotification;
    },
  });
  Object.defineProperty(Jq, "ConnectionErrors", {
    enumerable: !0,
    get: function () {
      return WP.ConnectionErrors;
    },
  });
  Object.defineProperty(Jq, "ConnectionError", {
    enumerable: !0,
    get: function () {
      return WP.ConnectionError;
    },
  });
  Object.defineProperty(Jq, "CancellationReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return WP.CancellationReceiverStrategy;
    },
  });
  Object.defineProperty(Jq, "CancellationSenderStrategy", {
    enumerable: !0,
    get: function () {
      return WP.CancellationSenderStrategy;
    },
  });
  Object.defineProperty(Jq, "CancellationStrategy", {
    enumerable: !0,
    get: function () {
      return WP.CancellationStrategy;
    },
  });
  Object.defineProperty(Jq, "MessageStrategy", {
    enumerable: !0,
    get: function () {
      return WP.MessageStrategy;
    },
  });
  var vhY = tt();
  Jq.RAL = vhY.default;
