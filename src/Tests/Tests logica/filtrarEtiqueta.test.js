import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Filtrar tarea por etiqueta", () => {
    //CC1
    it("Deberia devolver solo las tareas que tengan en su etiqueta el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("cumpleaños hermana","","","","torta")
        expect(  listaTareas.filtrarPorEtiquetas("#torta")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su etiqueta el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","","","","Campana de Gauss")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje","","","Maquillaje")
        expect(  listaTareas.filtrarPorEtiquetas("#Campana de Gauss")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su etiqueta el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje","","","Cumpleaños")    
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje","","","Cumpleaños")
        expect(  listaTareas.filtrarPorEtiquetas("#Cumpleaños")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver un array vacio cuando etiqueta no se encuentre la etiqueta en la lista de tareas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","","","","Campana de Gauss")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje","","","Maquillaje")
        expect(  listaTareas.filtrarPorEtiquetas("#Reposteria")).toEqual([]);
    }); 
    it("Deberia devolver un array vacio cuando etiqueta no se encuentre la etiqueta en la lista de tareas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","","","","Campana de Gauss")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje","","","Sombras,Animales")
        expect(  listaTareas.filtrarPorEtiquetas("#Sombras")).toEqual(["tarea-2"]);
    }); 
    it("Deberia devolver un array de las tareas cuando la palabra de filtro forme parte de las etiquetas en la lista de tareas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","","","","Campana de Gauss")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje","","","Maquillaje")
        listaTareas.agregarTarea("Presentación de baile","Preparar el kit de maquillaje","","","Maquillaje,Traje")
        expect(  listaTareas.filtrarPorEtiquetas("#Maquillaje")).toEqual(["tarea-2","tarea-3"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su etiqueeta el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","","","","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","","","Torta,Agradecimiento")        
        expect(  listaTareas.filtrarPorEtiquetas("#Felicitación")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas que tengan en su etiqueeta el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","","","","Torta,Felicitación")
        listaTareas.agregarTarea("cumpleaños amiga","","","","Torta,Agradecimiento")        
        expect(  listaTareas.filtrarPorEtiquetas("#Tarjeta de felicitación")).toEqual([]);
    });
});
