const AdminPost = require('../models/AdminPost')
const UserComment = require('../models/UserData')

module.exports = async (req,res)=>{
    getsessionid = await UserComment.findById(req.session.userId) 
    
    const username = getsessionid.username
    const useremail = getsessionid.email;
    userid = getsessionid._id  
   
    var dateString = new Date();
    if(req.body.comment.replace(/\s/g, "").length <=0){
        req.flash('commentfail','Please do not leave comment input blank...');
        return res.redirect(req.headers.referer);
    }else {

        await AdminPost.updateOne({_id: req.body.postid}, {$push:{comments:{ name: username, email: useremail, comment : req.body.comment, dateposted: dateString}}});
    
        req.flash('commentsuccess','You have successfully commented');
        return res.redirect(req.headers.referer);
    }
    }



