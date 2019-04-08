const checkNumber = require('./checkNumber');
const PI = Math.PI;
var readline = require('readline')

module.exports = function areaOfCylinder(r, h) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt("[원기둥 넓이]반지름, 높이를 순서대로 입력하세요. (구분은 ,로 한다.): ");
    rl.prompt();
    rl.on("line", (input) => {
        var inputArray = input.split(',')
        checkNumber(inputArray, 2)
        const r = Number(inputArray[0]);
        const h = Number(inputArray[1]);
        area = (2 * PI * r * h) + (2 * PI * r ** 2);
        console.log(area.toFixed(2))
        rl.close();
    });
 }