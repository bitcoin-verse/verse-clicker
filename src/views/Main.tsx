import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Particles from "../components/Particles";

import { useTrackedState } from "../context/store";

import WelcomeModal from "../components/WelcomeModal";

import Layout from "../components/Layout";

const Main: FC = () => {
  const { player } = useTrackedState();

  const hasCookies = player.cookies > 1;

  return (
    <Layout>
      <WelcomeModal />
      {hasCookies && <Particles />}
      <Header />
      <GameBoard />
      <Footer />
    </Layout>
  );
};

export default Main;
