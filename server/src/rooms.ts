import Room, { RoomName } from "./classes/Room";

export const rooms: Record<RoomName, Room> = {
  Ethereum: new Room("Ethereum"),
  Goerli: new Room("Goerli"),
  Polygon: new Room("Polygon"),
};

export const roomMap: Record<string, RoomName> = {};

export const loadRooms = async () => {
  await rooms.Ethereum.loadPlayers();
  await rooms.Goerli.loadPlayers();
  await rooms.Polygon.loadPlayers();
};
