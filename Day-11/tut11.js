console.log("JavaScript_Learning_Day-11");

// Manipulatin website Using JavaScript Windows Object

/*
DOM (Document Object Model):-
The document object represents the whole html document.

When html document is loaded in the browser, it becomes a document object. It is the root element that represents the html document. It has properties and methods. By the help of document object, we can add dynamic content to our web page.

As mentioned earlier, it is the object of window. 
*/


let a = window;
window.alert('Hello world')
a = prompt('This will destroy your Computer.Type your name')
console.log(a);

/* The name you entered will be stored in a and give output in Console the of entering the name
The prompt gives you 1 prompt. Under it, what you type is stored in the variable. */

a = confirm('Are you sure want to delete this page');
console.log(a);

//If we press Yes, it will give true output in the console.
//If we press No, it will give False output in the console.

a = window.document;
console.log(a);

/*

write("string")	writes the given string on the doucment.
writeln("string")	writes the given string on the doucment with newline character at the end.
getElementById()	returns the element having the given id value.
getElementsByName()	returns all the elements having the given name value.
getElementsByTagName()	returns all the elements having the given tag name.
getElementsByClassName()	returns all the elements having the given class name.

*/

// let discuss about inner height and inner width

a = window.innerHeight;
console.log(a);
a = window.innerWidth;
console.log(a);
a = window.outerHeight;
console.log(a);
a = window.outerWidth;
console.log(a);
a = scrollX;
console.log(a);
a = scrollY;
console.log(a);


a = location;
location.reload
location.href '//facebook.com'
console.log(a);
a = location.toString();
console.log(a);
a = window.history
console.log(a);
a = history.length
console.log(a);
a = history.goto()
console.log(a);

console.log('Happy_Learning_JavaScript');