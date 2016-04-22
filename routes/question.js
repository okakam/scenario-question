var express = require('express');
var router = express.Router();

/* GET home page. */
//noinspection JSUnresolvedFunction
router.get('/', function (req, res, next) {
    res.render('question', {
        Question: "Ques",
        Answer: ""
    });
});

router.post('/', function (req, res, next) {
    res.render('question', {
        Question: "Ques",
        Answer: req.body.answer
    });
});

module.exports = router;
