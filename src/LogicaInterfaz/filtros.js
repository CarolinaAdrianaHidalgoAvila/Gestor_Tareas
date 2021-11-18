import ListaTareas from "../LogicaNegocio/ListaTareas.js";
//import { click } from "./index.js";
//import { getListaTareasAgregadas } from "./index.js";


    const listaTareas = document.querySelector("#lista-tareas");
    const botonBuscar = document.querySelector("#boton-buscar");
    const textoFiltro = document.querySelector("#filtro-text");
    const categoriaFiltro= document.querySelector("#selector-categoria-busqueda");
    const fechaInicioFiltro =  document.querySelector("#selector-fecha-limite-inicial");
    const fechaFinFiltro = document.querySelector("#selector-fecha-limite-final");
    const fechaFiltro = document.querySelector("#boton-filtrar-fecha");
    
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
    
    fechaFiltro.addEventListener("click", (e)=>{
      if(new Date(fechaInicioFiltro.value)>new Date(fechaFinFiltro.value)){
        alert("Fecha incorrecta: fecha DESDE debe ser menor a fecha HASTA");
      }
      else{
        var listaTareasIds = getListaTareasAgregadas().filtrarPorUnRangoFechas(fechaInicioFiltro.value+'T00:00',fechaFinFiltro.value+'T23:59');
        var listaTareasFiltradas = getListaTareasAgregadas().getListaPorIds(listaTareasIds);
        if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
        listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
        click();
        check();
      }
    });
    
    categoriaFiltro.addEventListener('change',
      function(){
        var categoriaSeleccionada = this.options[categoriaFiltro.selectedIndex];
        var listaTareasCategorias = getListaTareasAgregadas().filtrarCategoriasLista(categoriaSeleccionada.value);
        var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasCategorias);
        listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();    
        click();
        check();
      });
    
    botonBuscar.addEventListener("click", (e)=>{
      if(textoFiltro.value==""){
        listaTareas.innerHTML = getListaTareasAgregadas().getListaTareasHtml();
      }
      else{
        var listaTareasTitulo = getListaTareasAgregadas().filtrarTitulo(textoFiltro.value);
        var listaTareasFiltradas = new ListaTareas().getListaDesdeJson(listaTareasTitulo);
        if(listaTareasFiltradas.getCantidadTareas()==0){
          var listaTareasIds = getListaTareasAgregadas().filtrarPorDescripcion(textoFiltro.value);
          listaTareasFiltradas = getListaTareasAgregadas().getListaPorIds(listaTareasIds);
          if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
        }
        listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
      }  
      click();
      check();
    });
