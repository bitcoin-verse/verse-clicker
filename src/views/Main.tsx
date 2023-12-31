import React, { FC } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Particles from "../components/Particles";

import NotificationModal from "../components/NotificationModal/NotificationModal";

import Layout from "../components/Layout";

const Main: FC = () => {
  return (
    <Layout>
      <Particles />
     
      <NotificationModal />
      <Header />
      <GameBoard />
      <Footer />
    </Layout>
  );
};

export default Main;
