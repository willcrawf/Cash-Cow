var router = require('express').Router();
var subsCtrl = require('../controllers/subs');

router.get('/:userId', isLoggedIn, subsCtrl.index)
router.get('/new/:userId', isLoggedIn, subsCtrl.new)
router.post('/:userId', isLoggedIn, subsCtrl.create)

router.get('/', function(req, res, next) {
  res.redirect('/subs/:userId')
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router;
