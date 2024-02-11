const mongoose = require('mongoose')

const connectDB = async () => {
    try {
     return await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
        throw new Error("failed to connect db")
    }
}

module.exports = connectDB
