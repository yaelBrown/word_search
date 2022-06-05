// https://www.youtube.com/watch?v=ZKEqqIO7n-k

const createServer = require("http").createServer;
const Server = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  io.emit("A New Challenger Appeared!");
  // Sends to all of the clients and the one that made the request at first.
  console.log(`${socket.id}: new connection`);
  /*
    For reference - 
    socket.on("send-message", message => {
      socket.broadcast.emit("recieve message", message)
      // sends to everyone besides the person who initiates it.  
    })
  */
});

httpServer.listen(3000);
