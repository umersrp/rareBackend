const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, 'public/passport')
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + "_" + file.originalname)
        }
    })
}).any()
router.route('/shortterm').get(bookingController.allShorttermProperties)
router.route('/:id').get(bookingController.getBookingById)
router.route('/pagination/pages').get(bookingController.getPaginationBooking)
router.route('/ownerrepresentative/pages').get(bookingController.getPaginationBookingOwnerRep)
router.route('/api/withdate').get(bookingController.getPaginationBookingWithDate)
router.route('/api/search/:key').get(bookingController.getSearchBooking)
router.route('/api/searchforcustomer/:key').get(bookingController.getSearchBookingByCustomer)
router.route('/api/reservationdate').get(bookingController.getBookingReservation)
router.route('/summary/:propertyid').get(bookingController.getSummaryOfProperty)
router.route('/summarybyDates/:propertyid').get(bookingController.getSummaryOfPropertyByDates)
router.route('/api/joindata').get(bookingController.getAllBookingData)
router.route('/api/convertkrde').patch(bookingController.convertCustomerIdToObjectId)
router.route('/api/yearly').get(bookingController.getBookingYearly)
router.route('/api/checkin').get(bookingController.getBookingCheckIn)
router.route('/api/checkout').get(bookingController.getBookingCheckOut)
router.route('/api/property/:key').get(bookingController.getBookingByPropertyId)
router.route('/api/cancelledbooking').get(bookingController.getAllBookingCancelled)
router.route('/api/approvedbooking').get(bookingController.getAllBookingApproved)
router.route('/api/updatebooking').patch(bookingController.updateBookingCancel)
router.route('/api/allbooking/softdelete').get(bookingController.getAllBookingWithoutSoftdelete)
router.route('/api/allbooking/forproperty').get(bookingController.getBookingProperty)



router.route('/api/search/mobile/:key').get(bookingController.getBookingSearch)
router.route('/api/sendpdf').post(bookingController.sendEmailPDF)
router.route('/api/test').get(bookingController.getAllBookingTest)

router.route('/api/tests').get(bookingController.getAllBookingTests)

router.route('/')
    .get(bookingController.getAllBooking)
    .post(upload, bookingController.createBooking)
    .patch(upload, bookingController.updateBooking)
    .delete(bookingController.deleteBooking)

module.exports = router