import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { GameMode } from "../../context/reducers/network";
import Row from "./Row";
import { Header, LeaderboardContent, LeaderboardWrapper } from "./styled";

interface Props {
  gameMode: GameMode;
}

const LeaderboardViewer: FC<Props> = ({ gameMode }) => {
  const { address } = useAccount();

  const [leaderboardItems, setLeaderboardItems] = useState<
    {
      address: string;
      stats: {
        Clicked: number;
        Earned: number;
        Spent: number;
      };
    }[]
  >([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const { data } = await axios.get(
          `${
            process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
          }leaderboard/${gameMode}`,
        );

        setLeaderboardItems(data.players);
      } catch (error) {
        console.log("error getting leaderboard", error);
      }
    };

    getLeaderboard();
  }, [gameMode]);

  return (
    <LeaderboardWrapper>
      <Header>
        <div />
        <div>Address</div>
        <div>Clicks</div>
        <div>Earned</div>
      </Header>
      <LeaderboardContent>
        {leaderboardItems?.map(({ address: addr, stats }, index) => {
          if (index >= 25) {
            if (addr === address) {
              return (
                <Row
                  key={addr}
                  address={addr}
                  index="..."
                  isUser={addr === address}
                  stats={stats}
                />
              );
            }

            return null;
          }

          return (
            <Row
              key={addr}
              address={addr}
              index={index + 1}
              isUser={addr === address}
              stats={stats}
            />
          );
        })}
      </LeaderboardContent>
    </LeaderboardWrapper>
  );
};

export default LeaderboardViewer;
