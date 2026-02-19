// Module: CDq (cjs)
// Dependencies: [ql1, qE6, sQA, tQA, kDq]
// Exports: Command
// Lines: 528738-529866 in cli.formatted.js
// ---

  var r_z = h1("node:events").EventEmitter,
    eQA = h1("node:child_process"),
    $l = h1("node:path"),
    AgA = h1("node:fs"),
    AJ = h1("node:process"),
    { Argument: a_z, humanReadableArgName: o_z } = qE6(),
    { CommanderError: qgA } = ql1(),
    { Help: s_z } = sQA(),
    { Option: LDq, DualOptions: t_z } = tQA(),
    { suggestSimilar: RDq } = kDq();
  class KgA extends r_z {
    constructor(A) {
      super();
      ((this.commands = []),
        (this.options = []),
        (this.parent = null),
        (this._allowUnknownOption = !1),
        (this._allowExcessArguments = !0),
        (this.registeredArguments = []),
        (this._args = this.registeredArguments),
        (this.args = []),
        (this.rawArgs = []),
        (this.processedArgs = []),
        (this._scriptPath = null),
        (this._name = A || ""),
        (this._optionValues = {}),
        (this._optionValueSources = {}),
        (this._storeOptionsAsProperties = !1),
        (this._actionHandler = null),
        (this._executableHandler = !1),
        (this._executableFile = null),
        (this._executableDir = null),
        (this._defaultCommandName = null),
        (this._exitCallback = null),
        (this._aliases = []),
        (this._combineFlagAndOptionalValue = !0),
        (this._description = ""),
        (this._summary = ""),
        (this._argsDescription = void 0),
        (this._enablePositionalOptions = !1),
        (this._passThroughOptions = !1),
        (this._lifeCycleHooks = {}),
        (this._showHelpAfterError = !1),
        (this._showSuggestionAfterError = !0),
        (this._outputConfiguration = {
          writeOut: (q) => AJ.stdout.write(q),
          writeErr: (q) => AJ.stderr.write(q),
          getOutHelpWidth: () => (AJ.stdout.isTTY ? AJ.stdout.columns : void 0),
          getErrHelpWidth: () => (AJ.stderr.isTTY ? AJ.stderr.columns : void 0),
          outputError: (q, K) => K(q),
        }),
        (this._hidden = !1),
        (this._helpOption = void 0),
        (this._addImplicitHelpCommand = void 0),
        (this._helpCommand = void 0),
        (this._helpConfiguration = {}));
    }
    copyInheritedSettings(A) {
      return (
        (this._outputConfiguration = A._outputConfiguration),
        (this._helpOption = A._helpOption),
        (this._helpCommand = A._helpCommand),
        (this._helpConfiguration = A._helpConfiguration),
        (this._exitCallback = A._exitCallback),
        (this._storeOptionsAsProperties = A._storeOptionsAsProperties),
        (this._combineFlagAndOptionalValue = A._combineFlagAndOptionalValue),
        (this._allowExcessArguments = A._allowExcessArguments),
        (this._enablePositionalOptions = A._enablePositionalOptions),
        (this._showHelpAfterError = A._showHelpAfterError),
        (this._showSuggestionAfterError = A._showSuggestionAfterError),
        this
      );
    }
    _getCommandAndAncestors() {
      let A = [];
      for (let q = this; q; q = q.parent) A.push(q);
      return A;
    }
    command(A, q, K) {
      let Y = q,
        z = K;
      if (typeof Y === "object" && Y !== null) ((z = Y), (Y = null));
      z = z || {};
      let [, w, H] = A.match(/([^ ]+) *(.*)/),
        $ = this.createCommand(w);
      if (Y) ($.description(Y), ($._executableHandler = !0));
      if (z.isDefault) this._defaultCommandName = $._name;
      if (
        (($._hidden = !!(z.noHelp || z.hidden)),
        ($._executableFile = z.executableFile || null),
        H)
      )
        $.arguments(H);
      if (
        (this._registerCommand($),
        ($.parent = this),
        $.copyInheritedSettings(this),
        Y)
      )
        return this;
      return $;
    }
    createCommand(A) {
      return new KgA(A);
    }
    createHelp() {
      return Object.assign(new s_z(), this.configureHelp());
    }
    configureHelp(A) {
      if (A === void 0) return this._helpConfiguration;
      return ((this._helpConfiguration = A), this);
    }
    configureOutput(A) {
      if (A === void 0) return this._outputConfiguration;
      return (Object.assign(this._outputConfiguration, A), this);
    }
    showHelpAfterError(A = !0) {
      if (typeof A !== "string") A = !!A;
      return ((this._showHelpAfterError = A), this);
    }
    showSuggestionAfterError(A = !0) {
      return ((this._showSuggestionAfterError = !!A), this);
    }
    addCommand(A, q) {
      if (!A._name)
        throw Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
      if (((q = q || {}), q.isDefault)) this._defaultCommandName = A._name;
      if (q.noHelp || q.hidden) A._hidden = !0;
      return (
        this._registerCommand(A),
        (A.parent = this),
        A._checkForBrokenPassThrough(),
        this
      );
    }
    createArgument(A, q) {
      return new a_z(A, q);
    }
    argument(A, q, K, Y) {
      let z = this.createArgument(A, q);
      if (typeof K === "function") z.default(Y).argParser(K);
      else z.default(K);
      return (this.addArgument(z), this);
    }
    arguments(A) {
      return (
        A.trim()
          .split(/ +/)
          .forEach((q) => {
            this.argument(q);
          }),
        this
      );
    }
    addArgument(A) {
      let q = this.registeredArguments.slice(-1)[0];
      if (q && q.variadic)
        throw Error(`only the last argument can be variadic '${q.name()}'`);
      if (A.required && A.defaultValue !== void 0 && A.parseArg === void 0)
        throw Error(
          `a default value for a required argument is never used: '${A.name()}'`,
        );
      return (this.registeredArguments.push(A), this);
    }
    helpCommand(A, q) {
      if (typeof A === "boolean")
        return ((this._addImplicitHelpCommand = A), this);
      A = A ?? "help [command]";
      let [, K, Y] = A.match(/([^ ]+) *(.*)/),
        z = q ?? "display help for command",
        w = this.createCommand(K);
      if ((w.helpOption(!1), Y)) w.arguments(Y);
      if (z) w.description(z);
      return (
        (this._addImplicitHelpCommand = !0),
        (this._helpCommand = w),
        this
      );
    }
    addHelpCommand(A, q) {
      if (typeof A !== "object") return (this.helpCommand(A, q), this);
      return (
        (this._addImplicitHelpCommand = !0),
        (this._helpCommand = A),
        this
      );
    }
    _getHelpCommand() {
      if (
        this._addImplicitHelpCommand ??
        (this.commands.length &&
          !this._actionHandler &&
          !this._findCommand("help"))
      ) {
        if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
        return this._helpCommand;
      }
      return null;
    }
    hook(A, q) {
      let K = ["preSubcommand", "preAction", "postAction"];
      if (!K.includes(A))
        throw Error(`Unexpected value for event passed to hook : '${A}'.
Expecting one of '${K.join("', '")}'`);
      if (this._lifeCycleHooks[A]) this._lifeCycleHooks[A].push(q);
      else this._lifeCycleHooks[A] = [q];
      return this;
    }
    exitOverride(A) {
      if (A) this._exitCallback = A;
      else
        this._exitCallback = (q) => {
          if (q.code !== "commander.executeSubCommandAsync") throw q;
        };
      return this;
    }
    _exit(A, q, K) {
      if (this._exitCallback) this._exitCallback(new qgA(A, q, K));
      AJ.exit(A);
    }
    action(A) {
      let q = (K) => {
        let Y = this.registeredArguments.length,
          z = K.slice(0, Y);
        if (this._storeOptionsAsProperties) z[Y] = this;
        else z[Y] = this.opts();
        return (z.push(this), A.apply(this, z));
      };
      return ((this._actionHandler = q), this);
    }
    createOption(A, q) {
      return new LDq(A, q);
    }
    _callParseArg(A, q, K, Y) {
      try {
        return A.parseArg(q, K);
      } catch (z) {
        if (z.code === "commander.invalidArgument") {
          let w = `${Y} ${z.message}`;
          this.error(w, { exitCode: z.exitCode, code: z.code });
        }
        throw z;
      }
    }
    _registerOption(A) {
      let q =
        (A.short && this._findOption(A.short)) ||
        (A.long && this._findOption(A.long));
      if (q) {
        let K = A.long && this._findOption(A.long) ? A.long : A.short;
        throw Error(`Cannot add option '${A.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${K}'
-  already used by option '${q.flags}'`);
      }
      this.options.push(A);
    }
    _registerCommand(A) {
      let q = (Y) => {
          return [Y.name()].concat(Y.aliases());
        },
        K = q(A).find((Y) => this._findCommand(Y));
      if (K) {
        let Y = q(this._findCommand(K)).join("|"),
          z = q(A).join("|");
        throw Error(`cannot add command '${z}' as already have command '${Y}'`);
      }
      this.commands.push(A);
    }
    addOption(A) {
      this._registerOption(A);
      let q = A.name(),
        K = A.attributeName();
      if (A.negate) {
        let z = A.long.replace(/^--no-/, "--");
        if (!this._findOption(z))
          this.setOptionValueWithSource(
            K,
            A.defaultValue === void 0 ? !0 : A.defaultValue,
            "default",
          );
      } else if (A.defaultValue !== void 0)
        this.setOptionValueWithSource(K, A.defaultValue, "default");
      let Y = (z, w, H) => {
        if (z == null && A.presetArg !== void 0) z = A.presetArg;
        let $ = this.getOptionValue(K);
        if (z !== null && A.parseArg) z = this._callParseArg(A, z, $, w);
        else if (z !== null && A.variadic) z = A._concatValue(z, $);
        if (z == null)
          if (A.negate) z = !1;
          else if (A.isBoolean() || A.optional) z = !0;
          else z = "";
        this.setOptionValueWithSource(K, z, H);
      };
      if (
        (this.on("option:" + q, (z) => {
          let w = `error: option '${A.flags}' argument '${z}' is invalid.`;
          Y(z, w, "cli");
        }),
        A.envVar)
      )
        this.on("optionEnv:" + q, (z) => {
          let w = `error: option '${A.flags}' value '${z}' from env '${A.envVar}' is invalid.`;
          Y(z, w, "env");
        });
      return this;
    }
    _optionEx(A, q, K, Y, z) {
      if (typeof q === "object" && q instanceof LDq)
        throw Error(
          "To add an Option object use addOption() instead of option() or requiredOption()",
        );
      let w = this.createOption(q, K);
      if ((w.makeOptionMandatory(!!A.mandatory), typeof Y === "function"))
        w.default(z).argParser(Y);
      else if (Y instanceof RegExp) {
        let H = Y;
        ((Y = ($, O) => {
          let _ = H.exec($);
          return _ ? _[0] : O;
        }),
          w.default(z).argParser(Y));
      } else w.default(Y);
      return this.addOption(w);
    }
    option(A, q, K, Y) {
      return this._optionEx({}, A, q, K, Y);
    }
    requiredOption(A, q, K, Y) {
      return this._optionEx({ mandatory: !0 }, A, q, K, Y);
    }
    combineFlagAndOptionalValue(A = !0) {
      return ((this._combineFlagAndOptionalValue = !!A), this);
    }
    allowUnknownOption(A = !0) {
      return ((this._allowUnknownOption = !!A), this);
    }
    allowExcessArguments(A = !0) {
      return ((this._allowExcessArguments = !!A), this);
    }
    enablePositionalOptions(A = !0) {
      return ((this._enablePositionalOptions = !!A), this);
    }
    passThroughOptions(A = !0) {
      return (
        (this._passThroughOptions = !!A),
        this._checkForBrokenPassThrough(),
        this
      );
    }
    _checkForBrokenPassThrough() {
      if (
        this.parent &&
        this._passThroughOptions &&
        !this.parent._enablePositionalOptions
      )
        throw Error(
          `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`,
        );
    }
    storeOptionsAsProperties(A = !0) {
      if (this.options.length)
        throw Error("call .storeOptionsAsProperties() before adding options");
      if (Object.keys(this._optionValues).length)
        throw Error(
          "call .storeOptionsAsProperties() before setting option values",
        );
      return ((this._storeOptionsAsProperties = !!A), this);
    }
    getOptionValue(A) {
      if (this._storeOptionsAsProperties) return this[A];
      return this._optionValues[A];
    }
    setOptionValue(A, q) {
      return this.setOptionValueWithSource(A, q, void 0);
    }
    setOptionValueWithSource(A, q, K) {
      if (this._storeOptionsAsProperties) this[A] = q;
      else this._optionValues[A] = q;
      return ((this._optionValueSources[A] = K), this);
    }
    getOptionValueSource(A) {
      return this._optionValueSources[A];
    }
    getOptionValueSourceWithGlobals(A) {
      let q;
      return (
        this._getCommandAndAncestors().forEach((K) => {
          if (K.getOptionValueSource(A) !== void 0)
            q = K.getOptionValueSource(A);
        }),
        q
      );
    }
    _prepareUserArgs(A, q) {
      if (A !== void 0 && !Array.isArray(A))
        throw Error("first parameter to parse must be array or undefined");
      if (((q = q || {}), A === void 0 && q.from === void 0)) {
        if (AJ.versions?.electron) q.from = "electron";
        let Y = AJ.execArgv ?? [];
        if (
          Y.includes("-e") ||
          Y.includes("--eval") ||
          Y.includes("-p") ||
          Y.includes("--print")
        )
          q.from = "eval";
      }
      if (A === void 0) A = AJ.argv;
      this.rawArgs = A.slice();
      let K;
      switch (q.from) {
        case void 0:
        case "node":
          ((this._scriptPath = A[1]), (K = A.slice(2)));
          break;
        case "electron":
          if (AJ.defaultApp) ((this._scriptPath = A[1]), (K = A.slice(2)));
          else K = A.slice(1);
          break;
        case "user":
          K = A.slice(0);
          break;
        case "eval":
          K = A.slice(1);
          break;
        default:
          throw Error(`unexpected parse option { from: '${q.from}' }`);
      }
      if (!this._name && this._scriptPath)
        this.nameFromFilename(this._scriptPath);
      return ((this._name = this._name || "program"), K);
    }
    parse(A, q) {
      let K = this._prepareUserArgs(A, q);
      return (this._parseCommand([], K), this);
    }
    async parseAsync(A, q) {
      let K = this._prepareUserArgs(A, q);
      return (await this._parseCommand([], K), this);
    }
    _executeSubCommand(A, q) {
      q = q.slice();
      let K = !1,
        Y = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
      function z(_, J) {
        let X = $l.resolve(_, J);
        if (AgA.existsSync(X)) return X;
        if (Y.includes($l.extname(J))) return;
        let j = Y.find((D) => AgA.existsSync(`${X}${D}`));
        if (j) return `${X}${j}`;
        return;
      }
      (this._checkForMissingMandatoryOptions(),
        this._checkForConflictingOptions());
      let w = A._executableFile || `${this._name}-${A._name}`,
        H = this._executableDir || "";
      if (this._scriptPath) {
        let _;
        try {
          _ = AgA.realpathSync(this._scriptPath);
        } catch (J) {
          _ = this._scriptPath;
        }
        H = $l.resolve($l.dirname(_), H);
      }
      if (H) {
        let _ = z(H, w);
        if (!_ && !A._executableFile && this._scriptPath) {
          let J = $l.basename(this._scriptPath, $l.extname(this._scriptPath));
          if (J !== this._name) _ = z(H, `${J}-${A._name}`);
        }
        w = _ || w;
      }
      K = Y.includes($l.extname(w));
      let $;
      if (AJ.platform !== "win32")
        if (K)
          (q.unshift(w),
            (q = yDq(AJ.execArgv).concat(q)),
            ($ = eQA.spawn(AJ.argv[0], q, { stdio: "inherit" })));
        else $ = eQA.spawn(w, q, { stdio: "inherit" });
      else
        (q.unshift(w),
          (q = yDq(AJ.execArgv).concat(q)),
          ($ = eQA.spawn(AJ.execPath, q, { stdio: "inherit" })));
      if (!$.killed)
        ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach((J) => {
          AJ.on(J, () => {
            if ($.killed === !1 && $.exitCode === null) $.kill(J);
          });
        });
      let O = this._exitCallback;
      ($.on("close", (_) => {
        if (((_ = _ ?? 1), !O)) AJ.exit(_);
        else O(new qgA(_, "commander.executeSubCommandAsync", "(close)"));
      }),
        $.on("error", (_) => {
          if (_.code === "ENOENT") {
            let J = H
                ? `searched for local subcommand relative to directory '${H}'`
                : "no directory for search for local subcommand, use .executableDir() to supply a custom directory",
              X = `'${w}' does not exist
 - if '${A._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${J}`;
            throw Error(X);
          } else if (_.code === "EACCES") throw Error(`'${w}' not executable`);
          if (!O) AJ.exit(1);
          else {
            let J = new qgA(1, "commander.executeSubCommandAsync", "(error)");
            ((J.nestedError = _), O(J));
          }
        }),
        (this.runningCommand = $));
    }
    _dispatchSubcommand(A, q, K) {
      let Y = this._findCommand(A);
      if (!Y) this.help({ error: !0 });
      let z;
      return (
        (z = this._chainOrCallSubCommandHook(z, Y, "preSubcommand")),
        (z = this._chainOrCall(z, () => {
          if (Y._executableHandler) this._executeSubCommand(Y, q.concat(K));
          else return Y._parseCommand(q, K);
        })),
        z
      );
    }
    _dispatchHelpCommand(A) {
      if (!A) this.help();
      let q = this._findCommand(A);
      if (q && !q._executableHandler) q.help();
      return this._dispatchSubcommand(
        A,
        [],
        [
          this._getHelpOption()?.long ??
            this._getHelpOption()?.short ??
            "--help",
        ],
      );
    }
    _checkNumberOfArguments() {
      if (
        (this.registeredArguments.forEach((A, q) => {
          if (A.required && this.args[q] == null)
            this.missingArgument(A.name());
        }),
        this.registeredArguments.length > 0 &&
          this.registeredArguments[this.registeredArguments.length - 1]
            .variadic)
      )
        return;
      if (this.args.length > this.registeredArguments.length)
        this._excessArguments(this.args);
    }
    _processArguments() {
      let A = (K, Y, z) => {
        let w = Y;
        if (Y !== null && K.parseArg) {
          let H = `error: command-argument value '${Y}' is invalid for argument '${K.name()}'.`;
          w = this._callParseArg(K, Y, z, H);
        }
        return w;
      };
      this._checkNumberOfArguments();
      let q = [];
      (this.registeredArguments.forEach((K, Y) => {
        let z = K.defaultValue;
        if (K.variadic) {
          if (Y < this.args.length) {
            if (((z = this.args.slice(Y)), K.parseArg))
              z = z.reduce((w, H) => {
                return A(K, H, w);
              }, K.defaultValue);
          } else if (z === void 0) z = [];
        } else if (Y < this.args.length) {
          if (((z = this.args[Y]), K.parseArg)) z = A(K, z, K.defaultValue);
        }
        q[Y] = z;
      }),
        (this.processedArgs = q));
    }
    _chainOrCall(A, q) {
      if (A && A.then && typeof A.then === "function") return A.then(() => q());
      return q();
    }
    _chainOrCallHooks(A, q) {
      let K = A,
        Y = [];
      if (
        (this._getCommandAndAncestors()
          .reverse()
          .filter((z) => z._lifeCycleHooks[q] !== void 0)
          .forEach((z) => {
            z._lifeCycleHooks[q].forEach((w) => {
              Y.push({ hookedCommand: z, callback: w });
            });
          }),
        q === "postAction")
      )
        Y.reverse();
      return (
        Y.forEach((z) => {
          K = this._chainOrCall(K, () => {
            return z.callback(z.hookedCommand, this);
          });
        }),
        K
      );
    }
    _chainOrCallSubCommandHook(A, q, K) {
      let Y = A;
      if (this._lifeCycleHooks[K] !== void 0)
        this._lifeCycleHooks[K].forEach((z) => {
          Y = this._chainOrCall(Y, () => {
            return z(this, q);
          });
        });
      return Y;
    }
    _parseCommand(A, q) {
      let K = this.parseOptions(q);
      if (
        (this._parseOptionsEnv(),
        this._parseOptionsImplied(),
        (A = A.concat(K.operands)),
        (q = K.unknown),
        (this.args = A.concat(q)),
        A && this._findCommand(A[0]))
      )
        return this._dispatchSubcommand(A[0], A.slice(1), q);
      if (this._getHelpCommand() && A[0] === this._getHelpCommand().name())
        return this._dispatchHelpCommand(A[1]);
      if (this._defaultCommandName)
        return (
          this._outputHelpIfRequested(q),
          this._dispatchSubcommand(this._defaultCommandName, A, q)
        );
      if (
        this.commands.length &&
        this.args.length === 0 &&
        !this._actionHandler &&
        !this._defaultCommandName
      )
        this.help({ error: !0 });
      (this._outputHelpIfRequested(K.unknown),
        this._checkForMissingMandatoryOptions(),
        this._checkForConflictingOptions());
      let Y = () => {
          if (K.unknown.length > 0) this.unknownOption(K.unknown[0]);
        },
        z = `command:${this.name()}`;
      if (this._actionHandler) {
        (Y(), this._processArguments());
        let w;
        if (
          ((w = this._chainOrCallHooks(w, "preAction")),
          (w = this._chainOrCall(w, () =>
            this._actionHandler(this.processedArgs),
          )),
          this.parent)
        )
          w = this._chainOrCall(w, () => {
            this.parent.emit(z, A, q);
          });
        return ((w = this._chainOrCallHooks(w, "postAction")), w);
      }
      if (this.parent && this.parent.listenerCount(z))
        (Y(), this._processArguments(), this.parent.emit(z, A, q));
      else if (A.length) {
        if (this._findCommand("*")) return this._dispatchSubcommand("*", A, q);
        if (this.listenerCount("command:*")) this.emit("command:*", A, q);
        else if (this.commands.length) this.unknownCommand();
        else (Y(), this._processArguments());
      } else if (this.commands.length) (Y(), this.help({ error: !0 }));
      else (Y(), this._processArguments());
    }
    _findCommand(A) {
      if (!A) return;
      return this.commands.find((q) => q._name === A || q._aliases.includes(A));
    }
    _findOption(A) {
      return this.options.find((q) => q.is(A));
    }
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach((A) => {
        A.options.forEach((q) => {
          if (q.mandatory && A.getOptionValue(q.attributeName()) === void 0)
            A.missingMandatoryOptionValue(q);
        });
      });
    }
    _checkForConflictingLocalOptions() {
      let A = this.options.filter((K) => {
        let Y = K.attributeName();
        if (this.getOptionValue(Y) === void 0) return !1;
        return this.getOptionValueSource(Y) !== "default";
      });
      A.filter((K) => K.conflictsWith.length > 0).forEach((K) => {
        let Y = A.find((z) => K.conflictsWith.includes(z.attributeName()));
        if (Y) this._conflictingOption(K, Y);
      });
    }
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach((A) => {
        A._checkForConflictingLocalOptions();
      });
    }
    parseOptions(A) {
      let q = [],
        K = [],
        Y = q,
        z = A.slice();
      function w($) {
        return $.length > 1 && $[0] === "-";
      }
      let H = null;
      while (z.length) {
        let $ = z.shift();
        if ($ === "--") {
          if (Y === K) Y.push($);
          Y.push(...z);
          break;
        }
        if (H && !w($)) {
          this.emit(`option:${H.name()}`, $);
          continue;
        }
        if (((H = null), w($))) {
          let O = this._findOption($);
          if (O) {
            if (O.required) {
              let _ = z.shift();
              if (_ === void 0) this.optionMissingArgument(O);
              this.emit(`option:${O.name()}`, _);
            } else if (O.optional) {
              let _ = null;
              if (z.length > 0 && !w(z[0])) _ = z.shift();
              this.emit(`option:${O.name()}`, _);
            } else this.emit(`option:${O.name()}`);
            H = O.variadic ? O : null;
            continue;
          }
        }
        if ($.length > 2 && $[0] === "-" && $[1] !== "-") {
          let O = this._findOption(`-${$[1]}`);
          if (O) {
            if (O.required || (O.optional && this._combineFlagAndOptionalValue))
              this.emit(`option:${O.name()}`, $.slice(2));
            else (this.emit(`option:${O.name()}`), z.unshift(`-${$.slice(2)}`));
            continue;
          }
        }
        if (/^--[^=]+=/.test($)) {
          let O = $.indexOf("="),
            _ = this._findOption($.slice(0, O));
          if (_ && (_.required || _.optional)) {
            this.emit(`option:${_.name()}`, $.slice(O + 1));
            continue;
          }
        }
        if (w($)) Y = K;
        if (
          (this._enablePositionalOptions || this._passThroughOptions) &&
          q.length === 0 &&
          K.length === 0
        ) {
          if (this._findCommand($)) {
            if ((q.push($), z.length > 0)) K.push(...z);
            break;
          } else if (
            this._getHelpCommand() &&
            $ === this._getHelpCommand().name()
          ) {
            if ((q.push($), z.length > 0)) q.push(...z);
            break;
          } else if (this._defaultCommandName) {
            if ((K.push($), z.length > 0)) K.push(...z);
            break;
          }
        }
        if (this._passThroughOptions) {
          if ((Y.push($), z.length > 0)) Y.push(...z);
          break;
        }
        Y.push($);
      }
      return { operands: q, unknown: K };
    }
    opts() {
      if (this._storeOptionsAsProperties) {
        let A = {},
          q = this.options.length;
        for (let K = 0; K < q; K++) {
          let Y = this.options[K].attributeName();
          A[Y] = Y === this._versionOptionName ? this._version : this[Y];
        }
        return A;
      }
      return this._optionValues;
    }
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce(
        (A, q) => Object.assign(A, q.opts()),
        {},
      );
    }
    error(A, q) {
      if (
        (this._outputConfiguration.outputError(
          `${A}
`,
          this._outputConfiguration.writeErr,
        ),
        typeof this._showHelpAfterError === "string")
      )
        this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
      else if (this._showHelpAfterError)
        (this._outputConfiguration.writeErr(`
`),
          this.outputHelp({ error: !0 }));
      let K = q || {},
        Y = K.exitCode || 1,
        z = K.code || "commander.error";
      this._exit(Y, z, A);
    }
    _parseOptionsEnv() {
      this.options.forEach((A) => {
        if (A.envVar && A.envVar in AJ.env) {
          let q = A.attributeName();
          if (
            this.getOptionValue(q) === void 0 ||
            ["default", "config", "env"].includes(this.getOptionValueSource(q))
          )
            if (A.required || A.optional)
              this.emit(`optionEnv:${A.name()}`, AJ.env[A.envVar]);
            else this.emit(`optionEnv:${A.name()}`);
        }
      });
    }
    _parseOptionsImplied() {
      let A = new t_z(this.options),
        q = (K) => {
          return (
            this.getOptionValue(K) !== void 0 &&
            !["default", "implied"].includes(this.getOptionValueSource(K))
          );
        };
      this.options
        .filter(
          (K) =>
            K.implied !== void 0 &&
            q(K.attributeName()) &&
            A.valueFromOption(this.getOptionValue(K.attributeName()), K),
        )
        .forEach((K) => {
          Object.keys(K.implied)
            .filter((Y) => !q(Y))
            .forEach((Y) => {
              this.setOptionValueWithSource(Y, K.implied[Y], "implied");
            });
        });
    }
    missingArgument(A) {
      let q = `error: missing required argument '${A}'`;
      this.error(q, { code: "commander.missingArgument" });
    }
    optionMissingArgument(A) {
      let q = `error: option '${A.flags}' argument missing`;
      this.error(q, { code: "commander.optionMissingArgument" });
    }
    missingMandatoryOptionValue(A) {
      let q = `error: required option '${A.flags}' not specified`;
      this.error(q, { code: "commander.missingMandatoryOptionValue" });
    }
    _conflictingOption(A, q) {
      let K = (w) => {
          let H = w.attributeName(),
            $ = this.getOptionValue(H),
            O = this.options.find((J) => J.negate && H === J.attributeName()),
            _ = this.options.find((J) => !J.negate && H === J.attributeName());
          if (
            O &&
            ((O.presetArg === void 0 && $ === !1) ||
              (O.presetArg !== void 0 && $ === O.presetArg))
          )
            return O;
          return _ || w;
        },
        Y = (w) => {
          let H = K(w),
            $ = H.attributeName();
          if (this.getOptionValueSource($) === "env")
            return `environment variable '${H.envVar}'`;
          return `option '${H.flags}'`;
        },
        z = `error: ${Y(A)} cannot be used with ${Y(q)}`;
      this.error(z, { code: "commander.conflictingOption" });
    }
    unknownOption(A) {
      if (this._allowUnknownOption) return;
      let q = "";
      if (A.startsWith("--") && this._showSuggestionAfterError) {
        let Y = [],
          z = this;
        do {
          let w = z
            .createHelp()
            .visibleOptions(z)
            .filter((H) => H.long)
            .map((H) => H.long);
          ((Y = Y.concat(w)), (z = z.parent));
        } while (z && !z._enablePositionalOptions);
        q = RDq(A, Y);
      }
      let K = `error: unknown option '${A}'${q}`;
      this.error(K, { code: "commander.unknownOption" });
    }
    _excessArguments(A) {
      if (this._allowExcessArguments) return;
      let q = this.registeredArguments.length,
        K = q === 1 ? "" : "s",
        z = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${q} argument${K} but got ${A.length}.`;
      this.error(z, { code: "commander.excessArguments" });
    }
    unknownCommand() {
      let A = this.args[0],
        q = "";
      if (this._showSuggestionAfterError) {
        let Y = [];
        (this.createHelp()
          .visibleCommands(this)
          .forEach((z) => {
            if ((Y.push(z.name()), z.alias())) Y.push(z.alias());
          }),
          (q = RDq(A, Y)));
      }
      let K = `error: unknown command '${A}'${q}`;
      this.error(K, { code: "commander.unknownCommand" });
    }
    version(A, q, K) {
      if (A === void 0) return this._version;
      ((this._version = A),
        (q = q || "-V, --version"),
        (K = K || "output the version number"));
      let Y = this.createOption(q, K);
      return (
        (this._versionOptionName = Y.attributeName()),
        this._registerOption(Y),
        this.on("option:" + Y.name(), () => {
          (this._outputConfiguration.writeOut(`${A}
`),
            this._exit(0, "commander.version", A));
        }),
        this
      );
    }
    description(A, q) {
      if (A === void 0 && q === void 0) return this._description;
      if (((this._description = A), q)) this._argsDescription = q;
      return this;
    }
    summary(A) {
      if (A === void 0) return this._summary;
      return ((this._summary = A), this);
    }
    alias(A) {
      if (A === void 0) return this._aliases[0];
      let q = this;
      if (
        this.commands.length !== 0 &&
        this.commands[this.commands.length - 1]._executableHandler
      )
        q = this.commands[this.commands.length - 1];
      if (A === q._name)
        throw Error("Command alias can't be the same as its name");
      let K = this.parent?._findCommand(A);
      if (K) {
        let Y = [K.name()].concat(K.aliases()).join("|");
        throw Error(
          `cannot add alias '${A}' to command '${this.name()}' as already have command '${Y}'`,
        );
      }
      return (q._aliases.push(A), this);
    }
    aliases(A) {
      if (A === void 0) return this._aliases;
      return (A.forEach((q) => this.alias(q)), this);
    }
    usage(A) {
      if (A === void 0) {
        if (this._usage) return this._usage;
        let q = this.registeredArguments.map((K) => {
          return o_z(K);
        });
        return []
          .concat(
            this.options.length || this._helpOption !== null ? "[options]" : [],
            this.commands.length ? "[command]" : [],
            this.registeredArguments.length ? q : [],
          )
          .join(" ");
      }
      return ((this._usage = A), this);
    }
    name(A) {
      if (A === void 0) return this._name;
      return ((this._name = A), this);
    }
    nameFromFilename(A) {
      return ((this._name = $l.basename(A, $l.extname(A))), this);
    }
    executableDir(A) {
      if (A === void 0) return this._executableDir;
      return ((this._executableDir = A), this);
    }
    helpInformation(A) {
      let q = this.createHelp();
      if (q.helpWidth === void 0)
        q.helpWidth =
          A && A.error
            ? this._outputConfiguration.getErrHelpWidth()
            : this._outputConfiguration.getOutHelpWidth();
      return q.formatHelp(this, q);
    }
    _getHelpContext(A) {
      A = A || {};
      let q = { error: !!A.error },
        K;
      if (q.error) K = (Y) => this._outputConfiguration.writeErr(Y);
      else K = (Y) => this._outputConfiguration.writeOut(Y);
      return ((q.write = A.write || K), (q.command = this), q);
    }
    outputHelp(A) {
      let q;
      if (typeof A === "function") ((q = A), (A = void 0));
      let K = this._getHelpContext(A);
      (this._getCommandAndAncestors()
        .reverse()
        .forEach((z) => z.emit("beforeAllHelp", K)),
        this.emit("beforeHelp", K));
      let Y = this.helpInformation(K);
      if (q) {
        if (((Y = q(Y)), typeof Y !== "string" && !Buffer.isBuffer(Y)))
          throw Error("outputHelp callback must return a string or a Buffer");
      }
      if ((K.write(Y), this._getHelpOption()?.long))
        this.emit(this._getHelpOption().long);
      (this.emit("afterHelp", K),
        this._getCommandAndAncestors().forEach((z) =>
          z.emit("afterAllHelp", K),
        ));
    }
    helpOption(A, q) {
      if (typeof A === "boolean") {
        if (A) this._helpOption = this._helpOption ?? void 0;
        else this._helpOption = null;
        return this;
      }
      return (
        (A = A ?? "-h, --help"),
        (q = q ?? "display help for command"),
        (this._helpOption = this.createOption(A, q)),
        this
      );
    }
    _getHelpOption() {
      if (this._helpOption === void 0) this.helpOption(void 0, void 0);
      return this._helpOption;
    }
    addHelpOption(A) {
      return ((this._helpOption = A), this);
    }
    help(A) {
      this.outputHelp(A);
      let q = AJ.exitCode || 0;
      if (q === 0 && A && typeof A !== "function" && A.error) q = 1;
      this._exit(q, "commander.help", "(outputHelp)");
    }
    addHelpText(A, q) {
      let K = ["beforeAll", "before", "after", "afterAll"];
      if (!K.includes(A))
        throw Error(`Unexpected value for position to addHelpText.
Expecting one of '${K.join("', '")}'`);
      let Y = `${A}Help`;
      return (
        this.on(Y, (z) => {
          let w;
          if (typeof q === "function")
            w = q({ error: z.error, command: z.command });
          else w = q;
          if (w)
            z.write(`${w}
`);
        }),
        this
      );
    }
    _outputHelpIfRequested(A) {
      let q = this._getHelpOption();
      if (q && A.find((Y) => q.is(Y)))
        (this.outputHelp(),
          this._exit(0, "commander.helpDisplayed", "(outputHelp)"));
    }
  }
  function yDq(A) {
    return A.map((q) => {
      if (!q.startsWith("--inspect")) return q;
      let K,
        Y = "127.0.0.1",
        z = "9229",
        w;
      if ((w = q.match(/^(--inspect(-brk)?)$/)) !== null) K = w[1];
      else if ((w = q.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null)
        if (((K = w[1]), /^\d+$/.test(w[3]))) z = w[3];
        else Y = w[3];
      else if (
        (w = q.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null
      )
        ((K = w[1]), (Y = w[3]), (z = w[4]));
      if (K && z !== "0") return `${K}=${Y}:${parseInt(z) + 1}`;
      return q;
    });
  }
  e_z.Command = KgA;
