const mongoose=require('mongoose')
const deepPopulate=require('mongoose-deep-populate')(mongoose)

const MembersSchema=new mongoose.Schema({
    username :{type:String},
    password :{type:String},
    email :{type:String},
    isVisible:{type:Boolean ,default:true},
    createAt :{type:Date}
})

const population=[]

const Members=mongoose.model('Members',MembersSchema,'Members')
module.exports=Members
