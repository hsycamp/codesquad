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

function show(order) {
    // console.log(todos)
    const countNum = { 'todo': 0, 'doing': 0, 'done': 0 };
    const statusList = todos.reduce((acc, cur) => {
        if (cur['status'] === order) { acc.push(cur['name'], cur['id'] + '번') };
        countNum[cur['status']]++;
        return acc;
    }, [])

    if (order === 'all') {
        console.log(`현재상태 : todo ${countNum['todo']}개, doing ${countNum['doing']}개, done ${countNum['done']}개`);
    } else {
        console.log(`${order}리스트 : 총 ${statusList.length / 2}건 ${statusList.join(', ')}`);
    }
    rl.prompt();

}

function addfunc(name, tags) {
    var id = Math.floor(Math.random() * 1000000) + 1;
    todos.push({ 'name': name, 'tags': tags, 'status': 'todo', 'id': id });
    console.log(`${name} 1개가 추가 되었습니다. (id : ${id})`)
    setTimeout(() => {
        show('all')
    }, 1000);
}

function deletefunc(id) {
    var isExistId = false;
    todos.forEach(function (item, index) {
        if (item['id'] === id) {
            console.log(`${todos[index]['name']} ${todos[index]['status']}가 목록에서 삭제됐습니다`)
            todos.splice(index, 1)
            isExistId = true;
        }
    });
    if (!isExistId) {
        console.log('일치하는 id값이 없습니다.');
        return rl.prompt();
    }
    setTimeout(() => {
        show('all')
    }, 1000);
}

function updatefunc(id, status) {
    var isExistId = false;
    todos.forEach(function (item, index) {
        if (item['id'] === id) {
            item['status'] = status;
            setTimeout(() => {
                console.log(`${todos[index]['name']}이/가 ${todos[index]['status']}으로 상태가 변경됐습니다`)
                isExistId = true;
            }, 3000)
        }
    });
    if (!isExistId) {
        console.log('일치하는 id값이 없습니다.');
        return rl.prompt();
    }
    setTimeout(() => {
        show('all')
    }, 1000);

}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '명령하세요. : '
});

rl.prompt();

rl.on('line', (line) => {
    var words = line.split("$")
    if (line.trim() === 'exit') {
        rl.close();
    } else if (words[0] === 'show') {
        show(words[1])
    } else if (words[0] === 'add') {
        var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
        var name = words[1]
        var tags = words[2].replace(regExp, "")
        addfunc(name, tags)
    } else if (words[0] === 'delete') {
        var id = Number(words[1])
        deletefunc(id)
    } else if (words[0] === 'update') {
        var id = Number(words[1])
        var status = words[2]
        updatefunc(id, status)
    }
    else {
        console.log("없는 명령어입니다. 다시 입력해주세요. :")
        rl.prompt();
    }

}).on('close', () => {
    console.log('종료합니다.');
    process.exit(0);
});