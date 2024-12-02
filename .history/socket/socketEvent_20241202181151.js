/*!
 * This code is belongs to Pawvan 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */
const {sendMessage,getMessages} = require('../services/messageService')
module.exports=(socket,io)=>{
    console.log("user connected to websocket")
    socket.on('sendMessage',async(message)=>{
        try{
const newMessage = await sendMessage(message);
io.emit('receiveMessage',newMessage);

        }
        catch(error){
console.error('message sending failed: ',err);
        }
    })
    socket.on('getMessages',async ()=>{
        try{
            const messages = await getMessages();
            socket.emit('messageHistory',messages);
        }
        catch(error){
console.error('failed to fetch messages :',err);
        }
    });
    socket.on('getMessages',async()=>{
        try{

        }
    })
}