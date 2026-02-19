// Module: _LA (cjs)
// Dependencies: [gt, rB4, YLA, fm4, Lm4, TW6, Im4, Bm4, pm4, OLA]
// Exports: Analytics
// Lines: 381965-382195 in cli.formatted.js
// ---

  Object.defineProperty(qF4, "__esModule", { value: !0 });
  qF4.Analytics = void 0;
  var sm4 = gt(),
    tkY = rB4(),
    ekY = YLA(),
    ALY = fm4(),
    qLY = Lm4(),
    KLY = Im4(),
    YLY = Bm4(),
    tm4 = TW6(),
    zLY = pm4(),
    em4 = OLA();
  class AF4 extends YLY.NodeEmitter {
    constructor(A) {
      super();
      ((this._isClosed = !1),
        (this._pendingEvents = 0),
        (this._isFlushing = !1),
        (0, tkY.validateSettings)(A),
        (this._eventFactory = new qLY.NodeEventFactory()),
        (this._queue = new zLY.NodeEventQueue()));
      let q = A.flushInterval ?? 1e4;
      this._closeAndFlushDefaultTimeout = q * 1.25;
      let { plugin: K, publisher: Y } = (0, ALY.createConfiguredNodePlugin)(
        {
          writeKey: A.writeKey,
          host: A.host,
          path: A.path,
          maxRetries: A.maxRetries ?? 3,
          flushAt: A.flushAt ?? A.maxEventsInBatch ?? 15,
          httpRequestTimeout: A.httpRequestTimeout,
          disable: A.disable,
          flushInterval: q,
          httpClient:
            typeof A.httpClient === "function"
              ? new em4.FetchHTTPClient(A.httpClient)
              : (A.httpClient ?? new em4.FetchHTTPClient()),
        },
        this,
      );
      ((this._publisher = Y),
        (this.ready = this.register(K).then(() => {
          return;
        })),
        this.emit("initialize", A),
        (0, sm4.bindAll)(this));
    }
    get VERSION() {
      return ekY.version;
    }
    closeAndFlush({ timeout: A = this._closeAndFlushDefaultTimeout } = {}) {
      return this.flush({ timeout: A, close: !0 });
    }
    async flush({ timeout: A, close: q = !1 } = {}) {
      if (this._isFlushing) {
        console.warn(
          "Overlapping flush calls detected. Please wait for the previous flush to finish before calling .flush again",
        );
        return;
      } else this._isFlushing = !0;
      if (q) this._isClosed = !0;
      this._publisher.flush(this._pendingEvents);
      let K = new Promise((Y) => {
        if (!this._pendingEvents) Y();
        else
          this.once("drained", () => {
            Y();
          });
      }).finally(() => {
        this._isFlushing = !1;
      });
      return A
        ? (0, sm4.pTimeout)(K, A).catch(() => {
            return;
          })
        : K;
    }
    _dispatch(A, q) {
      if (this._isClosed) {
        this.emit("call_after_close", A);
        return;
      }
      (this._pendingEvents++,
        (0, KLY.dispatchAndEmit)(A, this._queue, this, q)
          .catch((K) => K)
          .finally(() => {
            if ((this._pendingEvents--, !this._pendingEvents))
              this.emit("drained");
          }));
    }
    alias(
      { userId: A, previousId: q, context: K, timestamp: Y, integrations: z },
      w,
    ) {
      let H = this._eventFactory.alias(A, q, {
        context: K,
        integrations: z,
        timestamp: Y,
      });
      this._dispatch(H, w);
    }
    group(
      {
        timestamp: A,
        groupId: q,
        userId: K,
        anonymousId: Y,
        traits: z = {},
        context: w,
        integrations: H,
      },
      $,
    ) {
      let O = this._eventFactory.group(q, z, {
        context: w,
        anonymousId: Y,
        userId: K,
        timestamp: A,
        integrations: H,
      });
      this._dispatch(O, $);
    }
    identify(
      {
        userId: A,
        anonymousId: q,
        traits: K = {},
        context: Y,
        timestamp: z,
        integrations: w,
      },
      H,
    ) {
      let $ = this._eventFactory.identify(A, K, {
        context: Y,
        anonymousId: q,
        userId: A,
        timestamp: z,
        integrations: w,
      });
      this._dispatch($, H);
    }
    page(
      {
        userId: A,
        anonymousId: q,
        category: K,
        name: Y,
        properties: z,
        context: w,
        timestamp: H,
        integrations: $,
      },
      O,
    ) {
      let _ = this._eventFactory.page(K ?? null, Y ?? null, z, {
        context: w,
        anonymousId: q,
        userId: A,
        timestamp: H,
        integrations: $,
      });
      this._dispatch(_, O);
    }
    screen(
      {
        userId: A,
        anonymousId: q,
        category: K,
        name: Y,
        properties: z,
        context: w,
        timestamp: H,
        integrations: $,
      },
      O,
    ) {
      let _ = this._eventFactory.screen(K ?? null, Y ?? null, z, {
        context: w,
        anonymousId: q,
        userId: A,
        timestamp: H,
        integrations: $,
      });
      this._dispatch(_, O);
    }
    track(
      {
        userId: A,
        anonymousId: q,
        event: K,
        properties: Y,
        context: z,
        timestamp: w,
        integrations: H,
      },
      $,
    ) {
      let O = this._eventFactory.track(K, Y, {
        context: z,
        userId: A,
        anonymousId: q,
        timestamp: w,
        integrations: H,
      });
      this._dispatch(O, $);
    }
    register(...A) {
      return this._queue.criticalTasks.run(async () => {
        let q = tm4.Context.system(),
          K = A.map((Y) => this._queue.register(q, Y, this));
        (await Promise.all(K),
          this.emit(
            "register",
            A.map((Y) => Y.name),
          ));
      });
    }
    async deregister(...A) {
      let q = tm4.Context.system(),
        K = A.map((Y) => {
          let z = this._queue.plugins.find((w) => w.name === Y);
          if (z) return this._queue.deregister(q, z, this);
          else q.log("warn", `plugin ${Y} not found`);
        });
      (await Promise.all(K), this.emit("deregister", A));
    }
  }
  qF4.Analytics = AF4;
