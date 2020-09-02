var router = require('express').Router();
var itemCtrl = require('../controllers/items');


router.get('/items/new', isLoggedIn, itemCtrl.new)
router.post('/items/', isLoggedIn, itemCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }



  module.exports = router;
