import Tarea from "./Tarea.js"
class ListaTareas{
    constructor() {
        this.ListaTareas = [];
    }

    agregarTarea(titulo,descripcion,categoria,fechaLimite){
        if(titulo!=""){
            var id = this.ListaTareas.length+1;
            var tarea = new Tarea(titulo,descripcion,"tarea-"+id,categoria,fechaLimite);
            if(tarea.fechaLimite==null) this.ListaTareas.push(tarea);
            if (! this.esTareaConFechaPasada(tarea)) this.ListaTareas.push(tarea);
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
        var tarea = this.ListaTareas.find(tarea => tarea.getId()==idTarea); 
        if (tarea == undefined ){
            return new Tarea("");
        }
        return tarea;
    }


    getCantidadTareas(){
        return this.ListaTareas.length;
    }

    getCantidadTareasConDescripcion(){
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion()!="").length;
    }

    

    filtrarPorDescripcion(textoDeFiltro){
        var textoDeFiltro_menor60 = this.controlCantidadPalabrasInFiltro(textoDeFiltro);
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion().toLowerCase().includes(textoDeFiltro_menor60.toLowerCase())).map(tarea=>tarea.getId());
    }
    controlCantidadPalabrasInFiltro(descripcion){
        if (descripcion.split(" ").length > 60 ){
            return descripcion.split(" ").slice(0,60).join(" ")
        }
        return descripcion
    }

    getFechaLimiteTareas(){       
        return this.ListaTareas.map(tarea=>tarea.getFechaLimite());
    }
    
    esTareaConFechaPasada(tarea){
        return tarea.esTareaConFechaPasada();
    }
    
}

export default ListaTareas;