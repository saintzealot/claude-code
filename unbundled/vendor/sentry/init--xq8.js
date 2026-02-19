// Module: xq8 (cjs)
// Dependencies: [th6, Cq8]
// Exports: init, log, formatArgs, save, load, useColors, destroy, colors, inspectOpts
// Lines: 18364-18477 in cli.formatted.js
// ---

  var lKK = h1("tty"),
    ta1 = h1("util");
  hq8.init = tKK;
  hq8.log = aKK;
  hq8.formatArgs = nKK;
  hq8.save = oKK;
  hq8.load = sKK;
  hq8.useColors = iKK;
  hq8.destroy = ta1.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  hq8.colors = [6, 2, 3, 4, 5, 1];
  try {
    let A = Cq8();
    if (A && (A.stderr || A).level >= 2)
      hq8.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ];
  } catch (A) {}
  hq8.inspectOpts = Object.keys(process.env)
    .filter((A) => {
      return /^debug_/i.test(A);
    })
    .reduce((A, q) => {
      let K = q
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (z, w) => {
            return w.toUpperCase();
          }),
        Y = process.env[q];
      if (/^(yes|on|true|enabled)$/i.test(Y)) Y = !0;
      else if (/^(no|off|false|disabled)$/i.test(Y)) Y = !1;
      else if (Y === "null") Y = null;
      else Y = Number(Y);
      return ((A[K] = Y), A);
    }, {});
  function iKK() {
    return "colors" in hq8.inspectOpts
      ? Boolean(hq8.inspectOpts.colors)
      : lKK.isatty(process.stderr.fd);
  }
  function nKK(A) {
    let { namespace: q, useColors: K } = this;
    if (K) {
      let Y = this.color,
        z = "\x1B[3" + (Y < 8 ? Y : "8;5;" + Y),
        w = `  ${z};1m${q} \x1B[0m`;
      ((A[0] =
        w +
        A[0]
          .split(
            `
`,
          )
          .join(
            `
` + w,
          )),
        A.push(z + "m+" + ea1.exports.humanize(this.diff) + "\x1B[0m"));
    } else A[0] = rKK() + q + " " + A[0];
  }
  function rKK() {
    if (hq8.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " ";
  }
  function aKK(...A) {
    return process.stderr.write(
      ta1.formatWithOptions(hq8.inspectOpts, ...A) +
        `
`,
    );
  }
  function oKK(A) {
    if (A) process.env.DEBUG = A;
    else delete process.env.DEBUG;
  }
  function sKK() {
    return process.env.DEBUG;
  }
  function tKK(A) {
    A.inspectOpts = {};
    let q = Object.keys(hq8.inspectOpts);
    for (let K = 0; K < q.length; K++)
      A.inspectOpts[q[K]] = hq8.inspectOpts[q[K]];
  }
  ea1.exports = th6()(hq8);
  var { formatters: Sq8 } = ea1.exports;
  Sq8.o = function (A) {
    return (
      (this.inspectOpts.colors = this.useColors),
      ta1
        .inspect(A, this.inspectOpts)
        .split(
          `
`,
        )
        .map((q) => q.trim())
        .join(" ")
    );
  };
  Sq8.O = function (A) {
    return (
      (this.inspectOpts.colors = this.useColors),
      ta1.inspect(A, this.inspectOpts)
    );
  };
