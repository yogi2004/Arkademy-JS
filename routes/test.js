var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('homepage/test', {title: 'Halaman Baru'});
});

module.exports = router;