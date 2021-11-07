import Tarea from "./Tarea.js"
class ListaTareas{
    constructor() {
        this.ListaTareas = [];
    }

    agregarTarea(titulo){
        var tarea = new Tarea(titulo);
        this.ListaTareas.push(tarea);
    }

    getUlListaTareas(){
        let tareasLi = this.ListaTareas.map(tarea=>"<li>"+tarea.getTitulo()+"</li>");
        return "<ul>"+tareasLi.join("")+"</ul>";
    }
    getListaTitulosTareas(){
        return this.ListaTareas.map(function(tarea){
            return tarea.getTitulo();
        });
    }
    filtrarTitulo(tituloBuscado){
        return this.ListaTareas.filter(word => word.getTitulo() === tituloBuscado);
    }


}

export default ListaTareas;