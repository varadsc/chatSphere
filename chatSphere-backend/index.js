
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3300;

// const STATIC_CHANNELS = ['global_notifications', 'global_chat'];
var STATIC_CHANNELS = [{
  name: 'Global chat',
  participants: 0,
  id: 1,
  sockets: []
}, {
  name: 'Funny',
  participants: 0,
  id: 2,
  sockets: []
}];

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

app.get('/getChannels', (req, res) => {
  res.json({
    channels: STATIC_CHANNELS
  })
});


// io.on('connection', (socket) => {
//   console.log('new client connected');
//   socket.emit('connection', null);
// });

io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
  console.log('new client connected');
  socket.emit('connection', null);
  socket.on('channel-join', id => {
      console.log('channel join', id);
      STATIC_CHANNELS.forEach(c => {
          if (c.id === id) {
              if (c.sockets.indexOf(socket.id) == (-1)) {
                  c.sockets.push(socket.id);
                  c.participants++;
                  io.emit('channel', c);
              }
          }
           else
           {
              let index = c.sockets.indexOf(socket.id);
              if (index != (-1)) {
                  c.sockets.splice(index, 1);
                  c.participants--;
                  io.emit('channel', c);
              }
          }
      });

      return id;
  })

  socket.on('send-message', message => {
      io.emit('message', message);
});


});