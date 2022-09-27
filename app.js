let mainImage = document.getElementById('main-img');
let container = document.querySelector('.container');

function phoneHandler(src) {
    mainImage.src = src
}

function colorHandler(color) {
    container.style.background = color;
}