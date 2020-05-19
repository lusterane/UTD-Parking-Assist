const mongoose = require("mongoose");

const Objects = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	color: String,
	level: Number,
	spots: Number,
});

const parkingStructureSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	structure: String,
	utc_time_updated: Date,
	permit_category: [Objects],
});

module.exports = mongoose.model("ParkingStructure", parkingStructureSchema);
