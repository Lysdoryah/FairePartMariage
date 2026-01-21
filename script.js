function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const fullContent = document.getElementById('full-content');
    const envelopeSection = document.getElementById('envelope-section');

    // Ajoute la classe qui déclenche l'animation CSS
    envelope.classList.add('open');

    // Après l'animation de l'enveloppe (1.5s), on affiche le contenu
    setTimeout(() => {
        // Optionnel : faire disparaître l'enveloppe ou la laisser en haut
        // Ici, on fait défiler doucement vers le contenu
        fullContent.classList.add('visible');
        
        // Scroll automatique fluide vers le contenu
        fullContent.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// --- Compte à rebours ---
const weddingDate = new Date('August 24, 2026 14:00:00').getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculs de temps
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Affichage
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la date est passée
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Nous sommes mariés !";
    }
}, 1000);