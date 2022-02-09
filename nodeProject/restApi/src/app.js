
const express = require("express");
cors = require('cors');
const app = express();
app.use(cors());
require('./db/db');
students = require('./model/students');
const port = process.env.PORT || 8000;
app.use(express.json());
app.post('/students',function(req,res){
console.log(req.body);
    const user = new students(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
   // res.send("hello world the first api");
})

app.get('/students',cors(),function(req,res){
    const viewData = async() =>{
        try{
         const studentView =  await students.find({});
         res.send(studentView);
        }catch(err){console.log(err);}
       }
       viewData();
    
})
app.put('/students',(req,res)=>{
res.send("hello word");
});
app.listen(port,()=>{
console.log("connect start");
});
