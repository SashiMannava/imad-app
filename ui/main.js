//console.log('Loaded!');
// change the text of the main-text div
//var element = document.getElementById("main-text");
//element.innertHTML = 'New value';
// Move the Image
//var img = document.getElementById("madi");
//var marginLeft = 0;
//funtion moveRight () {
  //  marginLeft = marginLeft + 5;
   // img.style.marginLeft = marginLeft + 'px';
//}
  //  img.onclick = function () {
   // var interval = setinterval(moveRight, 50);
//};
//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onClick = function() {
    //make a request to the endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
        counter = counter + 1;
        var span = document.getElementById('count');
        span.innerHTML=counter.toString();
};