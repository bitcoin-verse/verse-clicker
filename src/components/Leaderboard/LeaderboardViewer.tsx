import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { GameMode } from "../../context/reducers/network";
import EmptyLeaderboard from "./EmptyLeaderboard";
import LeaderboardContent from "./LeaderboardContent";
import { Header, LeaderboardWrapper } from "./styled";

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
      {leaderboardItems.length ? (
        <Header>
          <div />
          <div>Address</div>
          <div>Clicks</div>
          <div>Earned</div>
        </Header>
      ) : (
        <></>
      )}
      {leaderboardItems.length ? (
        <LeaderboardContent
          leaderboardItems={leaderboardItems}
          userAddress={address}
        />
      ) : (
        <EmptyLeaderboard />
      )}
    </LeaderboardWrapper>
  );
};

export default LeaderboardViewer;
