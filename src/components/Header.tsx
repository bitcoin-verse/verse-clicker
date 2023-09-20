import React, { FC } from "react";
import { Web3Button } from "@web3modal/react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Header: FC = () => {
  const dispatch = useDispatch();

  useAccount({
    onConnect: ({ address, connector, isReconnected }) => {
      console.log("Connected", { address, connector, isReconnected });
      if (!address) return;
      dispatch({ type: "GET_SAVE", payload: address });
    },
    onDisconnect: () => {
      console.log("Disconnected");
      dispatch({ type: "RESET_GAME" });
    },
  });

  return (
    <StyledHeader>
      <h1>Verse Clicker</h1>
      <Web3Button />
    </StyledHeader>
  );
};

export default Header;
