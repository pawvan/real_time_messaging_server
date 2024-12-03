const express= require('express')
const router = express.Router()
const {sendMessage,getMessages} =require('../services/messageServices')
router.post('/send',async (req,res)=>{
    try{
const {senderId,receiverId,content}=req.body
const message = await 
    }
    catch(error){

    }

})