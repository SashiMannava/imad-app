
var button = document.getElementById('counter');

button.onClick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        //Take some action
            if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
        }
    };
        // not done yet
        
    //make the request
    request.open('GET', 'http://sashidharmannava.imad.hasura-app.io/counter', true);
    request.send(null);
};
// Submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onClick = function() {
    //make a request to the server and send the name
    
    //capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = "";
    for (var i=0; i < names.length; i++) {
        list += '<li>' + names [i] + '</li>';
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
    
    
    
    
}