console.log('JavaScript_Learning_Day-26')

// Classes And inheritance in JavaScript
const proto = {
    slogan: function() {
        return `This College is the best`;
    },
    changeName: function(nweName) {
        this.name = newName
    }
}

// This Creates Samir object
let samir = Object.create(proto);
samir.name = "Samir";
harry.role = "Programmer";
samir.changeName('Manjay')
console.log(samir);

// This also Creates Samir object

const samir1 = Object.create(proto, {
    name: { value: "samir", writable: true },
    role: { value: "Programmer" },
});

samir1.changeName("Avinash")
console.log(samir1);

// Employee Constructor 
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan
employee.prototype.slogan = function() {
    return `This Company is the best`;
}
let samirObj = new Employee("Samir", 2500000, 02);
console.log(samirObj.slogan())

// Programmer

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Avinash = new Programmer("Avinash", 20000000, 0, "JavaScript");
console.log(Avinash);

console.log('Happy_Learning_JavaScript');