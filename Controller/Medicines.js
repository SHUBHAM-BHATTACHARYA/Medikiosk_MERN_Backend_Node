const Medicine = require('../Models/medicine')

//Get all Medicines
const getAllMedicines = async (req, res) =>{
    try{
        const medicines = await Medicine.find()
        res.json(medicines)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

//Get Medicine by Id
const getMedicineById = async (req, res) =>{
    try{
        const medicine = await Medicine.findById(req.params.id)
        res.json(medicine)
    } catch (err){
        res.status(400).json({ message:err.message })
    }
}

//Add Medicine
const addMedicine = async (req, res) =>{
    const medicine = new Medicine({
        name: req.body.name,
        disease: req.body.disease,
        company: req.body.company,
        quantity: req.body.quantity,
        price: req.body.price
    })
    try{
        await medicine.save()
        res.status(201).json({ message:'Medicine Added Successfully' })
    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

//Update Medicine
const updateMedicineById = async (req, res) =>{
    try{
        const medicine = await Medicine.findById(req.params.id)
        if(medicine){
            medicine.name = req.body.name,
            medicine.disease = req.body.disease,
            medicine.company = req.body.company,
            medicine.quantity = req.body.quantity,
            medicine.price = req.body.price

            await medicine.save()
            res.status(201).json({ message:'Medicine Updated Successfully' })
        }else{
            res.json({ message: 'Id not exists' })
        }
        
    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

//Delete Medicine by Id
const deleteMedicineById = async (req, res) =>{
    try{
        const medicine = await Medicine.findByIdAndDelete(req.params.id)
        if(medicine){
            res.json({ message: 'Removed successfully' })
        }
        else{
            res.json({ message: 'Id not exists' })
        }
    } catch (err){
        res.status(400).json({ message:err.message })
    }
}


module.exports = {getAllMedicines, getMedicineById, addMedicine, updateMedicineById, 
    deleteMedicineById}