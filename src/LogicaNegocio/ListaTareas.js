import Tarea from "../LogicaNegocio/Tarea.js"

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

    agregarTarea(titulo,descripcion,categoria="Sin categoria",fechaLimite,etiquetas=""){
        if(titulo!=""){
            if(this.controlNumeroLetrasTitulo(titulo)==true){
                var id = this.ListaTareas.length+1;
                var tarea = new Tarea(titulo,descripcion,"tarea-"+id,categoria,fechaLimite,etiquetas);
                if(tarea.fechaLimite==null) this.ListaTareas.push(tarea);
                if (! this.esTareaConFechaPasada(tarea)) this.ListaTareas.push(tarea);
            }   
        }      
    }
    getDescripcionTareas(){
        return this.ListaTareas.filter(tarea=>tarea.getDescripcion()!="").map(tarea=>tarea.getDescripcion());
    }
    getEtiquetasTareas(){
        return this.ListaTareas.filter(tarea=>tarea.getEtiquetas()!=[]).map(tarea=>tarea.getEtiquetas());
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
    filtrarTitulo(tituloABuscado, ){
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

    filtrarCategoriasLista(categoria){
        return this.ListaTareas.filter(element => element.getCategoria() === categoria);
    }

    filtrarCategorias(categoria){
        let categorias=[]
         this.ListaTareas.forEach(element => {
            if(element.getCategoria()==categoria){
                categorias.push(element.getTitulo())
            }
        });
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

    agregarBotonDescripcionSiTiene(tarea){
        if(tarea.getDescripcion()=="") return "";
        return '</span><button class="btn-descripcion" id="'+tarea.getId()+'">Descripcion</button>';
    }

    getFechaLimiteValida(tarea){
        if(tarea.esFechaLimiteNulo()){
            return "";
        }
        return tarea.getFechaLimite().toLocaleString();
    }

    getListaTareasHtml(){        
        let tareasLi = this.ListaTareas.map(tarea=>"<li>"+tarea.getTitulo()+'['+tarea.getCategoria()+']'+'<span class = "etiquetas">'+tarea.getEtiquetas()+'</span>'+'<span class="fecha-limite">'+this.getFechaLimiteValida(tarea)+this.agregarBotonDescripcionSiTiene(tarea)+this.agregarCheckEstado(tarea)+'</li>');
        return "<ul>"+tareasLi.join("")+"</ul>";       
    }

    getListaDesdeJson(listaJson){
        if(listaJson.length==0 || listaJson=="No existe"){            
            return new ListaTareas();  
        }
        let listaNueva = new ListaTareas();        
        listaJson.forEach((elementoLista)=>{          
            let tarea = new Tarea(elementoLista["titulo"],elementoLista["descripcion"],elementoLista["id"],elementoLista["categoria"],elementoLista["fechaLimite"],elementoLista["etiquetas"]);           
            if(!elementoLista["estaPendiente"]) tarea.terminar();
            listaNueva.agregarTareaConId(tarea);
        })
        return listaNueva;
    }

    
    agregarTareaConId(tarea){
        this.ListaTareas.push(tarea);
    }

    getListaPorIds(listaIds){
        let listaNueva = new ListaTareas();                
        listaIds.forEach((idTarea)=>{            
            let tarea = this.getTareaPorId(idTarea);
            listaNueva.agregarTareaConId(tarea);
        })
        return listaNueva;
    }

    getEstadosTareas(){
        return this.ListaTareas.map(tarea=>tarea.getEstado());
    }
    
    agregarCheckEstado(tarea){
        let disabled="";
        if(tarea.estaTerminada()){
            disabled="disabled";
        }
        return '<input class="checkbox-terminada" type="checkbox" id="'+tarea.getId()+'" value="terminada "'+disabled+'></input>'
    }
    filtrarPorEtiquetas(textoDeFiltro){
        let arrayTareas= [];
        if(textoDeFiltro.length<=20){
            textoDeFiltro = textoDeFiltro.substr(1,textoDeFiltro.length)
            this.ListaTareas.forEach(tarea => {
                let etiquetas = tarea.getEtiquetas();
                    etiquetas.forEach(etiqueta => {
                        if(etiqueta.toLowerCase().includes(textoDeFiltro.toLowerCase())){
                            arrayTareas.push(tarea.getId())
                        }
                    });
        });
        }
        return arrayTareas;
    }
    tareasCompletadasPorEtiqueta(textoDeFiltro){
        let tareasCompletadas=[];
        let idTareasPorEtiqueta = this.filtrarPorEtiquetas(textoDeFiltro);
        let tareasPorEtiqueta = this.getListaPorIds(idTareasPorEtiqueta);
        let tareasPorEtiquetaTerminadas = tareasPorEtiqueta.getEstadosTareas();
        tareasPorEtiquetaTerminadas.forEach(element => {
            if(element=="terminada"){
                tareasCompletadas.push(element);  
            }
        });
        let porcentaje = (tareasCompletadas.length/(tareasPorEtiqueta.getCantidadTareas()))*100
        let num= [tareasCompletadas.length, porcentaje+"%"];
        
        return num;
    }

    filtrarPorEstado(tipoEstado){
        if (tipoEstado == "todas"){
            return this.ListaTareas.map(tarea=>tarea.getId());
        }
        return this.ListaTareas.filter(tarea=>tarea.getEstado() == tipoEstado ).map(tarea=>tarea.getId() ); 
    }

    getArrayEstadisticasTerminadasPorCategoria(categoria){
        var tareasCategoria =  this.ListaTareas.filter(tarea=>tarea.getCategoria() == categoria);
        var cantidadTotalTareasCategoria = tareasCategoria.length;
        if (cantidadTotalTareasCategoria==0) return [categoria]=[0,"0%"];
        var cantidadTerminadasTareasCategoria =  tareasCategoria.filter(tarea=>tarea.estaTerminada()).length;  
        var porcentajeTareasCategoriaTerminadas = cantidadTerminadasTareasCategoria/cantidadTotalTareasCategoria; 
        return [cantidadTerminadasTareasCategoria,`${porcentajeTareasCategoriaTerminadas.toFixed(2)*100}%`]
    }    

    tareasTerminadasPorCategoria(){   
        var cantidadTareasCategoriaTerminadas={};              
        cantidadTareasCategoriaTerminadas["Personal"]=this.getArrayEstadisticasTerminadasPorCategoria("Personal");
        cantidadTareasCategoriaTerminadas["Trabajo"]=this.getArrayEstadisticasTerminadasPorCategoria("Trabajo");
        cantidadTareasCategoriaTerminadas["Estudio"]=this.getArrayEstadisticasTerminadasPorCategoria("Estudio");
        cantidadTareasCategoriaTerminadas["Sin categoria"]=this.getArrayEstadisticasTerminadasPorCategoria("Sin categoria");        
        return cantidadTareasCategoriaTerminadas;
    }

}

export default ListaTareas;