import React, { FC, Suspense, lazy, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import clickmasIconSrc from "../assets/clickmas-icon.png";
import lunarIconSrc from "../assets/lunar-icon.png";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Ethereum from "../components/Icons/Ethereum";
import Matic from "../components/Icons/Matic";
import Layout from "../components/Layout";
import LeaderboardViewer from "../components/Leaderboard/LeaderboardViewer";
import { GameMode } from "../context/reducers/network";
import { isDev } from "../helpers/links";

const Particles = lazy(() => import("../components/Particles"));

const Image = styled.img`
  grid-area: img;
  height: 30px;
  width: 30px;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem;
`;

const Leaderboard: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const BASE_GAME_MODES: Array<{
    label: string;
    value: GameMode;
    icon?: React.ReactNode;
    tags?: string[];
  }> = [
    { label: "Ethereum", value: "Ethereum", icon: <Ethereum /> },
    { label: "Polygon", value: "Polygon", icon: <Matic /> },
    {
      label: "Christmas",
      value: "Christmas",
      icon: <Image src={lunarIconSrc} />,
      tags: ["Campaign"],
    },
    {
      label: "Lunar New Year",
      value: "LunarNewYear",
      icon: <Image src={clickmasIconSrc} />,
      tags: ["Campaign"],
    },
  ];

  const DEV_GAME_MODES: Array<{
    label: string;
    value: GameMode;
    icon?: React.ReactNode;
    tags?: string[];
  }> = [
    { label: "Goerli", value: "Goerli", icon: <Ethereum /> },
    { label: "Sepolia", value: "Sepolia", icon: <Ethereum /> },
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

  return (
    <Layout>
      <Suspense>
        <Particles />
      </Suspense>
      <Header />
      <LeaderboardViewer
        gameModes={GAME_MODES}
        setGameMode={setGameMode}
        selectedGameMode={gameMode}
      />
      <Footer />
    </Layout>
  );
};

export default Leaderboard;
