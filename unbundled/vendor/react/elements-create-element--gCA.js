// Module: gCA (cjs)
// Dependencies: [o_, rG1, MZ6, BCA]
// Exports: elements, createElement
// Lines: 415571-415697 in cli.formatted.js
// ---

  var wn4 = rG1(),
    nuY = BCA(),
    ruY = o_(),
    auY = MZ6(),
    ouY = (suY.elements = {}),
    Hn4 = Object.create(null);
  suY.createElement = function (A, q, K) {
    var Y = Hn4[q] || QCA;
    return new Y(A, q, K);
  };
  function FCA(A) {
    return nuY(A, QCA, ouY, Hn4);
  }
  var QCA = FCA({
    superclass: wn4,
    name: "SVGElement",
    ctor: function (q, K, Y) {
      wn4.call(this, q, K, ruY.NAMESPACE.SVG, Y);
    },
    props: {
      style: {
        get: function () {
          if (!this._style) this._style = new auY(this);
          return this._style;
        },
      },
    },
  });
  FCA({
    name: "SVGSVGElement",
    ctor: function (q, K, Y) {
      QCA.call(this, q, K, Y);
    },
    tag: "svg",
    props: {
      createSVGRect: {
        value: function () {
          return suY.createElement(this.ownerDocument, "rect", null);
        },
      },
    },
  });
  FCA({
    tags: [
      "a",
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "script",
      "set",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textPath",
      "title",
      "tref",
      "tspan",
      "use",
      "view",
      "vkern",
    ],
  });
