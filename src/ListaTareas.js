import Tarea from "./Tarea.js"
class ListaTareas{
    constructor() {
        this.ListaTareas = [];
    }

    controlNumeroLetrasTitulo(titulo){
        var validacion=true;
        if(titulo.length>30) 
        {
            validacion=false;
        }
        return validacion;
    }

    agregarTarea(titulo,descripcion,categoria="Sin categoria",fechaLimite){
        if(titulo!=""){
            if(this.controlNumeroLetrasTitulo(titulo)==true){
                var id = this.ListaTareas.length+1;
                var tarea = new Tarea(titulo,descripcion,"tarea-"+id,categoria,fechaLimite);
                if(tarea.fechaLimite==null) this.ListaTareas.push(tarea);
                if (! this.esTareaConFechaPasada(tarea)) this.ListaTareas.push(tarea);
            }   
        }      
    }
    getDescripcionTareas(){
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion()!="").map(tarea=>tarea.getDescripcion());
    }

    
    getTareaConDescripcion(tarea){        
        let titulo = tarea.getTitulo();
        let descripcion = tarea.getDescripcion(); 
        let tareaCompleta = titulo;
        
        /*
        if(descripcion!=""){
            //tareaCompleta = titulo + '&nbsp&nbsp<button class="button-descripcion" id="'+tarea.getId()+'" type="button">Descripcion</button>';          
        } 
        */ 
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
    getListaTitulosTareas(){
        return this.ListaTareas.map(function(tarea){
            return tarea.getTitulo();
        });
    }
    getCategoriaTarea(tituloT){
        let tareaC= this.ListaTareas.find(tarea=>tarea.getTitulo()==tituloT);
        return tareaC.getCategoria();
    }
    filtrarTitulo(tituloABuscado){
        let tituloBuscado= this.ListaTareas.filter(word => word.getTitulo() === tituloABuscado);
         if(tituloBuscado.length == 0){
            return "No existe";
        }
        return tituloBuscado;
    }

    getFechaLimiteTareas(){       
        return this.ListaTareas.map(tarea=>tarea.getFechaLimite());
    }
    
    esTareaConFechaPasada(tarea){
        return tarea.esTareaConFechaPasada();
    }
    filtrarCategorias(categoria){
        let categorias=[]
        //let categorias=  this.ListaTareas.map(word => word.getCategoria() === categoria).getListaTitulosTareas()
       // categorias=categorias.map(tarea => tarea.getTitulo())
         this.ListaTareas.forEach(element => {
            if(element.getCategoria()==categoria){
                categorias.push(element.getTitulo())
            }
        });
        console.log(categorias);
        return categorias;
    }


    
    filtrarPorUnaFecha(fecha){
        return this.ListaTareas.filter(tarea=>tarea.compararFecha(fecha) == true ).map(tarea=>tarea.getId() );
    }
    filtrarPorUnRangoFechas(fechaInicial,fechaFinal){
        let fechaInicial_formato = new Date(fechaInicial);
        let fechaFinal_formato = new Date(fechaFinal);
        fechaInicial_formato.setHours(0,0,0);
        fechaFinal_formato.setHours(23,59,59);
        return this.ListaTareas.filter(tarea=>tarea.getFechaLimite() >= fechaInicial_formato && tarea.getFechaLimite() <= fechaFinal_formato ).map(tarea=>tarea.getId() );
    }
}

export default ListaTareas;