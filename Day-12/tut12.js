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

