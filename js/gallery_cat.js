$(document).ready(function () {
    /* Open lightbox on button click */
    $('li img').click(function () {
        $('.backdrop').animate({
            'opacity': '.50'
        }, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        var img1 = $(this).clone(); //Duplicate DOM element
        $('.box').append(img1); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function () {
        $('.backdrop').animate({
            'opacity': '0'
        }, 300, 'linear', function () {
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});

var photos = [];
var fn = [];
var imageList = [];
var image;
var head = "<li class='photo'>";
var tail = "</li>";
var disArray = ["His name is Mbappe!",
    "Her name is Joe Cole!",
    "Her name is Gerrard!",
    "His name is Lampard!",
    "His name is Ashley Cole!",
    "His name is Ferdinand!",
    "His name is Terry!",
    "Her name is Gary Neville!",
    "Her name is Haaland!",
    "Her name is Pelle!"
];

for (var i = 1; i <= 10; i++) {
    captionText = "This is Kitten No. " + i;
    image = head + "<img src='/images/cats/cat-" +
        i + ".jpg'>" +
        "<div class='hiddenText' onclick='on(" + i + ")'>Are you interested in Kitten-" +
        i + "?</div>" + "<figcaption class='caption'>" +
        captionText + "</figcaption>" + tail;
    imageList.push(image);
}

document.getElementById("photos").innerHTML = imageList;

function on(i) {
    document.getElementById("overlay").style.display = "block";
    var str = "<p>" + disArray[i - 1] + "</p>";
    document.getElementById("text").innerHTML = "<h4 id='dis'>You have selected Kitten " + i + "!</h4>" +
        str + "<div id='closeBtn' onclick='off()'>Click here to close the description<div>";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}