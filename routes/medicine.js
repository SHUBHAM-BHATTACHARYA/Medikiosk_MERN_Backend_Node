const express = require('express')
const router = express.Router()
const { getAllMedicines, getMedicineById, addMedicine, updateMedicineById, 
    deleteMedicineById } = require('../Controller/Medicines')

//Get all Medicines
router.get('/medicines/getAllMedicines', getAllMedicines)

//Get Medicine by Id
router.get('/medicines/getMedicineById/:id', getMedicineById)

//Add Medicine
router.post('/medicines/addMedicine/', addMedicine)

//Update Medicine
router.put('/medicines/updateMedicineById/:id', updateMedicineById)

//Delete Medicine by Id
router.delete('/medicines/deleteMedicineById/:id', deleteMedicineById)

module.exports = router