const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplyCommentSchema = new Schema({
    
    replyusername: String,
    replyuseremail: String,
    replyposttitle: String,
    replycomment: String,
    replyuserid: String,
    replydateposted: String
});

const ReplyComment = mongoose.model('ReplyComment',ReplyCommentSchema);

module.exports = ReplyComment