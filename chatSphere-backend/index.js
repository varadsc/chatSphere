
const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const PORT = 3300;

const app = express();
app.use(cors());

const server = createServer(app);

let connectedUsersList = [];

const io = new Server(server
//    , {
//   cors: {
//     origin: ['https://chat-sphere-frontend.vercel.app/' ,'http://localhost:5173', 'http://localhost:5174' ], 
//     methods: ['GET', 'POST'],
//     // credentials:true,
//   },
// }
)

// can refer git code if gives error 

app.get('/' , (req,res) => {
  res.send('Backend Code Running smooth');
})


// can add middleware for io below refering github 

io.on("connection" ,(socket) => {
  console.log('new client created with ' , socket.id);
  // socket.emit('socket-connected ' , socket.id);

  socket.on('send-msg-socket', (messageData) => {
    socket.to(messageData.recieverId).emit('get-msg-socket' ,messageData)
  })

  socket.on('add-connected-user', (userInfo) => {
    connectedUsersList.push(userInfo)
    console.log(connectedUsersList, 'list');
    io.emit('send-all-users', connectedUsersList);
  })

  socket.on("disconnect", () => {
    // const RemovedUserList = connectedUsersList.filter((el) => el.id === socket.id)
    const result = connectedUsersList.filter(obj => obj.id != socket.id);
    connectedUsersList = result;
    console.log("User Disconnected", socket.id);
  });

})

server.listen(PORT, () =>{
  console.log('server running on port on ' , PORT);
})