window.onload = function() {
    // Récupère le nom après le # dans l'URL
    let hash = window.location.hash.substring(1);
    const nameDisplay = document.getElementById('family-name-display');
    
    if (hash && nameDisplay) {
        const cleanName = decodeURIComponent(hash).replace(/-/g, ' ');
        nameDisplay.innerText = cleanName;
    }
};

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const fullContent = document.getElementById('full-content');
    const envelopeSection = document.getElementById('envelope-section');
    const nameDisplay = document.getElementById('family-name-display');

    // Déclenche l'animation
    envelope.classList.add('open');
    if(nameDisplay) nameDisplay.style.opacity = '0';

    // Transition vers le site
    setTimeout(() => {
        fullContent.classList.add('visible');
        envelopeSection.style.opacity = '0';
        
        setTimeout(() => {
            envelopeSection.style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    }, 2000);
}

// Compte à rebours
const targetDate = new Date('August 24, 2026 14:00:00').getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);