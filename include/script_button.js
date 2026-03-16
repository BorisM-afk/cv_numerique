document.addEventListener('DOMContentLoaded', function () {

   // On crée une vraie modale au niveau du body
   // Comme elle est directement dans le body, aucun parent ne peut la piéger
   const modal = document.createElement('div');
   modal.id = 'experience-modal';
   modal.innerHTML = `
      <div id="modal-inner">
         <div id="modal-body"></div>
         <button id="modal-fermer" onclick="fermerModal()">Fermer ✕</button>
      </div>
   `;
   document.body.appendChild(modal);

   // L'overlay ferme la modale au clic
   document.getElementById('fond-sombre').addEventListener('click', fermerModal);
});

function ouvrirCarte(bouton) {
   const carte = bouton.closest('.experience-card');
   const overlay = document.getElementById('fond-sombre');
   const modal = document.getElementById('experience-modal');
   const modalBody = document.getElementById('modal-body');

   // On récupère le contenu de la carte
   const titre = carte.querySelector('h3').innerHTML;
   const infos = Array.from(carte.querySelectorAll('p')).map(p => p.outerHTML).join('');
   const description = carte.querySelector('.card-description').innerHTML;

   // On l'injecte dans la modale qui est dans le body, sans contexte d'empilement
   modalBody.innerHTML = `
      <h3>${titre}</h3>
      <div class="modal-infos">${infos}</div>
      <div class="modal-description">${description}</div>
   `;

   overlay.classList.add('active');
   modal.classList.add('active');
}

function fermerModal() {
   document.getElementById('fond-sombre').classList.remove('active');
   document.getElementById('experience-modal').classList.remove('active');
}

// Fermer avec Échap
document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape') fermerModal();
});
