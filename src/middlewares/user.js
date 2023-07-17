function validation (req, res, next) {
    const { userName, passWord } = req.body;
    if (!userName || userName.length > 20) {
        next("UserName validation");
        // res.status(400).send('UserName validation');
    }
    if (!passWord || passWord.length > 10) {
        next("passWord validation");
    }
    next();
}
module.exports = { validation };