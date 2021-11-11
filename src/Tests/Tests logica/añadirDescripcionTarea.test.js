import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"
 
describe("Añadir Descripcion a Tarea", () => {
    it("si no tiene descripcion esta deberia estar vacia", () => {
        var tarea = new Tarea("primera tarea");
        expect(tarea.getDescripcion()).toEqual("");
    });   
    it("deberia tener la descripcion al crear la tarea", () => {
        var tarea = new Tarea("primera tarea","tarea de quimica");
        expect(tarea.getDescripcion()).toEqual("tarea de quimica");
    });
    it("deberia tener la descripcion al crear la tarea", () => {
        var tarea = new Tarea("primera tarea","tarea de fisica");
        expect(tarea.getDescripcion()).toEqual("tarea de fisica");
    });    
    it("deberia agregar elemento con descripcion a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");       
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    });
    it("deberia agregar elementos con descripcion a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea","tarea de quimica");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });
    it("deberia agregar elementos con y sin descripcion a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });
    it("deberia agregar elementos con y sin descripcion a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea");
        listaTareas.agregarTarea("tercera tarea","tarea de mate");
        expect(listaTareas.getCantidadTareas()).toEqual(3);
    });
    it("deberia devolver lista vacia si ningun elemento tiene descripcion", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("segunda tarea");
        expect(listaTareas.getDescripcionTareas()).toEqual([]);
    });
    it("deberia devolver lista vacia si ningun elemento tiene descripcion", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("segunda tarea","tarea de elctricidad");
        expect(listaTareas.getDescripcionTareas()).toEqual(["tarea de elctricidad"]);
    });
    it("deberia obtener descripcion de las tareas con descripcion de la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea");
        listaTareas.agregarTarea("tercera tarea","tarea de mate");
        expect(listaTareas.getDescripcionTareas()).toEqual(["tarea de fisica", "tarea de mate"]);
    });
    it("deberia obtener descripcion de las tareas con descripcion de la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea");
        listaTareas.agregarTarea("tercera tarea","tarea de mate");
        listaTareas.agregarTarea("cuarta tarea");
        listaTareas.agregarTarea("quinta tarea");
        listaTareas.agregarTarea("sexta tarea","tarea de psicologia");
        expect(listaTareas.getDescripcionTareas()).toEqual(["tarea de fisica", "tarea de mate", "tarea de psicologia"]);
    });
    it("deberia identificar elementos con y sin descripcion a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("primera tarea","tarea de fisica");
        listaTareas.agregarTarea("segunda tarea");
        listaTareas.agregarTarea("tercera tarea","tarea de mate");
        expect(listaTareas.getCantidadTareasConDescripcion()).toEqual(2);
    });
    it("si una tarea no tiene titulo pero si tiene descripcion no deberia agregarse a la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("","tarea de fisica")
        expect(listaTareas.getCantidadTareas()).toEqual(0);
    });
    it("si una tarea no tiene titulo pero si tiene descripcion no deberia agregarse a la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("","tarea de fisica")
        listaTareas.agregarTarea("","tarea de quimica")
        listaTareas.agregarTarea("tarea1","tarea de algebra")
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    });

    // CC2
    it("se deberia ver la descripcion de un tarea a partir de un id", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica")
        var tarea = listaTareas.getTareaPorId("tarea-1") 
        expect(  tarea.getDescripcion()  ).toEqual("tarea de fisica");
    });
    it("se deberia ver la descripcion de un tarea a partir de un id", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica")
        listaTareas.agregarTarea("tarea2","tarea de quimica")
        var tarea = listaTareas.getTareaPorId("tarea-2") 
        expect(  tarea.getDescripcion()  ).toEqual("tarea de quimica");
    });
    it("se deberia ver la descripcion vacia si se busca de un id que no existe en la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica")
        listaTareas.agregarTarea("tarea2","tarea de quimica")
        var tarea = listaTareas.getTareaPorId("tarea-10") 
        expect(  tarea.getDescripcion()  ).toEqual("");
    });
    it("se deberia ver la descripcion vacia si se busca de un id que no existe en la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica")
        listaTareas.agregarTarea("tarea2","tarea de quimica")
        var tarea = listaTareas.getTareaPorId("tarea-854") 
        expect(  tarea.getDescripcion()  ).toEqual("");
    });
    it("se deberia ver la descripcion vacia si se busca de un id de tarea sin descripción", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea de fisica","Volver  a hacer formulario, se perdio el anterior")
        listaTareas.agregarTarea("lavar platos","Comprar nueva esponja")
        listaTareas.agregarTarea("tarea de quimica","investigar la diferencia entre metales y no metales")
        listaTareas.agregarTarea("cumpleaños hermana","")
        var tarea = listaTareas.getTareaPorId("tarea-4") 
        expect(  tarea.getDescripcion()  ).toEqual("");
    });
    it("se deberia ver la descripcion vacia si se busca de un id de tarea sin descripción", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea de fisica","")
        listaTareas.agregarTarea("lavar platos","Comprar nueva esponja")
        listaTareas.agregarTarea("tarea de quimica","")
        listaTareas.agregarTarea("cumpleaños hermana","")
        var tarea = listaTareas.getTareaPorId("tarea-3") 
        expect(  tarea.getDescripcion()  ).toEqual("");
    });
    // CC3
    it("no se deberia permitir descripciones con más de 60 palabras", () => {
        var tarea = new Tarea("tarea de quimica","Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares.-- Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares. -- Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares.");
        expect(tarea.getDescripcion()).toEqual("Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares.-- Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares. -- Tareas relacionadas con propiedades de");
    });
    it("no se deberia permitir descripciones con más de 60 palabras", () => {
        var tarea = new Tarea("tarea de fisica","Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición ");
        expect(tarea.getDescripcion().split(" ").length ).toEqual(60);
    });
    it("o se deberia permitir descripciones con más de 60 palabras", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea de fisica","Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición Volver a copiar el formulario, repasar apuntes de la anterior clase, rehacer los ejercicios que se hicieron en la exposición ")
        listaTareas.agregarTarea("lavar platos","")
        listaTareas.agregarTarea("tarea de quimica","Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares.-- Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares. -- Tareas relacionadas con propiedades de las sustancias químicas: identificación de sustancias, purificación de sustancias, obtención de sustancias, determinación de magnitudes físicas, determinación de fórmulas empíricas y moleculares")
        listaTareas.agregarTarea("cumpleaños hermana"," comprar el peluche de gato o un kit de maquillaje")
        var tarea = listaTareas.getTareaPorId("tarea-1") 
        expect(  tarea.getDescripcion().split(" ").length   ).toEqual(60);
    });


});

