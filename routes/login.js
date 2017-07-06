var express = require('express');
var router = express.Router();

/* POST do login. */
router.post('/', function (req, res, next) {
  var session = req.session;
  if(session){
    if(session['email'])
     console.log('>>> session exists ', session.email);
  }else{
    console.log('Setting session value')
    session['email'] = req.body.email
  }
  res.json(req.body);
});

/* POST do login. */
router.post('/test', function (req, res, next) {
  res.json({ test : 'success'});
});

module.exports = router;
