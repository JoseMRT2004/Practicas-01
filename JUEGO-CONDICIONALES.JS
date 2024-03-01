console.log(
  "================================================================================================"
);
console.log(
  "                ALERTA NUCLEAR: MISIL DETECTADO EN FRANCIA              "
);
console.log(
  "================================================================================================"
);
console.log(
  "________________________________________________________________________________________________"
);
console.log(
  "En 1997, en Francia, ocurrió un grave incidente nuclear que marcó"
);
console.log(
  "un hito en la historia Aunque muchos lo consideraron la peor explosión nuclear de la humanidad "
);
console.log(
  "por razones que aún desconozco, milagrosamente sigo vivo para contarlo."
);
console.log(
  "________________________________________________________________________________________________"
);

const readline = require("readline");

const Nivel1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Nivel1.question("¿Quieres salir del refugio? (Si/No) ", (answer) => {
  const PreguntasRespuestasNivel1 = answer.toLowerCase();

  if (PreguntasRespuestasNivel1 === "si") {
    console.log(
      "Te resulta increíble la destrucción de lo que una vez fue tu hogar en Francia."
    );
  } else if (PreguntasRespuestasNivel1 === "no") {
    console.log("El aire se contaminó con radiación y moriste.");
  } else {
    console.log("No entendí tu respuesta. Por favor, responde 'si' o 'no'.");
  }

  const Nivel2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  Nivel2.question(
    "¿Quieres llevar el manual de supervivencia? (Si/No) ",
    (answer) => {
      const PreguntasRespuestasNivel2 = answer.toLowerCase();

      if (PreguntasRespuestasNivel2 === "si") {
        console.log("Ahora sabes cómo purificar agua.");
      } else if (PreguntasRespuestasNivel2 === "no") {
        console.log("Mueres por sed.");
      } else {
        console.log(
          "No entendí tu respuesta. Por favor, responde 'si' o 'no'."
        );
      }

      const Nivel3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      Nivel3.question(
        "¿Quieres llevarte el machete o la pistola? (machete/pistola) ",
        (answer) => {
          const PreguntasRespuestasNivel3 = answer.toLowerCase();

          if (PreguntasRespuestasNivel3 === "machete") {
            console.log(
              "Encuentras un árbol de manzanas increíblemente grande pero con la ayuda de tu machete lo talas."
            );
          } else if (PreguntasRespuestasNivel3 === "pistola") {
            console.log(
              "Pasaron corriendo extraños animales y gastaste las balas intentando cazarlos."
            );
          } else {
            console.log(
              "No entendí tu respuesta. Por favor, responde 'machete' o 'pistola'."
            );
          }

          Nivel3.close();
        }
      );
    }
  );
});
