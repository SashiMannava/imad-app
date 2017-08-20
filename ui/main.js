console.log('Loaded!');

// change the text of the main-text div
var element = document.getElementById("main-text");

element.innertHTML = 'New value';

// Move the Image
var img = document.getElementById("madi");
var marginLeft = 0;
funtion moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    }

img.onclick = function () {
    var interval = setinterval(moveRight, 50);
// img.style.marginleft = '100px';
};