import { WebSocketProvider, Contract, formatEther, Interface } from "ethers";

import verseGoerli from "./contracts/verseGoerli";
import { io } from "./socket";
import savePlayer from "./database/savePlayer";
import { RoomName } from "./classes/Room";
import verseEthereum from "./contracts/verseEthereum";
import versePolygon from "./contracts/versePolygon";
import { rooms } from "./rooms";

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const BURN_ADDRESS = "0x0000000000000000000000000000000000000000";

const VERSE: Record<
  RoomName,
  { https: string; wss: string; address: `0x${string}`; abi: Interface }
> = {
  Ethereum: {
    https: "https://mainnet.infura.io/v3/",
    wss: "wss://mainnet.infura.io/ws/v3/",
    address: "0x249ca82617ec3dfb2589c4c17ab7ec9765350a18",
    abi: new Interface(verseEthereum),
  },
  Goerli: {
    https: "https://goerli.infura.io/v3/",
    wss: "wss://goerli.infura.io/ws/v3/",
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
    abi: new Interface(verseGoerli),
  },
  Polygon: {
    https: "https://polygon-mainnet.infura.io/v3/",
    wss: "wss://polygon-mainnet.infura.io/ws/v3/",
    address: "0xc708d6f2153933daa50b2d0758955be0a93a8fec",
    abi: new Interface(versePolygon),
  },
};

const BURN_BONUS_SECONDS: Record<number, number> = {
  15000: 3600, // 1 hour
  150000: 43200, // 12 hours
  280000: 86400, // 24 hours
};

const goerliContract = new Contract(
  VERSE.Goerli.address,
  VERSE.Goerli.abi,
  new WebSocketProvider(`${VERSE.Goerli.wss}${INFURA_API_KEY}`),
);

const ethereumContract = new Contract(
  VERSE.Ethereum.address,
  VERSE.Ethereum.abi,
  new WebSocketProvider(`${VERSE.Ethereum.wss}${INFURA_API_KEY}`),
);

const polygonContract = new Contract(
  VERSE.Polygon.address,
  VERSE.Polygon.abi,
  new WebSocketProvider(`${VERSE.Polygon.wss}${INFURA_API_KEY}`),
);

export const startChainMonitor = async () => {
  goerliContract.on(goerliContract.filters.Transfer, (from, to, _amount) => {
    const amount = formatEther(_amount);
    console.log(from, to, amount);

    if (to === BURN_ADDRESS) {
      const player = rooms.Goerli.getPlayerByAddress(from);

      if (!player) return;

      player.addBonus(BURN_BONUS_SECONDS[Number(amount)]);

      const playerSocketId = rooms.Goerli.getPlayerSocketId(from);

      if (!playerSocketId) return;

      io.to(playerSocketId).emit("bonus", BURN_BONUS_SECONDS[Number(amount)]);

      savePlayer(player, "Goerli");
    }
  });
};

export const getVerseHoldings = async (address: string, network: RoomName) => {
  switch (network) {
    case "Ethereum": {
      const res = await ethereumContract.balanceOf(address);
      const balance = formatEther(res);
      return Number(balance);
    }
    case "Goerli": {
      const res = await goerliContract.balanceOf(address);
      const balance = formatEther(res);
      return Number(balance);
    }
    case "Polygon": {
      const res = await polygonContract.balanceOf(address);
      const balance = formatEther(res);
      return Number(balance);
    }
    default:
      return 0;
  }
};
