const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ParkingStructure = require("../models/parkingStructureModels");

// Handles GET request
router.get("/", (req, res, next) => {
	ParkingStructure.find()
		.exec()
		.then((docs) => {
			res.status(200).json(docs);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

// Handles GET request for a parking structure
router.get("/:parkingStructure", (req, res, next) => {
	const psId = req.params["parkingStructure"];

	ParkingStructure.findOne({ structure: psId })
		.exec()
		.then((docs) => {
			if(docs){
			res.status(200).json(docs);
			}
			else{
				res.status(404).json({
					message: "Parking structure '" + psId + "' not found"
				})
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

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
