import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"
 
describe("Añadir Etiqueta a Tarea", () => {
    //CC1
    it("si no tiene etiqueta esta deberia estar vacia", () => {
        var tarea = new Tarea("primera tarea");
        expect(tarea.getEtiquetas()).toEqual([]);
    });  
    
    it("deberia tener la etiqueta al crear la tarea", () => {
        var tarea = new Tarea("Estudiar química","","","","","tabla períodica");
        expect(tarea.getEtiquetas()).toEqual(["#tabla períodica"]);
    });
    it("deberia tener las etiquetas al crear la tarea", () => {
        var tarea = new Tarea("Estudiar química","","","","","tabla períodica,valencias,símbolos,elementos");
        expect(tarea.getEtiquetas()).toEqual(["#tabla períodica", "#valencias", "#símbolos", "#elementos"]);
    });    
    
    it("deberia agregar elemento con etiqueta a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("Tarea de sis info","","","","Python");       
        expect(listaTareas.getCantidadTareas()).toEqual(1);
    });
    it("deberia agregar elementos con etiquetas a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("Tarea de sis info","","","","Python");
        listaTareas.agregarTarea("Tarea de redes","","","","Vlans,VPN");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });
    it("deberia agregar elementos con y sin etiquetas a la lista", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("Jardinería","","","","rosas,margaritas,girasoles");
        listaTareas.agregarTarea("Hornear pan","","","","");
        expect(listaTareas.getCantidadTareas()).toEqual(2);
    });
    it("o deberia agregar una tarea que no tiene título pero si etiquetas", () => {
        var listaTareas = new ListaTareas();       
        listaTareas.agregarTarea("","","","","galletas");
        expect(listaTareas.getCantidadTareas()).toEqual(0);
    });
    it("deberia devolver lista vacia si ningun elemento tiene etiquetas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("segunda tarea");
        expect(listaTareas.getEtiquetasTareas()).toEqual([[]]);
    });
    it("deberia devolver un array que contenga el array de etiquetas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de fisica","","","","Error,Medidas");
        expect(listaTareas.getEtiquetasTareas()).toEqual([["#Error","#Medidas"]]);
    });
    it("deberia devolver un array que contenga el array de etiquetas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de fisica","","","","Error,Medidas");
        listaTareas.agregarTarea("Proyecto de progra","","","","C#,Objetos");
        expect(listaTareas.getEtiquetasTareas()).toEqual([["#Error","#Medidas"],["#C#","#Objetos"]]);
    });
    it("deberia devolver un array que contenga el array de etiquetas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de fisica","","","","Error,Medidas");
        listaTareas.agregarTarea("Proyecto de progra","","","","C#,Objetos");
        listaTareas.agregarTarea("Informe de Religion");
        expect(listaTareas.getEtiquetasTareas()).toEqual([["#Error","#Medidas"],["#C#","#Objetos"],[]]);
    });
    //CC3
    it("deberia devolver un array vacio en caso de que las etiquetas sean invalidas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de Religion","","","",",,");
        expect(listaTareas.getEtiquetasTareas()).toEqual([[]]);
    });
    it("deberia devolver un array contemplando que las etiquetas sean invalidas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de Religion","","","",",,");
        listaTareas.agregarTarea("Informe de Fisica","","","","Medidas,Errores,");
        expect(listaTareas.getEtiquetasTareas()).toEqual([[],["#Medidas","#Errores"]]);
    });
    //CC4
    it("deberia devolver un array contemplando que las etiquetas sean invalidas", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("Informe de Religion","","","",",,");
        listaTareas.agregarTarea("Informe de Fisica","","","","Medidas,Errores,El laboratorio trata de la campana de Gauss y como podemos aplicarla en la vida de un ingeniero");
        expect(listaTareas.getEtiquetasTareas()).toEqual([[],["#Medidas","#Errores","#El laboratorio trata de la campana de Gauss "]]);
    });
});
