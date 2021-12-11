

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    nume: {type: String, required:true, maxlength:128},
    problema:{type:String, required:true, maxlength:128},
    pavilion: {type: String, required:true, maxlength:128},
    etaj: {type: String, required:true, maxlength:16},
    camera:{type: String, requird:true, maxlength:16},
    descriere: {type: String, required:true},
    startDate:{type: Date, required:true},
    endDate:{type: Date},
    //userId:{type: String, required:true},
    createAt:{type: Date, default:Date.now }

})

module.exports = mongoose.model('Portfolio', portfolioSchema)