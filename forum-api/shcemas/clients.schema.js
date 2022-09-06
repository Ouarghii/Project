const clients=require('./clients.models')
const Validateclient=require('../validation/Clients.validation')
const AddClients = async(req,res,body)=>{
    const {errors,isValid}=Validateclient(req.body);
    
    try{
        if (!isValid) {
            res.status(404).json(errors)
        } else  {
            await clients.findOne({ Email:req.body.Email} ).then(async(exist)=>{
                if((exist)){
                    errors.Email="Email Exist";
                    
                    res.status(404).json(errors);
                }
             
                else {
                    await clients.findOne({ Cin:req.body.Cin} ).then(async(exist)=>{
                        if((exist)){
                            errors.Cin="Cin Exist";
                            
                            res.status(404).json(errors);
                        } else {
                await clients.create(req.body)
                res.status(201).json({message:'Client add with success'}) }
            })
        }
                })
        }
        
     }catch(error){console.log(error.message)}
}
const FindAllClients = async(req,res,body)=>{
  try {
     const data=await clients.find()
     res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const FindSingleClient = async(req,res)=>{
    try {
        const data=await clients.findOne({_id:req.params.id})
        res.status(201).json(data)
     } catch (error) {
       console.log(error.message)
     }
}
const UpdateClients = async(req,res,body)=>{
    const {errors,isValid}=Validateclient(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data=await clients.findOneAndUpdate(
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

const DeleteClients = async(req,res)=>{
    try {
        await clients.deleteOne({_id:req.params.id})
        res.status(201).json({message:"client deleted with success"})
     } catch (error) {
       console.log(error.message)
     }
}
module.exports = {
    AddClients,
    FindAllClients,
    FindSingleClient,
    UpdateClients,
    DeleteClients,
}