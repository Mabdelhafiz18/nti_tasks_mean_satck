function greetUser() {
    console.log("Hello, User!");
}

var Timeout = setTimeout(greetUser, 3000);

function startCountdown() {
    
    var count = 10;
    
    var countdownInterval = setInterval(function() {
        console.log(count);
        
    
        count--;
        
    
        if (count < 0) {
            console.log("Time's up!");
            clearInterval(countdownInterval);
        }
    }, 1000); 
}

startCountdown();


function startLimitedCountdown() {
    var count = 10;
    
    var limitedCountdownInterval = setInterval(function() {
        console.log("limited countdown:", count);
        count--;
    }, 1000);
    
    
    setTimeout(function() {
        clearInterval(limitedCountdownInterval);
        
    }, 5000);
}

startLimitedCountdown();


var messageTimeout = setTimeout(function() {
    console.log("This will be cleared!");
}, 5000);


clearTimeout(messageTimeout);