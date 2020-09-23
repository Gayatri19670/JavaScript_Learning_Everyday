console.log('JavaScript_Learning_Day-17');

// Events & Event object in JavaScript

/*     ****Event Methods & properties ****
bubbles	 == Returns whether or not a specific event is a bubbling event
cancelBubble ==	Sets or returns whether the event should propagate up the hierarchy or not
cancelable ==	Returns whether or not an event can have its default action prevented
composed ==	Returns whether the event is composed or not
createEvent() ==	Creates a new event
composedPath()==	Returns the event's path
currentTarget ==	Returns the element whose event listeners triggered the event
defaultPrevented ==	Returns whether or not the preventDefault() method was called for the event
eventPhase  ==	Returns which phase of the event flow is currently being evaluated
isTrusted ==	Returns whether or not an event is trusted
preventDefault() ===	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
stopImmediatePropagation() ===	Prevents other listeners of the same event from being called
stopPropagation() ===	Prevents further propagation of an event during event flow
target ==	Returns the element that triggered the event
timeStamp ===	Returns the time (in milliseconds relative to the epoch) at which the event was created
type  ===	Returns the name of the event
*/


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