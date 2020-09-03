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
    let budget = req.user.budget
    User.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, budget) => {
        if (err) {
            console.log("error with data")
        }  
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