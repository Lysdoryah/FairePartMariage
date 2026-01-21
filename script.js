const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const invitationScreen = document.getElementById("invitationScreen");

envelope.addEventListener("click", () => {
  envelope.classList.add("open"); // lève le rabat

  setTimeout(() => {
    envelopeScreen.classList.add("hidden"); // masque l'enveloppe
    invitationScreen.classList.remove("hidden"); // montre le faire-part
    document.body.style.overflow = "auto"; // scroll activé
  }, 800);
});
