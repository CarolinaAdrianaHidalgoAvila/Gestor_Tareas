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
}

export default ListaTareas;