//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limit = argv.limit;

switch(comando){
    case('list'): {
        listarTabla(base, limit);
        break;
    }
    case('create'): {
        crearArchivo(base, limit)
        .then( archivo => {console.log(`archivo creado:` + ` ${ archivo }`.green) })
        .catch( e => {  console.log('error: ', e); });
        break;
    }
    default: {
        console.log('Unrecognised command');
        break;
    }
}

