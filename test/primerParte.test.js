test("Prueba de posicion apagada inicialmente",()=>{
    var posicion=new Posicion();
    expect(posicion.estadoActual()).toBe("Apagado");
})