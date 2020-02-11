var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.session);
    const data = req.session.data;
    res.render('dashboard');
  });
  
module.exports = router;
