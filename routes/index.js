const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)


module.exports = router
