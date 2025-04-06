// const req = require("express/lib/request");
// const res = require("express/lib/response");
// const {
//     redirect, append
// } = require("express/lib/response");

function signupSubmit() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("rep-pass").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }else{
        return true;
}
}