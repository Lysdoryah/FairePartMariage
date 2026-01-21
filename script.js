// Intro Screen Click
document.getElementById('intro-screen').addEventListener('click', () => {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
});

// Countdown Timer
const weddingDate = new Date("Aug 28, 2026 15:00:00").getTime();
const countdownEl = document.getElementById("countdown");
setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}j ${hours}h ${mins}m ${secs}s`;
}, 1000);

// RSVP Form
document.getElementById('rsvp-form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.thanks').classList.remove('hidden');
});
