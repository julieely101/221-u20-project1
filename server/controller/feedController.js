var feedItem = require('../model/feedItem.js')

var currentStories = [];

// starts feed itms
var feedItem1 = feedItem.feedItem("Marist Merch", "Everyone loves college gear, so get some of your own!", "https://www.marist.edu/student-life/services/bookstore", "images/maristmerch.jpg");
var feedItem2 = feedItem.feedItem("Marist Campus", "Take a look around the campus! The views of the Hudson River are the best of the best!", "https://www.marist.edu/admission/virtual-tour", "images/maristview.jpg");
var feedItem3 = feedItem.feedItem("Marist Academics", "Interested in what Marist has to offer? Check out their programs!", "https://www.marist.edu/academics/programs", "images/maristacademics.jpg");

// pushes feed items for the array
currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);

//function to get all feed items
exports.getAllfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

//function to get single feed item
exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemId]);
}

// Function to save a new feed item
exports.savefeedItem = function(req, res) {
    let newfeedItem = (req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    currentStories.push(newfeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

// Function to delete a feed item
exports.deletefeedItem = function(req, res) {
    currentStories.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

//function to replace a feed item
exports.replacefeedItem = function(req, res) {
	var updatedfeedItem = currentStories[req.params.feedItemId];

	console.log(req.body.title)
	if(req.body.title && req.body.body && req.body.linkURL && req.body.imageURL)
		updatedfeedItem.title = req.body.title;
		updatedfeedItem.body = req.body.body;
		updatedfeedItem.linkURL = req.body.linkURL;
		updatedfeedItem.linkURL = req.body.imageURL;

	currentStories[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem[req.params.feedItemId]);
}

//function to update feed item (.patch)
exports.updatefeedItem = function(req, res) {

	var updatedfeedItem = currentStories[req.params.feedItemId];

	// things that are getting passed
	console.log(req.body.title);
	if(req.body.title)
		updatedfeedItem.title = req.body.title;
	if(req.body.body)
		updatedfeedItem.body = req.body.body;
	if(req.body.linkURL)
		updatedfeedItem.linkURL = req.body.linkURL;
	if(req.body.imageURL)
		updatedfeedItem.imageURL = req.body.imageURL;

	currentStories[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemId]);
}

