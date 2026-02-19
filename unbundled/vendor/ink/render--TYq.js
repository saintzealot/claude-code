// Module: TYq (cjs)
// Exports: render
// Lines: 482957-482989 in cli.formatted.js
// ---

  i4z.render = function (A, q, K) {
    let Y = A.modules.size,
      z = A.modules.data,
      w = "\x1B[40m  \x1B[0m",
      H = "\x1B[47m  \x1B[0m",
      $ = "",
      O = Array(Y + 3).join("\x1B[47m  \x1B[0m"),
      _ = Array(2).join("\x1B[47m  \x1B[0m");
    $ +=
      O +
      `
`;
    for (let J = 0; J < Y; ++J) {
      $ += "\x1B[47m  \x1B[0m";
      for (let X = 0; X < Y; X++)
        $ += z[J * Y + X] ? "\x1B[40m  \x1B[0m" : "\x1B[47m  \x1B[0m";
      $ +=
        _ +
        `
`;
    }
    if (
      (($ +=
        O +
        `
`),
      typeof K === "function")
    )
      K(null, $);
    return $;
  };
