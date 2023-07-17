const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { validation } = require('../middlewares/user');

// router.get('/users', userController.getAllUser);
router.get('/users/:id', userController.getUserById);
router.get('/user-by-name-age', userController.getUserByNameandAge);
router.get('/delete-user/:userId', userController.actionDelete);
router.post('/users', validation, userController.actionCreateUser);
router.post('/create-many-user', userController.actionCreateManyUser);

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Bad request');
})
module.exports = router;
