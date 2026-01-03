const mongoose = require('mongoose')

const collectionName = 'Hospital-Collection'

const contactInfoSchema = new mongoose.Schema({
    phone: { type: Number, required: true },
    email: { type: String, required: true }
}, {_id: false })

const locationSchema = new mongoose.Schema({
    place: { type: String, required: true },
    city: { type: String, required: true }
}, {_id: false })

const timingsSchema = new mongoose.Schema({
    days: { type: String, required: true },
    time: { type: String, required: true }
}, {_id: false })

const availableDoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    experience: { type: Number, required: true },
    fees: { type: Number, required: true },
    timings: [ timingsSchema ]
}, {_id: false })

const specialitySchema = new mongoose.Schema({
    name:{ type: String, required: true },
    availableDoctor: [ availableDoctorSchema ]
}, {_id: false })

const hospitalSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    type:{ type: String, required: true },
    capacity:{ type: Number, required: true },
    Timings: { type: String, required: true },
    contactInfo: contactInfoSchema,
    Location: [ locationSchema ],
    procedure: { type: String, required: true },
    speciality: [ specialitySchema ],
    createTimeStamp: { type: Date, required: true, default: Date.now },
    modifyTimeStamp: { type: Date, required: true, default:Date.now}
})

module.exports = mongoose.model('Hospital', hospitalSchema, collectionName)