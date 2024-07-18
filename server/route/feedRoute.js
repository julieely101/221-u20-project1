const express = require('express');
const router = express.Router();

let feedController = require("../controller/feedController.js");

router.route('/')
    .get(feedController.getAllfeedItem)
    .post(feedController.savefeedItem);

router.route('/:feedItemId')
    .get(feedController.getfeedItem)
    .delete(feedController.deletefeedItem)
    .patch(feedController.updatefeedItem)     // fix
    .put(feedController.replacefeedItem)

module.exports = router;