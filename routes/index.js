var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query.email)
  var session = req.session;
  if(!session){
    return next(new Error('oh no'))
  }
  if (session.email) { 
    console.log('Session is already avaialbel', session.email);
   }else{
     console.log('Setting session');
      session.email = req.query.email;
   }
  res.render('index', { title: 'Express' });
});

module.exports = router;
