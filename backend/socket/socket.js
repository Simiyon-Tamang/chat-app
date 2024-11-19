import { Server } from "socket.io";
import http, { METHODS } from "http";
import express from "express";
import e from "express";
import { Socket } from "dgram";

const app = express();
const server = http.createServer(app);
const io = new server(server, {
  cors: {
    origin: "http://localhost:3000",
    METHODS: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected: ", socket.id);
  });
});
export { app, io, server };
