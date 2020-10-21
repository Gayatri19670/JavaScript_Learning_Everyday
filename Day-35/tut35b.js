console.log("JavaScript_Learning_Day-35b");

// Pretent that this response is coming from the server


const students = [
    { name: "Samir", subject: "JavaScript" },
    { name: "Alok", subject: "Machin Learning" }
]

function enrollStudent(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            students.push(student);
            console.log('Student Has been enrolled');
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }

        }, 3000);
    })
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Student have been fetched');
    }, 1000);
}

let newStudent = { name: "Manjay", subject: "Microprocessor" };
enrollStudent(newStudent).then(function() {
    getStudents();
}).catch(function() {
    console.log('Some error occured');
});
// getStudents();

console.log('Happy_Learning_JavaScript');