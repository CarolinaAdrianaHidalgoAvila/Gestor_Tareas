class Tarea{


    controlCantidadPalabras(descripcion){
        if (descripcion.split(" ").length > 60 ){
            return descripcion.split(" ").slice(0,60).join(" ")
        }
        return descripcion
    }
    
    constructor(titulo,descripcion="",id,categoria,fechaLimite=null) {

        this.titulo = titulo;
        this.descripcion = this.controlCantidadPalabras(descripcion);
        this.id = id;  
        this.setFechaLimite(fechaLimite);
    }

    getId(){
        return this.id;
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

    

}
export default Tarea;

