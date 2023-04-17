const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('input-change', input => {
    console.log(input)
    socket.broadcast.emit('update-input', input);
  });

  socket.on('disconnect', () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  
  res.end();
});

server.listen(8000, () => {
  console.log("running on *:8000");
});

