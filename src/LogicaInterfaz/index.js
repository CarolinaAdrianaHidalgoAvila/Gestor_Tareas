import ListaTareas from "../LogicaNegocio/ListaTareas.js";


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
const fechaInicioFiltro =  document.querySelector("#selector-fecha-limite-inicial");
const fechaFinFiltro = document.querySelector("#selector-fecha-limite-final");
const fechaFiltro = document.querySelector("#boton-filtrar-fecha");
const divFiltroFecha = document.querySelector("#filtro-fecha");
const selectorFiltro =  document.querySelector("#selector-filtro");

selectorFiltro.addEventListener('change',
  function(){
    if(selectorFiltro.value=="Fecha"){
      divFiltroFecha.style.display = "block";
      categoriaFiltro.style.display = "none";
    }
    if(selectorFiltro.value=="Categoria"){
      categoriaFiltro.style.display = "block";
      divFiltroFecha.style.display = "none";
    }   
 });

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10)dd='0'+dd
if(mm<10) mm='0'+mm

today = yyyy+'-'+mm+'-'+dd+"T00:00";
document.getElementById("selector-fecha-limite").setAttribute("min", today);

fechaFiltro.addEventListener("click", (e)=>{
  if(new Date(fechaInicioFiltro.value)>new Date(fechaFinFiltro.value)){
    alert("Fecha incorrecta: fecha DESDE debe ser menor a fecha HASTA");
  }
  else{
    var listaTareasIds = listaTareasAgregadas.filtrarPorUnRangoFechas(fechaInicioFiltro.value+'T00:00',fechaFinFiltro.value+'T23:59');
    var listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);
    if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
    click();
    check();
  }
});

categoriaFiltro.addEventListener('change',
  function(){
    var categoriaSeleccionada = this.options[categoriaFiltro.selectedIndex];
    var listaTareasCategorias = listaTareasAgregadas.filtrarCategoriasLista(categoriaSeleccionada.value);
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasCategorias);
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();    
    click();
    check();
  });

botonBuscar.addEventListener("click", (e)=>{
  if(textoFiltro.value==""){
    listaTareas.innerHTML = listaTareasAgregadas.getListaTareasHtml();
  }
  else{
    var listaTareasTitulo = listaTareasAgregadas.filtrarTitulo(textoFiltro.value);
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasTitulo);
    if(listaTareasFiltradas.getCantidadTareas()==0){
      var listaTareasIds = listaTareasAgregadas.filtrarPorDescripcion(textoFiltro.value);
      listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);
      if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
    }
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
  }  
  click();
  check();
});

function click(){  
    Array.from(document.getElementsByClassName("btn-descripcion")).forEach((elemento)=>{
      elemento.addEventListener("click", (e)=>{
        const idTarea = e.target.id;
        const descripcionTarea = listaTareasAgregadas.getTareaPorId(idTarea).getDescripcion();
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

function confirmarTareaTerminada() 
{
  return confirm("Estas seguro que terminaste la tarea?");
}

function check(){ 
  Array.from(document.getElementsByClassName("checkbox-terminada")).forEach((elemento)=>{
    elemento.addEventListener("click", (e)=>{
      const idTarea = e.target.id;
      const tarea = listaTareasAgregadas.getTareaPorId(idTarea);
      if (elemento.checked == true){  
          if(confirmarTareaTerminada()){
            tarea.terminar();
            elemento.disabled=true;
          }
          else{
            elemento.checked=false;
          }
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
  check();
  tarea.value="";
  descripcion.value="";
  categoria.value="Sin categoria";
  fechaLimite.value="";
});
