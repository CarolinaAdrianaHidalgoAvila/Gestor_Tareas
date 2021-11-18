import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"

describe("Añadir estado a Tarea ( Terminado, pendiente )", () => {
    it("Por defecto, al crear una tarea su estado es -pendiente-", () => {
        var tarea = new Tarea("primera tarea");
        expect(tarea.getEstado()).toEqual( "pendiente" );
    });
    it("Por defecto, al crear una tarea no esta terminada", () => {
        var tarea = new Tarea("Segunda tarea");
        expect(tarea.estaTerminada()).toEqual(false);
    }); 
    it("Al agregar tarea a la lista se guardara con estado pendiente incialmente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea");        
        expect(listaTareas.getTareaPorId("tarea-2").estaTerminada()).toEqual(false);
    });
    // marcar tarea como completada
    it("El estado sera terminada al marcar tarea como terminada", () => {
        var tarea = new Tarea("Primera tarea");
        tarea.terminar();
        expect(tarea.getEstado()).toEqual("terminada");
    });
    it("El estado sera terminada al marcar tarea como terminada", () => {
        var tarea = new Tarea("Primera tarea");
        tarea.terminar();
        expect(tarea.estaTerminada()).toEqual(true);
    });
    it("El estado sera terminada al marcar tarea de la lista como terminada", () => {
        var listaTareas = new  ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea"); 
        listaTareas.getTareaPorId("tarea-2").terminar();
        expect( listaTareas.getTareaPorId("tarea-2").estaTerminada()).toEqual(true);
    });
    it("Cada tarea de la lista mantendra su estado actualizado", () => {
        var listaTareas = new  ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea"); 
        listaTareas.getTareaPorId("tarea-2").terminar();
        expect( listaTareas.getEstadosTareas()).toEqual(["pendiente","terminada"]);
    });
    it("Cada tarea de la lista mantendra su estado actualizado", () => {
        var listaTareas = new  ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea"); 
        listaTareas.agregarTarea("tercera tarea"); 
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();
        expect( listaTareas.getEstadosTareas()).toEqual(["terminada","terminada","terminada"]);
    });
    it("Si no hay tareas no se muestra el estado", () => {
        var listaTareas = new  ListaTareas();      
        expect( listaTareas.getEstadosTareas()).toEqual([]);
    });
    it("Deberia devolver tag de checkbox para marcar como terminada una tarea", () => {
        var tarea = new  Tarea("primera tarea");  
        tarea.terminar();    
        var listaTareas = new  ListaTareas();      
        expect( listaTareas.agregarCheckEstado(tarea)).toEqual('<input class=\"checkbox-terminada\" type=\"checkbox\" id=\"undefined\" value=\"terminada \"disabled></input>');
    });

});
