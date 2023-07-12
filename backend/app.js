const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Users=require('./model/userModel');

dotenv.config();



// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());

//signup api
app.post('/signup', async(req,res)=>{
   
});

//login api
app.post('/login', async(req,res)=>{
    
})

module.exports = app;