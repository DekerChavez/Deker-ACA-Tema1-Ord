function dinosaurio (nombre, peso, longitud){
    
    let nombreD = nombre;
    let pesoT = peso/1000;
    let longitudP = longitud/3.2;

    return [nombreD, pesoT.toFixed(2), longitudP.toFixed(2)]
}

// console.log(dinosaurio("Rex", 1800, 18));

