const bcrypt = require('bcrypt')
const User = require('../models/UserData')

module.exports = (req,res) =>{
    const {email,pass} = req.body;

    User.findOne({email:email},(error,user)=>{
        if(user){
            bcrypt.compare(pass, user.pass, (error, same)=>{
                if(same){ 
                    req.session.userId = user._id

                    req.flash('success', 'You have successfully signed in')
                    res.redirect('/')
                
                }else{
                    
                    req.flash('error', 'Wrong Email or Password')
                    res.redirect('/auth/signin')
                    
                }
            })
        }else{
            req.flash('error', 'Wrong Email or Password')
            res.redirect('/auth/signin')
        }
    })
}