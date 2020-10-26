console.log('JavaScript_Learning_Day-10');

// Functions in JavaScript

console.log('Samir');

// let name = 'samir';
let name2 = 'Krishna';

function greet(name, thank = 'thank you') {
    console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`)
        // return 4;

    return msg;
}
let name = 'Ayush';
// greet(name,'thanks a lot');
greet(name);
let val = greet(name, 'thanks a lot');
console.log(val);

const mygreet = function greet(name, thank = 'thank you') {
    console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thank}!`)
        // return 4;

    return msg;
}
let name = 'Manjay';
// greet(name,'thanks a lot');
// greet(name);
let val = mygreet(name, 'thanks a lot');
console.log(val);

const myobj = {
    name: 'Rahul',
    game: function() {
        return "GTA";
    }
}
console.log(myobj.game());

arr = ['fruit', 'vegetable', 'phone'];
arr.forEach(function(element, index, array) {
    console.log(element, index, array)
    console.log(element, array)
    console.log(element, index)

});

// scope in JavaScript

// var has function level scope
var i = 234;
console.log(i);

function ui(name) {
    var i = 25;
    i = 9;
    console.log(i);
    return `this is a ${name} ui`;

}
console.log(ui("Rajat"), i);

// let/const has block level scope

let j = 24;
console.log(j);

function code(name) {
    let j = 10;
    j = 9;
    console.log(j);
    return `this is a ${name} code`;

}
console.log(code("Avinash singh"), j);

console.log('Happy_Learning_JavaScript');