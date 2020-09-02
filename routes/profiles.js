var router = require('express').Router();
var profileCtrl = require('../controllers/profiles');



router.get('/profiles', profileCtrl.show)
router.get('/profiles/newBudget', profileCtrl.newBudget)
router.post('/profiles/addBudget', profileCtrl.addBudget)
module.exports = router;
