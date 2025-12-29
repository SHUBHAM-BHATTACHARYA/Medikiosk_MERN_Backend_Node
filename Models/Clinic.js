const mongoose = require('mongoose')

const collectionName = 'Clinic-Collection'

const timingsSchema = new mongoose.Schema({
    days: { type:String, required:true },
    time: { type:String, required:true }
}, { _id:false }) // Optional: if you don't need a unique ID for every spec item

const contactInfoSchema = new mongoose.Schema({
    phone: { type:Number, required:true },
    email: { type:String, required:true },
    location: { type:String, required:true }
}, { _id:false })

const doctorInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialisation: { type: String, required: true },
    experience: { type: Number, required: true },
    fees: { type: Number, required: true },
    visitingDays: { type: String, required: true },
    visitingTime: { type: String, required: true },
}, { _id:false })

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Services:{ type: String, required: true },
    Timings: [timingsSchema],
    contactInfo: contactInfoSchema,
    doctorInfo: [doctorInfoSchema]
})

module.exports = mongoose.model('Clinic', clinicSchema, collectionName)