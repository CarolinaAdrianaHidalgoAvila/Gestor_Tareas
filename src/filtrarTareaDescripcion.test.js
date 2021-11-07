import ListaTareas from "./ListaTareas.js";
import Tarea from  "./Tarea.js"
 
describe("Filtrar tarea por descripción", () => {
    //CC1
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","Comprar utencilios para laboratorio")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-2"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("tarea fisica","Hacer formulario y la practica")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        expect(  listaTareas.filtrarPorDescripcion("Comprar")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("tarea fisica","Hacer formulario y la practica")    
        expect(  listaTareas.filtrarPorDescripcion("Comprar")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("comprar el peluche")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("comprar")).toEqual(["tarea-1","tarea-3"]);
    });

    

    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente, independiente si el filtro esta en minúsculas o mayúsculas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("hacertarea mate","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ") 
        listaTareas.agregarTarea("cumpleaños amiga","COMPRAR EL HELADO DE COCO QUE LE GUSTA")
        listaTareas.agregarTarea("cumpleaños hermana","Ayer mama dijo, comprar manilla rosada de la revista tone")   
        expect(  listaTareas.filtrarPorDescripcion("comprar")).toEqual(["tarea-2","tarea-3","tarea-4"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente, independiente si el filtro esta en minúsculas o mayúsculas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("hacertarea mate","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ") 
        listaTareas.agregarTarea("cumpleaños amiga","COMPRAR EL HELADO DE COCO QUE LE GUSTA")
        listaTareas.agregarTarea("cumpleaños hermana","Ayer mama dijo, comprar manilla rosada de la revista tone")   
        expect(  listaTareas.filtrarPorDescripcion("COMPRAR")).toEqual(["tarea-2","tarea-3","tarea-4"]);
    });
    // CC2
    it("Deberia devolver lista vacia si no existe tarea con descripción dado en el filtro", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("helado")).toEqual([]);
    });
    it("Deberia devolver lista vacia si no existe tarea con descripción dado en el filtro", () => {
        var listaTareas = new ListaTareas();
        expect(  listaTareas.filtrarPorDescripcion("helado")).toEqual([]);
    });

});