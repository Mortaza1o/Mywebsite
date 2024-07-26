let score = 0;

function moveHeart() {
    const heart = document.getElementById('heart');
    const container = document.querySelector('.game-container');
    const maxX = container.clientWidth - heart.clientWidth;
    const maxY = container.clientHeight - heart.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;
}

document.getElementById('heart').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    moveHeart();
});

setInterval(moveHeart, 1000);
