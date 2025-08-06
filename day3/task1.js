//Q1
var numbers = [15, -7, 22, -3, 9, -10, 12, 5, -8, 17];
 

var positiveSum = 0;
for (var i = 0; i < numbers.length; i++) {
    
    if (numbers[i] < 0) {
        continue;
    }
    positiveSum += numbers[i];
}
//Q2
var totalSum = 0;
for (var i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}
//Q3
console.log("Original array:", numbers);
console.log("Sum of positive numbers:", positiveSum);
console.log("Sum of all numbers:", totalSum);


//Q4
numbers.push(30); 
numbers.shift();  
//Q5
console.log("Modified array:", numbers);