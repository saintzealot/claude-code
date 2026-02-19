// Module: CYq (cjs)
// Dependencies: [DBA]
// Exports: render, renderToFile
// Lines: 483107-483118 in cli.formatted.js
// ---

  var $qz = DBA();
  Oqz.render = $qz.render;
  Oqz.renderToFile = function (q, K, Y, z) {
    if (typeof z > "u") ((z = Y), (Y = void 0));
    let w = h1("fs"),
      $ =
        '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        Oqz.render(K, Y);
    w.writeFile(q, $, z);
  };
