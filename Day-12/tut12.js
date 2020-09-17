console.log('JavaScript_Learning_Day-12');

let a = document;
a = document.all;
console.log(a);
a = document.body;
console.log(a);
a = document.forms[0];
Array.from(a).forEach(function(element) {
    console.log(element);
})
a = document.links[0];
console.log(a);

/*
 use document.images and document.
scripts and print the list of 
images and scripts on an html page 
*/

a = document.images;
console.log(a);
a = document.scripts;
console.log(a);
a = document.links;
console.log(a);

a = document.all;
a.forEach(function(element) {
    console.log(element);
})
console.log(a);

//"a.forEach" not a function so this gives error
// To avoid this, we use the "array.form".
// Array in this case array creates a collection of HTML

array.from(a).forEach(function(element) {
    console.log(element);
});
console.log(a);