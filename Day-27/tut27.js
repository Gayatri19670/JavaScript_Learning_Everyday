console.log("JavaScript_Learning_Day-27");


// Classes And inheritance in JavaScript



class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return ` I am ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2020 - this.givenExperience;
    }
    static add(a, b) {
        return a + b;
    }
}
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, Language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if (this.language == "Python") {
            return 'Python'
        } else {
            return 'JavaScript'
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
samir = new employee("Samir", 56, "Division");
console.log(samir);
console.log(samir.joiningYear);
console.log(Employee.add(34, 5));

Som = new Programmer("Som", 3, "Lays", "Go", "Gayatri19670")
console.log(Som)
console.log(Som.favoriteLanguage())
console.log(Programmer.multiply(5, 7))

console.log('Happy_Learning_JavaScript');