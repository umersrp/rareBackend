const Notes = require('../models/Notes')
const asyncHandler = require('express-async-handler')
const employee = require('../models/employee')

const getAllNotes = asyncHandler(async (req, res) => {
    const allNotes = await Notes.find()
    if (!allNotes?.length) {
        return res.status(400).json({ message: "No notes Name found" })
    }
    res.json(allNotes)
})

const getSearchNotes = asyncHandler(async (req, res) => {
    try {
        const notes = await Notes.find({
            "$or": [
                req.query
            ],
        }).sort({ _id: "descending" })
        const employeeIds = notes.map(employee => employee.commentator_id);
        const employeeData = await employee.find({ _id: { $in: employeeIds } });

        const notesWithEmployee = notes.map(note => {
            const notesObject = note.toObject();
            const { _id, note_text, module_id, commentator_id, createdAt } = notesObject;
            const updatedNote = { _id, note_text, module_id, commentator_id, createdAt };
            if (commentator_id) {
                const employee = employeeData.find(employee => String(employee._id) === commentator_id);
                if (employee) {
                    updatedNote.employee_email = employee?.email;
                }

            }

            return updatedNote;
        });

        res.status(200).json(notesWithEmployee)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getNotesById = asyncHandler(async (req, res) => {
    const NotesById = await Notes.findById(req.params.id)
    if (!NotesById) {
        return res.status(400).json({ message: "No notes Name found" })
    }
    res.json(NotesById)
})

const createNotes = asyncHandler(async (req, res) => {
    const { note_text, module_id, commentator_id } = req.body
    if (!note_text || !module_id || !commentator_id) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const NotesObject = { note_text, module_id, commentator_id }
    const createNotes = await Notes.create(NotesObject)

    if (createNotes) {
        return res.status(200).json(createNotes)
    } else {
        return res.status(400).json({ message: 'Invalid notes Name data received' })
    }
})

const updateNotes = asyncHandler(async (req, res) => {
    const { _id, note_text, module_id, commentator_id } = req.body

    if (!_id || !note_text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const updateNotes = await Notes.findById(_id).exec()
    if (!updateNotes) {
        return res.status(400).json({ message: 'notes Name not found' })
    }

    updateNotes.note_text = note_text
    updateNotes.module_id = module_id
    updateNotes.commentator_id = commentator_id

    await updateNotes.save()

    res.json({ message: `updated` })
})

const deleteNotes = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletednotes = await Notes.findById(_id).exec()

    if (!deletednotes) {
        return res.status(400).json({ message: 'notes Name not found' })
    }

    const result = await deletednotes.deleteOne()
    const reply = `Project name ${result?.Notes} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllNotes,
    getNotesById,
    createNotes,
    updateNotes,
    deleteNotes,
    getSearchNotes,
}