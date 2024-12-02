/*!
 * This code is belongs to Pawvan
 * 
 * 
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
const jwt =require('jsonwebtoken')
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const config = require('../config/config')
const registerUser = async (username,email,password)=>{
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password,salt);;   
const newUser = new User({
    username,email,password:hashedPassword
})
await newUser.save();
return newUser;
}
const authenticateUser =async (email,password)=>{
    const user = await User.findOne({email});
    if(!user) throw new Error("user not found")
        const isMatch = await bcrypt.compare(password,user.password)
    const token =jwt.sign({
        userId:user._id},
        config.jwtSecret
        ,
        {
            
        }
    )
}