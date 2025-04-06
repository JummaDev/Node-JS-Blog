const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { body, validationResult } = require('express-validator')
const flash = require('connect-flash')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const connectDB = require('./config/connectdb')
const homeController = require('./routes/home')
const aboutController = require('./routes/about')
const contactController = require('./routes/contact')
const signinController = require('./controllers/signin')
const signupController = require('./controllers/signup')
const adminpostlinksController = require('./controllers/adminpostlinks')
const postidlinksController = require('./controllers/postidlinks')
const signinUserController = require('./controllers/signinUser')
const expressSession = require('express-session');
const usercommentinsatertionController = require('./controllers/usercommentinsertion')
const replycommentinsertionController = require('./controllers/replycommentinsertion')
const usercommentlinkController = require('./controllers/usercommentlink')
const forgotpasswordController = require('./controllers/forgotpassword')
const forgotpasswordlinkController = require('./routes/forgotpasswordlink')
const userpassresetController = require('./controllers/userpassreset')
const userpassresetlinkController = require('./routes/userpassresetlink')
const logoutController = require('./controllers/logout')
const adminlinkController = require('./routes/adminlink')
const adminRoute = require('./controllers/adminRoute')
validateUserSchemaMiddleware = require('./middleware/validateUserSchema')
// controllers links ends here

global.loggedIn = null;

const app = new express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const ejs = require('ejs')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { nextTick } = require('process')
const { validate, findOne } = require('./models/AdminPost')
connectDB(DATABASE_URL)
const UserData = require('./models/UserData')
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const urlencodedParser = bodyParser.urlencoded({extended:false})
// body parser for signup form ends here

app.use(cookieParser())

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(expressSession({secret: 'keyboard cat'}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
  });
  app.use(flash());

// controller for pages here
app.get('/',homeController)
app.get('/about',aboutController)
app.get('/contact',contactController)
app.get('/auth/signin',signinController)
app.get('/auth/signup',signupController)
app.get('/blog',adminpostlinksController)
app.get('/blog/post/:posttitle',postidlinksController)
app.get('/auth/signin/forgot-password',forgotpasswordlinkController)
app.get('/auth/signin/reset-password/:id/:token',userpassresetlinkController)
app.get('/adminlogin',adminlinkController)
app.use('/admin',adminRoute)

app.post('/users/signup',urlencodedParser,[
    body('username','Do not leave username empty').not().isEmpty(),

    body('email','Email is not valid')
    .isEmail()
    .normalizeEmail(),
    
    body('pass','Password should be minimum 5 characters long')
    .isLength({ min: 5 }),
    body('reppass').custom((value, { req }) => {
        if (value !== req.body.pass) {
          throw new Error('Password does not match');
        }
    
        // Indicates the success of this synchronous custom validator
        return true;
    }),

    body('email').custom(value => {
        return UserData.findOne({email: value}).then(user => {
          if (user) {
            return Promise.reject('Email already in use');
          }
        });
      }),

        ],
(req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).jsonp(errors.array());
    const alert = errors.array()
    res.render('signup',{
        alert
    })
  }else{

    UserData.create({
      username: req.body.username,
      email: req.body.email,
      pass: req.body.pass,
      is_admin:0
    })
    req.flash('signupsuccess', 'You have successfully signed up')
    return res.redirect('/auth/signup')

  }

},
)

app.post('/users/signin',signinUserController)
app.get('/auth/logout',logoutController)

app.post('/blog/post/comment',usercommentinsatertionController)
app.post('/blog/post/reply',replycommentinsertionController,usercommentlinkController)

app.post('/auth/signin/forgot-password/check-email',forgotpasswordController)

app.post('/auth/signin/reset-password/:id/:token',userpassresetController)

// controller for pages ends here

app.use((req,res)=>res.render('pagenotfound')); 


app.listen(port, ()=>{
console.log(`App listening on port ${port}`)
})