import fs from "fs";

describe("Filtrar por titulo/descripcion", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../../LogicaInterfaz/index.js");
  });
  it("deberia mostrar la tarea correspondiente a la descripcion filtrada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");  
    const descripcion = document.querySelector("#descripcion");
    const botonBuscar = document.querySelector("#boton-buscar");
    const textoFiltro = document.querySelector("#filtro-text");
    tarea_elem.value = "Primera tarea";   
    descripcion.value = "tarea de fisica";
    form.submit();   
    textoFiltro.value="fisica";
    botonBuscar.click();
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></li></ul>");
  });

  it("deberia mostrar todas las tareas", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");  
    const descripcion = document.querySelector("#descripcion");
    const botonBuscar = document.querySelector("#boton-buscar");
    const textoFiltro = document.querySelector("#filtro-text");
    tarea_elem.value = "Primera tarea";   
    descripcion.value = "tarea de fisica";
    form.submit();   
    textoFiltro.value="";
    botonBuscar.click();
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></li></ul>");
  });
/*
  it("deberia mostrar la tarea correspondiente al rango de fechas filtrado", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const fechaInicioFiltro =  document.querySelector("#selector-fecha-limite-inicial");
    const fechaFinFiltro = document.querySelector("#selector-fecha-limite-final");
    const fechaFiltro = document.querySelector("#boton-filtrar-fecha");   
    const fechaLimite = document.querySelector("#selector-fecha-limite");
    const form = document.querySelector("#agregarTareas-form");      
    tarea_elem.value = "Primera tarea"; 
    fechaLimite.value = "2023-11-07T13:29";
    form.submit();   
    tarea_elem.value = "Segunda tarea"; 
    form.submit();  
    fechaInicioFiltro.value = "2021-11-03";
    fechaFinFiltro.value = "2024-11-07";
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, true);
    fechaFiltro.dispatchEvent(evt);
    //fechaFiltro.click();
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\">7/11/2023 13:29:00<input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>" );
  });
*/
  it("deberia mostrar la tarea correspondiente a la categoria filtrada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");

    const categoria = document.querySelector("#selector-categoria");   
    const form = document.querySelector("#agregarTareas-form");  

    const categoriaFiltro= document.querySelector("#selector-categoria-busqueda");
    tarea_elem.value = "Primera tarea";   
    categoria.value="Trabajo";    
    form.submit();   
    tarea_elem.value = "Segunda tarea";   
    form.submit();   
    categoriaFiltro.value="Trabajo";
    var event = new Event('change');
    categoriaFiltro.dispatchEvent(event);
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Trabajo]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });

  
  it("deberia mostrar la tarea correspondiente a la categoria filtrada", () => {
    const divFiltroFecha = document.querySelector("#filtro-fecha");
    const selectorFiltro =  document.querySelector("#selector-filtro");   
    selectorFiltro.value="Fecha";
    var event = new Event('change');
    selectorFiltro.dispatchEvent(event);

    expect(divFiltroFecha.style.display).toEqual("block");
  });

  it("deberia mostrar la tarea correspondiente a la categoria filtrada", () => {  
    const selectorFiltro =  document.querySelector("#selector-filtro");
    const categoriaFiltro= document.querySelector("#selector-categoria-busqueda");
   
    selectorFiltro.value="Categoria";
    var event = new Event('change');
    selectorFiltro.dispatchEvent(event);

    expect(categoriaFiltro.style.display).toEqual("block");
  });
/*
  it("deberia mostrar la tarea correspondiente a la etiqueta filtrada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");  
    const etiquetas = document.querySelector("#etiquetas");
    const botonBuscar = document.querySelector("#boton-buscar");
    const textoFiltro = document.querySelector("#filtro-text");
    tarea_elem.value = "Primera tarea";   
    etiquetas.value = "fisica";
    form.submit();   
    textoFiltro.value="#fisica";
    botonBuscar.click();
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\">#fisica</span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });
  */
  // Filtro por estado de Tarea
  it("deberia mostrar las tareas correspondientes al 'estado' filtrado", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");  
    const radio_estadoTerminada = document.querySelector("#estado-terminada");

    tarea_elem.value = "Primera tarea";   
    form.submit();   
    radio_estadoTerminada.click();
    expect(lista_elem.innerHTML).toEqual("<ul></ul>")
  });
  it("deberia mostrar las tareas correspondientes al 'estado' filtrado al ultimo click que se haga", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");  
    const radio_estadoTerminada = document.querySelector("#estado-terminada");
    const radio_estadoPendiente = document.querySelector("#estado-pendiente");
    const radio_estadoTodas = document.querySelector("#estado-todas");

    tarea_elem.value = "Primera tarea";   
    form.submit();
    
    radio_estadoPendiente.click();
    radio_estadoTodas.click();
    radio_estadoTerminada.click(); 

    expect(lista_elem.innerHTML).toEqual("<ul></ul>")
    //expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></li></ul>" );
  });
  it("deberia NO mostrar la tarea NO completada por etiqueta filtrada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const terminadas = document.querySelector("#terminadas");
    const form = document.querySelector("#agregarTareas-form");  
    const etiquetas = document.querySelector("#etiquetas");
    const botonBuscarEtiquetaTerminada = document.querySelector("#boton-buscar-etiquetaTerminada");
    const textoFiltroTerminado = document.querySelector("#filtroTerminado-text");
    tarea_elem.value = "Primera tarea";   
    etiquetas.value = "fisica";
    form.submit();
    let checkbox = lista_elem.querySelector("#tarea-1");
    checkbox.click();
    
    textoFiltroTerminado.value="#fisica";
    botonBuscarEtiquetaTerminada.click();
    expect(terminadas.innerHTML).toEqual("");
  });

  it("deberia mostrar las estadisticas de tareas terminadas por categoria", () => {
    const selectorTipoEstadisticas = document.querySelector("#selector-tipo-estadisticas");  
    const listaEstadisticas = document.querySelector("#terminadas");
    selectorTipoEstadisticas.value="Categorias";
    var event = new Event('change');
    selectorTipoEstadisticas.dispatchEvent(event);

    expect(listaEstadisticas.innerHTML).toEqual("<ul><li>Sin categoria:[0  |  0%]</li><li>Personal:[0  |  0%]</li><li>Trabajo:[0  |  0%]</li><li>Estudio:[0  |  0%]</li><ul></ul></ul>");
  });
  it("deberia mostrar la tarea correspondiente al rango de fechas filtrado", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const fechaInicioFiltro =  document.querySelector("#selector-fecha-limite-inicial");
    const fechaFinFiltro = document.querySelector("#selector-fecha-limite-final");
    const fechaFiltro = document.querySelector("#boton-filtrar-fecha");   
    const fechaLimite = document.querySelector("#selector-fecha-limite");
    const form = document.querySelector("#agregarTareas-form");  
    const etiquetas = document.querySelector("#etiquetas");
    const botonBuscarEtiquetaTerminada = document.querySelector("#boton-buscar-etiquetaTerminada");
    const textoFiltroTerminado = document.querySelector("#filtroTerminado-text");  
    const selectorTipoEstadisticas = document.querySelector("#selector-tipo-estadisticas");   
    tarea_elem.value = "Primera tarea"; 
    etiquetas.value = "fisica";
    fechaLimite.value = "2023-11-25T13:29";
    form.submit();   
    tarea_elem.value = "Segunda tarea"; 
    etiquetas.value = "fisica";
    fechaLimite.value = "2023-11-07T13:29";
    form.submit();  
    fechaInicioFiltro.value = "2021-11-25";
    fechaFinFiltro.value = "2023-11-07T13:29";
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, true);
    fechaFiltro.dispatchEvent(evt);
    //fechaFiltro.click();
    selectorTipoEstadisticas.value="Etiqueta";
    var event = new Event('change');
    selectorTipoEstadisticas.dispatchEvent(event);
    textoFiltroTerminado.value="#fisica";
    botonBuscarEtiquetaTerminada.click();
    expect(terminadas.innerHTML).toEqual("#fisica :[0, 0% ]");
  });
  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });

});