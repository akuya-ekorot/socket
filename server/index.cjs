const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('user connected');
});

server.listen(8000, () => {
  console.log("running on *:8000");
});

