var express = require('express');
var router = express.Router();
const Members=require('../shcemas/members.schema')
/* GET users listing. */
router.get('/',async function(req, res, next) {
    const members=await Members.find()
  res.send(members);
});
router.post('/',async function(req,res,next){
    const {username,email,password}=req.body
//check if user exist
let error=false
const member=await Members.findOne({
    email
})
if(member){  
    error=true
    res.send({msg:'email already register',ok :false})

}

if(password.length===0){
    error=true
    res.send({msg:'password valid'})
}
if(!error){
    const newMember=await Members.create({
        username,
        email,
        password,
        
        
        createAt:new Date()
    })
    res.send({newMember,ok:true})    
}

})


router.post('/login',async function(req,res,next){
    const {email,password}=req.body
    //CHEK MEMBER
    const member=await Members.findOne({
        email,
        password
    })
    if(member){  res.send({state:'done',ok:true,_id:member._id,email:member.email})}
    else {
        res.send({state:'error data',ok:false})
    }
  
})


router.put('/',async function(req,res,next){
    const {username,
        email,
        password,
       
        _id}=req.body
    const newMember=await Members.findByIdAndUpdate(_id,{
        username,
        email,
        password,
        
        
    },{new:true})
    res.send(newMember)
})

router.delete('/',async function(req,res,next){
    const {_id}=req.body
    const newMember=await Members.findByIdAndUpdate(_id,{
        isVisible:false,
    },{new:true})
    res.send(newMember)
})

module.exports = router;