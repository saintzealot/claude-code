// Module: uDq (cjs)
// Dependencies: [xDq]
// Exports: program, Argument, Command, CommanderError, Help, InvalidArgumentError, InvalidOptionArgumentError, Option, createCommand, createOption, createArgument
// Lines: 529885-529899 in cli.formatted.js
// ---

  var Zx = xDq();
  rE = bDq.exports = {};
  rE.program = new Zx.Command();
  rE.Argument = Zx.Argument;
  rE.Command = Zx.Command;
  rE.CommanderError = Zx.CommanderError;
  rE.Help = Zx.Help;
  rE.InvalidArgumentError = Zx.InvalidArgumentError;
  rE.InvalidOptionArgumentError = Zx.InvalidArgumentError;
  rE.Option = Zx.Option;
  rE.createCommand = (A) => new Zx.Command(A);
  rE.createOption = (A, q) => new Zx.Option(A, q);
  rE.createArgument = (A, q) => new Zx.Argument(A, q);
