const express = require('express');
const sendMail = require('./mail');
const app = express();                                              //Intializing the express application
const path = require('path');
const PORT = 8080;                                                  //Setting Up PORT 

//Data Parsing 
app.use(express.urlencoded({                                        //Whenever the Html sends Data , I successfully be able to get those data through JSON 
    extented: false
}));
app.use(express.json());


// To Provide CSS to Page
app.use(express.static(__dirname));


app.post('/email', (req, res) => {
    //send email here
    const { 
        email,  
        message 
    } = req.body;

    console.log('Data:', req.body);

    sendMail(email, message, function(error, data){                          //Passing the User Data
        if(error){
            res.status(500).json({ message: 'Internal Error'});
        }else{
            res.json({ message: 'Email Sent Successfully!!!'})      //Telling the email was sent successfully
        }
    });                                               
});



app.get('/', (_req, res) => {                                       //configuring for displaying the index.html in the server (i.e)Render Routing
    res.sendFile(path.join(__dirname,'','index.html'));
});


app.listen(PORT, () => {
    console.log('Server is starting on PORT',8080);
});