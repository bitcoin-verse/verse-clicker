import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Particles from "../components/Particles";

import WelcomeModal from "../components/WelcomeModal";

import Layout from "../components/Layout";

const Main: FC = () => {
  return (
    <Layout>
      <Particles />
      <WelcomeModal />
      <Header />
      <GameBoard />
      <Footer />
    </Layout>
  );
};

export default Main;
