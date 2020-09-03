const User = require('../models/user');

module.exports = {
    index
}

function index(req, res){
let categories = ["Housing", "Transportation", "Food/Drinks", "Utilities", "Clothing", "Medical/Healthcare", "Insurance", "Household Items/Supplies", "Debt", "Education", "Gifts/Donations", "Entertainment"]; 
User.findById(req.user._id, function(err, user){
    console.log(user.items.length)
    res.render('topCategories/index', {title: 'Top Spending Categories', user, categories})
})
}