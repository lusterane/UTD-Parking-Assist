const mongoose = require("mongoose");

const Object = mongoose.Schema({
    color: String,
    level: String,
    spots: String,
});

const parkingStructureSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    structure: String,
    permit_category: [Object],
});

module.exports = mongoose.model('ParkingStructure', parkingStructureSchema);