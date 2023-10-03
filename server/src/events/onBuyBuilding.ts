import { Socket } from "socket.io";
import { roomMap, rooms } from "../rooms";
import savePlayer from "../database/savePlayer";

const onBuyBuilding = (
  socket: Socket,
  ev: { index: number; amount: number },
) => {
  const room = rooms[roomMap[socket.id]];

  if (!room) {
    console.log("room not found");
    return;
  }

  const player = room.getPlayerBySocketId(socket.id);

  if (!player) {
    console.log("player not found");
    return;
  }

  player.buyBuilding(ev.index, ev.amount);
  socket.emit("buildings_data", player.getBuildingsData());
  savePlayer(player, room.name);
};

export default onBuyBuilding;
