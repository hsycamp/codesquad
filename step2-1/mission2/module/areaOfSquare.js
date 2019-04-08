const checkNumber = require('./checkNumber');
var readline = require('readline')

module.exports = function areaOfSquare() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt("[사각형의넓이]가로길이, 세로길이를 입력하세요. (구분은 ,로 한다.): ");
    rl.prompt();
    rl.on("line", (input) => {
        var inputArray = input.split(',')
        checkNumber(inputArray, 2)
        const w = Number(inputArray[0]);
        const h = Number(inputArray[1]);
        area = w * h;
        console.log(area.toFixed(2))
        rl.close();
    });
 }