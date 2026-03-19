const mongoose = require('mongoose');

const connectMongo = () =>{
    mongoose.connect('mongodb+srv://mishraadi1923_db_user:yJl3BDzDRWjBsLAu@cluster0.p0fvoxw.mongodb.net/test')
    .then(()=> console.log('connnected to db...'))
    .catch((err)=>console.log(err))
}

module.exports= connectMongo