import React, { useEffect } from "react";

import { useDispatch, useTrackedState } from "../context/store";
import styled from "styled-components";
import { useAccount } from "wagmi";
import truncateEthAddress from "../helpers/truncateEthAddress";
import { formatNumber } from "../helpers/formatNumber";

const LeaderboardWrapper = styled.div`
  margin: auto;
  margin-top: 3rem;
  max-width: 50rem;
  width: 100%;
`;

const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border-radius: 1rem;
  overflow: hidden;

  tr:nth-of-type(even) {
    background: rgba(0, 0, 0, 0.7);
  }

  tr:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.5);
  }

  td:not(:first-child),
  th:not(:first-child) {
    text-align: right;
  }

  th {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    background: none;
  }

  tr {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 2.5fr 1.5fr 1.5fr;
  }

  td,
  th {
    padding: 1rem 0.5rem;
    text-align: left;
    text-wrap: nowrap;
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
      <h2>Leaderboards</h2>
      <Table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Earned</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((item) => {
            return (
              <tr key={item.address}>
                <td>
                  {truncateEthAddress(item.address)}
                  {item.address === address ? " 🌟" : ""}
                </td>
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
