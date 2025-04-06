const UserComments = require('../models/UserData')

module.exports =  async (req,res)=>{
    const usercomments = await UserComments.findOne({comments})
    // console.log(usercomments)
    res.render('post',{
        usercomments: usercomments
    });
}