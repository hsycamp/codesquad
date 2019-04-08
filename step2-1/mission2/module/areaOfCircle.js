const PI = Math.PI;
var readline = require('readline')

module.exports = function areaOfCircle() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt("[원의넓이]반지름을 입력하세요. ");
    rl.prompt();
    rl.on("line", (input) => {
        try {
            if (!Number(input)) {
                throw new Error('숫자만 입력하세요.');
            } else {
                r = Number(input);
                area = PI * r ** 2;
                console.log(area.toFixed(2))
            }
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
        rl.close();
    });
 }