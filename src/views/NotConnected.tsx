import React from "react";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";

const NotConnected = () => {
  return (
    <Layout>
      <Header />
      <Loading />
    </Layout>
  );
};

export default NotConnected;
