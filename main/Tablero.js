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
        for(i=verticeSuperior.posicionx;i<verticeInferior.posicionx+1;i++){
            for(j=verticeSuperior.posiciony;j<verticeInferior.posiciony+1;j++){
                console.log("i "+i);
                console.log("j "+j);
                console.log("x "+tablero[i,j].posicionx);
                console.log("y "+tablero[i,j].posiciony);
                (this.tablero[i,j]).cambiarEstado("Encendido");
            }
        }
    }
}

module.exports=Tablero;