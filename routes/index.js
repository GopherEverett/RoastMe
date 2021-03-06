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
//Roast routes
router.get('/:userId/roasts/new', roastController.new)
router.post('/:userId/roasts', roastController.create)
router.get('/:userId/roasts/:roastId', roastController.show)
router.get('/:userId/roasts/:roastId/edit', roastController.edit)
router.put('/:userId/roasts/:roastId', roastController.update)
router.delete('/:userId/roasts/:roastId', roastController.delete)
//Jab routes
router.get('/:roastId/jabs/new', jabController.new)
router.post('/:roastId/jabs', jabController.create)
router.get('/:roastId/jabs/:jabId', jabController.show)
router.delete('/:roastId/jabs/:jabId', jabController.delete)

module.exports = router
