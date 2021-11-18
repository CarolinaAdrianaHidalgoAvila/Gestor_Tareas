class Tarea{
    
    constructor(titulo,descripcion="",id,categoria,fechaLimite=null,etiquetas="") {

        this.titulo = titulo;
        this.descripcion = this.controlCantidadPalabras(descripcion);
        this.id = id;  
        this.categoria=categoria;
        this.etiquetas = etiquetas;
        this.setFechaLimite(fechaLimite);
        this.estaPendiente = true;
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
    validarLongitud(etiquetas){
        let etiquetasValidadas=etiquetas;
        if(etiquetas.length>60){
            etiquetasValidadas=etiquetas.substr(0,60);
        }
        return etiquetasValidadas;
    }
    
    getEtiquetas(){
        //redes,vpn,vlans -> [#redes #vpn #vlans]
        let arrayEtiquetas=[]
        //console.log("*"+this.etiquetas+"*");
        if(this.etiquetas!=""){
            let etiquetas = this.validarLongitud(this.etiquetas);
            let totalEtiquetas = etiquetas.split(",");
            totalEtiquetas.forEach(element => {
                let etiqueta="#"+element;
                etiqueta=etiqueta.replace(",","");
                if(etiqueta.length>1){
                    arrayEtiquetas.push(etiqueta);
                }
            });
        }
        return arrayEtiquetas;
    }

    setFechaLimite(fechaLimite){
        if(fechaLimite==null|| fechaLimite==""){
            this.fechaLimite = null;
        }else{
            this.fechaLimite = new Date(fechaLimite);
        }   
    }

    esTareaConFechaPasada(){        
        return this.fechaLimite < new Date();
    }

    compararFecha(fecha){
        let fecha_formato = new Date(fecha)
        return this.fechaLimite.getDate() == fecha_formato.getDate() && this.fechaLimite.getMonth() == fecha_formato.getMonth() && this.fechaLimite.getFullYear() == fecha_formato.getFullYear();
    }

    esFechaLimiteNulo(){
        return this.fechaLimite==null || this.fechaLimite=="";
    }

    getEstado(){
        let estadoTarea = "pendiente";
        if(!this.estaPendiente) estadoTarea = "terminada";
        return estadoTarea;
    }

    estaTerminada(){
        return !this.estaPendiente;
    }

    terminar(){
        this.estaPendiente = false;
    }


}
export default Tarea;
