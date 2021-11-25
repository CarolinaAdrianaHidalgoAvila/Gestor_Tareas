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
    const botonBuscarEtiquetaTerminada = document.querySelector("#boton-buscar-etiquetaTerminada");
    const textoFiltroTerminado = document.querySelector("#filtroTerminado-text");
    const terminadas = document.querySelector("#terminadas");
    function obtenerEstadisticasPorCategoria(){
      var estadisticas = listaTareasAgregadas.tareasTerminadasPorCategoria();
      var elemento=`<ul><li>Sin categoria:[${estadisticas["Sin categoria"][0]}  |  ${estadisticas["Sin categoria"][1]}]</li><li>Personal:[${estadisticas["Personal"][0]}  |  ${estadisticas["Personal"][1]}]</li><li>Trabajo:[${estadisticas["Trabajo"][0]}  |  ${estadisticas["Trabajo"][1]}]</li><li>Estudio:[${estadisticas["Estudio"][0]}  |  ${estadisticas["Estudio"][1]}]</li><ul>`;
      terminadas.innerHTML= elemento;
     
    }
    function obtenerEstadisticasPorEtiqueta(){
      var estadisticas = listaTareasAgregadas.tareasCompletadasPorEtiqueta(textoFiltroTerminado);
      var elemento=`${textoFiltroTerminado.value} :[${String(estadisticas[0])}, ${estadisticas[1]} ]`
      terminadas.innerHTML= elemento;
     
    } 
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
        var EtiquetaTerminada= getListaTareasAgregadas().filtrarPorUnRangoFechasYEtiqueta(fechaInicioFiltro.value,fechaFinFiltro.value,textoFiltroTerminado.value);
        if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
        listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
        if(selectorTipoEstadisticas.value=="Etiqueta" && textoFiltroTerminado.value != "" ){
      terminadas.innerHTML=`${textoFiltroTerminado.value} :[${String(EtiquetaTerminada[0])}, ${EtiquetaTerminada[1]} ]`;
        }
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
          if(listaTareasFiltradas.getCantidadTareas()==0){
            var listaTareasIdsEtiquetas = getListaTareasAgregadas().filtrarPorEtiquetas(textoFiltro.value);
            listaTareasFiltradas = getListaTareasAgregadas().getListaPorIds(listaTareasIdsEtiquetas);
            if(listaTareasFiltradas.getCantidadTareas()==0) alert("No existe");
          }      
        }
        listaTareas.innerHTML = listaTareasFiltradas.getListaTareasHtml();
      }  
      click();
      check();
    });
    botonBuscarEtiquetaTerminada.addEventListener("click", (e)=>{
      if(textoFiltroTerminado.value==="" ){
        alert("Texto para filtrar Invalido");
      }
      else{
        var EtiquetaTerminada = getListaTareasAgregadas().tareasCompletadasPorEtiqueta(textoFiltroTerminado.value);
      }
      if(EtiquetaTerminada[0]==0) alert("No existe"); 
      else{
        terminadas.innerHTML=`${textoFiltroTerminado.value} :[${String(EtiquetaTerminada[0])}, ${EtiquetaTerminada[1]} ]`;
      }  
      click();
      check();
    });
