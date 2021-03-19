const app = require("./api/server");

const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// Run when client connects
io.on("connect", (socket) => {
  console.log("New WS Connection");
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server listening on port ${port} ***\n`);
});
