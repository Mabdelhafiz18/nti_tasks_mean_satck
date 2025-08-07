function greetUser() {
    console.log("Hello, User!");
}

var Timeout = setTimeout(greetUser, 3000);

function startCountdown() {
    
    var count = 10;
    
    var countdownInterval = setInterval(function() {
        console.log(count);
        
        // Decrease the counter
        count--;
        
        // When countdown reaches 0, display message and stop interval
        if (count < 0) {
            console.log("Time's up!");
            clearInterval(countdownInterval);
        }
    }, 1000); // Execute every 1 second
}

startCountdown();


function startLimitedCountdown() {
    var count = 10;
    
    var limitedCountdownInterval = setInterval(function() {
        console.log("limited countdown:", count);
        count--;
    }, 1000);
    
    // Stop the interval after 5 seconds regardless of count value
    setTimeout(function() {
        clearInterval(limitedCountdownInterval);
        
    }, 5000);
}

startLimitedCountdown();


var messageTimeout = setTimeout(function() {
    console.log("This will be cleared!");
}, 5000);


clearTimeout(messageTimeout);