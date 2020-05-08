const mongoose = require("mongoose");
const ParkingStructure = require("../models/parkingStructureModels");


exports.getAllParkingStructures = (req, res, next) => {
	ParkingStructure.find()
		.exec()
		.then((docs) => {
			res.status(200).json(docs);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
                error: err,
                message: "lmao"
			});
		});
};

exports.getAParkingStructure = (req, res, next) => {
	const psId = req.params["parkingStructure"];

	ParkingStructure.findOne({ structure: psId })
		.exec()
		.then((docs) => {
			if (docs) {
				res.status(200).json(docs);
			} else {
				res.status(404).json({
					message: "Parking structure '" + psId + "' not found",
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};
