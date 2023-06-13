const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/catgory');

router.get('/get-all-categories', categoryController.getAllCategory);
router.get('/get-category/:cateId', categoryController.getCategoryById);

module.exports = router;