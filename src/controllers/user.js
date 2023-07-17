let arrUser = [];
for (let i = 0; i <= 10 ; i++) {
    arrUser.push(
        {
            id: i,
            userName: `user ${i}`,
            passWord: 'pw123',
            age: 20 + i
        }
    )
}
function getAllUser (req, res) {
    res.send(arrUser);
}

function getUserById (req, res) {
    const userId = req.params.id;
    let user = arrUser.filter(user => user.id == userId);
    res.send(user);
}

function getUserByNameandAge (req, res) {
    const {name, age } = req.query;
    let user = arrUser.filter(user => (user.userName == name && user.age == age));
    res.send(user);
}

function actionDelete (req, res) {
    const userId = req.params.id;
    let user = arrUser.filter(user => user.id !== +userId);
    res.send(user);
}
function actionCreateUser (req, res) {
    const {id , userName, passWord, age} = req.body;
    res.send({id , userName, passWord, age});
}
function actionCreateManyUser (req, res) {
    const listUser = req.body;
    res.send(listUser);
}

module.exports = { getAllUser, getUserById, getUserByNameandAge, actionDelete, actionCreateUser, actionCreateManyUser};