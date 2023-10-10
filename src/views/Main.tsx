import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Particles from "../components/Particles";

import background from "../assets/background.png";
import { useAccount, useNetwork } from "wagmi";

// import verseCookie from "../../src/assets/verse-cookie.png";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch } from "../context/store";
import { Player } from "../context/reducers/player";
import Loading from "../components/Loading";
import { Leadeerboard } from "../context/reducers/leaderboard";
import { BuildingData } from "../context/reducers/building";
import WelcomeModal from "../components/WelcomeModal";

const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    color: white;
    letter-spacing: 0em;
  }
  
  button {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`;

const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: linear-gradient(
      180deg,
      #020a10 0%,
      #10518d 78.65%,
      #2975bd 93.75%,
      #4c97dd 99.48%
    ),
    linear-gradient(0deg, #030c14, #030c14);
  min-height: 100dvh;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

/* function createAnimation() {
  let styles = "";
  for (let i = 0; i < 50; i += 1) {
    styles += `
	  &:nth-child(${i}) {
      left: ${Math.floor(Math.random() * 98)}%;
      bottom: ${Math.floor(Math.random() * 100)}%;
      animation: float ${Math.floor(Math.random() * 20)}s infinite linear;
    }

	  @keyframes float {
      to {
         bottom: 150vh;
         transform: rotate(${Math.random() * 360}deg);
        }
    }
	`;
  }
  return css`
    ${styles}
  `;
}
 */
/* const FloatingImage = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 0px;
  ${createAnimation()}
  z-index: 0;
  opacity: 0.5;
`; */

const Main: FC = () => {
  const { chain } = useNetwork();

  const { socket, isConnected: isSocketConnected } = useSocketCtx();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { address, status } = useAccount({
    onConnect: ({ address: addr }) => {
      if (!addr) return;
      console.log("Web3 Connected");
    },
    onDisconnect: () => {
      setLoading(true);
      dispatch({ type: "RESET_GAME" });
      console.log("Web3 Disconnected");
    },
  });

  useEffect(() => {
    if (status !== "connected" || !chain) return;
    setLoading(true);
    dispatch({ type: "RESET_GAME" });
    socket.disconnect();
    socket.connect();
  }, [status, chain, address]);

  useEffect(() => {
    const onInfo = (payload: Player) => {
      setLoading(false);
      dispatch({ type: "SET_PLAYER_DATA", payload });
    };

    const onLeaderboard = (payload: Leadeerboard) => {
      dispatch({ type: "SET_LEADERBOARD", payload });
    };

    const onBuildingsData = (payload: BuildingData[]) => {
      dispatch({ type: "UPDATE_BUILDINGS", payload });
    };

    socket.on("info", onInfo);
    socket.on("leaderboard", onLeaderboard);
    socket.on("buildings_data", onBuildingsData);

    return () => {
      socket.off("info", onInfo);
      socket.off("leaderboard", onLeaderboard);
      socket.off("buildings_data", onBuildingsData);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <WelcomeModal />
      {(status !== "connected" || loading || !isSocketConnected) && <Loading />}

      <ContentsWrapper>
        {isConnected && hasCookies && <Particles />}
        <Header />
        <GameBoard />
        <Footer />
      </ContentsWrapper>
    </>
  );
};

export default Main;
