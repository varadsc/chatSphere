
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3300;

const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

const server = app.listen(PORT, () => {
  console.log('Server running! on port ', PORT);
});

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173', // Adjust this to your frontend application's origin
    methods: ['GET', 'POST'],
  },
});

app.use(cors()); // Specify the allowed origin

app.get('', (req, res) => {
  res.send('Hello world');
});

io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);
});
