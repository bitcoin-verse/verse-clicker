import React, { FC } from "react";

import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import Particles from "../components/Particles";
import { useTrackedState } from "../context/store";

const Main: FC = () => {
  const { gameMode } = useTrackedState();

  return (
    <Layout>
      {gameMode !== "LunarNewYear" && <Particles />}
      <NotificationModal />
      <Header />
      <GameBoard />
      <Footer />
    </Layout>
  );
};

export default Main;
