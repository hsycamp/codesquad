const checkArgNum = require('./checkArgNum');
const PI = Math.PI;
let sum = 0

module.exports.areaOfCircle = (radius) => {
    area = PI * radius ** 2;
    return area.toFixed(2)
}

module.exports.sumOfAreaOfCircle = (args) => {
    const start = args[0]
    const end = args[1]
    if (start > end) {
        console.log(sum);
        // return sum;   // sum 값을 consolo.log()로는 출력이되는데 return 을 하면 undefiend라고 나옵니다. 이유를 모르겠습니다..
    } else {
        sum += Number(this.areaOfCircle(end));
        this.sumOfAreaOfCircle([start, end - 1])
    }
}

module.exports.areaOfSquare = (args) => {
    const argNum = 2;
    checkArgNum(argNum, args);
    const w = args[0];
    const h = args[1];
    area = w * h;
    return area.toFixed(2)
}

module.exports.areaOfTrapezoid = (args) => {
    const argNum = 3;
    checkArgNum(argNum, args);
    const dw = args[0];
    const uw = args[1];
    const h = args[2];
    area = (dw + uw) * h / 2;
    return area.toFixed(2)
}