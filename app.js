const { inquirerMenu,  pausa } = require('./helpers/inquirer')
const colors = require("colors");

const main = async () => {

let opt = ''
do {
    opt = await inquirerMenu()
    console.log(opt)
    if(opt !== '0') await pausa()
} while (opt !== '0');


  console.clear();
  console.log("hola mundo".cyan);
 
};
main();

