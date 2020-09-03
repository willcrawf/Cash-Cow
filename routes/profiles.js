var router = require('express').Router();
var profileCtrl = require('../controllers/profiles');



router.get('/', profileCtrl.index)
router.get('/:userId/newBudget' , profileCtrl.new)
router.put('/:userId', profileCtrl.edit)
module.exports = router;
