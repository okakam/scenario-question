'use strict';

var express = require('express');
var router = express.Router();
var MeCab = require('mecab-async');
var mecab = new MeCab();

/* GET home page. */
//noinspection JSUnresolvedFunction
router.get('/', function (req, res, next) {
    res.render('question', {
        Question: "Ques",
        Answer: ""
    });
});

router.post('/', function (req, res, next) {
    var result = mecab.parseSync(req.body.answer);
    res.render('question', {
        Question: "Ques",
        Answer: result
    });
});

module.exports = router;
