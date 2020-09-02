const User = require('../models/user');
const Profile = require('../models/profile');

module.exports = {
    new: itemPage,
    create
}

    

function itemPage(req, res){
    res.render('items/new', {title: 'New Item', user: req.user})
}

function create(req, res) {
    req.body.user = req.params.userId
    User.findById(req.user._id)
    .then(user => {
        user.items.push(req.body)
        user.save(function(){
            res.redirect('/items/new')})
        })
}

