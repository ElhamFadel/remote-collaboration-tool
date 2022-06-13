const app = require("express")();
const Server = require("http").Server(app);
const cors = require("cors");
const io = require('socket.io')(Server, {
    cors: {
        origin : "http://localhost:3000"
    }
});
io.on("connection", function(socket) {
  const participants = io.sockets.adapter.rooms.size;
  io.emit('participants', participants);
  socket.on("new-note", function(data) {
    io.emit("new-note", data);
  });
});

app.use(cors({ 
  origin: "http://localhost:3000"
}));


Server.listen(5000, function() {
  console.log("listening on *:5000");
});