import Tarea from "./Tarea.js"

class ListaTareas{
    constructor() {
        this.ListaTareas = [];
    }

    agregarTarea(titulo,descripcion){
        if(titulo!=""){
            var id = this.ListaTareas.length+1;
            var tarea = new Tarea(titulo,descripcion,"tarea-"+id);
            this.ListaTareas.push(tarea);
        }      
    }

    getDescripcionTareas(){
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion()!="").map(tarea=>tarea.getDescripcion());
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
        return this.ListaTareas.find(tarea => tarea.getId()==idTarea);
    }

    getCantidadTareas(){
        return this.ListaTareas.length;
    }

    getCantidadTareasConDescripcion(){
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion()!="").length;
    }
}

export default ListaTareas;