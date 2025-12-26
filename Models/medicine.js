const mongoose = require('mongoose')

const collectionName = 'Medicine-Collection'
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('medicine', medicineSchema, collectionName)