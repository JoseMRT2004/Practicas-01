const readline = require("readline");

console.info(`
__________________________________________________________________________
 
"Desafío Nuclear: Sobrevivir al Caos"

En 1997, en Francia, una explosión nuclear sacudió al mundo.
Considerada por muchos como la peor de la historia, dejó un rastro de destrucción y misterio. Pero entre el caos, un sobreviviente emerge para contarlo.            
¡Únete a esta aventura donde la supervivencia es la única opción y descubre los secretos ocultos tras el desastre nuclear más impactante de todos los tiempos!                               
_______________________________________________________________________________________________________________________________________________________________________________
`);

const Nivel1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Nivel1.question("¿Quieres salir del refugio? (Si/No) ", (answer) => {
  const RespuestasNivel1 = answer.toLowerCase();

  if (RespuestasNivel1 === "si") {
    console.log(
      "Te resulta increíble la destrucción de lo que una vez fue tu hogar en Francia."
    );
  } else if (RespuestasNivel1 === "no") {
    console.log("El aire se contaminó con radiación y moriste.");
  } else {
    console.info("Respuesta inválida. Por favor, elige 'Si' o 'No'.");
    Nivel1.close();
  }

  Nivel1.question(
    "¿Quieres llevar el manual de supervivencia? (Si/No) ",
    (answer) => {
      const RespuestasNivel1 = answer.toLowerCase();

      if (RespuestasNivel1 === "si") {
        console.log("Ahora sabes cómo purificar agua.");
      } else if (RespuestasNivel1 === "no") {
        console.log("Mueres por sed.");
      } else {
        console.info("Respuesta inválida. Por favor, elige 'Si' o 'No'.");
      }

      Nivel1.question(
        "¿Quieres llevarte el machete o la pistola? (machete/pistola) ",
        (answer) => {
          const RespuestasNivel1 = answer.toLowerCase();

          if (RespuestasNivel1 === "machete") {
            console.log(
              "Encuentras un árbol de manzanas increíblemente grande pero con la ayuda de tu machete lo talas."
            );
          } else if (RespuestasNivel1 === "pistola") {
            console.log(
              "Pasaron corriendo extraños animales y gastaste las balas intentando cazarlos."
            );
          } else {
            console.info(
              "Respuesta inválida. Por favor, elige 'machete' o 'pistola'."
            );
          }
        }
      );
    }
  );
});

/*Agregar un bucle while lo puedo resolver usando return en cada nivel, pero
que lo que retorne sea al nivel anterior*/
