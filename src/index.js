import ListaTareas from "./ListaTareas.js";
<<<<<<< HEAD

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

<<<<<<< HEAD
=======
import Tarea from "./Tarea.js";
let listaTareasAgregadas = new ListaTareas();

const tarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const form = document.querySelector("#agregarTareas-form");

const descripcion = document.querySelector("#descripcionTarea");
const dialogoDescripcion = document.querySelector("#dialogo-descripcion");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if(listaTareas.innerHTML==""){
    listaTareasAgregadas = new ListaTareas();
  }
  let tituloTarea = tarea.value;
  let desripcionTarea = descripcion.value;
  listaTareasAgregadas.agregarTarea(tituloTarea,desripcionTarea);
  listaTareas.innerHTML = listaTareasAgregadas.getUlListaTareas();

  const b = document.querySelectorAll(".button-descripcion"); 
  b.forEach(btn => { 
    btn.addEventListener("click", mostrarDescripcion(btn.id), false);
  });
});

function mostrarDescripcion(idTarea){

  const dialogoDescripcion = document.querySelector("#dialogo-descripcion");
  const tarea = listaTareasAgregadas.getTareaPorId(idTarea);

  dialogoDescripcion.innerHTML = tarea.getDescripcion();
  //dialogoDescripcion.showModal();
}

export default mostrarDescripcion;
>>>>>>> 056bc7a0a6f64998653bb9c1fbdb346bb63b8152
=======
*/
>>>>>>> filtrarTitulo
