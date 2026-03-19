const express = require('express');
const cors = require('cors');
const routes = require('./Router/router');
const connectMongo = require('./config/db');
const session = require("express-session");


const app = express();
connectMongo()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));



app.use('/api',routes);

app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})