const express = require('express')
const router = express.Router()
const { deleteMedicineById } = require('../Controller/Medicines')
const { deleteHospitalById } = require('../Controller/Hospitals')
const { deleteClinicById } = require('../Controller/Clinics')

//Delete Medicine by Id
router.delete('/medicines/deleteMedicineById/:id', deleteMedicineById)

router.delete('/hospitals/deleteHospitalById/:id', deleteHospitalById)

router.delete('./clinics/deleteClinicById/:id', deleteClinicById)

module.exports = router