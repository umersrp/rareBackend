// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// const booking = require('../models/booking');

// // Set up Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     host: 'srca.com.pk',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'rare@srca.com.pk',
//         pass: '1Pakistan23@'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// // Connect to your MongoDB database
// mongoose.connect(process.env.DATABASE_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Get yesterday's date
// const yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);

// // Find bookings created yesterday
// booking.find({ createdAt: { $gte: yesterday, $lt: new Date() } }, (err, bookings) => {
//     if (err) {
//         console.error('Error fetching bookings:', err);
//     } else {
//         // Send confirmation emails
//         bookings.forEach((booking) => {
//             const mailOptions = {
//                 from: 'notification@rarehomes.ae',
//                 to: "tahasrca@gmail.com", // Assuming there's a field for guest email in your Booking model
//                 subject: `Booking Confirmation ${booking.confirmationcode}`,
//                 text: 'Thank you for your booking!',
//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.error('Error sending email:', error);
//                 } else {
//                     console.log('Email sent:', info.response);
//                 }
//             });
//         });
//     }

//     // Close the database connection
//     mongoose.connection.close();
// });


const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const booking = require('../models/booking');
const cron = require('node-cron');
const addProperty = require('../models/addProperty');
const moment = require('moment-timezone');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'srca.com.pk',
    port: 465,
    secure: true,
    auth: {
        user: 'rare@srca.com.pk',
        pass: '1Pakistan23@'
    },
    tls: {
        rejectUnauthorized: false
    }
});


// Connect to your MongoDB database
mongoose.connect("mongodb+srv://taha:1Pakistan23@dev-rare-db.jabkunr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// connectDB()

console.log('data connected')
console.log('cronjob starts')

// Define a cron job to run every 2 minutes
cron.schedule('*/2 * * * *', async () => {
    try {
        // Get yesterday's date
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);

        console.log(yesterday, "yesterday")
        // Find bookings created yesterday
        const bookings = await booking.find({ createdAt: { $gte: yesterday, $lt: new Date(yesterday.getTime() + 24 * 60 * 60 * 1000) } });

        // Send confirmation emails
        for (const booking of bookings) {
            if (booking && booking.cancelled !== true && booking.softdelete !== true) {
                const properties = await addProperty.find({ _id: { $in: booking.propertyid } });
                const property = properties.find(property => property._id.toHexString() === booking.propertyid.toHexString());
                let formattedcheckindate = booking.checkindate ? moment.tz(booking.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : '';
                let formattedcheckoutdate = booking.checkoutdate ? moment.tz(booking.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : '';


                let contentHeading = `Hello, ${booking.guestname}`
                let contentPara = `Thank you for choosing "RARE HOMES GROUP" for your upcoming stay ar property, "${property.unitnumber}". Your booking has been successfully confirmed under booking ID, "${booking.bookingnumber}", with check-in on "${formattedcheckindate}" and check-out on "${formattedcheckoutdate}". We look forward to hosting you and ensuring a wonderful experience during your stay.`
                let source = fs.readFileSync(path.join(__dirname, 'booking-guest-cron.hbs'), 'utf8');
                const template = Handlebars.compile(source);
                let htmlToSend = template({ contentHeading, contentPara });

                const mailOptions = {
                    from: 'notification@rarehomes.ae',
                    to: "saifahmedsrp@gmail.com", // Assuming there's a field for guest email in your Booking model
                    subject: `Booking Confirmation ${booking.confirmationcode}`,
                    html: htmlToSend,
                    // text: 'Thank you for your booking!',
                };

                await transporter.sendMail(mailOptions);

                console.log(`Email sent to ${booking.bookingnumber}`);
            }
        }
        console.log('cronjob end')
    } catch (error) {
        console.error('Error:', error);
    }
    // finally {
    //     // Close the database connection
    //     mongoose.connection.close();
    // }
});

// Start the cron job
// cron.start();
