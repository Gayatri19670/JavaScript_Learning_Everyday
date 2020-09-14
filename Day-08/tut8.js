console.log('JavaScript_Learning_Day-08');

// If Else Conditionals & Switches in JavaScript

const age = 19;
const doesDrive = true;

if (age == 19) {
    console.log('Age is 19');
} else if (age == 65) {
    console.log('Age is 65');
} else {
    console.log('Age is not 19');

}
// == check only value 
// === check value and type

if (typeof vari !== 'undefined') {
    console.log('vari is defined');
} else {
    console.log('vari is not defined');
}
if (doesDrive) {
    console.log('You can Drive');
} else {
    console.log('You can not Drive');
}

if (doesDrive || age > 18) {
    console.log('You can Drive');
} else {
    console.log('You can not Drive');
}

if (doesDrive && age > 18) {
    console.log('You can Drive');
} else {
    console.log('You can not Drive');
}
// turnery operator
console.log(age == 45 ? 'age is 45' : 'age is not 45');

switch (age) {
    case 18:
        console.log('Your Age 18');
        break;
    case 28:
        console.log('Your Age 8');
        break;
    case 38:
        console.log('Your Age 38');
        break;

    default:
        console.log('You are unknown age');
        break;
}

console.log('JavaScript_Happy_Learning');