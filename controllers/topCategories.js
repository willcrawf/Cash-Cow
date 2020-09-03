const User = require('../models/user');

module.exports = {
    index
}

function index(req, res){
let categories = ["Housing", "Transportation", "FoodDrink", "UTilities", "Clothing", "MedicalHealthcare", "Insurance", "HouseholdItemsSupplies", "Debt", "Education", "GiftsDonations", "Entertainment"]; 
Item.find({}, function(err, items){
    res.render('topCategories', {title: 'Top Categories', items, categories, User})
})
}