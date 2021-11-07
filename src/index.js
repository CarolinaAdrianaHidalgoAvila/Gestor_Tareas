import ListaTareas from "./ListaTareas.js";
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
  console.log("CLICK",idTarea);
  const dialogoDescripcion = document.querySelector("#dialogo-descripcion");
  const tarea = listaTareasAgregadas.getTareaPorId(idTarea);
  console.log("get",tarea)
  dialogoDescripcion.innerHTML = tarea.getDescripcion();
  //dialogoDescripcion.showModal();
}

export default mostrarDescripcion;