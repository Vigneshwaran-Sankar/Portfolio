const nodeMailer = require('nodemailer');


const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dummymail88381@gmail.com',
        pass: 'dummymailpassword'
    }
});


const sendMail = (email, message) => {
    const mailOptions = {                                                      //Composing the E-Mail
        from: 'dummymail88381@gmail.com',
        to: 'vigneshsankar53@gmail.com',
        subject: email,
        text: message
    };
    
    
    transporter.sendMail(mailOptions, function(error, _data){                  //Sending the E-Mail
        if (error) {
            console.log(error);
        } else {
            console.log('Message Sent!!!');
        }
    }); 
}

module.exports = sendMail;