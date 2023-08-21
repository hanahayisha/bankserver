const mongoose=require('mongoose')

//create model for connection
// for users
const users=new mongoose.model("users",{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[]
})
//export model
module.exports=users