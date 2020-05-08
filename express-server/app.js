const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productsRoute = require("./api/routes/products");
const ordersRoute = require("./api/routes/orders");
const parkingStructuresRoute = require("./api/routes/parkingStructures")

mongoose.connect(
	"mongodb+srv://lusterane:" +
		process.env.MONGO_ATLAS_PW +
		"@utd-parking-assist-fo6hm.mongodb.net/utd_parking?retryWrites=true&w=majority",
		{
			useUnifiedTopology: true,
			useNewUrlParser: true
		}
);

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// fix CORS error
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "www.this-website.com"); // give access to any origin
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	if (req.method == "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

app.use("/products", productsRoute);
app.use("/orders", ordersRoute);
app.use("/parkingStructures", parkingStructuresRoute);

// error handling

// 404 Not Found Error
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err); // forwards err to next middleware
});

// handles all errors
app.use((error, req, res, next) => {
	res.status(error.status || 500); // 500 is all other errors
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
