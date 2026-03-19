const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movieController')
router.post('/add', movieController.addMovie)
router.get('/', movieController.displayMovie)
router.get('/movie/:id', movieController.showMovie)
router.put('/edit/:id', movieController.editMovie)
router.delete('/:id', movieController.delMovie)


module.exports = router