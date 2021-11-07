import fs from "fs";


describe("Añadir Descripcion Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./index.js");
  });
  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea";   
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea</li></ul>");
  });
  //CC1
  it("Si descripcion esta vacia no muestra boton de descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcionTarea");
    tarea_elem.value = "Limpiar cocina";   
    descripcion.value = "";
    form.submit();
    expect(lista_elem.innerHTML).toEqual("<ul><li>Limpiar cocina</li></ul>");
  });
/*
  //CC2
  it("Muestra boton descripcion si la tarea fue creada con descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcionTarea");
    tarea_elem.value = "Limpiar cocina";   
    descripcion.value = "Comprar nueva escoba y botar los vasos viejos";
    form.submit();
    expect(lista_elem.innerHTML).toEqual('<ul><li>Limpiar cocina&nbsp;&nbsp;<button class="button-descripcion" id="tarea-1" type="button">Descripcion</button></li></ul>');
  });

  it("Muestra descripcion correspondiente al hacer click en boton descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");     
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcionTarea");    
    const dialogo_descripcion = document.querySelector("#dialogo-descripcion");
    tarea_elem.value = "Limpiar cocina";   
    descripcion.value = "Comprar nueva escoba y botar los vasos viejos";
    form.submit();
    const boton_descripcion = document.querySelector("#tarea-1");

    boton_descripcion.click();
    expect(dialogo_descripcion.innerHTML).toEqual('Comprar nueva escoba y botar los vasos viejos');
  });

  it("Muestra descripcion correspondiente al hacer click en boton descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");     
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcionTarea");    
    const dialogo_descripcion = document.querySelector("#dialogo-descripcion");
    tarea_elem.value = "Tarea IoT";   
    descripcion.value = "Conectar sensores";
    form.submit();
    const boton_descripcion = document.querySelector("#tarea-1");
    boton_descripcion.click();
    expect(dialogo_descripcion.innerHTML).toEqual('Conectar sensores');
  });

*/
  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});