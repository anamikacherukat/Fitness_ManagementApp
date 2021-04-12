const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ClientDb');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    inst_name : String,
    specialisation : String,
    age : String,
    phone : String,
    email : String,
    
});

var Instructordata = mongoose.model('instructor', NewUserSchema);   
                     //UserData is the model and NewBookData is the schema

module.exports = Instructordata;