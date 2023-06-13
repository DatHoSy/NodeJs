const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/get-all-users', userController.getAllUser);
router.get('/get-user/:userId', userController.getUserById);
router.get('/get-user-by-name-age', userController.getUserByNameandAge);
router.get('/delete-user/:userId', userController.actionDelete);
router.post('/create-user', userController.actionCreateUser);
router.post('/create-many-user', userController.actionCreateManyUser);

module.exports = router;
