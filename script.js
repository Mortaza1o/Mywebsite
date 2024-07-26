function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    if (username === 'مرتضى' && password === 'مريم') {
        heart.classList.add('open');
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert('Invalid credentials');
    }
}
