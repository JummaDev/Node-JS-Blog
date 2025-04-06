module.exports = (req,res) =>{
    if(req.session.userId == null){
        res.render('signup',{signupsuccess: req.flash('signupsuccess')});

    }else{
        res.redirect('/')
    }
}