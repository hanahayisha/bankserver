//import express
const express=require('express')

const logic=require('../controllers/logic') //to import logic
//create an object for router class in express

const jwtMiddleware=require('../middlewares/routerMiddleware')
const router=new express.Router()
//application specific middleware-true/false


//register request
router.post('/bankuser/user-register',logic.register)

//login
router.post('/bankuser/user-login',logic.login)
//userprofile
router.get('/bankuser/user-profile/:acno',jwtMiddleware,logic.getProfile)

//balance
router.get('/bankuser/user-balance/:acno',jwtMiddleware,logic.getBalance)

//money transfer
router.post('/bankuser/money-transfer',jwtMiddleware,logic.moneyTransfer)

//transcation history
router.get('/bankuser/user-history/:acno',jwtMiddleware,logic.history)

//delete account
router.delete('/bankuser/user-delete/:acno',jwtMiddleware,logic.deleteAc)

//export router to import it

module.exports=router
 