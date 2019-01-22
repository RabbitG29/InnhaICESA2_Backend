const express = require('express');
const con = require('../connection');
const router = express.Router();

router.get("/", function(req, res, next) {
	res.send("hi");
});

module.exports = router;
