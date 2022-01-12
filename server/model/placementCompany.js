const mongoose = require("mongoose");
var schema = mongoose.Schema;

var PlacementCompanySchema = new schema({
    name:{
        type: String,
    },
    // logo:{
    //     type:String
    // },
    selected_students:{
        type: Number,
        required:true
    },
    description:{
        type:String
    },
    year:{
        type:Number
    }
    

});

module.exports = mongoose.model("PlacementCompany",PlacementCompanySchema);
