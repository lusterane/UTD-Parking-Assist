const express = require('express');
const router = express.Router();

const PSController = require('../controllers/psController');

// Handles GET request for all parking structures
// GET /parkingStructures
router.get('/', PSController.getAllParkingStructures);

// Handles GET request for a parking structure
// GET /parkingStructures/psName/:parkingStructure
router.get('/psName/:parkingStructure', PSController.getAParkingStructure);

// Handles GET request for color permit
// GET /parkingStructures/color/:color
router.get('/color/:color', PSController.getColorInfo);

//Handles GET request for update times
// GET /parkingStructures/timeUpdated
router.get('/timeUpdated', PSController.getAllParkingStructureTimes);

module.exports = router;
