
const express = require('express');

const cors = require('cors');


class Server {

    constructor(){
        //genero el servidor con express
        this.app=express();
        //hago visible el puerto que se encuentra en .env
        this.port = process.env.PORT;

        
        this.paths = {
        }
        //Middleweres invocamos el metodos con los middlewers
        this.middlewares();
        //invoco metodos que configura las rutas de la aplicacion
        this.routes();
    }

    //metodo de middlewares
    middlewares(){
        
       //configuracion para recibir todas las solicitudes
        this.app.use(cors());

        //hago publica la carpeta public => creo directorio publico
        this.app.use(express.static('public'))

    }

    //metodo para llamar las rutas
    routes(){
        
    }
    //metodo para escuchar el servidor e imprime el puerto
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor en Puerto',this.port);
        })
    }



}

module.exports = Server;