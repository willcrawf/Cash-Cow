const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
  show,
  newBudget,
  addBudget,
}

function createProfile(){
    Profile.create()
}

function show(req, res){
createProfile()
Profile.findOne({user: req.user._id}, function(err, profile){
    console.log(profile)
    res.render('profiles/profile', {title: 'Profile', profile, user: req.user})
})
}

function newBudget(req, res){
    res.render('profiles/newBudget',{title: "New Budget", Profile})
}

function addBudget(req, res){
    // req.body.user = req.user._id
    // Profile.create(req.body)
    req.body.user = req.user._id
    Profile.create(req.body)
    .then((profile) => {
        res.redirect('/profiles' )})
    .catch(err => {
        console.log(err)
        res.redirect('/profiles')})
    }