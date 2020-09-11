console.log('JavaScript_Learning_Day-07');

// lets discuss about arrays

// const marks = [34,23,24,93,73,25];
let marks = [34, 23, 24, 93, 73, 25];

const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(arr);
// // console.log(mixed);
console.log(fruits);

// for print a particular element from array

console.log(fruits[0]);
console.log(mixed[2]);
console.log(arr.length);


//   for check a array is a array or not
console.log(Array.isArray(arr));
console.log(Array.isArray(array1);

        // for incerting an element into a array

        arr[0] = 'Samir';
        let arrelement = arr[0]; console.log('element :', arrelement); console.log(arr);


        // index of element of an array
        let value = marks.indexOf(73); console.log(value);

        // Mutating or Modifying arrays
        //  push the element from the last of the array
        marks.push(3534); console.log(marks);
        // push the element in the first of the array
        marks.unshift(1222); console.log(marks);
        // pop the element from the last of the array
        marks.pop(); console.log(marks);
        // push the element in the start of the array
        marks.shift(); console.log(marks);
        // for output from to 
        marks.splice(2, 3); console.log(marks);
        // for reversing the array
        marks.reverse(); console.log(marks);

        // for concat 2 arrays

        let marks2 = [1, 2, 3, 74, 5]; marks = marks.concat(marks2); console.log(marks);

        let myobj = {
            name: 'samir',
            channel: 'CodewithHarry',
            isActive: true,
            marks: [1, 5, 3, 6]
        }
        console.log(myobj); console.log(myobj.isActive);