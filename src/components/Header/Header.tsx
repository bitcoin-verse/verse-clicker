import React, { FC } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { useDispatch } from "../../context/store";
import verseClicker from "../../assets/verse-clicker.png";
import Stats from "./Stats";
import ConnectButton from "./ConnectButton";

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  grid-template-areas: "logo connect" "stats stats";
  align-items: center;
  max-width: 80rem;
  margin: auto;
  padding: 1.25rem;

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "logo stats connect";
  }
`;

const Logo = styled.img`
  height: 2rem;
  grid-area: logo;
`;

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();

  useAccount({
    onConnect: ({ address }) => {
      // console.log("Connected", { address, connector, isReconnected });
      if (!address) return;
      dispatch({ type: "GET_SAVE", payload: address });
    },
    onDisconnect: () => {
      // console.log("Disconnected");
      dispatch({ type: "RESET_GAME" });
    },
  });

  return (
    <StyledHeader>
      <Logo src={verseClicker} alt="Logo" />

      <Stats />
      {isConnected ? <ConnectButton /> : <div />}
    </StyledHeader>
  );
};

export default Header;
