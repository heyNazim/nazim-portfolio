import nodemailer from 'nodemailer';
import twilio from 'twilio'
import userModel from '../userModel.js';


export const usercontroller = async(req,res)=>{

try {
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
        return res.status(200).send({
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
    
      // twilio
      const accountSid = `${process.env.ACCOUNT_SID}`;
const authToken = `${process.env.AUTH_TOKEN}`;

const client = new twilio(accountSid, authToken);

return client.messages
  .create({
    body: 'Hello from twilio-node',
    to: `+91 ${user.phone}`, // Text your number
    from: `${process.env.TWILIO_PHONE_NUMBER}`, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  
  
} catch (error) {
    res.status(500).send({
        success:false,
        message:"Something went wrong",
        error
    })
}

}


   