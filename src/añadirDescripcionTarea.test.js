import ListaTareas from "./ListaTareas.js";
import Tarea from  "./Tarea.js"
 
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

});

