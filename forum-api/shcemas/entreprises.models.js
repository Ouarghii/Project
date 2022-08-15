const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const EntrepriseSchema = new Schema({
    Email: String,
    Name: String,
    Matricule : String,
    Status : String,
},{timestamps:true})
module.exports = mongoose.model('entreprises',EntrepriseSchema)