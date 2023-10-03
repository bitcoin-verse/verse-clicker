import { createServer } from "node:http";
import express from "express";
import { Server, Socket } from "socket.io";

import serveIndex from "serve-index";

import onJoin from "./events/onJoin";
import onClick from "./events/onClick";
import onBuyBuilding from "./events/onBuyBuilding";
import onBuyUpgrade from "./events/onBuyUpgrade";
import onDisconnect from "./events/onDisconnect";
import path from "node:path";

const app = express();
const server = createServer(app);

app.use(
  "/",
  express.static(path.join(__dirname, "public")),
  serveIndex(path.join(__dirname, "public"), { icons: true }),
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

export const startSocket = () => {
  io.on("connection", (socket: Socket) => {
    console.log("connected", socket.id);

    socket.on("join", (ev) => onJoin(socket, ev));

    socket.on("click", () => onClick(socket));

    socket.on("buy_building", (ev) => onBuyBuilding(socket, ev));
    socket.on("buy_upgrade", (ev) => onBuyUpgrade(socket, ev));

    socket.on("disconnect", () => onDisconnect(socket));
  });
};

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port`, process.env.PORT || 3000);
});
