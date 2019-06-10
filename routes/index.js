let express = require('express')
let router = express.Router()
const modelController = require('../controllers/modelController')
const actorController = require('../controllers/actorController')
const artistController = require('../controllers/artistController')

// INDEX MODEL
router.get('/model/', modelController.index)

// CREATE MODEL
router.post('/model/', modelController.create)

// DELETE MODEL
router.delete('/model/:id', modelController.delete)

// SHOW MODEL
router.get('/model/:id', modelController.show)

// PUT MODEL
router.put('/model/:id', modelController.update)

//================================================

// INDEX ACTOR
router.get('/actor/', actorController.index)

// CREATE ACTOR
router.post('/actor/', actorController.create)

// DELETE ACTOR
router.delete('/actor/:id', actorController.delete)

// SHOW ACTOR
router.get('/actor/:id', actorController.show)

// PUT ACTOR
router.put('/actor/:id', actorController.update)

// ================================================

// INDEX ARTIST
router.get('/artist/', artistController.index)

// CREATE ARTIST
router.post('/artist/', artistController.create)

// DELETE ARTIST
router.delete('/artist/:id', artistController.delete)

// SHOW ARTIST
router.get('/artist/:id', artistController.show)

// PUT ARTIST
router.put('/artist/:id', artistController.update)

module.exports = router