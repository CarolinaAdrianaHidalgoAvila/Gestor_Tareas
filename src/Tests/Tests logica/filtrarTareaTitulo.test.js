import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Lista de Tareas", () => {
    it("clase lista tareas", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("hola");
        expect(listaTareas1.getListaTitulosTareas()).toEqual(["hola"]);
    });
    it("Tarea sin titulo", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("");
        expect(listaTareas1.getListaTitulosTareas()).toEqual([]);
    });
    it("lista tareas con una vacia", () => {
        var listaTareas1 = new ListaTareas();
         listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("");
        expect(listaTareas1.getListaTitulosTareas()).toEqual( ["tarea1","tarea2"]);
    });
     it("lista tareas con una vacia", () => {
        var listaTareas1 = new ListaTareas();
         listaTareas1.agregarTarea("tarea1");
         listaTareas1.agregarTarea("");
        listaTareas1.agregarTarea("tarea3");
        expect(listaTareas1.getListaTitulosTareas()).toEqual( ["tarea1","tarea3"]);
    });
     it("lista tareas con un titulo invalido", () => {
        var listaTareas1 = new ListaTareas();
         listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("qwertyuiopasdfghjklñzxcvbnmqwerer");
        expect(listaTareas1.getListaTitulosTareas()).toEqual( ["tarea1","tarea2"]);
    });
    it("lista tareas con un titulo invalido", () => {
        var listaTareas1 = new ListaTareas();
         listaTareas1.agregarTarea("tarea1");
          listaTareas1.agregarTarea("qwertyuiopasdfghjklñzxcvbnmqwerer");
        listaTareas1.agregarTarea("tarea3");
        expect(listaTareas1.getListaTitulosTareas()).toEqual( ["tarea1","tarea3"]);
    });
    it("lista tareas con un titulo invalido y titulo vacio", () => {
        var listaTareas1 = new ListaTareas();
         listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("");
        listaTareas1.agregarTarea("qwertyuiopasdfghjklñzxcvbnmqwerer");
        expect(listaTareas1.getListaTitulosTareas()).toEqual( ["tarea1"]);
    });
     it("controlar longitud de titulo", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("qwertyuiopasdfghjklñzxcvbnmqwerer");
        expect(listaTareas1.getListaTitulosTareas()).toEqual([]);
    });
    it("filtrar en lista", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("tarea3");
        var tarea = listaTareas1.filtrarTitulo("tarea1");
        //console.log(tarea)
        expect(tarea[0].getId()).toEqual("tarea-1");
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
