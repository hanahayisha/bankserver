//importing express
const express=require('express')
//import  env file
require('dotenv').config()
//import cors
const cors=require('cors')
const rout = require('./routes/router')
//import db connection
require('./db/dbconnection')
//creating server using express
const server=express()
//connect with frontend
server.use(cors())
//to convert all incoming json type datas in to javascript
server.use(express.json())

server.use(rout) //to use the route

// to resolve get request done wrt path
// server.get('/getpath/usernew',(req,res)=>{
//    res.send("get request response...")
// })
// server.get('/getpath/lastuser',(req,res)=>{
//    res.send("get request response 2...")
// })
 //port set
 const port=3001 || process.env.port    //to get that port
 //running config
 server.listen(port,()=>{
    console.log(`________server started at port number_________${port}`);
 })