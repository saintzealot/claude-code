// Module: f14 (cjs)
// Lines: 284911-284993 in cli.formatted.js
// ---

  function aB9(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function oB9(...A) {
    return A.map((K) => aB9(K)).join("");
  }
  function sB9(A) {
    let q = {},
      K = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", { begin: /:-/, contains: [q] }],
      };
    Object.assign(q, {
      className: "variable",
      variants: [
        { begin: oB9(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") },
        K,
      ],
    });
    let Y = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [A.BACKSLASH_ESCAPE],
      },
      z = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            A.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string",
            }),
          ],
        },
      },
      w = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [A.BACKSLASH_ESCAPE, q, Y],
      };
    Y.contains.push(w);
    let H = { className: "", begin: /\\"/ },
      $ = { className: "string", begin: /'/, end: /'/ },
      O = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [
          { begin: /\d+#[0-9a-f]+/, className: "number" },
          A.NUMBER_MODE,
          q,
        ],
      },
      _ = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
      J = A.SHEBANG({ binary: `(${_.join("|")})`, relevance: 10 }),
      X = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [A.inherit(A.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      };
    return {
      name: "Bash",
      aliases: ["sh", "zsh"],
      keywords: {
        $pattern: /\b[a-z._-]+\b/,
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in:
          "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      },
      contains: [J, A.SHEBANG(), X, O, A.HASH_COMMENT_MODE, z, w, H, $, q],
    };
  }
  Z14.exports = sB9;
