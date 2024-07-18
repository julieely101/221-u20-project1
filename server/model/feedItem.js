function feedItem (title, body, linkURL, imageURL) {
  this.title = title;
  this.body = body;
  this.linkURL = linkURL;
  this.imageURL = imageURL;
}
//constructor function for creating a feed item object//

exports.feedItem = (title, body, linkURL, imageURL) => {
  return new feedItem(title, body, linkURL, imageURL);
}
//exported function that creates and returns a new feed item object//