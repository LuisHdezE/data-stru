require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
//const { mostrarMenu, pausa } = require("./helpers/mensajes");

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

//para la lista de tareas
const tareas = new Tareas();
const tarea = new Tarea("Crear");

tareas._listado[tarea.id] = tarea;
console.log(tareas);
