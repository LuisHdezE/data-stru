//Contiene un ejemplo de una lista de tareas
/**
 * _listado:
 *      {uuid-123712-365248-3:{id:12, desc:completar, completadoEn:92233}},
 *      {uuid-123712-365248-3:{id:13, desc:segunda tarea, completadoEn:92235}},
 */

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }
}

module.exports = Tareas;
