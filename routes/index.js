var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My App' });
});

/* GET Hello World page. */
router.get('/:name',function(req, res){
   res.render(req.params.name + '/' + req.params.name);
});

module.exports = router;
