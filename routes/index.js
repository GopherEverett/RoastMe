const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const roastController = require('../controllers/roastController.js')
const jabController = require('../controllers/jabController.js')
//User routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)
//Roast routes
router.get('/:userId/roasts', roastController.index)
router.get('/:userId/roasts/new', roastController.new)
router.post('/:userId/roasts', roastController.create)
router.get('/:userId/roasts/:roastId', roastController.show)
router.delete('/:userId/roasts/:roastId', roastController.delete)
//Jab routes
router.get('/:userID/roasts/:roastId/jabs', jabController.index)

module.exports = router
