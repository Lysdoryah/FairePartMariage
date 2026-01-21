const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const invitationScreen = document.getElementById("invitationScreen");

envelope.addEventListener("click", () => {
  envelope.classList.remove("close");
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    invitationScreen.classList.remove("hidden");
    document.body.style.overflow = "auto";
  }, 1200); // un peu plus de temps pour animation
});
