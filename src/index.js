import ListaTareas from "./ListaTareas.js";

let listaTareasAgregadas = new ListaTareas();

const tarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const form = document.querySelector("#agregarTareas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if(listaTareas.innerHTML==""){
    listaTareasAgregadas = new ListaTareas();
  }
  let tituloTarea = tarea.value;
  listaTareasAgregadas.agregarTarea(tituloTarea);
  listaTareas.innerHTML = listaTareasAgregadas.getUlListaTareas();
});

