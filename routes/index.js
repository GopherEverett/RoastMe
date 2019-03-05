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
router.delete('/:userId', userController.delete)
//Roast routes
router.get('/:userId', roastController.index)
router.get('/:userId/new', roastController.new)
router.post('/:userId', roastController.create)
router.get('/:userId/:roastId', roastController.show)
router.delete('/:userId/:roastId', roastController.delete)
//Jab routes
router.get('/:userId/roasts/:roastId/jabs', jabController.index)
router.get('/:userId/roasts/:roastId/jabs/new', jabController.new)
router.post('/:userId/roasts/:roastId/jabs', jabController.create)
router.get('/:userId/roasts/:roastId/jabs/:jabId', jabController.show)
router.delete('/:userId/roasts/:roastId/jabs/:jabId', jabController.delete)

module.exports = router
