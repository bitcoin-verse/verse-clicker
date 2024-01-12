import React from "react";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
import { useTrackedState } from "../context/store";

const NotConnected = () => {
  const { gameMode } = useTrackedState();

  return (
    <Layout>
      {gameMode !== "LunarNewYear" && <Particles />}
      <Header />
      <Loading />
      <Footer />
    </Layout>
  );
};

export default NotConnected;
