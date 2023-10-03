import { Socket } from "socket.io";
import savePlayer from "../database/savePlayer";
import { rooms } from "../rooms";

const onDisconnect = (socket: Socket) => {
  console.log("Disconnected:", socket.id);
  Object.values(rooms).forEach((room) => {
    socket.leave(room.name);
    const player = room.getPlayerBySocketId(socket.id);
    if (player) {
      savePlayer(player, room.name);
      room.removePlayer(socket.id);
    }
  });
};

export default onDisconnect;
