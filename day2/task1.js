var userName = prompt("Please enter your name:");
var birthYear = parseInt(prompt("Please enter your birth year:"));
var isStudent = confirm("Are you a student?");


var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var category;
if (age < 13) {
    category = "Kid";
} else if (age >= 13 && age <= 17) {
    category = "Teen";
} else if (age >= 18 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior";
}


var message = "Hello " + userName + ", you are " + age + " years old.\nCategory: " + category + ".";

if (isStudent) {
    message += "\nDon't forget to study hard!";
}


console.log(message);

alert(message);



    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = message;
    };