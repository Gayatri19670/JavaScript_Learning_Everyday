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

Function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Student have been fetched');
    }, 1000);
}