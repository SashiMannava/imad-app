console.log('Loaded!');

// change the text of the main-text div
var element = document.getElementById ('main-text');
element.innertHTML = 'New value';

// Move the Image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginleft = '100px';
};