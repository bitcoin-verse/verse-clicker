import React, { FC, Suspense, lazy, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import LeaderboardViewer from "../components/Leaderboard/LeaderboardViewer";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import Tabs, { TabButton } from "../components/Tabs";
import { GameMode } from "../context/reducers/network";
import { isDev } from "../helpers/links";

const Particles = lazy(() => import("../components/Particles"));

const Leaderboard: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const BASE_GAME_MODES: Array<{ label: string; value: GameMode }> = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
    { label: "Christmas", value: "Christmas" },
    { label: "Lunar New Year", value: "LunarNewYear" },
  ];

  const DEV_GAME_MODES: Array<{ label: string; value: GameMode }> = [
    { label: "Goerli", value: "Goerli" },
    { label: "Sepolia", value: "Sepolia" },
  ];

  const GAME_MODES: Array<{ label: string; value: GameMode }> = isDev
    ? [...BASE_GAME_MODES, ...DEV_GAME_MODES]
    : [...BASE_GAME_MODES];

  const defaultGameMode =
    GAME_MODES.find((gm) => gm.value === searchParams.get("option"))?.value ||
    "Ethereum";

  const [gameMode, setGameMode] = useState<GameMode>(defaultGameMode);

  useEffect(() => {
    setSearchParams({ ...searchParams, option: gameMode });
  }, [gameMode]);

  const TabsContainer = styled.div`
    margin: 20px auto;
    z-index: 1000;
  `;

  return (
    <Layout>
      <Suspense>
        <Particles />
      </Suspense>
      <NotificationModal />
      <Header />
      <TabsContainer>
        <Tabs
          center
          mobileVersion
          tabs={GAME_MODES.map((button, i) => (
            <TabButton
              key={i}
              $mobileVersion
              $isSelected={gameMode === button.value}
              type="button"
              onClick={() => setGameMode(button.value)}
            >
              {button.label}
            </TabButton>
          ))}
        />
      </TabsContainer>
      <LeaderboardViewer gameMode={gameMode} />
      <Footer />
    </Layout>
  );
};

export default Leaderboard;
