import fs from "fs";


describe("Añadir Etiquetas a Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../../LogicaInterfaz/index.js");
  });
  it("deberia mostrar la tarea creada sin etiquetas", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const etiquetas = document.querySelector("#etiquetas");
    tarea_elem.value = "Primera tarea";
    etiquetas.value = "";    
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });
  it("deberia mostrar la tarea creada con una etiqueta", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const etiquetas = document.querySelector("#etiquetas");
    tarea_elem.value = "Primera tarea";
    etiquetas.value = "Primera";    
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\">#Primera</span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });
  it("deberia mostrar la tarea creada con varias etiquetas", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const etiquetas = document.querySelector("#etiquetas");
    tarea_elem.value = "Primera tarea";
    etiquetas.value = "Primera,Segunda";     
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\">#Primera,#Segunda</span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });
  
  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});