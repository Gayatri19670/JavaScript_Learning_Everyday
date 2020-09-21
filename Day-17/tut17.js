console.log('JavaScript_Learning_Day-17');

// Events & Event object in JavaScript

document.getElementById("heading").addEventListener("click")
document.getElementById("heading").addEventListener("click", function() {
    console.log("You have clicked the heading");

});

// How to redirect a webpage in your code

document.getElementById("heading").addEventListener("click", function() {
    console.log("You have clicked the heading");
    location.href = '//facebook.com'
});
//  How to printEvent object(e)

document.getElementById("heading").addEventListener("click", function(e) {
    let variable;
    console.log("You have clicked the heading");
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href = '//facebook.com'
});

document.getElementById("heading").addEventListener('mouseover', function(e) {
    let variable;
    console.log("You have clicked the heading");
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href = '//facebook.com'
});

console.log('Happy_Learning_JavaScript');