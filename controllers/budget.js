const User = require('../models/user');
const { findById, findByIdAndDelete } = require('../models/user');
const user = require('../models/user');

module.exports = {
    index,
    delete: deleteItem,
    edit: editItem

function index(req, res){
    User.findById(req.user._id, function(err, user){
        res.render('budget/index', {title: 'Monthly Budget', user})
    })
}

function deleteItem(req, res){
    let idx = req.user.items.findIndex((item) => item.id === req.params.id)
    req.user.items.splice(idx, 1)
        req.user.save().then(() => {
            res.redirect('/budget')
    })
}

