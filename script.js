function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Fake credentials (you can change them)
    if(user === "admin" && pass === "1234") {
        window.location.href = "index.html"; // redirect to homepage
        return false; 
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password!";
        return false; 
    }
}
