//let pic = {name: 'campus', image: '/images/campus.png'};
//let pic2 = {name: 'hancock', image: '/images/hancock.jpeg'};

//let feed = [];
//feed.push(pic);
//feed.push(pic2);

//window.onload = () => {
    //console.log(feed);

    //let feedHtml = document.getElementById('feed');

    //for(let i=0; i<feed.length; i++); {
        //console.log(feed[i].image)
        //feedHtml.innerHTML += feed[i].name;
        //feedHtml = feedHtml + feedHtml[i].name;
    //}
//}

function goToMaristPortal() {
    goToLocation('http://my.marist.edu');
}

let addfeed = document.getElementsByClassName("addfeed");

for(let i =0; i < addfeed.length; i++) {
    addfeed[i].addEventListener("click", () => {
        goToLocation('http://my.marist.edu');
    });
}


function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}


let currentStories = [];

let story1 = new feedItem(
    'Marist Merch',
    'Everyone loves college gear, so get some of your own!',
    'https://example.com/https://www.marist.edu/student-life/services/bookstore',
    'images/maristmerch.jpg'
    
);
let story2 = new feedItem(
    "Marist Campus",
    "Take a look around the campus! The views of the Hudson are the best of the best!",
    'https://example.com/story2',
    'images/maristview.jpg'
);
let story3 = new feedItem(
    "...",
    "...",
    'https://example.com/story3',
    'images/IMG_8329.jpg'
);

currentStories.push(story1, story2, story3);

// Function to display feedItem on the newsfeed element
function displayItem(feedItem) {
    let newsfeedElement = document.getElementById("newsfeed");

    let itemHTML = `
        <div class="feed-item">
            <h2>${feedItem.title}</h2>
            <img src="${feedItem.imageUrl}" alt="${feedItem.title}"style= "max-width: 200%; height: 200%;">
            <p>${feedItem.body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">Read more</a>
        </div>
    `;




    newsfeedElement.innerHTML += itemHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    currentStories.forEach(function(item) {
        displayItem(item);
    });
});