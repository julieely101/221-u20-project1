const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

const feedRoutes = require('./route/feedRoute');
app.use("/api/currentStories", feedRoutes)

app.listen(1337, () => console.log('Listening on port 1337.'))
