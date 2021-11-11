import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"
 
describe("Añadir Fecha Límite a Tarea", () => {
    //CC1
    it("deberia poder crear tarea con fecha limite", () => {
        var tarea = new Tarea("ir a piscina","nadar 50 minutos","tarea-1","","2022-11-07T13:29");
        expect(tarea.getFechaLimite()).toEqual(new Date("2022-11-07T13:29"));
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
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-08-07T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-08-07T23:29");
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
    //CC2
    it("se deberia ver la fecha limite de un tarea a partir de un id", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2023-10-09T23:29");
        var tarea = listaTareas.getTareaPorId("tarea-1");
        expect(tarea.getFechaLimite()).toEqual(new Date("2023-10-09T23:29"));
    });
    it("se deberia ver la fecha limite de un tarea a partir de un id", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2023-10-09T23:29");
        listaTareas.agregarTarea("tarea2","tarea de mate","","2022-06-09T23:29");
        var tarea = listaTareas.getTareaPorId("tarea-2"); 
        expect(tarea.getFechaLimite()).toEqual(new Date("2022-06-09T23:29"));
    });
    it("se deberia ver la fecha limite null de un tarea sin fecha limite a partir de un id", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2023-10-09T23:29");
        listaTareas.agregarTarea("tarea2","tarea de mate");
        var tarea = listaTareas.getTareaPorId("tarea-2"); 
        expect(tarea.getFechaLimite()).toEqual(null);
    });
    it("se deberia ver fecha limite null si se busca de un id que no existe en la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2022-06-09T23:29");
        listaTareas.agregarTarea("tarea2","tarea de quimica");  
        var tarea = listaTareas.getTareaPorId("tarea-20");        
        expect(tarea.getFechaLimite()).toEqual(null);
    });
    it("se deberia ver fecha limite vacia si se busca de un id que no existe en la lista", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2022-06-09T23:29");
        listaTareas.agregarTarea("tarea2","tarea de quimica");  
        var tarea = listaTareas.getTareaPorId("tarea-dsf0"); 
        expect(tarea.getFechaLimite()).toEqual(null);
    });
    //CC3
    it("deberia controlar si tarea tiene fecha pasada", () => {
        var tarea = new Tarea("tarea1","tarea de fisica","tarea-1","","2020-06-09T23:29");      
        expect(tarea.esTareaConFechaPasada()).toEqual(true);
    });
    it("deberia controlar si tarea tiene fecha pasada", () => {          
        var tarea = new Tarea("tarea1","tarea de fisica","tarea-1","","2002-06-09T23:29");          
        expect(tarea.esTareaConFechaPasada()).toEqual(true);
    });
    it("deberia controlar si tarea tiene fecha pasada", () => {          
        var tarea = new Tarea("tarea1","tarea de fisica","tarea-1","","2022-06-09T23:29");      
        expect(tarea.esTareaConFechaPasada()).toEqual(false);
    });
    it("deberia controlar si tarea tiene fecha pasada", () => {          
        var tarea = new Tarea("tarea1","tarea de mate","tarea-1","","2025-08-09T23:29");      
        expect(tarea.esTareaConFechaPasada()).toEqual(false);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","2002-06-09T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(0);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","1999-01-18T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(0);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","1999-01-18T23:29");   
        listaTareas.agregarTarea("tarea2","tarea de fisica","","1999-01-18T23:29");   
        listaTareas.agregarTarea("tarea3","tarea de fisica","","1999-01-18T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(0);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","1999-01-18T23:29");   
        listaTareas.agregarTarea("tarea2","tarea de fisica","","2025-01-18T23:29");   
        listaTareas.agregarTarea("tarea3","tarea de fisica","","1999-01-18T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","1999-01-18T23:29");   
        listaTareas.agregarTarea("tarea2","tarea de fisica","","2025-01-18T23:29");   
        listaTareas.agregarTarea("tarea3","tarea de fisica","","2022-01-18T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });
    it("no deberia agregar tarea con fecha pasada a la lista", () => {
        var listaTareas = new ListaTareas();   
        listaTareas.agregarTarea("tarea1","tarea de fisica","","1999-01-18T23:29");   
        listaTareas.agregarTarea("tarea2","tarea de fisica","");   
        listaTareas.agregarTarea("tarea3","tarea de fisica","","2022-01-18T23:29");      
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });

});

