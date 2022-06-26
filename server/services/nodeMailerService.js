const nodeMailer = require('nodeMailer');

exports.sendMailWithNodeMailer  = (req, res, emailData) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAILER_ID,
            pass: process.env.MAILER_PASSWORD
        },
        tls: {
            ciphers: "SSLv3"
        }
    });


    return transporter
        .sendMail(emailData)
        .then((info) => {
            console.log(`Message sent: ${info.response}`);

            return res.status(200).json({
              message: `Email has been sent to your email. Follow the instruction to activate your account`,
            });
        })
        .catch((err) => {console.error(`Problem sending email: ${err}`)})
}