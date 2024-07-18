const express = require('express');
const router = express.Router();

let feedController = require("../controller/feedController.js");

//route for'/api/currentStories'
router.route('/')
    .get(feedController.getAllfeedItem)
    .post(feedController.savefeedItem);

//Routes for '/api/currentStories/:feedItemId'
router.route('/:feedItemId')
    .get(feedController.getfeedItem)
    .delete(feedController.deletefeedItem)
    .post(feedController.updatefeedItem)  
    .patch(feedController.replacefeedItem)

module.exports = router;

