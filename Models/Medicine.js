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
    },
    createdBy: {
        type: String,
        required: true
    },
    modifiedBy: {
        type: String,
        required: true
    },
    createTimeStamp: {
        type: Date,
        required: true
    },
    modifyTimeStamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Medicine', medicineSchema, collectionName)