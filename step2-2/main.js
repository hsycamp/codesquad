var readline = require('readline');
const myModule = require('./module/areaPolygon');
var callStack = [];

function printExecutionSequence() {
     return callStack;
}

function checkNumber(args) {
     for (let i = 0; i < args.length; i++) {
          try {
               if (!Number(args[i])) {
                    throw new Error('숫자만 입력하세요.');
               }
          } catch (e) {
               console.log(e.name + ': ' + e.message);
               process.exit();
          }
     }
}

function getArea() {

     const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     });
     rl.setPrompt("넓이를 구하고자 하는 도형의 종류와 인자값을 입력하세요. ( 도형종류 : [circle,rect,trapezoid] )");
     rl.prompt();
     rl.on("line", (input) => {
          var inputArray = input.split(',')
          polygon = inputArray.shift();
          args = inputArray;
          args.forEach(function (element, index, array) {
               array[index] = Number(element)
          });
          checkNumber(args);
          rl.close();
          if (polygon === 'circle') {
               if (args.length === 1) {
                    console.log(myModule.areaOfCircle(args));
                    callStack.push("circle")
               } else if (args.length === 2) {
                    myModule.sumOfAreaOfCircle(args);
                    callStack.push("circle")
               } else {
                    try {
                         throw new Error('인자 갯수를 확인해주세요.')
                    } catch (e) {
                         console.log(e.name + ': ' + e.message);
                         process.exit();
                    }
               }
          } else if (polygon === 'rect') {
               console.log(myModule.areaOfSquare(args));
               callStack.push("rect")
          } else if (polygon === 'trapezoid') {
               console.log(myModule.areaOfTrapezoid(args));
               callStack.push("trapezoid")
          } else {
               console.log("선택지에 없는 값입니다.")
               process.exit();
          }
          console.log(printExecutionSequence());
     });
}
getArea();
// 피드백 반영(모듈 재구성)[o]
// getArea 함수 구현(모든 넓이 값을 얻을 수 있음)[o]