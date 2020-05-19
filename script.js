// Image gallery
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
    $(this).css("border", "2px solid saddlebrown");
});

// Color description tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

if ($(window).width() < 537) {
    $('.color').removeAttr('data-toggle');
}

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

// Button Active class (size buttons)
let btns = document.getElementsByClassName("btn-size");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Put order in Modal
let productName = document.getElementsByClassName('title')[0].innerText;
let productPrice = parseFloat(document.getElementById('price-value').innerText);

let addToCart = document.getElementById('add');
let list = document.getElementById('modal-info');

let order = "";

addToCart.addEventListener('click', () => {
    let productColor = document.getElementsByClassName('color-description')[0].innerText;
    let productSize = document.getElementsByClassName('size')[0].innerText;
    let productQuantity = parseInt(document.getElementsByClassName('quantity')[0].value);

    let totalPrice = (productPrice * productQuantity).toFixed(2);
    // console.log(productName, productPrice, productColor, productSize, productQuantity, totalPrice);

    order += `<div id="order-wrapper" class="row">`
    order += `<div class="order-image d-inline-block col-xs-4 col-4">`
    switch (productColor) {
        case 'Blue and Navy':
            order += `<img class="img-fluid" src="assets/men-procuct-images/1.jpg" alt="blue-navy">`
            break;
        case 'Purple Green and Gold':
            order += `<img class="img-fluid" src="assets/men-procuct-images/2.jpg" alt="purple-green">`
            break;
        case 'Sage and Wine':
            order += `<img class="img-fluid" src="assets/men-procuct-images/3.jpg" alt="sage-wine">`
            break;
        case 'Brown and Blue':
            order += `<img class="img-fluid" src="assets/men-procuct-images/4.jpg" alt="brown-blue">`
            break;
        case 'Red and Navy':
            order += `<img class="img-fluid" src="assets/men-procuct-images/5.jpg" alt="red-navy">`
            break;
        default:
            break;
    }
    order += `</div>`
    order += `<div class="order-details d-inline-block col-7">`
    order += `<h5>${productName}</h5>`
    order += `<p><b>Color:</b> ${productColor}</p>`
    order += `<p><b>Size:</b> ${productSize}</p>`
    order += `<p><b>Quantity:</b> ${productQuantity}</p>`
    order += `<p><span><b>Total price:</b> $<span>${totalPrice}</p>`
    order += `</div>`
    order += `<span class="delete-order" onclick="this.parentElement.style.display='none'">&times;</span>`
    order += `</div>`

    list.innerHTML = order;
});