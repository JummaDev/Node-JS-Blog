const UserData = require('../models/UserData')
const bcrypt = require('bcrypt')

const loadLogin = async(req, res)=>{
    try {
        
        res.render('adminlogin')

    } catch (error) {
        console.log(error)
    }
}

const verifyLogin = async(req, res)=>{
    try {
        
        const email = req.body.email;
        const pass = req.body.pass;

        const userData = await UserData.findOne({email: email});

        if(userData){
            const passwordmatch = await bcrypt.compare(pass, userData.pass);

            if(passwordmatch){

                if(userData.is_admin === 0){
                    res.render('adminlogin',{message: "Email or Password is incorrect"})

                }
                else{
                    req.session.userId = userData._id;
                    res.redirect('/admin/createpost')
                }

            }else{
                res.render('adminlogin',{message: "Email or Password is incorrect"})
            }

        }else{
            res.render('adminlogin',{message: "Email or Password is incorrect"})

        }

    } catch (error) {
        console.log(error)
    }
}

const loadDashboard = async(req, res)=>{
    try {
        res.render('createpost')

    } catch (error) {
        console.log(error)
    }
}

const logout = async(req, res)=>{
    try {
        
        req.session.destroy();
        res.redirect('/admin')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loadLogin,
    verifyLogin,
    loadDashboard,
    logout
}