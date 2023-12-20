const express = require('express')
const router = express.Router()
const NotesController = require('../controllers/NotesController')

router.route('/:id').get(NotesController.getNotesById)
router.route('/api/search').get(NotesController.getSearchNotes)

router.route('/')
    .get(NotesController.getAllNotes)
    .post(NotesController.createNotes)
    .patch(NotesController.updateNotes)
    .delete(NotesController.deleteNotes)

module.exports = router