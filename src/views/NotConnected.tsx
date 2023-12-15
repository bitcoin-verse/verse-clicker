import React from "react";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Particles from "../components/Particles";

const NotConnected = () => {
  return (
    <Layout>
      <Particles />
      <Header />
      <Loading />
      <Footer />
    </Layout>
  );
};

export default NotConnected;
