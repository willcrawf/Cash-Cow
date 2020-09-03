const User = require('../models/user');

module.exports = {
    index,
    new: newBudget,
    edit: update
    // create
}

function index(req, res){
    User.findById(req.user._id, function(err, user){
        res.render('profiles/index', {title: 'Profile', subtitle: "", description: "", user})
    })
}

function newBudget(req, res){
    res.render('profiles/new', {title: "New Budget", subtitle: "", description: "", user: req.user})
}

function update(req, res){
    let idx = req.user.budget.find((budget) => budget.id === req.params.id)
    req.user.budget.splice(idx, 1, req.body)
        req.user.save().then(() => {
            res.redirect('/profiles')
    })
}



// function create(req, res) {
//     req.body.user = req.params.userId
//     User.findById(req.user._id)
//     .then(user => {
//         user.save(function(){
//             res.redirect('/profiles')})
//         })
// }