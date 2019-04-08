module.exports = function checkNumber(inputArray, argNum) {
    try {
        for (let i = 0; i < inputArray.length; i++) {
            if (!Number(inputArray[i])) {
                throw new Error('숫자만 입력하세요.');
            }
            else if (inputArray.length != argNum) {
                throw new Error('인자 갯수를 확인해주세요.')
            }
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
        process.exit();
    }
 
 }