const User = require('../models/user');
const Item = require('../models/item');
const Profile = require('../models/profile');

module.exports = {
    new: itemPage,
    create
    // index
}

    

function itemPage(req, res){
    res.render('items/new', {title: 'New Item'})
}

function create(req, res) {
    const item = new Item(req.body)
    item.save(function(err) {
        if (err) return res.render('items/new', {title: "Items"})
        console.log(item)
        res.render('items/new', {title: "Items"})
    })
}

// function index(req, res){
//     res.render('monthSpendings/show', {title: " Month's Spendings", req.body})
// }