import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Numero de tareas por categoria", () => {  
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria ", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Agradecimiento")                
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });  
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar 1 tarea personal de 2 ", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Agradecimiento")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[1,"50%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });   
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar 2 tareas personales de 3", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Agradecimiento") 
        listaTareas.agregarTarea("cumpleaños Togo","","Personal","Hueso")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        listaTareas.getTareaPorId("tarea-3").terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[2,"67%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });  
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar tareas de trabajo", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Trabajo","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","Torta,Agradecimiento") 
        listaTareas.agregarTarea("cumpleaños Togo","","Personal","Hueso")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        listaTareas.getTareaPorId("tarea-3").terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[1,"50%"],"Trabajo":[1,"100%"],"Estudio":[0,"0%"]});
    });    
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar tareas de estudio", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Trabajo","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","Torta,Agradecimiento") 
        listaTareas.agregarTarea("cumpleaños Togo","","Estudio","Hueso")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        listaTareas.getTareaPorId("tarea-3").terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[1,"100%"],"Estudio":[1,"50%"]});
    });    
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar tareas sin categoria", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","Torta,Agradecimiento") 
        listaTareas.agregarTarea("cumpleaños Togo","","Estudio","Hueso")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        listaTareas.getTareaPorId("tarea-3").terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[1,"100%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[1,"50%"]});
    });  
    it("Deberia devolver la cantidad de tareas terminadas correspondientes a cada categoria al terminar tareas de cualquier categoria", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","Torta,Felicitación")
        listaTareas.agregarTarea("tarea fisica","","Estudio","")
        listaTareas.agregarTarea("trabajo quimica","","Trabajo","quimica")
        listaTareas.agregarTarea("hacer torta","","Personal","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","Torta,Agradecimiento") 
        listaTareas.agregarTarea("cumpleaños Togo","","Estudio","Hueso")   
        var tarea =  listaTareas.getTareaPorId("tarea-1");
        tarea.terminar();  
        listaTareas.getTareaPorId("tarea-2").terminar();  
        listaTareas.getTareaPorId("tarea-3").terminar();
        listaTareas.getTareaPorId("tarea-4").terminar();
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[1,"100%"],"Personal":[1,"100%"],"Trabajo":[1,"100%"],"Estudio":[1,"33%"]});
    });    
    
    it("Deberia devolver 0,0% para todas las categorias si no hay tareas en la lista", () => {
        var listaTareas = new ListaTareas();              
        expect(  listaTareas.tareasTerminadasPorCategoria()).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    }); 
    
    // pruebas entre rango de fechas
    it("Deberia devolver estadisticas de tareas terminadas correspondientes a una categoria y UNA fecha 1", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-12-07T23:59")
        var tarea =  listaTareas.getTareaPorId("tarea-1").terminar();  
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-12-07T23:59","2022-12-07T23:59")).toEqual({"Sin categoria":[1,"100%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });

    it("Deberia devolver estadisticas de tareas terminadas correspondientes a una categoria y UNA fecha 2", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-10-07T23:59")
        var tarea =  listaTareas.getTareaPorId("tarea-1").terminar();  
        
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-12-07T23:59","2022-12-07T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });

    it("Deberia devolver estadisticas de tareas terminadas correspondientes a una categoria y un rango de fechas ", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-10-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-11-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-12-07T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar(); 
        listaTareas.getTareaPorId("tarea-3").terminar();   
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-10-01T23:59","2022-12-30T23:59")).toEqual({"Sin categoria":[3,"100%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });
    it("Deberia devolver estadisticas de tareas terminadas correspondientes a una categoria y un rango de fechas ", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-10-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-11-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-12-07T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-10-01T23:59","2022-11-30T23:59")).toEqual({"Sin categoria":[2,"100%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });
    it("Deberia devolver estadisticas de tareas terminadas correspondientes a una categoria y un rango de fechas ", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-1-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-2-07T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-3-07T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-10-01T23:59","2022-11-30T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });
    it("Si no esta en un rango de fechas solicitadas, no deberia mostrar ninguna tarea terminada", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","2022-01-01T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Trabajo","2022-02-01T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-03-01T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-10-01T23:59","2022-11-30T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[0,"0%"]});
    });
    it("El porcentaje de las estadísticas debe estar acorde a los rangos de fecha", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-01-15T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-02-14T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-03-20T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-04-22T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-05-30T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();
        listaTareas.getTareaPorId("tarea-4").terminar();
        listaTareas.getTareaPorId("tarea-5").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-01-01T23:59","2022-03-30T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[3,"100%"]});
    });
    it("El porcentaje de las estadísticas debe estar acorde a los rangos de fecha", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-01-15T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-02-14T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-03-20T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-04-22T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-05-30T23:59")
        listaTareas.getTareaPorId("tarea-3").terminar();
        listaTareas.getTareaPorId("tarea-4").terminar();
        listaTareas.getTareaPorId("tarea-5").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-01-01T23:59","2022-03-30T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[1,"33%"]});
    });
    it("El porcentaje de las estadísticas debe estar acorde a los rangos de fecha", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-01-15T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-02-14T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-03-20T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-04-22T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-05-30T23:59")
        listaTareas.getTareaPorId("tarea-3").terminar();
        listaTareas.getTareaPorId("tarea-4").terminar();
        listaTareas.getTareaPorId("tarea-5").terminar();         
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-01-01T23:59","2022-03-30T23:59")).toEqual({"Sin categoria":[0,"0%"],"Personal":[0,"0%"],"Trabajo":[0,"0%"],"Estudio":[1,"33%"]});
    });
    it("El porcentaje de las estadísticas debe estar acorde a los rangos de fecha", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2022-01-15T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Sin categoria","2020-01-14T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","2022-01-20T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Personal","2020-01-22T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Trabajo","2022-01-30T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Trabajo","2020-01-30T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2022-01-30T23:59")
        listaTareas.agregarTarea("cumpleaños amiga","","Estudio","2020-01-30T23:59")
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.getTareaPorId("tarea-2").terminar();
        listaTareas.getTareaPorId("tarea-3").terminar();  
        listaTareas.getTareaPorId("tarea-4").terminar();
        listaTareas.getTareaPorId("tarea-5").terminar();
        listaTareas.getTareaPorId("tarea-6").terminar(); 
        listaTareas.getTareaPorId("tarea-7").terminar();
        listaTareas.getTareaPorId("tarea-8").terminar();        
        expect(  listaTareas.tareasTerminadasPorCategoria_PorRangoDeFecha("2022-01-01T23:59","2022-03-30T23:59")).toEqual({"Sin categoria":[1,"100%"],"Personal":[1,"100%"],"Trabajo":[1,"100%"],"Estudio":[1,"100%"]});
    });


});