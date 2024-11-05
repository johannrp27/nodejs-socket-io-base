import express from 'express';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  socket.emit('message', 'First socket event');
});
