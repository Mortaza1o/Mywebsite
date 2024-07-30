document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'مرتضى' && password === 'مريم') {
        document.querySelector('.heart').style.display = 'none';
        document.getElementById('images').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
});
