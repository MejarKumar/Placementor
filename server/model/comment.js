const mongoose = require("mongoose");
var schema = mongoose.Schema;
const date = require('date-and-time');
const now = new Date();

var CommentSchema = new schema({
    username:{
        type: String,
        required:true
    },
   useremail:{
    type:String,
    required:true
   },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        default:date.format(now, 'YYYY/MM/DD HH:mm:ss')
    }   

});

module.exports = mongoose.model("Comment",CommentSchema);
