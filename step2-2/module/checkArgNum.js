
module.exports = function checkArgNum(argNum, args) {
    try {
        if (argNum !== args.length) {
            throw new Error('인자 갯수를 확인해주세요.')
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
        process.exit();
    }
}