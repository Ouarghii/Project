const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const BoiteSchema = new Schema({
    Email: String,
    Name: String,
    Phone: String,
    Status : String,
},{timestamps:true})
module.exports = mongoose.model('boites',BoiteSchema)