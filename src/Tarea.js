class Tarea{
    
    constructor(titulo,descripcion="",id,categoria,fechaLimite=null) {

        this.titulo = titulo;
        this.descripcion = this.controlCantidadPalabras(descripcion);
        this.id = id;  
        this.categoria=categoria;
        this.setFechaLimite(fechaLimite);
    }
    controlCantidadPalabras(descripcion){
        if (descripcion.split(" ").length > 60 ){
            return descripcion.split(" ").slice(0,60).join(" ")
        }
        return descripcion
    }
    getId(){
        return this.id;
    }
    getCategoria(){
        return this.categoria;
    }

    getTitulo(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }

    getFechaLimite(){
        return this.fechaLimite;
    }

    setFechaLimite(fechaLimite){
        if(fechaLimite==null){
            this.fechaLimite = null;
        }else{
            this.fechaLimite = new Date(fechaLimite);
        }   
    }

    esTareaConFechaPasada(){        
        return this.fechaLimite < new Date();
    }

    

}
export default Tarea;
