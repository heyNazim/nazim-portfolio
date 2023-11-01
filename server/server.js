import express from "express";
import color from 'colors';
import connectDb from "./db.js";
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer';
import userModel from "./userModel.js";

const app = express();
connectDb();
dotenv.config();

app.use(cors());
app.use(express.json());


app.post('/contact',async(req,res)=>{
  const {name, email, phone, message}= req.body;

//   validation
if(!name || !email || !phone || !message){
    return res.status(401).send({
        success:false,
        message:"Plzz fill all fields"
    })
}

// Exiting user
const exixtingemail = await userModel.findOne({email})
if(exixtingemail){
    return res.status(401).send({
        success:false,
        message:`Dear ${exixtingemail.name} Your data already submitted`
    })
}
// save user
const user  = await new userModel({name, email, phone, message}).save();
res.status(201).send({
    success:true,
    message:`${user.name} Your application is submitted.`,
    user
})


// nodemailer

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nazim.saifi1908@gmail.com',
      pass: `${process.env.NODEMAILER_MY_PASS}`
    }
  });
  
  var mailOptions = {
    from: 'nazim.saifi1908@gmail.com',
    to: `${user.email}`,
    subject: 'New message from Nazim saifi',
    text: `Hello ${user.name},

    You got a new message from Nazim saifi:

    Thank you for applying. I appreciate your interest and time in applying with us.
    I will be in touch with you. 

    Best wishes,

    Nazim saifi

    Block-D, sector-9, LokpriyaVihar Khoracolony
    (Ghaziabad) - 201003  `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`.bgWhite);
})


