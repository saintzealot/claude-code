// Module: fYq (cjs)
// Dependencies: [GYq, nd1]
// Exports: render, renderToDataURL, renderToBuffer, renderToFile, renderToFileStream
// Lines: 482862-482908 in cli.formatted.js
// ---

  var x4z = h1("fs"),
    b4z = GYq().PNG,
    JBA = nd1();
  u4z.render = function (q, K) {
    let Y = JBA.getOptions(K),
      z = Y.rendererOpts,
      w = JBA.getImageWidth(q.modules.size, Y);
    ((z.width = w), (z.height = w));
    let H = new b4z(z);
    return (JBA.qrToImageData(H.data, q, Y), H);
  };
  u4z.renderToDataURL = function (q, K, Y) {
    if (typeof Y > "u") ((Y = K), (K = void 0));
    u4z.renderToBuffer(q, K, function (z, w) {
      if (z) Y(z);
      let H = "data:image/png;base64,";
      ((H += w.toString("base64")), Y(null, H));
    });
  };
  u4z.renderToBuffer = function (q, K, Y) {
    if (typeof Y > "u") ((Y = K), (K = void 0));
    let z = u4z.render(q, K),
      w = [];
    (z.on("error", Y),
      z.on("data", function (H) {
        w.push(H);
      }),
      z.on("end", function () {
        Y(null, Buffer.concat(w));
      }),
      z.pack());
  };
  u4z.renderToFile = function (q, K, Y, z) {
    if (typeof z > "u") ((z = Y), (Y = void 0));
    let w = !1,
      H = (...O) => {
        if (w) return;
        ((w = !0), z.apply(null, O));
      },
      $ = x4z.createWriteStream(q);
    ($.on("error", H), $.on("close", H), u4z.renderToFileStream($, K, Y));
  };
  u4z.renderToFileStream = function (q, K, Y) {
    u4z.render(K, Y).pack().pipe(q);
  };
