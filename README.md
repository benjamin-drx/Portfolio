# Comment marche mon portfolio

Site en HTML, CSS et JavaScript « vanilla » (sans framework ni librairie).

## Organisation

Chaque page charge **deux** feuilles de style : `commun.css` (le même partout) puis la sienne.
Comme ça, si je change une couleur dans `commun.css`, tout le site change, et le style d'une page
ne peut pas casser une autre page.

La page actuelle est mise en avant dans le menu grâce à la classe `actif` sur son lien.

## Le système solaire (css/accueil.css)
- Chaque `.orbite` est un cercle centré autour du soleil.
- La planète est placée en haut de son orbite.
- Pour la placer ailleurs sur le cercle, on tourne l'orbite d'un angle (`rotate: 60deg`) :
  la planète suit, comme une aiguille de montre.
- La planète est ensuite tournée du même angle dans l'autre sens (`rotate: -60deg`)
  pour que son nom reste à l'endroit.
- Les orbites sont empilées les unes sur les autres : `pointer-events: none` les rend transparentes aux clics,
  et `pointer-events: auto` garde les planètes cliquables.
- Chaque planète est un lien `<a href="projets.html">` : cliquer dessus ouvre la page.

## Le responsive
- `<meta name="viewport">` dans chaque page : indispensable pour les téléphones.
- `@media (max-width: 900px)` puis `600px` : l'accueil passe sur une colonne,
  les cartes projets passent de 3 à 2 puis 1 par ligne.
- `clamp()` adapte la taille des titres à la largeur de l'écran.

## Le formulaire de contact (js/contact.js)
1. On écoute l'événement `submit` du formulaire.
2. `preventDefault()` empêche la page de se recharger.
3. `new FormData(formulaire)` récupère les champs, qu'on transforme en objet puis en JSON.
4. `fetch()` envoie ces données au service gratuit **FormSubmit**, qui me les transfère par e-mail.
5. Selon la réponse, on affiche « Merci ! » en vert ou un message d'erreur en rouge.

Les attributs `required` et `type="email"` dans le HTML empêchent d'envoyer un formulaire vide
ou une adresse mal écrite, sans une ligne de JavaScript.

## Lancer le site en local
Dans VS Code, clic droit sur `index.html` → **Open with Live Server** (extension Live Server).
Le formulaire a besoin d'un serveur : il ne marche pas si on ouvre le fichier en double-cliquant dessus.
