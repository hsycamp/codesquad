const TodoUtil = function() {};
TodoUtil.prototype = {
  parseCommand(command) {
    if (!/\$/.test(command)) throw Error("DollarCharError");
    return command.split("$");
  },
  getKeyCommand(command) {
    const KeyMap = {
      show: "showData",
      add: "addData",
      delete: "deleteData",
      update: "updateData",
      undo: "undoData",
      redo: "redoData"
    };
    const keyCommand = command.shift();
    return KeyMap[keyCommand];
  },
  checkArgsNumber(keyCommand, restCommand) {
    const argsNumber = {
      showData: 1,
      addData: 2,
      deleteData: 1,
      updateData: 2,
      undoData: 1,
      redoData: 1
    };
    if (argsNumber[keyCommand] !== restCommand.length) throw Error("MaxArgsNumberError");
  }
};
module.exports = TodoUtil;