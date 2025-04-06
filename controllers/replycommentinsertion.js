const UserData = require('../models/UserData')
const AdminPost = require('../models/AdminPost');
const { header } = require('express/lib/request');

module.exports = async (req,res)=>{
    // var id = req.session.userId;
    const replyuserfulldata = await UserData.findById(req.session.userId)
    const replyname = replyuserfulldata.username;
    const replyemail = replyuserfulldata.email;
    
    var replydate = new Date();
    
    if(req.body.replycomment.replace(/\s/g, "").length <=0){
        req.flash('replyfail','Please do not leave reply input blank...');
        return res.redirect(req.headers.referer);
    }else{

        await AdminPost.updateOne({"_id": req.body.adminpostid, "comments.comment": req.body.targcomment}, {$push:{"comments.$.replies":{replyusername: replyname, replyuseremail: replyemail, replycomment: req.body.replycomment, replydateposted: replydate}}})
        
        req.flash('replysuccess','You have successfully replied');
        return res.redirect(req.headers.referer);
        
    }
        // res.send("<h3>You have successfully replied...</h3>");
        // return res.redirect(req.headers.referer)

    }