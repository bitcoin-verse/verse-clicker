import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { CURRENT_CAMPAIGN } from "../../constants";
import Row from "../Sidebar/Leaderboard/Row";
import {
  LeaderboardContent,
  LeaderboardWrapper,
  TableHeader,
} from "../Sidebar/Leaderboard/styled";

const FinalLeaderboard = () => {
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
          }leaderboard/${CURRENT_CAMPAIGN}`,
        );

        setLeaderboardItems(data.players);
      } catch (error) {
        console.log("error getting leaderboard", error);
      }
    };

    getLeaderboard();
  }, []);

  return (
    <LeaderboardWrapper>
      <TableHeader>
        <div />
        <div>Address</div>
        <div>Clicks</div>
        <div>Earned</div>
      </TableHeader>
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

export default FinalLeaderboard;
