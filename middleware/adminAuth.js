const UserData = require('../models/UserData')
const isLogin = async(req, res, next)=>{
    try {

        const userData = await UserData.findById({_id: req.session.userId});
        
        if(userData.is_admin === 1){}
        
        else{
            return res.redirect('/')
        }
        
        next();

    } catch (error) {
        console.log(error)
    }
}

const isLogout = async(req, res, next)=>{
    try {
        
        if(req.session.userId){
           return res.redirect('/admin/createpost') 
        
        }

        next();

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    isLogin,
    isLogout
}