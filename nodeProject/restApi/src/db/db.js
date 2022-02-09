const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rest_api').then(()=>{
    
    console.log(`databases connected in mongoose`);
}).catch((err)=>{
    console.log(`databases not connected`);
});

//console.log(mongoose);