//q1

var student = {
    name: "Mohamed Abdelhafiz",
    age: 21,
    grade: "B+",
    isGraduated: false
};

//q2
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

//q3
student.grade = "A";
console.log("Updated Grade:", student.grade);

//q4
var properties = Object.keys(student);
console.log("Object Properties:", properties);

//q5
var values = Object.values(student);
console.log("Object Values:", values);

//q6
student.email = "mohamed.abdelhafiz@gmail.com";
console.log("Student Email:", student.email);


//q7
console.log(student);

delete student.isGraduated;
console.log(student);