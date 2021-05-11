import socketClient from 'socket.io-client';


const SEVER = 'http://localhost:5000';

var socket;


export const connectWithWebSocket = () => {
    socket = socketClient(SEVER);

    socket.on('connect', () => {
        console.log('sucessfully connected with the server');
        console.log(socket.io);
        console.log(socket.id);

    });
}