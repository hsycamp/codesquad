const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const TodoUtil = require("./todo_util");
const Model = require("./model");
const View = require("./view");
const Controller = require("./controller");
const ErrorHandler = require("./errorhandler");
const constants = require("./constant_values");
const initialData = [];

const util = new TodoUtil();
const model = new Model(initialData, constants.MAX_HISTORY_CAPACITY);
const view = new View(constants.fontColorBlue);
const controller = new Controller(model, view, constants.UPDATE_DELAY, constants.SHOW_DELAY);
const errorHandler = new ErrorHandler(controller, constants.fontColorRed, constants.ID_LENGTH);

const app = {
  util: util,
  controller: controller,
  errorHandler: errorHandler,
  start() {
    rl.setPrompt('명령하세요(종료하려면 "q"를 입력하세요) : ');
    rl.prompt();
    rl.on("line", async command => {
      if (command === "q") rl.close();
      try {
        command = this.util.parseCommand(command);
        const keyCommand = this.util.getKeyCommand(command);
        const restCommand = command;
        this.util.checkArgsNumber(keyCommand, restCommand);
        await this.controller[keyCommand](...restCommand);
      } catch (e) {
        this.errorHandler.printErrorMessage(e.message);
      } finally {
        rl.prompt();
      }
    });
    rl.on("close", () => {
      process.exit();
    });
  }
};

app.start();
