// const nodemailer = require('nodemailer')
// // const hbs = require('nodemailer-express-handlebars')
// // const path = require('path')
// const fs = require('fs');
// const path = require('path');
// const Handlebars = require("handlebars");

// module.exports = async (email, subject, text) => {
//     try {
//         let transporter = nodemailer.createTransport({
//             host: "srp.ai",
//             // host: process.env.HOST,
//             // service: process.env.SERVICE,
//             port: Number(465),
//             // port: Number(process.env.EMAIL_PORT),
//             secure: Boolean(process.env.SECURE),
//             auth: {
//                 user: "rare@srca.com.pk",
//                 pass: "1Pakistan23@"
//                 // user: process.env.USER,
//                 // pass: process.env.PASS
//             }
//         })
//         var source = fs.readFileSync(path.join(__dirname, 'password-reset.hbs'), 'utf8');
//         var template = Handlebars.compile(source);
//         // transporter.use('compile', hbs({
//         //     viewEngine: 'express-handlebars',
//         //     viewPath: './view/',
//         //     // defaultLayout: "email",
//         //     // layoutsDir: "view/"
//         const htmlToSend = template({text});
//         // }))
//         transporter.sendMail({
//             from: 'rare@srca.com.pk',
//             to: email,
//             subject: subject,
//             // text: text,
//             html: htmlToSend
//             // template: 'email'
//         })
//         console.log(`Email sent successfully`)
//     } catch (error) {
//         console.log("Email not send")
//         console.log(error)
//     }
// }

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const sendEmail = async (email, subject, text, property, contentHeading, contentPara) => {

    // Enable prototype access for Handlebars
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

        // const source = fs.readFileSync(path.join(__dirname, 'password-reset.hbs'), 'utf8');
        // console.log(contentHeading, "contentHeading")
        // console.log(contentPara, "contentPara")
        // console.log(text, "text")

        // console.log(email, "email")
        // console.log(subject, "subject")
        // console.log(text, "text")
        // console.log(property, "property")
        // console.log(contentHeading, "contentHeading")
        // console.log(property, "property")
        // console.log(contentPara, "contentPara")

        let source;
        let htmlToSend
        if (property === true) {
            // const transformedData = contentPara.map(item => ({
            //     person: {
            //         unitnumber: item.unitnumber,
            //         _id: item._id.toString(),
            //     },
            // }));

            // // Now pass the transformed data to the Handlebars template
            // const templateData = { people: transformedData };
            // console.log(templateData, "templateData")
            // source = fs.readFileSync(path.join(__dirname, 'property.hbs'), 'utf8');
            // const template = Handlebars.compile(source);
            // htmlToSend = template({ contentHeading, templateData, text });
            // const transformedData = contentPara.map(item => ({
            //     person: {
            //         unitnumber: item.unitnumber,
            //         _id: item._id.toString(),
            //     },
            // }));

            // // Now pass the transformed data to the Handlebars template
            // const templateData = { people: transformedData };
            // console.log(templateData, "templateData")
            // source = fs.readFileSync(path.join(__dirname, 'property.hbs'), 'utf8');
            // const template = Handlebars.compile(source);

            // // Pass properties directly, not inside an object
            // htmlToSend = template({ contentHeading, people: templateData, text });

            const transformedData = contentPara.map(item => ({
                unitnumber: item.unitnumber,
                _id: text + item._id.toString(),
                whatHappen: new Date().toDateString() === new Date(item?.createdAt).toDateString() ? true : false
            }));

            // Now pass the transformed data to the Handlebars template
            const templateData = { people: transformedData };
            console.log(templateData, "templateData")
            source = fs.readFileSync(path.join(__dirname, 'property.hbs'), 'utf8');
            const template = Handlebars.compile(source);

            // Pass properties directly, not inside an object
            htmlToSend = template({ contentHeading, ...templateData, text });

        } else {
            source = fs.readFileSync(path.join(__dirname, 'password-reset.hbs'), 'utf8');
            const template = Handlebars.compile(source);
            htmlToSend = template({ text });
        }

        await transporter.sendMail({
            from: 'notification@rarehomes.ae',
            to: email,
            subject: subject,
            html: htmlToSend
        });

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
