var feedItem = require('../model/feedItem.js')

var currentStories = [];

var feedItem1 = feedItem.feedItem("Marist Merch", "Everyone loves college gear, so get some of your own!", "https://www.marist.edu/student-life/services/bookstore", "images/maristmerch.jpg");
var feedItem2 = feedItem.feedItem("Marist Campus", "Take a look around the campus! The views of the Hudson River are the best of the best!", "https://www.marist.edu/admission/virtual-tour", "images/maristview.jpg");
var feedItem3 = feedItem.feedItem("Marist Academics", "Interested in what Marist has to offer? Check out their programs!", "https://www.marist.edu/academics/programs", "images/maristacademics.jpg");




currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);





exports.getAllfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemId]);
}

// Function to save a new feed item
exports.savefeedItem = function(req, res) {
    let newFeedItem = (req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    currentStories.push(newfeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

// Function to delete a feed item by id
exports.deletefeedItem = function(req, res) {
    currentStories.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};

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

	exports.updatefeedItem = function(req, res) {
	// get the existing user from the array
		var updatedfeedItem = feedItem[req.params.userId];

	// check to see what has been passed and update the local copy
		console.log(req.body.title);
		if(req.body.title)

			updatedfeedItem.title = req.body.title;
		if(req.body.body)
			updatedfeedItem.body = req.body.body;
		if(req.body.linkUrl)
			updatedfeedItem.linkURL = req.body.linkURL;
		if(req.body.imageURL)
			updatedUser.imageURL = req.body.imageURL;

	// save the local copy of the user back into the array
		currentStories[req.params.feedItemId] = updatedfeedItem;

		res.setHeader('Content-Type', 'application/json');
		res.send(currentStories[req.params.feedItemId]);
}


// Function to get a feed item by id
//exports.getFeedItemById = function(req, res) {
//    const itemId = req.params.itemId;
//    res.setHeader('Content-Type', 'application/json');
//    res.send(feedItems[itemId]);
//};

//let feedItem1 = feedItem.createfeedItem("Marist Merch", "Everyone loves college gear, so get some of your own!", "https://www.marist.edu/student-life/services/bookstore", "images/maristmerch.jpg");
//let feedItem2 = feedItem.createfeedItem("Marist Campus", "Take a look around the campus! The views of the Hudson River are the best of the best!", "https://www.marist.edu/admission/virtual-tour", "images/maristview.jpg");
//let feedItem3 = feedItem.createfeedItem("Marist Academics", "Interested in what Marist has to offer? Check out their programs!", "https://www.marist.edu/academics/programs", "images/maristacademics.jpg");

//feedItem.push(feedItem1);
//feedItem.push(feedItem2);
//feedItem.push(feedItem3);


//exports.getfeedItem = function(req, res) {
//	res.setHeader('Content-Type', 'application/json');
//	res.send(feedItem3);
//}