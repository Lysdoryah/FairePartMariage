const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const invitationScreen = document.getElementById("invitationScreen");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.classList.remove("visible");
    invitationScreen.classList.add("visible");
  }, 800);
});
