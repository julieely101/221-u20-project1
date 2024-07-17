const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');

const app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'});
});
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'});
});

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

const feedItems = require('./controller/feedController');
// view / webpage endpoints
app.route('/api/feedItem')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feedItem/:FeedItemId')
    .get(feedController.getFeedItemById)
    .delete(feedController.deleteFeedItemById)
    .put(feedController.updateFeedItemById);

app.listen(1337, () => console.log('Listening on port 1337.'))
