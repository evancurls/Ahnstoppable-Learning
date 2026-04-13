import app from "./app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const port = 3000;

// raw http server
const server = createServer(app);

// 2. Attach Socket.io to that server and configure CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "DELETE"]
  }
});

// 3. Make 'io' globally accessible to our Express routes
app.set("io", io);

// 4. Listen for connections (Optional, but great for debugging)
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// 5. IMPORTANT: Start the 'server', not the 'app'!
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});