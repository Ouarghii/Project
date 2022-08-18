const fournisseurs=require('./fournisseurs.models')
const Validatefournisseur=require('../validation/Fournisseurs.validation')
const AddFournisseurs = async(req,res,body)=>{
    const {errors,isValid}=Validatefournisseur(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await fournisseurs.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                 else {
                await fournisseurs.create(req.body)
                res.status(201).json({message:'fournisseur add with success'}) }
                 }) 
        }
                
        
        
     } catch(error){console.log(error.message)}
}
const FindAllFournisseurs = async(req,res,body)=>{
  try {
     const data=await fournisseurs.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleFournisseurs = async(req,res)=>{
    try {
        const data=await fournisseurs.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateFournisseurs = async(req,res,body)=>{
    const {errors,isValid}=Validatefournisseur(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await fournisseurs.findOneAndUpdate(
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

const DeleteFournisseurs = async(req,res)=>{
    try {
        await fournisseurs.deleteOne({_id:req.params.id})
        res.status(201).json({message:"Fournisseur deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddFournisseurs,
    FindAllFournisseurs,
    FindSingleFournisseurs,
    UpdateFournisseurs,
    DeleteFournisseurs,
}