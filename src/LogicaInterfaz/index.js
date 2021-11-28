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
const etiquetas = document.querySelector("#etiquetas");
const botonBuscarEtiquetaTerminada = document.querySelector("#boton-buscar-etiquetaTerminada");
const textoFiltroTerminado = document.querySelector("#filtroTerminado-text");
const terminadas = document.querySelector("#terminadas");
const selectorTipoEstadisticas = document.querySelector("#selector-tipo-estadisticas");  

const radio_estadoTerminada = document.querySelector("#estado-terminada");
const radio_estadoPendiente = document.querySelector("#estado-pendiente");
const radio_estadoTodas = document.querySelector("#estado-todas");

var listaTareas_porEstados = [];

function obtenerEstadisticasPorCategoria(filtroConFecha=false){
  var estadisticas;
  if (filtroConFecha== true){
    console.log( "Entraste al if --- ", filtroConFecha)
    estadisticas = listaTareasAgregadas.tareasTerminadasPorCategoria_PorRangoDeFecha(fechaInicioFiltro.value+'T00:00',fechaFinFiltro.value+'T23:59');
  }else{
    estadisticas = listaTareasAgregadas.tareasTerminadasPorCategoria();
  }
  var elemento=`<ul><li>Sin categoria:[${estadisticas["Sin categoria"][0]}  |  ${estadisticas["Sin categoria"][1]}]</li><li>Personal:[${estadisticas["Personal"][0]}  |  ${estadisticas["Personal"][1]}]</li><li>Trabajo:[${estadisticas["Trabajo"][0]}  |  ${estadisticas["Trabajo"][1]}]</li><li>Estudio:[${estadisticas["Estudio"][0]}  |  ${estadisticas["Estudio"][1]}]</li><ul>`;
  terminadas.innerHTML= elemento;
 
}
function obtenerEstadisticasPorEtiqueta(){
  var estadisticas = listaTareasAgregadas.tareasCompletadasPorEtiqueta(textoFiltroTerminado);
  var elemento=`${textoFiltroTerminado.value} :[${String(estadisticas[0])}, ${estadisticas[1]} ]`
  terminadas.innerHTML= elemento;
 
}
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
    if(selectorFiltro.value=="Ninguno"){
      botonBuscarEtiquetaTerminada.style.display = "none";
      divFiltroFecha.style.display = "none";
    }
 });

 function mostrarOpcionesEstadisticas(){
  if(selectorTipoEstadisticas.value=="Categorias"){
    botonBuscarEtiquetaTerminada.style.display = "none";
    textoFiltroTerminado.style.display = "none"; 
    terminadas.style.display = "block";  
    obtenerEstadisticasPorCategoria();
  }
  if(selectorTipoEstadisticas.value=="Etiqueta"){
    botonBuscarEtiquetaTerminada.style.display = "inline";
    textoFiltroTerminado.style.display = "inline";
    terminadas.style.display = "none";
    obtenerEstadisticasPorEtiqueta();
  }
  if(selectorTipoEstadisticas.value=="Ninguno"){
    botonBuscarEtiquetaTerminada.style.display = "none";
    textoFiltroTerminado.style.display = "none";
    terminadas.style.display = "none";
  }
 }

 selectorTipoEstadisticas.addEventListener('change',mostrarOpcionesEstadisticas);


 radio_estadoTerminada.addEventListener('click',
  function(){
    filtrarTareasPorEstados_enRadio(radio_estadoTerminada.value)
 });
 radio_estadoPendiente.addEventListener('click',
  function(){
    filtrarTareasPorEstados_enRadio(radio_estadoPendiente.value)
 });
 radio_estadoTodas.addEventListener('click',
  function(){
    filtrarTareasPorEstados_enRadio(radio_estadoTodas.value)
    
 });


 function filtrarTareasPorEstados_enRadio(estado){
  var listaTareasEstado_Ids = listaTareasAgregadas.filtrarPorEstado(estado);
  var listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasEstado_Ids);
  if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
  listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
  click();
  check();

  listaTareas_porEstados = listaTareasFiltradas;
  selectorFiltro.value = "Ninguno";
  categoriaFiltro.style.display = "none";
  divFiltroFecha.style.display = "none";

 }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10)dd='0'+dd
if(mm<10) mm='0'+mm

today = yyyy+'-'+mm+'-'+dd+"T00:00";
document.getElementById("selector-fecha-limite").setAttribute("min", today);

fechaFiltro.addEventListener("click", (e)=>{
  var listaTareasAgregadas = listaTareas_porEstados ;
  if(new Date(fechaInicioFiltro.value)>new Date(fechaFinFiltro.value)){
    alert("Fecha incorrecta: fecha DESDE debe ser menor a fecha HASTA");
  }
  else{
    var listaTareasIds = listaTareasAgregadas.filtrarPorUnRangoFechas(fechaInicioFiltro.value+'T00:00',fechaFinFiltro.value+'T23:59');
    var listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);
    var EtiquetaTerminada= listaTareasAgregadas.filtrarPorUnRangoFechasYEtiqueta(fechaInicioFiltro.value,fechaFinFiltro.value,textoFiltroTerminado.value);

    if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();

    if(selectorTipoEstadisticas.value=="Etiqueta" && textoFiltroTerminado.value != "" ){
      terminadas.innerHTML=`${textoFiltroTerminado.value} :[${String(EtiquetaTerminada[0])}, ${EtiquetaTerminada[1]} ]`;
      terminadas.style.display = "block";
    }

    if(selectorTipoEstadisticas.value=="Categorias"){
      var filtro = true;
      console.log("entraste a filtro categoria --- ")
      obtenerEstadisticasPorCategoria(filtro);
    }
    click();
    check();
  }
});

categoriaFiltro.addEventListener('change',
  function(){
    var listaTareasAgregadas = listaTareas_porEstados ;
    var categoriaSeleccionada = this.options[categoriaFiltro.selectedIndex];
    var listaTareasCategorias = listaTareasAgregadas.filtrarCategoriasLista(categoriaSeleccionada.value);
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasCategorias);
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();    
    click();
    check();
  });

botonBuscar.addEventListener("click", (e)=>{
  var listaTareasAgregadas = listaTareas_porEstados ;
  if(textoFiltro.value==""){
    listaTareas.innerHTML = listaTareasAgregadas.getListaTareasHtml();
  }
  else{
   
    var listaTareasTitulo = listaTareasAgregadas.filtrarTitulo(textoFiltro.value);
    var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasTitulo);
    if(listaTareasFiltradas.getCantidadTareas()==0){
      var listaTareasIds = listaTareasAgregadas.filtrarPorDescripcion(textoFiltro.value);
      listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);
      if(listaTareasFiltradas.getCantidadTareas()==0){
        listaTareasIds = listaTareasAgregadas.filtrarPorEtiquetas(textoFiltro.value);
        listaTareasFiltradas = listaTareasAgregadas.getListaPorIds(listaTareasIds);

        if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
      }   
    }
    listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
  }
  click();
  check();
});
botonBuscarEtiquetaTerminada.addEventListener("click", (e)=>{
     // var listaTareasAgregadas = listaTareas_porEstados ;
      if(textoFiltroTerminado.value==="" ){
        alert("Texto para filtrar Invalido");
      }
      else{
        var EtiquetaTerminada = listaTareasAgregadas.tareasCompletadasPorEtiqueta(textoFiltroTerminado.value);
      }
      if(EtiquetaTerminada[0]==0) alert("No existe"); 
      else{
        terminadas.innerHTML=`${textoFiltroTerminado.value} :[${String(EtiquetaTerminada[0])}, ${EtiquetaTerminada[1]} ]`;
        terminadas.style.display = "block";
      }       
      //terminadas.style.display = "block";
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
            selectorTipoEstadisticas.value = "Ninguno";
            mostrarOpcionesEstadisticas();
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
  let etiqueta= etiquetas.value;  

  listaTareasAgregadas.agregarTarea(tituloTarea,descripcionTarea,categoriaTarea,fechaLimiteTarea,etiqueta);
  listaTareas.innerHTML = listaTareasAgregadas.getListaTareasHtml();
  if(tarea.value==""){
    alert("No se puede agregar tarea vacia");
  }
  click();
  check();
  tarea.value="";
  descripcion.value="";
  categoria.value="Sin categoria";
  etiquetas.value="";
  fechaLimite.value="";
  listaTareas_porEstados = listaTareasAgregadas;
  radio_estadoTodas.click();
  selectorTipoEstadisticas.value = "Ninguno";
  mostrarOpcionesEstadisticas();
  
});
