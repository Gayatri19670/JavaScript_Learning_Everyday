console.log("JavaScript_Learning_Day-23");

// Date Object : Date & Time In JavaScript

/**
 * JavaScript Date Object :
The JavaScript date object can be used to get the year, month, and day. You can display a timer on the webpage with the help of a javascript date object.
You can use different Date constructors to create the date object. It provides methods to get and set day, month, year, hour, minute, and seconds.

 */

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('08-4-2003 04:54:30');
console.log(otherDate);
otherDat = new Date('June 15 1999');
console.log(otherDate);
otherDat = new Date('09/15/1999');
console.log(otherDate);

let a;
a = otherDate.getDay();
console.log(otherDate);
a = otherDate.getDate();
console.log(otherDate);
a = otherDate.getMinutes();
console.log(otherDate);
a = otherDate.getHours();
console.log(otherDate);
a = otherDate.getSeconds();
console.log(otherDate);
a = otherDate.getMilliseconds();
console.log(otherDate);
a = otherDate.getTime();
console.log(otherDate);
a = otherDate.getTimezoneOffset();
console.log(otherDate);


a = otherDate.getUTCDate();
console.log(otherDate);
a = otherDate.getUTCDay();
console.log(otherDate);
a = otherDate.getUTCFullYear();
console.log(otherDate);
a = otherDate.getUTCMonth();
console.log(otherDate);
a = otherDate.getUTCHours();
console.log(otherDate);
a = otherDate.getUTCMinutes();
console.log(otherDate);
a = otherDate.getUTCSeconds();
console.log(otherDate);
a = otherDate.getUTCMilliseconds();
console.log(otherDate);

a = otherDate.setDate(1);
console.log(otherDate);
a = otherDate.setMonth(2);
console.log(otherDate);
a = otherDate.setMinutes(3);
console.log(otherDate);
a = otherDate.setFullYear(4);
console.log(otherDate);
a = otherDate.setHours(5);
console.log(otherDate);
a = otherDate.setSeconds(6);
console.log(otherDate);

console.log("Happy_Learning_JavaScript")