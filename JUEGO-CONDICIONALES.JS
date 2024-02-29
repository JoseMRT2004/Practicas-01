console.log("================================================================================================");
console.log("                ALERTA NUCLEAR: MISIL DETECTADO EN FRANCIA              ");
console.log("================================================================================================");
console.log("________________________________________________________________________________________________")
console.log("En 1997, en Francia, ocurrió un grave incidente nuclear que marcó")
console.log("un hito en la historia Aunque muchos lo consideraron la peor explosión nuclear de la humanidad ")
console.log("por razones que aún desconozco, milagrosamente sigo vivo para contarlo.")
console.log(
  "________________________________________________________________________________________________"
);
const readline = require("readline");

const Nivel1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Nivel1.question("Quieres salir del refugio (Si/No) ", (answer) => {
  const PreguntasRespuestasNivel1 = answer.toLowerCase();

  if (PreguntasRespuestasNivel1 === "si") {
    console.log(
      "Te resulta increíble la destrucción de lo que una vez fue tu hogar Francia."
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
    "Quieres llevar el manual de supervivencia (Si/No)",
    (answer) => {
      const PreguntasRespuestasNivel2 = answer.toLowerCase();

      if (PreguntasRespuestasNivel2 === "Si") {
        console.log("Ahora sabes como purificar agua");
      } else if (PreguntasRespuestasNivel2 === "No") {
        console.log("Mueres por sed");
      } else {
        console.log(
          "No entendí tu respuesta. Por favor, responde 'si' o 'no'."
        );
      }
      Nivel2.close();
    }
  );
});