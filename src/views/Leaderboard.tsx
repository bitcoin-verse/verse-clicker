import React, { FC, Suspense, lazy, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import lunarIconSrc from "../assets/red-envelope.png";
import clickmasIconSrc from "../assets/tree.png";
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
  height: 1.875rem;
  width: 1.875rem;
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
      icon: <Image src={clickmasIconSrc} />,
      tags: ["Campaign"],
    },
    {
      label: "Lunar New Year",
      value: "LunarNewYear",
      icon: <Image src={lunarIconSrc} />,
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

  const isValidGameMode = (option: string | null) =>
    GAME_MODES.some((gm) => gm.value === option);

  const defaultGameMode =
    GAME_MODES.find((gm) => gm.value === searchParams.get("option"))?.value ||
    "Ethereum";

  const [gameMode, setGameMode] = useState<GameMode>(defaultGameMode);

  useEffect(() => {
    const option = searchParams.get("option");
    if (option !== gameMode && isValidGameMode(option)) {
      setGameMode(option as GameMode);
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ ...searchParams, option: gameMode }, { replace: true });
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
