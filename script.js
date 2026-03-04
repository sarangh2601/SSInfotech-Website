function login() {
    let user = document.querySelector("#uname");
    let pass = document.querySelector("#pass");

     let correctUsername = "admin";
    let correctPassword = "1234";

    // Validate credentials
    if (user.value === correctUsername && pass.value === correctPassword) {
        alert("Login Successful!");
        return true;
    } else {
        alert("Invalid Username or Password");
        return false;
    }
}