const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer ({
    storage: storage,
    // fileFilter: function(req, file, callback) {
    //     if(
    //         file.mimetype == "image/png" ||
    //         file.mimetype == "image/jpg"
    //     ){
    //         callback(null, true)
    //     }else{
    //         console.log('only png and jpg file supported!')
    //         callback(null, false)
    //     }
    // },

    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
}).fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1}, { name: 'image4', maxCount: 1}, { name: 'image5', maxCount: 1}, { name: 'image6', maxCount: 1}, { name: 'image7', maxCount: 1}, { name: 'image8', maxCount: 1}, { name: 'image9', maxCount: 1}, { name: 'image10', maxCount: 1}
 ])


module.exports = upload