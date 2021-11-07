import ListaTareas from "./ListaTareas.js";

let listaTareasAgregadas = new ListaTareas();

const tarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const listaTareasFiltradas = document.querySelector("#lista-tareasFiltradas");
const form = document.querySelector("#agregarTareas-form");
const boton_elem = document.querySelector("#crear-tarea");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if(listaTareas.innerHTML==""){
    listaTareasAgregadas = new ListaTareas();
  }
  let tituloTarea = tarea.value;
  listaTareasAgregadas.agregarTarea(tituloTarea);
  listaTareas.innerHTML = listaTareasAgregadas.getUlListaTareas();
});
/*form.addEventListener("button", (event) => {
  event.preventDefault()
   let  tituloBuscado = tarea.value;
  let tarea =listaTareasAgregadas.filtrarTitulo(tituloBuscado);
  listaTareasFiltradas.innerHTML = tarea.value;
});

*/