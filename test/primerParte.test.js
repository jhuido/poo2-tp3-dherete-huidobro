

const Posicion=require('../main/Posicion.js');
const Tablero=require('../main/Tablero');

test("Prueba de posicion apagada inicialmente",()=>{
    var posicion=new Posicion(0,0);
    expect(posicion.estadoActual()).toBe("Apagado");
})

test("Que no se puedan crear posiciones fuera del tablero",()=>{

    expect(()=>{var posicion= new Posicion(100,0);}).toThrow(new Error("No se puede crear una posicion con eje en x mayor a 99"));
    expect(()=>{var posicion= new Posicion(0,100);}).toThrow(new Error("No se puede crear una posicion con eje en y mayor a 99"));
})

test("Crear tablero",()=>{
    var tablero= new Tablero();
    expect(tablero.crearTablero()).toBe("Tablero Creado");
    expect(tablero.tablero[0,1].estadoActual()).toBe("Apagado");
})

test("Funcion encender caso cuadrado",()=>{
    var verticeSuperior=new Posicion(0,0);
    var verticeInferior=new Posicion(2,2);
    var tablero= new Tablero();
    tablero.crearTablero();
    tablero.encender(verticeSuperior,verticeInferior);
    expect(tablero.tablero[0,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[0,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[0,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,2].estadoActual()).toBe("Encendido");

})

test("Funcion encender caso lineal",()=>{
    var verticeSuperior=new Posicion(1,2);
    var verticeInferior=new Posicion(3,2);
    var tablero= new Tablero();
    tablero.crearTablero();
    tablero.encender(verticeSuperior,verticeInferior);
    expect(tablero.tablero[1,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[3,2].estadoActual()).toBe("Encendido");

})

test("Apagar rectangulo",()=>{
    var verticeSuperior=new Posicion(0,1);
    var verticeInferior=new Posicion(2,2);
    var tablero= new Tablero();
    tablero.crearTablero();
    tablero.encender(verticeSuperior,verticeInferior);
    tablero.apagar(verticeSuperior,verticeInferior);
    expect(tablero.tablero[0,1].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[0,2].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[1,1].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[1,2].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[2,1].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[2,2].estadoActual()).toBe("Apagado");
})

test("Cambiar rectangulo de luces",()=>{
    var verticeSuperior=new Posicion(0,0);
    var verticeInferior=new Posicion(2,2);
    var tablero= new Tablero();

    tablero.crearTablero();
    const cam=0;

    tablero.encender(verticeSuperior,verticeInferior);
    expect(tablero.tablero[0,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[0,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[0,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,2].estadoActual()).toBe("Encendido");


    var verticeSup2=new Posicion(0,1);
    var verticeInf2=new Posicion(2,1);
    tablero.apagar(verticeSup2,verticeInf2);

    tablero.cambiar();
    expect(tablero.tablero[0,0].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[0,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[0,2].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[1,0].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[1,1].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[1,2].estadoActual()).toBe("Apagado");
    expect(tablero.tablero[2,0].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,1].estadoActual()).toBe("Encendido");
    expect(tablero.tablero[2,2].estadoActual()).toBe("Encendido");

})
/*
test("Cantidad encendidas",()=>{
    var tablero= new Tablero();
    tablero.crearTablero();
    var verticeSuperior=new Posicion(0,0);
    var verticeInferior=new Posicion(2,2);
    tablero.encender(verticeSuperior,verticeInferior);

    expect(tablero.cantidadEncendidas()).toBe(9)
})*/