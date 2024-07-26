const gameArea = document.getElementById('gameArea');
let score = 0;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // تعيين موضع النجمة بشكل عشوائي في أعلى الشاشة
    const startPosition = Math.floor(Math.random() * gameArea.offsetWidth);
    star.style.left = `${startPosition}px`;

    // تعيين مدة الحركة بشكل عشوائي بين 3 و 6 ثوانٍ
    const duration = Math.random() * 3 + 3;
    star.style.animationDuration = `${duration}s`;

    star.addEventListener('click', () => {
        score++;
        document.getElementById('score').innerText = score;
        star.remove();
    });

    star.addEventListener('animationend', () => {
        star.remove();
    });

    gameArea.appendChild(star);
}

function startGame() {
    setInterval(createStar, 1000);
}

startGame();
