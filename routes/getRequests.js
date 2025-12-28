const express = require('express')
const router = express.Router()
const { getAllMedicines, getMedicineById } = require('../Controller/Medicines')
const { getAllHospitals, getHospitalById } = require('../Controller/Hospitals')

//Get all Medicines
router.get('/medicines/getAllMedicines', getAllMedicines)
router.get('/medicines/getMedicineById/:id', getMedicineById)

router.get('/hospitals/getAllHospitals', getAllHospitals)
router.get('/hospitals/getHospitalById/:id', getHospitalById)

module.exports = router