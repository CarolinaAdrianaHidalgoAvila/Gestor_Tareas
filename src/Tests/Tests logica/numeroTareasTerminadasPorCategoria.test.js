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
  
});