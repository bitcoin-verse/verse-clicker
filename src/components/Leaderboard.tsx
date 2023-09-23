import React, { useEffect } from "react";

import { useDispatch, useTrackedState } from "../context/store";
import styled from "styled-components";
import { useAccount } from "wagmi";
import truncateEthAddress from "../helpers/truncateEthAddress";
import { formatNumber } from "../helpers/formatNumber";
import { H4 } from "./H4";

const LeaderboardWrapper = styled.div`
  margin: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  background: #163756;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Table = styled.table`
  margin-top: 1rem;
  border-collapse: collapse;

  th {
    font-size: 0.75rem;
    font-weight: 600;
    color: #899bb5;
    text-align: right;
  }

  th:nth-child(1),
  th:nth-child(2),
  td:nth-child(1),
  td:nth-child(2) {
    text-align: left;
  }

  td {
    text-align: right;
    //styleName: Body 3;
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0.5rem 0;
  }
  tr {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 0.5fr 2.5fr 1.5fr 1.5fr;
  }
`;

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { address } = useAccount();
  const { leaderboard } = useTrackedState();
  useEffect(() => {
    dispatch({ type: "GET_LEADERBOARD" });
  }, []);

  return (
    <LeaderboardWrapper>
      <H4>Leaderboards</H4>
      <Table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Earned</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((item, index) => {
            return (
              <tr key={item.address}>
                <td>
                  {index + 1} {item.address === address ? " 🌟" : ""}
                </td>
                <td>{truncateEthAddress(item.address)}</td>
                <td>{formatNumber(Number(item.earned))}</td>
                <td>{formatNumber(Number(item.clicked))}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </LeaderboardWrapper>
  );
};

export default Leaderboard;
