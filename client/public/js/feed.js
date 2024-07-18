

function goToMaristPortal() {
    goToLocation('http://my.marist.edu');
}

let tp = document.getElementsByClassName("tp");

for(let i =0; i < tp.length; i++) {
    tp[i].addEventListener("click", () => {
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
    'https://www.marist.edu/student-life/services/bookstore',
    'images/maristmerch.jpg'
    
);
let story2 = new feedItem(
    "Marist Campus",
    "Take a look around the campus! The views of the Hudson River are the best of the best!",
    'https://www.marist.edu/admission/virtual-tour',
    'images/maristview.jpg'
);
let story3 = new feedItem(
    "Marist Academics",
    "Interested in what Marist has to offer? Check out their programs!",
    'https://www.marist.edu/academics/programs',
    'images/maristacademics.jpg'
);

currentStories.push(story1, story2, story3);

function displayItem(feedItem) {
    let newsfeedElement = document.getElementById("newsfeed");

    let itemHTML = `
        <div class="feed-item">
            <h2>${feedItem.title}</h2>
            <img src="${feedItem.imageUrl}" alt="${feedItem.title}" class="feedImage">
            <p>${feedItem.body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">Click here for a Link!</a>
        </div>
    `;




    newsfeedElement.innerHTML += itemHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    currentStories.forEach(function(item) {
        displayItem(item);
    });
});