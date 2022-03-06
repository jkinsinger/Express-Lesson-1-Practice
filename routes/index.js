var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', name: 'Joy' });
// });

/* Looping through an array */
// router.get('/', function(req, res, next){
//   res.render('index', {
//     title: 'Users',
//     users: ['Jessica', 'Ken', 'Anthony', 'Clara']
//   });
// });

/* Looping Through an Array objects */
router.get('/', function(req, res, next){
  res.render('index', {
    title: 'My Cats',
    cats: [
      {name: 'Winston'},
      {name: 'Churchill'},
      {name: 'Walnut'},
      {name: 'Daphne'},
      {name: 'Lupin'},
    ]
  });
});
module.exports = router;
