const Posicion=require('../main/Posicion.js')

test("Prueba de posicion apagada inicialmente",()=>{
    var posicion=new Posicion(0,0);
    expect(posicion.estadoActual()).toBe("Apagado");
})

test("Que no se puedan crear posiciones fuera del tablero",()=>{

    expect(()=>{var posicion= new Posicion(100,0);}).toThrow(new Error("No se puede crear una posicion con eje en x mayor a 99"));
    expect(()=>{var posicion= new Posicion(0,100);}).toThrow(new Error("No se puede crear una posicion con eje en y mayor a 99"));
})

test("Prender rectangulo de luces",()=>{
    var tablero= new Tablero();
    var posicionVertice1=new Posicion(0,0);
    var posicionVertice2=new Posicion(2,2);
    tablero.encender(posicionVertice1,posicionVertice2)
    expect(posicionVertice1.estadoActual()).toBe("Encendido");
    expect(posicionVertice2.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(0,1);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(0,2);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(1,0);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(1,1);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(1,2);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(2,0);
    expect(posicionAux.estadoActual()).toBe("Encendido");
    var posicionAux=new Posicion(2,1);
    expect(posicionAux.estadoActual()).toBe("Encendido");
})