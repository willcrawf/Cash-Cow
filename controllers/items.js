const User = require('../models/user');

module.exports = {
    new: itemPage,
    create
}

    

function itemPage(req, res){
    res.render('items/new', 
    {title: 'New Item',
    subtitle: 'Add a new budget item here',
    description: "",
     user: req.user})
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

