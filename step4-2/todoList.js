/*

프로그램 요구사항
1. 함수 분리
2. id는 unique한 랜덤값
3. prompt는 반복 실행
4. add, delete, update 함수가 실행된 후 'show$all' 을 실행해 현재상태 출력
5. Update의 경우, 3초 delay 후 결과 출력
6. 정규표현식 활용

*/

const todos = require('./todosData');
const utils = require('./utils');
const readline = require('readline');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.setPrompt('명령하세요 : ');
r.prompt();
r.on('line', function (line) {
    if (line === 'q') {
        console.log("종료합니다.")
        r.close();
    }
    application(line);
});
r.on('close', function () {
    process.exit();
});

function application(line) {
    const showAll = function () {
        
    }

    const showEachData = function (order) {
        
    }

    const addData = function (order) {
        
    }

    const deleteData = function (order) {
        
    }

    const updateData = function (order) {
        
    }

    if (line === 'show$all') showAll();
    else if (line.slice(0, 4) === 'show') showEachData(line);
    else if (line.slice(0, 3) === 'add') addData(line);
    else if (line.slice(0, 6) === 'delete') deleteData(line);
    else if (line.slice(0, 6) === 'update') updateData(line);
    else {
        console.log("없는 명령어입니다.")
        r.prompt();
    }
}