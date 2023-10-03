import buildings from "../buildings";
import { loadRoomPlayers } from "../database/loadRooms";
import rehydrateBuildings from "../helpers/rehydrateBuildings";
import { getVerseHoldings } from "../web3";
import Player from "./Player";

export type RoomName = "Ethereum" | "Goerli" | "Polygon";

class Room {
  private _name: RoomName;

  private _playerList: Player[];

  private _playerSocketMap: Record<string, string>;

  constructor(name: RoomName) {
    this._name = name;
    this._playerSocketMap = {};
    this._playerList = [];
  }

  get name() {
    return this._name;
  }

  get players() {
    return this._playerList;
  }

  get playerSocketMap() {
    return this._playerSocketMap;
  }

  async loadPlayers() {
    const players = await loadRoomPlayers(this.name);

    if (!players) return;
    this._playerList = await Promise.all(
      players.map(async (player) => {
        const rehydratedBuildings = rehydrateBuildings(
          buildings[this._name],
          player.buildings,
        );
        const verseBalance = await getVerseHoldings(player.address, this.name);

        const startDate = new Date(player.updatedAt).getTime();
        const endDate = new Date().getTime();
        const secondsDifference = (endDate - startDate) / 1000;

        return new Player(player.address, rehydratedBuildings, {
          aMPC: player.aMPC,
          aMPF: player.aMPF,
          Clicked: player.Clicked,
          cookies: player.cookies + secondsDifference * player.aMPF,
          Earned: player.Earned + secondsDifference * player.aMPF,
          Spent: player.Spent,
          verseHolder: verseBalance > 0,
        });
      }),
    );

    console.log("Loaded:", this.name);
  }

  getPlayerByAddress(address: string) {
    try {
      const player = this._playerList.find(
        (player) => player.address === address,
      );
      if (!player) throw new Error("No Player Found");
      return player;
    } catch (error: unknown) {
      const err = error as Error;
      console.log(err.message);
    }
  }

  addPlayer(socketId: string, player: Player) {
    Object.keys(this.playerSocketMap).forEach((socket) => {
      if (this.playerSocketMap[socket] === player.address) {
        delete this._playerSocketMap[socket];
      }
    });

    this._playerSocketMap[socketId] = player.address;
    if (!this.getPlayerByAddress(player.address)) {
      this._playerList.push(player);
    }

    console.log("Added player to", this.name);
  }

  getPlayerSocketId(address: string) {
    return Object.keys(this.playerSocketMap).find(
      (key) => this.playerSocketMap[key] === address,
    );
  }

  getPlayerAddress(socketId: string) {
    return this._playerSocketMap[socketId];
  }

  getPlayerBySocketId(socketId: string) {
    const address = this._playerSocketMap[socketId];
    return this.getPlayerByAddress(address);
  }

  removePlayer(socketId: string) {
    delete this._playerSocketMap[socketId];
  }

  hasPlayer(socketId: string) {
    return Object.keys(this._playerSocketMap).includes(socketId);
  }
}

export default Room;
