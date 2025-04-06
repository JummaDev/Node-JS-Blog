const AdminPost = require('../models/AdminPost')


module.exports =  async (req,res)=>{
    const adminposts = await AdminPost.findOne({posttitle: req.params.posttitle})
    
    

    res.render('post',{
        adminposts: adminposts,
        commentfail: req.flash('commentfail'),
        commentsuccess: req.flash('commentsuccess'),
        replyfail: req.flash('replyfail'),
        replysuccess: req.flash('replysuccess')
    });
}   
