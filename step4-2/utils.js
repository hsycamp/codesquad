const isValidId = function (idNum) {
    if (idNum) {
        return true;
    } else {
        console.log("id는 5자리 숫자여야합니다.");
        return false;
    }
};

const isValidStatus = function (status) {
    if (status) {
        return true;
    } else {
        console.log("상태는 todo, doing, done 중 하나로 입력해주세요.");
        return false;
    }
};

const isValidName = function (name) {
    if (name) {
        return true;
    } else {
        console.log("name에는 숫자를 넣을 수 없습니다.");
        return false;
    }
};

const isValidTag = function (tag) {
    if (tag) {
        return true;
    } else {
        console.log('tag를 올바른 형식으로 입력해주세요.');
        return false;
    }
};

const ranNum = function (digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const isDuplicateNum = function (todos, ranId) {
    return todos.some((el) => el['id'] === ranId)
};

const makeRanNum = function (digits, todos) {
    let ranId = ranNum(digits);
    if (!isDuplicateNum(todos, ranId)) {
        return ranId;
    } else {
        return makeRanNum(digits, todos);
    }
}


module.exports = {
    isValidId,
    isValidStatus,
    isValidName,
    isValidTag,
    makeRanNum
};