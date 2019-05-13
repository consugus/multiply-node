let fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limit) => {
    return new Promise( (resolve, reject) => {

        if(!Number(base)){
            reject (`El valor introducido para la base: "${base}" no es un número`);
            return;
        }
        if(!Number(limit)){
            reject (`El valor introducido para el límite: "${ limit }" no es un número`);
            return;
        }

        let data = "";

        for(var i = 1 ; i <= limit ; i++ ){
            data += base + "x" + i + " =\t" + (base * i) + "\n";
        };

        let fileName = `Tabla-${base}.txt`;
        fs.writeFile(`./tablas/${fileName}`, data, (err) => {
            if (err) {
                reject(err);
            } else{
                resolve(fileName);
            };

        });

    });
};

let listarTabla = (base, limit) => {
    console.log('===================='.red);
    console.log(`Multiplying table of ${base}`.red);
    console.log('===================='.red);
    // console.log('\n');
    

    if(!Number(base)){
        return (`El valor introducido para la base: "${base}" no es un número`);
    }
    if(!Number(limit)){
        return (`El valor introducido para el límite: "${ limit }" no es un número`);
    }

    for(var i = 1; i <= limit; i++){
        console.log(base + "x" + i + " =\t" + (base * i));
    };

}

module.exports = {
    crearArchivo,
    listarTabla
}

