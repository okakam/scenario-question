'use strict';

const express = require('express');
const router = express.Router();
const MeCab = require('mecab-async');
const mecab = new MeCab();

/* GET home page. */
//noinspection JSUnresolvedFunction
router.get('/', function (req, res, next) {
    res.render('question', {
        Question: "Ques",
        Answer: ""
    });
});

router.post('/', function (req, res, next) {
    let result = mecab.parseSync(req.body.answer);
    res.render('question', {
        Question: "Ques",
        Answer: result
    });
});

module.exports = router;
