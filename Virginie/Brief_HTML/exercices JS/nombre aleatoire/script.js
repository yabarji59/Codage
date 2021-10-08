// Fonction pour obtenir un nombre aléatoire
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// La variable contient un nombre aléatoire compris entre 1 et 10
var n = entierAleatoire(1, 10);
console.log("n = " + n);

// Nombre de tentative(s)
var x = 0;
  
function verifierNombre() {
    // Pour éviter le rechargement de la page
    event.preventDefault();

    // Récupérer la proposition
    var nombrePropose = document.getElementById("nombrePropose").value;
    console.log("nombrePropose = " + nombrePropose);

    x++;
    console.log("x = " + x);

    if (n > nombrePropose) {
      document.getElementById("resultat").innerHTML = `<p>Le nombre à trouver est plus grand</p>`;
      console.log("Le nombre à trouver est plus grand");
      return true;
    } else {
        if (n < nombrePropose) {
          document.getElementById("resultat").innerHTML = `<p>Le nombre à trouver est plus petit</p>`;
          console.log("Le nombre à trouver est plus petit");
          return true;       
      } else {
          if (n = nombrePropose) {
            document.getElementById("resultat").innerHTML = `<p>Bravo ! Vous avez trouvé en ` + x + ` tentatives.</p>`;
            console.log("Bravo ! Vous avez trouvé en " + x + " tentatives.");
            return true;
          }
      }
    }
}