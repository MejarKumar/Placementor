const router = require("express").Router();
const Admin = require("../model/admin");
const jwt = require("jsonwebtoken");

//to handle error
const handleErrors = (err)=>{
console.log(err.message, err.code);
let errors = {email: '',password:''}
//validation error code
    if(err.code==11000){
        errors.email="that email is already registered" ;
        return errors;
    }

//validation error
if(err.message.includes('Admin validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path] = properties.message;
    });

}

if(err.message ==="Incorrect Email"){
    errors.message = "Given email is not registered!.";
}
if(err.message ==="Incorrect Password"){
    errors.message = "Given password is not correct!.";
}

return errors;
}

const maxAge=3*24*60*60;
const createToken= (id)=>{
    return jwt.sign({id},'my secret',{
        expiresIn:maxAge,
    })
}


router.get('/register',(req,res)=>{
    console.log("register");
  
   
});
router.post('/register',async (req,res)=>{ 
    const {email,password}=req.body;
    try {
        res.header('Access-Control-Allow-Origin','*');  
   const user= await  Admin.create({email,password});
   const token = createToken(user._id);
   res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
     
   res.status(201).json({user:user._id,token});
 
   
    } catch (err){
    const errors= handleErrors(err);
        res.status(400).send(errors);
    }
   
})

router.get("/admin_login",async(req,res)=>{
    res.send("admin_login");
})

router.post("/admin_login",async (req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await Admin.login(email,password);
        // console.log(user);
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        res.status(200).json({user:user._id,token});

    } catch (err) {
        const errors= handleErrors(err);
        res.status(400).json({errors});
    }
})


module.exports = router;


//admin token -- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjBhZDk1NTJlODIyYjAyNGU3MTdhZiIsImlhdCI6MTYzODk2ODcyNywiZXhwIjoxNjM5MjI3OTI3fQ.5QJOdRwmmQLIgOLSCHycbQks5E1ZH_MKsgSXArXbP2U