import fs from "fs";


describe("Añadir Descripcion Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../../LogicaInterfaz/index.js");
  });
  it("deberia mostrar la tarea creada sin boton si no tiene descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea";  
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span></li></ul>");
  });

  it("deberia mostrar la tarea creada con boton de descripcion si tiene descripcion", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcion");
    tarea_elem.value = "Primera tarea";   
    descripcion.value = "tarea de fisica";
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"></span><button class=\"btn-descripcion\" id=\"tarea-1\">Descripcion</button><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></li></ul>");
  });

  /*
  //No reconoce dialogo.show()
  it("deberia mostrar la descripcion correspondiente a la tarea", () => {
    const dialogo = document.querySelector("#dialogo-descripcion");
    const tarea_elem = document.querySelector("#tarea");  
    const form = document.querySelector("#agregarTareas-form");
    const descripcion = document.querySelector("#descripcion");  
    tarea_elem.value = "Primera tarea";   
    descripcion.value = "tarea de fisica";
    form.submit();   
    const boton_descripcion = document.querySelector("#tarea-1");
    boton_descripcion.click();
    expect(dialogo.innerHTML).toEqual('tarea de fisica<button id="close" type="button" onclick="document.getElementById(&quot;dialogo-descripcion&quot;).close()"></button>');
  });

*/

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});