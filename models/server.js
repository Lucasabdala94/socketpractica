
const express = require('express');

const cors = require('cors');


class Server {

    constructor(){
        //genero el servidor con express
        this.app=express();
        //hago visible el puerto que se encuentra en .env
        this.port = process.env.PORT;
        //implementamos socket.io con express
        this.server = require('http').createServer(this.app);
        // creo propiedad... esta me permite enviar mensajes a todos los usuarios
        this.io = require('socket.io')(this.server);

        
        this.paths = {
        }
        //Middleweres invocamos el metodos con los middlewers
        this.middlewares();
        //invoco metodos que configura las rutas de la aplicacion
        this.routes();


        // configuracion de sockets
        this.sockets();
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
    sockets(){
        this.io.on('connection', socket => {
            console.log('cliente conectado', socket.id);

            socket.on('disconnect',()=>{
                console.log('Cliente desconectado',socket.id)
            });

        });
    }

    //metodo para escuchar el servidor e imprime el puerto
    listen(){
        this.server.listen(this.port,()=>{
            console.log('Servidor en Puerto',this.port);
        })
    }



}

module.exports = Server;