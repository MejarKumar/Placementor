const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next)=>{
    // const token = req.cookies.jwt;
    const token = req.header('x-auth-token');
    console.log(token);
    //check json web token exits & is verified
    if(token){
        jwt.verify(token,'my secret',(err,decodedToken)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        console.log("You are not admin");
    }
}

module.exports = {requireAuth};