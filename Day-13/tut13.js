console.log('JavaScript_Learning_Day-13');

// Webpage Crawler In JavaScript : Exercise-01

/*
*** Exercise-01***
1. You have to create a variable which is a 
string containing the text which is a link
 you are interested in. 

2. You have to fetch all the links from a
 given page which contains this text
 codewithharry.com 

 */

////////// Solution ////////////

let str = 'Python'
let links = document.links;
let href;
console.log(links);
array.from(a).forEach(function(element) {
    href = element.href;
    if (href.includes(href)) {
        console.log(href);
    }
})