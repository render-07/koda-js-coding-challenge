const express = require('express');
const router = express.Router();
const {loadQuiz} = require('../utils/getQuiz');

router.get('/get-all-quiz', (req,res) => {
    res.send(loadQuiz());
});

module.exports = router;
