const types=require('./t.models')
const Validatetype=require('../validation/Types.validation')
const AddTypes = async(req,res,body)=>{
    const {errors,isValid}=Validatetype(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await types.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                 else {
                await types.create(req.body)
                res.status(201).json({message:' add with success'}) }
                 }) 
        }
                
        
        
     } catch(error){console.log(error.message)}
}
const FindAllTypes = async(req,res,body)=>{
  try {
     const data=await types.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleTypes = async(req,res)=>{
    try {
        const data=await types.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateTypes= async(req,res,body)=>{
    const {errors,isValid}=Validatetype(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await types.findOneAndUpdate(
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

const DeleteTypes = async(req,res)=>{
    try {
        await types.deleteOne({_id:req.params.id})
        res.status(201).json({message:" deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddTypes,
    FindAllTypes,
    FindSingleTypes,
    UpdateTypes,
    DeleteTypes,
}