import React, { FC } from "react";
import { Web3Button } from "@web3modal/react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";
import verseClicker from "../assets/verse-clicker.png";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 222px;
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
      <Logo src={verseClicker} title="Verse Clicker" />
      <Web3Button />
    </StyledHeader>
  );
};

export default Header;
