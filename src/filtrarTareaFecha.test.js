import ListaTareas from "./ListaTareas.js";
import Tarea from  "./Tarea.js"
 
describe("Filtrar tarea por descripción", () => {
    //CC1
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-07T23:29");     
        expect(  listaTareas.filtrarPorUnaFecha("2022-10-07T00:00")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a trotar","En la plaza y en la cancha","","2021-12-07T23:29");     
        expect(  listaTareas.filtrarPorUnaFecha("2021-12-07T00:00")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29");
        expect(  listaTareas.filtrarPorUnaFecha("2022-11-07T00:00")).toEqual(["tarea-1","tarea-2"]);
    }); 

    

});