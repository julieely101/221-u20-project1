const express = require('express');
const router = express.Router();

let feedController = require("../controller/feedController.js");

router.route('/')
    .get(feedController.getAllFeedItem)
    .post(feedController.savefeedItem)

module.exports = router;