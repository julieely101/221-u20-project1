function feedItem (title, body, linkURL, imageURL) {
	this.title = title;
	this.body = body;
	this.linkURL = linkURL;
	this.imageURL = imageURL;
}


let feedItems = [];

exports.getAllFeedItems = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// Function to save a new feed item
exports.saveFeedItem = function(req, res) {
    let { title, body, linkUrl, imageUrl } = req.body;
    let newFeedItem = new FeedItem(title, body, linkUrl, imageUrl);
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// Function to get a feed item by id
exports.getFeedItemById = function(req, res) {
    const itemId = req.params.itemId;
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[itemId]);
};

// Function to delete a feed item by id
exports.deleteFeedItemById = function(req, res) {
    const itemId = req.params.itemId;
    feedItems = feedItems.filter((item, index) => index !== itemId);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// Function to update a feed item by id
exports.updateFeedItemById = function(req, res) {
    const itemId = req.params.itemId;
    let { title, body, linkUrl, imageUrl } = req.body;
    if (feedItems[itemId]) {
        feedItems[itemId].title = title;
        feedItems[itemId].body = body;
        feedItems[itemId].linkUrl = linkUrl;
        feedItems[itemId].imageUrl = imageUrl;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

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