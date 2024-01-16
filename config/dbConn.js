const mongoose = require('mongoose')

const connectDB = async () => {
    try {
     await mongoose.connect('mongodb+srv://rare_user:LGT7pWdZ3Tv4Y7PX@rare-db.ecj5aq5.mongodb.net/')
    } catch (err) {
        console.log(err)
        throw new Error("failed to connect db")
    }
}

module.exports = connectDB
