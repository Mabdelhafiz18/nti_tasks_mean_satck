var username = "mohamed";
var password = "mo123456";


if (username === "") {
    alert("Username is required");
}

if (password.length < 8) {
    alert("Password must be at least 8 characters");
}

if (username !== "" && password.length >= 8) {
    console.log("Username:", username);
    console.log("Password:", password);
}