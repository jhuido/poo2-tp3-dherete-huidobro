const Posicion = require("./Posicion");

function Tablero(){
    this.tablero=[];
    this.crearTablero=function(){
        var i=0;
        var j=0;
        for(i;i<100;i++){
            for(j;j<100;j++){
                this.tablero[i,j]=new Posicion(i,j);
            }
        }
        return "Tablero Creado";
    }
    this.encender=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posicionx;
        var j=verticeSuperior.posiciony;
        console.log(j);
        for(i;i<verticeInferior.posicionx+1;i++){
            for(j;j<verticeInferior.posiciony+1;j++){
                (this.tablero[i,j]).cambiarEstado("Encendido");
            }
        }
    }
    this.apagar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posicionx;i<verticeInferior.posicionx+1;i++){
            for(j=verticeSuperior.posiciony;j<verticeInferior.posiciony+1;j++){
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
        var i=0;
        var j=0;
        for(i;i<100;i++){
            for(j;j<100;j++){
                if((this.tablero[i,j]).estadoActual()=="Encendido"){
                    cont=cont+1;
                }
            }
        }
        return cont;
    }
}

module.exports=Tablero;