var express = require('express');
var router = express.Router();
const Admins=require('../shcemas/admin.schema')
/* GET users listing. */
router.get('/',async function(req, res, next) {
    const admins=await Admins.find()
  res.send(admins);
});
router.post('/',async function(req,res,next){
    const {username,password,matricule,email}=req.body
//check if user exist
let error=false
const admin=await Admins.findOne({
    email
})
if(admin){  
    error=true
    res.send({msg:'email already register',ok :false})

}
if(password.length===0){
    error=true
    res.send({msg:'password valid'})
}
if(matricule.length===0){
    error=true
    res.send({msg:'matricule valid'})
}
if(email.length===0){
    error=true
    res.send({msg:'email valid'})
}
if(!error){
    const newAdmin=await Admins.create({
        username,
        password,
        matricule,
        email,
       
        
        createAt:new Date()
    })
    res.send({newAdmin,ok:true})    
}

})


router.post('/logina',async function(req,res,next){
    const {email,password,matricule}=req.body
    const admin=await Admins.findOne({
        email,
        password,
        matricule
    })
   
    if(admin){  res.send({state:'done',ok:true,_id:admin._id,email:admin.email,matricule:admin.matricule})}
    else {
        res.send({state:'error data',ok:false})
    }
  
})


router.put('/',async function(req,res,next){
    const {username,
        password,
        matricule,
        email,
        
        _id}=req.body
    const newAdmin=await Admins.findByIdAndUpdate(_id,{
        email,
        password,
        matricule,
        
       
        
    },{new:true})
    res.send(newAdmin)
})

router.delete('/',async function(req,res,next){
    const {_id}=req.body
    const newAdmin=await Admins.findByIdAndUpdate(_id,{
        isVisible:false,
    },{new:true})
    res.send(newAdmin)
})

module.exports = router;