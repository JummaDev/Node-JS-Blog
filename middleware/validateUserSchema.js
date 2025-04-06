const req = require('express/lib/request');
const UserData = require('../models/UserData')

module.exports = async (req,res,next)=>{
    const {pass, reppass} = req.body;

    await UserData.create(pass==reppass,(error,user)=>{
        if(error){
            res.send('Password do not match');
            return res.redirect('/auth/signup')
        }

        res.redirect('/')
    })
    next()
}



// req.flash('passnotmatch', 'password do not match')

    
