console.log('JavaScript_Learning_Day-24');

// object literal for creating objects 
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function() {
        console.log('Car is running');
    }
}

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars


function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running`);
    }
    this.run = function() {

    }
    this.analyze = function() {
        console.log(`This car is slower by ${200 - this.topSpeed} km/H than Mercedes`)
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Alto', 80);
car3 = new GeneralCar('Tata', 150);

console.log(car1, car3, car3);