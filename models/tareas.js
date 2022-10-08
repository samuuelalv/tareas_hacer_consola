const Tarea = require("./tarea");
const colors = require("colors");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get getListadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArr(tareas = []) {
    tareas.map((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this.getListadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.blue;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(Completadas = true) {
    let contado = 0;
    this.getListadoArr.forEach((tarea, i) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if (Completadas && estado === "Completada".green) {
        contado++;
        console.log(`${(contado + ".").green} ${desc} :: ${completadoEn.green}`);
      }
      if (!Completadas && estado === "Pendiente".red) {
        contado++;
        console.log(`${(contado + ".").green} ${desc} :: ${estado}`);
      }
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.getListadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
