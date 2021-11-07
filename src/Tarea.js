class Tarea{
    constructor(titulo,descripcion="",id) {
        this.titulo = titulo;
        this.descripcion = descripcion;
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

