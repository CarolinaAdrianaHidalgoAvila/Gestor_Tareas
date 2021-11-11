import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Filtrar tarea por descripción", () => {
    //CC1
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("tarea fisica","Comprar utencilios para laboratorio")      
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-2"]);
    }); 
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("tarea fisica","Hacer formulario y la practica")
        expect(  listaTareas.filtrarPorDescripcion("Comprar el peluche de gato o un kit de maquillaje")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")    
        expect(  listaTareas.filtrarPorDescripcion("Comprar")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("tarea fisica","Hacer formulario y la practica")    
        expect(  listaTareas.filtrarPorDescripcion("Comprar")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("comprar el peluche")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("comprar")).toEqual(["tarea-1","tarea-3"]);
    });

    

    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente, independiente si el filtro esta en minúsculas o mayúsculas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("hacertarea mate","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ") 
        listaTareas.agregarTarea("cumpleaños amiga","COMPRAR EL HELADO DE COCO QUE LE GUSTA")
        listaTareas.agregarTarea("cumpleaños hermana","Ayer mama dijo, comprar manilla rosada de la revista tone")   
        expect(  listaTareas.filtrarPorDescripcion("comprar")).toEqual(["tarea-2","tarea-3","tarea-4"]);
    });
    it("Deberia devolver solo las tareas que tengan en su descripcion el filtro correspondiente, independiente si el filtro esta en minúsculas o mayúsculas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("hacertarea mate","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ") 
        listaTareas.agregarTarea("cumpleaños amiga","COMPRAR EL HELADO DE COCO QUE LE GUSTA")
        listaTareas.agregarTarea("cumpleaños hermana","Ayer mama dijo, comprar manilla rosada de la revista tone")   
        expect(  listaTareas.filtrarPorDescripcion("COMPRAR")).toEqual(["tarea-2","tarea-3","tarea-4"]);
    });
    // CC2
    it("Deberia devolver lista vacia si no existe tarea con descripción dado en el filtro", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("cumpleaños amiga","Comprar el peluche de gato o un kit de maquillaje")
        listaTareas.agregarTarea("cumpleaños hermana","")
        listaTareas.agregarTarea("tarea fisica","Faltan utencilios, de debe comprar más ")    
        expect(  listaTareas.filtrarPorDescripcion("helado")).toEqual([]);
    });
    it("Deberia devolver lista vacia si no existe tarea con descripción dado en el filtro", () => {
        var listaTareas = new ListaTareas();
        expect(  listaTareas.filtrarPorDescripcion("helado")).toEqual([]);
    });

    // CC3
    it("Deberia devolver lista vacia si el filtro esta vacio", () => {
        var listaTareas = new ListaTareas();
        expect(  listaTareas.filtrarPorDescripcion("")).toEqual([]);
    });
    it("Deberia devolver lista vacia si el filtro esta vacio", () => {
        var listaTareas = new ListaTareas();
        expect(  listaTareas.filtrarPorDescripcion(" ")).toEqual([]);
    });

    // CC4
    it("No debe permitir filtrar un texto de más de 60 palabras", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("teoria de quimica","La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia ya sea en forma de elementos, compuestos, mezclas u otras especies, así como los cambios que esta experimenta durante las reacciones y su relación con la energía química.1​ Linus Pauling la define como la ciencia que estudia las sustancias, su estructura (tipos y formas de acomodo de los átomos), sus propiedades y las reacciones que las transforman en otras sustancias en referencia con el tiempo.2​ La química se ocupa principalmente de las agrupaciones supratómicas, como son los gases, las moléculas, los cristales y los metales, estudiando su composición, propiedades estadísticas, transformaciones y reacciones. La química también incluye la comprensión de las propiedades e interacciones de la materia a escala atómica.")
        expect(  listaTareas.filtrarPorDescripcion("La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia ya sea en forma de elementos, compuestos, mezclas u otras especies, así como los cambios que esta experimenta durante las reacciones y su relación con la energía química.1​ Linus Pauling la define como la ciencia que estudia las sustancias, su estructura (tipos y formas de acomodo de los átomos), sus propiedades y las reacciones que las transforman en otras sustancias en referencia con el tiempo.2​ La química se ocupa principalmente de las agrupaciones supratómicas, como son los gases, las moléculas, los cristales y los metales, estudiando su composición, propiedades estadísticas, transformaciones y reacciones. La química también incluye la comprensión de las propiedades e interacciones de la materia a escala atómica.")).toEqual(["tarea-1"]);
    });
    it("No debe permitir filtrar un texto de más de 60 palabras", () => {
        var listaTareas = new ListaTareas();
        var textoDescripcion = "Con un peso de 5 kg, el cerebro del elefante es el más grande de los animales terrestres. Se le atribuyen una gran variedad de comportamientos asociados a la inteligencia como el duelo, altruismo, adopción, juego, uso de herramientas,7​ compasión y autorreconocimiento.8​ Los elefantes pueden estar a la par con otras especies inteligentes como los cetáceos9​ y algunos primates.10​ Las áreas más grandes en su cerebro están encargadas de la audición, el gusto y la movilidad. "
        listaTareas.agregarTarea("ver documental elefante",textoDescripcion)
        expect(  listaTareas.filtrarPorDescripcion(textoDescripcion)).toEqual(["tarea-1"]);
    });
    it("No debe permitir filtrar un texto de más de 60 palabras", () => {
        var listaTareas = new ListaTareas();
        var textoDescripcion = "Con un peso de 5 kg, el cerebro del elefante es el más grande de los animales terrestres. Se le atribuyen una gran variedad de comportamientos asociados a la inteligencia como el duelo, altruismo, adopción, juego, uso de herramientas,7​ compasión y autorreconocimiento.8​ Los elefantes pueden estar a la par con otras especies inteligentes como los cetáceos9​ y algunos primates.10​ Las áreas más grandes en su cerebro están encargadas de la audición, el gusto y la movilidad. "
        listaTareas.agregarTarea("ver documental elefante",textoDescripcion)
        listaTareas.agregarTarea("ver documental mamiferos",textoDescripcion)
        expect(  listaTareas.filtrarPorDescripcion(textoDescripcion)).toEqual(["tarea-1","tarea-2"]);
    });
    it("No debe permitir filtrar un texto de más de 60 palabras", () => {
        var listaTareas = new ListaTareas();
        var textoDescripcion = "Con un peso de 5 kg, el cerebro del elefante es el más grande de los animales terrestres. Se le atribuyen una gran variedad de comportamientos asociados a la inteligencia como el duelo, altruismo, adopción, juego, uso de herramientas,7​ compasión y autorreconocimiento.8​ Los elefantes pueden estar a la par con otras especies inteligentes como los cetáceos9​ y algunos primates.10​ Las áreas más grandes en su cerebro están encargadas de la audición, el gusto y la movilidad. "
        listaTareas.agregarTarea("ver documental elefante",textoDescripcion)
        listaTareas.agregarTarea("ver documental mamiferos",textoDescripcion)
        listaTareas.agregarTarea("limpiar cuarto"," cambiar sabanas y comprar un basurero bonito")
        expect(  listaTareas.filtrarPorDescripcion(textoDescripcion)).toEqual(["tarea-1","tarea-2"]);
    });

});