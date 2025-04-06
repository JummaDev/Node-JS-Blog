module.exports = async (req,res)=>{
    res.render('forgotpassword',{emailsendsuccess: req.flash('emailsendsuccess'),emailsendfail: req.flash('emailsendfail')});
  }