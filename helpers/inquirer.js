const inquirer = require("inquirer");
require("colors");
const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Burbujas",
      },
      {
        value: "2",
        name: "2. Pilas",
      },
      {
        value: "3",
        name: "3. Colas",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();

  console.log("===================================".green);
  console.log("===== Seleccione una opción =======".green);
  console.log("===================================\n".green);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "opcion",
      message: `Presione ${"ENTER".red} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = { inquirerMenu, pausa };
