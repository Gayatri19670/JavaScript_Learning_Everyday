console.log('JavaScript_Learning_Day-09');

// General Loops: for,while,do-while....

let a = 34;
a += 1;
a++;
console.log(a);
for (let i = 0; i < 100; i++) {
    // console.log(i);
}

let j = 110;
while (j < 10) {
    console.log(j + 1);
    j += 1;
}

let k = 0;
do {
    if (k === 5) {
        k += 1;
        continue;
    }
    console.log(k + 1);
    k += 1;
} while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});

let obj = {
    name: "Samir",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`)
}
console.log('done');
console.log('Happy_Learning_JavaScript');