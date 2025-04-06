const UserData = require('../models/UserData')
const jwt = require('jsonwebtoken');
const Dotenv = require('dotenv').config()
const nodemailer =require('../config/emailConfig')

module.exports = async (req,res)=>{
    const { useremail } = req.body;
    const checkemail = await UserData.findOne({email:useremail});
      if(checkemail){
        
        const secret = process.env.JWT_SECRET + checkemail._id;
        const payload = {
          email: checkemail.email,
          id: checkemail._id
        }
        const token = jwt.sign(payload, secret, {expiresIn: '10h'});
        const link = `http://localhost:4000/auth/signin/reset-password/${checkemail._id}/${token}`
        console.log(link)
        
        let info = await nodemailer.sendMail({
          from: process.env.EMAIL_FROM,
          to: checkemail.email,
          subject: "CodeMentor - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to reset your password`
        })

        req.flash("emailsendsuccess","Password reset link has been sent to your email..")
        res.redirect("/auth/signin/forgot-password");
        // res.send({"status":"success","message":"Password reset link has been sent to your email...","info": info}); 
        
      }else{
        req.flash("emailsendfail","User email is not registered. Please type correct email..")
        res.redirect("/auth/signin/forgot-password");
        
      }
  }