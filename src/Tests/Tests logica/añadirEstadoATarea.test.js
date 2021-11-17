import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"

describe("Añadir estado a Tarea ( Terminado, pendiente )", () => {
    it("Por defecto, al crear una tarea su estado es -pendiente-", () => {
        var tarea = new Tarea("primera tarea");
        expect(tarea.getEstado()).toEqual( "pendiente" );
    });
    it("Por defecto, al crear una tarea no esta terminada", () => {
        var tarea = new Tarea("Segunda tarea");
        expect(tarea.estaTerminada()).toEqual(false);
    }); 
});
