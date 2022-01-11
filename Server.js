const { text } = require('body-parser');
const express =require('express');
const app=express()
const Port= process.env.Port || 5000;
const nodemailer= require('nodemailer');
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req ,res)=>{
    res.sendFile(__dirname + '/public/Index.html')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'abhishekteni13@gmail.com',
            pass:'Abhishek@123'
        }
    })

    const mailOptions={
        from: req.body.email,
        to: 'abhishekteni13@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:'+ info.response);
            res.send('success')
        }
    })

})
app.listen(Port, ()=>{
     console.log(`Server running on port ${Port}`)
})