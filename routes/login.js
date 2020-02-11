var express = require('express');
var router = express.Router();
var Users = require('../model/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login');
});



/** POST check login */
router.post('/', async function (req, res) {
  const { body } = req;
  Users.authLogin(body, function (err, result) {
      req.session.data = result;
      res.redirect('/dashboard');
  })
})


module.exports = router;
