$(document).ready(function(){
    /* Open lightbox on button click */
    $('li img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="Angkor Wat") {
            var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
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
