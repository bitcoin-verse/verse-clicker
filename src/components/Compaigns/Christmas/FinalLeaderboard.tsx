import React, { useEffect, useState } from "react";
import {
  Header,
  LeaderboardContent,
  LeaderboardWrapper,
} from "../../Sidebar/Leaderboard/styled";
import Row from "../../Sidebar/Leaderboard/Row";
import { useAccount } from "wagmi";
import axios from "axios";

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
          }leaderboard/Christmas`,
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

export default FinalLeaderboard;
