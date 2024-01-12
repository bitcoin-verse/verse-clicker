import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
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
