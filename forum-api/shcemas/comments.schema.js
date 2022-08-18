const mongoose=require('mongoose')
const deepPopulate=require('mongoose-deep-populate')(mongoose)

const CommentsSchema=new mongoose.Schema({
    text :{type:String},
    topic:{type:mongoose.Schema.Types.ObjectId,ref:'Topics'},
    member :{type:mongoose.Schema.Types.ObjectId,ref:'Members'},
    admin :{type:mongoose.Schema.Types.ObjectId,ref:'Admins'},

    isVisible:{type:Boolean ,default:true},
    createAt :{type:Date}
})

const population=[{
    path :'topic',
    match:{isVisible:true}
},
{
    path:'member',
    match:{isVisible:true}
},
{
    path:'admin',
    match:{isVisible:true}
}]

CommentsSchema.pre('find',findVisible(population))
CommentsSchema.pre('findOne',findVisible(population))
CommentsSchema.pre('findOneAndUpdate',findVisible())
CommentsSchema.pre('count',findVisible())
CommentsSchema.pre('countDocuments',findVisible())

CommentsSchema.plugin(deepPopulate,{})

const Comments=mongoose.model('Comments',CommentsSchema,'Comments')
module.exports=Comments