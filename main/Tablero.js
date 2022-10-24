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
    this.apagar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<verticeInferior.posiciony+1;i++){
            for(j=verticeSuperior.posicionx;j<verticeInferior.posicionx+1;j++){
                (this.tablero[i,j]).cambiarEstado("Apagado");
            }
        }
    }

    this.cambiar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posicionx;i<verticeInferior.posicionx+1;i++){
            for(j=verticeSuperior.posiciony;j<verticeInferior.posiciony+1;j++){

                if(this.tablero[i,j].estadoActual()==="Apagado"){
                    (this.tablero[i,j]).cambiarEstado("Encendido");
                }
                else{
                    (this.tablero[i,j]).cambiarEstado("Apagado");
                }
            }
        }
    }

    this.cantidadEncendidas=function(){
        var cont=0;
        for(i=0;i<99;i++){
            for(j=0;j<99;j++){
                if(this.tablero[i,j].estadoActual()==="Encendido"){
                    cont+=1;
                }
            }
        }
        return cont;
    }
}

module.exports=Tablero;