var router = require('express').Router();
const topCategoriesCtrl = require('../controllers/topCategories')

router.get('/', isLoggedIn, topCategoriesCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;