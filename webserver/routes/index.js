var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GeoChat' });
});

router.post('/NewRoom', function(req, res, next) {

	var receivedObj = req.body;
	console.dir(receivedObj.coordinates);
	
	res.sendStatus(200)
});

module.exports = router;
