const nodemailer= require('nodemailer');

const transporter=nodemailer.createTransport({
    service: 'gmail',
     auth:{
        user:'sayan.nodemailer@gmail.com',
        pass:'ebdgnhfmkjyjooek'
     }
});
var mailOptions ={
    from:'sayan.nodemailer@gmail.com',
    to:'ashishjhainfo2@gmail.com',
    subject:'Mail Sent Using NodeJS',
    text:'This is a test email send using NODE-JS'
};

transporter.sendMail(mailOptions,function(err,info){
    if(err)
    console.log(err);
    else
    console.log('Email Sent: '+info.response);
});