const inquirer = require("inquirer");
const colors = require("colors");

const inquirerMenu = async () => {
  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "que deseas hacer?",
      choices: [
        {
          value: 1,
          name: `${"1.".green} crear tarea`,
        },
        {
          value: 2,
          name: `${"2.".green} listar tareas`,
        },
        {
          value: 3,
          name: `${"3.".green} listar tareas completadas`,
        },
        {
          value: 4,
          name: `${"4.".green} listar tareas pendientes`,
        },
        {
          value: 5,
          name: `${"5.".green} completar tarea(S)`,
        },
        {
          value: 6,
          name: `${"6.".green} borrar tarea`,
        },
        {
          value: 7,
          name: `${"7.".green} salir`,
        },
      ],
    },
  ];

  console.clear();
  console.log(colors.yellow("___________________________"));
  console.log(colors.green("seleccione una opcion"));
  console.log(colors.yellow("___________________________"));

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      massage: `Presione ${"enter".red} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "por favor ingrese un valor";
        } else {
          return true;
        }
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};
const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "cancelar",
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      chacked: tarea.completadoEn ? true : false,
    };
  });

  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "selecciones",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(preguntas);
  return ids
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList
};
