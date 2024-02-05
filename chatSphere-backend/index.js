const express = require('express');
const app = express();
const PORT = 3300;

const socketio = require('socket.io');

app.get('' , (req,res) => {
    res.send("Hello world");
})

const server = app.listen(3300, () => {
    console.log('Server running!')
});

const io = socketio(server)

io.on('connection', (socket) => {
    console.log('New connection')
})


// app.listen(3300)