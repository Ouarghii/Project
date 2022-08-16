const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const AutreSchema = new Schema({
    Email: String,
    Fullname: String,
    Type : String,
    status : String,
},{timestamps:true})
module.exports = mongoose.model('autres',AutreSchema)