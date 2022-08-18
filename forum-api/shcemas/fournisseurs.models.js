const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const FournisseurSchema = new Schema({
    Email: String,
    Fullname: String,
    NumberPhone: String,
    status : String,
},{timestamps:true})
module.exports = mongoose.model('fournisseur',FournisseurSchema)