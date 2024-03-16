process.stdout.write(`
_______________________________________________________________________________________________________________________________________________________________________________
                                                                                                                                                                                            
  
___      ___   __       ________    __      ___          ________     _______   ___________    _______    ______    ___________        __       ________       ______      
|"  \    /"  | |" \     /"       )  |" \    |"  |        |"      "\   /"     "| ("     _   ")  /"     "|  /" _  "\  ("     _   ")      /""\     |"      "\     /    " \     
 \   \  //   | ||  |   (:   \___/   ||  |   ||  |        (.  ___  :) (: ______)  )__/  \\__/  (: ______) (: ( \___)  )__/  \\__/      /    \    (.  ___  :)   // ____  \    
 /\\  \/.    | |:  |    \___  \     |:  |   |:  |        |: \   ) ||  \/    |       \\_ /      \/    |    \/ \          \\_ /        /' /\  \   |: \   ) ||  /  /    ) :)   
|: \.        | |.  |     __/  \\    |.  |    \  |___     (| (___\ ||  // ___)_      |.  |      // ___)_   //  \ _       |.  |       //  __'  \  (| (___\ || (: (____/ //    
|.  \    /:  | /\  |\   /" \   :)   /\  |\  ( \_|:  \    |:       :) (:      "|     \:  |     (:      "| (:   _) \      \:  |      /   /  \\  \ |:       :)  \        /     
|___|\__/|___|(__\_|_) (_______/   (__\_|_)  \_______)   (________/   \_______)      \__|      \_______)  \_______)      \__|     (___/    \___)(________/    \"_____/      
                          
_______________________________________________________________________________________________________________________________________________________________________________
 
"Desafío Nuclear: Sobrevivir al Caos"

En 1997, en Francia, una explosión nuclear sacudió al mundo.
Considerada por muchos como la peor de la historia, dejó un rastro de destrucción y misterio. Pero entre el caos, un sobreviviente emerge para contarlo.            
¡Únete a esta aventura donde la supervivencia es la única opción y descubre los secretos ocultos tras el desastre nuclear más impactante de todos los tiempos!                               
_______________________________________________________________________________________________________________________________________________________________________________
`);
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

/*Agregar un bucle while lo puedo resolver usando return en cada nivel, pero
que lo que retorne sea al nivel anterior*/
