const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-password'         // replace with your password
    }
});

// Handle Career Form Submission
app.post('/submitCareerForm', upload.none(), (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'ayushpathre5@gmail.com',
        subject: 'New Career Application',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email.');
        }
        res.send('Career details submitted.');
    });
});

// Handle Feedback Form Submission
app.post('/submitFeedback', upload.none(), (req, res) => {
    const { fname, lname, email, phone, feedbackMessage } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'ayushpathre5@gmail.com',
        subject: 'New Feedback',
        text: `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPhone: ${phone}\nFeedback: ${feedbackMessage}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending feedback.');
        }
        res.send('Feedback submitted.');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
