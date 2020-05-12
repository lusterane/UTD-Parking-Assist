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
			});
		});
};

// gets a parking structure according to parking structure name i.e. ps1, ps3, ps4

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

// gets all relevant information for green parking

exports.getColorInfo = (req, res, next) => {
	const color = req.params.color;

	const permitCategoryObjects = [];
	ParkingStructure.find()
		.exec()
		.then((docs) => {
			docs.map((doc) => {
				doc.permit_category.map((obj) => {
					permitCategory = {};
					permitCategory.structure = doc.structure;
					permitCategory.color = obj.color;
					permitCategory.level = obj.level;
					permitCategory.spots = obj.spots;
					permitCategory.utc_time_updated = doc.utc_time_updated;

					permitCategoryObjects.push(permitCategory);
				});
			});
			res.status(200).json(permitCategoryObjects);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};
