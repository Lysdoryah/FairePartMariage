function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const fullContent = document.getElementById('full-content');
    const envelopeSection = document.getElementById('envelope-section');
    const instruction = document.querySelector('.instruction');

    // 1. On cache l'instruction pour faire propre
    instruction.style.opacity = '0';
    instruction.style.transition = 'opacity 0.5s';

    // 2. On lance l'animation CSS de l'enveloppe
    envelope.classList.add('open');

    // 3. Temporisation avant d'afficher la suite
    setTimeout(() => {
        // On rend le contenu principal visible
        fullContent.classList.add('visible');
        
        // On fait disparaître l'enveloppe en douceur (fade out)
        envelopeSection.style.opacity = '0';
        
        // Une fois l'enveloppe invisible, on la retire du flux pour ne pas gêner le scroll
        setTimeout(() => {
            envelopeSection.style.display = 'none';
            // Scroll fluide vers le haut du nouveau contenu
            fullContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000); // Attendre la fin du fade out de envelopeSection

    }, 1800); // Attendre que la lettre soit sortie de l'enveloppe
}

// --- Compte à rebours (Rien ne change ici) ---
// REGLER LA DATE ICI : Mois Jour, Annee Heure:Minute:Seconde
const targetDate = new Date('August 24, 2026 14:00:00').getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<h3 style='color:var(--secondary)'>Le mariage est passé ! Vive les mariés !</h3>";
    }
}, 1000);