var router = require('express').Router();
var profileCtrl = require('../controllers/profiles');



router.get('/', isLoggedIn, profileCtrl.index)
router.get('/:userId/newBudget' , isLoggedIn, profileCtrl.new)
router.put('/:userId', isLoggedIn, profileCtrl.edit)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  } 
module.exports = router;
