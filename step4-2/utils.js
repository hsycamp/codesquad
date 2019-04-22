const isValidId = function (idNum) {
    
};

const isValidStatus = function (status) {

};

const isValidName = function (name) {
    
};

const isValidTag = function (tag) {
    
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