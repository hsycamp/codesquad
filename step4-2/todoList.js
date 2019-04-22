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
        const theNumOf = status => todos.filter((el) => el['status'] === status).length;
        console.log(`현재상태 : todo ${theNumOf('todo')}개, doing ${theNumOf('doing')}개, done ${theNumOf('done')}개`);
        r.prompt();
    }

    const showEachData = function (order) {
        const status = order.match(/(?<=show\$)(todo|doing|done)$/);
        if (!utils.isValidStatus(status)) return r.prompt();

        const nameAndIdArr = todos
            .filter((el) => el['status'] === status[0])
            .map((el) => [el['name'], el['id'] + '번']);
        console.log(`${status[0]}리스트 총 ${nameAndIdArr.length}건 : '${nameAndIdArr.join('\' \'')}'`);
        r.prompt();
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