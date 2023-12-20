const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const guestBooking = async (email, subject, contentHeading, unitnumber, bookingnumber, checkInDate, checkOutDate) => {
    Handlebars.VM.disableInstancePrototypes = true;
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

        let source = fs.readFileSync(path.join(__dirname, 'guest-booking.hbs'), 'utf8');
        const template = Handlebars.compile(source);
        let htmlToSend = template({ contentHeading, unitnumber, bookingnumber, checkInDate, checkOutDate });

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

module.exports = guestBooking;
