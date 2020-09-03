const User = require('../models/user')
module.exports = {
    index,
    new: newSub,
    create,
    delete: deleteSub,
    editPage,
    update
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        console.log(user.subs)
        res.render('subs/index', {title: 'Current Subscriptions',
        subtitle: "Never miss a payment. Keep track of all of your current subscriptions below.",
        description: "",
         user})
    })
}

function newSub(req, res){
    res.render('subs/new', {title: 'New Subscription', subtitle: "", description: "", user: req.user})
}

function create(req, res) {
    req.body.user = req.params.userId
    User.findById(req.user._id)
    .then(user => {
        user.subs.push(req.body)
        user.save(function(){
            res.redirect('/subs')})
        })
}

function deleteSub(req, res){
    let idx = req.user.subs.findIndex((sub) => sub.id === req.params.id)
    req.user.subs.splice(idx, 1)
        req.user.save().then(() => {
            res.redirect('/subs')
    })
}

function editPage(req, res){
    User.findById(req.user._id, function(err, user){
        idx = user.subs.findIndex((sub) => sub.id === req.params.id)
            let sub = req.user.subs[idx]
            res.render('subs/edit', {title: 'Edit sub', subtitle: "", description: "", user, sub})
        })
}


function update(req, res){
    let idx = req.user.subs.findIndex((sub) => sub.id === req.params.id)
    req.user.subs.splice(idx, 1, req.body)
        req.user.save().then(() => {
            res.redirect('/subs')
    })
}
