const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
module.exports = mongoose.model('Item', itemSchema)
