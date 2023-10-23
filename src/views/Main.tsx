import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Particles from "../components/Particles";

import { useTrackedState } from "../context/store";
import useSocketEvents from "../hooks/useSocketEvents";

import WelcomeModal from "../components/WelcomeModal";

import Layout from "../components/Layout";

const Main: FC = () => {
  const { player } = useTrackedState();
  const { loading } = useSocketEvents();

  const hasCookies = player.cookies > 1;

  return (
    <Layout>
      <WelcomeModal />
      {hasCookies && <Particles />}
      <Header />
      {!loading && <GameBoard />}
      <Footer />
    </Layout>
  );
};

export default Main;
