console.log("JavaScript_Learning_Day-33");

// Pretent that this response is coming from the server


const students = [
    { name: "Samir", subject: "JavaScript" },
    { name: "Alok", subject: "Machin Learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log('Student Has been enrolled');
        callback();

    }, 3000);

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
enrollStudent(newStudent);
getStudents();

console.log('Happy_Learning_JavaScript');