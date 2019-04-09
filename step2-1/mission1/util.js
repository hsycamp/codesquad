(function callModuleChecker() {
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

// 함수 분리
function checkNumber(value) {
    return (typeof value === "undefined" || typeof value === "string");
}

// Error message가 뜬 위치에 breakpoints를 찍고 watch 목록에 관찰하고자 하는 항목을 추가한다.
// Conditional Breakpoints의 경우 i = 5 와 같은 방식으로 조건문을 입력해주면
// step over과정을 거치지 않고 바로 해당 값을 확인할 수 있다.
module.exports = function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (checkNumber(arr[i])) {
            continue; }
        result += arr[i];
    }

    return result;
}
// VSCode코드 자동 정렬 단축키 : shift + option + f
