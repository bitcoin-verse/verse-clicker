import { loadRooms } from "./rooms";

import { startSocket } from "./socket";
import { startLoop } from "./loop";
import { startChainMonitor } from "./web3";

const start = async () => {
  console.log("Starting");
  await loadRooms();
  console.log("Loaded Rooms from DB");
  startSocket();
  console.log("Started Server");
  startLoop();
  console.log("Started Loop");
  await startChainMonitor();
  console.log("Started Chain Monitor");
};

start();
