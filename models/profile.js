const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = ({
    budget: {type: Number, default: 500},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Profile', profileSchema);
