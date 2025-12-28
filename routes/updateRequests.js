const express = require('express')
const router = express.Router()
const { updateMedicineById } = require('../Controller/Medicines')
const { updateHospitalById } = require('../Controller/Hospitals')

//Update Medicine
router.put('/medicines/updateMedicineById/:id', updateMedicineById)

router.put('/hospitals/updateHospitalById/:id', updateHospitalById)

module.exports = router;