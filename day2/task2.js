// Q1
var employee_name = prompt("Enter employee name:");
var employee_age = parseInt(prompt("Enter employee age:"));
var years_experience = parseInt(prompt("Enter years of experience:"));
var self_rating = parseInt(prompt("Rate yourself from 1 to 10:"));
var base_salary = parseInt(prompt("Enter base salary:"));


//Q2
var job_category;
if (years_experience < 2) {
    job_category = "Junior";
} else if (years_experience >= 2 && years_experience < 5) {
    job_category = "Mid-Level";
} else if (years_experience >= 5 && years_experience <= 10) {
    job_category = "Senior";
} else {
    job_category = "Expert";
}

//Q3
var performance_level;
switch (true) {
    case (self_rating >= 9 && self_rating <= 10):
        performance_level = "Excellent";
        break;
    case (self_rating >= 7 && self_rating <= 8):
        performance_level = "Good";
        break;
    case (self_rating >= 5 && self_rating <= 6):
        performance_level = "Average";
        break;
    case (self_rating >= 1 && self_rating < 5):
        performance_level    = "Needs Improvement";
        break;
    default:
        performance_level = "Invalid Rating";
}


//Q4
var bonus_percentage;
if (years_experience >= 0 && years_experience <= 2) {
    bonus_percentage = 0.10; 
} else if (years_experience > 2 && years_experience <= 5) {
    bonus_percentage = 0.15; 
} else {
    bonus_percentage = 0.20; 
}
var bonus_amount = base_salary * bonus_percentage;
var final_salary = base_salary + bonus_amount;

//Q5
var current_hour = new Date().getHours();
var shift;
if (current_hour >= 9 && current_hour < 18) {
    shift = "Day Shift";
} else {
    shift = "Night Shift";
}

// Q6

var report = "Employee Evaluation Summary\n" +
             "--------------------------\n" +
             "Name: " + employee_name + "\n" +
             "Age: " + employee_age + "\n" +
             "Experience: " + years_experience + " years\n" +
             "Job Category: " + job_category + "\n" +
             "Performance Level: " + performance_level + "\n" +
             "Base Salary: $" + base_salary.toFixed(2) + "\n" +
             "Bonus (" + (bonus_percentage * 100) + "%): $" + bonus_amount.toFixed(2) + "\n" +
             "Final Salary: $" + final_salary.toFixed(2) + "\n" +
             "Current Shift: " + shift;


console.log(report);

alert(report);


var resultElement = document.getElementById("result");
if (resultElement) {
    resultElement.innerText = report;
}