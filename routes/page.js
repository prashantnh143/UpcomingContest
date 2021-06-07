var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', function(req, res, next) {

    fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));

  res.render('page', { title: 'Codeforces' });
});

module.exports = router;
