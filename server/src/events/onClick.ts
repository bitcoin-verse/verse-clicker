import { Socket } from "socket.io";
import { roomMap, rooms } from "../rooms";

const onClick = (socket: Socket) => {
  try {
    if (!rooms[roomMap[socket.id]]?.hasPlayer(socket.id)) {
      return;
    }

    const player = rooms[roomMap[socket.id]].getPlayerBySocketId(socket.id);
    player?.clickCookie();
  } catch (error) {
    console.log("click error", error);
  }
};

export default onClick;
