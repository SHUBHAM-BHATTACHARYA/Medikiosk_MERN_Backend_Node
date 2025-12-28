const Hospital = require('../Models/Hospital')

const getAllHospitals = async(req,res) =>{
    try{
        const hospitals = await Hospital.find()
        res.json(hospitals)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

const getHospitalById = async (req,res)=>{
    try{
        const hospital = await Hospital.findById(req.params.id)
        if(hospital){
            res.status(201).json(hospital)
        }
        else{
            res.status(201).json({ message: 'ID not exsists' })
        }
    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

const addHospital = async(req,res) => {
    const hospital = new Hospital(req.body)
    try{
        await hospital.save()
        res.status(201).json({ message: 'Hospital Inserted Successfully' })
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

const updateHospitalById = async (req,res) =>{
    const _id = req.params.id
    try{
        await Hospital.findByIdAndUpdate(_id, req.body);
        res.status(201).json({ message: 'updated successfully' })

    } catch (err){
        res.status(400).json({ message: err.message })
    }
}

const deleteHospitalById = async (req, res) =>{
    try{
        await Hospital.findByIdAndDelete(req.params.id)
        res.status(201).json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {getAllHospitals, addHospital, updateHospitalById, getHospitalById, deleteHospitalById}