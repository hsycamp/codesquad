const checkNumber = require('./checkNumber');
var readline = require('readline')

module.exports = function areaOfTrapezoid(dw, uw, h) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt("[사다리꼴 넓이]밑변길이, 윗변길이, 높이를 순서대로 입력하세요. (구분은 ,로 한다.): ");
    rl.prompt();
    rl.on("line", (input) => {
        var inputArray = input.split(',')
        checkNumber(inputArray, 3)
        const dw = Number(inputArray[0]);
        const uw = Number(inputArray[1]);
        const h = Number(inputArray[2]);
        area = (dw + uw) * h / 2;
        console.log(area.toFixed(2))
        rl.close();
    });
 }