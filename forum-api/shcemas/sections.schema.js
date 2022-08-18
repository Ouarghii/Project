const mongoose=require('mongoose')
const deepPopulate=require('mongoose-deep-populate')(mongoose)

const SectionsSchema=new mongoose.Schema({
    name :{type:String},
    description :{type:String},
    isVisible:{type:Boolean ,default:true},
    createAt :{type:Date}
})

const populate=[]

const Sections=mongoose.model('Sections',SectionsSchema,'Sections')
module.exports=Sections
