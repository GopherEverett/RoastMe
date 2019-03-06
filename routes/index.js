const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController.js')
const roastController = require('../controllers/roastController.js')
const jabController = require('../controllers/jabController.js')

//App route
router.get('/', appController.index)
//User routes
router.get('/user', userController.index)
router.get('/user/new', userController.new)
router.post('/', userController.create)
router.get('/user/:userId', userController.show)
router.delete('user/:userId', userController.delete)
//Roast routes
router.get('/:userId/roasts', roastController.index)
router.get('/:userId/roasts/new', roastController.new)
router.post('/:userId/roasts', roastController.create)
router.get('/:userId/roasts/:roastId', roastController.show)
router.delete('/:userId/roasts/:roastId', roastController.delete)
//Jab routes
router.get('/:userId/roasts/:roastId/jabs', jabController.index)
router.get('/:roastId/jabs/new', jabController.new)
router.post('/:userId/roasts/:roastId/jabs', jabController.create)
router.get('/:userId/roasts/:roastId/jabs/:jabId', jabController.show)
router.delete('/:userId/roasts/:roastId/jabs/:jabId', jabController.delete)

module.exports = router
