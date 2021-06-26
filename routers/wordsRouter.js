var express = require('express');
const wordsController = require('../controllers/wordsController');
var router = express.Router();

router.get('/', wordsController.getAll);
router.get('/:id', wordsController.getById);
router.post('/', wordsController.create);
// router.post('/', wordsController.greeting);
// router.post('/', wordsController.greeting);
// router.delete('/', wordsController.greeting);

module.exports = router;
