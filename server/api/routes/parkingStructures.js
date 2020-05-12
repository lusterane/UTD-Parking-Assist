const express = require("express");
const router = express.Router();

const PSController = require("../controllers/psController");

// Handles GET request for all parking structures
router.get("/", PSController.getAllParkingStructures);

// Handles GET request for a parking structure
router.get("/:parkingStructure", PSController.getAParkingStructure);

// Handles GET request for color permit
router.get("/color/:color", PSController.getColorInfo);

// TESTING
// // Handles POST request
// router.post("/", (req, res, next) => {
// 	const parkingStructure = new ParkingStructure({
// 		_id: new mongoose.Types.ObjectId(),
// 		structure: "ps5",
// 		permit_category: [
// 			{ color: "orange", level: "3", spots: "202" },
// 			{ color: "orange", level: "3", spots: "202" },
// 		],
// 	});

// 	parkingStructure.save().then(result => {
// 		console.log(result);
// 		res.status(201).json({
// 			message: "Handle POST request",
// 			createdParkingStructure: result,
// 		})
// 	})
// });

module.exports = router;
