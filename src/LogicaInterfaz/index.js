import ListaTareas from "../LogicaNegocio/ListaTareas.js";


let listaTareasAgregadas = new ListaTareas();

const tarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const form = document.querySelector("#agregarTareas-form");
const descripcion = document.querySelector("#descripcion");
const dialogo = document.querySelector("#dialogo-descripcion");
const categoria = document.querySelector("#selector-categoria");
const fechaLimite = document.querySelector("#selector-fecha-limite");


function click(){  
  listaTareas.childNodes.forEach((elemento)=>{
    elemento.addEventListener("click", (e)=>{
      const idTarea = e.target.id;
      const descripcionTarea = listaTareasAgregadas.getTareaPorId(idTarea).getDescripcion();
      //console.log("id=",idTarea,"descripcionTarea=",descripcionTarea);
      dialogo.textContent = descripcionTarea;
      const botonCerrar = document.createElement('button');
      botonCerrar.id = "close";
      botonCerrar.type = 'button';          
      botonCerrar.setAttribute('onclick','document.getElementById("dialogo-descripcion").close()')   
      botonCerrar.innerText = 'Ok!'; 
      dialogo.appendChild(botonCerrar);
      
      if(descripcionTarea!=""){
        dialogo.show();
      }
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  if(listaTareas.innerHTML==""){
    listaTareasAgregadas = new ListaTareas();
  }
  let tituloTarea = tarea.value;
  let descripcionTarea = descripcion.value;
  let categoriaTarea = categoria.value;
  let fechaLimiteTarea = fechaLimite.value;  

  listaTareasAgregadas.agregarTarea(tituloTarea,descripcionTarea,categoriaTarea,fechaLimiteTarea);
  listaTareas.innerHTML = listaTareasAgregadas.getListaTareasHtml();
  if(tarea.value==""){
    alert("No se puede agregar tarea vacia");
  }
  click();
  tarea.value="";
  descripcion.value="";
  categoria.value="Sin categoria";
  fechaLimite.value="";
});

function getListaTareasAgregadas(){
  return listaTareasAgregadas;
}

export {click, getListaTareasAgregadas};