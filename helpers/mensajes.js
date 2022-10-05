const colors = require("colors");

const mostrarMenu = () => {
return new Promise((resolve) =>{

  console.clear();
  console.log(colors.yellow("___________________________"));
  console.log(colors.green("seleccione una opcion"));
  console.log(colors.yellow("___________________________"));

  console.log(`${"1".green}. crear una tarea`);
  console.log(`${"2".green}. listar tarea`);
  console.log(`${"3".green}. listar tarea completadas`);
  console.log(`${"4".green}. listar tareas pendientes`);
  console.log(`${"5".green}. completar tarea(s)`);
  console.log(`${"6".green}. borrar tarea`);
  console.log(`${"0".green}. salir`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`seleccione una opcion:`, (opt) => {
    readline.close();
    resolve(opt)
  });
})
};

const pausa = () => {

return new Promise((resolve)=> {
 const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`precione ENTER para continuar`, (opt) => {
    readline.close();
  });
})
};

module.exports = { mostrarMenu, pausa };
