import ListaTareas from "./ListaTareas.js";

let listaTareasAgregadas = new ListaTareas();

const tarea = document.querySelector("#tarea");
const listaTareas = document.querySelector("#lista-tareas");
const form = document.querySelector("#agregarTareas-form");
const descripcion = document.querySelector("#descripcion");
const dialogo = document.querySelector("#dialogo-descripcion");
const categoria = document.querySelector("#selector-categoria");
const fechaLimite = document.querySelector("#selector-fecha-limite");
const botonBuscar = document.querySelector("#boton-buscar");
const textoFiltro = document.querySelector("#filtro-text");
const categoriaFiltro= document.querySelector("#selector-categoria-busqueda");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd+"T00:00";
document.getElementById("selector-fecha-limite").setAttribute("min", today);

categoriaFiltro.addEventListener('change',
  function(){
    var categoriaSeleccionada = this.options[categoriaFiltro.selectedIndex];
    var listaTareasCategorias = listaTareasAgregadas.filtrarCategoriasLista(categoriaSeleccionada.value);
    console.log("lista tareas Cat",listaTareasCategorias)
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasCategorias);
    console.log("lista desde JSON",listaTareasFiltradas)
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();    
    click();
  });

botonBuscar.addEventListener("click", (e)=>{
  if(textoFiltro.value==""){
    listaTareas.innerHTML = listaTareasAgregadas.getListaTareasHtml();
  }
  else{
    var listaTareasTitulo = listaTareasAgregadas.filtrarTitulo(textoFiltro.value);
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasTitulo);
    console.log("lista",listaTareasFiltradas)
    if(listaTareasFiltradas.getCantidadTareas()==0){
      var listaTareasIds = listaTareasAgregadas.filtrarPorDescripcion(textoFiltro.value);
      console.log(listaTareasIds)
      listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);
      if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
    }
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
  }  
  click();
});

function click(){  
  listaTareas.childNodes.forEach((elemento)=>{
    elemento.addEventListener("click", (e)=>{
      const idTarea = e.target.id;
      const descripcionTarea = listaTareasAgregadas.getTareaPorId(idTarea).getDescripcion();
      console.log("id=",idTarea,"descripcionTarea=",descripcionTarea);
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
