window.onload = function() {
    // Récupère le nom après le # dans l'URL
    let hash = window.location.hash.substring(1);
    const nameDisplay = document.getElementById('family-name-display');
    

    if (hash && nameDisplay) {
        const cleanName = decodeURIComponent(hash).replace(/-/g, ' ');
        const nameInput = document.getElementById('family-name-input');
        nameDisplay.innerText = ""+cleanName;
        nameInput.value = cleanName;
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
    }, 3500);
}

// Compte à rebours
const targetDate = new Date('August 15, 2026 14:00:00').getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

// Animation au scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.2 // Déclenche quand 20% de l'élément est visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionnel : arrêter d'observer une fois apparu
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Cible tous les éléments qui ont la classe 'reveal-on-scroll'
document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Gestion de l'indicateur de scroll
window.addEventListener('scroll', function() {
    const scrollHint = document.getElementById('scroll-hint');
    
    // Si on a scrollé de plus de 50px, on cache l'indicateur
    if (window.scrollY > 50) {
        scrollHint.classList.add('hidden');
    } else {
        // Si on remonte tout en haut, on le réaffiche (optionnel)
        scrollHint.classList.remove('hidden');
    }
});