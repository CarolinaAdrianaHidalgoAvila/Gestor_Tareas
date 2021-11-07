class Tarea{


    controlCantidadPalabras(descripcion){
        if (descripcion.split(" ").length > 60 ){
            return descripcion.split(" ").slice(0,60).join(" ")
        }
        return descripcion
    }
    
    constructor(titulo,descripcion="",id) {

        this.titulo = titulo;
        this.descripcion = this.controlCantidadPalabras(descripcion);
        this.id = id;
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

    

}
export default Tarea;

