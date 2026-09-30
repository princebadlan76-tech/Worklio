const express = require('express');
const router = express.Router();
const { analyzeText, convertCase } = require('../controllers/textController');

router.post('/analyze', analyzeText);
router.post('/convert-case', convertCase);

module.exports = router;
