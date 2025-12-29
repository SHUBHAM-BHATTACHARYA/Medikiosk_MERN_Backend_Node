const express = require('express')
const router = express.Router()
const { getAllMedicines, getMedicineById } = require('../Controller/Medicines')
const { getAllHospitals, getHospitalById } = require('../Controller/Hospitals')
const {getAllClinics, getClinicById } = require('../Controller/Clinics')

//Get all Medicines
router.get('/medicines/getAllMedicines', getAllMedicines)
router.get('/medicines/getMedicineById/:id', getMedicineById)

router.get('/hospitals/getAllHospitals', getAllHospitals)
router.get('/hospitals/getHospitalById/:id', getHospitalById)

router.get('/clinics/getAllClinics', getAllClinics)
router.get('/clinics/getClinicById/:id', getClinicById)

module.exports = router