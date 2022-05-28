// Referencia de html
const lblOnline = document.querySelector('#lblOnline')
const lblOffline =document.querySelector('#lblOffline')

const socket = io();


socket.on('connect',()=>{
    console.log('conectado');
    lblOffline.style.display= 'none';
    lblOnline.style.display='';
});

socket.on('disconnect',()=>{
    console.log('Desconecado del servidor');
    lblOffline.style.display= '';
    lblOnline.style.display='none';
})

