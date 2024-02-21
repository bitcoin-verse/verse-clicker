import React, { FC } from "react";

import Row from "./Row";
import { StyledLeaderboardContent } from "./styled";

interface LeaderboardItem {
  address: string;
  stats: {
    Clicked: number;
    Earned: number;
    Spent: number;
  };
}

interface LeaderboardContentProps {
  leaderboardItems: LeaderboardItem[];
  userAddress?: string;
}

const LeaderboardContent: FC<LeaderboardContentProps> = ({
  leaderboardItems,
  userAddress,
}) => {
  return (
    <StyledLeaderboardContent>
      {leaderboardItems.map(({ address, stats }, index) => {
        const isUser = address === userAddress;
        const indexDisplay = index >= 25 && isUser ? "..." : index + 1;
        return (
          <Row
            key={address}
            address={address}
            index={indexDisplay.toString()}
            isUser={isUser}
            stats={stats}
          />
        );
      })}
    </StyledLeaderboardContent>
  );
};

export default LeaderboardContent;
