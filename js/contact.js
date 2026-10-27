// On récupère les éléments du formulaire dont on a besoin
const formulaire = document.querySelector('#formulaire');
const bouton = document.querySelector('#bouton');
const statut = document.querySelector('#statut');

// Quand on clique sur "Envoyer"
formulaire.addEventListener('submit', async (evenement) => {
  // On empêche le navigateur de changer de page
  evenement.preventDefault();

  bouton.disabled = true;
  statut.className = 'statut';
  statut.textContent = 'Envoi en cours...';

  // On transforme les champs du formulaire en objet { nom: ..., email: ..., message: ... }
  const donnees = Object.fromEntries(new FormData(formulaire));

  try {
    // On envoie les données à FormSubmit, qui nous les transfère par e-mail
    const reponse = await fetch(formulaire.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(donnees),
    });
    const resultat = await reponse.json();

    if (!reponse.ok || String(resultat.success) !== 'true') {
      throw new Error(resultat.message);
    }

    statut.classList.add('succes');
    statut.textContent = 'Merci ! Ton message a bien été envoyé.';
    formulaire.reset(); // vide les champs
  } catch (erreur) {
    statut.classList.add('erreur');
    statut.textContent = "Oups, le message n'a pas pu être envoyé. Réessaie plus tard.";
  }

  bouton.disabled = false;
});
