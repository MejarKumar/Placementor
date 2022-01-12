const mongoose = require("mongoose");
const {isEmail}= require("validator");
const bcrypt = require("bcrypt");
var schema = mongoose.Schema;

var AdminSchema = new schema({
    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter password'],
        minLength:[6,'Minimum length of password should be 6'],
    },

});

//fire a function before doc saved
AdminSchema.pre('save',async function(next){
       const salt = await bcrypt.genSalt();
       this.password = await bcrypt.hash(this.password,salt);
    //    console.log(this.password);
    
        next();
    });

AdminSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});
    if(user){
      const auth= await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
            throw Error('Incorrect Password');
        
    }
        throw Error('Incorrect Email');
}


module.exports = mongoose.model("Admin",AdminSchema);
