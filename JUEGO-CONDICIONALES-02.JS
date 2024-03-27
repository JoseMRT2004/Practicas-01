const readline = require("readline");

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
  }
  Nivel1.close();

  const Nivel2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  Nivel2.question(
    "¿Quieres llevar el manual de supervivencia? (Si/No) ",
    (answer) => {
      const RespuestasNivel2 = answer.toLowerCase();

      if (RespuestasNivel2 === "si") {
        console.log("Ahora sabes cómo purificar agua.");
      } else if (RespuestasNivel2 === "no") {
        console.log("Mueres por sed.");
      } else {
        console.info("Respuesta inválida. Por favor, elige 'Si' o 'No'.");
      }
      Nivel2.close();

      const Nivel3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      Nivel3.question(
        "¿Quieres llevarte el machete o la pistola? (machete/pistola) ",
        (answer) => {
          const RespuestasNivel3 = answer.toLowerCase();

          if (RespuestasNivel3 === "machete") {
            console.log(
              "Encuentras un árbol de manzanas increíblemente grande pero con la ayuda de tu machete lo talas."
            );
          } else if (RespuestasNivel3 === "pistola") {
            console.log(
              "Pasaron corriendo extraños animales y gastaste las balas intentando cazarlos."
            );
          } else {
            console.info(
              "Respuesta inválida. Por favor, elige 'machete' o 'pistola'."
            );
          }
          Nivel3.close();
        }
      );
    }
  );
});
