// Module: hYq (cjs)
// Dependencies: [nd1]
// Exports: render, renderToDataURL
// Lines: 483119-483160 in cli.formatted.js
// ---

  var MBA = nd1();
  function Jqz(A, q, K) {
    if ((A.clearRect(0, 0, q.width, q.height), !q.style)) q.style = {};
    ((q.height = K),
      (q.width = K),
      (q.style.height = K + "px"),
      (q.style.width = K + "px"));
  }
  function Xqz() {
    try {
      return document.createElement("canvas");
    } catch (A) {
      throw Error("You need to specify a canvas element");
    }
  }
  jqz.render = function (q, K, Y) {
    let z = Y,
      w = K;
    if (typeof z > "u" && (!K || !K.getContext)) ((z = K), (K = void 0));
    if (!K) w = Xqz();
    z = MBA.getOptions(z);
    let H = MBA.getImageWidth(q.modules.size, z),
      $ = w.getContext("2d"),
      O = $.createImageData(H, H);
    return (
      MBA.qrToImageData(O.data, q, z),
      Jqz($, w, H),
      $.putImageData(O, 0, 0),
      w
    );
  };
  jqz.renderToDataURL = function (q, K, Y) {
    let z = Y;
    if (typeof z > "u" && (!K || !K.getContext)) ((z = K), (K = void 0));
    if (!z) z = {};
    let w = jqz.render(q, K, z),
      H = z.type || "image/png",
      $ = z.rendererOpts || {};
    return w.toDataURL(H, $.quality);
  };
