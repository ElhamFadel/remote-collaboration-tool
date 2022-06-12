const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("new-note", function(data) {
    io.emit("new-note", data);
  });
});

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

http.listen(4000, function() {
  console.log("listening on *:4000");
});
