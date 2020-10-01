console.log('JavaScript_Learning_Day-28');

// Object Literal : Object-prototype

let obj = {
    name: 'Samir',
    age: 20,
    address: 'Gorakhpur'
}
console.log(obj);

function Obj(givenName) {
    this.name = givenName
}

Obj.prototype.getName = function() {
    return this.name;

}

Obj.prototype.setName = function(newName) {
    return this.name = newName;
}

let obj2 = new Obj('Manjay');
console.log(obj2);

console.log('Happy_Learning_JavaScript');