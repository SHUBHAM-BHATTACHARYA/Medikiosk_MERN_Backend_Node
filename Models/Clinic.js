const mongoose = require('mongoose')

const collectionName = 'Clinic-Collection'

const timingsSchema = new mongoose.Schema({
    days: { type:String, required:true },
    time: { type:String, required:true }
}, { _id:false }) // Optional: if you don't need a unique ID for every spec item

const contactInfoSchema = new mongoose.Schema({
    phone: { type:Number, required:true, 
        validate: {
            validator: function(v) {
            return /^\d{10}$/.test(v); // Ensures exactly 10 digits from start (^) to end ($)
            },
            message: props => `${props.value} is not a valid 10 digit number!` // Custom error message
        }
    },
        
    email: { type:String, required:true, unique: [true, 'Email already exists'], lowercase: true, trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    location: { type:String, required:true }
}, { _id:false })

const doctorInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialisation: { type: String, required: true },
    experience: { type: Number, required: true, min:2, max:80 },
    fees: { type: Number, required: true, min:100 },
    visitingDays: { type: String, required: true },
    visitingTime: { type: String, required: true },
}, { _id:false })

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Services:{ type: String, required: true },
    Timings: [timingsSchema],
    contactInfo: contactInfoSchema,
    doctorInfo: [doctorInfoSchema],
    createTimeStamp: { type: Date, required: true, default:Date.now },
    modifyTimeStamp: { type: Date, required: true, default:Date.now}
})

module.exports = mongoose.model('Clinic', clinicSchema, collectionName)