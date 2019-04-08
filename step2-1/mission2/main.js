var readline = require('readline')
const myModule = require('./module');

function userInput() {
   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });
   rl.setPrompt("숫자를 입력해주세요.(1:원의 넓이, 2: 사각형 넓이, 3: 사다리꼴 넓이, 4:원기둥 넓이) ");
   rl.prompt();
   rl.on("line", (input) => {
       input = Number(input);
       rl.close();
       if (input === 1) {
            myModule.areaOfCircle();
       } else if (input === 2) {
            myModule.areaOfSquare();
       } else if (input === 3) {
            myModule.areaOfTrapezoid();
       } else if (input === 4) {
            myModule.areaOfCylinder();
       } else {
           console.log("선택지에 없는 값입니다.")
           process.exit();
       }
       rl.close();
   });
}
userInput();