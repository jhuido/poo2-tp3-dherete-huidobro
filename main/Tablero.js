const Posicion = require("./Posicion");

function Tablero(){
    this.tablero=[];
    this.crearTablero=function(){
        for(i=0;i<99;i++){
            for(j=0;j<99;j++){
                this.tablero[i,j]=new Posicion(i,j);
            }
        }
        return "Tablero Creado";
    }
    this.encender=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<verticeInferior.posiciony+1;i++){
            for(j=verticeSuperior.posicionx;j<verticeInferior.posicionx+1;j++){
                (this.tablero[i,j]).cambiarEstado("Encendido");
            }
        }
    }
}

module.exports=Tablero;