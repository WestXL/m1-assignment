var photos = [];
var fn = [];
var imageList = [];
var image;
var head = "<li class='photo'>";
var tail = "</li>";
var disArray = ["His name is Owen!",
    "Her name is Zidane!",
    "Her name is Ronaldo!",
    "His name is Zico!",
    "His name is Messi!",
    "His name is Neymar!",
    "His name is Beckham!",
    "Her name is Rooney!",
    "Her name is Cantona!",
    "Her name is Totti!"
];

for (var i = 1; i <= 10; i++) {
    captionText = "This is Puppy No. " + i;
    image = head + "<img src='/images/dogs/dog-" +
        i + ".jpg'>" +
        "<div class='hiddenText' onclick='on(" + i + ")'>Are you interested in Puppy-" +
        i + "?</div>" + "<figcaption class='caption'>" +
        captionText + "</figcaption>" + tail;
    imageList.push(image);
}

document.getElementById("photos").innerHTML = imageList;

function on(i) {
    document.getElementById("overlay").style.display = "block";
    var str = "<p>" + disArray[i - 1] + "</p>";
    document.getElementById("text").innerHTML = "<h4 id='dis'>You have selected Puppy " + i + "!</h4>" +
        str + "<div id='closeBtn' onclick='off()'>Click here to close the discription<div>";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}