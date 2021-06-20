var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

var Codeforces,Codechef,Leetcode,Kickstart,Atcoder,Hackerearth;

/* GET home page. */
router.get('/', function(req, res, next) {

    fetch('https://kontests.net/api/v1/codeforces')
    .then(res => res.json())
    .then(data => {
      Codeforces = data;
     // res.send(Codeforces[0])
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })

    fetch('https://kontests.net/api/v1/code_chef')
    .then(res => res.json())
    .then(data => {
      Codechef = data;
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })

    fetch('https://kontests.net/api/v1/leet_code')
    .then(res => res.json())
    .then(data => {
      Leetcode = data;
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })

    fetch('https://kontests.net/api/v1/at_coder')
    .then(res => res.json())
    .then(data => {
      Atcoder = data;
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })    

    fetch('https://kontests.net/api/v1/kick_start')
    .then(res => res.json())
    .then(data => {
      Kickstart = data;
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })

    fetch('https://kontests.net/api/v1/hacker_earth')
    .then(res => res.json())
    .then(data => {
      Hackerearth = data;
      // res.render('page',{ title: "Codeforces Upcoming Contest" , arr})
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })


  res.render('index', { title: 'Upcoming Contests' ,Codeforces, Codechef, Leetcode,Kickstart,Atcoder,Hackerearth});
});

module.exports = router;