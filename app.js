require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
//const Tarea = require("./models/tarea");
//const { mostrarMenu, pausa } = require("./helpers/mensajes");

//const tarea = new Tarea("Crear");
//console.clear();

const main = async () => {
  let opt = "";
  do {
    opt = await inquirerMenu();
    console.log({ opt });
    if (opt !== "0") {
      await pausa();
    }
  } while (opt !== "0");
};

main();

//console.log({ tarea });
