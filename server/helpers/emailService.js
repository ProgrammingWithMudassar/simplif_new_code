import nodemailer from 'nodemailer';
import util from 'util';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mudassarhus667788@gmail.com',
        pass: 'umzebqjmakgxgcbw' 
    }
});

// Promisify the sendMail method to use with async/await
const sendMailAsync = util.promisify(transporter.sendMail.bind(transporter));

// Function to send OTP via email
async function sendOTP(email, otp) {
    const mailOptions = {
        from: 'mudassarhus667788@gmail.com',
        to: email,
        subject: 'Verify Email',
        text: `Your verification code is ${otp}`,
        html: `<b>Your verification code is ${otp}</b>` 
    };

    try {
        await sendMailAsync(mailOptions);
        console.log('Email sent successfully');
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
}

export { sendOTP };
