require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const placement = require("./routes/placement");
const internship = require("./routes/internship");
const authrouter = require("./routes/authroute");
const Comment = require("./model/comment");
const app = express();

const path = require("path");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
connectDB();
app.use(express.static("public"));
app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/comments", (req, res) => {
  Comment.find({}, (err, cmt) => {
    if (err) {
      console.log(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(cmt);
    }
  })
    .sort({ createdAt: "desc" })
    .limit(4);
  // console.log("call for geting comments");
});

app.post("/comments", async (req, res) => {
  const { username, useremail, description } = req.body;
  const cmt = new Comment({
    username: username,
    useremail: useremail,
    description: description,
  });

  await cmt.save();
  res.send(cmt);

  // console.log(username,useremail,description);
});

// email send 

  
 app.get("/send_mail",async(req,res)=>{

let transporter = await nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.gmail_Address,
    pass: process.env.gmail_password
  },
});

 // send mail with defined transport object
  let info =await transporter.sendMail({
    to: "mejarkumar2003@gmail.com", // list of receivers
  //  from: 'mehulagarwal0001@gmail.com', 
  //  from: req.body.email, // sender address
  replyTo :"mejarsamrat2003@gmail.com",
    subject: "Placementor", // Subject line
    text: req.body.description, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);

})



app.use(internship);
app.use(placement);
app.use(authrouter);
app.use(cookieParser);

//cookies
app.get("/set-cookies", (req, res) => {
  // res.setHeader('set-cookie','newAdmin=true');
  res.cookie("newAdmin", false);
  res.cookie("isAdmin", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send("you got the cookies");
});
app.get("/read-cookies", (req, res) => {
  res.json(res.cookie);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`server started at ${process.env.PORT || 3000}`)
);
