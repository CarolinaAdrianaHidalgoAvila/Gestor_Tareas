import ListaTareas from "../../LogicaNegocio/ListaTareas.js";

describe("Lista de Tareas con categoría", ()=>{
    it("Agregar una categoria de las disponibles", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Resolver examen","","Estudio");
        expect(listaTareas1.getCategoriaTarea("Resolver examen")).toEqual("Estudio");
    });
    it("Agregar una categoria de las disponibles", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Tarea1","","Estudio");
        listaTareas1.agregarTarea("Regar las plantas","","Personal");
        expect(listaTareas1.getCategoriaTarea("Regar las plantas")).toEqual("Personal");
    });
    it("Agregar una categoria de las disponibles", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Tarea1","","Estudio");
        listaTareas1.agregarTarea("Hacer balance","","Trabajo");
        expect(listaTareas1.getCategoriaTarea("Hacer balance")).toEqual("Trabajo");
    });
    it("Agregar una tarea sin categoría", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("Tarea1");
        expect(listaTareas1.getCategoriaTarea("Tarea1")).toEqual("Sin categoria");
    });
    it("filtrar en lista segun las categorias", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1");
        listaTareas1.agregarTarea("tarea2");
        listaTareas1.agregarTarea("tarea3");
        var tareas = listaTareas1.filtrarCategorias("Sin categoria");
        expect(tareas).toEqual(["tarea1","tarea2","tarea3"]);
    });
    it("filtrar en lista segun las categorias", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1","","Personal");
        listaTareas1.agregarTarea("tarea2","","Trabajo");
        listaTareas1.agregarTarea("tarea3","","Estudio");
        var tareas = listaTareas1.filtrarCategorias("Sin categoria");
        expect(tareas).toEqual([])
    });
    it("filtrar en lista segun las categorias", () => {
        var listaTareas1 = new ListaTareas();
        listaTareas1.agregarTarea("tarea1","","Personal");
        listaTareas1.agregarTarea("tarea2","","Trabajo");
        listaTareas1.agregarTarea("tarea3","","Estudio");
        listaTareas1.agregarTarea("tarea4","","Trabajo");
        listaTareas1.agregarTarea("tarea5","","Trabajo");
        var tareas = listaTareas1.filtrarCategorias("Trabajo");
        expect(tareas).toEqual(["tarea2","tarea4","tarea5"]);
    });
})

