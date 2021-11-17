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
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button></li></ul>");
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
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button></li></ul>");
  });

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
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"fecha-limite\">11/7/2023, 1:29:00 PM</span></li></ul>");
  });

  it("deberia mostrar la tarea correspondiente a la categoria filtrada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");

    const categoria = document.querySelector("#selector-categoria");    const form = document.querySelector("#agregarTareas-form");  

    const categoriaFiltro= document.querySelector("#selector-categoria-busqueda");
    tarea_elem.value = "Primera tarea";   
    categoria.value="Trabajo";    
    form.submit();   
    tarea_elem.value = "Segunda tarea";   
    form.submit();   
    categoriaFiltro.value="Trabajo";
    var event = new Event('change');
    categoriaFiltro.dispatchEvent(event);
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Trabajo]<span class=\"fecha-limite\"></span></li></ul>");
  });


  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});