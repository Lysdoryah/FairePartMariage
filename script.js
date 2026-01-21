const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const envelopeBox = document.querySelector(".envelope");

envelope.addEventListener("click", () => {
  envelopeBox.classList.add("open");

  setTimeout(() => {
    envelope.style.display = "none";
    invitation.classList.remove("hidden");
    document.body.style.overflow = "auto";
  }, 800);
});
