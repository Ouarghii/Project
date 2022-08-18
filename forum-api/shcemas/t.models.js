const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const TypesSchemas = new Schema({
    Email: String,
    Fullname: String,
    NumberPhone: String,
    Nouveautype:String,
    status : String,
},{timestamps:true})
module.exports = mongoose.model('types',TypesSchemas)