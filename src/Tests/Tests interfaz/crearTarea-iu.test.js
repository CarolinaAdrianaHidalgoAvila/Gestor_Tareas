import fs from "fs";

describe("Crear Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../../LogicaInterfaz/index.js");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#lista-tareas");
    expect(lista_elem.innerHTML).toEqual("");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea";   
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"fecha-limite\"></span></li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Segunda tarea";   
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Segunda tarea[Sin categoria]<span class=\"fecha-limite\"></span></li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const categoria = document.querySelector("#selector-categoria");
    tarea_elem.value = "Segunda tarea";  
    categoria.value="Personal";
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Segunda tarea[Personal]<span class=\"fecha-limite\"></span></li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const categoria = document.querySelector("#selector-categoria");
    const fechaLimite = document.querySelector("#selector-fecha-limite");
    tarea_elem.value = "Segunda tarea";  
    categoria.value="Personal";
    fechaLimite.value="2022-11-07T13:29";
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Segunda tarea[Personal]<span class=\"fecha-limite\">11/7/2022, 1:29:00 PM</span></li></ul>");
  });


  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});