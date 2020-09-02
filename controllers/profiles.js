const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    index,
    new: newBudget,
    create
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        res.render('profiles/index', {title: 'Profile', user})
    })
}

function newBudget(req, res){
    res.render('profiles/new', {title: "New Budget", user: req.user})
}


function create(req, res) {
    req.body.user = req.params.userId
    User.findById(req.user._id)
    .then(user => {
        user.save(function(){
            res.redirect('/profiles')})
        })
}