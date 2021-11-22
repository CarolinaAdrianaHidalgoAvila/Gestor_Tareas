import ListaTareas from "../../LogicaNegocio/ListaTareas.js";

describe("Filtrar tareas por estado (terminado, pendiente, todas)", ()=>{
    it("filtrar tareas por estado pendiente", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        expect(listaTareas1.filtrarPorEstado("pendiente")).toEqual( ["tarea-1"]);
    });
    it("filtrar tareas por estado pendiente", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        expect(listaTareas1.filtrarPorEstado("pendiente")).toEqual( ["tarea-1","tarea-2"]);
    });
    it("filtrar tareas por estado pendiente", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.agregarTarea("Estudiar examen","copiar formularios","");
        listaTareas1.agregarTarea("Comprar regalo","ver catalogo de perfumes","");
        expect(listaTareas1.filtrarPorEstado("pendiente")).toEqual( ["tarea-1","tarea-2","tarea-3","tarea-4"]);
    });
    it("filtrar tareas por estado terminado", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        expect(listaTareas1.filtrarPorEstado("terminada")).toEqual( []);
    });
    it("filtrar tareas por estado terminado", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.agregarTarea("Estudiar examen","copiar formularios","");
        listaTareas1.agregarTarea("Comprar regalo","ver catalogo de perfumes","");
        expect(listaTareas1.filtrarPorEstado("terminada")).toEqual( []);
    });

    it("filtrar tareas por estado terminado", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.getTareaPorId("tarea-1").terminar()
        expect(listaTareas1.filtrarPorEstado("terminada")).toEqual( ["tarea-1"]);
    });
    it("filtrar tareas por estado terminado", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.agregarTarea("Comprar regalo","ver catalogo de perfumes","");
        listaTareas1.getTareaPorId("tarea-1").terminar()
        listaTareas1.getTareaPorId("tarea-3").terminar()
        expect(listaTareas1.filtrarPorEstado("terminada")).toEqual( ["tarea-1","tarea-3"]);
    });
    it("Debera mostrar todas las tareas al filtrar por  -todas-", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.getTareaPorId("tarea-1").terminar()
        expect(listaTareas1.filtrarPorEstado("todas")).toEqual( ["tarea-1","tarea-2"]);
    });
    it("Debera mostrar todas las tareas al filtrar por  'todas' ", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        listaTareas1.agregarTarea("Ordenar casa","comprar escoba","");
        listaTareas1.agregarTarea("Comprar regalo","ver catalogo de perfumes","");
        listaTareas1.agregarTarea("Comprar vestido","ver horario de las diferentes tiendas","");
        listaTareas1.getTareaPorId("tarea-1").terminar()
        listaTareas1.getTareaPorId("tarea-3").terminar()
        expect(listaTareas1.filtrarPorEstado("todas")).toEqual( ["tarea-1","tarea-2","tarea-3","tarea-4"]);
    });

    
})