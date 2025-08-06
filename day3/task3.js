// Q3
var students = [
    {
        name: "Mohamed Abdelhafiz",
        age: 21,
        grade: "B+",
        isGraduated: false
    },
    {
        name: "Anas Ali",
        age: 22,
        grade: "A",
        isGraduated: true
    },
    {
        name: "Mahmoud Hassan",
        age: 24,
        grade: "C",
        isGraduated: true
    }
];

// q2
var totalAge = 0;
var graduatedCount = 0;
var nonGraduatedCount = 0;

for (var i = 0; i < students.length; i++) {
    
    totalAge += students[i].age;
    

    if (students[i].isGraduated) {
        graduatedCount++;
    } else {
        nonGraduatedCount++;
    }
}

// Calculate average age
var averageAge = totalAge / students.length;

console.log("Average Age:", averageAge.toFixed(2));
console.log("Number of Graduated Students:", graduatedCount);
console.log("Number of Non-Graduated Students:", nonGraduatedCount);

// q3
for (var i = 0; i < students.length; i++) {
    console.log("Keys:", Object.keys(students[i]));
    console.log("Values:", Object.values(students[i]));
}

// 4. Add a new student
var newStudent = {
    name: "Amr Khaled",
    age: 20,
    grade: "B+",
    isGraduated: false
};

// Add email property to the new student
newStudent.email = "amr.khaled@example.com";

// Add new student to the array
students.push(newStudent);


console.log("New Student Added:", newStudent);
console.log("Total Students Now:", students.length);

//Q5

for (var i = 0; i < students.length; i++) {
    delete students[i].isGraduated;
}

// Q6
console.log("\n Student Information ");


console.log("\nStudent Names:");
for (var i = 0; i < students.length; i++) {
    console.log((i + 1) + ". " + students[i].name);
}


console.log("\nAverage Age:", averageAge.toFixed(2));



console.log("Number of Graduated Students:", graduatedCount);
console.log("Number of Non-Graduated Students:", nonGraduatedCount);

