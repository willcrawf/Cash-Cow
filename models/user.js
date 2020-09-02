var mongoose = require('mongoose');


const topCategoriesSchema = ({
  category: String,
  amount: Number,
  cost: Number
})


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  totalSpendings: Number,
  budget: Number,
  topCategories: [topCategoriesSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
