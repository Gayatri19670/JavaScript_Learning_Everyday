console.log('JavaScript_Learning_Day-37');

// Arrow functions in Javascript

// Creating a regular function

const samir = function() {
    console.log('this is the best person ever');
}
samir();

// Converting it to an arrow function

const samir = () => {
    console.log('this is the best person ever');
}
samir();


// function returning something

const greet = function() {
        return "Good Morning";

    }
    // greet();  give error

console.log(greet());

// one liners do not require braces/return
// one line will automatically return

const greet = () => 'Good Morning';
console.log(greet());

const greet = () => ({ name: "Samir" });
console.log(greet());

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple parameters

const greet = name => "Good Morning" + name + ending;

console.log(greet('Samir'));

console.log('Happy Learning JavaScript');