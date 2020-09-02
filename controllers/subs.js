const Sub = require('../models/sub')
const User = require('../models/user')
module.exports = {
    index,
    create,
    new: newSub
}

function index(req, res){
console.log(req.user._id)
    Sub.find({}, function(err, subs) {
        res.render('subs/index', {title: "Current Subscriptions:", subs})
    })
}

function newSub(req, res){
    res.render('subs/new', {title: "New Subscription"})
}

function create(req, res){
    const sub = new Sub(req.body)
    sub.save(function(err) {
        if (err) return res.render('subs/index')
        console.log(sub)
        // res.redirect('/movies')
        res.redirect(`/subs/${req.user._id}`)
    })  
}
