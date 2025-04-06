module.exports = (req,res) =>{
    if(req.session.userId == null){
        res.render('signin',{success: req.flash('success'),error: req.flash('error')})
    }else{
        res.redirect('/')
    }
}