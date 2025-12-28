const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    city: String,
    state: String,
    pincode: Number
})

module.exports = addressSchema