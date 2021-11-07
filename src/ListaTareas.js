import Tarea from "./Tarea.js"
import mostrarDescripcion from "./index.js";
class ListaTareas{
    constructor() {
        this.ListaTareas = [];
    }

    agregarTarea(titulo,descripcion){
        var id = this.ListaTareas.length+1;
        var tarea = new Tarea(titulo,descripcion,"tarea-"+id);
        this.ListaTareas.push(tarea);
    }

    getTareaConDescripcion(tarea){        
        let titulo = tarea.getTitulo();
        let descripcion = tarea.getDescripcion(); 
        let tareaCompleta = titulo;
        if(descripcion!=""){
            tareaCompleta = titulo + '&nbsp&nbsp<button class="button-descripcion" id="'+tarea.getId()+'" type="button">Descripcion</button>';          
        }     
        return tareaCompleta;  
    }

    getUlListaTareas(){
        let tareasLi = this.ListaTareas.map(tarea=>"<li>"+this.getTareaConDescripcion(tarea)+"</li>");
        return "<ul>"+tareasLi.join("")+"</ul>";
    }

    getTareaPorId(idTarea){
        console.log(idTarea,"getT",this.ListaTareas[0].getId()==idTarea)
        return this.ListaTareas.find(tarea => tarea.getId()==idTarea);
    }
}

export default ListaTareas;