import Player from "../../classes/Player";

class PlayerClass {
  address: string;
  roomName: string;
  cookies: number;
  Earned: number;
  Spent: number;
  Clicked: number;
  aMPF: number;
  aMPC: number;
  buildings: { locked: boolean; amount: number; upgrades: boolean[] }[];
  updatedAt: number;

  constructor(player: Player, roomName: string) {
    this.address = player.address;
    this.roomName = roomName;

    this.cookies = player.cookies;
    this.Clicked = player.cookieStats.Clicked;
    this.Earned = player.cookieStats.Earned;
    this.Spent = player.cookieStats.Spent;

    this.aMPC = player.aMPC;
    this.aMPF = player.aMPF;

    this.buildings = player.buildings.map((b) => ({
      locked: b.locked,
      amount: b.amount,
      upgrades: b.upgrades.map((u) => u.owned),
    }));

    this.updatedAt = Date.now();
  }
}

export default PlayerClass;
