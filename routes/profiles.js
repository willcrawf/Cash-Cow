var router = require('express').Router();
var profileCtrl = require('../controllers/profiles');



router.get('/', profileCtrl.index)
router.get('/new' , profileCtrl.new)
router.post('/:userId', profileCtrl.create)
module.exports = router;
