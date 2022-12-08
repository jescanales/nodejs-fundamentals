function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes del setImmediate()');

setImmediate(mostrarTema, 'Javascript');

console.log('Después de SetImmediate()');