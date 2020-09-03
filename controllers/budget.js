const User = require('../models/user');
const { findById } = require('../models/user');

module.exports = {
    index,
    delete: deleteItem,
    editPage,
    update
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        res.render('budget/index', 
        {title: 'Monthly Budget',
        subtitle: 'A list of all of your monthly expenses',
        description: 'Just one step closer to being financially free.',
         user})
    })
}

function deleteItem(req, res){
    let idx = req.user.items.findIndex((item) => item.id === req.params.id)
    req.user.items.splice(idx, 1)
        req.user.save().then(() => {
            res.redirect('/budget')
    })
}

function editPage(req, res){
    User.findById(req.user._id, function(err, user){
        idx = user.items.findIndex((item) => item.id === req.params.id)
            let item = req.user.items[idx]
            res.render('budget/edit', {title: 'Edit Item', subtitle: "", description: "", user, item})
        })
}

function update(req, res){
    let idx = req.user.items.findIndex((item) => item.id === req.params.id)
    req.user.items.splice(idx, 1, req.body)
        req.user.save().then(() => {
            res.redirect('/budget')
    })
}