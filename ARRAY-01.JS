const respuestas_Nivel1 = ["A", "B", "C", "D"];
const valoresBoleanos_Nivel1 = [true, false, false, false];

const RespuestasBooleanos_Nivel = [];

for (let indice = 0; indice < respuestas_Nivel1.length; indice++) {
  let Respuestas = {
    respuestas_Nivel1: respuestas_Nivel1[indice],
    valoresBoleanos_Nivel1: valoresBoleanos_Nivel1[indice],
  };
  RespuestasBooleanos_Nivel.push(Respuestas);
}
console.info(RespuestasBooleanos_Nivel[1]);
