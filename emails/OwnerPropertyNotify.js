const nodemailer = require('nodemailer')
// const hbs = require('nodemailer-express-handlebars')
// const path = require('path')
const fs = require('fs');
const path = require('path');
const Handlebars = require("handlebars");

module.exports = async (email, subject, text) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "srp.ai",
            // host: process.env.HOST,
            // service: process.env.SERVICE,
            port: Number(465),
            // port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: "rare@srca.com.pk",
                pass: "1Pakistan23@"
                // user: process.env.USER,
                // pass: process.env.PASS
            }
        })
        // var source = fs.readFileSync(path.join(__dirname, 'password-reset.hbs'), 'utf8');
        // var template = Handlebars.compile(source);
        // transporter.use('compile', hbs({
        //     viewEngine: 'express-handlebars',
        //     viewPath: './view/',
        //     // defaultLayout: "email",
        //     // layoutsDir: "view/"
        // const htmlToSend = template({text});
        // }))
        transporter.sendMail({
            from: 'rare@srca.com.pk',
            to: email,
            subject: subject,
            text: text,
            // html: htmlToSend
            template: 'email'
        })
        console.log(`Email sent successfully`)
    } catch (error) {
        console.log("Email not send")
        console.log(error)
    }
}