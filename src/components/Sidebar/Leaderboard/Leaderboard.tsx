import React, { useEffect, useState } from "react";
import { memo } from "react-tracked";

import { useTrackedState } from "../../../context/store";
import { useAccount } from "wagmi";
import {
  Header,
  LeaderboardContent,
  LeaderboardWrapper,
  LoadingBar,
} from "./styled";

import Row from "./Row";

const Leaderboard = memo(() => {
  const { address } = useAccount();
  const { leaderboardAddresses, leaderboardStats, leaderboardUpdated } =
    useTrackedState();

  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    if (!leaderboardUpdated) return;

    const calcTime = () => {
      const dateUpdated = new Date(leaderboardUpdated).getTime();
      const dateNow = Date.now();
      const diff = dateNow - dateUpdated;
      setUpdated(diff / 1000);
    };

    calcTime();
    const interval = setInterval(calcTime, 50);

    return () => {
      clearInterval(interval);
    };
  }, [leaderboardUpdated]);

  return (
    <LeaderboardWrapper>
      <LoadingBar $percent={(updated / 60) * 100 || 0} />
      <Header>
        <div />
        <div>Address</div>
        <div>Clicks</div>
        <div>Earned</div>
      </Header>

      <LeaderboardContent>
        {leaderboardAddresses?.map((addr, index) => {
          const item = leaderboardStats[index];

          if (index >= 25) {
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
