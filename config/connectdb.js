const mongoose = require('mongoose')

module.exports = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS = {
            dbName: "blogdatabase"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('Connected Successfully...')
    } catch (error) {
        console.log(error)
    }
}
