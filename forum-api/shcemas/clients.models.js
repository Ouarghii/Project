const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const ClientSchema = new Schema({
    Email: String,
    Fullname: String,
    Cin : String,
    NumberPhone: String,
    Profession : String ,
    status : String,
},{timestamps:true})
module.exports = mongoose.model('clients',ClientSchema)