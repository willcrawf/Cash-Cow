const Profile = require('../models/profile');
const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    index
}

function index(req, res){
let categories = ["Housing", "Transportation", "FoodDrink", "UTilities", "Clothing", "MedicalHealthcare", "Insurance", "HouseholdItemsSupplies", "Debt", "Education", "GiftsDonations", "Entertainment"]; 
Item.find({}, function(err, items){
    res.render('topCategories', {title: 'Top Categories', items, categories, User})
})
}