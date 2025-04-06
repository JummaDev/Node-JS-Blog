const UserData = require('../models/UserData')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Dotenv = require('dotenv').config()
// const JWT_SECRET = 'some super secret...'

module.exports = async (req, res)=>{
    const { password, confirmpassword } = req.body
    const { id, token } = req.params
  
    const checkid = await UserData.findOne({_id: id})
      if(!checkid) {
        res.send('Invalid Id..')
  
      }else {
        const new_secret = process.env.JWT_SECRET + checkid._id
        try {
          jwt.verify(token, new_secret)
          if(password && confirmpassword){
            if(password !== confirmpassword){
              req.flash("passconfirmfail","Password and Confirm Password do not match")
              return res.redirect(req.headers.referer);
            }

            if(password.length <= 4){
              req.flash("minpass","Password should be minimum 5 characters long")
              return res.redirect(req.headers.referer);
            }
            
            else{
              const salt = await bcrypt.genSalt(10)
              const newHashPassword =  await bcrypt.hash(password,salt)
              await UserData.findByIdAndUpdate(checkid._id, {$set:{pass: newHashPassword}})
        
              req.flash("passresetsuccess","Password reset successfully..")
              return res.redirect(req.headers.referer);
            }

          }else {
            req.flash("emptyerror","All fields are required")
            return res.redirect(req.headers.referer);
          }
  
        } catch (error) {
          console.log(error.message);
          res.send(error.message);
        }  
      }
    
}