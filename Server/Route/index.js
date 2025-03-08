const express = require("express"); // Import express package
const router = express.Router(); // Import Router from express package

const controller = require("../Controller/index"); // Import controller

router.get("/user", controller.getAllusers);

router.get("/getuserByName/:name", controller.getuserByName);

module.exports = router;
