import ListaTareas from "./ListaTareas.js";
//import Tarea from  "./Tarea.js"
 
describe("Lista de Tareas", () => {
    it("clase lista tareas", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("hola");
        expect(listaTareas1.getListaTitulosTareas()).toEqual(["hola"]);
    });
    it("filtrar en lista", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("tarea3");
        var tarea = listaTareas1.filtrarTitulo("tarea1");
        expect(tarea).toEqual( [{"descripcion": "","id": "tarea-1","titulo": "tarea1"}]);
    });
     it("filtrar en lista pero no existe", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("tarea3");
        var tarea = listaTareas1.filtrarTitulo("tarea4");
        expect(tarea).toEqual("No existe");
    });
   
});
