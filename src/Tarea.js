class Tarea{
<<<<<<< HEAD
    constructor(titulo) {
        this.titulo = titulo;
=======


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
>>>>>>> 056bc7a0a6f64998653bb9c1fbdb346bb63b8152
    }

    getTitulo(){
        return this.titulo;
    }
<<<<<<< HEAD
}
export default Tarea;
=======

    getDescripcion(){
        return this.descripcion;
    }

    

}
export default Tarea;

>>>>>>> 056bc7a0a6f64998653bb9c1fbdb346bb63b8152
