import React from "react";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const NotConnected = () => {
  return (
    <Layout>
      <Header />
      <Loading />
      <Footer />
    </Layout>
  );
};

export default NotConnected;
