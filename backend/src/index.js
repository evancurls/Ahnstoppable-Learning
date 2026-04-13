// src/index.js
// Entry point – wires together Express, Socket.IO, and all route handlers.

require('dotenv').config();
 
const express    = require('express');
const http       = require('http');
const { Server } = require('socket.io');
const cors       = require('cors');
 
const authRoutes      = require('./routes/auth');
const classRoutes     = require('./routes/classes');
const postRoutes      = require('./routes/posts');
const commentRoutes   = require('./routes/comments');
const classroomRoutes = require('./routes/classroom');
const registerSockets = require('./socket');
 
const app    = express();
const server = http.createServer(app);
 
// ── Socket.IO ────────────────────────────────────────────────────────────────
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') ?? '*',
    methods: ['GET', 'POST'],
  },
});
app.set('io', io); // make io accessible inside route handlers via req.app.get('io')
registerSockets(io);
 
// ── Express middleware ────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? '*' }));
app.use(express.json());
 
// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth',                              authRoutes);
app.use('/api/classes',                           classRoutes);
app.use('/api/classes/:classId/posts',            postRoutes);
app.use('/api/posts/:postId/comments',            commentRoutes);
app.use('/api/classes/:classId',                  classroomRoutes);
 
// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
 
// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: 'Not found.' }));
 
// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});