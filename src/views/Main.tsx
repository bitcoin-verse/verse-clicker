import React, { FC } from "react";

import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import Particles from "../components/Particles";

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
