var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My App' });
});

/* GET another page. */ /*
router.get('/:name',function(req, res){
  console.log('router get ' + req.params.name);
  res.render(req.params.name + '/' + req.params.name);
});
*/
/* Get Home Page */
router.get('/home/home',function(req, res){
  res.render('home/home');
});
/* Get About Page */
router.get('/about/about',function(req, res){
  res.render('about/about');
});
/* Get Project Page */
router.get('/project/project',function(req, res){
  res.render('project/project');
});

router.get('/projects_data',function(req, res){
	console.log("database process");
	var db = req.db; 
	db.collection('projects_Data').find().toArray(function(err, items){     
	   res.json(items);
	});
});


module.exports = router;
