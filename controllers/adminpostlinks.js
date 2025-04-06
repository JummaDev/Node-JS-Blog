const AdminPost = require('../models/AdminPost')

module.exports =  async (req,res)=>{
    const adminposts = await AdminPost.find({})
    
    res.render('blog',{
        adminposts: adminposts
    });
}
