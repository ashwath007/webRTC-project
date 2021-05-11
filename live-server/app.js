const express = require('express');
const socket = require('socket.io');
const app = express();

const port = process.env.PORT || 5000;


const server = app.listen(port, () => {
    console.log(`Server started ${port}`);
});

const io = socket(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST'],

    }
});


io.on('connected', () => {
    socket.emit('connected', null);
    console.log('new user connected');
    console.log(socket.io);

});