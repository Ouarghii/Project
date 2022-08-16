const autres=require('./autres.models')
const Validateautre=require('../validation/Autres.validation')
const AddAutres = async(req,res,body)=>{
    const {errors,isValid}=Validateautre(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await autres.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             else {
                await autres.create(req.body)
                res.status(201).json({message:'Client add with success'}) }
            })
        
                
        }
        
     }catch(error){console.log(error.message)}
}
const FindAllAutres = async(req,res,body)=>{
  try {
     const data=await autres.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleAutre = async(req,res)=>{
    try {
        const data=await autres.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateAutres = async(req,res,body)=>{
    const {errors,isValid}=Validateautre(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await autres.findOneAndUpdate(
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

const DeleteAutres = async(req,res)=>{
    try {
        await autres.deleteOne({_id:req.params.id})
        res.status(201).json({message:"client deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddAutres,
    FindAllAutres,
    FindSingleAutre,
    UpdateAutres,
    DeleteAutres,
}