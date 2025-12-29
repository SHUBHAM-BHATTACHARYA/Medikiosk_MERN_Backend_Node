const Clinic = require('../Models/Clinic')

const getAllClinics = async(req,res) =>{
    try{
        const clinics = await Clinic.find()
        res.json(clinics)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

const getClinicById = async (req,res)=>{
    try{
        const clinic = await Clinic.findById(req.params.id)
        if(clinic){
            res.status(201).json(clinic)
        }
        else{
            res.status(201).json({ message: 'ID not exsists' })
        }
    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

const addClinic = async(req,res) => {
    const clinic = new Clinic(req.body)
    try{
        await clinic.save()
        res.status(201).json({ message: 'Clinic Inserted Successfully' })
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

const updateClinicById = async (req,res) =>{
    const _id = req.params.id
    try{
        await Clinic.findByIdAndUpdate(_id, req.body);
        res.status(201).json({ message: 'updated successfully' })

    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

const deleteClinicById = async (req, res) =>{
    try{
        await Clinic.findByIdAndDelete(req.params.id)
        res.status(201).json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = { getAllClinics, getClinicById, addClinic, updateClinicById, deleteClinicById }