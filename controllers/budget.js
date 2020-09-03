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

function editPage(req, res){
    User.findById(req.user._id, function(err, user){
        idx = user.items.findIndex((item) => item.id === req.params.id)
            let item = req.user.items[idx]
            res.render('budget/edit', {title: 'Edit Item', user, item})
        })
}

function update(req, res){
   User.findOneAndUpdate(req.params.id, req.body.id, {
       new: true
   })
   req.user.save().then(() => {
        res.redirect('/budget')
   })
   
}
