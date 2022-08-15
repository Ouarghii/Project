const entreprises=require('./entreprises.models')
const ValidateEntreprise=require('../validation/Entreprises.validation')
const AddEntreprises = async(req,res,body)=>{
    const {errors,isValid}=ValidateEntreprise(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await entreprises.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                else {
                    await entreprises.findOne({ Matricule:req.body.Matricule} ).then(async(exist)=>{
                        if((exist)){
                            errors.Matricule="Matricule Exist";
                            
                            res.status(404).json(errors);
                        } else {
                await entreprises.create(req.body)
                res.status(201).json({message:'Entreprise add with success'}) }
            })
        }
                })
        }
        
     }catch(error){console.log(error.message)}
}
const FindAllEntreprises = async(req,res,body)=>{
  try {
     const data=await entreprises.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleEntreprise = async(req,res)=>{
    try {
        const data=await entreprises.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateEntreprises = async(req,res,body)=>{
    const {errors,isValid}=ValidateEntreprise(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await entreprises.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            )
        res.status(201).json(data)
        }
     } catch (error) {
       console.log(error.message)
     }
}

const DeleteEntreprises = async(req,res)=>{
    try {
        await entreprises.deleteOne({_id:req.params.id})
        res.status(201).json({message:"entreprise deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddEntreprises,
    FindAllEntreprises,
    FindSingleEntreprise,
    UpdateEntreprises,
    DeleteEntreprises,
}