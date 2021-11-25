import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Filtrar tarea por etiqueta terminada", () => {
    //CC1
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","","2022-10-07T23:29","Torta,Felicitación")
        listaTareas.getTareaPorId("tarea-1").terminar();  

        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2022-10-07T00:00","#Torta")).toEqual([1,"100%"]);
    }); 
    it("Deberia devolver solo las tareas terminadas de una fecha especifica de una tarea que contenga una etiqueta (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a trotar","En la plaza y en la cancha","","2021-12-07T23:29","Ejercicio");     
        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2021-12-07T00:00","#Ejercicio")).toEqual([0,"0%"]);
    });
    
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29","Ejercicio");
        listaTareas.getTareaPorId("tarea-1").terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2022-11-07T00:00","#Ejercicio")).toEqual([2,"100%"]);
    }); 
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29","Ejercicio");
        listaTareas.getTareaPorId("tarea-1").terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2022-11-07T00:00","#Agua")).toEqual([0,"0%"]);
    }); 
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29","Ejercicio");
        listaTareas.getTareaPorId("tarea-1").terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2022-11-05T00:00","#Ejercicio")).toEqual([0,"0%"]);
    }); 
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-05T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Ejercicio");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29","Ejercicio");
        listaTareas.getTareaPorId("tarea-1").terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        expect(  listaTareas.filtrarPorUnaFechaYEtiqueta("2022-11-05T23:29","#Ejercicio")).toEqual([1,"100%"]);
    }); 
    // CC2
   it("Deberia devolver solo las tareas completadas con una etiqueta especifica que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T22:29","Ejercio,Agua");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        expect(  listaTareas.filtrarPorUnRangoFechasYEtiqueta("2022-11-07T00:00","2022-11-07T23:59","#Ejercicio")).toEqual([0,"0%"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T22:29","Piscina");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Piscina");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-08T23:29","Piscina");
        listaTareas.getTareaPorId("tarea-1").terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        expect(  listaTareas.filtrarPorUnRangoFechasYEtiqueta("2022-11-07T00:00","2022-12-07T23:59","#Piscina")).toEqual([2,"67%"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59","Natación");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29","Agua,Natación");
        listaTareas.getTareaPorId("tarea-2").terminar(); 
        expect(  listaTareas.filtrarPorUnRangoFechasYEtiqueta("2022-11-07T00:00","2022-12-07T23:59","#Natación")).toEqual([1,"50%"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59","Natación,Agua");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T00:00","Agua");
        listaTareas.getTareaPorId("tarea-1").terminar(); 
        listaTareas.getTareaPorId("tarea-2").terminar(); 
        expect(  listaTareas.filtrarPorUnRangoFechasYEtiqueta("2022-10-07T00:00","2022-11-05T23:59","#Agua")).toEqual([0,"0%"]);
    });
    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59","Natación,Agua");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T00:00","Agua");
        listaTareas.getTareaPorId("tarea-1").terminar(); 
        listaTareas.getTareaPorId("tarea-2").terminar(); 
        expect(  listaTareas.filtrarPorUnRangoFechasYEtiqueta("2022-11-06T00:00","2022-12-08T23:59","#Piscina")).toEqual([0,"0%"]);
    });
});