var mongoose = require('mongoose');
const Schema = mongoose.Schema


const topCategoriesSchema = ({
  category: String,
  amount: Number,
  cost: Number
})

const itemSchema = new Schema({
  name: String,
  cost: Number,
  location: String,
  date: Date,
  category: String,
  upcoming: String,
  
}, {
  timestamps: true
})

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  totalSpendings: Number,
  budget: Number,
  topCategories: [topCategoriesSchema],
  items: [itemSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
