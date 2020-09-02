var router = require('express').Router();
var budgetCtrl = require('../controllers/budget');

router.get('/', isLoggedIn, budgetCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }



  module.exports = router;
