console.log('JavaScript_Learning_Day-06');
const myName = 'Samir';
const greeting = 'Good Morning';
console.log(greeting + ' ' + myName);

let html;
html = "<h1> hello i am Samir Gupta</h1>" +
    "<p>what is your name</P>";

html = html.concat('This', 'str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// indexing start with 0

console.log(html[1]);
console.log(html.indexOf('h1'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(2));
console.log(html.endsWith('fgsdbvfcbdfbdf'));
console.log(html.includes('fgsdbvfcbdfbdf'));
console.log(html.includes('is'));

console.log(html.substring(1, 6)); // include (n-1)
console.log(html.slice(0, 4));
console.log(html.split(' '));
console.log(html.split('>'));

console.log(html.replace('this', 'It')); //replace alaways first occurance

// template literals (introduce in ES6)

let fruit2 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `hello &{name}
<h1> this is the heading </h>
<p> You like ${fruit1} and ${fruit1}
`;
document.body.innerHTML = myHtml;