const fs = require('fs');

/*
// Leer contenido de un archivo
fs.readFile('inde.html', 'utf-8', (err, contenido) => {
    if(err) {
        throw err;
    } else {
        console.log(contenido)
    }
    console.log('Mensaje....')
});
*/

/*
// Canmbiar nombre de archivo
fs.rename('main.html', 'index.html', (err) => {
    if(err){
        throw err;
    }
    console.log('nombre cambiado exitosamente');
});
*/

/*
// Agregar contenido al final de un archivo
fs.appendFile ('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo actualizado!!!');
})
*/ 

/*
// Reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Contenido nuevo', (err) =>{
    if (err){
        throw err;
    }
    console.log('Contenido reemplazado');
})
*/

// Eliminar archivos
fs.unlink('main.html', (err) => {
    if (err){
        throw err;
    }
    console.log('Archivo eliminado...')
})