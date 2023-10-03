import { Socket } from "socket.io";
import loadPlayer from "../database/loadPlayer";
import Player from "../classes/Player";
import savePlayer from "../database/savePlayer";
import buildings from "../buildings";
import rehydrateBuildings from "../helpers/rehydrateBuildings";
import { RoomName } from "../classes/Room";
import { roomMap, rooms } from "../rooms";
import { getVerseHoldings } from "../web3";

const onJoin = async (
  socket: Socket,
  ev: { address: string; chain: RoomName },
) => {
  try {
    if (!Object.keys(rooms).includes(ev.chain)) {
      throw new Error(`Room name ${ev.chain} doesn't exist`);
    }

    const data = await loadPlayer(ev.address, ev.chain);
    const verseBalance = await getVerseHoldings(ev.address, ev.chain);

    const startDate = new Date(data?.updatedAt || 0).getTime();
    const endDate = Date.now();
    const secondsDifference = (endDate - startDate) / 1000;
    console.log(startDate, endDate, secondsDifference);
    const player = new Player(
      ev.address,
      data
        ? rehydrateBuildings(buildings[ev.chain], data.buildings)
        : buildings[ev.chain],
      data
        ? {
            cookies: data.cookies + secondsDifference * data.aMPF,
            aMPC: data.aMPC,
            aMPF: data.aMPF,
            Clicked: data.Clicked,
            Earned: data.Earned + secondsDifference * data.aMPF,
            Spent: data.Spent,
            verseHolder: verseBalance > 0,
          }
        : undefined,
    );

    player.recalculateCPS();

    Object.values(rooms).forEach((room) => {
      socket.leave(room.name);
      if (room.hasPlayer(socket.id)) {
        savePlayer(player, room.name);
        room.removePlayer(socket.id);
      }
    });

    socket.join(ev.chain);

    rooms[ev.chain].addPlayer(socket.id, player);

    roomMap[socket.id] = ev.chain;

    if (data) {
      socket.emit("welcome_back", {
        seconds: secondsDifference,
        cookies: secondsDifference * data.aMPF,
      });
    }

    socket.emit("buildings_data", player.getBuildingsData());
    console.log("Joined: ", ev.chain, ev.address);
  } catch (error: unknown) {
    const err = error as Error;

    console.log("Error joining", err.message);

    socket.disconnect();
  }
};

export default onJoin;
