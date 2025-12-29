const express = require('express')
const router = express.Router()
const { addMedicine } = require('../Controller/Medicines')
const { addHospital } = require('../Controller/Hospitals')
const { addClinic } = require('../Controller/Clinics')

//Add Medicine
router.post('/medicines/addMedicine/', addMedicine)

router.post('/hospitals/addHospital', addHospital)

router.post('/clinics/addClinic', addClinic)

module.exports = router