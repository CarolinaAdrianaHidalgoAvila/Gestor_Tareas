import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
 
describe("Filtrar tarea por descripción", () => {
    //CC1
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-07T23:29");     
        expect(  listaTareas.filtrarPorUnaFecha("2022-10-07T00:00")).toEqual(["tarea-1"]);
    }); 
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a trotar","En la plaza y en la cancha","","2021-12-07T23:29");     
        expect(  listaTareas.filtrarPorUnaFecha("2021-12-07T00:00")).toEqual(["tarea-1"]);
    });
    it("Deberia devolver solo las tareas de una fecha especifica (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        listaTareas.agregarTarea("ir a correr","correr 50 minutos","","2022-03-19T20:29");
        expect(  listaTareas.filtrarPorUnaFecha("2022-11-07T00:00")).toEqual(["tarea-1","tarea-2"]);
    }); 
    // CC2
    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T22:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T00:00","2022-11-07T23:59")).toEqual(["tarea-2"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T22:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T00:00","2022-12-07T23:59")).toEqual(["tarea-1","tarea-2"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T23:29");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T00:00","2022-12-07T23:59")).toEqual(["tarea-1","tarea-2"]);
    });

    it("Deberia devolver solo las tareas que tengan fecha limimite dentro de un rango especifico de fechas (filtro por fecha)", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T00:00");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T00:00","2022-12-07T23:59")).toEqual(["tarea-1","tarea-2"]);
    });
    
    it("Se deberia filtrar desde el inicio  hasta el final de las fechas espeficadas, indiferente de la hora", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T00:00");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T23:59","2022-12-07T23:59")).toEqual(["tarea-1","tarea-2"]);
    });
    it("Se deberia filtrar desde el inicio  hasta el final de las fechas espeficadas, indiferente de la hora", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-12-07T23:59");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-11-07T00:00");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-07T00:00");
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T13:59","2022-12-07T03:59")).toEqual(["tarea-1","tarea-2"]);
    });

    // CC3
    it("Deberia devolver lista vacia si no se filtra la fecha espeficificada", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-07T23:29");     
        expect(  listaTareas.filtrarPorUnaFecha("2019-11-07T00:00")).toEqual([]);
    }); 
    it("Deberia devolver lista vacia si no se filtra la fecha espeficificada", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-07T23:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-10T23:29"); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-11T23:29");      
        expect(  listaTareas.filtrarPorUnaFecha("2022-10-12T23:29")).toEqual([]);
    }); 
    it("Deberia devolver lista vacia si no existe tarea en el rango de fechas espeficificadas", () => {
        var listaTareas = new ListaTareas(); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-07T23:29");
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-10T23:29"); 
        listaTareas.agregarTarea("ir a piscina","nadar 50 minutos","","2022-10-11T23:29");      
        expect(  listaTareas.filtrarPorUnRangoFechas("2022-11-07T23:59","2022-12-07T23:59")).toEqual([]);
    });
});