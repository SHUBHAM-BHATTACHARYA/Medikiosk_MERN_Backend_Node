const express = require('express')
const router = express.Router()
const { addMedicine } = require('../Controller/Medicines')
const { addHospital } = require('../Controller/Hospitals')

//Add Medicine
router.post('/medicines/addMedicine/', addMedicine)

router.post('/hospitals/addHospital', addHospital)

module.exports = router