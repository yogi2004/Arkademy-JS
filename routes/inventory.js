var express = require('express');
var router = express.Router();
const Inventory = require('../model/inventory');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inventory');
  
});

router.post('/store', async function(req, res){
    Inventory.store(req.body, function(err, result){
        res.redirect('/inventory');
    })
})
module.exports = router;
