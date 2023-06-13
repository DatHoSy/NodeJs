const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

router.get('/get-all-books', bookController.getAllBooks);

module.exports = router;
