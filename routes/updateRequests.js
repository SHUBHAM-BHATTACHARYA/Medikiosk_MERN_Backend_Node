const express = require('express')
const router = express.Router()
const { updateMedicineById } = require('../Controller/Medicines')
const { updateHospitalById } = require('../Controller/Hospitals')
const { updateClinicById } = require('../Controller/Clinics')

//Update Medicine
router.put('/medicines/updateMedicineById/:id', updateMedicineById)

router.put('/hospitals/updateHospitalById/:id', updateHospitalById)

router.put('/clinics/updateClinicById/:id', updateClinicById)

module.exports = router;