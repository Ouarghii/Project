const boites=require('./boites.models')
const ValidateBoite=require('../validation/Boites.validation')
const AddBoites = async(req,res,body)=>{
    const {errors,isValid}=ValidateBoite(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await boites.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                else {
                    await boites.findOne({ Phone:req.body.Phone} ).then(async(exist)=>{
                        if((exist)){
                            errors.Phone="Phone Exist";
                            
                            res.status(404).json(errors);
                        } else {
                await boites.create(req.body)
                res.status(201).json({message:'boite added with success'}) }
            })
        }
                })
        }
        
     }catch(error){console.log(error.message)}
}
const FindAllBoites = async(req,res,body)=>{
  try {
     const data=await boites.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleBoite = async(req,res)=>{
    try {
        const data=await boites.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateBoites = async(req,res,body)=>{
    const {errors,isValid}=ValidateBoite(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await boites.findOneAndUpdate(
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

const DeleteBoites = async(req,res)=>{
    try {
        await boites.deleteOne({_id:req.params.id})
        res.status(201).json({message:"boite deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddBoites,
    FindAllBoites,
    FindSingleBoite,
    UpdateBoites,
    DeleteBoites,
}