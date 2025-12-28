const express = require('express')
const router = express.Router()
const { deleteMedicineById } = require('../Controller/Medicines')
const { deleteHospitalById } = require('../Controller/Hospitals')

//Delete Medicine by Id
router.delete('/medicines/deleteMedicineById/:id', deleteMedicineById)

router.delete('/hospitals/deleteHospitalById/:id', deleteHospitalById)

module.exports = router