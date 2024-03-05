// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const Handlebars = require('handlebars');
// const PDFDocument = require('pdfkit');

// const bookingCreateUpdateEmail = async (subject, contentHeading, contentPara, url) => {
//     // Create an invoice PDF
//     const doc = new PDFDocument();
//     doc.pipe(fs.createWriteStream('booking-detail.pdf'));

//     // Customize the invoice content
//     doc.font('Helvetica').fontSize(12);
//     doc.text('Invoice', { align: 'center' });
//     doc.moveDown();
//     doc.text('Invoice Date: October 26, 2023');
//     doc.moveDown();
//     doc.text('Bill To: John Doe');
//     doc.moveDown();
//     doc.text('Description             Amount');
//     doc.moveDown();
//     doc.text('Service 1               $100.00');
//     doc.moveDown();
//     doc.text('Service 2               $150.00');
//     doc.moveDown();
//     doc.text('Total                   $250.00');

//     // End the document
//     doc.end();
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'srca.com.pk',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: 'rare@srca.com.pk',
//                 pass: '1Pakistan23@'
//             },
//             tls: {
//                 rejectUnauthorized: false
//             }
//         });
//         // Read the invoice PDF file
//         const pdfAttachment = fs.readFileSync('booking-detail.pdf');

//         let source = fs.readFileSync(path.join(__dirname, 'booking-create-update.hbs'), 'utf8');
//         const template = Handlebars.compile(source);
//         let htmlToSend = template({ contentHeading, contentPara, url });

//         await transporter.sendMail({
//             from: 'notification@rarehomes.ae',
//             to: process.env.OWN_SERVER === "http://dev-rare.srp.ai" ? "accounts@rarehomes.ae" : "tahasrca@gmail.com",
//             subject: subject,
//             html: htmlToSend,
//             attachments: [
//                 {
//                     filename: 'booking-detail.pdf',
//                     content: pdfAttachment,
//                     encoding: 'base64'
//                 }
//             ]
//         });

//         console.log('Email sent successfully to customer');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

// module.exports = bookingCreateUpdateEmail;

// Second code It's also working

// const nodemailer = require('nodemailer');
// const Handlebars = require('handlebars');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const path = require('path');

// const bookingCreateUpdateEmail = async (subject, contentHeading, contentPara, url) => {
//     try {
//         // Create an invoice PDF
//         const doc = new PDFDocument();

//         // Customize the invoice content
//         doc.font('Helvetica').fontSize(12);
//         doc.text('Invoice', { align: 'center' });
//         doc.moveDown();
//         doc.text('Invoice Date: October 26, 2023');
//         doc.moveDown();
//         doc.text('Bill To: John Doe');
//         doc.moveDown();
//         doc.text('Description             Amount');
//         doc.moveDown();
//         doc.text('Service 1               $100.00');
//         doc.moveDown();
//         doc.text('Service 2               $150.00');
//         doc.moveDown();
//         doc.text('Total                   $250.00');

//         // Generate the PDF content as a buffer
//         let pdfBuffer = null;
//         doc.on('data', (chunk) => {
//             if (!pdfBuffer) pdfBuffer = chunk;
//             else pdfBuffer = Buffer.concat([pdfBuffer, chunk]);
//         });

//         doc.on('end', async () => {
//             try {
//                 const transporter = nodemailer.createTransport({
//                     host: 'srca.com.pk',
//                     port: 465,
//                     secure: true,
//                     auth: {
//                         user: 'rare@srca.com.pk',
//                         pass: '1Pakistan23@'
//                     },
//                     tls: {
//                         rejectUnauthorized: false
//                     }
//                 });

//                 let source = fs.readFileSync(path.join(__dirname, 'booking-create-update.hbs'), 'utf8');
//                 const template = Handlebars.compile(source);
//                 let htmlToSend = template({ contentHeading, contentPara, url });

//                 await transporter.sendMail({
//                     from: 'notification@rarehomes.ae',
//                     to: process.env.OWN_SERVER === "http://dev-rare.srp.ai" ? "accounts@rarehomes.ae" : "tahasrca@gmail.com",
//                     subject: subject,
//                     html: htmlToSend,
//                     attachments: [
//                         {
//                             filename: 'booking-detail.pdf',
//                             content: pdfBuffer,
//                             encoding: 'base64'
//                         }
//                     ]
//                 });

//                 console.log('Email sent successfully to customer');
//             } catch (error) {
//                 console.error('Error sending email:', error);
//             }
//         });

//         // End the document
//         doc.end();
//     } catch (error) {
//         console.error('Error generating PDF:', error);
//     }
// };

// module.exports = bookingCreateUpdateEmail;



// musibate hai yeh

const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const bookingCreateUpdateEmail = async (subject, contentHeading, contentPara, url, bookingProperty, property) => {
    try {

        const transporter = nodemailer.createTransport({
            // // service: 'gmail',
            // host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            // // host: 'gmail',
            // // port: 465,
            // // secure: true,
            // auth: {
            //     user: 'tahasrca@gmail.com',
            //     pass: 'ntetjeizzdhngakw'
            // },
            // // tls: {
            // //     rejectUnauthorized: false
            // // }
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

        // Generate the invoice HTML
        //     const htmlContent = `
        //     <html>
        //     <head>
        //         <title>Invoice</title>
        //         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        //         <style>
        //             /* Add your custom CSS styles here */
        //             body {
        //                 font-family: 'Arial', sans-serif;
        //             }
        //             .invoice-table {
        //                 width: 100%;
        //                 border-collapse: collapse;
        //             }
        //             .invoice-table th, .invoice-table td {
        //                 border: 1px solid #ccc;
        //                 padding: 8px;
        //                 text-align: center;
        //             }
        //             .flex {
        //                 display: flex;
        //                 column-gap: 25px;
        //             }
        //         </style>
        //         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        //     </head>
        //     <body>
        //         <h1>Invoice</h1>
        //         <div class="flex">
        //             <p>Invoice Date: October 26, 2023</p>
        //             <p>Bill To: John Doe</p>
        //         </div>
        //         <table class="invoice-table">
        //             <tr>
        //                 <th>Description</th>
        //                 <th>Amount</th>
        //             </tr>
        //             <tr>
        //                 <td>Service 1</td>
        //                 <td>$100.00</td>
        //             </tr>
        //             <tr>
        //                 <td>Service 2</td>
        //                 <td>$150.00</td>
        //             </tr>
        //             <tr>
        //                 <td class="font-bold">Total</td>
        //                 <td>$250.00</td>
        //             </tr>
        //         </table>
        //     </body>
        // </html>
        //     `;
        const htmlContent = `
        <html>

        <head>
            <title>Invoice</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            <style>
                /* Add your custom CSS styles here */
                body {
                    font-family: 'Arial', sans-serif;
                    padding: 40px;
                }
        
                .invoice-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 40px;
                }
        
                .invoice-table th,
                .invoice-table td {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: center;
                }
        
                .flex {
                    display: flex;
                    column-gap: 25px;
                }
        
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
        
                .header img {
                    width: 150px;
                }
        
                .second-section {
                    margin-top: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
        
                p {
                    margin-bottom: 0;
                    font-size: 14px;
                }
        
                .font-bold {
                    font-weight: bold;
                }
        
                .guest-section {
                    margin-top: 20px;
                }
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        </head>
        
        <body>
            <div class="header">
                <img src="https://srp.ai/assets/images/rare-logo.png" alt="rare-logo">
                <!-- <h1>Invoice</h1> -->
            </div>
            <div class="second-section">
                <div>
                    <h4>PROPERTY DETAILS</h4>
        
                    <p>Unit no: <span class="font-bold">${property?.unitnumber ? property?.unitnumber : "Not Available"}</span></p>
                    <p>Community Name: <span class="font-bold">${property?.communityname ? property?.communityname : "Not Available"}</span></p>
                    <p>Project Name: <span class="font-bold">${property?.projectname ? property?.projectname : "Not Available"}</span></p>
                    <p>Building Name: <span class="font-bold">${property?.buildingname ? property?.buildingname : "Not Available"}</span></p>
                    <p>Floor: <span class="font-bold">${property?.floor ? property?.floor : "Not Available"}</span></p>
                    <div class="guest-section">
                    <h4>GUEST DETAILS</h4>
            
                    <p>Guest Name: <span class="font-bold">${bookingProperty?.guestname ? bookingProperty?.guestname : "Not Available"}</span></p>
                    <p>Email: <span class="font-bold">${bookingProperty?.email ? bookingProperty?.email : "Not Available"}</span></p>
                    <p>Passport No: <span class="font-bold">${bookingProperty?.passportnumber ? bookingProperty?.passportnumber : "Not Available"}</span></p>
                    <p>Mobile Number: <span class="font-bold">${bookingProperty?.mobilenumber ? bookingProperty?.mobilenumber : "Not Available"}</span></p>
                    <p>Nationality: <span class="font-bold">${bookingProperty?.nationality ? bookingProperty?.nationality : "Not Available"}</span></p>
                    <p>No. Of Occupants: <span class="font-bold">${bookingProperty?.totaloccupants ? bookingProperty?.totaloccupants : "Not Available"}</span></p>
                </div>    
                </div>
                <div>
                    <h4>RESERVATION DETAILS</h4>
        
                    <p>Confirmation Code/ Ref: <span class="font-bold">${bookingProperty?.confirmationcode ? bookingProperty?.confirmationcode : "Not Available"}</span></p>
                    <p>Booking Agent: <span class="font-bold">${bookingProperty?.bookingagent ? bookingProperty?.bookingagent : "Not Available"}</span></p>
                    <p>Mode Of Payment: <span class="font-bold">${bookingProperty?.modepayment ? bookingProperty?.modepayment : "Not Available"}</span></p>
                    <p>Reservation Date: <span class="font-bold">${bookingProperty?.reservationdate ? new Date(bookingProperty?.reservationdate).toDateString() : "Not Available"}</span></p>
                    <p>Check-In Date: <span class="font-bold">${bookingProperty?.checkindate ? new Date(bookingProperty?.checkindate).toDateString() : "Not Available"}</span></p>
                    <p>Check-Out Date: <span class="font-bold">${bookingProperty?.checkoutdate ? new Date(bookingProperty?.checkoutdate).toDateString() : "Not Available"}</span></p>
                    <p>No. Of Nights: <span class="font-bold">${bookingProperty?.nonight ? bookingProperty?.nonight : "Not Available"}</span></p>
                    <p>Tourism Fee /Unit: <span class="font-bold">${bookingProperty?.tourismfee ? bookingProperty?.tourismfee : "Not Available"}</span></p>
                </div>
            </div>
            <table class="invoice-table">
                <tr>
                    <th>RESERVATION PAYOUT DETAILS</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Security Deposit Amount</td>
                    <td>${bookingProperty?.securitydeposit ? bookingProperty?.securitydeposit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">TOTAL PAYOUT</td>
                    <td class="font-bold">${bookingProperty?.totalpayout ? bookingProperty?.totalpayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Host Service Fee (Portal)</td>
                    <td>${bookingProperty?.hostservicefee ? bookingProperty?.hostservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">Total Collection All Incl</td>
                    <td class="font-bold">${bookingProperty?.totalcollectall ? bookingProperty?.totalcollectall.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Cleaning Fee</td>
                    <td>${bookingProperty?.cleaningfee ? bookingProperty?.cleaningfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">TOTAL ADDITIONAL FEE</td>
                    <td class="font-bold">${bookingProperty?.totaladditionalfee ? bookingProperty?.totaladditionalfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">Total Room Rent + GM+VAT</td>
                    <td class="font-bold">${bookingProperty?.totalroomrent ? bookingProperty?.totalroomrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Room Rent Amount: ( Incl. Portal Fee)</td>
                    <td>${bookingProperty?.roomrentamount ? bookingProperty?.roomrentamount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Room Rent Amount: (Host Payable)</td>
                    <td>${bookingProperty?.roomrenthostpayable ? parseFloat(bookingProperty?.roomrenthostpayable).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Guest Service Fee</td>
                    <td>${bookingProperty?.guestservicefee ? bookingProperty?.guestservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Guest Management Fee</td>
                    <td>${bookingProperty?.guestmanagementfee ? bookingProperty?.guestmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Host Management Fee</td>
                    <td>${bookingProperty?.hostmanagementfee ? bookingProperty?.hostmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">Total Room Rent Amount (Incl. GM FEE)</td>
                    <td class="font-bold">${bookingProperty?.guestservicefee && bookingProperty?.guestservicefee > 0 ?
                (parseFloat(bookingProperty?.roomrentamount ? bookingProperty?.roomrentamount : 0) + parseFloat(bookingProperty?.guestmanagementfee ? bookingProperty?.guestmanagementfee : 0) + parseFloat(bookingProperty?.guestservicefee ? bookingProperty?.guestservicefee : 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" :
                (parseFloat(bookingProperty?.roomrentamount ? bookingProperty?.roomrentamount : 0) + parseFloat(bookingProperty?.guestmanagementfee ? bookingProperty?.guestmanagementfee : 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED"
            }</td>
                </tr>
                <tr>
                    <td>VAT 5% On Booking Room Rent</td>
                    <td>${bookingProperty?.vatperbookingrent ? bookingProperty?.vatperbookingrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>VAT 5% On Service Fee</td>
                    <td>${bookingProperty?.vatperservicefee ? bookingProperty?.vatperservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>VAT 5% On Cleaning Fee</td>
                    <td>${bookingProperty?.vatpercleaningfee ? bookingProperty?.vatpercleaningfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>VAT 5% On Guest Management</td>
                    <td>${bookingProperty?.vatperguestmanagementfee ? bookingProperty?.vatperguestmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>VAT 5% On Host Management Fee</td>
                    <td>${bookingProperty?.vatperhostmanagementfee ? bookingProperty?.vatperhostmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">Total Payout Vat</td>
                    <td class="font-bold">${bookingProperty?.totalvatper ? bookingProperty?.totalvatper.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td class="font-bold">Total Room Rent + GM+VAT</td>
                    <td class="font-bold">${bookingProperty?.totalroomrent ? bookingProperty?.totalroomrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
                <tr>
                    <td>Audit Difference</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="font-bold">Total Collection All Incl</td>
                    <td class="font-bold">${bookingProperty?.totalcollectall ? bookingProperty?.totalcollectall.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                </tr>
            </table>
        </body>
        
        </html>        `;

        // Generate PDF from HTML content
        const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        if (!browser) {
            console.error('Failed to launch browser.');
            return;
        }
        // console.log('browser hogya')
        await new Promise(resolve => setTimeout(resolve, 5000));
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        await page.pdf({ path: 'booking-detail.pdf', format: 'A4' });
        await browser.close();

        // Read the PDF file
        const pdfAttachment = fs.readFileSync('booking-detail.pdf', 'base64');

        // console.log('neeche aya?')
        let source = fs.readFileSync(path.join(__dirname, 'booking-create-update.hbs'), 'utf8');
        const template = Handlebars.compile(source);
        let htmlToSend = template({ contentHeading, contentPara, url });
        // console.log('template aya?')
        const data123 = await transporter.sendMail({
            from: 'notification@rarehomes.ae',
            to: process.env.OWN_SERVER === "http://dev-rare.srp.ai" ? 
            ["accounts@rarehomes.ae", "finance@rarehomes.ae" , 'saifahmedsrp@gmail.com'] : 
            process.env.OWN_SERVER === "http://portals.rarehomesgroup.com" ? 
            ["accounts@rarehomes.ae", "finance@rarehomes.ae" , 'saifahmedsrp@gmail.com']  :   
            ["accounts@rarehomes.ae", "finance@rarehomes.ae" , 'saifahmedsrp@gmail.com'],
            subject: subject,
            html: htmlToSend,
            attachments: [
                {
                    filename: 'booking-detail.pdf',
                    content: pdfAttachment,
                    encoding: 'base64'
                }
            ]
        });

        console.log('Email sent successfully to customer',data123);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = bookingCreateUpdateEmail;
