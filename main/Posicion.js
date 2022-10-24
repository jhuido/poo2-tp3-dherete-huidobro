function Posicion(posicionx,posiciony){
    if(posicionx>99){
        throw new Error("No se puede crear una posicion con eje en x mayor a 99");
    }
    else if (posiciony>99){
        throw new Error("No se puede crear una posicion con eje en y mayor a 99");
    }
    this.posicionx=posicionx;
    this.posiciony=posiciony;
    this.estado="Apagado";

    this.estadoActual=function(){
        return this.estado;
    }

    this.cambiarEstado=function(estadoACambiar){
        this.estado=estadoACambiar;
    }
    this.cambiarEstadoInverso=function(){
        if(this.estado==="Encendido"){
            this.estado="Apagado";
        }
        else{
            this.estado="Encendido";
        }
    }
}


module.exports=Posicion;