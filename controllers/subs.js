const User = require('../models/user')
module.exports = {
    index,
    new: newSub,
    create
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        console.log(user.subs)
        res.render('subs/index', {title: 'Current Subscriptions', user})
    })
}

function newSub(req, res){
    res.render('subs/new', {title: 'New Subscription', user: req.user})
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
