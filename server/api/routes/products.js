const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// DB model
const Product = require("../models/productModels");

// handle incoming GET requests to /products
// gets all products
router.get("/", (req, res, next) => {
	Product.find()
		.exec()
		.then((docs) => {
			// if(docs.length >= 0){
			res.status(200).json(docs);
			// }
			// else{
			//     res.status(404).json({
			//         message: "No entries found"
			//     })
			// }
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

// handle incoming POST requests to /products
router.post("/", (req, res, next) => {
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
	});

	product
		.save()
		.then((result) => {
			// mongoose method. stores in DB
			console.log(result);
			res.status(201).json({
				message: "handling product POST request",
				createdProduct: result,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

// handle incoming GET requests to /products/:productId
router.get("/:productId", (req, res, next) => {
	const prodId = req.params["productId"];

	// mongo DB query
	Product.findById(prodId)
		.exec()
		.then((doc) => {
			console.log(doc);

			if (doc) {
				// check if in DB
				res.status(200).json(doc);
			} else {
				res.status(404).json({
					message: "No valid entry found for provided ID",
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});
// handle incoming PATCH requests to /products
router.patch("/:productId", (req, res, next) => {
	const id = req.params.productId;
	const updateOperations = {};
	for (const ops of req.body) {
		// incase you don't want to change all values
		updateOperations[ops.propName] = ops.value;
	}
	Product.update({ _id: id }, { $set: updateOperations })
		.exec()
		.then((result) => {
			console.log(res);
			res.status(200).json(result);
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
});

// handle incoming DELETE requests to /products
router.delete("/:productId", (req, res, next) => {
	const id = req.params.productId;

	Product.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

module.exports = router;
