import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"
 
describe("Pruebas de unidad de filtros para uso desde la interfaz", () => {
    it("filtrar por categoria", () => {      
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea","","Personal");
        expect(listaTareas.filtrarCategoriasLista("Personal")).toEqual([{"categoria": "Personal", "descripcion": "","estaPendiente": true,"etiquetas":"", "fechaLimite": null, "id": "tarea-2", "titulo": "segunda tarea"}]);
    });   
    it("filtrar por categoria", () => {      
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.getTareaPorId("tarea-1").terminar();
        listaTareas.agregarTarea("segunda tarea","","Personal");
        expect(listaTareas.getListaDesdeJson([{"categoria": "Personal", "descripcion": "","estaPendiente": false, "fechaLimite": null, "id": "tarea-2", "titulo": "segunda tarea"}])).toEqual({"ListaTareas": [{"categoria": "Personal", "descripcion": "", "estaPendiente": false,"etiquetas":"","fechaLimite": null, "id": "tarea-2", "titulo": "segunda tarea"}]});
    });  
    it("filtrar por categoria", () => {      
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("primera tarea");
        listaTareas.agregarTarea("segunda tarea","","Personal");       
        expect(listaTareas.getListaDesdeJson([])).toEqual({"ListaTareas": []});
    });   
    it("filtrar por categoria", () => {      
        var listaTareas = new ListaTareas();
        listaTareas.agregarTareaConId(new Tarea("primera tarea","","tarea-1"));        
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    }); 
    it("filtrar por categoria", () => {      
        var listaTareas = new ListaTareas();
        listaTareas.agregarTareaConId(new Tarea("primera tarea","","tarea-1"));        
        expect(listaTareas.getListaPorIds(["tarea-1"])).toEqual({"ListaTareas": [{"categoria": undefined, "descripcion": "","estaPendiente": true,"etiquetas":"", "fechaLimite": null, "id": "tarea-1", "titulo": "primera tarea"}]});
    });   
});
