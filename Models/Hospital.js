const mongoose = require('mongoose')
const Address = require('../Models/Address')

const collectionName = 'Hospital-Collection'

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    contactInfo:{
        phone: {
            type: Number,
            required: true
        },
        email:{
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        address: [Address]
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
        required: true,
        'default': Date.now
    },
    modifyTimeStamp: {
        type: Date,
        required: true,
        'default': Date.now
    }

})

module.exports = mongoose.model('Hospital', hospitalSchema, collectionName)