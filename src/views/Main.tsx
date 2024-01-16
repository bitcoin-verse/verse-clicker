import React, { FC, Suspense, lazy } from "react";

import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import NotificationModal from "../components/NotificationModal/NotificationModal";

const Particles = lazy(() => import("../components/Particles"));

const Main: FC = () => {
  return (
    <Layout>
      <Suspense>
        <Particles />
      </Suspense>
      <NotificationModal />
      <Header />
      <GameBoard />
      <Footer />
    </Layout>
  );
};

export default Main;
