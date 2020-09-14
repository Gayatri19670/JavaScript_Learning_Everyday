console.log('JavaScript_Learning_Day-10');

// Functions in JavaScript

if (1) {
    let i = 234;
    console.log(i)
}

console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("Abhay"), i)
const mygreet = function(name, thank = 'Thank You') {
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'Krishna';
let name2 = 'Manjay';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function() {
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});

console.log('Happy_Learning_JavaScript');