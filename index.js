
/** Vamos a crear una API que va devolver el nombre de un gato cada vez que 
haga un GET a /nuestrodominio/dame-gato */

// Utilizamos import para importar una funcionalidad o variable ubicada en otro fichero.
import getRandomItem from "./utiles/tools.js"

let gatos = ["Loki", "Bigotes", "Sardinitas", "Valdir"];
console.log(getRandomItem(gatos));





