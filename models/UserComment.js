const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCommentSchema = new Schema({
    
    name: String,
    email: String,
    posttitle: String,
    comment: String,
    dateposted: String
    
});

const UserComment = mongoose.model('UserComment',UserCommentSchema);

module.exports = UserComment