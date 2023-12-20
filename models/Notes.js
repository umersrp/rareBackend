const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    note_text: {
        type: String,
        require: true
    },
    module_id: {
        type: String,
        require: true
    },
    commentator_id: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Notes", NotesSchema)