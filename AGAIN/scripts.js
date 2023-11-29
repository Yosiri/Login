const userData = {
    "user123": "password456",
    "user789": "password123",
    "admin": "Admin123"
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        if(userData[username] && userData[username] === password){
            if(username === "admin"){
                window.location.href = "admin-home.html";
            } else {
                window.location.href = "user-home.html";
            }
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password!');
    }
});