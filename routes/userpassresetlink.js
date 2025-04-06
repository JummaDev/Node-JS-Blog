const UserData = require('../models/UserData')
const Dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
module.exports = async (req, res)=>{  
  const { id, token } = req.params
  const currentUser = await UserData.findOne({_id: id})

    res.render('resetpassword',{
      passconfirmfail: req.flash('passconfirmfail'),
      passresetsuccess: req.flash('passresetsuccess'),
      emptyerror: req.flash('emptyerror'),
      minpass: req.flash('minpass'),
      email: currentUser.email
    })
  
  }