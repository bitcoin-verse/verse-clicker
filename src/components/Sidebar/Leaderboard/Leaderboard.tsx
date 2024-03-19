import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react-tracked";
import { useAccount } from "wagmi";

import { useTrackedState } from "../../../context/store";
import { formatSeconds } from "../../../helpers/formatSeconds";
import { Button } from "../../Button";
import Row from "./Row";
import {
  LeaderboardContent,
  LeaderboardWrapper,
  TableHeader,
  Timer,
} from "./styled";

const Leaderboard = memo(() => {
  const { address } = useAccount();
  const {
    leaderboardAddresses,
    leaderboardStats,
    leaderboardUpdated,
    gameMode,
  } = useTrackedState();

  const [updated, setUpdated] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!leaderboardUpdated) return;

    const calcTime = () => {
      const dateUpdated = new Date(leaderboardUpdated).getTime();
      const dateNow = Date.now();
      const diff = dateNow - dateUpdated;
      setUpdated(formatSeconds(diff / 1000) || "0s");
    };

    calcTime();
    const interval = setInterval(calcTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [leaderboardUpdated]);

  return (
    <LeaderboardWrapper>
      {updated && <Timer>Last update: {updated} ago</Timer>}
      <TableHeader>
        <div />
        <div>Address</div>
        <div>Earned</div>
        <div>Clicks</div>
      </TableHeader>

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
      <Button
        $design="secondary"
        type="button"
        onClick={() => navigate(`/leaderboard?option=${gameMode}`)}
      >
        View More
      </Button>
    </LeaderboardWrapper>
  );
});

export default Leaderboard;
