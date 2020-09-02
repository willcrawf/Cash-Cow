const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    index
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        console.log(user.items)
        res.render('budget/index', {title: 'Monthly Budget', user})
    })
}