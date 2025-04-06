const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const req = require('express/lib/request');
const { type } = require('express/lib/response');

const UserDataSchema = new Schema({
    
    username:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    pass:{
        type: String,
        required: true
    },

    is_admin:{
        type: Number,
        required: true
    },

    is_verified:{
        type: Number,
        default: 0,
    }
    
});

UserDataSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.pass, 10, (error, hash) => {
    user.pass = hash
    next()
    })
    })

const UserData = mongoose.model('UserData',UserDataSchema);

module.exports = UserData