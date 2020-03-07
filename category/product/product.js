openImg("blue-navy");

function openImg(imgName) {
    var i, x;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
}

// Add color description when selected
$('.blue-navy').click(function () {
    $('.color-description').text('Blue and Navy');
});

$('.purple-green').click(function () {
    $('.color-description').text('Purple Green and Gold');
});

$('.sage-wine').click(function () {
    $('.color-description').text('Sage and Wine');
});

$('.brown-blue').click(function () {
    $('.color-description').text('Brown and Blue');
});

$('.red-navy').click(function () {
    $('.color-description').text('Red and Navy');
});

// Add image border on click
$('.color').click(function () {
    $('.color').css("border", "none");
    // this border from other image   
    $(this).css("border", "2px solid saddlebrown");
});

// Color tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Add size description when button clicked
$('.s').click(function () {
    $('.size').text('Small');
});

$('.m').click(function () {
    $('.size').text('Medium');
});

$('.l').click(function () {
    $('.size').text('Large');
});

$('.xl').click(function () {
    $('.size').text('Extra Large');
});

$('.xxl').click(function () {
    $('.size').text('Double XL');
});

// Button Active class
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}