// script.js

// Ce code ajoute une petite classe CSS après le chargement de la page
// pour que la carte apparaisse avec une petite animation si vous le souhaitez.
// (Nécessiterait d'ajouter la classe 'hidden' à .profile-card dans le CSS et de styliser l'animation)

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    
    // Si la carte est cachée au départ (avec CSS)
    // card.classList.remove('hidden');

    console.log("Profil chargé ! Prêt à être partagé.");
});