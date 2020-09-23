console.log('JavaScript_Learning_Day-18');

// More on JavaScript Events

/*
#Reacting to #Events :
A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute
Examples of HTML events:
1. When a user clicks the mouse
2. When a web page has loaded
3. When an image has been loaded
4. When the mouse moves over an element
5. When an input field is changed
6. When an HTML form is submitted
7. When a user strokes a key

*/

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
btn.addEventListener('dblclick', func2);

function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault();
}

function func3(e) {
    console.log("Thanks its a mouse down ", e);
    e.preventDefault();
}


document.querySelector('.no').addEventListener('mouseenter', function() {


    console.log('You entered no')
})

document.querySelector('.no').addEventListener('mouseleave', function() {
    console.log('You exited no')
})

document.querySelector('.no').addEventListener('mousemove', function() {
    console.log('You triggered mouse move event');
})

document.querySelector('.container').addEventListener('mousemove', function(e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})


console.log('Happy_Learning_JavaScript');