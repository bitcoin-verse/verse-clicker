import React, { FC, useEffect, useState } from "react";
import { useSocketCtx } from "../context/SocketContext";
import ConnectButton from "../components/Header/ConnectButton";
import { useAccount, useNetwork } from "wagmi";
import { Web3Button } from "@web3modal/react";
import buildings from "../context/buildings";
import { formatNumber } from "../helpers/formatNumber";

type Player = {
  cookies: number;
  cps: number;
  cpc: number;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
};

type Leadeerboard = {
  address: string;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}[];

const V2: FC = () => {
  const { socket, isConnected: isSocketConnected } = useSocketCtx();
  const [playerData, setPlayerData] = useState<Player>();
  const [leaderboard, setLeaderBoard] = useState<Leadeerboard>([]);
  const { chain } = useNetwork();

  const [loading, setLoading] = useState(true);

  const { isConnected, address, status } = useAccount({
    onConnect: ({ address: addr }) => {
      if (!addr) return;
      console.log("Web3 Connected");
    },
    onDisconnect: () => {
      setPlayerData(undefined);
      setLeaderBoard([]);
      console.log("Web3 Disconnected");
    },
  });

  useEffect(() => {
    if (status !== "connected" || !chain) return;
    setLoading(true);
    setPlayerData(undefined);
    setLeaderBoard([]);
    socket.disconnect();
    socket.connect();
    socket.emit("join", { address, chain: chain.name });
  }, [status, chain, address]);

  useEffect(() => {
    const onLeaderboard = (data: Leadeerboard) => {
      setLeaderBoard(data);
    };
    socket.on("leaderboard", onLeaderboard);

    return () => {
      socket.off("leaderboard", onLeaderboard);
    };
  }, []);

  useEffect(() => {
    const onBuildingsData = (
      data: {
        locked: boolean;
        cost: number;
        amount: number;
        multiplier: number;
        upgrades: boolean[];
      }[],
    ) => {
      console.log(data);

      buildings.forEach((b, i) => {
        b.amount = data[i].amount;
        b.cost = data[i].cost;
        b.locked = data[i].locked;
        b.multiplier = data[i].multiplier;
        b.upgrades.forEach((u, ui) => {
          u.owned = data[i].upgrades[ui];
        });
      });
    };

    socket.on("buildings_data", onBuildingsData);

    return () => {
      socket.off("buildings_data", onBuildingsData);
    };
  }, []);

  useEffect(() => {
    const onInfo = (data: Player) => {
      setLoading(false);
      console.log(data);
      setPlayerData(data);
    };

    socket.on("info", onInfo);

    return () => {
      socket.off("info", onInfo);
    };
  }, []);

  return (
    <div>
      {loading || !isSocketConnected ? (
        <div>Loading...</div>
      ) : (
        <div>{chain?.name}</div>
      )}
      <div style={{ fontSize: "2rem" }}>
        {formatNumber(playerData?.cookies) ?? "Loading"}
      </div>
      {isConnected ? <ConnectButton /> : <Web3Button />}
      <div>
        <div>stats</div>
        <div>cpc: {formatNumber(playerData?.cpc)}</div>
        <div>cps: {formatNumber(playerData?.cps)}</div>
        <div>earn: {formatNumber(playerData?.stats.Earned)}</div>
        <div>spent: {formatNumber(playerData?.stats.Spent)}</div>
        <div>clicked: {formatNumber(playerData?.stats.Clicked)}</div>
      </div>
      <button
        onClick={() => {
          socket.emit("click", 1);
        }}
      >
        Cookie
      </button>
      <button
        onClick={() => {
          socket.disconnect();
        }}
      >
        disconnect
      </button>

      <div>
        {buildings.map((building, bIndex) => (
          <div key={building.name}>
            <div>
              {building.name}: {building.amount}
            </div>
            <button
              onClick={() => {
                socket.emit("buy_building", { index: bIndex, amount: 1 });
                console.log("buy");
              }}
            >
              Buy ({formatNumber(building.cost)})
            </button>
            <div style={{ border: "1px black solid" }}>
              <div>Upgrades</div>
              {building.upgrades.map((u, uIndex) => {
                if (u.owned) return null;
                return (
                  <div key={`${u.name}${uIndex}`}>
                    <div>{u.name}</div>
                    <button
                      onClick={() => {
                        socket.emit("buy_upgrade", {
                          building: bIndex,
                          upgrade: uIndex,
                        });
                      }}
                    >
                      upg ({formatNumber(u.cost)})
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>Leaderboard</div>
        <ul>
          {leaderboard.map((l) => (
            <li
              key={l.address}
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(4,1fr)",
              }}
            >
              <div>{l.address}</div>
              <div>{l.stats.Clicked}</div>
              <div>{l.stats.Earned}</div>
              <div>{l.stats.Spent}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default V2;
