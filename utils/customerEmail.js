const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const customerEmail = async (email, subject, contentHeading, contentPara, userName, passWard, url) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'srp.ai',
            port: 465,
            secure: true,
            auth: {
                user: 'rare@srca.com.pk',
                pass: '1Pakistan23@'
            }
        });

        let source = fs.readFileSync(path.join(__dirname, 'customer-create.hbs'), 'utf8');
        const template = Handlebars.compile(source);
        let htmlToSend = template({ contentHeading, contentPara, userName, passWard, url });

        await transporter.sendMail({
            from: 'notification@rarehomes.ae',
            to: email,
            subject: subject,
            html: htmlToSend
        });

        console.log('Email sent successfully to customer');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = customerEmail;
