// Module: YF4 (cjs)
// Dependencies: [TW6, OLA, _LA]
// Exports: FetchHTTPClient, Context, Analytics, default
// Lines: 382196-382222 in cli.formatted.js
// ---

  Object.defineProperty(bg1, "__esModule", { value: !0 });
  bg1.FetchHTTPClient = bg1.Context = bg1.Analytics = void 0;
  var wLY = _LA();
  Object.defineProperty(bg1, "Analytics", {
    enumerable: !0,
    get: function () {
      return wLY.Analytics;
    },
  });
  var HLY = TW6();
  Object.defineProperty(bg1, "Context", {
    enumerable: !0,
    get: function () {
      return HLY.Context;
    },
  });
  var $LY = OLA();
  Object.defineProperty(bg1, "FetchHTTPClient", {
    enumerable: !0,
    get: function () {
      return $LY.FetchHTTPClient;
    },
  });
  var OLY = _LA();
  bg1.default = OLY.Analytics;
