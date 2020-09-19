console.log('JavaScript_Learning_Day-14');

// HTML Element Selector In JavScript
/*

 Type Of element selectors:

1. Single element selector
2. Multi element selector

*/
// 1. Single element selector

let element = document.getElementById('myfirst');
console.log(element);
element = element.className;
console.log(element);
element = element.childNodes;
console.log(element);
element = element.parentNode;
console.log(element);
element.style.color = 'red';
console.log(element);
element.innerText = 'Manjay is a good boy';
console.log(element.innerText);
element.innerHTML = '<b>Manjay is a good boy</b>';
console.log(element.inneHTML);


let sel = document.querySelector('#myfirst');
console.log(sel);
sel = document.querySelector('.child');
console.log(sel);
sel = document.querySelector('div');
console.log(sel);
sel = document.querySelector('h1');
console.log(sel);
sel.style.color = 'green';
console.log(sel);

// 2. Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});
console.log(elems[0].getElementsByClassName('child'))