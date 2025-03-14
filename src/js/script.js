window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 1500);
});

function createParticles() {
    const container = document.getElementById("particles-container");
    const runeShapes = ['✧', '⚔️', '⚶', '⚱', '♱', '☥'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const runeIndex = Math.floor(Math.random() * runeShapes.length);
        particle.textContent = runeShapes[runeIndex];
        particle.style.fontSize = `${Math.random() * 12 + 8}px`;
        particle.style.color = 'rgba(222, 179, 86, 0.4)';

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        const delay = Math.random() * 5;
        particle.style.animation = `float 15s infinite ease-in-out ${delay}s, fade 10s infinite ease-in-out ${delay}s`;

        container.appendChild(particle);
    }
}

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const heroVideo = document.querySelector('#home video');
    const heroContent = document.querySelector('#home .container');

    heroVideo.style.transform = `translateY(${scrollY * 0.4}px)`;
    heroContent.style.transform = `translateY(${scrollY * -0.30}px)`;
});

function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');

    const follower = document.createElement('div');
    follower.classList.add('custom-cursor-follower');

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    document.querySelectorAll('a, button, input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.borderColor = '#f5d78b';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderColor = '#deb356';
        });
    });
}

createCustomCursor();

function addTiltEffect() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = x / rect.width;
            const yPercent = y / rect.height;

            const rotateX = (yPercent - 0.5) * -10;
            const rotateY = (xPercent - 0.5) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

addTiltEffect();