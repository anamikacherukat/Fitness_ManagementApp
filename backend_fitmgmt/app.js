const express = require('express');
const UserData = require('./src/model/Userdata');
const InstructorData = require('./src/model/Instructordata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
 app.use(express.json());
 app.use(bodyparser.json())
 username='admin';
 password='1234';
 
app.post('/insert', function(req,res){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
  console.log(req.body);
 
   var user = {       
       membership_num : req.body.user.membership_num,
       member_fname : req.body.user.member_fname,
       member_mname : req.body.user.member_mname,
       member_lname : req.body.user.member_lname,
       member_address : req.body.user.member_address,
       member_gender : req.body.user.member_gender,
       member_age : req.body.user.member_age,
       member_email:req.body.user.member_email,
       member_password:req.body.user.member_password
  }       
  var user = new UserData(user);
  user.save();
 });
app.post('/insertinst',function(req,res){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
  console.log(req.body);
 var instructor = {       
  inst_name : req.body.instructor.inst_name,
  specialisation : req.body.instructor.specialisation,
  age : req.body.instructor.age,
  phone : req.body.instructor.phone,
  email : req.body.instructor.email,
}       
var instructor = new InstructorData(instructor);
instructor.save();
});
 


app.get('/users/single', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id = req.query.i;
    UserData.findOne({_id:id})
    .then(function(user){
        res.send(user);
    })

});
app.delete('/remove/:id',(req,res)=>{
  id = req.params.id;
  UserData.findByIdAndDelete({"_id":id})
  .then(()=>{
      res.send();
  })
})
app.post('/update/:i', function(req,res){
  var id = req.params.i
  var item = { $set : req.body.user }
  UserData.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
      if (err) {
          console.log(err);
      } else {
          res.send();
      }
  });
});



app.get('/instructors/single', function(req,res){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id = req.query.i;
  InstructorData.findOne({_id:id})
  .then(function(instructor){
      res.send(instructor);
  })

});
app.delete('/removeinst/:id',(req,res)=>{
id = req.params.id;
InstructorData.findByIdAndDelete({"_id":id})
.then(()=>{
    res.send();
})
})
app.post('/updateinst/:i', function(req,res){
var id = req.params.i
var item = { $set : req.body.user }
InstructorData.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
    if (err) {
        console.log(err);
    } else {
        res.send();
    }
});
});



app.post('/login', (req, res) => {
  let bioData = req.body
  
    console.log(bioData)
      if (!username) {
        res.status(401).send('Invalid Username')
        alert("Invalid Username")
      } else 
      if ( password !== bioData.password) {
        res.status(401).send('Invalid Password')
        alert("Invalid password")
      } else {
         let payload = {subject: username+password}
         let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    
  })

  
  app.get('/users', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    UserData.find()
        .then(function(users){
            res.send(users);
        });
});

app.get('/instructors', function(req,res){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  InstructorData.find()
      .then(function(instructors){
          res.send(instructors);
      });
});


    
app.listen(5000, () => {console.log("server ready at 5000");
});