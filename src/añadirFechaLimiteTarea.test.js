import ListaTareas from "./ListaTareas.js";
import Tarea from  "./Tarea.js"
 
describe("Añadir Fecha Límite a Tarea", () => {
    //CC1
    it("deberia poder crear tarea con fecha limite", () => {
        var tarea = new Tarea("ir a piscina","nadar 50 minutos","tarea-1","","2021-11-07T13:29");
        expect(tarea.getFechaLimite()).toEqual(new Date("2021-11-07T13:29"));
    }); 
    it("deberia poder crear tarea con fecha limite", () => {
        var tarea = new Tarea("ir a piscina","nadar 50 minutos","tarea-1","","2022-08-07T23:29");
        expect(tarea.getFechaLimite()).toEqual(new Date("2022-08-07T23:29"));
    }); 
    it("si tarea no se crea con fecha limite este valor por defecto es null", () => {      
        var tarea = new Tarea("ir a piscina","nadar 50 minutos","tarea-1");
        expect(tarea.getFechaLimite()).toEqual(null);
    }); 
    it("si tarea no se crea con fecha limite este valor por defecto es null", () => {      
        var tarea = new Tarea("ir a piscina","nadar 50 minutos","tarea-1");
        expect(tarea.getFechaLimite()).toEqual(null);
    }); 
    it("deberia agregar tareas con fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-08-07T23:29");
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    }); 
    it("deberia agregar tareas con fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","2022-08-07T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","2022-08-07T23:29");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    }); 
    it("deberia agregar tareas con y sin fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas(); 
        var tarea = new Tarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea(tarea);
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    }); 
    it("deberia agregar tareas con y sin fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas();         
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    }); 
    it("deberia agregar tareas con y sin fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma");
        expect(listaTareas.getCantidadTareas()).toEqual(3);
    }); 
    it("deberia agregar tareas con y sin fecha limite a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma","","2022-08-07T23:29");
        expect(listaTareas.getCantidadTareas()).toEqual(3);
    }); 
    it("deberia poder devolver lista de fecha limites de las tareas agregadas a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma");
        expect(listaTareas.getFechaLimiteTareas()).toEqual([null,null,null]);
    }); 
    it("deberia poder devolver lista de fecha limites de las tareas agregadas a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma","","2022-08-07T23:29");       
        expect(listaTareas.getFechaLimiteTareas()).toEqual([null,null,new Date("2022-08-07T23:29")]);
    }); 
    it("deberia poder devolver lista de fecha limites de las tareas agregadas a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2023-10-09T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma","","2022-08-07T23:29");
        expect(listaTareas.getFechaLimiteTareas()).toEqual([new Date("2023-10-09T23:29"),null,new Date("2022-08-07T23:29")]);
    }); 
    it("deberia poder devolver lista de fecha limites de las tareas agregadas a la lista", () => {     
        var listaTareas = new ListaTareas();        
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2023-10-09T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29");
        listaTareas.agregarTarea("tarea de mate","ejercicios suma","","2022-08-07T23:29");
        expect(listaTareas.getFechaLimiteTareas()).toEqual([new Date("2023-10-09T23:29"),new Date("2022-03-19T20:29"),new Date("2022-08-07T23:29")]);
    }); 

});

