import React from "react";
import { memo } from "react-tracked";

import { useTrackedState } from "../../../context/store";
import { useAccount } from "wagmi";
import { Header, LeaderboardContent, LeaderboardWrapper } from "./styled";

import Row from "./Row";

const Leaderboard = memo(() => {
  const { address } = useAccount();
  const { leaderboardAddresses, leaderboardStats } = useTrackedState();

  return (
    <LeaderboardWrapper>
      <Header>
        <div></div>
        <div>Address</div>
        <div>Clicks</div>
        <div>Earned</div>
      </Header>

      <LeaderboardContent>
        {leaderboardAddresses?.map((addr, index) => {
          const item = leaderboardStats[index];

          if (index > 25) {
            if (addr === address) {
              return (
                <Row
                  key={addr}
                  address={addr}
                  index="..."
                  isUser={addr === address}
                  stats={item}
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
              stats={item}
            />
          );
        })}
      </LeaderboardContent>
    </LeaderboardWrapper>
  );
});

export default Leaderboard;
