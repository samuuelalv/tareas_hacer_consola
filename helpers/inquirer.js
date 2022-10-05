const inquirer = require("inquirer");
const colors = require("colors");

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "que deseas hacer?",
    choices: [
      {
        values: 1,
        name: `${"1.".green} crear tarea`,
      },
      {
        values: 2,
        name: `${"2.".green} listar tareas`,
      },
      {
        values: 3,
        name: `${"3.".green} listar tareas completadas`,
      },
      {
        values: 4,
        name: `${"4.".green} listar tareas pendientes`,
      },
      {
        values: 5,
        name: `${"5.".green} completar tarea(S)`,
      },
      {
        values: 6,
        name: `${"6.".green} borrar tarea`,
      },
      {
        values: 7,
        name: `${"7.".green} salir`,
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log(colors.yellow("___________________________"));
  console.log(colors.green("seleccione una opcion"));
  console.log(colors.yellow("___________________________"));

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async() => {
 const question = [
     {
         type: 'input',
         name: 'enter',
        massage: `presion ${'enter'.red}para continuar`
     }
 ]
 console.log('\n')
 await inquirer.prompt(question)
} 
module.exports = {
  inquirerMenu,
  pausa,
};
