const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    index
}

function index(req, res){
    Item.find({}, function(err, items){
        res.render('budget/index', {title: 'Monthly Budget', items, User})
    })
}