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

// gets all relevant information for specific parking
exports.getColorInfo = (req, res, next) => {
	const color = req.params.color;
	const unparsedColorArr = [
		"Green Permit",
		"Gold Permit",
		"Orange Permit",
		"Purple Permit",
		"Pay-By-Space",
	];

	// filter out irrelevant colors in array
	const index =
		unparsedColorArr.findIndex((element) => {
			return element == color;
		}) + 1;

	const parsedColorArr = [];
	for (let i = 0; i < index; i++) {
		parsedColorArr.push(unparsedColorArr[i]);
	}

	const permitCategoryObjects = [];
	ParkingStructure.find()
		.exec()
		.then((docs) => {
			docs.map((root_json) => {
				root_json.permit_category.map((permit_category_entry) => {
					// find color in color array
					if (parsedColorArr.includes(permit_category_entry.color)) {
						let objBuilder = {};
						objBuilder["id"] = root_json._id;
						objBuilder["color"] = permit_category_entry.color;
						objBuilder["level"] = permit_category_entry.level;
						objBuilder["spots"] = permit_category_entry.spots;
						objBuilder["structure"] = root_json.structure;
						objBuilder["time_updated"] = root_json.utc_time_updated;

						permitCategoryObjects.push(objBuilder);
					}
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

// gets all times for each parking structure
exports.getAllParkingStructureTimes = (req, res, next) => {
	timeUpdated = {};

	ParkingStructure.find()
		.exec()
		.then((docs) => {
			docs.map((root_json) => {
				timeUpdated[root_json.structure] = root_json.utc_time_updated;
			});
			res.status(200).json(timeUpdated);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};
