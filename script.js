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

$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});