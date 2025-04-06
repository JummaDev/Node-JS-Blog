const express = require('express')
const admin_route = express()
const session = require('express-session')
const Dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')


const adminAuth = require('../middleware/adminAuth')
const adminController = require('../controllers/adminController')
const admincreatepostController =require('../controllers/admincreatepost')
const upload = require('../middleware/upload')

admin_route.use(session({secret:process.env.JWT_SECRET}))
admin_route.use(cors())
admin_route.use(express.json())
admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({extended: true}));


admin_route.set('view engine', 'ejs')
admin_route.set('views','./views/admin')
// admin_route.use(express.static(path.join(__dirname+"/public")))
admin_route.use(express.static('public'))


admin_route.get('/',adminAuth.isLogout,adminController.loadLogin)

admin_route.post('/',adminController.verifyLogin)

admin_route.get('/createpost',adminAuth.isLogin,adminController.loadDashboard)

admin_route.post('/createpost',upload,admincreatepostController)

admin_route.get('/logout',adminAuth.isLogin,adminController.logout)

admin_route.get('*',function(req, res){
    res.redirect('/admin')
})

module.exports = admin_route; 


