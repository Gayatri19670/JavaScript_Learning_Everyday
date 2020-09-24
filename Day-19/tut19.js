console.log('JavaScript_Learning_Day-19');

// localStorage == Key & Value
// SessionStorage == Closing the browser, all the data gets lit.

let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
localStorage.setItem('Name', 'Manjay');
localStorage.setItem('Name2', 'Gautam');
localStorage.setItem('Sabzi', JSON.stringify(impArray));




// Clears the entire local storage
localStorage.clear();

// Clear a particular key-value pair
localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

sessionStorage.setItem('sessionName', 'sRahul');
sessionStorage.setItem('sessionName2', 'sAlok');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));

console.log('Happy_Learning_JavaScript');