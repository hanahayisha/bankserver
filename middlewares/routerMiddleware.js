const jwt=require('jsonwebtoken')

//middleware to validate webtoken
const jwtMiddleware=(req,res,next)=>
{
    try
    {
    //access token from request header
    const token=req.headers["access_token"]
    //if token not there eg:unuthorized useraccess then runtime error will be there
    //use try catch to resolve
    //validate token-jwt-veriy()
    jwt.verify(token,"secretkey123") // true/false
    next()
    }
    catch
    {
        res.status(404).json("please login")
    }
}


module.exports=jwtMiddleware