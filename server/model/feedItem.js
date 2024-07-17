function feedItem (title, body, linkURL, imageURL) {
        this.title = title;
        this.body = body;
        this.linkURL = linkURL;
        this.imageURL = imageURL;
}

export function createfeedItem(title, body, linkURL, imageURL) {
  return new feedItem(title, body, linkURL, imageURL);
};