import { FRAME_RATE } from "./constants";
import { rooms } from "./rooms";
import { io } from "./socket";

export const startLoop = () => {
  setInterval(() => {
    Object.values(rooms).forEach((room) => {
      io.to(room.name).emit(
        "leaderboard",
        room.players
          .map((player) => ({
            address: player.address,
            stats: player.cookieStats,
          }))
          .sort((a, b) => b.stats.Earned - a.stats.Earned),
      );

      room.players.forEach((player) => {
        player.earnCookies(player.aMPF / FRAME_RATE);

        const playerSocket = room.getPlayerSocketId(player.address);
        if (!playerSocket) return;

        io.to(playerSocket).emit("info", {
          cookies: player.cookies,
          cps: player.aMPF,
          cpc: player.verseHolder ? player.aMPC * 10 : player.aMPC,
          stats: player.cookieStats,
          verseHolder: player.verseHolder,
        });
      });
    });
  }, 1000 / FRAME_RATE);
};
