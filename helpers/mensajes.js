require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("===================================".green);
    console.log("===== Seleccione una opción =======".green);
    console.log("===================================\n".green);

    console.log(` ${"1.".green} Burbujas`);
    console.log(` ${"2.".green} Pilas`);
    console.log(` ${"3.".green} Colas`);
    console.log(` ${"0.".green} Salir`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".red} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};
module.exports = { mostrarMenu, pausa };
