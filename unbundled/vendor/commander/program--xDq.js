// Module: xDq (cjs)
// Dependencies: [ql1, qE6, sQA, tQA, CDq]
// Exports: program, createCommand, createOption, createArgument, Command, Option, Argument, Help, CommanderError, InvalidArgumentError, InvalidOptionArgumentError
// Lines: 529867-529884 in cli.formatted.js
// ---

  var { Argument: SDq } = qE6(),
    { Command: YgA } = CDq(),
    { CommanderError: qJz, InvalidArgumentError: hDq } = ql1(),
    { Help: KJz } = sQA(),
    { Option: IDq } = tQA();
  YJz.program = new YgA();
  YJz.createCommand = (A) => new YgA(A);
  YJz.createOption = (A, q) => new IDq(A, q);
  YJz.createArgument = (A, q) => new SDq(A, q);
  YJz.Command = YgA;
  YJz.Option = IDq;
  YJz.Argument = SDq;
  YJz.Help = KJz;
  YJz.CommanderError = qJz;
  YJz.InvalidArgumentError = hDq;
  YJz.InvalidOptionArgumentError = hDq;
