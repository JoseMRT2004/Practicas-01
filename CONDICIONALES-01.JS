const readline = require("readline");
const Nivel1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Nivel1.question("¿Que te parase el dia de hoy?", (answer) => {
  const RespuestasNivel1 = answer.toLowerCase();

  if (RespuestasNivel1 == Climas) {
    console.log(
      "El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado."
    );
  } else if (RespuestasNivel1 === "lluvioso") {
    console.log(
      "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo."
    );
  } else if (RespuestasNivel1 === "nevando") {
    console.log(
      "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve."
    );
  } else if (RespuestasNivel1 === "nublado") {
    console.log(
      "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso."
    );
  }
});
