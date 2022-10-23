function Posicion(posicionx,posiciony){
    this.posicionx=posicionx;
    this.posiciony=posiciony;
    this.estado="Apagado";
    this.estadoActual=function(){
        return this.estado;
    }
}
module.exports=Posicion;