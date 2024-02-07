
const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const PORT = 3300;

const app = express();

const server = createServer(app);

const io = new Server(server , {
  cors: {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    // credentials:true,
  },
})

// can refer git code if gives error 
app.use(cors());

app.get('/' , (req,res) => {
  res.send('Backend Code Running smooth');
})


// can add middleware for io below refering github 

io.on('connection' ,(socket) => {
  console.log('new client created with ' , socket.id);
  socket.emit('socket-connected ' , socket.id);

  socket.on('get-message', ({message, id}) => {
    // console.log('revieved message is ' , message);
    io.emit('send-message' ,{message :message, id: id})
  })

})


server.listen(PORT, () =>{
  console.log('server running on port on ' , PORT);
})