const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ClientDb');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    membership_num : String,
    member_fname : String,
    member_mname : String,
    member_lname : String,
    member_address : String,
    member_gender : String,
    member_age : String,
    member_email:String,
    member_password:String
});

var Userdata = mongoose.model('user', NewUserSchema);   
                     //UserData is the model and NewBookData is the schema

module.exports = Userdata;