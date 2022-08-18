const mongoose=require('mongoose')
const deepPopulate=require('mongoose-deep-populate')(mongoose)

const AdminsSchema=new mongoose.Schema({
    username :{type:String},
    password :{type:String},
    matricule:{type:String},
    email :{type:String},
   
    isVisible:{type:Boolean ,default:true},
    createAt :{type:Date}
})

const population=[]

const Admins=mongoose.model('Admins',AdminsSchema,'Admins')
module.exports=Admins
