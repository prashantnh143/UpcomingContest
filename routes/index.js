var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



/* GET home page. */
router.get('/', function(req, res, next) {

  async function fetchContestPages() {
    const [CodeforcesResponse, CodechefResponse,LeetcodeResponse,KickstartResponse,AtcoderResponse,HackerearthResponse] = await Promise.all([
      fetch('https://kontests.net/api/v1/codeforces'),
      fetch('https://kontests.net/api/v1/code_chef'),
      fetch('https://kontests.net/api/v1/leet_code'),
      fetch('https://kontests.net/api/v1/kick_start'),
      fetch('https://kontests.net/api/v1/at_coder'),
      fetch('https://kontests.net/api/v1/hacker_earth'),
    ]);
  
    const Codeforces = await CodeforcesResponse.json();
    const Codechef = await CodechefResponse.json();
    const Leetcode = await LeetcodeResponse.json();
    const Kickstart = await KickstartResponse.json();
    const Atcoder = await AtcoderResponse.json();
    const Hackerearth = await HackerearthResponse.json();
    

    return [Codeforces,Codechef,Leetcode,Kickstart,Atcoder, Hackerearth];
  }
  
  fetchContestPages().then(([Codeforces,Codechef,Leetcode,Kickstart,Atcoder, Hackerearth]) => {
     res.render('index',{title : 'Upcoming Contest' ,Codeforces,Codechef,Leetcode,Kickstart,Atcoder, Hackerearth });
  }).catch(error => {
    next();
  });
});

module.exports = router;