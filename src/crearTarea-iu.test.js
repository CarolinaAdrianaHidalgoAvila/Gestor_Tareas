import fs from "fs";

describe("Crear Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./index.js");
  });

  //CC1
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
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea</li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Segunda tarea";   
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Segunda tarea</li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea";   
    form.submit();   
    tarea_elem.value = "Segunda tarea";   
    form.submit();  
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea</li><li>Segunda tarea</li></ul>");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea";   
    form.submit();   
    tarea_elem.value = "Segunda tarea";   
    form.submit();  
    tarea_elem.value = "Tercera tarea";   
    form.submit();  
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea</li><li>Segunda tarea</li><li>Tercera tarea</li></ul>");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});