// Module: m_1 (cjs)
// Dependencies: [RY, Tr]
// Exports: map
// Lines: 117070-117085 in cli.formatted.js
// ---

  var dO5 = RY(),
    La8 = Tr(),
    cO5 = {
      collection: "map",
      default: !0,
      nodeClass: La8.YAMLMap,
      tag: "tag:yaml.org,2002:map",
      resolve(A, q) {
        if (!dO5.isMap(A)) q("Expected a mapping for this tag");
        return A;
      },
      createNode: (A, q, K) => La8.YAMLMap.from(A, q, K),
    };
  lO5.map = cO5;
